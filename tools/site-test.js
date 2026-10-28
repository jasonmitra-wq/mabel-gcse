#!/usr/bin/env node
/* Website tester: a bored student uses the real site in a headless browser.
 *
 *   node tools/site-test.js --lesson <id>            # dry run: cost estimate only
 *   node tools/site-test.js --lesson <id> --run      # real run
 *   node tools/site-test.js --maths <M1..M6> [--run]
 *   node tools/site-test.js --pilot diagnostic [--run]   # the Electricity "Quick check before you start"
 *   --max-usd <n>   allow a run whose estimate is over $1; also a hard stop on actual spend
 *   --until-point-end   lesson mode: stop once the covered counter has moved and a
 *                   predict-first widget has been shown (brief 2026-10-24 key-point loop)
 *   --persona willing  lesson mode: the willing student of tools/bored-student.js (brief 2026-10-26
 *                   willing student): tries every question, a third wrong, 4 questions of her own, no
 *                   extras, never stops; taps Next where nothing is asked. Default: the bored student.
 *   --whole-lesson  lesson mode: the whole lesson (brief 2026-10-26 AI lesson order): up to
 *                   --max-turns exchanges (default 260); on a message that asks nothing and
 *                   offers Next, she taps Next 3 times in 4; each predict-first widget is
 *                   tried (a prediction tapped) and checked against its message's words
 *   --exit-script   lesson mode: she says "I'm tired" once (and taps the choice
 *                   buttons) and "bye, got to go" near the end (tools/bored-student.js exitScript)
 *
 * The site is served from the working copy on a local web server. The browser
 * gets the API key the way the app stores it (localStorage 'mabel_api_key',
 * js/app.js AI.saveKey), set before any page script runs. The key is never
 * printed or written, and a screen is never captured if it shows a key field
 * or the key itself.
 *
 * Lesson mode: home → "Revise a topic" → subject → topic → lesson, by clicks.
 * Checks the AI lesson opens by default where the lesson is in TEACH_ENABLED,
 * then holds the whole AI lesson through the real chat box, answering as the
 * bored student of tools/bored-student.js.
 *
 * Maths mode: home → "Revise a topic" → Maths → (warm-up, if offered) → topic
 * → "Take the topic test", then 5 questions as the bored student: sometimes
 * right, sometimes wrong, sometimes a hint, once the worked example, and the
 * last question left unfinished. A "right" answer is the value recomputed from
 * the question text by tools/maths-recompute.js (not the bank's stored answer),
 * so every acceptance or rejection is checked against an independent value.
 *
 * Screens: every new screen and every third exchange, at phone size (390×844)
 * and laptop size (1366×768), into tools/site-test-runs/<date>/<id>/.
 * Judge: claude-opus-5-5 gets the transcript and the screenshots and returns
 * JSON: broken, looks_wrong, would_quit, fixes.
 * PASS = nothing broken AND nothing in looks_wrong that stops her reading or
 * using the page (brief docs/briefs/2026-10-17-tutor-flow.md step 2; would_quit
 * is still reported but no longer fails the run. Before it: would_quit false
 * was also needed; before the brief of 2026-10-17, any looks_wrong item failed). The judge marks each
 * looks_wrong item stops_use true or false; an item without the mark (runs
 * judged before the rule) counts as stopping her.
 *   node tools/site-test.js --rescore [<run folder> ...]   # the pass rule again on saved runs (no calls); default every run
 *
 * Needs npm install (puppeteer-core, dev only) and local Chrome or Edge.
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const puppeteer = require('puppeteer-core');
const { apiKey } = require('./lib-key.js');
const Bored = require('./bored-student.js');
const Recompute = require('./maths-recompute.js');

const ROOT = path.resolve(__dirname, '..');
const OUT_ROOT = path.join(__dirname, 'site-test-runs');
const API = 'https://api.anthropic.com/v1';
const RATES = { 'claude-haiku-5-5': [0.1 / 1e6, 0.5 / 1e6], 'claude-haiku-4-5-20251001': [1 / 1e6, 5 / 1e6], 'claude-sonnet-5-5': [2 / 1e6, 10 / 1e6], 'claude-opus-5-5': [4 / 1e6, 20 / 1e6] };
// The site's tutor model, read from the shared code (js/teach-core.js TUTOR_SONNET);
// the site itself sends it, this is for the estimate and the cost split.
const TUTOR_MODEL = require('../js/teach-core.js').TUTOR_MODEL;
// The lesson's terms (key terms and basics), for the student's 'what does that mean' check
// (brief 2026-10-18 first-time learner, step 5). Same matching as js/teach-core.js.
function lessonTerms(data) {
  if (!data) return [];
  const core = require('../js/teach-core.js').create({ call: async () => '' });
  core.bind(data, core._buildPoints(data), null);
  return core._lessonTerms();
}
// Size only: switching isMobile or hasTouch makes puppeteer reload the page,
// which would lose the lesson in the middle of a run.
const PHONE = { width: 390, height: 844, deviceScaleFactor: 1 };
const LAPTOP = { width: 1366, height: 768, deviceScaleFactor: 1 };
const MAX_JUDGE_IMAGES = 80;
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };

function die(msg, code = 1) { console.error(msg); process.exit(code); }
let EXIT_SCRIPT = false;
let UNTIL_POINT_END = false;   // --until-point-end
let WHOLE_LESSON = null;        // --whole-lesson: { maxTurns }
let WILLING = false;            // --persona willing (brief 2026-10-26 willing student); bored is the default

// ---------- arguments ----------

function parseArgs(argv) {
  const a = { lesson: null, maths: null, run: false, maxUsd: null, rescore: null };
  for (let i = 0; i < argv.length; i++) {
    const v = argv[i];
    if (v === '--lesson') a.lesson = argv[++i];
    else if (v === '--maths') a.maths = argv[++i];
    else if (v === '--pilot') a.pilot = argv[++i];
    else if (v === '--run') a.run = true;
    else if (v === '--exit-script') a.exitScript = true;
    else if (v === '--until-point-end') a.untilPointEnd = true;
    else if (v === '--whole-lesson') a.wholeLesson = true;
    else if (v === '--persona') a.persona = argv[++i];
    else if (v === '--max-turns') a.maxTurns = Number(argv[++i]);
    else if (v === '--max-usd') a.maxUsd = Number(argv[++i]);
    else if (v === '--rescore') a.rescore = [];
    else if (a.rescore && !v.startsWith('--')) a.rescore.push(v);
    else die(`Unknown option ${v}`);
  }
  if (a.rescore) return a;
  if ([a.lesson, a.maths, a.pilot].filter(Boolean).length !== 1) die('Give exactly one of --lesson <id>, --maths <topic code> or --pilot diagnostic.');
  if (a.pilot && !require('../js/pilot/tests.js').TESTS[a.pilot]) die(`--pilot: no test ${a.pilot}`);
  if (a.maxUsd !== null && !(a.maxUsd > 0)) die('--max-usd needs a positive number');
  return a;
}

// ---------- site facts ----------

function syllabi() {
  const out = {};
  for (const f of fs.readdirSync(path.join(ROOT, 'data'))) {
    const m = f.match(/^(.+)-syllabus\.json$/);
    if (m) out[m[1]] = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', f), 'utf8'));
  }
  return out;
}

function findLesson(id) {
  for (const [subject, d] of Object.entries(syllabi())) {
    for (const [code, t] of Object.entries(d.topics || {})) {
      const st = (t.subtopics || []).find(s => s.id === id);
      if (st) {
        const file = path.join(ROOT, 'lessons', subject, id + '.json');
        return { subject, subjectLabel: d.label || subject, code, topicName: t.name, name: st.name,
                 data: fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : null };
      }
    }
  }
  die(`${id} is not in any data/*-syllabus.json`);
}

function teachEnabled() {
  const src = fs.readFileSync(path.join(ROOT, 'js/lessons.js'), 'utf8');
  const ids = re => { const m = src.match(re); return m ? [...m[1].matchAll(/'([^']+)'/g)].map(x => x[1]) : []; };
  const all = ids(/TEACH_ENABLED(?:_ALL)?\s*=\s*\[([^\]]*)\]/);
  const off = /TEACH_OFF_UNTIL_TESTED\s*=\s*true/.test(src) ? ids(/TESTER_FAILED\s*=\s*\[([^\]]*)\]/) : [];
  return all.filter(id => !off.includes(id));
}

// ---------- spend ----------

const spend = { usd: 0, calls: 0, browserCalls: 0, cap: 1, tutorUsd: 0 };
function addUsage(model, usage) {
  const [rin, rout] = RATES[model] || RATES['claude-haiku-4-5-20251001'];
  spend.usd += (usage.input_tokens || 0) * rin + (usage.output_tokens || 0) * rout;
}
function headers() { return { 'x-api-key': apiKey(), 'anthropic-version': '2023-06-01', 'content-type': 'application/json' }; }

async function apiCall(body, attempt = 0) {
  if (spend.usd >= spend.cap) throw new Error(`STOP: spend $${spend.usd.toFixed(4)} reached the $${spend.cap} cap`);
  const res = await fetch(`${API}/messages`, { method: 'POST', headers: headers(), body: JSON.stringify(body) });
  if ((res.status === 429 || res.status === 529) && attempt < 4) {
    await new Promise(r => setTimeout(r, 4000 * Math.pow(2, attempt)));
    return apiCall(body, attempt + 1);
  }
  if (!res.ok) {
    const text = await res.text();
    if (/credit|billing|balance/i.test(text)) die('API billing or credit error. Add credits, then type Continue.', 3);
    throw new Error(`HTTP ${res.status} ${text.slice(0, 300)}`);
  }
  const data = await res.json();
  spend.calls++;
  addUsage(body.model, data.usage);
  return data.content.filter(b => b.type === 'text').map(b => b.text).join('');
}

async function confirmModel(model) {
  const res = await fetch(`${API}/models/${model}`, { headers: headers() });
  if (!res.ok) die(`${model} not available: HTTP ${res.status}`);
  console.log(`Model ${model} confirmed.`);
}

// ---------- estimate ----------

function estimate(a) {
  // Images: laptop ≈ 1 400 tokens, phone ≈ 450; judge output assumed at 8 000 tokens.
  if (a.lesson) {
    const { data } = findLesson(a.lesson);
    const points = data ? (data.keyPoints || []).length : 4;
    const turns = a.wholeLesson ? (a.maxTurns || 260) : points * 6 + 4;
    const [tin, tout] = RATES[TUTOR_MODEL];
    // --whole-lesson: most steps are built in code (no tutor call) and about half are Next taps (no student call).
    const tutorShare = a.wholeLesson ? 0.4 : 1, studentShare = a.wholeLesson ? 0.5 : 1;
    const tutor = turns * tutorShare * 1.5 * (2200 * tin + 220 * tout) + points * (2500 * tin + 300 * tout);
    const student = turns * studentShare * (1500 / 1e6 + 60 * 5 / 1e6);
    const shots = Math.min(MAX_JUDGE_IMAGES / 2, 6 + Math.ceil(turns / 3));
    const judge = (shots * 1850 + turns * 2 * 120 + 6000) * 4 / 1e6 + 8000 * 20 / 1e6;
    return { what: `lesson ${a.lesson}`, turns, shots, usd: tutor + student + judge };
  }
  if (a.pilot) {
    // Pilot test mode: scripted answers, no tutor and no student model; the judge only.
    const n = require('../js/pilot/tests.js').TESTS[a.pilot].items.length;
    const shots = Math.min(MAX_JUDGE_IMAGES / 2, 8 + Math.ceil(n / 3));
    return { what: `pilot test ${a.pilot}`, turns: n, shots, usd: (shots * 1850 + n * 150 + 5000) * 4 / 1e6 + 8000 * 20 / 1e6 };
  }
  const steps = 5 * 3 + 5;
  const student = steps * (900 / 1e6 + 40 * 5 / 1e6);
  const shots = 12 + Math.ceil(steps / 3);
  const judge = (shots * 1850 + steps * 150 + 5000) * 4 / 1e6 + 8000 * 20 / 1e6;
  return { what: `maths ${a.maths}`, turns: steps, shots, usd: student + judge };
}

// ---------- server and browser ----------

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

function findBrowser() {
  return [process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'].find(p => p && fs.existsSync(p));
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

// ---------- run record ----------

class Run {
  constructor(id, dir) { this.id = id; this.dir = dir; this.log = []; this.shots = []; this.checks = []; this.n = 0; this.exchanges = 0; }
  say(line) { this.log.push(line); }
  check(what, ok, detail) { this.checks.push({ what, ok, detail }); this.say(`[check] ${ok ? 'OK' : 'BROKEN'}: ${what}${detail ? ' — ' + detail : ''}`); }
}

async function shoot(page, run, label) {
  // Never capture a key field or the key itself.
  const key = apiKey();
  const unsafe = await page.evaluate(k => {
    const field = document.getElementById('apiKeyInput');
    if (field && field.offsetParent) return 'key field on screen';
    if (k && document.body.innerText.includes(k)) return 'key text on screen';
    return '';
  }, key);
  if (unsafe) { run.say(`[screenshot skipped: ${unsafe}] ${label}`); return; }
  run.n++;
  const stem = `${String(run.n).padStart(2, '0')}-${label.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase().slice(0, 40)}`;
  for (const [size, vp] of [['phone', PHONE], ['laptop', LAPTOP]]) {
    await page.setViewport(vp);
    await sleep(350);
    const file = path.join(run.dir, `${stem}-${size}.png`);
    await page.screenshot({ path: file });
    run.shots.push({ file, label: `${stem}-${size}.png`, size });
  }
  await page.setViewport(PHONE);
  run.say(`[screenshot ${stem}-phone.png and ${stem}-laptop.png] ${label}`);
}

// Clicks the first visible element matching selector whose text contains text;
// with nameSel, the text of that child must start with text instead (card titles).
async function clickText(page, selector, text, what, nameSel = null) {
  const ok = await page.evaluate((sel, t, ns) => {
    const norm = s => s.replace(/\s+/g, ' ').trim().toLowerCase();
    const el = [...document.querySelectorAll(sel)].find(e => e.offsetParent && (ns
      ? norm((e.querySelector(ns) || {}).textContent || '').startsWith(norm(t))
      : norm(e.textContent).includes(norm(t))));
    if (!el) return false;
    el.scrollIntoView({ block: 'center' });
    el.click();
    return true;
  }, selector, text, nameSel);
  if (!ok) throw new Error(`could not find ${what} ("${text}")`);
  await sleep(900);
}

async function newPage(browser, base, run) {
  const page = await browser.newPage();
  await page.setViewport(PHONE);
  page.on('pageerror', e => run.say(`[page error] ${e.message}`));
  page.on('console', m => { if (m.type() === 'error') run.say(`[console error] ${m.text().slice(0, 200)}`); });
  page.on('response', async res => {
    if (!res.url().startsWith('https://api.anthropic.com/v1/messages') || res.request().method() !== 'POST') return;
    spend.browserCalls++;
    try {
      const j = await res.json();
      if (j.usage) {
        const before = spend.usd;
        addUsage(j.model, j.usage);
        if (j.model === TUTOR_MODEL) spend.tutorUsd += spend.usd - before;
      }
    } catch {}
  });
  const key = apiKey();
  await page.evaluateOnNewDocument(k => { try { localStorage.setItem('mabel_api_key', k); } catch {} }, key);
  await page.goto(base + 'index.html', { waitUntil: 'networkidle0' });
  return page;
}

// ---------- lesson mode ----------

async function lessonMode(page, run, id) {
  const L = findLesson(id);
  const student = WILLING
    ? Bored.makeWillingStudent({ lessonTitle: (L.data && L.data.title) || L.name, subject: L.subjectLabel, misconceptions: Bored.misconceptionLines(path.join(ROOT, 'tools', 'pilot', 'misconceptions.md')) })
    : Bored.makeStudent({ lessonTitle: (L.data && L.data.title) || L.name, subject: L.subjectLabel });
  let tutorMs = 0;   // time from her message to the tutor's reply on screen, summed
  const script = EXIT_SCRIPT ? Bored.exitScript() : null;
  let lastPointTurns = 0;
  const hist = [];
  const terms = lessonTerms(L.data);
  const newTermsFor = h => {
    const tutor = h.filter(x => x.who === 'tutor').map(x => x.text || '');
    const last = tutor.pop() || '', before = tutor.join('\n');
    return terms.filter(t => t.re.test(last) && !t.re.test(before)).map(t => t.term);
  };
  run.say(`Lesson ${id} (${L.subjectLabel} › ${L.topicName} › ${L.name}).`);
  await shoot(page, run, 'home');
  await clickText(page, '[onclick*="showSubjectPicker"]', 'Revise a topic', 'Revise a topic');
  await shoot(page, run, 'subjects');
  await clickText(page, '.mode-card', L.subjectLabel, 'subject card');
  await shoot(page, run, `topics-${L.subject}`);
  await clickText(page, '.topic-card', L.topicName, 'topic card', '.tc-name');
  // Shorter quick check (2026-10-26): opening Electricity first offers the quick check on its own screen.
  const offered = await page.evaluate(() => [...document.querySelectorAll('#main button')].some(b => /Not now: show the lessons/.test(b.textContent)));
  if (offered) {
    await shoot(page, run, 'quick-check-offer');
    run.say('[the quick check is offered on its own screen] tapped "Not now: show the lessons"');
    await clickText(page, '#main button', 'Not now: show the lessons', 'Not now: show the lessons');
  }
  await shoot(page, run, `lessons-${L.code}`);
  await clickText(page, '.subtopic-card', L.name, 'lesson card', '.st-name');
  // Runbook v3 A4: a lesson whose prerequisites come from lessons she has not
  // opened starts with the "Words from earlier lessons" card. Screen it, then
  // tap "Carry on", as she would to start the lesson.
  await page.waitForFunction(() => document.getElementById('teachThread') || document.querySelector('.prereq-card') || document.querySelector('#lessonInner [onclick*="Lessons._nextStep"]'), { timeout: 15000 }).catch(() => {});
  if (await page.$('.prereq-card')) {
    await shoot(page, run, 'earlier-words-card');
    await page.click('.prereq-card [onclick*="Lessons._carryOn"]');
  }
  // Evidence layer: before a pilot lesson, the quick check is offered (or, once
  // done, what it showed). Screen it, then go on to the lesson.
  await sleep(600);
  const gate = await page.evaluate(() => {
    const b = [...document.querySelectorAll('#lessonInner .pl-card button')].find(x => /Not now|Start the lesson/.test(x.textContent));
    return b ? b.textContent.trim() : '';
  });
  if (gate) {
    await shoot(page, run, 'pilot-card');
    run.say(`[pilot card] tapped "${gate}"`);
    await page.evaluate(t => [...document.querySelectorAll('#lessonInner .pl-card button')].find(x => x.textContent.trim() === t).click(), gate);
  }
  await page.waitForFunction(() => document.getElementById('teachThread') || document.querySelector('#lessonInner [onclick*="Lessons._nextStep"]'), { timeout: 15000 }).catch(() => {});
  const isTeach = await page.evaluate(() => !!document.getElementById('teachThread'));
  const wantTeach = teachEnabled().includes(id);
  run.check(`AI lesson opens by default (${wantTeach ? 'in TEACH_ENABLED' : 'not in TEACH_ENABLED: slides expected'})`, isTeach === wantTeach, isTeach ? 'AI lesson opened' : 'slides opened');
  if (!isTeach) { await shoot(page, run, 'slides'); return; }

  // Ready = nothing loading, Send usable (or the lesson finished) and the last
  // tutor bubble is new. Counting bubbles does not work: when a key point is
  // done its turns fold into a recap card, so the count can go down.
  const waitReady = async (prevText) => {
    await page.waitForFunction(prev => {
      const send = document.getElementById('teachSendBtn');
      const loading = document.querySelector('#teachThread .askme-a-bubble.loading');
      const done = document.querySelector('.teach-finished');
      const b = [...document.querySelectorAll('#teachThread .askme-a-bubble:not(.loading)')];
      const last = b.length ? b[b.length - 1].innerText.trim() : '';
      return !loading && last && last !== prev && (done || (send && !send.disabled));
    }, { timeout: 120000, polling: 300 }, prevText);
  };
  await waitReady('');
  const lastTutor = () => page.evaluate(() => { const b = [...document.querySelectorAll('#teachThread .askme-a-bubble:not(.loading)')]; return b.length ? b[b.length - 1].innerText.trim() : ''; });
  let t = await lastTutor();
  hist.push({ who: 'tutor', text: t });
  run.say(`T0: ${t}`);
  await shoot(page, run, 'ai-lesson-opening');

  const points = L.data ? (L.data.keyPoints || []).length : 4;
  const cap = WHOLE_LESSON ? WHOLE_LESSON.maxTurns : points * 12 + 4;
  let widgetsSeen = 0, rng = 7;
  const widgetKeys = new Set();   // widgets already tried, by the message they sit under
  const coin = () => { rng = (rng * 1103515245 + 12345) >>> 0; return rng / 4294967296; };
  let closing = 0, diagramsSeen = 0, lastCounter = '', predSeen = 0;
  // After each tutor turn (--whole-lesson): the covered counter, and any new
  // predict-first widget, tried: a prediction tapped, then what opens checked
  // against the message's own words (two ammeters, a switch, cells).
  const afterTurn = async (n) => {
    if (!WHOLE_LESSON) return;
    // KP_SHORT (b): how the site read her last message, from the lesson's saved state.
    const read = await page.evaluate(k => {
      try {
        const s = JSON.parse(localStorage.getItem(k) || 'null'); const tr = (s && s.transcript) || [];
        const u = [...tr].reverse().find(x => x.role === 'user');
        const a = tr[tr.length - 1];
        // Tutor messages shown before this turn's last one (a word explained, her question answered first).
        const ui = tr.map(x => x.role).lastIndexOf('user');
        const before = tr.slice(ui + 1, -1).filter(x => x.role === 'assistant').map(x => String(x.text));
        return { cls: u && u.cls ? `${u.cls} (${u.clsBy})` : '', before, told: a && a.role === 'assistant' && a.told ? `${a.told}, ${String(a.text).split(/\s+/).filter(Boolean).length} words, key point ${a.pt + 1}` : '' };
      } catch { return {}; }
    }, `mabel_teach_${id}`);
    if (read.cls) run.say(`  [S${n} read as: ${read.cls}]`);
    if (read.told) run.say(`  [T${n} told piece: ${read.told}]`);
    (read.before || []).forEach(b => run.say(`  [T${n} shown first: ${b}]`));
    const seen = await page.evaluate(() => {
      const hdr = [...document.querySelectorAll('#teachHeader span')].map(s => s.textContent).find(s => /covered/.test(s)) || '';
      // The newest widget, named by the message it sits under: the page redraws the chat after
      // every message, so a mark on the element would be lost and the same widget tried again.
      const ws = [...document.querySelectorAll('#teachThread .wdg')], el = ws[ws.length - 1];
      let b = el;   // the widget's own row in the thread
      while (b && b.parentElement && b.parentElement.id !== 'teachThread') b = b.parentElement;
      let p = b ? b.previousElementSibling : null;
      while (p && !p.classList.contains('askme-a-bubble')) p = p.previousElementSibling;
      return { counter: hdr.trim(), widgetKey: el && p ? p.innerText.trim().slice(0, 160) : '' };
    });
    if (seen.counter && seen.counter !== lastCounter) { if (lastCounter) run.say(`[counter now "${seen.counter}" after T${n}]`); lastCounter = seen.counter; }
    if (seen.widgetKey && !widgetKeys.has(seen.widgetKey)) {
      widgetKeys.add(seen.widgetKey);
      widgetsSeen++;
      const w = await page.evaluate(() => {
        const ws = [...document.querySelectorAll('#teachThread .wdg')], el = ws[ws.length - 1];
        const words = (() => { let b = el; while (b && b.parentElement && b.parentElement.id !== 'teachThread') b = b.parentElement; let p = b ? b.previousElementSibling : null; while (p && !p.classList.contains('askme-a-bubble')) p = p.previousElementSibling; return p ? p.innerText.trim() : ''; })();
        const pred = el.querySelector('.wdg-pred-opts button');
        const q = (el.querySelector('.wdg-pred p') || {}).textContent || '';
        const hiddenBefore = !![...el.children].find(c => c.style && c.style.display === 'none');
        if (pred) pred.click();
        const svg = el.querySelector('svg');
        const visible = !!(svg && svg.getBoundingClientRect().height > 0);
        const ammeters = svg ? [...svg.querySelectorAll('text[font-size="17"]')].filter(x => /^A/.test(x.textContent)).length : 0;
        const buttons = [...el.querySelectorAll('.wdg-row button')].map(b => b.textContent.trim());
        return { words, q, hiddenBefore, visible, ammeters, buttons };
      });
      const said = w.words;
      const wantTwo = /two ammeters/i.test(said), wantOne = /an ammeter/i.test(said);
      const okMeters = !/circuit/i.test(said) || (wantTwo ? w.ammeters === 2 : wantOne ? w.ammeters === 1 : true);
      const okControls = (!/add a cell/i.test(said) || w.buttons.includes('Add a cell')) && (!/the switch/i.test(said) || w.buttons.some(b => /(Open|Close) the switch/.test(b)))
        && (!/put the resistor in/i.test(said) || w.buttons.some(b => /^(Put the resistor in|Take the resistor out)$/.test(b))) && (!/run it for 10 seconds/i.test(said) || w.buttons.includes('Run for 10 s'));
      const okOrder = !/Predict first/i.test(said) || (w.hiddenBefore && !!w.q);
      run.say(`[widget under T${n}: prediction "${w.q.slice(0, 80)}" tapped; then shown: ${w.visible ? 'yes' : 'no'}, ammeters ${w.ammeters}, controls ${w.buttons.join(', ') || 'none'}]`);
      run.check(`predict-first widget ${widgetsSeen} works and matches its words`, w.visible && okMeters && okControls && okOrder,
        `opened after the prediction ${w.visible}; ammeters ${w.ammeters} (words: ${wantTwo ? 'two' : wantOne ? 'one' : '-'}); controls match ${okControls}; prediction first ${okOrder}`);
      await shoot(page, run, `widget-${n}`);
    }
  };
  for (let n = 1; n <= cap; n++) {
    const status = await page.evaluate(() => {
      const hdr = [...document.querySelectorAll('#teachHeader span')].map(s => s.textContent).find(s => /covered/.test(s)) || '';
      const m = hdr.match(/(\d+)\/(\d+)/);
      return { finished: !!document.querySelector('.teach-finished'), complete: m ? +m[1] === +m[2] : false };
    });
    if (status.finished) { run.say('[the lesson shows "Lesson finished."]'); break; }
    if (spend.usd >= spend.cap) { run.say(`[stopped: spend cap $${spend.cap} reached]`); break; }
    let phase = status.complete ? 'closing' : /tell you the rest|just tell you/i.test(t) ? 'checkin' : 'teach';
    // The end quiz comes after the last point is ticked: she stays for it.
    if (WHOLE_LESSON && phase === 'closing' && /question \d+ of \d+|Quick question|Your turn|Worked example|Predict first|In one line|\?\s*$/i.test(t)) phase = 'teach';
    // The quiz's marking replies and the revision-cards offer have buttons: she goes on through them
    // (willing-student run 2026-10-27 left at quiz question 4 of 8, before the revision cards).
    if (WHOLE_LESSON && phase === 'closing' && await page.evaluate(() => [...document.querySelectorAll('#teachThread .teach-choices button')].some(b => /^(Next|Make my revision cards)$/.test(b.textContent.trim())))) phase = 'teach';
    if (phase === 'closing' && closing++ >= 3) { run.say('[the student leaves]'); break; }
    // --exit-script: "near the end" is her second reply once one key point is left.
    const left = await page.evaluate(() => { const hdr = [...document.querySelectorAll('#teachHeader span')].map(s => s.textContent).find(s => /covered/.test(s)) || ''; const m = hdr.match(/(\d+)\/(\d+)/); return m ? +m[2] - +m[1] : 9; });
    if (left <= 1) lastPointTurns++;
    const choices = script ? await page.evaluate(() => [...document.querySelectorAll('#teachThread .teach-choices button')].map(b => b.textContent.trim())) : [];
    let fixed = script && phase !== 'closing' ? script.next({ n, nearEnd: left <= 1 && lastPointTurns >= 1, choices }) : null;
    // --whole-lesson: a message that asks nothing and offers Next: she taps it, 3 times in 4.
    let tapped = null;
    if (WHOLE_LESSON && !fixed) {
      const offered = await page.evaluate(() => [...document.querySelectorAll('#teachThread .teach-choices button')].map(b => b.textContent.trim()));
      const nx = offered.find(c => /^Next( step)?$/.test(c));
      // --persona willing: always taps Next where nothing is asked; says yes to the revision cards.
      if (nx && !/\?/.test(t) && (WILLING || coin() < 0.75)) tapped = nx;
      if (WILLING && offered.includes('Make my revision cards')) tapped = 'Make my revision cards';
      if (WILLING && offered.includes('Keep going')) tapped = 'Keep going';   // the halfway stop (TELL_FIX)
    }
    if (tapped) {
      hist.push({ who: 'student', text: tapped });
      run.say(`S${n} (tapped "${tapped}")`);
      await page.evaluate(label => { [...document.querySelectorAll('#teachThread .teach-choices button')].find(b => b.textContent.trim() === label).click(); }, tapped);
      const t0 = Date.now();
      try { await waitReady(t); } catch { run.say(`[no tutor reply within 120 s after S${n}]`); run.check('tutor replies', false, `no reply after S${n}`); break; }
      tutorMs += Date.now() - t0;
      t = await lastTutor();
      hist.push({ who: 'tutor', text: t });
      run.say(`T${n}: ${t}`);
      run.exchanges++;
      if (run.exchanges % 3 === 0) await shoot(page, run, `exchange-${n}`);
      await afterTurn(n);
      continue;
    }
    const mood = fixed ? 'script' : student.mood(t, phase);
    // The willing student sees the answer buttons under the message (a multiple-choice question) and picks one.
    const offeredNow = WILLING ? await page.evaluate(() => [...document.querySelectorAll('#teachThread .teach-choices button')].map(b => b.textContent.trim())) : [];
    const reply = fixed || Bored.clean(await apiCall(WILLING ? student.body(hist, mood, null, offeredNow) : student.body(hist, mood, newTermsFor(hist))));
    hist.push({ who: 'student', text: reply });
    const button = (fixed && choices.find(c => c.toLowerCase() === reply)) || (WILLING && offeredNow.find(c => c.toLowerCase() === String(reply).toLowerCase().replace(/^"|"$/g, '')));
    run.say(`S${n} (${mood}${button ? ', tapped the button' : ''}): ${reply}`);
    if (choices.length) await shoot(page, run, `choices-${n}`);
    if (button) {
      await page.evaluate(label => { [...document.querySelectorAll('#teachThread .teach-choices button')].find(b => b.textContent.trim() === label).click(); }, button);
    } else {
      await page.click('#teachInput');
      await page.type('#teachInput', reply, { delay: 5 });
      await page.click('#teachSendBtn');
    }
    const t1 = Date.now();
    try { await waitReady(t); } catch { run.say(`[no tutor reply within 120 s after S${n}]`); run.check('tutor replies', false, `no reply after S${n}`); break; }
    tutorMs += Date.now() - t1;
    t = await lastTutor();
    hist.push({ who: 'tutor', text: t });
    run.say(`T${n}: ${t}`);
    // A diagram shown inside the conversation (TEACH_INLINE_DIAGRAMS): one phone and laptop screen with it in view.
    const fig = await page.evaluate(seen => { const f = [...document.querySelectorAll('#teachThread .teach-inline-diagram')]; const last = f[f.length - 1]; if (!last || f.length <= seen) return null; last.scrollIntoView({ block: 'end' }); return { n: f.length, cap: (last.querySelector('figcaption') || {}).textContent || '' }; }, diagramsSeen);
    if (fig && fig.n > diagramsSeen) { diagramsSeen = fig.n; run.say(`[diagram shown in the conversation under T${n}: "${fig.cap}"]`); await shoot(page, run, `diagram-${n}`); }
    run.exchanges++;
    if (run.exchanges % 3 === 0) await shoot(page, run, `exchange-${n}`);
    // The covered counter and the predict-first widget, logged when they first change or show.
    const seen = await page.evaluate(() => {
      const hdr = [...document.querySelectorAll('#teachHeader span')].map(s => s.textContent).find(s => /covered/.test(s)) || '';
      const pred = document.querySelector('#teachThread .wdg-pred');
      return { counter: hdr.trim(), pred: pred ? pred.innerText.trim().split('\n')[0] : '' };
    });
    if (seen.counter && seen.counter !== lastCounter) { if (lastCounter) run.say(`[counter now "${seen.counter}" after T${n}]`); lastCounter = seen.counter; }
    if (seen.pred && !predSeen) { predSeen = n; run.say(`[predict-first widget shown under T${n}: "${seen.pred}"]`); await page.evaluate(() => document.querySelector('#teachThread .wdg-pred').scrollIntoView({ block: 'center' })); await shoot(page, run, `widget-${n}`); }
    await afterTurn(n);
    if (UNTIL_POINT_END && predSeen && !/^0\//.test(lastCounter)) { run.say(`[stopped: key point 1 ended (counter "${lastCounter}") and its predict-first widget showed, at T${predSeen}]`); break; }
    if (fixed === 'bye, got to go') { await shoot(page, run, `goodbye-${n}`); run.say('[the student leaves]'); break; }
  }
  await shoot(page, run, 'end');
  run.say(`[tutor-side time: ${(tutorMs / 60000).toFixed(1)} minutes over ${run.exchanges} exchanges]`);
}

// ---------- maths mode ----------

function warmupTruth(q) {
  // Plain arithmetic only: "44 + 16", "7 × 8", "96 ÷ 4", "15% of 80", "12²". Otherwise null.
  const s = String(q).replace(/−/g, '-').replace(/×/g, '*').replace(/÷/g, '/').replace(/\s+/g, ' ').trim();
  let m;
  if ((m = s.match(/^(-?\d+(?:\.\d+)?)% of (-?\d+(?:\.\d+)?)$/i))) return +m[1] * +m[2] / 100;
  if ((m = s.match(/^(?:find )?(\d+)\/(\d+) of (-?\d+(?:\.\d+)?)$/i))) return +m[1] / +m[2] * +m[3];
  if ((m = s.match(/^(-?\d+(?:\.\d+)?)²$/))) return (+m[1]) ** 2;
  if ((m = s.match(/^√(\d+(?:\.\d+)?)$/))) return Math.sqrt(+m[1]);
  if (/^[-\d.\s+*/()]+$/.test(s)) { try { return Function(`return (${s})`)(); } catch { return null; } }
  return null;
}

