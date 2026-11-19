# G5 fix log (Phase B, brief docs/briefs/2026-11-15-script-four-topics.md)

## G-c coverage and G-d figures, 2026-11-19

The three lessons were rewritten in plain English, keeping every field: g5-development gained a key point on the
Demographic Transition Model, consequences of uneven development (disparities in wealth and health, international
migration), limitations of measures as reasons they mislead, investment and industrial development as strategies,
and Kenya as the named tourism example; g5-nigeria gained regional and global importance, the wider political,
social, cultural and environmental context, sectors and how manufacturing stimulates development (multiplier),
types and impacts of aid, and changes in quality of life; g5-uk-economy was rebuilt around the seven parts of
"Economic futures in the UK" (causes; post-industrial economy with science and business parks; industry and the
environment with Toyota at Burnaston; rural growth in South Cambridgeshire and decline in the Outer Hebrides; road,
rail, port and airport developments; the north–south divide and strategies; the UK's links, the EU and the
Commonwealth). Figures: tools/pilot/g5-figures.md. check-lesson-v3.js: 0 unsourced-figure warnings in all three;
its other failures come from the old lesson shape (no examBox, pictures, widgets, specChecklist), as for every
Phase B lesson (ESCALATIONS).

## B2 fact check (pipeline step c), 2026-11-19

$0.2975 for three lessons (logs in G5-B2/).
- g5-development: "a rate is always per 1,000" wrong for the literacy rate: now birth, death and infant mortality
  rates are per 1,000 a year, literacy a percentage. HIPC "36 countries": the IMF page opened says 36 of 39, the
  checker says 37 since Somalia in 2023: now "most of the 39". "Aid is given, not lent": aid includes concessional
  loans: now "gifts, or loans on very easy terms". Kenya's classification and growth: tourism growth over time
  added (1.2 million visitors in 2015 to 2 million in 2019); Kenya is lower-middle income by the World Bank,
  which the lesson says plainly. Rejected: "interquartile range exam tip is above GCSE": the June 2023 paper,
  Section B question 02.8, asked for it (E88).
- g5-nigeria: intro "earns most of its money from selling oil" now "most of the money it earns from selling
  abroad". Aid wording as above (tutor note, common mistake). Changing political relationships added
  (Commonwealth suspension under military rule and return, African Union, ECOWAS peacekeeping). Infant
  mortality in 2000 (95) questioned: it is the World Bank value opened (94.9); kept.
- g5-uk-economy: "more likely to have a job" in London and the South East is wrong for London: now "earn more
  and live longer".
- Not checked by the model (diagrams, live sources): no change.

## Independent audit (pipeline step d), 2026-11-19

lesson-auditor (BASE 5366916), report tools/audit-runs/5366916-1.md: 12 findings, all fixed.
1. Shell "has taken oil from the Niger Delta for decades": Shell sold its onshore company (SPDC) on 13 March 2025
   (Shell Nigeria site, opened): now "took oil ... on land for decades; in 2025 it sold that business ... still
   produces oil from deep water off the coast". Source added.
2. g5-development sources[0] had been overwritten by the B2 fix script (Kenya text on the GNI row): GNI row restored.
3. Interquartile-range exam tip: quartiles are not taught in this lesson, so it is replaced with a judgement tip
   (this reverses the B2 rejection; the skill belongs to a skills lesson).
4. Aid sentence in key point 5 still said "given": now "given or lent on very easy terms".
5. Causes diagram said "Four causes": subtitle now "Physical, economic (trade, debt) and historical."
6. Kenya not placed in a class: key point 2 now explains upper- and lower-middle income and that Kenya is
   lower-middle income ($2,200, 2025).
7. Unsourced "From the 1980s" and "A hundred years ago" (UK lesson): cut.
8. Nigeria's balance between sectors: World Bank 2025 shares added (services 58%, industry 16%, farming 23%;
   farming about a third of jobs). Source added.
9. ECOWAS "trade freely": now "work to make trade between them easier".
10. Diagrams: "Conflict has displaced millions" now "forced people from their homes"; sector-shift "1900"/"1960"
    now "Long ago"/"Later".
11. Hard shoulder running (new schemes stopped): cut; "busy motorways and main roads are widened".
12. Long intro sentences split; "royalties" in the oil diagram now "oil payments"; the UK lesson recalls primary,
    secondary and tertiary before the quaternary sector.
