# Mabel's GCSE Biology Tutor — Handoff

Live URL: https://jasonmitra-wq.github.io/mabel-gcse/

---

## What's built

### App shell
- `index.html` — single-page app, no framework
- `css/style.css` — full dark theme, CSS variables, responsive
- `js/app.js` — main controller: routing, home, dashboard, test prep, subject picker
- `js/lessons.js` — lesson renderer, checkpoints, cards, feedback, personality injection
- `js/questions.js` — AI question engine, grading, hints, retry, results, error log, EmailJS
- `js/cards.js` — spaced repetition flashcard deck
- `js/storage.js` — all localStorage via `Store.*`
- `js/personality.js` — Silver & skating jokes injected at lesson key points 1 and 3

### Lesson content
Only `lessons/biology/` exists. All other subjects are "Coming soon" placeholders.

| File | Status | SVG diagrams |
|------|--------|-------------|
| `b2-digestive-system.json` | ✅ Available | b2-digestive-system.svg, b2-villus.svg |
| `b2-enzymes.json` | ✅ Available | b2-enzyme-lock-key.svg, b2-enzyme-ph.svg |
| `b2-organisation.json` | ✅ Available | none needed |
| All other B1–B4 subtopics | ❌ `available: false` — no JSON yet | — |

### Syllabus structure (`data/syllabus.json`)
- B1 Cells (9 subtopics) — all unavailable
- B2 Organisation (8 subtopics) — 3 available, 5 unavailable
- B3 Infection & Response (8 subtopics) — all unavailable
- B4 Bioenergetics (7 subtopics) — all unavailable
- B5–B7 Paper 2 — empty placeholders, not started

---

## Features

### Home screen
- **Continue card** — full-width purple card at top if `lastPosition` is saved; calls `Lessons.open()` directly
- **Mode grid** — Revise (→ subject picker), Test prep, Dashboard, Card deck
- **Upcoming tests widget** — reads `Store.get('schedule')`, shows up to 3 tests within 30 days, red/yellow/green urgency; clickable to start a revision plan

### Subject picker (`showSubjectPicker`)
- Shows 6 subject cards: Biology (active), Chemistry, Physics, Maths, English Lit, History
- Non-Biology subjects show a "Coming soon" message and route back to Biology
- `_activeSubject` module-level variable tracks selected subject (currently only `'biology'` does anything)
- "Revise" on home → subject picker → Biology → topic browser

### Topic browser
- Topics → subtopics, each card shows done/unavailable state
- Unavailable subtopics show "Soon" chip and are non-clickable
- Progress bar per topic

### Lesson renderer (`Lessons.open`)
- Loads `lessons/biology/{subtopicId}.json`
- Renders: exam focus banner, intro, key points with inline diagrams, checkpoint quizzes, tables, common mistakes, exam tips, video links, revision cards
- Checkpoints at key point indices specified in JSON (`checkpoints` object keyed by index)
- Personality engine auto-injects Silver/skating moments at key points 1 and 3
- Feedback bar at bottom (👍 Worked well / 🔁 More examples / ✂️ Simpler / 🔍 More detail)
- Sticky footer with "Practice questions", "View card deck", "← Topics"

### Question engine (`Questions.start`)
- Count picker: 3 / 5 / 8 questions
- AI-generated via Claude API (`claude-sonnet-4-6`), adapts to learner profile
- Tiered hints (hint1 → hint2 → no more)
- Keyword-based grading: ≥65% keywords = full marks, ≥35% = partial, <35% = missed
- Retry button for missed/partial answers
- Results screen: stat grid, mastery bar, error log with model answers
- "Retry missed questions" rebuilds question set from errors
- "📧 Email this report" — EmailJS send to jasonmitra@gmail.com + holly@hollscottlidgett.co.uk

### Dashboard
- Stat grid: subtopics covered / tests done / avg score
- Progress bars per topic
- Card deck summary
- **Learner profile** — rating breakdown (liked / wants examples / wants more detail / wants simpler), profile summary text, Silver & skating facts gathered, "This adapts how questions are generated"
- Recent test scores (last 6)
- Reset progress button

### Test prep (`showTestPrep`)
- **Upload timetable** — PDF or photo; FileReader → base64 → Claude API (vision/document); extracts `{tests:[{subject,topic,date,dateRaw,notes}]}`; persisted to `Store.set('schedule', ...)`; rendered as colour-coded schedule (red <7d, yellow <21d, green ≥21d); each card clickable → `_buildTestPlan()`
- **Manual entry** — subject, topic, date fields → `_buildTestPlan()`
- **Revision plan** — day-by-day AI-generated plan, night-before card, quick wins

