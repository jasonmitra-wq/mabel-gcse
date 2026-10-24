# Lesson shape v3

The shape every rewritten lesson follows (runbook v3, section 3). The
checker `tools/check-lesson-v3.js` tests everything here that a script can
test. The reference for tone is `lessons/biology/b3-defences.json`: it
teaches; it is not a list of exam statements.

## The reader

A 15-year-old meeting the idea for the first time, reading on a phone. She
has not seen the earlier lesson's words unless the lesson says where they
come from. The lesson is about 15 minutes: about 1,200 words of teaching
text (all `keyPoints[].content` together). A longer lesson is split into two
lessons in the syllabus file.

## Order

One key point per specification idea, in specification order. Each key
point's `content` runs:

1. **Why it matters** — one or two sentences she cares about.
2. **What you would see or do** — something concrete: a torch, a kettle, a
   reading on a meter.
3. **The idea** — in everyday words.
4. **Its proper name** — the specification term, marked
   `<dfn>term</dfn>` the first time it appears, with the everyday words
   right next to it.
5. **How it is used** — what you do with it, which leads into the exam box.

## Plain English

- Short sentences where possible. Any sentence may run to 25 words; a
  sentence carrying "because" or "so" may run to 30. Nothing is longer.
- Specification terms are taught, then used exactly. Where plain words do
  the job, use plain words — do not repeat the term in every line.
- Every term is explained in everyday words the first time it appears
  (`<dfn>term</dfn>`), or is listed in `prerequisites` with the earlier
  lesson that teaches it. A term counts as a "glossary term" if it is in the
  subject glossary (`data/glossary/<subject>.json`) or in this lesson's
  `keyTerms`.
- Comparisons ("it is like…", "think of…", "imagine…") are welcome when
  they show the idea. Each one goes in the key point's `analogies` with one
  line on where it stops being true.