function fmt(v) { return typeof v === 'number' ? String(+v.toFixed(4)) : String(v); }
function wrongOf(v) {
  if (typeof v !== 'number') return '7';
  const w = v === 0 ? 3 : Math.round((v * 1.25 + 1) * 100) / 100;
  return fmt(w);
}
function num(a) {
  const s = String(a).replace(/,/g, '').replace(/[£%\s]/g, '').replace(/−/g, '-');
  const f = s.match(/^(-?\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)$/);
  return f ? +f[1] / +f[2] : parseFloat(s);
}
function near(a, b, tol) { const x = num(a); return !Number.isNaN(x) && typeof b === 'number' && Math.abs(x - b) <= (tol ?? 0.005) + 1e-9; }

// ---------- pilot test mode (evidence layer) ----------

// Home → Revise a topic → Physics → Electricity → the first pilot lesson, where
// the quick check is offered; then every question answered like a student
// partly there: some right, some a typical wrong choice, one "I don't know",
// a conversion wrong with the answer worked from it. The app's marking is
// checked against js/pilot/tests.js, worked out here independently.
async function pilotMode(page, run, testId) {
  const T = require('../js/pilot/tests.js');
  const t = T.TESTS[testId];
  run.say(`Pilot test ${testId} (${t.name}).`);
  await shoot(page, run, 'home');
  await clickText(page, '[onclick*="showSubjectPicker"]', 'Revise a topic', 'Revise a topic');
  await clickText(page, '.mode-card', 'Physics', 'subject card');
  await clickText(page, '.topic-card', 'Electricity', 'topic card', '.tc-name');
  if (T.SHORT_CHECK) {
    // Shorter quick check (brief 2026-10-26): opening Electricity shows the quick check on its own screen.
    await sleep(600);
    const own = await page.evaluate(() => ({ start: [...document.querySelectorAll('#main button')].some(b => /Start the quick check/.test(b.textContent)),
      notNow: [...document.querySelectorAll('#main button')].some(b => /Not now: show the lessons/.test(b.textContent)),
      lessons: document.querySelectorAll('#main .subtopic-card').length }));
    run.check('opening Electricity shows the quick check on its own screen', own.start && own.notNow && own.lessons === 0,
      `start button ${own.start}, "Not now" ${own.notNow}, lesson cards on screen ${own.lessons}`);
    await shoot(page, run, 'quick-check-offer');
    await clickText(page, '#main button', 'Start the quick check', 'Start the quick check');
  } else {
    await shoot(page, run, 'electricity-topic');
    await clickText(page, '.subtopic-card', 'Current, potential difference', 'lesson card', '.st-name');
    await sleep(800);
    await shoot(page, run, 'quick-check-offer');
    await clickText(page, '#lessonInner button', 'Start the quick check', 'Start the quick check');
  }
  const answers = {};
  let triedSimilar = false;
  // The quick check teaches: after each answer, its feedback (steps shown one at a time, one "Try a similar one").
  const feedback = async (k, it) => {
    if (!t.teach) return;
    await page.waitForSelector('[data-inlesson]', { timeout: 10000 });
    for (let j = 0; j < 4 && await page.$('[data-step]'); j++) { await page.click('[data-step]'); await sleep(250); }
    if (!triedSimilar && await page.$('[data-try]')) {
      triedSimilar = true;
      await page.click('[data-try]'); await sleep(400);
      const q = await page.evaluate(() => ({ text: (document.querySelector('[data-similar] p') || {}).textContent || '', opts: [...document.querySelectorAll('[data-so]')].map(b => b.textContent), num: !!document.querySelector('[data-sn]') }));
      run.say(`  Tried a similar one: "${q.text}"`);
      if (q.opts.length) await page.click('[data-so="0"]');   // option 0 is the right one in the generator's own order
      else { const v = T.similar(it.id, 1); await page.type('[data-sn]', String(v ? '999' : '0')); await page.click('[data-check]'); }
      await sleep(300);
      run.say(`  Its marking: ${await page.evaluate(() => (document.querySelector('[data-sfb]') || {}).textContent || '')}`);
    }
    const fb = await page.evaluate(() => (document.querySelector('.pl-card') || {}).innerText || '');
    run.say(`  Feedback: ${fb.replace(/\s*\n+\s*/g, ' / ')}`);
    await shoot(page, run, `feedback-${k + 1}`);
    await page.click('[data-next]');
    await sleep(400);
  };
  for (let k = 0; k < t.items.length; k++) {
    const it = t.items[k];
    await page.waitForSelector('[data-next]', { timeout: 10000 });
    if (it.graph || k % 3 === 0) await shoot(page, run, `question-${k + 1}`);
    if (k === 5) {
      await page.click('[data-dk]');
      answers[it.id] = it.nums ? {} : it.parts ? [] : null;
      run.say(`Question ${k + 1}: I don't know`);
      await sleep(400);
      await feedback(k, it);
      continue;
    }
    let how;
    if (it.options) {
      const wrong = it.options.findIndex((o, j) => j !== it.correct && o.mis);
      const pick = k % 3 === 1 && wrong !== -1 ? wrong : (k % 4 === 3 ? (it.correct + 1) % it.options.length : it.correct);
      await page.click(`[data-o="${pick}"]`);
      answers[it.id] = pick;
      how = pick === it.correct ? 'right' : `wrong (${it.options[pick].mis || 'no misconception'})`;
    } else if (it.parts) {
      answers[it.id] = it.parts.map(p => p.correct);
      for (let j = 0; j < it.parts.length; j++) await page.click(`[data-p="${j}"] [data-po="${it.parts[j].correct}"]`);
      how = 'right';
    } else {
      const resp = {}, vals = {};
      it.nums.forEach((n, j) => {
        let v = n.answer;
        if (j === 0 && it.nums.length > 1 && it.nums[1].ecf) v = n.answer * 10;     // a wrong conversion…
        else if (n.ecf) v = new Function(...Object.keys(vals), `return (${n.ecf});`)(...Object.values(vals));   // …carried forward
        vals[n.key] = v;
        resp[n.key] = String(+Number(v).toPrecision(6));
      });
      for (const [key, v] of Object.entries(resp)) await page.type(`[data-k="${key}"]`, v);
      answers[it.id] = resp;
      how = `typed ${JSON.stringify(resp)}`;
    }
    run.say(`Question ${k + 1} (${it.type}): ${how}`);
    await page.click('[data-next]');
    await sleep(400);
    await feedback(k, it);
  }
  await sleep(800);
  await shoot(page, run, 'result');
  const want = T.score(testId, answers);
  const saved = await page.evaluate(id => {
    const key = Object.keys(localStorage).find(k => /pilot_record$/.test(k));
    try { const r = JSON.parse(localStorage.getItem(key) || 'null'); return r && r.tests && r.tests[id] ? r.tests[id].score : null; } catch { return null; }
  }, testId);
  run.check('the app marks the test as js/pilot/tests.js does (worked out independently)',
    !!saved && saved.all.marks === want.all.marks && JSON.stringify(saved.misconceptions) === JSON.stringify(want.misconceptions),
    saved ? `app ${saved.all.marks}/${saved.all.max}, misconceptions ${saved.misconceptions.join(',') || 'none'}; independent ${want.all.marks}/${want.all.max}, ${want.misconceptions.join(',') || 'none'}` : 'no saved result found');
  await clickText(page, 'button', 'My record', 'My record');
  await shoot(page, run, 'my-record');
  await clickText(page, 'button', 'Back to Electricity', 'back to Electricity').catch(() => {});
  await shoot(page, run, 'electricity-after');
  if (T.SHORT_CHECK) {
    // Once done, opening Electricity goes straight to the lessons, with the card showing "Done: see what it showed".
    await clickText(page, 'button', 'All topics', 'All topics').catch(() => {});
    await clickText(page, '.topic-card', 'Electricity', 'topic card', '.tc-name');
    const after = await page.evaluate(() => ({ lessons: document.querySelectorAll('#main .subtopic-card').length, done: /Done: see what it showed/.test(document.getElementById('main').innerText) }));
    run.check('once done, Electricity opens straight to the lessons', after.lessons > 0 && after.done, `lesson cards ${after.lessons}, "Done: see what it showed" ${after.done}`);
    await shoot(page, run, 'electricity-reopened');
  }
}

