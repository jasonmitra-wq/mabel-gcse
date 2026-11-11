Brief from the planning chat, 2026-11-11: tutor tracks what it taught,
Jason's session faults, and a fault list that stops repeats. First save
this whole message, word for word, to
docs/briefs/2026-11-11-coverage-and-faults.md and commit "Brief:
coverage and faults". Jason approved this change to shared teach-mode
code by pasting it.

Context: Jason tried p2-current-voltage as an AI lesson (laptop, live
site at f52b2fd) and found, within minutes, faults the testers passed.
Silly mistakes reaching Jason must stop. The cause: the judge only
checked a narrow pass list, and nothing read the lesson as a teacher
would.

FAULTS JASON FOUND (2026-11-11):
F1  Repetition: "1 ampere is 1 coulomb each second" 4 times; the
    running track 3 times; after current was taught, the told part
    restarted from "Every torch, phone and kettle…".
F2  Lines out of context: "To find it, multiply the current by the
    time in seconds" ("it" = charge, not in the message); "So it does
    not matter where you put the ammeter…".
F3  Term used before it is explained: ammeter (then two ammeters in
    the widget).
F4  Four "First, a word you'll need" boxes in a row, one for a term
    "the next key point explains" (potential difference).
F5  Two new terms in one message (resistor and resistance).
F6  "That's fine. I don't know." (her words echoed by the tutor),
    twice.
F7  After "don't know", a harder question, not an easier one.
F8  Answer given just before the question that asks for it (resistor
    makes the lamp dimmer → "bigger resistance, what happens to the
    lamp?").
F9  Opening says "good luck with your GCSE revision"; she is learning
    it for the first time.
F10 "To find it…" came before "The equation is Q = I t"; the equation
    line is bolted on and never says what Q, I and t stand for or
    their units.
F11 Worked example shown twice (chat message and card); three buttons
    ("Show the first step", "Show me another", "Next"); Next skips the
    example before any step is seen.
F12 Predict-first widget: the right option contains the explanation
    that "Now explain it" then asks for; "Now explain it" shows before
    she has closed the switch; supply drawn as a "2 V" box, not the
    cell symbol taught; the slider says "potential difference" (next
    key point); "Add a cell"/"Take a cell away" not needed; "Good
    prediction" (stock praise); "as if there were only one wire"
    (muddled).
F13 Sidebar diagram stays on "Measuring the current" while she is on
    a different circuit.

0. Confirm you are on this PC in C:\dev\mabel-gcse (or a worktree), no
   other Claude Code session running, git status --porcelain empty,
   git pull. Push with git push origin HEAD:main.

1. FAULT LIST. Create docs/FAULTS.md: every fault Jason has reported,
   each with an id, one real example, the date, and how it is checked
   (code check name, or "reviewer"). Include F1–F13 above and every
   fault in docs/briefs/2026-10-19-pilot-feedback-v3-1.md and
   docs/MABEL-FEEDBACK.md. It only ever grows. RUNBOOK rule: a fault
   Jason finds that is already in FAULTS.md is a failure of the
   checks; fix the fault AND the check. A new kind of fault is added
   to FAULTS.md in the same commit as its fix.

2. Gate 0: for each of F1–F13, say which code path produced it (model
   teaching, told piece, told fallback, word box, marking reply,
   widget, sidebar). Say whether the TELL_FIX model-written told
   pieces ran or fell back, and why. Counts as usual.

3. Fixes, behind a new flag COVER_FIX (on by default; flags off stay
   byte-identical on 5 lessons):
   a. Coverage from the tutor: each key point's teaching items get ids;
      every tutor reply ends with a hidden list of the item ids it
      taught (stripped before display). Code checks each claim (its
      numbers, bold terms and key terms must appear in the reply) and
      ignores failed claims. No word-overlap inference.
   b. Nothing told verbatim. Uncovered items are explained by the
      tutor, in context, in lesson order, one idea per message, ≤60
      words, told what has already been said. A sentence restating a
      fact already given in the lesson is dropped in code. No sentence
      may open with a pronoun or So/This/That/It unless its referent
      is in the same message.
   c. New terms: at most one per message, explained inside the
      sentence that first uses it ("the ammeter, the meter that
      measures current"). No "First, a word you'll need" boxes. A term
      belonging to a later key point is never introduced. Every term
      used in a widget, diagram or button is explained before that
      widget appears.
   d. Equations: introduced in one message that names each symbol with
      its quantity and unit (Q is charge in coulombs, I is current in
      amperes, t is time in seconds), before any line that uses the
      equation in words.
   e. Worked examples: the question appears once (the card only); one
      button at a time ("Show the first step", then "Next step"…);
      "Show me another" and Next appear only after the last step.
   f. "Don't know": never echoed. The next step is easier: a smaller
      piece of the same idea or a hint, never a new or harder
      question. A question never comes straight after a sentence that
      states its answer.
   g. Predict-first widgets: options are short predictions with no
      explanation in them; the explanation is shown only after she
      tests it; "Now explain it" appears only after she has used the
      control the prompt names; supply drawn with the taught cell
      symbol; only the controls the prediction needs (no slider or
      cells in key point 1; no term from a later key point); wording
      plain and accurate; no stock praise.
   h. The sidebar diagram always shows the picture for the current
      step (or nothing).
   i. The opening treats her as meeting the topic for the first time
      (no "revision").

4. CHECKS THAT CATCH THESE, so Jason doesn't:
   a. Code checks (free), added to tools/check-kp-run.js or a new
      tools/check-transcript.js that runs on every saved transcript:
      the same fact twice in a lesson; pronoun/So/This/That/It opener
      with no referent in the message; more than one new term in a
      message; a term (from the glossary) used before it is explained;
      her words echoed; a question straight after a sentence stating
      its answer; an equation used before its symbols are named; a
      worked-example question shown twice; stock praise list; the word
      "revision"; a widget showing a term not yet taught. Each check
      names its FAULTS.md id. Prove each fails on Jason's pattern with
      COVER_FIX off.
   b. Reviewer (paid): tools/review-lesson.js. The strongest model
      (check the exact name with GET /v1/models) reads a whole site-
      test transcript AND its screenshots, as an experienced physics
      teacher teaching a 15-year-old for the first time, with the
      whole of docs/FAULTS.md as its checklist. It reports every
      instance of every listed fault, plus anything else a teacher
      would object to, each with turn number and quoted text. It is
      not a pass/fail on a short list.
   c. A student who answers like Mabel: add --persona mabel to
      tools/site-test.js: one- to three-word answers, misspellings
      ("electricty"), "dont know" about a quarter of the time,
      occasionally "what?" or a short question, never asks to stop,
      takes no extras. Keep --persona willing.

5. Paid runs: one tools/site-test.js --persona mabel run on
   p2-current-voltage at LAPTOP size, key points 1 and 2 only (cap
   $1.50); then tools/review-lesson.js on it (cap $1.50). Fix every
   finding once, with free checks; then one more mabel run on key
   points 1 and 2 plus review (caps $1.50 each). Report every reviewer
   finding from both rounds, with turn numbers.

6. STATE: runbook position "Phase A, A9: evidence pilot gate. AI
   lesson NOT ready (Jason's session 2026-11-11); slides ready." It
   returns to "ready" only when the second review finds no FAULTS.md
   item AND Jason has tried key points 1 and 2 himself and says so.
   ESCALATIONS entry, spend table. Commit. Push. Report the hash,
   Gate 0 causes, each fix, each code check proven to fail on the
   old pattern, both reviewer reports in full, and the API cost.
