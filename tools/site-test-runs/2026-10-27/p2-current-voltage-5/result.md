# Site test: p2-current-voltage (lesson, 2026-10-27)

**FAIL** · cost $0.4405 (11 tool calls, 67 calls from the site; tutor claude-sonnet-5-5 $0.2788)

## Judge

```json
{
  "broken": [
    {
      "what": "The quick check was offered twice. She tapped 'Not now: show the lessons', then got a second identical offer card before the lesson. The lessons list also still marked the quick check 'Start here' after she had declined it.",
      "step": "04-quick-check-offer → 06-pilot-card"
    },
    {
      "what": "Her correct reasoning ('so the charge cant get round either?') was ignored. The tutor just repeated 'Back to my question' instead of accepting it.",
      "step": "S5/T5"
    },
    {
      "what": "Pressing Next gave an empty filler turn ('Let's keep going.') with no new content.",
      "step": "S9/T9"
    },
    {
      "what": "T10 repeats the ampere = 1 coulomb per second content already given in T7 and T8. That is three tellings of the same fact.",
      "step": "T10"
    },
    {
      "what": "S11 already showed she understood that bigger current means more coulombs per second. T12 then asked her the same idea as a question. When she said 'what?', T13 gave the answer away and asked nothing. T14 then re-asked the same question.",
      "step": "T12-T14"
    },
    {
      "what": "Progress stays at '0/7 covered' after about 15 exchanges on electric current, so she sees no credit for her work.",
      "step": "T15 / end"
    }
  ],
  "looks_wrong": [
    {
      "what": "The end-of-lesson buttons (Topics / Show me the slides / Ask something else) are cut off at the bottom of the window.",
      "screenshot": "13-end-laptop.png",
      "stops_use": false
    },
    {
      "what": "After the lesson finished, the chat is scrolled back up mid-conversation. The goodbye message and end buttons are not in view.",
      "screenshot": "13-end-phone.png",
      "stops_use": false
    },
    {
      "what": "No end buttons or 'Your place is saved' line are visible below the final message on the phone, unlike on the laptop.",
      "screenshot": "12-exchange-15-phone.png",
      "stops_use": false
    },
    {
      "what": "The 'Jump to' list shows 'Required practical' twice and truncates 'Potential difference and resi...'.",
      "screenshot": "07-ai-lesson-opening-laptop.png",
      "stops_use": false
    },
    {
      "what": "The phone opening screen is filled by the Jump to and Key terms panels. The first tutor message sits near the bottom.",
      "screenshot": "07-ai-lesson-opening-phone.png",
      "stops_use": false
    },
    {
      "what": "A stray horizontal line or clipped bubble edge appears above the first visible message.",
      "screenshot": "09-exchange-6-laptop.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "S15",
    "quote": "im literally so tired rn can we do this later",
    "why": "Repeated Next taps, a filler turn, the same ampere/coulomb fact told three times and a re-asked question she had already answered bored her out."
  },
  "fixes": [
    {
      "target": "lesson engine: Next button behaviour",
      "change": "Never emit filler turns like 'Let's keep going.'. Each Next must deliver the next new teaching point or question."
    },
    {
      "target": "lesson engine: content de-duplication",
      "change": "Track facts already stated (e.g. 1 A = 1 C/s) and skip any later step that restates them. Merge T7, T8 and T10 into one turn."
    },
    {
      "target": "answer classifier: 'Back to my question' logic",
      "change": "If the student's message (like S5 or S11) already contains the correct idea, mark the pending question answered and move on instead of repeating it."
    },
    {
      "target": "quick check flow: 04-quick-check-offer and 06-pilot-card",
      "change": "Store the 'Not now' choice and do not show the pilot card again in the same session. Drop the 'Start here' highlight after she declines."
    },
    {
      "target": "end-of-lesson layout on phone and laptop",
      "change": "After 'Lesson finished', scroll to the final message and keep the Topics / Slides / Ask buttons fully inside the viewport. Make them sticky at the bottom on the phone."
    }
  ]
}
```