async function mathsMode(page, run, code) {
  const ms = syllabi().maths;
  const topic = ms.topics[code];
  if (!topic) die(`No maths topic ${code} in data/maths-syllabus.json`);
  const bank = Recompute.loadBank();
  Object.assign(Recompute.RECOMPUTE, require('./maths-recompute-fns.js')({ N: Recompute.N, gcd: Recompute.gcd, lcm: Recompute.lcm, sigFig: Recompute.sigFig, pennies: Recompute.pennies }));
  const student = Bored.makeStudent({ lessonTitle: topic.name, subject: 'Maths' });
  // In an answer box a student types the answer, not a sentence: only the number or fraction, as they would type it.
  const ask = async (prompt, mood) => Bored.clean(await apiCall(student.body([{ who: 'tutor',
    text: `${prompt}\n(You are typing into a small answer box. Type only your answer as you would enter it, e.g. 15 or 0.35 or 3/4. No words.)` }], mood)));
  run.say(`Maths topic ${code} (${topic.name}).`);

  await shoot(page, run, 'home');
  await clickText(page, '[onclick*="showSubjectPicker"]', 'Revise a topic', 'Revise a topic');
  await clickText(page, '.mode-card', 'Maths', 'Maths card');
  await sleep(600);

  // Warm-up, if offered.
  if (await page.$('#maths-warmup')) {
    run.say('Warm-up offered.');
    await shoot(page, run, 'warm-up');
    const plan = ['right', 'try', 'wrong', 'right', 'idk'];
    for (let i = 0; i < 5; i++) {
      const ok = await page.waitForSelector('#wu-answer-input', { timeout: 8000 }).then(() => true).catch(() => false);
      if (!ok) break;
      const q = await page.evaluate(() => { const c = document.getElementById('wu-card'); const d = c && c.querySelector('div'); return d ? d.textContent.trim() : (c ? c.innerText.split('\n')[0] : ''); });
      const truth = warmupTruth(q);
      let typed;
      if (plan[i] === 'right' && truth !== null) typed = fmt(truth);
      else if (plan[i] === 'wrong' && truth !== null) typed = wrongOf(truth);
      else if (plan[i] === 'idk') typed = 'idk';
      else typed = await ask(`Work this out in your head and type just the answer: ${q}`, 'try');
      await page.type('#wu-answer-input', typed, { delay: 5 });
      await page.evaluate(() => MathsWarmup.submit());
      await sleep(300);
      const verdict = await page.evaluate(() => { const c = document.getElementById('wu-card'); return c ? (c.innerText.includes('✅') || /Correct/.test(c.innerText) ? 'accepted' : c.innerText.includes('❌') ? 'rejected' : 'unknown') : 'unknown'; });
      run.say(`Warm-up ${i + 1}: "${q}" — typed "${typed}" — app ${verdict}${truth !== null ? ` — true answer ${fmt(truth)}` : ' — true answer not computed'}`);
      run.exchanges++;
      if (truth !== null && verdict !== 'unknown') {
        const right = near(typed, truth, 0.005);
        run.check(`warm-up ${i + 1}: "${typed}" for ${q} ${right ? 'accepted' : 'rejected'}`, (verdict === 'accepted') === right, `app ${verdict}`);
      }
      if (run.exchanges % 3 === 0) await shoot(page, run, `warm-up-${i + 1}`);
      await sleep(2600);
    }
    if (await page.$('#maths-warmup')) {
      await shoot(page, run, 'warm-up-result');
      await page.evaluate(() => MathsWarmup.dismiss());
      await sleep(800);
    }
  } else run.say('No warm-up offered.');

  await shoot(page, run, 'maths-topics');
  await clickText(page, '.maths-topic-card', topic.name, 'maths topic card');
  await shoot(page, run, `topic-${code}`);
  await clickText(page, 'button', 'Take the topic test', 'topic test button');

  // Question plan: Q1 mostly right, Q2 hint first, Q3 worked example, Q4 wrong first, Q5 left unfinished.
  const plans = ['right', 'hint', 'example', 'wrong-first', 'unfinished'];
  for (let qi = 0; qi < 5; qi++) {
    const qText = await page.evaluate(() => (document.querySelector('.maths-q-text') || {}).innerHTML || '');
    if (!qText) { run.say('[no question on screen]'); break; }
    // Compare as plain text: innerHTML turns ">" into "&gt;" and so on.
    const qPlain = await page.evaluate(() => (document.querySelector('.maths-q-text') || {}).textContent || '').then(t => t.replace(/\s+/g, ' ').trim());
    const plainOf = h => h.replace(/<[^>]+>/g, ' ').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
    const q = bank.find(b => b.question === qText) || bank.find(b => plainOf(b.question) === qPlain);
    run.say(`Question ${qi + 1}${q ? ` (${q.id})` : ''}: ${qPlain}`);
    await shoot(page, run, `question-${qi + 1}`);
    const fn = q && Recompute.RECOMPUTE[q.id];
    let expected = [];
    try { expected = fn ? fn(q) : []; } catch { expected = []; }
    const plan = plans[qi];
    if (plan === 'example' && !(await page.$('#tabEg')) && !(await page.$('.maths-eg-panel'))) {
      run.say('Student looks for the worked example: there is none in the topic test (by design; it is in practice).');
    } else if (plan === 'example') {
      await page.evaluate(() => Maths._switchTab('example'));
      await sleep(500);
      run.say('Student opens the worked example.');
      await shoot(page, run, `worked-example-${qi + 1}`);
      await page.evaluate(() => Maths._switchTab('question'));
      await sleep(400);
    }
    const steps = q ? q.steps : [];
    const nSteps = steps.length || await page.evaluate(() => document.querySelectorAll('.maths-step').length);
    for (let si = 0; si < nSteps; si++) {
      const step = steps[si] || {};
      const prompt = await page.evaluate(i => (document.querySelector(`#mathsStep_${i} .maths-step-prompt`) || {}).innerText || '', si);
      if (step.checkType === 'skip' || !(await page.$(`#stepInput_${si}`))) {
        const nextBtn = await page.$(`#stepNext_${si}`);
        if (nextBtn) await nextBtn.click();
        else await page.evaluate(i => Maths._skipStep(i), si);
        run.say(`  Step ${si + 1}: "${prompt}" — ${nextBtn ? 'a statement with no answer box; the student taps Next' : 'marked as understood (no answer box)'}.`);
        await sleep(300);
        continue;
      }
      const e = expected[si];
      const indep = typeof e === 'number' || typeof e === 'string' ? e : (e && e.anyOf ? e.anyOf[0] : (e && e.value !== undefined ? e.value : null));
      const tol = step.tolerance ?? 0.005;
      const attempts = [];
      if (plan === 'unfinished' && si >= Math.min(1, nSteps - 1)) { run.say(`  Step ${si + 1}: "${prompt}" — the student gives up here and leaves the question unfinished.`); break; }
      if (plan === 'hint' && si === 0) attempts.push('hint');
      if (plan === 'wrong-first' && si === 0) attempts.push('wrong');
      if (si % 2 === 1 && plan !== 'right') attempts.push('try');
      attempts.push('right');
      for (const kind of attempts) {
        if (kind === 'hint') {
          await page.evaluate(i => Maths._showHint(i), si);
          await sleep(400);
          const hint = await page.evaluate(i => (document.getElementById(`stepHintBox_${i}`) || {}).innerText || '', si);
          run.say(`  Step ${si + 1}: student asks for a hint — "${hint.trim()}"`);
          run.exchanges++;
          if (run.exchanges % 3 === 0) await shoot(page, run, `q${qi + 1}-hint`);
          continue;
        }
        let typed;
        if (kind === 'right') {
          if (indep === null || indep === undefined) {
            if (step.answer === undefined) { run.say(`  Step ${si + 1}: the question is not in the bank, so the tester has no answer to give.`); break; }
            typed = step.displayAnswer || fmt(step.answer);
          }
          else if (/fraction/i.test(prompt) && typeof indep === 'number' && !Number.isInteger(indep) && step.displayAnswer && /\//.test(step.displayAnswer) && near(step.displayAnswer, indep, 1e-9)) typed = step.displayAnswer;
          else typed = fmt(indep);
        } else if (kind === 'wrong') typed = indep !== null && indep !== undefined ? wrongOf(indep) : '0';
        else typed = await ask(`Maths question: ${qPlain}\nThis step: ${prompt}\nType just your answer.`, 'try');
        await page.evaluate(i => { const el = document.getElementById(`stepInput_${i}`); if (el) el.value = ''; }, si);
        await page.type(`#stepInput_${si}`, typed, { delay: 5 });
        await page.evaluate(i => Maths._checkStep(i), si);
        await sleep(350);
        const fb = await page.evaluate(i => { const f = document.getElementById(`stepFeedback_${i}`); return f ? { cls: f.className, text: f.innerText.trim() } : { cls: '', text: '' }; }, si);
        const verdict = /\bok\b/.test(fb.cls) ? 'accepted' : /\berr\b/.test(fb.cls) ? 'rejected' : 'no response';
        const truthNote = indep === null || indep === undefined ? 'no independent value (stored answer used to move on)' : `independent value ${fmt(indep)}`;
        run.say(`  Step ${si + 1}: "${prompt}" — typed "${typed}" (${kind}) — app ${verdict}${fb.text ? ` "${fb.text.slice(0, 120)}"` : ''} — ${truthNote}`);
        run.exchanges++;
        if (indep !== null && indep !== undefined && verdict !== 'no response') {
          const right = typeof indep === 'number' ? near(typed, indep, tol) : String(typed).trim() === String(indep).trim();
          run.check(`${q ? q.id : 'Q' + (qi + 1)} step ${si + 1}: "${typed}" should be ${right ? 'accepted' : 'rejected'}`, (verdict === 'accepted') === right, `app ${verdict}; independent value ${fmt(indep)}`);
        }
        if (run.exchanges % 3 === 0) await shoot(page, run, `q${qi + 1}-step${si + 1}`);
        if (verdict === 'accepted') break;
        await sleep(700);
      }
      const stillOpen = await page.evaluate(i => { const el = document.getElementById(`stepInput_${i}`); return el && !el.disabled; }, si);
      if (stillOpen) { run.say(`  Step ${si + 1} could not be completed; the question is stuck.`); run.check(`${q ? q.id : 'Q' + (qi + 1)} step ${si + 1} can be completed`, false, 'right answer not accepted'); break; }
    }
    if (plan === 'unfinished') {
      await shoot(page, run, `question-${qi + 1}-left-unfinished`);
      await page.evaluate(() => document.getElementById('btnHome') && document.getElementById('btnHome').click());
      await sleep(800);
      run.say('Student taps Home and leaves the test.');
      await shoot(page, run, 'after-leaving');
      // Coming back: the test should carry on at the same question and step.
      await page.evaluate(() => Maths.open());
      await sleep(900);
      if (await page.$('#maths-warmup')) { await page.evaluate(() => MathsWarmup.dismiss()); await sleep(600); }
      await clickText(page, '.maths-topic-card', topic.name, 'maths topic card').catch(() => {});
      const resumeLabel = await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find(x => /Carry on your topic test/.test(x.textContent)); if (b) { b.click(); return b.textContent.trim(); } return ''; });
      await sleep(900);
      const backText = await page.evaluate(() => (document.querySelector('.maths-q-text') || {}).textContent || '').then(t => t.replace(/\s+/g, ' ').trim());
      run.say(`Student comes back to the topic: ${resumeLabel ? `"${resumeLabel}"` : 'no way to carry on the test'}.`);
      run.check('coming back resumes the same test question', !!resumeLabel && backText === qPlain, resumeLabel ? (backText === qPlain ? 'same question' : `different question: ${backText.slice(0, 60)}`) : 'no carry-on button');
      await shoot(page, run, 'after-coming-back');
      break;
    }
    const next = await page.evaluate(() => { const b = [...document.querySelectorAll('#mathsQComplete button.btn.pri')].find(x => x.offsetParent); if (b) { b.click(); return b.textContent.trim(); } return ''; });
    if (!next) { run.say('[no "Next question" button after the question]'); run.check(`question ${qi + 1} leads on to the next`, false, 'no next button'); await shoot(page, run, `question-${qi + 1}-stuck`); break; }
    await sleep(900);
  }
}

