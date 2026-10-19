Brief from the planning chat, 2026-10-19 (2): pilot feedback (v3.1).
First save this whole message, word for word, to
docs/briefs/2026-10-19-pilot-feedback-v3-1.md and commit "Brief: pilot
feedback v3.1". Then do it. It applies to every subject and topic
(Physics, Biology, Chemistry, Geography, Maths), now and for every
lesson written later.

Source: Jason worked through p2-current-voltage as an AI lesson and
found 16 faults. Lesson faults are fixed in the lesson shape; tutor
faults are fixed by a targeted, limited change to the frozen tutor (the
only tutor change allowed; it is decided here).

0. Confirm you are on this PC (C:\dev\mabel-gcse or a worktree of it),
   not a cloud container; no other Claude Code session is running on
   this repo; git status --porcelain empty; git pull. Push with
   git push origin HEAD:main.

1. LESSON SHAPE ADDITIONS (all subjects). Add these to
   tools/lesson-shape-v3.md, choosing exact field names there, and to
   tools/check-lesson-v3.js as free checks where marked [check].
   a. Pictures build up (faults 1, 5, 12). A picture only shows what has
      been taught by the point where it appears. Where an idea needs
      more parts later, use a sequence of pictures (for example: cell,
      wires, lamp, switch first; ammeter and resistor added in a later
      picture when they are taught). Every label in a picture is a term
      already explained, and labels are tappable to the glossary.
      Graphs: a beginner's version first (positive values only, the
      origin labelled and explained); the full version with negative
      values only where the lesson teaches reversing. [check: every
      label of a picture is explained at or before the key point and
      sentence where the picture is shown]
   b. One comparison per lesson (fault 9). If the lesson uses an
      everyday comparison (for example a running track for a circuit),
      it is declared once at lesson level, with what each part stands
      for and where it stops being true, and the whole lesson (and the
      tutor) uses only that comparison. [check: at most one]
   c. Readiness before a practical (fault 10). A key point that is a
      practical starts with two quick questions on the ideas it needs.
      If she gets either wrong, a short recap of those ideas comes
      first.
   d. Worked examples and practice (fault 13). Every equation has 2 or 3
      worked examples, easy to harder (the later ones add a unit
      conversion or rearranging), each in small steps. Every equation
      also has a practice generator: code that makes a fresh question
      of the same kind with sensible numbers and computes the answer
      (shared by the browser and Node, in one folder). Slides and the AI
      lesson both have a "Try another" button that uses it, as many
      times as she likes; her answer is checked in code with a
      tolerance; a wrong answer shows the steps one at a time, then
      offers another. [check: every examBox equation has at least 2
      worked examples and a generator; the generator's answers
      recompute; 200 random questions per generator all have sensible
      values]
   e. Hands-on widgets (fault 14). One or two small interactive widgets
      per lesson wherever the idea is something she can see change.
      Examples: Physics, a circuit where she adds cells or moves a
      potential-difference slider and sees the ammeter reading and lamp
      brightness change, or a graph where she drags a point and reads
      off values; Chemistry, a reaction-rate or particle widget;
      Biology, an enzyme-rate or population graph; Geography, a data
      chart she can explore; Maths, a manipulable diagram (for example
      a number line, a grid for double brackets, a sliding gradient).
      The model in each widget is code whose numbers follow the
      lesson's equations and the specification; widgets show only
      ideas already taught. [check: each widget has a test comparing
      its numbers with the equation]
   f. Making it stick (fault 15).
      - After each key point: she writes the idea in her own words in
        one line; the tutor (or, on slides, a self-check list of the
        points it should include) says what is right and what is
        missing.
      - Then two quick questions that mix in earlier key points, not
        only the last one.
      - Each lesson ends with a short quiz across the whole lesson (5
        to 8 questions; any number questions come from the practice
        generators).
      - When she opens a lesson after finishing an earlier one in the
        same topic, it starts with three quick questions on that
        earlier lesson.
      [check: every key point has an own-words prompt and two mixed
      questions; every lesson has an end quiz]
   g. Slides show all of the above too: pictures in sequence, worked
      examples revealed step by step with "Try another", widgets,
      own-words self-check, mixed questions and the end quiz. Slides
      stay short: the full teaching text stays behind "Read the full
      explanation".

