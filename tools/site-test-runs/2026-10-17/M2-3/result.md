# Site test: M2 (maths, 2026-10-17)

**FAIL** · cost $0.0130 (1 tool calls, 0 calls from the site; tutor claude-sonnet-5-5 $0.0000)

## Judge

```json
{
  "broken": [
    {
      "what": "The test run aborted before any page loaded: the test tool could not find the export line in maths-questions.js, so neither the maths warm-up nor the M2 topic test was exercised and no maths answers were checked against independent values. No user-facing behaviour can be confirmed as working or broken.",
      "step": "[test stopped: maths-questions.js export line not found]"
    },
    {
      "what": "test could not finish: maths-questions.js export line not found",
      "step": ""
    }
  ],
  "looks_wrong": [],
  "would_quit": false,
  "fixes": [
    {
      "target": "maths-questions.js, question-bank export statement",
      "change": "Restore or add a single top-level export of the question bank (for example a named export that includes the M2 questions) in the form the test tool's loader parses, so the tool can read the questions and recompute independent values."
    },
    {
      "target": "test tool loader for maths-questions.js",
      "change": "Make the parser accept the export form actually used in the file (named export, default export, or module.exports), or import the module directly instead of text-matching the export line, and log the line it expected versus the first 20 lines it found."
    },
    {
      "target": "test run behaviour",
      "change": "Re-run the full warm-up and M2 topic test after the fix, capturing screenshots at 390×844 and 1366×768 for every screen, with [check] lines comparing each accepted or rejected answer to the independent value."
    }
  ]
}
```

## Transcript

    [test stopped: maths-questions.js export line not found]
