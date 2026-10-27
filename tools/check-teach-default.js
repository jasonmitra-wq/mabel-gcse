#!/usr/bin/env node
/* Task 2.5a check: in a headless browser, both ways into a lesson still open.
 *
 *   node tools/check-teach-default.js [lessonId ...]   (default p3-particle-model)
 *
 * For each lesson, with TEACH_FIRST as shipped (true) and again with it
 * served as false:
 *   - key present  → TEACH_FIRST true: the AI lesson opens; its "Show me the
 *     slides instead" link opens the slides; "Back to conversation" returns.
 *                  → TEACH_FIRST false: the slides open; the link in their
 *     header opens the AI lesson.
 *   - no key       → the slides open either way.
 * Calls to api.anthropic.com are answered with a stub; no API key is used.
 * Needs npm install (puppeteer-core) and local Chrome or Edge, as
 * tools/check-diagrams.js does. Exit code 1 if any check fails.
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const puppeteer = require('puppeteer-core');

const ROOT = path.resolve(__dirname, '..');
const TUTOR = require('../js/teach-core.js').tutorParams();   // the tutor model the site must send
const LESSONS = process.argv.slice(2).length ? process.argv.slice(2) : ['p3-particle-model'];
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png' };

function findBrowser() {
  return [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
  ].find(p => p && fs.existsSync(p));
}

function serve() {
  const server = http.createServer((req, res) => {
    const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html';
    const file = path.join(ROOT, rel);
    if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise(r => server.listen(0, '127.0.0.1', () => r(server)));
}

function subjectOf(id) {
  for (const f of fs.readdirSync(path.join(ROOT, 'data'))) {
    const m = f.match(/^(.+)-syllabus\.json$/); if (!m) continue;
    const d = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', f), 'utf8'));
    for (const t of Object.values(d.topics || {})) for (const s of t.subtopics || []) if (s.id === id) return { subject: m[1], name: s.name, topic: t.code };
  }
  throw new Error(`${id} not in any syllabus`);
}

const STUB = JSON.stringify({ id: 'stub', type: 'message', role: 'assistant', model: 'stub', stop_reason: 'end_turn',
  content: [{ type: 'text', text: 'Particles in a solid sit in a regular pattern. What do we call that pattern?' }],
  usage: { input_tokens: 1, output_tokens: 1 } });

const view = () => document.getElementById('teachThread') ? 'teach'
  : (document.querySelector('#lessonInner [onclick*="Lessons._nextStep"], #lessonInner [onclick*="backToTeach"]') ? 'slides' : 'other');

async function run() {
  const exe = findBrowser();
  if (!exe) { console.error('No Chrome or Edge found (set CHROME_PATH).'); process.exit(1); }
  const server = await serve();
  const base = `http://127.0.0.1:${server.address().port}/`;
  const browser = await puppeteer.launch({ executablePath: exe, headless: true });
  const results = [];
  const check = (label, ok, detail = '') => { results.push(ok); console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? ' — ' + detail : ''}`); };

  for (const teachFirst of [true, false]) {
    for (const withKey of [true, false]) {
      for (const id of LESSONS) {
        const { subject, name, topic } = subjectOf(id);
        const page = await browser.newPage();
        const errors = [], models = [];
        page.on('pageerror', e => errors.push(e.message));
        await page.setRequestInterception(true);
        page.on('request', req => {
          const u = req.url();
          if (u.startsWith('https://api.anthropic.com/')) {
            if (req.method() === 'POST') try { const b = JSON.parse(req.postData() || '{}'); models.push(JSON.stringify({ model: b.model, thinking: b.thinking })); } catch {}
            return req.respond({ status: 200, contentType: 'application/json', body: STUB, headers: { 'access-control-allow-origin': '*', 'access-control-allow-headers': '*', 'access-control-allow-methods': 'POST, OPTIONS' } });
          }
          if (!teachFirst && u.startsWith(base) && u.split('?')[0].endsWith('/js/lessons.js')) {
            const src = fs.readFileSync(path.join(ROOT, 'js/lessons.js'), 'utf8');
            if (!/const TEACH_FIRST = true;/.test(src)) throw new Error('TEACH_FIRST flag not found');
            return req.respond({ status: 200, contentType: 'text/javascript', body: src.replace('const TEACH_FIRST = true;', 'const TEACH_FIRST = false;') });
          }
          if (!u.startsWith(base) && !u.startsWith('data:')) return req.abort();
          req.continue();
        });
        await page.evaluateOnNewDocument(k => { try { localStorage.clear(); if (k) localStorage.setItem('mabel_api_key', 'stub-key-for-check'); } catch {} }, withKey);
        await page.goto(base + 'index.html', { waitUntil: 'networkidle0' });
        const tag = `${id} | TEACH_FIRST ${teachFirst} | key ${withKey ? 'yes' : 'no'}`;
        await page.evaluate((i, n, t, s) => Lessons.open(i, n, t, s), id, name, topic, subject);
        // A pilot lesson first offers the quick check ("Before your first Electricity lesson"):
        // tap "Not now: go to the lesson", as tools/site-test.js does, then check what opens.
        await new Promise(r => setTimeout(r, 400));
        const notNow = await page.evaluate(() => {
          const b = [...document.querySelectorAll('#lessonInner .pl-card button')].find(x => /Not now/.test(x.textContent));
          if (!b) return false;
          b.click();
          return true;
        });
        if (notNow) console.log(`      (${id}: the quick-check card was shown; tapped "Not now: go to the lesson")`);
        await page.waitForFunction(v => (new Function('return (' + v + ')()'))() !== 'other', { timeout: 10000 }, view.toString()).catch(() => {});
        const first = await page.evaluate(view);
        const want = withKey && teachFirst ? 'teach' : 'slides';
        check(`${tag}: opens ${want}`, first === want, `got ${first}`);
        if (withKey && first === 'teach') {
          await page.evaluate(() => Teach.showSlides());
          const second = await page.evaluate(view);
          check(`${tag}: "Show me the slides instead" opens slides`, second === 'slides', `got ${second}`);
          await page.evaluate(() => Lessons.backToTeach());
          await new Promise(r => setTimeout(r, 300));
          const third = await page.evaluate(view);
          check(`${tag}: "Back to conversation" returns to the AI lesson`, third === 'teach', `got ${third}`);
        } else if (withKey && first === 'slides') {
          const label = await page.evaluate(() => (document.querySelector('[onclick*="backToTeach"]') || {}).textContent || '');
          check(`${tag}: slides header links to the AI lesson`, /AI tutor/.test(label), `link "${label.trim()}"`);
          await page.evaluate(() => Lessons.backToTeach());
          await new Promise(r => setTimeout(r, 300));
          const second = await page.evaluate(view);
          check(`${tag}: that link opens the AI lesson`, second === 'teach', `got ${second}`);
        }
        if (models.length) {
          const want = JSON.stringify({ model: TUTOR.model, thinking: TUTOR.thinking });
          check(`${tag}: AI lesson calls use the tutor model`, models.every(m => m === want), [...new Set(models)].join(', '));
        }
        check(`${tag}: no page errors`, errors.length === 0, errors.join('; '));
        await page.close();
      }
    }
  }
  await browser.close();
  server.close();
  const failed = results.filter(r => !r).length;
  console.log(`\n${results.length - failed}/${results.length} checks passed.`);
  process.exit(failed ? 1 : 0);
}

run().catch(e => { console.error(e); process.exit(1); });