## Transcript

    Lesson p2-current-voltage (Physics › Electricity › Current, potential difference and resistance).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    [screenshot 02-subjects-phone.png and 02-subjects-laptop.png] subjects
    [screenshot 03-topics-physics-phone.png and 03-topics-physics-laptop.png] topics-physics
    [screenshot 04-quick-check-offer-phone.png and 04-quick-check-offer-laptop.png] quick-check-offer
    [the quick check is offered on its own screen] tapped "Not now: show the lessons"
    [screenshot 05-lessons-p2-phone.png and 05-lessons-p2-laptop.png] lessons-P2
    [screenshot 06-pilot-card-phone.png and 06-pilot-card-laptop.png] pilot-card
    [pilot card] tapped "Not now: go to the lesson"
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Welcome, it's lovely to have you here! When you press the button on a torch and the light comes on, what do you think is happening to make that light work?
    [screenshot 07-ai-lesson-opening-phone.png and 07-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (offtopic): dunno, something with the battery maybe? anyway im starving lol
    T1: The battery is a good start, and we'll go from there. Inside a torch's wires, tiny particles that carry electric charge drift round together, and that is what lights the bulb. If you broke the wire anywhere, what do you think would happen to the light?
    S2 (try): whats electric charge?
    T2: Electric charge is what flows round a circuit, carried by tiny particles in the wire. You can't see it, but you can see what it does, like lighting a bulb. If the wire in a torch is broken, what do you think happens to the charge flowing round it?
      [S2 read as: question (model)]
    S3 (try): whats a circuit?
    T3: A circuit is a complete loop of wire that charge can flow round, like a running track where you end up back where you started. If there's a gap anywhere in that track, what do you think happens to the runners?
    [screenshot 08-exchange-3-phone.png and 08-exchange-3-laptop.png] exchange-3
      [S3 read as: question (model)]
    S4 (wrong): they just like jump over the gap i guess
    T4: Not quite — the runners can't jump a gap; with a gap in the track, nothing gets round.
      [S4 read as: answer (model)]
    S5 (try): oh right so the charge cant get round either?
    T5: Back to my question: If you broke the wire anywhere, what do you think would happen to the light?
      [S5 read as: answer (model)]
    S6 (try): it would go off cuz the charge cant flow?
    T6: Yes, that's right. Exam wording: a flow of charge is called an electric current, and its size is the rate of flow, meaning how much charge passes a point each second, measured in amperes (A). If more runners cross a point on the track each second, what would that mean for the current?
    [screenshot 09-exchange-6-phone.png and 09-exchange-6-laptop.png] exchange-6
      [S6 read as: answer (model)]
    S7 (wrong): um more runners means bigger current right?
    T7: Yes — more runners crossing each second means a bigger current. Current is measured in amperes (A), and 1 ampere means one lot of charge passing a point every second.
      [S7 read as: answer (model)]
    S8 (tapped "Next")
    T8: Charge is counted in a unit called the coulomb (C), a bit like counting runners in lots. One ampere means one coulomb passing a point each second.
      [S8 read as: button (code)]
    S9 (tapped "Next")
    T9: Let's keep going.
    [screenshot 10-exchange-9-phone.png and 10-exchange-9-laptop.png] exchange-9
      [S9 read as: button (code)]
    S10 (tapped "Next")
    T10: The ampere is the unit that measures current: 1 ampere means 1 coulomb of charge passing a point each second. So a bigger current means more coulombs passing every second.
      [S10 read as: button (code)]
    S11 (wrong): so like 2 amperes means 2 coulombs per second right?
    T11: Yes — 2 amperes means 2 coulombs of charge passing a point each second. That's exactly what current measures.
      [S11 read as: statement (model)]
    S12 (tapped "Next")
    T12: Think of the running track: if more runners pass a point each second, the current is bigger. So if a wire carries a bigger current than another wire, what must be true about the coulombs passing each second?
    [screenshot 11-exchange-12-phone.png and 11-exchange-12-laptop.png] exchange-12
      [S12 read as: button (code)]
    S13 (minimal): what?
    T13: Picture runners going past a spot on a track. A bigger current just means more runners pass that spot every second.
      [S13 read as: question (model)]
    S14 (tapped "Next")
    T14: Back to my question: So if a wire carries a bigger current than another wire, what must be true about the coulombs passing each second?
      [S14 read as: button (code)]
    S15 (offtopic): im literally so tired rn can we do this later
    T15: No problem, thanks for sticking with it. Today you answered questions on electric current. Your place is saved, so we'll pick up right here next time. Bye for now!
    [screenshot 12-exchange-15-phone.png and 12-exchange-15-laptop.png] exchange-15
    [the lesson shows "Lesson finished."]
    [screenshot 13-end-phone.png and 13-end-laptop.png] end
