# Plain-English rewrite rules

For rewriting lesson text so a 15-year-old learning it for the first time can
read it easily. Target: reading grade 9 or below on `tools/audit-lessons.js`,
and no sentence over 20 words.

## Change

- One idea per sentence. Aim for 8–12 words; never more than 15.
- Split long sentences at "—", ";", "which", "because", "so". Two short
  sentences beat one long one.
- Brackets that hold an aside become their own sentence.
  "Gases exert pressure (particles hit walls)" → "Gases exert pressure. This is
  because particles hit the walls."
- Everyday words over formal ones: use, not utilise; show, not demonstrate;
  about, not approximately; needed, not required.
- Speak to her as "you". Never name her. Never name the exam board, a paper
  number or the specification.
- Replace a slash between words with "and" or "or". Keep slashes in units
  (m/s, kg/m³).
- Keep every `<strong>…</strong>` tag around the same words.

## Never change

- Any science term, key term, named example, case study, person or place.
  The words she will be marked on stay exactly as they are.
- Any number, unit, equation, formula or state symbol — including numbers
  written as words ("three", "a thousand", "half").
- The meaning. Do not add a fact. Do not remove a fact. If a sentence can't
  be shortened without losing something, leave it long.
- These fields, at all: `keyTerms`, `tables`, `heading`, `title`, `id`,
  `topic`, any diagram field, `videos`, `videoLinks`, `examFlag`, `cardFlag`,
  `referenceOnly`.
- Checkpoints: reword the question, options and feedback, but keep the same
  number of options in the same order, so `correct` still points to the
  right one.

## Check before commit

1. `node tools/check-rewrite.js` — every changed lesson must say `ok`.
2. `node tools/audit-lessons.js` — the batch's lessons should be at grade 9
   or below with no sentence over 20 words. Report any that aren't, and why.
