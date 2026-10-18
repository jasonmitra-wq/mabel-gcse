# Site test: p2-components (lesson, 2026-10-18)

**FAIL** · cost $0.4538 (14 tool calls, 65 calls from the site; tutor claude-sonnet-5-5 $0.2666)

## Judge

```json
{
  "broken": [
    {
      "what": "Wrong physics: the tutor says LDR and thermistor resistance 'changes with the current'. LDR resistance changes with light intensity. Thermistor resistance changes with temperature. A lamp's resistance changes because the filament heats up.",
      "step": "T8"
    },
    {
      "what": "The tutor describes a diode symbol ('current flows through the triangle's pointing direction, and the bar blocks it'), but the diagram shown is an I-V graph with no triangle or bar. The text and the picture do not match.",
      "step": "T8"
    },
    {
      "what": "The tutor gives away the answer and then asks for it: 'doubling the push doubles the current. If the push is doubled, what happens to the current?'",
      "step": "T1"
    },
    {
      "what": "The tutor asks the same 'push doubled, what happens to current' question again after it was already answered in the explanation.",
      "step": "T3"
    },
    {
      "what": "The tutor says the line goes 'through the corner where both axes are zero', but the graph's axes cross in the middle, not at a corner.",
      "step": "T1"
    },
    {
      "what": "Answer reveal is a wall of text. It covers V=IR, I-V gradient, non-ohmic components, a worked calculation and the start of diodes, all in one bubble, for a student who has just said 'huh?'.",
      "step": "T8"
    },
    {
      "what": "The closing summary says the fixed-resistor answers were told to her. She actually answered the ohmic conductor questions correctly herself (S3, S4); only the variable resistor answer was told.",
      "step": "T12"
    }
  ],
  "looks_wrong": [
    {
      "what": "On opening, the phone shows the Jump To list, diagram and key terms first. The welcome question is at the very bottom and the text input is off screen. The 'JUMP TO' heading is clipped under the sticky header.",
      "screenshot": "05-ai-lesson-opening-phone.png",
      "stops_use": false
    },
    {
      "what": "The resistor diagram preview's labels (title, axis labels, caption) are too small to read on the phone without zooming.",
      "screenshot": "05-ai-lesson-opening-phone.png",
      "stops_use": false
    },
    {
      "what": "The '← Home' button and the 'What are you revising?' heading are cut off under the sticky top bar.",
      "screenshot": "02-subjects-phone.png",
      "stops_use": false
    },
    {
      "what": "The diagram thumbnail in the sidebar is unreadably tiny.",
      "screenshot": "09-diagram-8-laptop.png",
      "stops_use": false
    },
    {
      "what": "Key Terms panel text is cut off mid-line at the bottom ('origin', 'control current in a circuit').",
      "screenshot": "13-exchange-12-laptop.png",
      "stops_use": false
    },
    {
      "what": "At the end of the lesson, the 'Lesson finished' message and the Topics / Slides / Ask buttons are not visible on the phone; the page ends at the last bubble.",
      "screenshot": "14-end-phone.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "T8",
    "quote": "Turning the resistance up makes it harder for current to get through, so the current goes down, not up. A fixed resistor keeps one resistance... V = IR links potential difference...",
    "why": "A bored student who just said 'huh?' gets a huge block of formulas and graph facts she never asked for."
  },
  "fixes": [
    {
      "target": "Lesson p2-components content, fixed/variable resistor summary text",
      "change": "Replace 'it changes with the current' with: 'a lamp's resistance rises as it heats up, an LDR's depends on light, a thermistor's on temperature, and a diode's depends on which way the current flows'."
    },
    {
      "target": "Diode step, tutor text vs diagram",
      "change": "Either add a diode circuit-symbol diagram, or change the text to describe the graph: 'on the left almost no current flows; on the right it shoots up once the push is big enough'."
    },
    {
      "target": "Reveal behaviour after checkin-yes",
      "change": "Limit the reveal to the missed answer plus at most two key sentences. Move V=IR, the gradient point and the worked example into a separate optional step or the notes box."
    },
    {
      "target": "Question generation (T1/T3)",
      "change": "Do not state the answer in the same turn as the question. Do not repeat a question the student has already answered; move on to the next point."
    },
    {
      "target": "Phone layout of the AI lesson page",
      "change": "Put the conversation first with the Jump To, diagram and key terms panels collapsed below it. Auto-scroll to the latest message so the input box and the end-of-lesson buttons are on screen."
    }
  ]
}
```

