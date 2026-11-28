Brief from the planning chat, 2026-11-28 (pasted by Jason): P5 lesson-file fixes before P6. Saved word for word.

Gathering the exact fields for the prompt (Gate 0).
Gate 0: I read all five checkpoints and the key points they belong under, the four other faults, check-rewrite's rules and spec-check's options, all on main at 44884a4.

* Other copies: none of the text being changed appears in the eight P5 script files (I searched them; 0 hits). Only the lesson files change.
* Shared code: none touched.
* Version bump: probably none needed [Likely]. B2's fixes to the same lesson files (eb3e4ca) changed no JS.
* Where to run it: on your PC. The spec text isn't on GitHub, so spec-check can only run there.

Paste this into Claude Code on C:\dev\mabel-gcse:

```
P5 lesson-file fixes before P6 (Jason approved 2026-11-28). One commit. Lesson files only; no script, engine or shared code changes.

0. git pull. Confirm HEAD is 44884a4 or later and data/spec/physics.md md5 matches data/spec/MANIFEST.md. Run node tools/audit-lessons.js and record the baseline.

1. Rewrite five checkpoints in lessons/physics so each tests the key point it follows (same key; 4 options; keep the same "correct" index; correctFeedback and wrongFeedback use only equations taught in that key point; numbers chosen so the working is whole or one-decimal; no example copied from the key point's content):
   - p5-forces-motion "3" -> keyPoints[3] (equations of motion): a calculation with v² − u² = 2 a s, the spec's equation. (The old question uses a = (v − u)/t, which is key point 2.)
   - p5-forces-motion "4" -> keyPoints[4] (terminal velocity): a non-calculation question on why a falling object reaches terminal velocity (drag rises with speed until it equals the weight; resultant force zero). The old feedback uses s = ½at², which no lesson teaches.
   - p5-gravity "1" -> keyPoints[1] (gravitational fields): field strength falls with distance from the mass; g is about 9.8 N/kg near Earth's surface. Orbital speed is key point 2 and already has checkpoint "2".
   - p5-momentum "0" -> keyPoints[0]: p = m v with units kg m/s. The old question is a collision (key point 1).
   - p5-stopping-distance "1" -> keyPoints[1]: which factor increases reaction time or thinking distance. Use braking-distance factors (wet road, worn tyres, worn brakes) as the wrong options.
   Plain English per tools/plain-english-rules.md; sentences 20 words or fewer.

2. Fix four lesson-auditor faults (9fd883f-1 list C):
   - p5-forces-motion keyPoints[2].memTip: drop the "GA-D: 'Gonna Ace D-grade no more!'" phrase. Keep: v-t graph, gradient = acceleration, area under the line = distance travelled.
   - p5-momentum checkpoints["2"].options[2]: replace "They absorb kinetic energy and convert it to electrical energy" with a believable wrong option, e.g. "They make the car stop in a shorter time, which reduces the force". Keep correct = 1.
   - p5-stopping-distance keyPoints[1].list: remove the "Age" item (not in the spec list). Confirm the content sentence still reads correctly.
   - p5-gravity revisionCardBullets[8] (geostationary satellites): no key point teaches it. Check the spec text: if the spec names it, add one sentence on it to keyPoints[2].content; otherwise remove the bullet. Report which and quote the spec line.
   Do NOT change the mass/weight overlap between p5-newtons-laws key point 3 and p5-gravity key point 0 (Jason's decision; leave it in ESCALATIONS).

3. Log every change, old text and new text, in tools/spec-check-results/P5-FIX-LOG.md under "2026-11-28 post-scripting fixes".

4. Self-check before committing, fix until clean:
   - node tools/audit-lessons.js: no ERROR or WARN on the P5 lesson files; checkpoint-key ERROR count noted.
   - node tools/check-rewrite.js 44884a4: the only failures may be the logged changes above (checkpoint wording, the "Age" list length, the revision-card bullet if removed). Any other failure is a fault; fix it.
   - node tools/check-cp-order.js: PASS.
   - node tools/check-script.js for each of the eight P5 lessons: walk 0 (scripts unchanged; this proves nothing broke).

5. Spec-check re-run: node tools/spec-check.js --topic P5 --run --max-usd 1.00. P5 has 1.00 left of its 12 cap; stop if it would exceed that. Report per lesson: factual_error, checkpoint_mismatch, missing_spec_content, above_gcse counts. Fix any new factual_error or checkpoint_mismatch in one round. Do not fix missing_spec_content or above_gcse here: list them in ESCALATIONS under "P5 spec-check 2, not triaged" for the planning chat.

6. ESCALATIONS: mark the five-checkpoint item and the list C items done (with this commit), except the mass/weight overlap, which stays open.

7. STATE.md P5 row: S5 met if checkpoint_mismatch is 0 on all eight; S6 met only if factual_error and checkpoint_mismatch are 0 AND missing_spec_content/above_gcse are triaged (they won't be: leave S6 open and say why). Update P5 spend and month total, giving both the recorded figure and the "up to" figure.

8. Report verbatim: audit-lessons summary lines, check-rewrite output, check-cp-order result, the eight walk lines, spec-check per-lesson counts and cost. Commit, push, report the hash.

```

After the push I'll verify from a fresh pull. I'll read the five new checkpoints against their key points, and check the spec-check result file directly rather than relying on Claude Code's summary of it.
