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
