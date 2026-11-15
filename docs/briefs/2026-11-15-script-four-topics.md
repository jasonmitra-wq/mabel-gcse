Brief from the planning chat, 2026-11-15: scripted AI lessons for
Energy, Electricity, Particle model, and The Changing Economic World.
First save this whole message, word for word, to
docs/briefs/2026-11-15-script-four-topics.md and commit "Brief: script
four topics". Jason's decision (2026-11-15): finish Energy,
Electricity, Particles of matter and The Changing Economic World
first.

0. Confirm you are on this PC in C:\dev\mabel-gcse (or a worktree), no
   other Claude Code session running, git status --porcelain empty,
   git pull. Push with git push origin HEAD:main. Read
   docs/RETROSPECTIVE-ai-tutor.md and docs/FAULTS.md.

1. Install Phase B in docs/RUNBOOK.md (this session does this step and
   then the first topic):

   PHASE B — scripted AI lessons, one topic per session.
   Topic order: P2 rest (p2-series-parallel, p2-power-energy,
   p2-domestic, p2-static), P1, P3, G5. Then STOP: "Four topics done;
   planning chat decides what's next." Lessons within a topic in
   syllabus order.
   For each topic:
   B1 Evidence: exam question types, mark-scheme points and
      examiner-named errors for the topic's spec sections (Physics:
      data/exam/, Paper 1); misconceptions with opened sources,
      appended to tools/pilot/misconceptions.md; a prerequisite map
      data/prereq/<subject>-<topic>.json.
   B2 Fact check (tools/spec-check.js) on each lesson file; fix errors
      in the lesson file, logged.
   B3 Script each lesson (lessons/<subject>/<id>.script.json), from
      the lesson file, spec text, B1 evidence and FAULTS.md, in the
      shape of the two pilot scripts.
   B4 node tools/check-script.js <id> to zero; one paid
      tools/review-lesson.js --script <id>; fix; walk to zero; Claude
      audits the reading copy itself (runbook rule, 2026-11-12); fix;
      walk to zero. A second paid review only if the first found an
      F-numbered fault more than twice.
   B5 Add the lesson to SCRIPTED_LESSONS (js/teach-script.js). One
      tools/site-test.js --persona mabel run per lesson, laptop, no
      judge; check-transcript on it; fix breakage once.
   B6 Free checks (check-versions, check-kp-run --jason,
      check-widget-cover, check-script on every scripted lesson).
      STATE: the topic's row, scripted lessons, spend; runbook position
      to the next topic. Commit, push. Report: lessons scripted, review
      finding counts before/after, site-test results, cost. Then
      "Topic done. Type Continue in a new session."
   Spend: stop a topic at $12 and report. Stop the phase when STATE's
   month spend reaches $95 of the $100 cap ("Monthly cap: type
   Continue after the 1st, or raise the cap").
   STOP and ask Jason only for: a blocked download he must do; a fact
   dispute after one fix round; deleting a file; a change to shared
   teach-mode code beyond adding lessons to SCRIPTED_LESSONS. When
   Jason types "Mabel: delayed test done", pause at the end of the
   current topic, run tools/pilot/analyse.js, report against
   tools/pilot/success-criteria.md, and wait.

   G5 EXTRA STEPS, before B1 for G5:
   G-a Spec text: download the exam board's Geography 8035
       specification (filestore.aqa.org.uk/resources/geography/
       specifications/AQA-8035-SP-2016.PDF) to data/spec/src/, extract
       data/spec/geography.md, record md5s in data/spec/MANIFEST.md
       (gitignored, as for the sciences). Add specRef to the three G5
       subtopics in data/geography-syllabus.json. If blocked, STOP and
       ask Jason to download it once.
   G-b Exam evidence: Paper 2 (80352) question papers, mark schemes and
       examiner reports, specimen to latest, to data/exam/ with
       MANIFEST. Section B is The Changing Economic World. The planning
       chat already found these examiner points (2022, 2023 reports);
       confirm and add others: debt relief confused with loans; aid
       confused with microfinance, tourism or TNCs; "rate" not
       understood as per population per year; generic
       development-environment links (best answers used Shell in
       Nigeria); limitations of a measure answered with what it doesn't
       show; "physical causes" not understood; interquartile range
       given as the range; a science-park map question.
   G-c Coverage gaps the planning chat found (verify against the spec
       text, then add to the lesson files, plain-English rules, through
       steps b–f of the lesson pipeline): the Demographic Transition
       Model and its link to development (absent); international
       migration as a consequence of uneven development (absent); the
       required example of tourism reducing the gap in one LIC or NEE
       (only generic tourism; choose one named example and source its
       facts); every sub-point of "Economic futures in the UK" (science
       and business parks absent from g5-uk-economy; check transport
       infrastructure, rural change, the UK's place in the wider
       world). Anything else in 3.2.2 not taught.
   G-d Figures: every real-world figure in the three G5 lessons gets a
       source and year opened in this session (World Bank, UNDP, ONS or
       similar), or is cut. Known suspects: Nigeria GNI per head "about
       $2,100" (likely stale after the naira devaluation), Nigeria
       population and economy size, oil share of exports, Grameen
       "97% repayment", extreme poverty 36% to 8.6%, HIPC "36
       countries", USA/UK/Niger GNI, Japan and Sierra Leone life
       expectancy, UK 41m visits. Set figuresSourced true only when
       every figure is sourced. Sources listed in
       tools/pilot/g5-figures.md.

   Set STATE's runbook position to "Phase B, topic P2 rest". Commit,
   push.

2. Then run Phase B for the first topic (P2 rest) and stop at its
   "Topic done" line.
