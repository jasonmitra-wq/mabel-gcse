# Site test: g5-development (lesson, 2026-10-17)

**FAIL** · cost $0.3689 (31 tool calls, 67 calls from the site)

## Judge

```json
{
  "broken": [
    {
      "what": "The opening question asks about 'those two countries', but no countries, data or image were shown, so it cannot be answered.",
      "step": "T0"
    },
    {
      "what": "The student said 'they live longer cuz theyre happier without money?'. The tutor never said this was wrong. It asked a check-in, the student said no, and the tutor explained anyway.",
      "step": "T9-T10"
    },
    {
      "what": "The tutor says 'I'm asking about the gap itself', but its actual question was why some countries got richer. It contradicts itself.",
      "step": "T13"
    },
    {
      "what": "'How do you think that affected those colonised countries' points to colonialism, which had not been mentioned yet.",
      "step": "T14"
    },
    {
      "what": "The tutor asked for the term for unprocessed materials (primary products), then dropped the question and never gave the answer.",
      "step": "T17-T18"
    },
    {
      "what": "The tutor jumped to aid, then Fairtrade, then debt relief by asking questions about each before introducing it ('money it no longer has to spend on loan repayments').",
      "step": "T19, T21, T22"
    },
    {
      "what": "The wrong answer 'buy more stuff to export' was never corrected. It was then saved in the notes as 'money saved from paying off old loans to invest in new things, like exports'. That note misstates debt relief: freed money usually goes to health and education.",
      "step": "T23-T24"
    },
    {
      "what": "The tutor asked questions the student had not been taught: what areas the 17 goals cover, what year poverty started to fall (the tutor had just said 1990), and how many per 100 were in extreme poverty in 1990. The figure was never given.",
      "step": "T24, T26, T27"
    },
    {
      "what": "These sections were ticked as covered without the content being taught: Brandt Line, HDI, NEEs, the Demographic Transition Model, and a definition of development. 'Is the gap closing' was never actually answered, only the extreme poverty trend.",
      "step": "T7, T12, T29"
    },
    {
      "what": "The student asked to stop three times. Each time the tutor said 'That's fine' and then immediately asked another question. It never offered to pause or save.",
      "step": "T6, T12, T15"
    }
  ],
  "looks_wrong": [
    {
      "what": "The 'What are you revising?' heading and the Home button are cut off under the sticky header.",
      "screenshot": "02-subjects-phone.png"
    },
    {
      "what": "The top chat bubble's text is clipped and runs under the 'Start this topic over' link.",
      "screenshot": "06-exchange-3-phone.png"
    },
    {
      "what": "The Key Terms panel is cut off mid-sentence at the bottom of the sidebar, and the slide thumbnail is too small to read.",
      "screenshot": "07-exchange-6-laptop.png"
    },
    {
      "what": "After the final message, the 'Lesson finished.' text and the end buttons are not visible on phone, though the laptop screenshot shows them.",
      "screenshot": "15-exchange-30-phone.png"
    },
    {
      "what": "The end screen shows mid-lesson content (the T24 message) instead of the finished state or end buttons.",
      "screenshot": "16-end-phone.png"
    }
  ],
  "would_quit": {
    "turn": "S12",
    "quote": "honestly im starving lol can we do this later",
    "why": "This is the second time the student asked to stop. The tutor said 'That's fine' and then kept asking questions, so a bored teen just closes the tab."
  },
  "fixes": [
    {
      "target": "g5-development opening prompt (T0)",
      "change": "Replace 'those two countries' with a self-contained question, or show a two-country comparison (e.g. UK vs Niger: GNI per capita, life expectancy) above it."
    },
    {
      "target": "Tutor behaviour on 'can we do this later' / phone dying",
      "change": "Stop asking questions. Save progress and show a 'Pause – resume later' button with one line saying where they'll pick up."
    },
    {
      "target": "Tutor behaviour on questions",
      "change": "Never ask for a fact not yet taught (year, per-100 figure, SDG areas). If a question is dropped or skipped, state the answer (e.g. 'primary products', '~36 in 100 in 1990, under 10 now') before moving on."
    },
    {
      "target": "Wrong-answer handling and the 'Worth writing down' notes",
      "change": "Correct wrong answers explicitly before summarising (S9 happiness, S23 exports). Fix the debt relief note to: 'Debt relief cancels loans so money can go on health and education.'"
    },
    {
      "target": "Section completion logic (Jump To ticks)",
      "change": "Only tick a section once its required points are covered: Brandt Line, HDI, NEEs, DTM, a development definition, and a direct yes/no-with-evidence answer to 'Is the gap closing?'."
    }
  ]
}
```

