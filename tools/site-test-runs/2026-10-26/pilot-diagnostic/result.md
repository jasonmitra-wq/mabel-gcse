# Site test: pilot-diagnostic (pilot, 2026-10-26)

**FAIL** · cost $0.1486 (1 tool calls, 0 calls from the site; tutor claude-sonnet-5-5 $0.0000)

## Judge

```json
{
  "broken": [
    {
      "what": "After finishing the quick check, Electricity opens part-way down the page, not at the top. The Electricity heading, the back button and the 'Quick check before you start – Done: see what it showed' row are scrolled out of view.",
      "step": "[check] once done, Electricity opens straight to the lessons (screenshot 13-electricity-after)"
    }
  ],
  "looks_wrong": [
    {
      "what": "The page is scrolled down on arrival. The top card is cut off at the top edge ('Post-test: Current and potential difference' is half hidden under the header) and the topic title is missing.",
      "screenshot": "13-electricity-after-phone.png",
      "stops_use": false
    },
    {
      "what": "The page is scrolled down on arrival. The top row is cut off under the header and the title and the quick-check row are not visible.",
      "screenshot": "13-electricity-after-laptop.png",
      "stops_use": false
    },
    {
      "what": "One lesson card ('Components — symbols, thermistors and LDRs') is stuck in a green highlighted, shifted hover state with no tap on it. It sits out of line with the other cards.",
      "screenshot": "13-electricity-after-phone.png",
      "stops_use": false
    },
    {
      "what": "A random lesson card ('Series and parallel circuits') shows a green highlight and is nudged right out of line with the other cards, like a left-over hover state.",
      "screenshot": "14-electricity-reopened-laptop.png",
      "stops_use": false
    },
    {
      "what": "The Marks breakdown reads '\"what really happens\" 0/2; maths and basics 4/4'. The label in quotes looks like a leftover internal tag and is unclear to a student.",
      "screenshot": "12-my-record-phone.png",
      "stops_use": false
    },
    {
      "what": "The Lessons box lists 'Current and potential difference' and 'Components'. These names do not match the lesson cards ('Current, potential difference and resistance', 'Components — symbols, thermistors and LDRs'), and the intro says 'two Electricity lessons' while six lessons are listed.",
      "screenshot": "12-my-record-laptop.png",
      "stops_use": false
    }
  ],
  "would_quit": false,
  "fixes": [
    {
      "target": "Electricity topic view render (after quick check done / reopen)",
      "change": "Call window.scrollTo(0,0) when the topic view mounts, so the title and the 'Quick check – Done' row are visible first."
    },
    {
      "target": "Lesson card CSS :hover / transform rule",
      "change": "Wrap the hover highlight and translate in @media (hover:hover) so it does not stick on touch. Make sure no card is focused or highlighted on load."
    },
    {
      "target": "My record → Tests table, marks breakdown label",
      "change": "Replace '\"what really happens\" 0/2' with plain words, e.g. 'How circuits work 0/2'."
    },
    {
      "target": "My record → Lessons section and intro text",
      "change": "Use the same lesson titles as the topic cards. Say which two lessons are being recorded, e.g. 'the two pilot lessons: Current, potential difference and resistance; Components'."
    }
  ]
}
```

## Transcript

    Pilot test diagnostic (Quick check before you start).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    [check] OK: opening Electricity shows the quick check on its own screen — start button true, "Not now" true, lesson cards on screen 0
    [screenshot 02-quick-check-offer-phone.png and 02-quick-check-offer-laptop.png] quick-check-offer
    [screenshot 03-question-1-phone.png and 03-question-1-laptop.png] question-1
    Question 1 (recall): right
      Feedback: If a = b × c, which of these is right? / Right: to get c on its own, you divide a by b. / In the lesson: a worked example turns an equation round like this to find a missing number.
    [screenshot 04-feedback-1-phone.png and 04-feedback-1-laptop.png] feedback-1
    Question 2 (calculation): typed {"t":"180"}
      Feedback: How many seconds are there in 3 minutes? / Right: 3 minutes is 3 × 60 = 180 seconds. / In the lesson: a worked example changes 2 minutes into seconds first: 2 × 60 = 120 s.
    [screenshot 05-feedback-2-phone.png and 05-feedback-2-laptop.png] feedback-2
    Question 3 (recall): right
      Feedback: How many amperes is 250 milliamperes (250 mA)? / Right: milli means a thousandth, so 250 mA is 250 ÷ 1000 = 0.25 A. / In the lesson: a worked example starts with 1.2 kJ. Kilo means a thousand, so there you multiply by 1000.
    [screenshot 06-feedback-3-phone.png and 06-feedback-3-laptop.png] feedback-3
    [screenshot 07-question-4-phone.png and 07-question-4-laptop.png] question-4
    Question 4 (graph): typed {"I":"0.4"}
      Feedback: Use the graph. What is the current when the potential difference is 4 V? / Right: up from 4 on the bottom axis to the line, then across to 0.4. / In the lesson: you will read numbers off graphs like this, and drag a point along them to watch the numbers change.
    [screenshot 08-feedback-4-phone.png and 08-feedback-4-laptop.png] feedback-4
    Question 5 (recall): wrong (M1)
      Feedback: You have a bulb, some wire and a battery (the kind that goes in a torch). How do you make the bulb light up? / Not quite. / The answer: two wires, making a loop from the battery, through the bulb and back. / Electricity only flows if it can go all the way round and back to the battery. / With one wire there is a gap, so nothing flows and the bulb stays dark. / In the lesson: you will try this on a circuit on screen. Open the switch, which makes a gap, and watch the bulb go out.
    [screenshot 09-feedback-5-phone.png and 09-feedback-5-laptop.png] feedback-5
    Question 6: I don't know
      Feedback: A bulb is joined to a battery (the kind in a torch) in one loop of wire. The bulb is lit. Compare the flow of electricity going into the bulb with the flow coming out of it. / That's fine. / The answer: the same amount flows in and out. / The bulb does not use up the flow. It all carries on round the loop. / So the flow is the same all the way round the loop. / In the lesson: you will test this on a circuit on screen, with a measuring dial before the bulb and one after it.
    [screenshot 10-feedback-6-phone.png and 10-feedback-6-laptop.png] feedback-6
    [screenshot 11-result-phone.png and 11-result-laptop.png] result
    [check] OK: the app marks the test as js/pilot/tests.js does (worked out independently) — app 4/6, misconceptions M1; independent 4/6, M1
    [screenshot 12-my-record-phone.png and 12-my-record-laptop.png] my-record
    [screenshot 13-electricity-after-phone.png and 13-electricity-after-laptop.png] electricity-after
    [check] OK: once done, Electricity opens straight to the lessons — lesson cards 11, "Done: see what it showed" true
    [screenshot 14-electricity-reopened-phone.png and 14-electricity-reopened-laptop.png] electricity-reopened