### Card deck (`Cards.showDeck`)
- Spaced repetition: Known (7d) / Learning (2d) / Again (0d)
- Cards saved from lessons or via "Save all cards" button
- Stats: total / known / learning / unseen

### Storage (`Store.*`)
- `Store.getProgress()` / `Store.saveProgress()` — covers, scores, learner profile, last position
- `Store.getDeck()` / `Store.addCards()` / `Store.updateCardStatus()`
- `Store.getMabelProfile()` / `Store.updateMabelProfile()` — Silver & skating details
- `Store.get('schedule')` / `Store.set('schedule', ...)` — persisted timetable data

### AI API (`AI.call` / `AI.callMultimodal`)
- Direct Anthropic API calls from browser (no backend)
- Queue-based to prevent concurrent calls
- Exponential backoff on 429/529
- `callMultimodal` accepts array of content blocks for vision/document inputs

---

## Lesson content rules (for building new lessons)
- Tone: warm teacher talking to a 15-year-old, "you" not "students", never start with a definition
- Topic codes: never use B1/B2 alone — plain English first, code in brackets after if needed
- Intro: 2–3 sentences, engaging, slightly surprising
- Key points: 4–6 max, each readable in 90 seconds
- Checkpoints: one after every 2 key points (keyed by **0-based index** in `checkpoints` object — key `"0"` appears after keyPoints[0], key `"2"` after keyPoints[2], etc.)
  ⚠️ CRITICAL: the checkpoint key determines which keyPoint heading appears in the breadcrumb ("Quick check — {keyPoints[key].heading}"). The question content MUST match the topic of that keyPoint. A mismatch — e.g. an animal-cell question filed under key "1" (plant cells) — shows the wrong breadcrumb and confuses the student. Always verify: does this question belong to the section whose heading will appear above it?
- Tables: only where genuinely useful, `examFlag: true` if AQA tests it
- Common mistakes: 3–4 specific mark-losers
- Exam tips: 2–3 mark-gaining techniques
- Revision card bullets: 8–12, complete sentences, exam-accurate
- No hardcoded Silver/skating jokes — personality.js handles all of that
- SVG diagrams: dark-compatible, colour palette in style.css root vars, leader lines, title at top
- AQA Paper 1 only (B1–B4); no A-level content

## Build order for remaining lessons
B2: heart → blood → lungs → plant tissues → transpiration → organisation (done)
Then B1 (9 subtopics) → B3 (8 subtopics) → B4 (7 subtopics)
After each JSON: set `"available": true` in `data/syllabus.json`

---

## EmailJS setup (Feature 6 — action required)
1. Create free account at emailjs.com
2. Add a Gmail service — note the **Service ID** (set to `service_mabel` in code)
3. Create a template with variables: `{{student}}`, `{{date}}`, `{{topic}}`, `{{score}}`, `{{total}}`, `{{pct}}`, `{{mastery}}`, `{{errorLog}}`; set To: `jasonmitra@gmail.com` and `holly@hollscottlidgett.co.uk`
4. Note the **Template ID** (set to `template_session` in code)
5. Go to Account → API Keys → copy Public Key
6. In `js/questions.js` line ~380: replace `'YOUR_PUBLIC_KEY_HERE'` with your actual public key

---

## Files changed in last session
- `js/app.js` — F1 hero text, F1 continue card flip, F2 schedule urgency labels, F3 "Coming up" section, F4 dashboard "How you learn" + conversational Silver/skating, F5 subject picker AQA removal + coming-soon wording, F10 showFullTimetable + _renderFullTimetable
- `js/lessons.js` — F7 full text overhaul (exam flags, headers, write-notes, revision cards section), F11 predict-before-you-read inject
- `js/questions.js` — F8 mark-point [1] parsing, per-point ✅/❌ breakdown
- `js/cards.js` — F9 matching game (startMatchingGame, _matchFront, _matchBack, _finishMatch)
- `css/style.css` — .predict-box, .match-card, shake keyframe
- `js/questions.js` — EmailJS report (previous session)
- `index.html` — EmailJS SDK script tag (previous session)
- `data/syllabus.json` — b2-organisation and b2-enzymes set to available (previous session)
- `lessons/biology/b2-organisation.json` — new (previous session)
- `lessons/biology/b2-enzymes.json` — new, correct tone (previous session)
