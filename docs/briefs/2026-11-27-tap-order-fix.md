Claude Code prompt: fix the option-order shuffle in the AI lessons and widgets (2026-11-27)
One prompt, one commit. No other Claude Code session may be running in this folder. Pull first; the base commit is d7ef746. Jason has approved the change to shared teach-mode code (2026-11-27, "yes"). Spend cap: $2.00 (site tests).
Fault
`order()` in `js/teach-script.js` (lines 67–72) puts a tap question's options in a fixed order. Its generator line, `h = (h * 1103515245 + 12345) >>> 0; const r = h % (k + 1);`, multiplies two 32-bit numbers in floating point. That loses the low bits, and `% (k + 1)` reads only the low bits, so the order is almost the same for every question. The planning chat ran the real function on 5,000 made-up questions:

* with 4 options, the option stored first lands last 4,993 times;
* with 3 options, it lands first 5 times (positions 1/2/3: 5/3321/1674).

The same line is copied in three more places she sees:

* `js/teach-core.js:2746` (`_order`, the questions in unscripted AI lessons);
* `js/widgets/widgets.js:274` (`_order`, the widgets);
* `js/pilot/pilot.js:223` (`_order`).

`js/pilot/tests.js:208` and `tools/site-test.js:401` use the same constants but divide the whole value. They aren't option orders; leave them alone.
Fix, behind flag `TAP_ORDER_FIX` (on), in each of the four files
Change only the generator line to:

```
h = (Math.imul(h, 1103515245) + 12345) >>> 0; const r = (h >>> 16) % (k + 1);

```

Keep the hash line unchanged. `Math.imul` does the multiplication exactly in 32 bits, and `>>> 16` reads the high bits. The planning chat tested this, keeping the hash: with 4 options, positions came out at 1228/1271/1254/1247 per 5,000, and with 3 options at 1697/1643/1660.
Each file gets its own flag constant, following that file's existing flag pattern. With the flag off, every order must be exactly as it was at d7ef746. Don't touch `js/lessons.js` (CP_SHUFFLE) or `js/lesson-extras.js` (LX_SHUFFLE_FIX); they were fixed differently and they pass their checks.
P4 workaround
The P4 scripts store their right answers in rotating positions to work around the old order. With a proper shuffle, where an answer is stored no longer matters. Leave the P4 scripts as they are, and report their positions after the fix.
Tool: tools/check-tap-order.js
Load each real function in Node, without copying it into the tool. Use the stub-DOM approach of `tools/check-lx-order.js` if it's needed.

1. Scripted lessons: for every tap question in all 24 scripted lessons, report the shown position of the right answer, flag off and flag on, by number of options.
2. Unscripted and widget orders: for `teach-core` and `widgets` (and `pilot`, if it has questions), run every question they can show from the lesson files and widget data. If a source can't be listed, run 5,000 made-up questions instead and say which you used.
3. Fail rule: fail if, with the flag on, any position is more than twice as likely as chance (the same rule as check-cp-order), or if with the flag off any order differs from d7ef746.

Also, a tool fix: scanner skips script files
`tools/audit-lessons.js` (line 184) reads `*.script.json` as lessons, so 24 script files are counted as switched-off lessons with empty content. Skip `*.script.json` in its file filter. Expected result: lessons scanned 177, and the checkpoint-key ERROR falls from 150 to 126 (150 minus the 24 script files). Report the before and after totals in full. It's a tool change only.
Checks

* `node tools/check-tap-order.js`: full output word for word, and it must PASS.
* `check-script` walks on all 24 scripted lessons: 0. If any walk depends on option order, report it.
* `check-cp-order` and `check-lx-order`: still PASS, unchanged.
* `check-polish`, `check-teach-default`, `check-widget-cover`, `check-kp-run --jason` (the same 4 FAIL lines as before is fine), `check-versions`. Bump `?v=` on every changed JS file.
* Site tests: all 24 scripted lessons (laptop, persona mabel, whole lesson, no judge; stop the whole set at $2.00). PASS/FAIL and the cost of each. check-transcript on each.
* Browser: one scripted lesson's tap question and one widget, screenshotted before and after, into tools/site-test-runs/2026-11-27/tap-order/. If no browser tool is available, say so plainly.

End
Report every check's output word for word, and the cost. Close the ESCALATIONS item "engine option order". Update docs/STATE.md (shared fixes, with the flag name and the position counts flag off and on; spend), commit, push, and report the hash.
Gate 0 (what the planning chat checked)

* Read `order()` at `js/teach-script.js` lines 67–72, and its one caller, `shown()` at line 107.
* Searched `js/` and `tools/` for `1103515245`: 8 files. 4 are option orders with this fault (teach-script, teach-core, widgets, pilot). 2 are already fixed differently (lessons.js, lesson-extras.js). 2 aren't option orders (pilot/tests.js, site-test.js).
* Ran the old line and the new one in Node on 5,000 made-up questions (numbers above).
* Shared code touched: yes, `js/teach-script.js` and `js/teach-core.js` (teach-mode, approved), plus `js/widgets/widgets.js` and `js/pilot/pilot.js`.
