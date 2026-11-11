# Faults Jason has reported

Every fault Jason (or Mabel) has reported in the AI lesson, with one real
example, the date, and how it is now checked. This list only ever grows.

- **Code check**: a check name in `tools/check-transcript.js` (free; runs on
  every saved site-test transcript and on the scripted run of
  `tools/check-kp-run.js`), `tools/check-widget-cover.js` (free, headless
  browser) or `tools/check-lesson-v3.js` (free, lesson files).
- **Reviewer**: `tools/review-lesson.js` (paid). It reads a whole site-test
  transcript and its screenshots with this file as its checklist and reports
  every instance of every fault below, so every fault is also a reviewer item.

Rule (docs/RUNBOOK.md section 1): a fault Jason finds that is already listed
here is a failure of the checks; fix the fault AND the check. A new kind of
fault is added here in the same commit as its fix.

## Jason's session, 2026-11-11 (p2-current-voltage, AI lesson, laptop, f52b2fd)

| Id | Fault | Real example | Checked by |
|---|---|---|---|
| F1 | The same fact said again later in the lesson | "1 ampere is 1 coulomb each second" 4 times; the running track 3 times; after current was taught, the told part restarted from "Every torch, phone and kettle…" | `repeat-fact` |
| F2 | A line out of context: it opens with a pronoun or So/This/That/It whose referent is not in the message | "To find it, multiply the current by the time in seconds" ("it" = charge, not in the message); "So it does not matter where you put the ammeter…" | `dangling-opener` |
| F3 | A term used before it is explained | "ammeter" used, then two ammeters in the widget, before anything said what an ammeter is | `term-before-explained`, `widget-term` |
| F4 | "First, a word you'll need" boxes, several in a row, including a term a later key point teaches | Four boxes in a row, one for "potential difference" ("the next key point explains it") | `word-box`, `later-term` |
| F5 | Two new terms in one message | "resistor" and "resistance" in one message | `two-new-terms` |
| F6 | Her words echoed back | "That's fine. I don't know." (twice) | `echo` |
| F7 | After "don't know", a harder or new question instead of an easier one | "don't know", then a question on a new part | `idk-harder` |
| F8 | The answer given just before the question that asks for it | "a resistor makes the lamp dimmer", then "with a bigger resistance, what happens to the lamp?" | `answer-before-question` |
| F9 | The opening treats her as revising, not meeting the topic for the first time | "good luck with your GCSE revision" | `revision` |
| F10 | An equation used before it is stated with what each symbol means and its unit | "To find it…" came before "The equation is Q = I t"; Q, I and t never named with their units | `equation-before-symbols` |
| F11 | Worked example shown twice (message and card); three buttons at once; Next skips it before any step is seen | "Worked example: A current of 2 A … How much charge flows?" in the message and on the card, with "Show the first step", "Show me another" and "Next" | `worked-twice`; `check-widget-cover` (worked example card); site tester logs the buttons seen |
| F12 | Predict-first widget: the right option holds the explanation asked for next; "Now explain it" before she has used the control; supply drawn as a "2 V" box, not the cell symbol; controls and terms from later key points (a potential-difference slider, "Add a cell" in key point 1); stock praise; muddled wording | "No: charge needs a complete loop, out of the cell and back again", then "Now explain it: why does the lamp need a complete loop?"; "Good prediction"; "as if there were only one wire" | `stock-praise`, `widget-term`; `check-widget-cover`: options, explain-gate, cell-symbol, controls, praise, later-term |
| F13 | The side-column picture stays on an old step | "Measuring the current" picture still shown while she is on the widget's circuit | site tester check "side picture shows the current step (F13)" after every turn; reviewer (screenshots) |

## Jason's pilot of v3.1, 2026-10-19 (p2-current-voltage, AI lesson)

From docs/briefs/2026-10-19-pilot-feedback-v3-1.md. The brief gives the
faults by number and kind; the original wording of the 16 is not in the repo,
so each example below is the brief's own description.

| Id | Fault | Example (from the brief) | Checked by |
|---|---|---|---|
| P1 | A picture shows parts not yet taught | the first circuit picture showed a resistor and ammeter in key point 1 | `check-lesson-v3` (picture labels explained before the picture) |
| P2 | Terms used before they are explained; messages too long | "Words before use"; over 60 words | `term-before-explained`, `over-60` |
| P3 | Her question not answered first | "what is X?", "why?" passed over | `check-kp-run` (c); reviewer |
| P4 | A key point ticked before all of it was taught or told | tick after one answer | `check-kp-run` (every key point ticked at the end of its sequence) |
| P5 | Pictures not built up step by step | the whole circuit at once | `check-lesson-v3` |
| P6 | More than one idea, or more than 60 words, in a message | "tell me the rest" gave the whole key point at once | `over-60` |
| P7 | Stuck did not mean easier | after two wrong answers, a new idea | `idk-harder`; reviewer |
| P8 | The answer in the question | the question's answer in the same message | `answer-before-question` |
| P9 | More than one everyday comparison | several comparisons in one lesson | `check-lesson-v3` (at most one) |
| P10 | A practical with no readiness questions | the wire practical started cold | `check-lesson-v3` |
| P11 | "Tell me" not one idea per message with Next | the rest in one block | `over-60` |
| P12 | Picture labels not yet taught | a label for a part not yet explained | `check-lesson-v3`, `widget-term` |
| P13 | No worked examples or practice for an equation | Q = I t with no worked example | `check-lesson-v3` |
| P14 | Nothing hands-on | no circuit to try | `check-lesson-v3` |
| P15 | Nothing to make it stick (own words, mixed questions, end quiz) | lesson ended with no recall | `check-lesson-v3` |
| P16 | The tutor's own science, not the lesson's | "goes up by the same amount" for "doubles" | teach-core `_pilotScienceFault`; reviewer |

## Jason, 2026-10-18 (p2-components, AI lesson; brief docs/briefs/2026-10-18-first-time-learner.md)

| Id | Fault | Real example | Checked by |
|---|---|---|---|
| L1 | Several new terms at once in the opening | five new terms in two sentences: fixed resistor, resistance, ohmic conductor, I-V graph, through the origin | `two-new-terms` |
| L2 | A question its own message had just answered | the opening's question answered in the opening | `answer-before-question` |
| L3 | Assumes prior knowledge: written as revision, not for a first-time learner | the lesson read as revision notes | `revision`; reviewer |

## Mabel (docs/MABEL-FEEDBACK.md)

| Id | Fault | Real example | Checked by |
|---|---|---|---|
| M1 | Bored without the interactive AI lesson | 2026-10-17: "bored until she has the interactive AI lesson" | reviewer (would she stay?) |