2. TARGETED TUTOR FIX (shared teach code, one flag PILOT_FIX, on by
   default; with it off, prompts are byte-identical to now, proved with
   the prompt-building comparison). Only these changes:
   a. One idea per message, every message, including "tell me the
      rest". A hard limit of 60 words per tutor message, enforced in
      code, with no exceptions (faults 2, 6).
   b. One question per message, never two joined ("which… and why?").
   c. Her question first (fault 3): when she asks something ("what is
      X?", "why?", "I'm confused"), the reply answers exactly that, in
      one or two sentences, using the glossary definition where there
      is one, and adds nothing new. Then one easy question that checks
      it.
   d. "Tell me" (faults 6, 11): the rest of the current key point is
      given one idea per message, each with a Next button, using the
      lesson's own wording. The key point then ends with its "worth
      writing down" card. The next key point always starts in a new
      message; never two key points in one message.
   e. Ticks are honest (fault 4): a key point is ticked only when every
      idea in it has been taught or told. The code tracks this per
      sentence of the lesson content.
   f. Stuck means easier (fault 7): after two "don't know" or wrong
      answers in a row, the next message goes back a step: one small
      piece of what she already has, and an easy question she can get
      right. No new idea until she has answered one correctly.
   g. No answer in the question (fault 8): enforced in code (the
      existing check), including rewordings.
   h. Words before use (fault 2): the tutor uses a term only after it
      has been explained in this lesson or an earlier one she has
      opened (the glossary record); otherwise it explains it first, in
      its own message.
   i. Only the lesson's science (fault 16): any statement of a
      relationship, number or rule comes from the lesson file or is
      computed by the practice code; the tutor does not state its own
      versions. "Doubles" means doubles; no "goes up by the same
      amount".
   j. The tutor uses the lesson's one comparison only (1b), the picture
      sequence (1a), offers "Try another" after each worked example
      (1d), shows the widget at its key point (1e), and runs the own-
      words line, the two mixed questions, the end quiz and the opening
      recall questions (1f).

3. RUNBOOK (docs/RUNBOOK.md):
   a. Section 1: replace "The AI tutor is frozen…" with: "The AI tutor
      is frozen except for the PILOT_FIX behaviour in
      docs/briefs/2026-10-19-pilot-feedback-v3-1.md. No other tutor
      changes, no tutor tuning, no tester rounds aimed at tutor
      behaviour."
   b. Section 3 (lesson shape): add "The additions in
      docs/briefs/2026-10-19-pilot-feedback-v3-1.md, step 1, apply to
      every lesson in every subject." Add to the fixed sequence, after
      step a: "a2. Build the lesson's picture sequence, worked examples,
      practice generators, widgets and consolidation items (brief
      v3.1, step 1)."
   c. Phase A: replace A6 with:
      "A6 Rebuild the two pilot lessons with the v3.1 additions and the
         PILOT_FIX tutor (A7–A9).
       A7 Build the practice generators for Q = It, E = QV and V = IR;
          the circuit widget (add cells, potential-difference slider,
          ammeter reading, lamp brightness); the I-V graph widget; the
          picture sequences for both lessons.
       A8 Run both lessons through the fixed sequence again (steps a–f).
          Then: tools/site-test.js once on each at phone size, for
          breakage only; and the text tester once on each, reporting
          (not gating) the counts for: messages over 60 words, two
          questions in one message, her question not answered first,
          two key points in one message, answer in question, term used
          before explained. Any of these above zero is fixed once in
          PILOT_FIX and the text tester re-run once.
       A9 PILOT GATE (again). Update docs/ESCALATIONS.md "Pilot" with
          what changed and what to try (slides and AI lesson; Try
          another; the widgets; the quiz). STOP with: 'Pilot v3.1
          ready. Jason: try Physics → Electricity → Current and
          potential difference, and Components, as slides and as an AI
          lesson. Mabel: do one as an AI lesson. Then type "Pilot: yes"
          or "Pilot: <what to change>", and "Mabel: <what she said>".'
          Continue only after "Pilot: yes"."
   d. Phases B, C and D: each lesson includes the v3.1 additions. Maths
      (Phase D) uses the same picture sequence, worked examples,
      practice generators, widgets and consolidation; its existing
      question bank provides practice where a generator is not needed.
   Commit "Runbook: v3.1 additions for every subject". Push.

4. Set "Runbook position: Phase A, task A7" in STATE. Commit. Push. Then
   follow the runbook from A7.

5. Report, in plain words: what was built for the two pilot lessons
   (pictures, worked examples, generators, widgets, quiz), the A8
   counts before and after, the free-check results, and the API cost.
