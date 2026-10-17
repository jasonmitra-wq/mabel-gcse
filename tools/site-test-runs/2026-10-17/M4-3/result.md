# Site test: M4 (maths, 2026-10-17)

**FAIL** · cost $0.0162 (1 tool calls, 0 calls from the site; tutor claude-sonnet-5-5 $0.0000)

## Judge

```json
{
  "broken": [
    {
      "what": "The test run stopped before any page loaded because the test tool could not find the export line in maths-questions.js. Nothing in the maths warm-up or the M4 topic test was exercised, so no answers were checked and the run gives no evidence either way about the site.",
      "step": "[test stopped: maths-questions.js export line not found]"
    },
    {
      "what": "No screenshots were attached even though the run says phone (390×844) and laptop (1366×768) screens follow, so the layout could not be reviewed at either size.",
      "step": "Screenshots section (empty)"
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
      "target": "maths-questions.js, question bank export",
      "change": "Make sure the file ends with the export the test tool expects (for example a single top-level 'export const questions = [...]' or 'module.exports = { questions }'). If the name or format changed, update the tool's export pattern to match."
    },
    {
      "target": "Test tool, export-line lookup",
      "change": "When the export line is missing, print the file path, the pattern searched for, and the first lines of the file so the mismatch can be fixed straight away."
    },
    {
      "target": "maths-questions.js, M4 entries",
      "change": "Check that the M4 warm-up and topic-test questions are inside the exported array, not in a separate unexported variable, so the tool can load them and recompute independent values."
    },
    {
      "target": "Test tool, screenshot capture",
      "change": "Take screenshots even when the question-file parse fails, at least the landing page at 390×844 and 1366×768, so layout can still be reviewed."
    },
    {
      "target": "Test run",
      "change": "Rerun the full warm-up and M4 topic test on phone and laptop after the export fix, with automatic answer checks against independent values, before judging whether the site works."
    }
  ]
}
```

## Transcript

    [test stopped: maths-questions.js export line not found]
