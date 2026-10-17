# Site test: b3-defences (lesson, 2026-10-17)

**FAIL** · cost $0.4401 (23 tool calls, 79 calls from the site; tutor claude-sonnet-5-5 $0.2568)

## Judge

```json
{
  "broken": [
    {
      "what": "The student asked to stop for lunch. The tutor said 'go and eat' but asked another question in the same message, then kept teaching with no pause or save point.",
      "step": "S3/T3"
    },
    {
      "what": "After 'yeah just tell me', the tutor never gave the answer to the cilia question it had just asked. It jumped to skin and stomach acid, so 'cilia sweep mucus up to be swallowed' was never confirmed.",
      "step": "S5/T5"
    },
    {
      "what": "The tutor asked for the scientific name of a white blood cell straight after stating 'leucocytes'. After the wrong answer it repeated the name and asked the same question again, so the student only had to copy it back.",
      "step": "T6/T7"
    },
    {
      "what": "After 'huh?' and an off-topic reply, the tutor gave the answer (digests with enzymes, phagocytosis) and then asked for it again. No real thinking was checked.",
      "step": "T10/T11"
    },
    {
      "what": "The question asked 'Which one of those three things' do antibodies do, but the correct answer is all three. The question is misleading, and 'all three?' was accepted.",
      "step": "T16/S17"
    },
    {
      "what": "The tutor asked what memory cells do before memory cells had been introduced anywhere in the lesson.",
      "step": "T19"
    },
    {
      "what": "The tutor said antitoxins 'target one particular pathogen's features'. Antitoxins neutralise toxins, not antigens, so this is inaccurate.",
      "step": "T18"
    }
  ],
  "looks_wrong": [
    {
      "what": "On phone, the jump-to list, diagram and key terms fill the first screen. The first tutor message is pushed to the bottom and the type box and Send button are off screen.",
      "screenshot": "05-ai-lesson-opening-phone.png",
      "stops_use": false
    },
    {
      "what": "The diagram thumbnail is so small that its labels cannot be read.",
      "screenshot": "05-ai-lesson-opening-laptop.png",
      "stops_use": false
    },
    {
      "what": "The '← Home' button and the 'What are you revising?' title are clipped under the sticky header.",
      "screenshot": "02-subjects-phone.png",
      "stops_use": false
    },
    {
      "what": "The 'WORTH WRITING DOWN' heading is cut off under the sticky header.",
      "screenshot": "12-exchange-21-phone.png",
      "stops_use": false
    },
    {
      "what": "The 'Lesson finished' message and the end buttons are not visible on phone. The page ends at the bye message.",
      "screenshot": "13-end-phone.png",
      "stops_use": false
    },
    {
      "what": "The key terms panel cuts off mid-definition at the bottom ('Tiny hair-like projections on cells').",
      "screenshot": "12-exchange-21-laptop.png",
      "stops_use": false
    },
    {
      "what": "The lesson title in the header is truncated to 'Your body's defences — how yo...'.",
      "screenshot": "06-exchange-3-phone.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "S11",
    "quote": "im so hungry rn",
    "why": "She asked to stop for lunch twice and was told to go eat, but the tutor kept firing questions with about 10 more to go. A bored 15-year-old closes the tab here."
  },
  "fixes": [
    {
      "target": "AI tutor off-topic/break handling",
      "change": "When the student asks to stop or says they're leaving, save progress and end the turn with no new question. Show a 'Continue later' button. If they come back, resume at the same point."
    },
    {
      "target": "AI tutor 'just tell me' handling",
      "change": "First answer the question that is still pending (cilia sweep mucus up to the throat to be swallowed), then summarise the rest of the current point before moving on."
    },
    {
      "target": "AI tutor question generation",
      "change": "Never ask for a fact stated in the same or the previous message (leucocyte, phagocytosis). Instead ask an application question, e.g. 'Why does a phagocyte need enzymes?'"
    },
    {
      "target": "b3-defences lesson content: Lymphocytes / Immunological memory",
      "change": "Introduce memory cells before T19. Reword T16 to 'What three things can antibodies do once bound?' Correct antitoxins to 'neutralise toxins', not pathogen features."
    },
    {
      "target": "Phone lesson layout",
      "change": "Collapse the jump-to list, diagram and key terms into a toggle above the chat on phone, so the first message and type box show on load. Pin the end buttons and the 'Lesson finished' message into view, and add tap-to-enlarge on the diagram."
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
    T0: Welcome! Pathogens are constantly trying to get into your body, but you have layers of defence stopping them, starting with skin and the sticky mucus lining your airways. When pathogens are breathed in, what does the mucus do to them?
    [screenshot 05-ai-lesson-opening-phone.png and 05-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (wrong): does it like... dissolve them or something?
    T1: Not quite: mucus doesn't dissolve them. It's sticky, so it works like flypaper, catching pathogens before they can reach your lungs. Think of the stickiness of mucus when you have a cold. Given that, what does mucus do to pathogens when you breathe them in?
    S2 (try): oh right, it traps them innit
    T2: Yes, trapping is right: the mucus catches the pathogens. But they're still in your airway, so tiny hair-like structures called cilia line it and beat rhythmically to sweep the mucus upwards and out, where it can be swallowed. What do you think the cilia do to the trapped pathogens?
    S3 (offtopic): wait im hungry lol can we do this after lunch
    T3: Of course, go and eat, and you can come back to this lesson any time. One quick thing for when you're back: the cilia are tiny hairs that beat like little brushes, sweeping the sticky mucus, with the pathogens stuck in it, up and out of your airway. What do the cilia do to the mucus?
    [screenshot 06-exchange-3-phone.png and 06-exchange-3-laptop.png] exchange-3
    S4 (bored): huh?
    T4: No worries if that was confusing. Do you want me to just tell you the rest of this one?
    S5 (checkin-yes): yeah just tell me
    T5: Skin is a tough, continuous barrier that most pathogens can't get through while it's intact. Cut it and the barrier breaks, which is why wounds get infected. In your stomach, hydrochloric acid (HCl) at around pH 2 kills most pathogens you swallow before they reach your intestines. If a pathogen gets past all that, your immune system takes over, and its key players are white blood cells, also called leucocytes. What part of the body's defence system are white blood cells?
    S6 (try): theyre like the immune system bit right
    T6: Yes — they're part of the immune system, that's right. White blood cells also have a scientific name, leucocytes, so you might see either word in your exam. What's the scientific name for a white blood cell?
    [screenshot 07-exchange-6-phone.png and 07-exchange-6-laptop.png] exchange-6
    S7 (wrong): is it pathocyte
    T7: Not quite — "pathocyte" isn't a real word, though it's a decent guess. The scientific name is leucocyte (say it "LOO-koh-site"), and it just means white blood cell. Using that word, what's the scientific name for a white blood cell?
    S8 (try): leucocyte
    T8: Yes — leucocyte is right, it means white blood cell. Here's a difference from red blood cells: white blood cells have a nucleus, the part of a cell that holds its genetic material, but mature red blood cells don't. Which type of blood cell has a nucleus?
    S9 (try): white blood cells
    T9: Yes — white blood cells are the ones with a nucleus. One type of white blood cell is called a phagocyte, and it's your fast first responder: when it detects something foreign, like a bacterium, it changes shape to surround it and pulls it inside. What do you think the phagocyte does to the bacterium once it's inside?
    [screenshot 08-exchange-9-phone.png and 08-exchange-9-laptop.png] exchange-9
    S10 (bored): huh?
    T10: No worries, let me say it more simply. A phagocyte is a white blood cell that swallows a bacterium whole, then digests it with enzymes. That swallowing-and-digesting is called phagocytosis. So what does a phagocyte do to a bacterium after pulling it inside?
    S11 (offtopic): im so hungry rn
    T11: Sounds like lunch is calling soon! The phagocyte digests the bacterium with enzymes. That whole process is called phagocytosis. What is the name for the process where a phagocyte engulfs and digests a pathogen?
    S12 (try): phagocytosis
    T12: Yes — phagocytosis is exactly right. Phagocytes are also non-specific, which means they attack any pathogen equally, without needing to recognise a particular one first. Since they don't need a specific match, what role do they play when an infection first starts?
    [screenshot 09-exchange-12-phone.png and 09-exchange-12-laptop.png] exchange-12
    S13 (try): like they attack anything straight away?
    T13: Yes — attacking anything straight away is right, that's what non-specific means. Lymphocytes are different: they're white blood cells that take a targeted approach, producing proteins called antibodies and antitoxins to fight one particular pathogen. Which type of white blood cell makes antibodies?
    S14 (try): lymphocytes make antibodies
    T14: Yes — lymphocytes make antibodies, that's right. Every pathogen has unique proteins on its surface called antigens, which the immune system spots as foreign. An antibody is made to match one antigen's shape. Why can't a lymphocyte just use any antibody against any pathogen?
    S15 (idk): idk, like they don't match?
    T15: Yes, not matching is right. An antibody is complementary in shape to one specific antigen, so it only binds to the pathogen carrying that antigen. Since each antibody fits only one antigen, what kind of response is that?
    [screenshot 10-exchange-15-phone.png and 10-exchange-15-laptop.png] exchange-15
    S16 (try): specific response?
    T16: Yes — specific response is right, because each antibody fits only one antigen. When the antibody binds to its antigen, it marks the pathogen for destruction, clumps pathogens together, or neutralises them. Which one of those three things do antibodies do once they've bound to the antigen?
    S17 (try): all three?
    T17: Yes — all three is right: marking, clumping and neutralising. Lymphocytes also make antitoxins, which are proteins that neutralise the toxins that pathogens release. What do antitoxins neutralise?
    S18 (minimal): toxins?
    T18: Yes — toxins is right. Antitoxins neutralise the toxins that pathogens release, which stops those toxins causing further harm. Antibodies and antitoxins both target one particular pathogen's features, so if a lymphocyte makes antibodies for the flu virus's antigen, what would those antibodies ignore?
    [screenshot 11-exchange-18-phone.png and 11-exchange-18-laptop.png] exchange-18
    S19 (try): other pathogens?
    T19: Yes — other pathogens is right, because the antibodies only fit the flu virus's antigen. What do you think memory cells let your body do if the same pathogen turns up again?
    S20 (idk): idk like fight it faster?
    T20: Yes — a faster response is right. That ability to respond more rapidly and effectively to a pathogen you've met before is called immunological memory, and it means the pathogen is usually destroyed before you even feel ill. Why don't you get chickenpox twice?
    S21 (try): cos memory cells remember it?
    T21: Yes, memory cells remembering it is right. That's the end of this lesson: you answered questions on white blood cells, lymphocytes and immunological memory, and some on physical barriers and phagocytes, while I told you the rest. Lovely work today.
    [screenshot 12-exchange-21-phone.png and 12-exchange-21-laptop.png] exchange-21
    S22 (closing): ok thanks bye
    T22: Bye for now! You can come back to this lesson any time, and good luck with the GCSE revision.
    [the lesson shows "Lesson finished."]
    [screenshot 13-end-phone.png and 13-end-laptop.png] end
