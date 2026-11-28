Brief from the planning chat, 2026-11-28 (pasted by Jason), saved word for word. Jason's change in chat the same day: "P5-TRIAGE.md is now at C:\dev\mabel-gcse\P5-TRIAGE.md (md5 034f8323b194fe7269395087137b52dd). Run the triage brief from step 0 with this change: copy it from the repo root instead of OneDrive, check the md5, then move it to docs/briefs/2026-11-28-p5-triage.md (git mv is not needed; it is untracked) so the repo root is left clean. Everything else as briefed."

P5 spec-check triage: apply the planning chat's decisions (Jason approved 2026-11-28: Higher tier taught and labelled; the CUT/REWORD rows; weight content in p5-newtons-laws only; spec-check spend up to 0.80 USD over the P5 cap). One commit.

0. git pull; HEAD must be ff68066 or later. Copy P5-TRIAGE.md from OneDrive Documents\Claude Projects\Mabel (search by name if the path differs) to docs/briefs/2026-11-28-p5-triage.md. Check md5 = 034f8323b194fe7269395087137b52dd; stop if it differs. Check data/spec/physics.md md5 against data/spec/MANIFEST.md. Run node tools/audit-lessons.js and record the baseline.

1. Apply every row of P5-TRIAGE.md to the lesson files in lessons/physics, row by row:
   - ADD: write from the quoted spec text, plain English per tools/plain-english-rules.md, sentences of 20 words or fewer, science terms exactly as the spec writes them. Put each addition in the key point it belongs to. Required practical 7 goes into p5-newtons-laws as its own section.
   - HT: label each Higher-only addition, and the Higher content already in the files that the triage names (fluid-pressure M0), with the label the lessons already use for Higher content. Find that label in the existing lesson files first and report which one you used. If none exists, use "Higher only:" at the start of the paragraph, and say so.
   - [check] rows: take figures only from data/spec/physics.md, the lesson's existing figures, or the Paper 2 mark schemes in data/exam (MANIFEST). Quote the source for each figure in the fix log. If no source has a figure, do not write that figure: log it as "unsourced, not written".
   - gravity A3 (centripetal force): search the Paper 2 mark schemes for "centripetal". Found → keep it and quote one mark-scheme line. Not found → reword to the spec wording.
   - CUT/REWORD: as each row says. For momentum A0, remove "impulse" from every field of p5-momentum.json and report the count. Rewrite forces-motion worked example 1 with v² − u² = 2 a s.
   - D3: move nothing out of p5-gravity's key points without a home. Drop 4.5.1.3 from p5-gravity's specRef. Check that p5-newtons-laws now carries every 4.5.1.3 point: gravitational field, centre of mass, W ∝ m, newtonmeter. In ESCALATIONS, mark the mass/weight overlap item resolved by this decision. The duplicate key point text stays as it is for now; report its location.
   - KEEP rows: no change.
   Never change a keyTerm, table or heading except where a row says so; log each one that you do change.

2. Diagrams: do not draw the two new diagrams (newtons-laws resultant of two forces by scale drawing; stopping-distance speed against stopping distance for several vehicles). Add them to the S4 list in STATE as needed, with the lesson and key point.

3. Script fix (approved earlier, not yet run): in lessons/physics/p5-fluid-pressure.script.json step "3.3", change "This upward force from a liquid is called upthrust." to "This upward force from a liquid or a gas is called upthrust." Search the script for any other place that says only a liquid gives upthrust; report the count and fix each the same way. Bump the script version the way 44884a4 did. Make no other script changes.

4. Log every change, old and new text, with the triage item ID (for example "forces-motion M6"), in tools/spec-check-results/P5-FIX-LOG.md under "2026-11-28 triage".

5. Self-check, and fix until clean, before step 6:
   - audit-lessons: no ERROR or WARN on the P5 lesson files.
   - check-rewrite ff68066: failures only on logged changes. List each failure next to its log entry.
   - check-cp-order: PASS. check-versions: ok.
   - check-script on all eight P5 lessons: walk 0.

6. Spec-check 3, one lesson at a time as before, stopping before the total could pass 0.81 USD (0.21 left plus the approved 0.60). Report per lesson: factual_errors, checkpoint_mismatch, missing_spec_content, above_gcse, cost. For each remaining item, say whether it is a triage row you could not apply (and why) or a new item. Fix new factual_errors and checkpoint_mismatch in one round. List anything else in ESCALATIONS under "P5 spec-check 3", without fixing it.

7. Correct the above_gcse count from spec-check 2 everywhere it says 19 (STATE, ESCALATIONS): the result files hold 16. STATE P5 row: S6 met only if spec-check 3 has factual_errors 0, checkpoint_mismatch 0, and every remaining missing_spec_content or above_gcse item is an "unsourced, not written" figure or a logged KEEP. Otherwise leave S6 open and say what is left. Record that teaching is Higher tier in the STATE header, and the spend (P5 total; month recorded and "up to").

8. Report verbatim: the baseline and final audit-lessons summary lines, check-rewrite output, check-cp-order, check-versions, the eight walk lines, the spec-check 3 table and its cost, and the counts of rows applied, unsourced, and kept. Commit, push, report the hash.