- Never: the exam board's name, code or paper numbers; tier labels (higher,
  foundation, "HT"); specification numbering ("4.2.1.2", "required
  practical 3"); her name. Physics: never bond, bonds, bonded or bonding.
- No real-world figures, prices or dates unless the lesson's `sources` field
  gives where they come from.

## Fields

New fields sit beside the existing ones. Keep every other field of the old
file (`id`, `topic`, `basics`, `diagrams`, `revisionCardBullets`, `tables`,
`videoLinks`, …). Each key point keeps `heading`, `examFlag`, `cardFlag`,
`diagram`, `diagramCaption`, `keyTerms`, `memTip`.

Lesson level:

```json
"prerequisites": [ { "term": "Energy", "lesson": "p1-energy-stores" } ],
"sources": [ "where any real-world figure comes from" ],
"specChecklist": [
  { "ref": "4.2.1.2#1", "says": "charge flows only round a closed circuit with a source", "keyPoint": 0 },
  { "ref": "4.2.1.4#6", "says": "thermistor resistance falls as temperature rises", "taughtIn": "p2-components" }
]
```

- `specChecklist` has one entry for every statement of every `specRef`
  section of the lesson (see "Statements" below). `says` is a paraphrase of
  at most 12 words — never specification text. `keyPoint` is the index of
  the key point that teaches it; `taughtIn` names another lesson instead
  (for sections two lessons share).
- `prerequisites`: each term used but not taught here, with the earlier
  lesson whose `keyTerms` or `<dfn>` teach it.

Key point level:

```json
"content": "teaching text with <dfn>term</dfn> marks and <strong> where useful",
"analogies": [ { "text": "like a pump pushing water round pipes", "limit": "no water leaves the circuit; charge is not used up" } ],
"writeBullets": [ "at most three", "short (14 words or fewer)" ],
"examBox": {
  "definitions": [ "Electric current is the rate of flow of electrical charge." ],
  "equations": [ {
    "id": "Q=It",
    "words": "charge flow = current × time",
    "symbols": "Q = I t",
    "formula": "Q = I * t",
    "units": [ { "symbol": "Q", "quantity": "charge flow", "unit": "coulombs", "unitSymbol": "C" } ]
  } ]
},
"workedExamples": [ {
  "equation": "Q=It",
  "question": "A current of 2 A flows for 3 minutes. How much charge flows?",
  "given": { "I": 2, "t": 180 },
  "find": "Q",
  "steps": [
    { "text": "Time must be in seconds: 3 minutes = 3 × 60 = 180 s.", "calc": "3*60", "value": 180 },
    { "text": "Write the equation: Q = I t." },
    { "text": "Put the numbers in: Q = 2 × 180.", "calc": "2*180", "value": 360 },
    { "text": "Q = 360 C." }
  ],
  "answer": { "value": 360, "unit": "C" }
} ]
```

- `examBox` is the exam's own wording: exact definitions, and each equation
  in words and symbols with every symbol's quantity and unit. Every key point
  has one (at least one definition or equation).
- `formula` is the equation in JavaScript syntax (`*`, `/`, `**`), used only
  by the checker. It need not be rearranged: the checker solves it for
  `find`.
- Every equation in any `examBox` has at least one worked example
  (`workedExamples[].equation` = the equation's `id`). Steps are small:
  unit conversion and any rearranging each get their own step. A step with a
  number to check carries `calc` (JavaScript) and `value`. The final answer
  must equal the formula solved with `given` (to 3 significant figures), and
  appear in the last step's text.
- `checkpoints["<i>"]`: one quick "try it" question per key point, testing
  that key point.

## Slides

Slides show only the diagram, the `examBox`, the `writeBullets` (at most
three), and the worked example revealed step by step. The full `content` is
behind "Read the full explanation". So the `writeBullets` and `examBox` must
make sense on their own, and any term in them must be taught in that key
point's `content` or earlier.

## Diagrams

A diagram wherever a picture makes the idea clearer: hand-written SVG in
`diagrams/<subject>/<id>.svg`, `tools/check-diagrams.js` clean, science
checked.

## Statements

The checker reads the statements of a `specRef` from the local
`data/spec/<subject>.md`, from the section's heading to the next heading at
the same or a higher level (sub-sections included; each statement is
numbered within the deepest section that holds it, from 1):

- Each paragraph or bullet of the left-hand column is one statement.
  Quoted blocks (skills column) and headings are skipped, and so are the
  lines "AT skills covered…" and "This practical activity also provides…".
- A paragraph ending ":" followed by bullets is a lead-in: each bullet is a
  statement and the lead-in is not.
- An equation block — a lead-in ending ":" then lines such as
  `charge flow = current × time`, `Q = I t`, `charge flow, Q, in coulombs, C`
  — is one statement per word equation, with its symbol and unit lines.

`node tools/check-lesson-v3.js --statements <id>` lists them with their refs.

## Triage

Use the topic's `tools/spec-check-results/<TOPIC>-TRIAGE.md` decisions as
the to-do list: what was missing, wrong or above GCSE.

## Example key point

```json
{
  "heading": "Electric current — charge on the move",
  "content": "Every torch, phone and kettle works because something is moving through its wires. When you switch on a torch, the bulb lights at once. That happens because tiny charged particles in the wire start to drift round the circuit together. The stuff that moves is called <dfn>electric charge</dfn>: you cannot see it, but you can see what it does. Charge can only flow if there is a complete loop with something to push it, such as a cell. A complete loop like this is a <dfn>closed circuit</dfn>.\n\nHow much charge passes a point each second is the <dfn>electric current</dfn>. It is measured in <dfn>amperes</dfn> (amps, A) with an ammeter. Charge is counted in <dfn>coulombs</dfn> (C). One ampere means one coulomb passing each second. In a single loop, the current is the same everywhere, so it does not matter where you put the ammeter.\n\nTo find how much charge flows, multiply the current by the time in seconds.",
  "analogies": [],
  "writeBullets": [
    "Current is how much charge passes a point each second",
    "Charge flows only round a closed circuit with a cell",
    "One loop: the current is the same everywhere"
  ],
  "examBox": {
    "definitions": [ "Electric current is the rate of flow of electrical charge." ],
    "equations": [ { "id": "Q=It", "words": "charge flow = current × time", "symbols": "Q = I t",
      "formula": "Q = I * t",
      "units": [
        { "symbol": "Q", "quantity": "charge flow", "unit": "coulombs", "unitSymbol": "C" },
        { "symbol": "I", "quantity": "current", "unit": "amperes", "unitSymbol": "A" },
        { "symbol": "t", "quantity": "time", "unit": "seconds", "unitSymbol": "s" } ] } ]
  },
  "workedExamples": [ "…as in the Fields example above…" ]
}
```

## v3.1 additions (every subject)

From docs/briefs/2026-10-19-pilot-feedback-v3-1.md, step 1. They apply to
every lesson in every subject. The checker tests the parts marked
**[check]**.

### a. Pictures build up

A picture shows only what has been taught by the place it appears. Where an
idea needs more parts later, the key point (or a later one) has a sequence of
pictures: for example cell, wires, lamp and switch first; ammeter and resistor
in a later picture, once they are taught.

```json
"pictures": [
  { "diagram": "p2-cv-loop", "after": "it opens a gap in the loop",
    "caption": "A cell, a switch and a lamp in one loop",
    "labels": ["cell", "switch", "lamp"] },
  { "diagram": "p2-iv-resistor-beginner", "after": "plot a graph", "graph": "beginner",
    "caption": "…", "labels": ["current", "potential difference", "origin"] }
]
```

- `after` is a phrase copied from the key point's `content`: the picture is
  shown after the sentence that contains it (in the AI lesson, with the
  message that teaches or tells that sentence; on the slide, in order).
- `labels` are the terms the picture names. Each is a glossary term (the
  subject glossary, this lesson's `keyTerms` or `<dfn>` terms, a `basics` idea
  or a `prerequisites` term). Under the picture they are shown as tappable
  words that open the glossary.
- **[check]** Every label is explained at or before the key point and sentence
  where the picture is shown. The same holds for every word of the picture's
  own SVG `<text>` that is a lesson or glossary term.
- Graphs: a beginner's version first (`"graph": "beginner"`: positive values
  only, the origin labelled and explained). The full version with negative
  values (`"graph": "full"`) only at or after the sentence where the lesson
  teaches reversing (turning a component round). **[check]**
- `diagram` (one per key point) stays for the old views; on a key point with
  `pictures` it is the last picture of that key point.

### b. One comparison per lesson

```json
"comparison": {
  "name": "a running track",
  "words": ["track", "runner"],
  "parts": [ { "thing": "the track", "standsFor": "the circuit" } ],
  "limit": "where the comparison stops being true"
}
```

At lesson level, at most one. Every comparison in the lesson ("is like",
"think of", "imagine" …), in any field including `basics`, uses it (names one
of its `words`), and the tutor uses only it. Key points' `analogies` stay empty
when the lesson has a `comparison`. **[check: at most one]**

### c. Readiness before a practical

A key point that is a practical (`"practical": true`; any heading with
"practical" counts) starts with two quick questions on the ideas it needs:

```json
"readiness": { "questions": [ {question}, {question} ], "recap": "a short recap of those ideas" }
```

If she gets either wrong, the recap comes first.

### d. Worked examples and practice

- Every equation has 2 or 3 worked examples, easy to harder: the later ones
  add a unit conversion or rearranging, each in small steps.
  **[check: at least 2, at most 3; the last one converts a unit or
  rearranges (WARN if not)]**
- Every equation has a practice generator in `js/practice/` (one folder,
  shared by the browser and Node): code that makes a fresh question of the
  same kind with sensible numbers and computes the answer and its steps. The
  generator's id is the equation's `id` (`"Q=It"`). **[check: every examBox
  equation has a generator; its answers recompute from the lesson's
  `formula`; 200 random questions per generator all have sensible values]**
- Slides and the AI lesson both have "Try another": a fresh question as often
  as she likes, her answer checked in code with a tolerance; a wrong answer
  shows the steps one at a time, then offers another.

### e. Hands-on widgets

One or two small interactive widgets per lesson, wherever the idea is
something she can see change (Physics: a circuit, a graph with a draggable
point; Chemistry: a reaction-rate or particle widget; Biology: an enzyme-rate
or population graph; Geography: a data chart; Maths: a number line, a grid for
double brackets, a sliding gradient).

```json
"widget": { "id": "circuit", "options": { "resistor": true }, "intro": "Add cells and watch the ammeter.",
            "labels": ["cell", "ammeter", "resistor"] }
```

The widget's model is code in `js/widgets/widget-models.js` (shared by the
browser and Node) whose numbers follow the lesson's equations and the
specification; `js/widgets/widgets.js` draws it. It shows only ideas already
taught: its `labels` follow the picture rule, at the end of its key point.
**[check: at most two per lesson (WARN if none); each widget has a test in
widget-models.js comparing its numbers with the equation, and the test
passes]**

