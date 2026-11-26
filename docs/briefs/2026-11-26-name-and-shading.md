Claude Code prompt: name in the header, name filter, and greying out unfinished topics (2026-11-26)
This replaces 2026-11-26-header-name.md; don't run that one. One prompt, one commit. Run it after the checkpoint-shuffle commit has been pushed, and pull first. Jason has approved all three parts, including the one-line change to teach-mode code in Part B.
Part A: header and tab title use the child's name from Settings
The home page title is built from Settings: `js/app.js:232` uses `${Store.getChildName()}'s GCSE Tutor`. The header and the tab title are hard-coded "Mabel's GCSE Tutor" in three places: `index.html:6` (`<title>`), `index.html:30` and `settings.html:255` (`.hdr-title`). Leave `settings.html:6` as it is.

1. `index.html`: after `js/storage.js` loads (line 83), set the `.hdr-title` text and `document.title` to `${Store.getChildName()}'s GCSE Tutor`. Use `textContent`, not `innerHTML`, because a parent types the name.
2. `settings.html`: set its `.hdr-title` the same way after `js/storage.js` (line 429), and again straight after the save at line 569, so it changes without a reload.
3. Keep the hard-coded text in the HTML as the starting text. It is what shows if JavaScript fails.

Part B: the name filter knows the Settings name (teach-mode code, approved)
`js/teach.js:38` creates the unscripted tutor without `studentName`, so `js/teach-core.js:254` falls back to "Mabel". The filter at line 954 then removes "Mabel" from the tutor's replies but not the name set in Settings.

* In the `TeachCore.create({…})` call at `js/teach.js:38`, add `studentName: Store.getChildName()`. Change nothing else in teach-core or teach.
* Check that `js/teach-script.js` never gives the model her name. My search found no `studentName` or name in its prompts; confirm it.

Part C: grey out topics and subjects that aren't ready
Rule: a lesson is ready if it is in `TeachScript.SCRIPTED_LESSONS` (`js/teach-script.js:23`, exported at line 424; loaded before `app.js`). A topic is ready only if all its subtopics are ready. A subject is ready if at least one of its topics is ready. Maths is a separate track and stays as it is now.
Today that opens P1 (7/7), P2 (6/6), P3 (4/4) and G5 (3/3), so Physics, Geography and Maths open. Biology, Chemistry, Sociology, English Lit, P4 onwards and every other Geography topic are greyed out. Because the list is read from the code, a topic opens by itself once all its lessons are scripted.

1. Add a flag `SHADE_UNREADY` (on) in `js/app.js`, next to the subject list (line 431). With the flag off, every screen must look as it does at the base commit.
2. Subject picker (`showSubjectPicker`, lines 426–470): a subject that isn't ready uses the existing greyed "Coming soon" tile (the `available: false` branch at line 462, which goes to `_comingSoonSubject`). Fix the `_comingSoonSubject` screen (line 493): its button says "→ Go to Biology" (line 504), which would now send her to a greyed-out subject. Point it at the subject picker.
3. Topic list (`showTopics`, lines 510–600): treat a topic that isn't ready as `available === false`, wherever lines 535 and 575 test it. That covers the opacity, the "Coming soon" chip, the `unavailable` class, the coverage badge and the "next topic" pick. A greyed card must not open.
4. Subtopic list (`showSubtopics`, lines 607–666): a subtopic that isn't ready uses the existing "Soon" chip and the `unavailable` class at lines 629–634, and must not open. Check `Pilot.offer` and `Pilot.topicCards` (lines 612 and 666) don't open a lesson that isn't ready.
5. Every other way into a lesson. Gate `Lessons.open` itself (`js/lessons.js:75`): if the lesson isn't ready and the flag is on, show a short "Coming soon" card with a "← Topics" button instead of the lesson. The routes in are:
   * the Resume card (`app.js:196`, `203`): hide it if its lesson isn't ready;
   * the glossary (`glossary.js:381`, `406`): no link to a lesson that isn't ready; the word and its meaning still show;
   * the "Words from earlier lessons" buttons (`lessons.js:151`): no "Go to" button for a lesson that isn't ready; "Carry on" and the meanings still show;
   * the test planner (`app.js` from line 1286): offer only ready topics, and plan only ready subtopics. Search for every other caller of `Lessons.open`, `_selectSubject`, `showTopics` and `showSubtopics`, and report the count.
6. Home card text (`app.js:250`, "Biology · Chemistry · Physics · Geography · Sociology →"): list only the subjects that are open, built from the same rule.
7. Don't change `available` in any `data/*-syllabus.json`. `tools/audit-lessons.js` (`readAvailable`, line 89) and the site tests read that field, and their results must not move.

Checks

* In the browser at laptop size, screenshot into tools/site-test-runs/2026-11-26/shading/:
   * the home page, with no child profile saved and with the name set to "Natty" (header and tab title);
   * the subject picker;
   * Physics topics, with P1–P3 open and P4 onwards greyed;
   * Geography topics, with G5 open and the rest greyed;
   * a greyed topic tapped, which must not open;
   * Biology tapped, which must show the Coming soon screen;
   * the glossary entry for a Biology word, which must have no lesson link.
If no browser tool is available, say so plainly and don't claim this was checked.
* Count from the code: how many subjects, topics and subtopics are open and how many are greyed, with the flag on and with it off.
* `node tools/audit-lessons.js` must give the same totals as before this commit. The free checks on all 20 scripted lessons, plus `tools/check-teach-default.js`.

End
Bump the version parameter on every `js/` file you change, in both HTML files. Report the output of every check word for word. Update docs/STATE.md (open defects and shared fixes: record all three parts, with the flag), commit, push, and report the hash.
Gate 0 (what the planning chat checked)

* Read: `js/storage.js` lines 105–124 (`getChildName`, which falls back to "Mabel"); `js/app.js` lines 425–470, 528–592 and 625–640, the subject, topic and subtopic availability logic; `js/teach.js:38`; `js/teach-core.js:250–257` and the use of `STUDENT_NAME` at line 954; `js/lessons.js:75` (`open`) and line 151 (the earlier-lesson buttons).
* Searched for "GCSE Tutor": 4 matches, of which 3 are hard-coded. Callers of `Lessons.open`: 6, at `app.js:196`, `203` and `658`, `glossary.js:381` and `406`, and `lessons.js:151`.
* Counted against `SCRIPTED_LESSONS`: P1 7/7, P2 6/6, P3 4/4 and G5 3/3 are complete topics. No other topic has any scripted lesson.
* Shared code touched: `js/app.js`, `js/lessons.js`, `js/glossary.js`, and one line of teach-mode code (`js/teach.js:38`).
* Inferred, not checked: what `Pilot.offer` and `Pilot.topicCards` do, and whether the test planner has another route into lessons.
