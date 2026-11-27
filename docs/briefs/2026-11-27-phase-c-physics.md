Brief from the planning chat, 2026-11-27: Phase C, scripted AI lessons for Physics P4–P8.
First save this whole message, word for word, to docs/briefs/2026-11-27-phase-c-physics.md and commit "Brief: Phase C Physics P4–P8". Jason's decisions (2026-11-27): finish Physics and Geography first, Physics first; every key point has a checkpoint.

0. Set up. No other Claude Code session may be running in this folder. On 2026-11-26 two sessions shared one copy and nearly mixed their commits. Check `git status --porcelain` is empty, then `git pull`. Read docs/RUNBOOK.md (Phase B), docs/FAULTS.md and docs/RETROSPECTIVE-ai-tutor.md.

0.5 One G5 leftover (ESCALATIONS, from 1c82c87). In `g5-nigeria.script.json` step 1.3, change "$1,360 a year, compared with $54,550 in the UK" to say these are 2025 figures, with the fewest words that do it. Walk g5-nigeria to 0, run check-rewrite against the base commit, close the item, and commit it on its own. No site test needed.

1. Install Phase C in docs/RUNBOOK.md (this session does this step, then P4):
PHASE C — scripted AI lessons, Physics P4–P8, one topic per session. Topic order: P4 Atomic structure, P5 Forces, P6 Waves, P7 Magnetism, P8 Space physics. Lessons within a topic in syllabus order.
Steps B1–B6 run exactly as in Phase B, with these changes:
   * C0, before B1: missing checkpoints. Write a checkpoint for every key point that lacks one (rules as in brief 2026-11-27-g5-checkpoints-and-next: tests its key point using only what it has taught, plausible wrong options, all four options about the same length, `correct: 0`, plain English). The planning chat counted 12: p5-forces-motion kp 0, p5-gravity 2, p5-momentum 1, p5-stopping-distance 2, p6-em-spectrum 2, p6-light 2, p6-sound 2, p6-wave-properties 2, p7-induction 2, p7-magnets 1, p7-motor-effect 2, p7-transformers 2. Recount it and report your count. P4 and P8 need none. The lesson-auditor checks each one. The spec-check's `checkpoint_mismatch` must come back clean on every new checkpoint (one fix round; anything still disputed goes to ESCALATIONS).
   * B4 reviews. At most two paid reviews per script, as before. In the report, list the second review's findings by F-number with what was done about each (fixed, or disputed with the reason), not just a count. In Phase B, finding counts barely moved between rounds (G5: 132 → 121) and the leftovers were never accounted for.
   * B6 status words. The topic's row in STATE says "scripted (Phase C)", never "done". Fill the definition-of-done columns S1–S6 and T1–T3 with met (and the commit) or open (and the reason). The planning chat verifies each topic from a fresh pull before the next one starts.
   * End of topic: "Topic scripted. Planning chat verifies, then type Continue in a new session." After P8: "Physics scripted. Planning chat decides what's next."
   * Spend: stop a topic at $12 and report. P5 has 8 lessons and may need it all. Stop the phase when STATE's month spend reaches $95 of the $100 cap ("Monthly cap: type Continue after the 1st, or raise the cap").
   * STOP and ask Jason only for the same things as Phase B: a blocked download; a fact dispute after one fix round; deleting a file; a change to shared teach-mode code beyond adding lessons to SCRIPTED_LESSONS.
2. Run P4 now. P4's lessons are already teach-enabled, with 8 diagrams and S1–S5 met (STATE Physics table), so C0 has nothing to do. Start at B1.

Report at the end of P4:

* lessons scripted;
* each review round's findings by F-number, with what was done about the second round's;
* site-test results;
* the topic's S1–S6 and T1–T3 row;
* cost, and the month total;
* every check's output word for word;
* the hash.
