# Site test: b3-defences (lesson, 2026-10-17)

**FAIL** · cost $0.4501 (28 tool calls, 48 calls from the site; tutor claude-sonnet-5-5 $0.2580)

## Judge

```json
{
  "broken": [
    {
      "what": "Correct answer 'sweep it up and out' got no feedback. The tutor skipped straight to 'Do you want me to just tell you the rest of this one?', so she never learns she was right.",
      "step": "S4/T4"
    },
    {
      "what": "Correct answer 'they find and destroy pathogens' got no feedback, only the bare check-in prompt again.",
      "step": "S9/T9"
    },
    {
      "what": "Correct answer 'way faster innit' got no feedback until after the check-in. It was only confirmed after the reveal in T26.",
      "step": "S25/T25"
    },
    {
      "what": "The question's answer was given in the sentence just before it, so it tests nothing ('Tiny hair-like structures called cilia... What are these tiny hair-like structures called?').",
      "step": "T2"
    },
    {
      "what": "The question's answer was given in the sentence just before it ('white blood cells, also called leucocytes... What are white blood cells also called?').",
      "step": "T5"
    },
    {
      "what": "The question's answer was given in the sentence just before it ('your immune system takes over. What takes over...').",
      "step": "T7"
    },
    {
      "what": "The question has no clear answer from what was taught ('How long do memory cells stay in your body?' after only saying 'long after the infection has gone'). It confused her and she replied 'huh?'.",
      "step": "T21/S22"
    },
    {
      "what": "She asked to stop ('can we do this later im hungry'). The tutor said she could come back but gave no way to pause or save, then re-asked the same question.",
      "step": "S12/T12"
    }
  ],
  "looks_wrong": [
    {
      "what": "The end screen is scrolled up mid-conversation, so the 'Lesson finished.' line and the Topics / Show me the slides / Ask something else buttons are not visible.",
      "screenshot": "15-end-phone.png",
      "stops_use": false
    },
    {
      "what": "The end screen is scrolled up to an earlier exchange instead of the finish state and buttons.",
      "screenshot": "15-end-laptop.png",
      "stops_use": false
    },
    {
      "what": "The Key Terms panel cuts off mid-sentence ('Tiny hair-like projections on cells' clipped at the bottom edge).",
      "screenshot": "14-exchange-27-laptop.png",
      "stops_use": false
    },
    {
      "what": "On the opening screen the chat input box is below the fold under the Jump To and diagram blocks, so she has to scroll to find where to type.",
      "screenshot": "05-ai-lesson-opening-phone.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "S12",
    "quote": "wait can we do this later im hungry",
    "why": "She asked to stop and got a repeated question with no pause or save button. The questions so far just echo the previous sentence, so it feels pointless."
  },
  "fixes": [
    {
      "target": "tutor behaviour: check-in turn",
      "change": "When the student's answer is correct, open with a short confirmation (e.g. 'Yes, they sweep it up and out.') before offering to tell the rest. Show the check-in at most once every 3 points."
    },
    {
      "target": "tutor behaviour: question generation",
      "change": "Never ask for a term or fact stated in the same message. Ask the student to apply or explain it instead (e.g. 'Why does mucus need cilia?')."
    },
    {
      "target": "tutor behaviour: off-topic or stop request",
      "change": "On a request to stop, reply 'Progress saved, 2/5 done' and show a 'Pause and leave' button instead of re-asking the question."
    },
    {
      "target": "T21 memory-cells question",
      "change": "Replace 'How long do memory cells stay in your body?' with a question answerable from the text, e.g. 'What do memory cells let your body do if the same pathogen comes back?'"
    },
    {
      "target": "lesson end view",
      "change": "Auto-scroll the chat to the bottom when 'Lesson finished.' renders, so the finish buttons are visible on phone and laptop."
    }
  ]
}
```