### f. Making it stick

```json
"ownWords": { "prompt": "In one line, in your own words: what is electric current?",
              "points": ["a flow of charge", "how much charge passes each second"] },
"mixedQuestions": [ {question}, {question} ]
```

- After each key point she writes the idea in her own words in one line. The
  tutor (on slides, a self-check list of `points`) says what is right and
  what is missing.
- Then two quick `mixedQuestions` that mix in earlier key points, not only
  the last one. Each has `from`: the key point index it tests, or an earlier
  lesson's id. From the second key point on, at least one comes from an
  earlier key point.
- Lesson level `endQuiz`: 5 to 8 questions across the whole lesson; any number
  question comes from a practice generator. At least three are multiple
  choice: when she opens the next lesson in the same topic after finishing
  this one, that lesson starts with three of them.
- **[check: every key point has `ownWords` (2 to 4 points) and two
  `mixedQuestions`; every lesson has an `endQuiz` of 5 to 8]**

A question (readiness, mixed, end quiz) is multiple choice or a generator:

```json
{ "question": "…", "options": ["…", "…", "…"], "correct": 0, "explain": "one short sentence", "from": 2 }
{ "generator": "V=IR", "from": 1 }
```

### g. Slides

Slides show all of the above too: the pictures in sequence, the worked
examples revealed step by step with "Try another", the widgets, the own-words
self-check, the mixed questions and the end quiz (the readiness questions
before a practical, the recall questions at the start). Slides stay short:
the full teaching text stays behind "Read the full explanation".