// ---------- judge ----------

async function judgeRun(run, kind, id) {
  const shots = run.shots.slice(0, MAX_JUDGE_IMAGES);
  const content = [{ type: 'text', text: [
    `You review a test of a GCSE revision website, used by a ${WILLING ? 'willing 15-year-old who is learning this for the first time and tries every question' : 'bored 15-year-old'} on a phone and a laptop. ${kind === 'lesson' ? `They took the AI lesson "${id}".` : kind === 'pilot' ? `They did the Electricity "Quick check before you start" (${id}), then looked at its result and the "My record" page. The answers are scripted; judge only whether the pages work and can be read.` : `They did the maths warm-up and the topic test for "${id}".`}`,
    'Transcript (lines in [check] are automatic checks by the test tool; "independent value" is recomputed from the question text, not the app\'s stored answer):',
    run.log.join('\n'),
    '',
    'The screenshots follow, each labelled with its file name. Each screen was taken at phone size (390×844) and laptop size (1366×768).',
  ].join('\n') }];
  for (const s of shots) {
    content.push({ type: 'text', text: s.label });
    content.push({ type: 'image', source: { type: 'base64', media_type: 'image/png', data: fs.readFileSync(s.file).toString('base64') } });
  }
  content.push({ type: 'text', text: [
    'Return JSON only, no prose and no code fence, in exactly this shape:',
    '{ "broken": [ { "what": "<anything that did not work, including a correct maths answer rejected or a wrong one accepted>", "step": "<transcript line or step>" } ],',
    '  "looks_wrong": [ { "what": "<text cut off, overlapping, unreadable, misplaced>", "screenshot": "<file name>", "stops_use": true | false } ],',
    '  "would_quit": false | { "turn": "<transcript label, e.g. S7 or Question 3>", "quote": "<line>", "why": "<short>" },',
    '  "fixes": [ { "target": "<file and field, or behaviour>", "change": "<concrete change>" } ] }',
    'At most 5 fixes. Only list a looks_wrong item you can see in a named screenshot. Empty arrays if nothing.',
    'Screenshots named "…-diagram-…" show a diagram inside the conversation: say in looks_wrong if any of its labels are too small to read on the phone screen without zooming, cut off or overlapping.',
    'stops_use is true only when the fault stops her reading something she needs or using a control she needs (text she has to read is hidden or unreadable, a button she needs is covered or off screen); false when it is untidy but she can still read and use the page.',
  ].join('\n') });
  const text = await apiCall({ model: Bored.JUDGE_MODEL, max_tokens: 8000, system: 'You are a strict, concrete website tester. Reply with JSON only.', messages: [{ role: 'user', content }] });
  try { return Bored.parseJudge(text); } catch { return { raw: text }; }
}