## Transcript

    Lesson g5-development (Geography › The Changing Economic World › Development — measuring and explaining the gap).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    [screenshot 02-subjects-phone.png and 02-subjects-laptop.png] subjects
    [screenshot 03-topics-geography-phone.png and 03-topics-geography-laptop.png] topics-geography
    [screenshot 04-lessons-g5-phone.png and 04-lessons-g5-laptop.png] lessons-G5
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Hi! What do you think GNI per capita actually tells us about people's lives in those two countries?
    [screenshot 05-ai-lesson-opening-phone.png and 05-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (wrong): um like how many people live there i guess?
    T1: Not quite — GNI per capita actually tells us about average income per person, not population size. But good thinking about what it measures! What do you think life expectancy might be lower in a country where people don't have access to clean water?
    S2 (wrong): yeah because like if the water's dirty they get ill more often right?
    T2: Exactly — getting ill more often means people don't live as long. So life expectancy is the average age people in a country live to, and it's really affected by things like clean water, good healthcare, and nutrition. Why do you think a country with lots of doctors might have higher life expectancy than one with very few?
    S3 (wrong): cos like more doctors means more people get treated when theyre sick innit
    T3: Now, infant mortality rate is different from life expectancy — it measures how many babies out of every 1,000 born alive die before their first birthday, and it shows us how good a country's healthcare and nutrition really are. What do you think a high infant mortality rate tells us about a country?
    [screenshot 06-exchange-3-phone.png and 06-exchange-3-laptop.png] exchange-3
    S4 (bored): that was long lol
    T4: Do you want me to quickly run through the rest of the indicators for you?
    S5 (try): yeah go on then but make it short
    T5: GNI per capita just measures income on its own. A High Income Country — or HIC — is a wealthy country with high GNI per capita, like the UK, Japan or the USA. What do you think "high GNI per capita" actually means?
    S6 (offtopic): wait can we do this later im hungry
    T6: That's fine — you can come back to this any time! GNI per capita just means how much money each person in a country earns on average. What kind of countries have high GNI per capita?
    [screenshot 07-exchange-6-phone.png and 07-exchange-6-laptop.png] exchange-6
    S7 (try): rich countries like uk and japan i guess
    T7: Exactly — rich countries with high GNI per capita. So at the other end, a Low Income Country or LIC is one of the world's poorest countries with very low GNI per capita, like Niger or Malawi. What do you think that means for people living there?
    S8 (minimal): k
    T8: If a country has very low GNI per capita, people there earn much less money on average — so they might struggle to afford food, healthcare, or education. What do you think that could mean for how long people live there?
    S9 (wrong): they live longer cuz theyre happier without money?
    T9: Would it help if I just explained what actually happens to people's health when there's less money in a country?
    [screenshot 08-exchange-9-phone.png and 08-exchange-9-laptop.png] exchange-9
    S10 (wrong): nah im ok thx
    T10: So in countries with low GNI per capita, people can't afford the healthcare and nutrition they need, so they tend to live shorter lives. What's an example of a Low Income Country?
    S11 (try): niger or malawi
    T11: Niger and Malawi are both Low Income Countries — that means they're among the world's poorest, with very low GNI per capita. What do you think that low income means for things like hospitals and doctors there?
    S12 (offtopic): honestly im starving lol can we do this later
    T12: That's fine — you can come back to this lesson any time! So you've learned that Low Income Countries like Niger and Malawi have very low GNI per capita, which affects their healthcare and life expectancy. What do you think is one reason some countries ended up richer than others?
    [screenshot 09-exchange-12-phone.png and 09-exchange-12-laptop.png] exchange-12
    S13 (try): idk maybe they had more stuff to sell or like industry
    T13: You're right — countries with industry and goods to sell do tend to be wealthier. But I'm asking about the gap itself: what's the difference between a rich country and a poor country in terms of wealth and quality of life?
    S14 (try): rich countries have more money so ppl can afford better stuff like hospitals and food i guess
    T14: Exactly — richer countries have more money for hospitals and food, and poorer ones don't. That gap in wealth and quality of life between the richest and poorest countries is what we call the development gap. Now, one big reason this gap exists goes back to history. How do you think that affected those colonised countries after independence?
    S15 (offtopic): ugh wait my phone's dying i need to charge it
    T15: That's fine — charge it up! While you're doing that, here's the idea: when European countries colonised Africa and Asia, they took out raw materials but deliberately shut down local industries so those countries couldn't compete with theirs. That left colonised countries poor and dependent. What raw materials do you think European powers wanted to extract?
    [screenshot 10-exchange-15-phone.png and 10-exchange-15-laptop.png] exchange-15
    S16 (wrong): like gold and diamonds and stuff from africa right
    T16: Right — gold, diamonds, and things like that from Africa, exactly. Do you want me to run through the rest of how colonialism created the development gap, or shall we keep unpacking it together?
    S17 (try): nah keep unpacking it i get bored with just listening
    T17: So after colonialism, poor countries got stuck exporting cheap raw materials like coffee and copper instead of making finished goods — and those raw material prices keep bouncing up and down, which makes it hard to plan. What do you call materials sold before anything's been made from them?
    S18 (offtopic): sorry my charger's being so slow rn
    T18: No worries — charging takes forever sometimes! What do you think happens to the price of coffee when lots of countries all try to sell it at the same time?
    [screenshot 11-exchange-18-phone.png and 11-exchange-18-laptop.png] exchange-18
    S19 (wrong): goes up cuz theres more supply innit
    T19: Not quite — when lots of supply hits the market at once, prices actually go down because there's too much of it competing to sell. So after colonialism, countries got stuck selling cheap raw materials like coffee and copper instead of finished goods. What's the difference between money sent after a flood and money sent to build a school?
    S20 (bored): huh? too confusing
    T20: One more time — aid is money or stuff sent to help another country. Some aid is quick help after disasters, like food after a flood. Some is slower stuff that takes years, like building schools or water pipes. What's the difference between helping right after a disaster and helping build something that lasts?
    S21 (bored): can we skip this
    T21: Right — short-term aid is quick help after disasters, long-term aid builds things like schools that last for years. What do you think might be a problem if Fairtrade only helps farmers who are certified to sell Fairtrade products?
    [screenshot 12-exchange-21-phone.png and 12-exchange-21-laptop.png] exchange-21
    S22 (try): like farmers without it dont get help?
    T22: Exactly — farmers without certification miss out, so Fairtrade only helps some people, not everyone who needs it. What do you think a country could do with money it no longer has to spend on loan repayments?
    S23 (wrong): maybe buy more stuff to export?
    T23: Would you like me to just tell you the rest of this part about what countries can do with freed-up money?
    S24 (checkin-yes): yeah ok go on
    T24: There are small loans called microfinance for people too poor for ordinary banks, often to start businesses. There's also intermediate technology — simple equipment like hand-powered pumps that people can repair themselves. The UN created 17 Sustainable Development Goals in 2015 — targets to end poverty, hunger, and other problems by 2030. What areas do those 17 goals cover?
    [screenshot 13-exchange-24-phone.png and 13-exchange-24-laptop.png] exchange-24
    S25 (bored): this is long bruv
    T25: So the SDGs are basically 17 targets the UN set in 2015 to fix big global problems — things like poverty, hunger, health, and climate — and countries agreed to try to reach them by 2030. What's one problem the SDGs are trying to tackle?
    S26 (try): poverty i guess
    T26: Right — poverty is one of the big ones. Extreme poverty means living on so little money you can't afford basic food, shelter or healthcare — and the good news is that the share of people living like that has dropped massively since 1990. What year saw extreme poverty start to fall sharply?
    S27 (bored): huh?
    T27: Sorry — let me put that more simply. Extreme poverty means you're so poor you can't afford food, shelter or healthcare, and way fewer people live like that now than they did 30 years ago. How many people out of every 100 worldwide were living in extreme poverty back in 1990?
    [screenshot 14-exchange-27-phone.png and 14-exchange-27-laptop.png] exchange-27
    S28 (bored): can we skip this
    T28: Do you want me to just quickly tell you the rest about whether the gap is closing?
    S29 (checkin-no): yeah just tell me
    T29: So extreme poverty means your income is so low you can't afford basic food, shelter or healthcare — and since 1990, way fewer people worldwide have been living like that. The share of people in extreme poverty has fallen really sharply, which is actually one of the big success stories of global development.
    S30 (closing): ok thanks
    T30: You're welcome! You've covered a lot today — come back whenever you want to go over any of it again.
    [screenshot 15-exchange-30-phone.png and 15-exchange-30-laptop.png] exchange-30
    [the lesson shows "Lesson finished."]
    [screenshot 16-end-phone.png and 16-end-laptop.png] end