## Evidence layer additions (brief docs/briefs/2026-10-19-evidence-layer.md)

For lessons listed in a prerequisite map (`data/prereq/<subject>-*.json`; so
far the two Electricity pilot lessons).

- **Prerequisite order.** The map lists every idea and term the lessons use,
  what each depends on (maths skills too: rearranging, units, prefixes, reading
  a graph) and where it is taught: `{ "lesson", "keyPoint" }` or "outside these
  lessons". A lesson may only use an idea after its prerequisites, in order.
  **[check: every term the lesson explains or borrows is in the map; an idea is
  introduced where the map says; nothing is used before the key point that
  teaches it or taken from a later lesson unless the basics recap it; each
  prerequisite comes first; a worked example that rearranges or converts has
  that maths skill among its equation's prerequisites]**
- **Predict first.** Every misconception in tools/pilot/misconceptions.md
  ("In scope") is met head-on: she predicts, sees it in a widget, and explains
  it in one line. The items live in the key point's widget,
  `widget.options.predicts`:

```json
{ "id": "cv-add-cell", "from": { "lesson": "p2-current-voltage", "kp": 1 },
  "question": "You add a second cell. What happens to the ammeter reading and to the lamp?",
  "options": [ { "text": "Both go up…" }, { "text": "…", "mis": "M5" } ], "correct": 0,
  "setup": { "cells": 1 }, "try": "Tap Add a cell and watch…",
  "explain": { "prompt": "In one line: …", "points": ["…", "…"] } }
```

  `mis` on a wrong option names the misconception it matches (never on the
  right answer); `setup` puts the widget in the state that shows it.
  **[check: every in-scope misconception is matched by a wrong option in one
  of the group's lessons; each item has try and explain]**
- **Widgets.** One or two different widgets per lesson; the same widget may
  come back at a later key point for its predict-first items.
  **[check: at most two distinct widget ids]**
- **More practice.** Lesson level `morePractice`: links (not copies) shown at
  the end of the lesson, `[{ "label", "url", "source" }]`. **[check]**
