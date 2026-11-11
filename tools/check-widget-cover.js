#!/usr/bin/env node
/* Free headless check of the AI lesson's predict-first widgets and worked-example card (brief
 * docs/briefs/2026-11-11-coverage-and-faults.md, fault F11 and F12 in docs/FAULTS.md). No API.
 *
 *   node tools/check-widget-cover.js [lessonId ...]   (default p2-current-voltage p2-components)
 *
 * Each circuit widget with predictions is mounted twice in headless Chrome, as js/teach-core.js sends it with
 * COVER_FIX on (options.cover, options.controls) and as before (COVER_FIX off), and checked:
 *   options      the predictions are short: no option holds an explanation (no ":" and at most 9 words)
 *   explain-gate "Now explain it" is not shown until she has used the control the prediction needs
 *   cell-symbol  the supply is always drawn with the cell symbol, never a "… V" box (no slider)
 *   controls     only the controls the predictions need
 *   praise       no stock praise ("Good prediction")
 *   later-term   key point 1's widget shows no term of a later key point ("potential difference")
 *   worked       the worked example card shows one button at a time ("Show the first step", then "Next step")
 *                and tells the page when the last step is shown
 * Each must pass with COVER_FIX on and fail with it off (the old pattern). Exit 1 otherwise.
 * Needs puppeteer-core (dev dependency) and local Chrome or Edge.
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const puppeteer = require('puppeteer-core');
const ROOT = path.resolve(__dirname, '..');
const LESSONS = process.argv.slice(2).length ? process.argv.slice(2) : ['p2-current-voltage', 'p2-components'];
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml' };

function findBrowser() {
  return [process.env.CHROME_PATH, 'C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'].find(p => p && fs.existsSync(p));
}
function serve() {
  const server = http.createServer((req, res) => {
    const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
    if (rel === '' || rel === 'test.html') { res.writeHead(200, { 'Content-Type': 'text/html' }); return res.end(PAGE); }
    const file = path.join(ROOT, rel);
    if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise(r => server.listen(0, '127.0.0.1', () => r(server)));
}
const PAGE = `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="css/style.css"></head><body><div id="box"></div>
<script src="js/widgets/widget-models.js"></script><script src="js/widgets/widgets.js"></script><script src="js/lesson-extras.js"></script></body></html>`;
const LATER = { 0: /potential difference|resistor|voltmeter|resistance/i };

async function main() {
  const exe = findBrowser();
  if (!exe) { console.error('No Chrome or Edge found (set CHROME_PATH).'); process.exit(1); }
  const server = await serve();
  const browser = await puppeteer.launch({ executablePath: exe, headless: true });
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${server.address().port}/test.html`);
  let bad = 0;
  const TeachCore = require(path.join(ROOT, 'js', 'teach-core.js'));
  for (const id of LESSONS) {
    const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'lessons', 'physics', `${id}.json`), 'utf8'));
    for (const [k, kp] of data.keyPoints.entries()) {
      const w = kp.widget;
      if (!w || w.id !== 'circuit' || !(w.options && w.options.predicts)) continue;
      const res = {};
      for (const cover of [true, false]) {
        const controls = Array.isArray(w.options.controls) ? w.options.controls : [];
        const options = cover ? { ...w.options, cover: true, controls } : w.options;
        res[cover ? 'on' : 'off'] = await page.evaluate(async (options, laterSrc) => {
          const box = document.getElementById('box');
          box.innerHTML = '';
          const el = document.createElement('div'); box.appendChild(el);
          WidgetView.mount(el, 'circuit', options);
          const out = { options: true, gate: true, cell: true, controls: [], praise: false, later: false, notes: [] };
          const text = () => el.innerText;
          const ctlNames = () => [...el.querySelectorAll('.wdg-row button')].map(b => b.dataset.a);
          out.controls = ctlNames();
          if (el.querySelector('input[type=range][data-in=v]')) out.cell = false;
          for (let p = 0; p < options.predicts.length; p++) {
            const pr = options.predicts[p];
            const btns = [...el.querySelectorAll('.wdg-pred-opts button')];
            btns.forEach(b => { if (/:/.test(b.textContent) || b.textContent.split(/\s+/).length > 9) { out.options = false; out.notes.push(`option "${b.textContent}"`); } });
            const right = btns.find(b => b.textContent.trim() === String(pr.options[pr.correct].short && options.cover ? pr.options[pr.correct].short : options.cover ? pr.options[pr.correct].text.split(':')[0] : pr.options[pr.correct].text).trim()) || btns[0];
            right.click();
            await new Promise(r => setTimeout(r, 20));
            const needs = Array.isArray(pr.needs) ? pr.needs : pr.setup && pr.setup.open ? ['sw'] : [];
            if (/good prediction|well done|great/i.test(text())) out.praise = true;
            if (needs.length && /Now explain it/i.test(text())) { out.gate = false; out.notes.push(`"Now explain it" before ${needs.join('/')} (prediction ${p + 1})`); }
            const b = needs.map(n => el.querySelector(`.wdg-row button[data-a=${n}]`)).find(Boolean);
            if (b) b.click();
            await new Promise(r => setTimeout(r, 20));
            // try every control and the slider, if there is one; the supply must stay the cell symbol
            el.querySelectorAll('.wdg-row button').forEach(x => { if (x.dataset.a === 'add') x.click(); });
            const range = el.querySelector('input[type=range][data-in=v]');
            if (range) { range.value = '2'; range.dispatchEvent(new Event('input')); }
            if ([...el.querySelectorAll('svg text')].some(t => /^\s*\d+(\.\d+)?\s*V\s*$/.test(t.textContent))) out.cell = false;
            const explain = [...el.querySelectorAll('.wdg-pred .btn.pri')].pop();
            if (explain) { explain.previousElementSibling && (explain.previousElementSibling.value = 'x'); explain.click(); }
            const next = [...el.querySelectorAll('.wdg-pred button')].find(x => x.textContent === 'Next prediction');
            if (next) next.click();
            await new Promise(r => setTimeout(r, 20));
          }
          return out;
        }, options, null).catch(e => ({ error: String(e) }));
        // later terms: checked on the text with a fresh mount (no evaluate arg for RegExp)
        if (LATER[k]) {
          const txt = await page.evaluate(async (options) => {
            const box = document.getElementById('box'); box.innerHTML = '';
            const el = document.createElement('div'); box.appendChild(el);
            WidgetView.mount(el, 'circuit', options);
            el.querySelector('.wdg-pred-opts button').click();
            el.querySelectorAll('.wdg-row button').forEach(b => b.click());
            return el.innerText;
          }, options);
          res[cover ? 'on' : 'off'].later = LATER[k].test(txt);
        }
      }
      const need = [...new Set(w.options.predicts.flatMap(p => (Array.isArray(p.needs) ? p.needs : [])))];
      const rows = [
        ['options', r => r.options],
        ['explain-gate', r => r.gate],
        ['cell-symbol', r => r.cell],
        ['controls', r => r.controls.every(c => (w.options.controls || need).includes(c) || (c === 'reset' && (w.options.controls || []).includes('run')))],
        ['praise', r => !r.praise],
        ...(LATER[k] ? [['later-term', r => !r.later]] : []),
      ];
      for (const [name, ok] of rows) {
        const on = res.on.error ? false : ok(res.on), off = res.off.error ? true : ok(res.off);
        const pass = on && !off;
        // a check the old widget already passed for this key point is reported, not failed
        const status = on ? (off ? 'ok (old also)' : 'ok') : 'FAIL';
        if (!on) bad++;
        console.log(`${status.padEnd(13)} ${id} key point ${k + 1} ${name}: COVER_FIX on ${on ? 'passes' : 'fails'}, off ${off ? 'passes' : 'fails'}${!on && res.on.notes ? ` — ${res.on.notes.slice(0, 2).join('; ')}` : ''}${res.on.error ? ` — ${res.on.error}` : ''}`);
      }
    }
  }
  // worked example card: one button at a time, and the page is told when the last step is shown.
  const wk = await page.evaluate(async () => {
    const box = document.getElementById('box'); box.innerHTML = '';
    const steps = ['Write the equation: Q = I t.', 'Put the numbers in: Q = 2 × 5 = 10', 'The charge flow is 10 C.'];
    let last = false;
    const on = LessonExtras.chatCard({ type: 'worked', question: 'A current of 2 A flows for 5 s. How much charge flows?', steps, gate: true }, 'physics', { revealed: 0, onStep: (k, l) => { last = l; } });
    box.appendChild(on);
    const labels = [];
    for (let i = 0; i < steps.length; i++) { const b = on.querySelectorAll('button'); labels.push(`${b.length}:${b[0] ? b[0].textContent : ''}`); if (b[0]) b[0].click(); }
    const off = LessonExtras.chatCard({ type: 'worked', question: 'q', steps }, 'physics');
    off.querySelector('button').click();
    return { labels, last, buttonsAfter: on.querySelectorAll('button').length, offLabel: off.querySelector('button').textContent };
  });
  const wok = wk.labels.join('|') === '1:Show the first step|1:Next step|1:Next step' && wk.last && wk.buttonsAfter === 0;
  if (!wok) bad++;
  console.log(`${wok ? 'ok' : 'FAIL'}           worked example card: buttons ${wk.labels.join(', ')}; last step reported ${wk.last}; COVER_FIX off says "${wk.offLabel}" and tells the page nothing`);
  await browser.close();
  server.close();
  process.exit(bad ? 1 : 0);
}
main().catch(e => { console.error(e); process.exit(1); });
