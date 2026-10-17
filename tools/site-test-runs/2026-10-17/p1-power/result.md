# Site test: p1-power (lesson, 2026-10-17)

**FAIL** · cost $0.0330 (1 tool calls, 0 calls from the site)

## Judge

```json
{
  "broken": [
    {
      "what": "The test tool could not find a clickable 'Revise a topic' control, even though the card is visible in both screenshots. The card is probably not exposed as a link or button with that accessible name, so the p1-power lesson was never reached.",
      "step": "[test stopped: could not find Revise a topic (\"Revise a topic\")]"
    },
    {
      "what": "A resource failed to load with a 404 on the home page.",
      "step": "[console error] Failed to load resource: the server responded with a status of 404 (Not Found)"
    },
    {
      "what": "test could not finish: could not find Revise a topic (\"Revise a topic\")",
      "step": ""
    }
  ],
  "looks_wrong": [
    {
      "what": "The header title 'Mabel's GCSE Tutor' wraps onto three lines next to the nav icons. The top line 'Mabel's' is clipped off the top of the header bar.",
      "screenshot": "01-home-phone.png"
    },
    {
      "what": "The greeting says 'Pick up where you left off — you were doing well.' The cards below contradict it: 'Nothing secured yet — let's start', '0% across all subjects', 'No sessions yet' and 'No cards yet'.",
      "screenshot": "01-home-laptop.png"
    }
  ],
  "would_quit": false,
  "fixes": [
    {
      "target": "Home page 'Revise a topic' card",
      "change": "Make the whole card a real <a> or <button> with the accessible name 'Revise a topic', for example via an aria-label or the heading as the link text, so it can be found by role and name."
    },
    {
      "target": "Home page asset loading",
      "change": "Find the URL returning 404 in the network log and fix the path, or remove the reference."
    },
    {
      "target": "Header title on narrow screens (<480px)",
      "change": "Use white-space:nowrap with text-overflow:ellipsis, or hide the text title and keep only the logo, so it never wraps or clips under the nav icons."
    },
    {
      "target": "Home greeting line selection",
      "change": "Show 'Pick up where you left off — you were doing well' only when the user has at least one past session and progress above 0%. Otherwise show a first-time line such as 'Let's get started'."
    }
  ]
}
```

## Transcript

    [console error] Failed to load resource: the server responded with a status of 404 (Not Found)
    Lesson p1-power (Physics › Energy › Power — how fast energy is transferred).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    [test stopped: could not find Revise a topic ("Revise a topic")]
