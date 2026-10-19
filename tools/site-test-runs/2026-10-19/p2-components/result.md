# Site test: p2-components (lesson, 2026-10-19)

**FAIL** · cost $0.0675 (1 tool calls, 0 calls from the site; tutor claude-sonnet-5-5 $0.0000)

## Judge

```json
{
  "broken": [
    {
      "what": "Opening the lesson 'Components — symbols, thermistors and LDRs' showed the slides view, not the AI lesson that should open by default when TEACH_ENABLED is on.",
      "step": "[check] BROKEN: AI lesson opens by default (in TEACH_ENABLED) — slides opened"
    }
  ],
  "looks_wrong": [
    {
      "what": "The '← Home' button and the 'What are you revising?' heading are cut off by the sticky top bar. Only their bottom halves show.",
      "screenshot": "02-subjects-phone.png",
      "stops_use": false
    },
    {
      "what": "The top of the Energy card is hidden under the sticky header. The page heading and back button are not visible.",
      "screenshot": "03-topics-physics-phone.png",
      "stops_use": false
    },
    {
      "what": "The page loads scrolled down, so the page heading and back button sit above the view. The Energy card is jammed against the header.",
      "screenshot": "03-topics-physics-laptop.png",
      "stops_use": false
    },
    {
      "what": "The lesson opens with a long 'Words from earlier lessons' glossary of 13 definitions. It fills the whole phone screen before any lesson content or controls appear.",
      "screenshot": "05-slides-phone.png",
      "stops_use": false
    },
    {
      "what": "The input box and orange button below the glossary are cut off at the bottom of the screen, so their labels can't be read.",
      "screenshot": "05-slides-laptop.png",
      "stops_use": false
    },
    {
      "what": "The back button says '← Topics', but the user came from the Electricity lessons list. The label does not match where it goes back to.",
      "screenshot": "05-slides-laptop.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "slides",
    "quote": "Words from earlier lessons — This lesson uses these words. Here is what they mean:",
    "why": "A bored 15-year-old gets a wall of 13 definitions she has already seen instead of the AI lesson, and nothing interactive is visible on the phone."
  },
  "fixes": [
    {
      "target": "Lesson open routing (TEACH_ENABLED check for p2-components)",
      "change": "When TEACH_ENABLED is on, open the AI teach view by default, and show slides only when the user picks them."
    },
    {
      "target": "Earlier-lessons glossary card on the lesson start screen",
      "change": "Collapse it to a one-line 'Words from earlier lessons (13) ▸' toggle so the lesson content and Start button show first."
    },
    {
      "target": "Page scroll on navigation (subjects/topics routes)",
      "change": "Scroll to the top on route change, and add scroll-margin-top equal to the header height so headings aren't hidden under the sticky bar."
    },
    {
      "target": "Back button label on lesson screen",
      "change": "Change '← Topics' to '← Electricity' and link it back to the topic's lesson list."
    }
  ]
}
```

## Transcript

    Lesson p2-components (Physics › Electricity › Components — symbols, thermistors and LDRs).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    [screenshot 02-subjects-phone.png and 02-subjects-laptop.png] subjects
    [screenshot 03-topics-physics-phone.png and 03-topics-physics-laptop.png] topics-physics
    [screenshot 04-lessons-p2-phone.png and 04-lessons-p2-laptop.png] lessons-P2
    [check] BROKEN: AI lesson opens by default (in TEACH_ENABLED) — slides opened
    [screenshot 05-slides-phone.png and 05-slides-laptop.png] slides