// ---------- pass rule ----------

// A looks_wrong item without stops_use was judged before the mark existed: it counts as stopping her.
const stopsUse = l => l.stops_use !== false;
function sitePass(j) {
  return !(j.broken || []).length && !(j.looks_wrong || []).some(stopsUse);
}

// The pass rule again on saved runs: no calls. Updates result.json and the PASS/FAIL line of result.md.
function rescore(dirs) {
  if (!dirs.length) for (const d of fs.readdirSync(OUT_ROOT)) {
    const day = path.join(OUT_ROOT, d);
    if (fs.statSync(day).isDirectory()) for (const r of fs.readdirSync(day)) dirs.push(path.join(day, r));
  }
  let before = 0, after = 0, n = 0;
  for (const dir of dirs) {
    const file = path.join(dir, 'result.json');
    if (!fs.existsSync(file)) continue;
    const r = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (r.passBefore === undefined) r.passBefore = r.pass;   // the verdict under the rule the run was judged with
    r.pass = sitePass(r.judge);
    fs.writeFileSync(file, JSON.stringify(r, null, 2));
    const md = path.join(dir, 'result.md');
    if (fs.existsSync(md)) fs.writeFileSync(md, fs.readFileSync(md, 'utf8').replace(/^\*\*(PASS|FAIL)\*\*/m,`**${r.pass ? 'PASS' : 'FAIL'}**`));
    const lw = (r.judge.looks_wrong || []);
    n++; before += r.passBefore ? 1 : 0; after += r.pass ? 1 : 0;
    console.log(`${path.relative(ROOT, dir).replace(/\\/g, '/')}: ${r.passBefore ? 'PASS' : 'FAIL'} → ${r.pass ? 'PASS' : 'FAIL'} · broken ${(r.judge.broken || []).length} · would quit ${r.judge.would_quit ? r.judge.would_quit.turn : 'false'} · looks wrong ${lw.length} (${lw.filter(stopsUse).length} stop her)`);
  }
  console.log(`${n} runs: PASS before ${before}, after ${after}.`);
}