## Transcript

    Lesson p2-components (Physics › Electricity › Circuit components — diodes, LDRs, thermistors).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    [screenshot 02-subjects-phone.png and 02-subjects-laptop.png] subjects
    [screenshot 03-topics-physics-phone.png and 03-topics-physics-laptop.png] topics-physics
    [screenshot 04-lessons-p2-phone.png and 04-lessons-p2-laptop.png] lessons-P2
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Welcome, great to have you here! Think about a street lamp at dusk: what have you noticed about when it switches on?
    [screenshot 05-ai-lesson-opening-phone.png and 05-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (idk): idk, just comes on when its dark i guess?
    T1: That's right: it senses the dark, and that's a good place to start. Look at the diagram: a straight line through the corner where both axes are zero. It shows a resistor whose resistance stays the same, so doubling the push doubles the current. If the push is doubled, what happens to the current?
    [diagram shown in the conversation under T1: "A resistor at constant temperature: a straight line through the origin."]
    [screenshot 06-diagram-1-phone.png and 06-diagram-1-laptop.png] diagram-1
    S2 (bored): whats resistance?
    T2: Resistance is how hard it is for current to get through something, like a narrow, crowded corridor slowing people down. More resistance means less current for the same push, and it's measured in ohms (Ω). So if a resistor's resistance stays the same, and you give it a bigger push, what would you expect to happen to the current?
    S3 (try): it goes up i think?
    T3: Yes — a bigger push gives a bigger current when the resistance stays the same. A component like that, whose resistance stays constant at constant temperature, is called an ohmic conductor, and a fixed resistor is one. If an ohmic conductor's push is doubled, what happens to its current?
    [screenshot 07-exchange-3-phone.png and 07-exchange-3-laptop.png] exchange-3
    S4 (try): it doubles too?
    T4: Yes — doubling the push doubles the current, because the resistance stays the same. A variable resistor is different: you can change its resistance by hand, by sliding a contact along a resistive wire or track, like in a volume control. If you slide it so the resistance goes up, what happens to the current?
    S5 (bored): whats a variable resistor
    T5: A variable resistor is a resistor whose resistance you change by hand. Think of a volume knob or a dimmer switch: sliding the contact along a resistive track makes the corridor longer or shorter for the current. Say you turn a dimmer so the resistance goes up. What happens to the current?
    S6 (bored): huh?
    T6: Sorry, let me say it simpler. A variable resistor is a dial or slider that lets you make it harder or easier for current to get through, like a dimmer switch for a light. If you turn the dimmer so the light gets dimmer, what has happened to the current going through the lamp?
    [screenshot 08-exchange-6-phone.png and 08-exchange-6-laptop.png] exchange-6
    S7 (wrong): it goes up?
    T7: Not quite, but we're nearly there. Would you like me to just tell you the rest of this one?
    S8 (checkin-yes): yeah go on then
    T8: Turning the resistance up makes it harder for current to get through, so the current goes down, not up. A fixed resistor keeps one resistance at constant temperature, while a variable resistor (rheostat) is one you change by hand. V = IR links potential difference, current and resistance, and for an ohmic conductor at constant temperature, current is directly proportional to potential difference. On an I-V graph that's a straight line through the origin, and a steeper line means lower resistance. Lamps, diodes, thermistors and LDRs don't keep a constant resistance; it changes with the current. For example, R = 10 Ω and V = 5 V gives I = 5 ÷ 10 = 0.5 A. Now a diode only lets current flow one way, the forward direction. Look at the diagram: current flows through the triangle's pointing direction, and the bar blocks it the other way, where the resistance is very high. If you connected a diode in a circuit backwards, what would happen to the current?
    [diagram shown in the conversation under T8: "A diode: current flows in one direction only."]
    [screenshot 09-diagram-8-phone.png and 09-diagram-8-laptop.png] diagram-8
    S9 (try): it wouldnt flow?
    T9: Yes — backwards, almost no current flows. An LED (light-emitting diode) is a diode that gives out light when current flows through it forwards. If you wire an LED in the forward direction, what does it give out?
    [screenshot 10-exchange-9-phone.png and 10-exchange-9-laptop.png] exchange-9
    S10 (try): light?
    T10: Yes — light is right, an LED gives out light when current flows forwards. Now back to your street-lamp idea: an LDR (light-dependent resistor) is a component whose resistance goes down as the light gets brighter. Look at the diagram: the brighter the light, the lower the LDR's resistance. In the dark, what do you think happens to its resistance?
    [diagram shown in the conversation under T10: "An LDR: brighter light, lower resistance."]
    [screenshot 11-diagram-10-phone.png and 11-diagram-10-laptop.png] diagram-10
    S11 (try): goes up? like really high?
    T11: Yes — in the dark an LDR's resistance goes up really high, which is why your street lamp can sense dusk. A thermistor works in a similar way, but it senses heat instead of light. When a thermistor is cold, what do you think happens to its resistance?
    [diagram shown in the conversation under T11: "A thermistor: hotter, lower resistance."]
    [screenshot 12-diagram-11-phone.png and 12-diagram-11-laptop.png] diagram-11
    S12 (try): goes up really high?
    T12: Yes, a cold thermistor's resistance goes up really high. That's the end of this lesson. You answered questions on diodes, LDRs and thermistors, and some on fixed and variable resistors, where I told you the rest. Lovely work today.
    [screenshot 13-exchange-12-phone.png and 13-exchange-12-laptop.png] exchange-12
    S13 (closing): ok thanks bye
    T13: Bye for now, and good luck with the revision. Come back any time to go over diodes, LDRs and thermistors again.
    [the lesson shows "Lesson finished."]
    [screenshot 14-end-phone.png and 14-end-laptop.png] end
