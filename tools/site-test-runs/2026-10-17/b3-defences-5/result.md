# Site test: b3-defences (lesson, 2026-10-17)

**FAIL** · cost $0.4493 (27 tool calls, 65 calls from the site; tutor claude-sonnet-5-5 $0.2748)

## Judge

```json
{
  "broken": [
    {
      "what": "The opening question asks about pathogens 'stuck in that mucus', but mucus has not been mentioned yet. The first question refers to something never introduced, so the student starts off confused.",
      "step": "T0"
    },
    {
      "what": "After the off-topic 'hungry' message, the tutor says 'we can pause here and you can come back to this any time' but then asks another question straight away. It offers a pause and does not give one.",
      "step": "T11"
    },
    {
      "what": "Many check questions can be answered by repeating the sentence just before them, so they test nothing. Examples: 'Which type of white blood cell produces antibodies?' right after saying lymphocytes produce them; 'Which type of blood cell has a nucleus?'; 'What kind of cell stays behind…' right after naming memory cells.",
      "step": "T12, T17, T21, T23"
    },
    {
      "what": "The end summary says 'I told you about phagocytes', which leaves phagocytes out of the topics she 'worked through'. She actually answered two phagocyte questions correctly (S16, S17).",
      "step": "T25"
    }
  ],
  "looks_wrong": [
    {
      "what": "On phone, the Jump-to list, diagram and key terms sit above the chat. The first tutor message is pushed to the bottom and the 'Type here' box and Send button are off screen.",
      "screenshot": "05-ai-lesson-opening-phone.png",
      "stops_use": false
    },
    {
      "what": "The diagram thumbnail is so small its labels cannot be read.",
      "screenshot": "05-ai-lesson-opening-laptop.png",
      "stops_use": false
    },
    {
      "what": "The Key Terms panel always shows the first section (Pathogen, Mucus) at the top. Newly added terms are out of view, and the 'Cilia' definition is cut off at the bottom of the panel.",
      "screenshot": "14-end-laptop.png",
      "stops_use": false
    },
    {
      "what": "On phone, the 'Lesson finished.' line and the end buttons (Topics, Show me the slides, Ask something else) are off screen below the last message.",
      "screenshot": "14-end-phone.png",
      "stops_use": false
    }
  ],
  "would_quit": false,
  "fixes": [
    {
      "target": "b3-defences lesson opening prompt (T0)",
      "change": "Introduce mucus first, e.g. 'Your nose and airways make sticky mucus that traps pathogens…', before asking what happens to pathogens stuck in it."
    },
    {
      "target": "Off-topic handling behaviour",
      "change": "If the tutor offers a pause, stop and wait for her reply; otherwise drop the 'we can pause here' wording and just give a light nudge back to the question."
    },
    {
      "target": "Tutor question generation",
      "change": "Do not ask a question whose answer appears word-for-word in the preceding sentence. Ask her to apply the idea instead, e.g. 'A new virus gets past the skin: which white blood cell will attack it without recognising it first?'"
    },
    {
      "target": "End-of-lesson summary (T25)",
      "change": "List the sections she actually answered correctly, including phagocytes; only use 'I told you about X' when the tutor gave the answer itself."
    },
    {
      "target": "Phone lesson layout and Key Terms panel",
      "change": "On phone, put the chat and input first and collapse Jump-to and the diagram below or into a toggle. On laptop, auto-scroll Key Terms to the newest section, and let the diagram thumbnail open full size when tapped."
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
    T0: Welcome! Every second, pathogens (germs that cause disease) are trying to get inside you, and your body has layers of defence stopping most of them. What do you think happens to the pathogens once they're stuck in that mucus?
    [screenshot 05-ai-lesson-opening-phone.png and 05-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (wrong): they dissolve in it i guess?
    T1: Not quite — they don't dissolve. Mucus is sticky, so the pathogens get stuck in it like flies on flypaper. Then tiny hair-like structures called cilia line the airways and beat to sweep that mucus upwards and out. Where do the cilia sweep the mucus and its trapped pathogens to?
    S2 (try): up to your throat i think?
    T2: Yes — up towards the throat is right, where the mucus can be swallowed. And once it's swallowed, it reaches your stomach, which makes hydrochloric acid (HCl) at around pH 2, so it kills most of the pathogens that arrive there. What do you think happens to a pathogen that lands in that acid?
    S3 (try): gets killed by the acid i guess
    T3: Yes — killed by the acid is right. Mucus, cilia and stomach acid are all non-specific defences, meaning they act against every kind of pathogen without needing to have met it before. Why do you think the stomach acid doesn't need to "know" which pathogen has arrived before it works?
    [screenshot 06-exchange-3-phone.png and 06-exchange-3-laptop.png] exchange-3
    S4 (minimal): what?
    T4: Let me put it more simply. Stomach acid doesn't pick and choose — it works the same way on every pathogen that lands in it. That's what "non-specific" means. So if a brand-new pathogen you've never met before gets swallowed, what happens to it in the stomach acid?
    S5 (idk): idk it just dies anyway?
    T5: That's right, it dies anyway. Do you want me to just tell you the rest of this one?
    S6 (checkin-no): nah im fine
    T6: Fine, let's carry on. Skin works the same way as the other barriers: it blocks every kind of pathogen, with no need to have met it before, so it's a non-specific defence too. But if you cut your skin, that barrier is broken. Why do you think a cut makes it easier for pathogens to cause an infection?
    [screenshot 07-exchange-6-phone.png and 07-exchange-6-laptop.png] exchange-6
    S7 (bored): huh?
    T7: Think of your skin like a wall around a castle. While the wall is whole, pathogens can't get through, but a cut makes a hole in it. So if skin is a wall and a cut makes a hole, what can pathogens now do?
    S8 (try): they can get in through the hole?
    T8: Yes — a cut makes a hole, so pathogens can get in. If they get past the barriers, your immune system takes over, and its key players are white blood cells, also called leucocytes. What part of the body's defence do you think white blood cells belong to?
    S9 (try): the immune system?
    T9: Yes — white blood cells belong to the immune system. Their scientific name is leucocyte, so "leucocyte" and "white blood cell" mean exactly the same thing. If a textbook says "leucocytes patrol the blood", which cells is it talking about?
    [screenshot 08-exchange-9-phone.png and 08-exchange-9-laptop.png] exchange-9
    S10 (try): white blood cells?
    T10: Yes — leucocytes are white blood cells, the same thing under a different name. White blood cells are part of your immune system, which is the body's system for identifying and destroying pathogens and other foreign material. So what does your immune system do to pathogens that get in?
    S11 (offtopic): idk im so hungry rn lol
    T11: Fair enough, we can pause here and you can come back to this any time. Quick version: the immune system is your body's team of cells that finds pathogens and destroys them. So if a pathogen sneaks past the skin, what job does the immune system do to it?
    S12 (try): finds and destroys it?
    T12: Yes — finding and destroying pathogens is exactly the immune system's job. One difference between blood cells: white blood cells have a nucleus, the part of a cell that holds its genetic material, but mature red blood cells don't. Which type of blood cell has a nucleus?
    [screenshot 09-exchange-12-phone.png and 09-exchange-12-laptop.png] exchange-12
    S13 (try): white blood cells have a nucleus
    T13: Yes — white blood cells having a nucleus is right. Now meet one type of white blood cell: the phagocyte, the fast-response unit of your immune system, which engulfs a pathogen by changing shape to surround it, then digests it. What do you think a phagocyte does to a bacterium it finds?
    S14 (bored): huh? too confusing
    T14: Let me make it simpler. A phagocyte is a white blood cell that swallows up a pathogen, like a tiny Pac-Man, and then digests it. What does a phagocyte do to a pathogen once it has swallowed it?
    S15 (idk): idk what digests means lol
    T15: Digests just means breaks down using enzymes. The answer to my last question: the phagocyte digests the pathogen. This whole process of surrounding, swallowing and digesting is called phagocytosis, and phagocytes use it on anything that isn't a normal body cell. What does a phagocyte surround and swallow during phagocytosis?
    [screenshot 10-exchange-15-phone.png and 10-exchange-15-laptop.png] exchange-15
    S16 (try): pathogens i think?
    T16: Yes — pathogens is right, they get surrounded and swallowed. Phagocytes are also non-specific, which means they attack any pathogen equally and don't need to recognise a particular one first. So if a bacterium they've never met before turns up, what do you think a phagocyte does to it?
    S17 (try): attacks it i guess
    T17: Yes, attacks it is right, because phagocytes go for any pathogen they meet. Lymphocytes are different: they're another white blood cell, but they target one particular pathogen and produce proteins called antibodies and antitoxins to deal with it. Which type of white blood cell produces antibodies?
    S18 (minimal): lymphocytes?
    T18: Yes, lymphocytes is right, they're the ones that make antibodies. Each pathogen has its own unique proteins on its surface called antigens, and a lymphocyte makes an antibody shaped to fit one antigen. If a lymphocyte meets a pathogen with an antigen it recognises, what does it produce?
    [screenshot 11-exchange-18-phone.png and 11-exchange-18-laptop.png] exchange-18
    S19 (try): antibodies that fit it?
    T19: Yes, antibodies that fit it is right, because they're complementary in shape to that one antigen. Once an antibody binds to its antigen, it marks the pathogen for destruction, clumps pathogens together, or neutralises them. Since each antibody only fits one specific antigen, what kind of response is this?
    S20 (idk): idk what u mean by that
    T20: No worries, I used a confusing word there. Think of an antibody like a key that only fits one lock, which is one antigen. So the antibody only works on that one pathogen, not on every pathogen. Since an antibody fits only one antigen, which pathogens will it target?
    S21 (try): just one type of pathogen?
    T21: Yes, just one type of pathogen is right, and that's what makes it a specific response. Lymphocytes also make antitoxins, which are proteins that neutralise the toxins pathogens release, so the toxins can't keep causing harm. What do antitoxins neutralise?
    [screenshot 12-exchange-21-phone.png and 12-exchange-21-laptop.png] exchange-21
    S22 (minimal): toxins?
    T22: Yes, toxins is right: antitoxins neutralise the toxins that pathogens release. Whenever an antibody matches just one antigen, we call that a specific response, because it targets one particular pathogen. If a lymphocyte makes antibodies that match one particular pathogen's antigen, what type of response is that?
    S23 (try): a specific response
    T23: Yes, a specific response is right, because the antibody matches only one pathogen's antigen. Now, the first time you meet a pathogen, some lymphocytes become memory cells, which stay in your body long after the infection is gone. What kind of cell stays behind after an infection to help you fight the same pathogen faster next time?
    S24 (try): memory cells
    T24: Yes, memory cells is right: they stay behind after the infection is gone. Thanks to them, if you meet the same pathogen again, your immune system recognises the antigen immediately and responds faster and stronger, a skill we call immunological memory. Why don't you usually get chickenpox a second time?
    [screenshot 13-exchange-24-phone.png and 13-exchange-24-laptop.png] exchange-24
    S25 (try): memory cells remember it?
    T25: Yes, memory cells is right: they remember the chickenpox antigen, so your body responds faster and stronger the second time. That brings us to the end of this lesson. You worked through physical barriers, white blood cells, lymphocytes and immunological memory, and I told you about phagocytes. Well done for sticking with it.
    S26 (closing): thanks bye
    T26: You're welcome! Good luck with the rest of your revision, and come back any time you'd like to go over your body's defences again. Bye!
    [the lesson shows "Lesson finished."]
    [screenshot 14-end-phone.png and 14-end-laptop.png] end