// ---------- main ----------

async function main() {
  const a = parseArgs(process.argv.slice(2));
  if (a.rescore) return rescore(a.rescore);
  const est = estimate(a);
  console.log(a.run ? 'RUN' : 'DRY RUN (add --run for real calls)');
  console.log(`${est.what}: about ${est.turns} exchanges, ${est.shots} screens × 2 sizes; est. cost $${est.usd.toFixed(4)} (tutor ${TUTOR_MODEL} at $${RATES[TUTOR_MODEL][0] * 1e6} / $${RATES[TUTOR_MODEL][1] * 1e6} per M; student ${Bored.STUDENT_MODEL} at $1 / $5 per M; judge ${Bored.JUDGE_MODEL} at $4 / $20 per M with the screenshots, 8 000 output tokens assumed).`);
  if (!a.run) return;
  const cap = a.maxUsd !== null ? a.maxUsd : 1;
  if (est.usd > cap) die(`Estimate $${est.usd.toFixed(4)} is over $${cap}. Stopping. Pass --max-usd <n> above the estimate to proceed.`);
  if (!apiKey()) die('SPEC_CHECK_API_KEY is not set (shell or Windows user environment).');
  spend.cap = cap;
  if (a.lesson) await confirmModel(TUTOR_MODEL);
  await confirmModel(Bored.STUDENT_MODEL);
  await confirmModel(Bored.JUDGE_MODEL);
  const exe = findBrowser();
  if (!exe) die('No Chrome or Edge found (set CHROME_PATH).');

  const id = a.lesson || a.maths || `pilot-${a.pilot}`;
  const date = new Date().toISOString().slice(0, 10);
  let dir = path.join(OUT_ROOT, date, id), k = 1;
  while (fs.existsSync(dir)) dir = path.join(OUT_ROOT, date, `${id}-${++k}`);
  fs.mkdirSync(dir, { recursive: true });
  const run = new Run(id, dir);

  const server = await serve();
  const base = `http://127.0.0.1:${server.address().port}/`;
  const browser = await puppeteer.launch({ executablePath: exe, headless: true });
  let crash = null;
  try {
    const page = await newPage(browser, base, run);
    EXIT_SCRIPT = !!a.exitScript;
    UNTIL_POINT_END = !!a.untilPointEnd;
    WILLING = a.persona === 'willing';
    WHOLE_LESSON = a.wholeLesson ? { maxTurns: a.maxTurns || 260 } : null;
    if (a.lesson) await lessonMode(page, run, a.lesson); else if (a.pilot) await pilotMode(page, run, a.pilot); else await mathsMode(page, run, a.maths);
  } catch (e) {
    crash = String(e.message || e);
    run.say(`[test stopped: ${crash}]`);
  }
  await browser.close();
  server.close();

  let j = await judgeRun(run, a.lesson ? 'lesson' : a.pilot ? 'pilot' : 'maths', id).catch(e => ({ raw: String(e.message || e) }));
  if (j.raw !== undefined) j = { broken: [{ what: 'judge reply was not JSON', step: '' }], looks_wrong: [], would_quit: false, fixes: [], raw: j.raw };
  // Every failed automatic check counts as broken, whether or not the judge named it.
  for (const c of run.checks.filter(c => !c.ok)) {
    if (!(j.broken || []).some(b => String(b.step || '').includes(c.what) || String(b.what || '').includes(c.what))) (j.broken = j.broken || []).push({ what: `automatic check failed: ${c.what}`, step: c.detail || '' });
  }
  if (crash) (j.broken = j.broken || []).push({ what: `test could not finish: ${crash}`, step: '' });
  const pass = sitePass(j);

  const result = { id, mode: a.lesson ? 'lesson' : a.pilot ? 'pilot' : 'maths', date, pass, judge: j, checks: run.checks, transcript: run.log,
                   screenshots: run.shots.map(s => path.relative(ROOT, s.file).replace(/\\/g, '/')), cost: spend.usd, tutorModel: TUTOR_MODEL, tutorCost: spend.tutorUsd, apiCalls: spend.calls, browserApiCalls: spend.browserCalls };
  fs.writeFileSync(path.join(dir, 'result.json'), JSON.stringify(result, null, 2));
  const md = [`# Site test: ${id} (${result.mode}, ${date})`, '', `**${pass ? 'PASS' : 'FAIL'}** · cost $${spend.usd.toFixed(4)} (${spend.calls} tool calls, ${spend.browserCalls} calls from the site; tutor ${TUTOR_MODEL} $${spend.tutorUsd.toFixed(4)})`, '',
    '## Judge', '', '```json', JSON.stringify({ broken: j.broken, looks_wrong: j.looks_wrong, would_quit: j.would_quit, fixes: j.fixes }, null, 2), '```', '',
    '## Transcript', '', ...run.log.map(l => `    ${l}`), ''];
  fs.writeFileSync(path.join(dir, 'result.md'), md.join('\n'));
  const summary = path.join(OUT_ROOT, 'SUMMARY.md');
  if (!fs.existsSync(summary)) fs.writeFileSync(summary, '# Site test runs\n\nOne line per run: date | id | mode | result | broken | looks wrong | would quit | folder | cost.\n\n');
  fs.appendFileSync(summary, `- ${date} | ${id} | ${result.mode} | ${pass ? 'PASS' : 'FAIL'} | ${(j.broken || []).length} | ${(j.looks_wrong || []).length} | ${j.would_quit ? j.would_quit.turn : 'false'} | ${path.relative(ROOT, dir).replace(/\\/g, '/')} | $${spend.usd.toFixed(4)}\n`);
  console.log(`${id}: ${pass ? 'PASS' : 'FAIL'} · broken ${(j.broken || []).length} · looks wrong ${(j.looks_wrong || []).length} · would quit ${j.would_quit ? j.would_quit.turn : 'false'} · ${path.relative(ROOT, dir).replace(/\\/g, '/')}/result.md · $${spend.usd.toFixed(4)}`);
}

main().catch(e => die(String(e.stack || e)));
