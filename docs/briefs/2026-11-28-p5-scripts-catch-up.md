Brief from the planning chat, 2026-11-28 (pasted by Jason), saved word for word.

P5 scripts: catch up with the triage (1b1d77d). Fixes a live fault. One commit. Script files and tools/check-script.js only; no shared site code.

0. git pull; HEAD 1b1d77d or later. Baseline: check-script on all 32 scripted lessons.

1. Live fault: p5-newtons-laws.json has 5 key points; its script has 4. js/teach.js (about line 991) marks the AI lesson finished only when every lesson key point is ticked, so she can never finish it. Add key point 4 to lessons/physics/p5-newtons-laws.script.json, taught from the lesson's keyPoints[4] (required practical: method, the variables, and why the masses move from trolley to hanger; the result: straight line through the origin, so a ∝ F; more mass with the same force gives less acceleration). Include a prediction question, its checkpoint "4", one own-words step, and quiz coverage (replace a quiz question so the quiz stays at six). Confirm by reading teach.js that the lesson can now finish, and quote the lines you read.

2. Add a check to tools/check-script.js: the script's keyPoints count must equal the lesson file's keyPoints count, and every script kp index must exist in the lesson. Run it on all 32 scripted lessons and report every mismatch. Fix any other mismatch found the same way, in the script.

3. Higher items the scripts lack (triage rows; the slides already have them):
   - p5-forces-motion: tangent to a curved distance–time graph gives the speed at that time (M6); the area under a curved velocity–time graph found by counting squares (M8). Teach in words only: no new widget or picture.
   - p5-newtons-laws: resolving one force into two parts at right angles that together have the same effect (M4). Words only; the scale-drawing diagram is S4 work.
   No tier labels in script text (tools/lesson-shape-v3.md).

4. Cuts the scripts still teach: p5-gravity script, remove field lines and orbital period (triage rows A0 and A1). Keep "field strength falls with distance", the higher-orbit/lower-speed point, and "centripetal force" (gravity A3 kept). Report every step that changed.

5. Bump each changed script's version as in 44884a4.

6. Self-check, and fix until clean: check-script walk 0 on all 32, with the new count check passing; check-polish ok; check-tap-order PASS; check-versions ok; audit-lessons totals unchanged.

7. Site tests, whole lesson, persona mabel, laptop, as in 44884a4: p5-newtons-laws (it must reach the summary AND be marked finished: report how you know), p5-forces-motion and p5-gravity. Stop before P5 spend passes 12.80. Run check-transcript on each.

8. Log the changes in tools/spec-check-results/P5-FIX-LOG.md under "2026-11-28 scripts catch-up". Update STATE (P5 row; spend, both the recorded figure and the "up to" figure) and ESCALATIONS (close "gravity script still teaches field lines and orbital period"). Report verbatim: the 32 walk lines, the count-check output, the other check outputs, the site-test results with cost, and check-transcript. Commit, push, report the hash.
