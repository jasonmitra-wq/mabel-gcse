# Site test: p2-components (lesson, 2026-10-19)

**FAIL** · cost $0.8716 (46 tool calls, 140 calls from the site; tutor claude-sonnet-5-5 $0.5792)

## Judge

```json
{
  "broken": [
    {
      "what": "A wrong answer was accepted. The student said a diode 'lets current flow both ways?' and the tutor replied 'Yes, that's right', then added that reverse resistance is very high, which contradicts the 'yes'.",
      "step": "S30/T30"
    },
    {
      "what": "No tutor reply came within 120 s after the student asked to do the slides, which the tutor itself had offered.",
      "step": "S45"
    },
    {
      "what": "The tutor lost track of its own question. After asking 'What would they build?', it said it couldn't match the answer to a question about building and asked the student what the check question was.",
      "step": "T4-T5"
    },
    {
      "what": "Replies are off by one turn. T2 says 'Yes, they switch on when it gets dark', answering S1 rather than S2. T38 answers S37 after an unrelated 'work' definition was inserted. T1 and T37 drop vocabulary cards in place of a reply.",
      "step": "T1, T2, T37, T38"
    },
    {
      "what": "Student questions and confusion were ignored. 'so the arrow means it can change?' got no answer. 'is that like a resistor but different' (about the fuse) got no answer. 'idk what you want me to do' got a new fact instead of help.",
      "step": "S21-T23"
    },
    {
      "what": "Questions were asked and then abandoned. The resistor-shape question (T9) was never revisited. The thermistor current question (T33) and the oven question (T41) were dropped. T11 re-asks a question the student had already answered at S8.",
      "step": "T9-T11, T33-T34, T41-T42"
    },
    {
      "what": "T29 asks 'In the lesson before, what did you find about a diode?', but the student skipped the earlier lesson via 'Carry on'.",
      "step": "T29"
    },
    {
      "what": "automatic check failed: tutor replies",
      "step": "no reply after S45"
    }
  ],
  "looks_wrong": [
    {
      "what": "A 'what colour is Silver the cat?' popup covers the 'What matters' summary on the slides.",
      "screenshot": "24-end-phone.png",
      "stops_use": true
    },
    {
      "what": "The same Silver-the-cat popup covers the 'Next: Circuit sy…' button on the slides.",
      "screenshot": "24-end-laptop.png",
      "stops_use": true
    },
    {
      "what": "Diagram labels (diode, LED, variable resistor, fuse) are very small on phone, and the LED arrows are cramped together.",
      "screenshot": "14-diagram-21-phone.png",
      "stops_use": false
    },
    {
      "what": "The top of the Jump To panel ('JUMP TO' heading) is cut off under the header.",
      "screenshot": "19-diagram-33-laptop.png",
      "stops_use": false
    },
    {
      "what": "The exchange-33 screenshot is identical to the diagram screenshot, so the student's reply area is not shown.",
      "screenshot": "20-exchange-33-laptop.png",
      "stops_use": false
    },
    {
      "what": "The 'What are you revising?' heading and the Home button are cut off under the sticky header.",
      "screenshot": "02-subjects-phone.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "S45",
    "quote": "can we do the slides",
    "why": "Already bored and hungry; asked for the offered option, got no reply, then hit a random cat question."
  },
  "fixes": [
    {
      "target": "answer-grading behaviour",
      "change": "Grade the reply against the stored correct answer before saying 'Yes'. 'Both ways' for a diode must be marked wrong and corrected."
    },
    {
      "target": "tutor turn context",
      "change": "Always build the reply from the latest student message plus the tutor's own last question. Never insert vocab cards in place of a reply, and never ask the student what the question was."
    },
    {
      "target": "slides request handling",
      "change": "When the student picks 'slides' after T44, open the slides immediately and post a short confirmation in chat. Add a timeout fallback message."
    },
    {
      "target": "Silver-the-cat popup",
      "change": "Remove the popup from lesson and slide screens, or show it only on home. It must never cover the Next button or lesson content."
    },
    {
      "target": "student question handling",
      "change": "If the message ends with '?' or says 'idk' or 'huh', answer or re-explain first, then re-ask the pending check question before moving on."
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
    [screenshot 05-earlier-words-card-phone.png and 05-earlier-words-card-laptop.png] earlier-words-card
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Welcome! Let's get started. When you walk down your street in the evening, what do you notice about the street lights?
    [screenshot 06-ai-lesson-opening-phone.png and 06-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (try): they turn on when it gets dark
    T1: First, a word you'll need: Switch. A component that opens (a gap) or closes (no gap) a circuit.
    S2 (try): ok so a switch opens or closes the circuit right?
    T2: Yes, they switch on when it gets dark. To explain circuits, people draw a lamp as a circle with a cross in it, not a realistic picture. Why would everyone use the same simple drawing?
    S3 (minimal): k
    T3: Let me put it another way. Imagine a friend drew a lamp as a tiny sketch of a bulb, and you drew it as a star. Nobody could read each other's drawings. If you drew a lamp as a circle with a cross in it, what would anyone reading your drawing know straight away?
    [screenshot 07-exchange-3-phone.png and 07-exchange-3-laptop.png] exchange-3
    S4 (bored): huh?
    T4: Sorry, that was a muddle. Here's the simple version: a circle with a cross in it is the agreed drawing for a lamp, so anyone can read it. What would they build?
    S5 (wrong): they'd build a star?
    T5: I can't match your answer to a question about building here, so I'm not sure what we were building. Could you tell me what the check question was asking about?
    S6 (try): what would they build if they saw a circle with a cross
    T6: They'd see a lamp. A circle with a cross in it is the agreed symbol for a lamp, so anyone reading the drawing knows that straight away. Now try it the other way. What symbol would you draw to show a lamp in your own circuit diagram?
    [screenshot 08-exchange-6-phone.png and 08-exchange-6-laptop.png] exchange-6
    S7 (try): a circle with a cross in it
    T7: Yes — a circle with a cross inside it is the lamp symbol.
    S8 (wrong): cool so like that's easier than drawing a real lamp
    T8: Yes — and these simple shapes are called circuit symbols: the standard drawings everyone agrees on, so anyone can read your diagram and build it. A resistor, a part that limits the current, uses the symbol of a small rectangle.
    S9 (idk): what's a resistor?
    T9: A resistor is a component that limits the current, so less charge flows round the circuit each second. Suppose you're drawing a circuit and want to include a resistor. What shape would you draw for it?
    [screenshot 09-exchange-9-phone.png and 09-exchange-9-laptop.png] exchange-9
    S10 (minimal): what's current?
    T10: Current is how much electric charge flows past a point each second, like runners passing a spot on a running track, and it's measured in amps (A).
    S11 (minimal): ok
    T11: In a circuit symbol, a lamp is a circle with a cross in it, and a switch is drawn with a gap when it is open. What would be the point of drawing it as a simple standard shape rather than a realistic picture of a lamp?
    S12 (offtopic): man im hungry can we hurry this up
    T12: Fair enough, let's be quick. Simple shapes mean anyone can read and build the circuit, whoever drew it. A drawing made from these symbols, with wires as straight lines, is a circuit diagram. In one, wires must join with no gaps. What would a gap in a wire stop?
    [screenshot 10-exchange-12-phone.png and 10-exchange-12-laptop.png] exchange-12
    S13 (try): it would stop the current flowing
    T13: Now a new symbol: a diode is drawn as a triangle with a bar across its tip, and the triangle points the way current can flow. Add two arrows coming out of it and it becomes an LED, a diode that gives out light. Why would an LED fail to light if you connected it the wrong way round?
    S14 (bored): this is too long man
    T14: Sorry, I'll keep it short. A diode only lets current flow one way, the way its triangle points. An LED is a diode that lights up when current flows through it. If you wire an LED in backwards, which way does current flow through it?
    S15 (try): it doesn't flow at all?
    T15: Yes, no current flows at all when it's backwards. A diode only lets current through in the direction its triangle points, so the LED stays dark.
    [screenshot 11-exchange-15-phone.png and 11-exchange-15-laptop.png] exchange-15
    S16 (offtopic): yeah whatever, when's lunch tho
    T16: A cell is a long thin line next to a short thick one; two or more cells joined together make a battery.
    S17 (wrong): whats a cell
    T17: A cell is the thing that pushes charge round a circuit, like a battery in a torch. Its symbol is a long thin line next to a short thick one. If you joined two cells together, what would you call that pair?
    S18 (wrong): two batteries?
    T18: Not quite — two cells joined together make a battery, so a battery is two or more cells, not two batteries.
    [screenshot 12-exchange-18-phone.png and 12-exchange-18-laptop.png] exchange-18
    S19 (try): oh right so a battery is multiple cells together
    T19: A meter is a circle with a letter: A for an ammeter, V for a voltmeter.
    [diagram shown in the conversation under T19: "Circuit symbols: cell, battery, switches, lamp, resistor and the two meters."]
    [screenshot 13-diagram-19-phone.png and 13-diagram-19-laptop.png] diagram-19
    S20 (try): k so A is for ammeter and V is voltmeter got it
    T20: Some symbols are built from others. A resistor with an arrow through it is a variable resistor.
    S21 (try): so the arrow means it can change?
    T21: The chart also shows the symbol for a fuse: a rectangle with a line through it.
    [diagram shown in the conversation under T21: "More symbols: diode, LED, variable resistor and fuse."]
    [screenshot 14-diagram-21-phone.png and 14-diagram-21-laptop.png] diagram-21
    [screenshot 15-exchange-21-phone.png and 15-exchange-21-laptop.png] exchange-21
    S22 (wrong): is that like a resistor but different
    T22: To read a circuit diagram, follow the wire from one side of the cell round to the other.
    S23 (idk): idk what you want me to do
    T23: Components on one single path are in series. Components on separate branches are in parallel.
    S24 (try): so series is one path and parallel is branches?
    T24: Copy those into your notes, then tap Next.
    [screenshot 16-exchange-24-phone.png and 16-exchange-24-laptop.png] exchange-24
    S25 (try): done
    T25: In one line: how do you read a circuit diagram?
    S26 (minimal): what?
    T26: No problem. A good line would say: each component has a standard symbol; follow the wire from one side of the cell round to the other; one path is in series, separate branches are in parallel.
    S27 (try): ok i got it now
    T27: Quick question: Which symbol is a long thin line next to a short thick one?
    [screenshot 17-exchange-27-phone.png and 17-exchange-27-laptop.png] exchange-27
    S28 (wrong): is that a resistor?
    T28: Not quite: it's "A cell". That is the cell symbol. Two or more cells joined together make a battery.
    S29 (offtopic): mate im starving can we finish soon
    T29: Quick question: In the lesson before, what did you find about a diode?
    S30 (wrong): it lets current flow both ways?
    T30: Yes, that's right. In the reverse direction its resistance is very high.
    [screenshot 18-exchange-30-phone.png and 18-exchange-30-laptop.png] exchange-30
    S31 (minimal): whats resistance
    T31: Resistance is how much a component opposes the current going through it, like a narrow, muddy stretch of the running track slowing the runners down. If a component has a lot of resistance, what happens to the current through it?
    S32 (wrong): it gets faster?
    T32: Not quite — a lot of resistance makes the current smaller, like the narrow, muddy stretch of track slowing the runners down so fewer pass each second.
    S33 (offtopic): man im so hungry rn
    T33: Hungry is fair, and you can come back to this any time. Here's a quick one: a thermistor is a component whose resistance changes as it gets warmer, going down. If a thermistor warms up, what happens to the current through it, like the runners passing each second?
    [diagram shown in the conversation under T33: "A thermistor: hotter means lower resistance."]
    [screenshot 19-diagram-33-phone.png and 19-diagram-33-laptop.png] diagram-33
    [screenshot 20-exchange-33-phone.png and 20-exchange-33-laptop.png] exchange-33
    S34 (idk): whats a thermistor
    T34: A thermistor is a component whose resistance goes down as it gets hotter. So if a thermistor gets cooled right down, what happens to its resistance?
    S35 (wrong): goes down more?
    T35: Not quite: cooling a thermistor makes its resistance go up, because a thermistor's resistance goes down as it gets hotter.
    S36 (try): oh so resistance goes up when its cold
    T36: Yes, resistance goes up when it's cold, and down when it's hot. So a warm thermistor lets more current through, like more runners getting past each second. Why does a warm thermistor let more current through than a cold one?
    [screenshot 21-exchange-36-phone.png and 21-exchange-36-laptop.png] exchange-36
    S37 (try): because its resistance goes down when hot
    T37: First, a word you'll need: work. The transfer of energy by a force
    S38 (try): ok so work is when energy moves by force
    T38: Yes, a hot thermistor has lower resistance, so more current gets through. Because its resistance changes with temperature, a thermistor works as a sensor, a part that detects a change around it.
    S39 (try): whats a sensor
    T39: A sensor is a part that detects a change around it. A thermistor is one, because it detects a change in temperature. If a room suddenly gets much colder, what happens to the thermistor's resistance?
    [screenshot 22-exchange-39-phone.png and 22-exchange-39-laptop.png] exchange-39
    S40 (idk): idk maybe it goes up
    T40: Yes — it goes up: when the room gets colder, a thermistor's resistance increases.
    S41 (try): cool so it detects cold
    T41: Yes, it detects a change in temperature, and a sensor is any part that detects a change around it. A thermistor is a sensor for temperature, so it can tell a circuit when something gets hotter or colder. If an oven got much hotter, what would happen to the thermistor's resistance?
    S42 (bored): huh?
    T42: Sorry, that was wordy. A thermistor is a part that feels how hot or cold it is. When it gets warmer, its resistance goes down. If a thermistor sits in a cooling cup of tea, what happens to its resistance as the tea cools?
    [screenshot 23-exchange-42-phone.png and 23-exchange-42-laptop.png] exchange-42
    S43 (try): resistance goes up
    T43: Yes: as the tea cools, the thermistor's resistance goes up.
    S44 (wrong): can we do something else now im bored
    T44: That's fair, it's a lot of new stuff. Do you want to stop here, do one more quick thing, or switch to the slides?
    S45 (try): can we do the slides
    [no tutor reply within 120 s after S45]
    [check] BROKEN: tutor replies — no reply after S45
    [screenshot 24-end-phone.png and 24-end-laptop.png] end
