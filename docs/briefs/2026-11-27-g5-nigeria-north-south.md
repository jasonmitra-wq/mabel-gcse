Claude Code prompt: g5-nigeria, make the north–south wording match the key point (2026-11-27)
One prompt, one commit. Pull first; the base commit is 782b0f2. Spend cap $0.40 (one site test).
Why
782b0f2 reworded checkpoint 4 so that it only says what key point 5 teaches: the north is poorer than the south now. The same lesson still makes the old claim about change, or other small claims the key point doesn't support. These are the four items logged in ESCALATIONS; close them in this commit.
Changes (exact)
Slide lesson, `lessons/geography/g5-nigeria.json`:

1. Line 287, `memTip`: "Better lives on average, but the south gains most and the delta pays the price." → "Better lives on average, but the north is poorer and the delta pays the price."
2. `keyPoints[4].content`: "Nigeria's GNI per head is still only $1,360, so many people remain poor." → "In 2025 Nigeria's GNI per head was $1,360, so many people are still poor."
3. Line 271, revision bullet: "GNI per head still $1,360 (2025)" → "GNI per head $1,360 (2025)"
4. Line 299, picture label: "Fewer girls finish school" → "Fewer children in school"

AI lesson, `lessons/geography/g5-nigeria.script.json`: 5. Line 613: "…with more poverty and fewer girls finishing school…" → "…with more poverty and fewer children in school…". Change nothing else in that text. 6. Line 634, `idk`: "…but the gains are uneven, with the north gaining less than the south." → "…but the gains are uneven, and the north is poorer than the south."
Search both files for any other "gain"/"gaining"/"gains" about north and south, and for "girls". Report each hit, and change it only if it makes the same unsupported claim. Bump the script version.
Checks

* `node tools/check-rewrite.js 782b0f2`: 0 failed. If it flags the changed `keyPoints[4]` sentence as a lost number, show why; $1,360 is kept.
* `node tools/audit-lessons.js`: G5 sections word for word. Still no ERROR, and checkpoint keys stay at 146.
* `tools/check-script.js` walk on g5-nigeria: 0 findings.
* Lesson-auditor on the six changed lines only: one round.
* One site test of g5-nigeria (laptop, persona mabel, whole lesson, no judge, stop at $0.40). Report PASS/FAIL, the cost, and confirm that she hears the new line 613 text if the run reaches it.

End
Report each check's output word for word. Close the four ESCALATIONS items with this commit. Update docs/STATE.md (G5 row notes and spend), commit, push, and report the hash.
Gate 0 (what the planning chat checked)

* Found each item by searching both files: `g5-nigeria.json` lines 262 (kp 4, "$1,360" without a year), 271, 287 and 299; `g5-nigeria.script.json` lines 613 and 634.
* "Girls" doesn't appear in key point 5's text ("fewer in school"), so the script and the picture label are matched to the key point.
* No code touched.