## Transcript

    Lesson b3-defences (Biology › Disease — how we get ill and how we fight back › Your body's defences — how you fight infection).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    [screenshot 02-subjects-phone.png and 02-subjects-laptop.png] subjects
    [screenshot 03-topics-biology-phone.png and 03-topics-biology-laptop.png] topics-biology
    [screenshot 04-lessons-b3-phone.png and 04-lessons-b3-laptop.png] lessons-B3
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Welcome! Every second, pathogens are trying to get into your body, and you have layers of defence stopping most of them. One of the first is in your nose, throat and airways, where sticky mucus is made to trap pathogens before they can reach your lungs. What does the mucus do to the pathogens?
    [screenshot 05-ai-lesson-opening-phone.png and 05-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (bored): huh?
    T1: Let me say that more simply. Your nose and airways make mucus, which is like sticky glue. When germs breathe in, they get stuck in it, so they can't get down to your lungs. What does the mucus do to the germs?
    S2 (try): traps them i guess
    T2: Yes, they trap them, but the germs are still in your airway. Tiny hair-like structures called cilia line the airways and beat to sweep the mucus, with the germs stuck in it, up and out, where it can be swallowed. What are these tiny hair-like structures called?
    S3 (offtopic): wait im starving lol
    T3: Ha, fair enough, we'll be quick. Think of cilia as tiny brushes on the airway wall that keep sweeping the sticky mucus, germs and all, upwards and out so it can be swallowed. What do the cilia do to the mucus?
    [screenshot 06-exchange-3-phone.png and 06-exchange-3-laptop.png] exchange-3
    S4 (try): sweep it up and out i guess
    T4: Do you want me to just tell you the rest of this one?
    S5 (checkin-yes): yeah go on then
    T5: Skin blocks most germs while intact, and stomach acid (around pH 2) kills most that you swallow. If germs get past, white blood cells, also called leucocytes, take over as part of your immune system. What are white blood cells also called?
    S6 (idk): idk what that word is
    T6: "Leucocyte" is just the scientific name for a white blood cell, so they're the same thing. These cells patrol your blood and tissues as part of your immune system, each type with its own strategy for dealing with pathogens. What system are white blood cells part of?
    [screenshot 07-exchange-6-phone.png and 07-exchange-6-laptop.png] exchange-6
    S7 (try): the immune system
    T7: Yes, the immune system, and "leucocyte" is just the scientific name for a white blood cell. If a pathogen gets past the physical barriers like skin and stomach acid, your immune system takes over. What takes over if a pathogen gets past those barriers?
    S8 (wrong): the white blood cells take over
    T8: Right, the white blood cells take over. Your immune system is the body's set of cells that finds and destroys pathogens, and its two main white blood cell types are phagocytes and lymphocytes. What do phagocytes and lymphocytes both do as they patrol?
    S9 (try): they find and destroy pathogens
    T9: Want me to just tell you the rest of this one?
    [screenshot 08-exchange-9-phone.png and 08-exchange-9-laptop.png] exchange-9
    S10 (checkin-no): nah im good, keep going
    T10: White blood cells have a nucleus, the part of a cell that holds its genetic material, but mature red blood cells don't. White blood cells also have no haemoglobin and don't carry oxygen; that's the job of red blood cells. Which type of blood cell carries oxygen?
    S11 (try): red blood cells carry oxygen
    T11: Right, red blood cells carry oxygen. Now to the first white blood cell type: phagocytes are the fast-response unit of your immune system, and they engulf and digest pathogens. What kind of cell is a phagocyte?
    S12 (offtopic): wait can we do this later im hungry
    T12: That's fine, you can come back to this lesson any time. If you carry on, here's the short version: a phagocyte is a white blood cell that acts as your fast first responder, engulfing and digesting pathogens. What kind of cell is a phagocyte?
    [screenshot 09-exchange-12-phone.png and 09-exchange-12-laptop.png] exchange-12
    S13 (try): a white blood cell that eats pathogens
    T13: Right, a white blood cell that eats pathogens. That engulfing and digesting is called phagocytosis: the phagocyte surrounds the pathogen, pulls it in, and enzymes digest it. Phagocytes are also non-specific, so they attack anything that isn't a normal body cell. What does a phagocyte use to digest a pathogen once it's inside?
    S14 (bored): huh?
    T14: Sorry, let me say that more simply. When a phagocyte meets a pathogen, it wraps around it, pulls it inside, and breaks it down. That whole process is called phagocytosis. Once the pathogen is inside, what does the phagocyte use to break it down?
    S15 (try): enzymes?
    T15: Enzymes is right, and you've got most of this one already. Would you like me to just tell you the rest of it?
    [screenshot 10-exchange-15-phone.png and 10-exchange-15-laptop.png] exchange-15
    S16 (checkin-yes): yeah just tell me
    T16: Phagocytes change shape to surround anything foreign and pull it in, then enzymes digest it, so they're the body's first responders. Lymphocytes work differently: they're targeted, and every pathogen has unique proteins on its surface called antigens. Which white blood cell responds to antigens by producing antibodies?
    S17 (try): lymphocytes?
    T17: Lymphocytes it is. Here's the key bit: when a lymphocyte spots an antigen it recognises, it makes antibodies, which are proteins shaped to fit that one antigen exactly, like a key fitting a lock. What word describes an antibody's shape in relation to its antigen, meaning they match each other?
    S18 (try): complementary?
    T18: Complementary is right for the shape match, and the white blood cell that makes antibodies is the lymphocyte. Once an antibody binds to its antigen, that marks the pathogen for destruction, clumps pathogens together, or neutralises them. Which part of the pathogen does an antibody bind to?
    [screenshot 11-exchange-18-phone.png and 11-exchange-18-laptop.png] exchange-18
    S19 (minimal): what?
    T19: Let me say it more simply. An antigen is a protein sitting on the outside of a pathogen, like a flag saying "I'm foreign". The antibody fits onto that flag, and that marks the pathogen so it can be destroyed. What does an antibody attach to on a pathogen?
    S20 (try): the antigen
    T20: The antigen, that's right. There's a little more left on this one, so would you like me to just tell you the rest?
    S21 (checkin-yes): yeah go on
    T21: Since each antibody only fits one specific antigen, this is called a specific response. Next: during your first response, some lymphocytes become memory cells, which stay in your body long after the infection has gone. If the same pathogen comes back, those memory cells let your body respond faster and stronger. How long do memory cells stay in your body?
    [screenshot 12-exchange-21-phone.png and 12-exchange-21-laptop.png] exchange-21
    S22 (bored): huh?
    T22: Let me put it more simply. After an infection, some of your cells stay behind as memory cells, and they remember the pathogen's antigen. That's why you don't get chickenpox twice: if it comes back, your body spots it straight away and destroys it before you feel ill. What do memory cells remember from the first infection?
    S23 (try): the antigen i think
    T23: Yes, the antigen. The first time your body meets a pathogen, the response is slow, because it takes days to build up enough antibodies to fight the infection. That's why you can feel ill for a while on a first infection. How long does it take to build up enough antibodies the first time?
    S24 (try): like a few days?
    T24: Yes, a few days is right. Now compare that to meeting the same pathogen a second time: your memory cells make the response faster and stronger. How does the second response compare in speed to the first?
    [screenshot 13-exchange-24-phone.png and 13-exchange-24-laptop.png] exchange-24
    S25 (try): way faster innit
    T25: Do you want me to just tell you the rest of this one?
    S26 (checkin-yes): yeah go on
    T26: The second time, your immune system recognises the antigen straight away and makes more antibodies, so the pathogen is usually destroyed before you even feel ill. That's the idea behind vaccination too. That's the end of this lesson. You were right that the second response is way faster.
    S27 (closing): ok thanks
    T27: You're welcome! You've covered all the layers of your body's defences today. Good luck with the GCSE revision, and come back any time you want to go over it again.
    [screenshot 14-exchange-27-phone.png and 14-exchange-27-laptop.png] exchange-27
    [the lesson shows "Lesson finished."]
    [screenshot 15-end-phone.png and 15-end-laptop.png] end
