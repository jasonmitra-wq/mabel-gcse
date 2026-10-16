#!/usr/bin/env node
/* Diagram render check — S4.
 *
 * Renders every diagrams/<subject>/*.svg in headless Chrome and flags text
 * that runs outside the viewBox or overlaps other text. Each SVG is drawn
 * inline at one pixel per viewBox unit, so the measured boxes include any
 * transforms and the real font metrics.
 *
 * Run from the repo root:   node tools/check-diagrams.js [subject ...]
 * Writes:                   tools/diagram-report.md
 * Exit code 1 if any diagram has a flagged item, else 0.
 *
 * Needs the dev dependency puppeteer-core (npm install) and a local Chrome
 * or Edge; set CHROME_PATH to use another browser. Dev tooling only: the
 * site never loads it. Fonts are the browser's defaults for the font-family
 * each SVG names, which can differ slightly from a phone's.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIAGRAMS = path.join(ROOT, 'diagrams');
const OVERRUN_TOL = 0.5;   // viewBox units a glyph box may poke past the edge
const OVERLAP_MIN = 2;     // square units of shared area before two labels count as overlapping

function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
  ];
  return candidates.find(p => p && fs.existsSync(p));
}

// Runs in the page: measure every <text> against the viewBox and each other.
function measure(tol, minArea) {
  const svg = document.querySelector('svg');
  const vb = svg.viewBox.baseVal;
  const box = svg.getBoundingClientRect();
  const sx = vb.width / box.width, sy = vb.height / box.height;
  const toUnits = r => ({
    x1: vb.x + (r.left - box.left) * sx, y1: vb.y + (r.top - box.top) * sy,
    x2: vb.x + (r.right - box.left) * sx, y2: vb.y + (r.bottom - box.top) * sy,
  });
  const texts = [...svg.querySelectorAll('text')]
    .filter(t => !t.closest('defs, symbol, clipPath, mask') && t.textContent.trim())
    .map(t => ({ label: t.textContent.trim().replace(/\s+/g, ' ').slice(0, 50), r: toUnits(t.getBoundingClientRect()) }))
    .filter(t => t.r.x2 > t.r.x1 && t.r.y2 > t.r.y1);
  const issues = [];
  for (const t of texts) {
    const out = [];
    if (t.r.x1 < vb.x - tol) out.push(`left by ${(vb.x - t.r.x1).toFixed(1)}`);
    if (t.r.y1 < vb.y - tol) out.push(`top by ${(vb.y - t.r.y1).toFixed(1)}`);
    if (t.r.x2 > vb.x + vb.width + tol) out.push(`right by ${(t.r.x2 - vb.x - vb.width).toFixed(1)}`);
    if (t.r.y2 > vb.y + vb.height + tol) out.push(`bottom by ${(t.r.y2 - vb.y - vb.height).toFixed(1)}`);
    if (out.length) issues.push({ kind: 'overrun', detail: `"${t.label}" past the ${out.join(', ')}` });
  }
  for (let i = 0; i < texts.length; i++) {
    for (let j = i + 1; j < texts.length; j++) {
      const a = texts[i].r, b = texts[j].r;
      const w = Math.min(a.x2, b.x2) - Math.max(a.x1, b.x1), h = Math.min(a.y2, b.y2) - Math.max(a.y1, b.y1);
      if (w > 0 && h > 0 && w * h >= minArea) {
        issues.push({ kind: 'overlap', detail: `"${texts[i].label}" and "${texts[j].label}" share ${(w * h).toFixed(0)} sq units` });
      }
    }
  }
  return { texts: texts.length, issues };
}

async function main() {
  let puppeteer;
  try { puppeteer = require('puppeteer-core'); }
  catch { console.error('puppeteer-core is not installed. Run: npm install'); process.exit(2); }
  const exe = findBrowser();
  if (!exe) { console.error('No Chrome or Edge found. Set CHROME_PATH.'); process.exit(2); }

  const want = process.argv.slice(2);
  const subjects = fs.readdirSync(DIAGRAMS).filter(s => fs.statSync(path.join(DIAGRAMS, s)).isDirectory())
    .filter(s => !want.length || want.includes(s));

  const browser = await puppeteer.launch({ executablePath: exe, headless: true });
  const page = await browser.newPage();
  const rows = [];
  try {
    for (const subject of subjects) {
      for (const f of fs.readdirSync(path.join(DIAGRAMS, subject)).filter(x => x.endsWith('.svg')).sort()) {
        const rel = `diagrams/${subject}/${f}`;
        const src = fs.readFileSync(path.join(DIAGRAMS, subject, f), 'utf8').replace(/<\?xml[^>]*>/, '');
        const vb = (src.match(/viewBox="([^"]+)"/) || [])[1];
        if (!vb) { rows.push({ rel, texts: 0, issues: [{ kind: 'no viewBox', detail: 'cannot check without a viewBox' }] }); continue; }
        const [, , w, h] = vb.trim().split(/[\s,]+/).map(Number);
        await page.setViewport({ width: Math.ceil(w) + 20, height: Math.ceil(h) + 20 });
        await page.setContent(`<!doctype html><html><body style="margin:0">${src}</body></html>`, { waitUntil: 'load' });
        // Draw at one pixel per viewBox unit, whatever width the file asks for.
        await page.evaluate((w, h) => {
          const s = document.querySelector('svg');
          s.setAttribute('width', w); s.setAttribute('height', h);
          s.style.display = 'block';
        }, w, h);
        await page.evaluate(() => document.fonts.ready);
        const r = await page.evaluate(measure, OVERRUN_TOL, OVERLAP_MIN);
        rows.push({ rel, ...r });
      }
    }
  } finally {
    await browser.close();
  }

  const count = k => rows.reduce((n, r) => n + r.issues.filter(i => i.kind === k).length, 0);
  const flagged = rows.filter(r => r.issues.length);
  const head = `Diagrams checked: ${rows.length} · flagged: ${flagged.length} · text overruns: ${count('overrun')} · text overlaps: ${count('overlap')}`;
  console.log(head);
  for (const r of flagged) console.log(`  ${r.rel}: ${r.issues.length}`);

  const md = ['# Diagram render report', '', `Generated ${new Date().toISOString().slice(0, 10)} by tools/check-diagrams.js (${path.basename(exe)}).`, '', head, ''];
  for (const r of rows) {
    md.push(`## ${r.rel}`, '', `${r.texts} text items. ${r.issues.length ? '' : 'No findings.'}`);
    for (const i of r.issues) md.push(`- **${i.kind}** — ${i.detail}`);
    md.push('');
  }
  fs.writeFileSync(path.join(ROOT, 'tools/diagram-report.md'), md.join('\n'));
  console.log('\nFull report: tools/diagram-report.md');
  process.exit(flagged.length ? 1 : 0);
}

main().catch(e => { console.error(e); process.exit(2); });
