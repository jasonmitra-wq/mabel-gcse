# Spec text — manifest

The AQA specification PDFs and the markdown made from them stay local
(gitignored: `data/spec/src/` and `data/spec/*.md`). This file records exactly
which files were used, so anyone can rebuild them and check they match.

Rebuild: download each PDF to `data/spec/src/<subject>.pdf`, then

    python tools/extract-spec.py          # writes data/spec/<subject>.md
    python tools/check-spec-sections.py   # independent completeness check
    node tools/spec-coverage.js           # writes tools/spec-coverage.md

Extractor: `tools/extract-spec.py` — Python 3.14.3 with pypdf 6.19.0. It reads
each text fragment's position, font and size, splits the two columns, keeps
numbered headings exactly, rebuilds equations (powers as `^`, fractions as
`a/b`), and puts the right-hand "Key opportunities for skills development"
column after each section as a quoted block. Diagrams and circuit symbols are
images in the PDF and are not in the text.

Section counts are from `tools/check-spec-sections.py` (contents page, PDF
bookmarks and a plain-text scan of the pages, compared with the .md headings).

| Subject | Source URL | Version and date printed in the PDF | md5 of PDF | md5 of .md | Sections 4.x / 4.x.y / all depths (PDF = .md) |
|---|---|---|---|---|---|
| Biology (8461) | https://filestore.aqa.org.uk/resources/biology/specifications/AQA-8461-SP-2016.PDF | Version 1.0 21 April 2016 | ab03e85358b8c71950839a8bc1d2bd42 | 834b782137786657f8fa8b56b9a40c8f | 8 / 24 / 126 — none missing, no gaps |
| Chemistry (8462) | https://filestore.aqa.org.uk/resources/chemistry/specifications/AQA-8462-SP-2016.PDF | Version 1.1 04 October 2019 | 9a165e27781293f849a4bf74bee1e8a7 | 24ff3f8a72ad32d2a31ba259b0f31695 | 11 / 32 / 165 — none missing, no gaps |
| Physics (8463) | https://filestore.aqa.org.uk/resources/physics/specifications/AQA-8463-SP-2016.PDF | Version 1.1 30 September 2019 | c4d22bbfe0bbb9de942e4304ff264886 | 6a6e0cc7eaee22f1e58d78b217f4f4bc | 9 / 30 / 128 — none missing, no gaps |
| Geography (8035) | https://filestore.aqa.org.uk/resources/geography/specifications/AQA-8035-SP-2016.PDF | Version 1.1 12 September 2023 | 242380634885f96b8afb09f013d488a6 | 26ef9d06740a7fb479e008fd6aabc61d | not run (see below) |

Downloaded 2026-10-11.

## Geography (2026-11-19)

Brief docs/briefs/2026-11-15-script-four-topics.md, step G-a. Downloaded 2026-11-19 from the exam board URL in the table (HTTP 200, application/pdf, 866 528 bytes, 40 pages). tools/extract-spec.py is tuned to the science specifications' 4.x headings and fonts and found no headings here, so data/spec/geography.md was made with plain pypdf text extraction, page by page: section 3.2.2 (The changing economic world) is laid out with its four key ideas as headings 3.2.2.1 to 3.2.2.4 (our numbers: the specification does not number its key ideas), then the whole document as plain text. tools/check-spec-sections.py was not run (it reads 4.x headings). specRef: g5-development 3.2.2.1 and 3.2.2.2; g5-nigeria 3.2.2.3; g5-uk-economy 3.2.2.4.

## Maths (2026-11-26)

Maths full audit, part B. Downloaded 2026-11-26 from https://filestore.aqa.org.uk/resources/mathematics/specifications/AQA-8300-SP-2015.PDF (HTTP 200, application/pdf, 826 805 bytes, 44 pages; printed "Version 1.0 12 September 2014"). md5 of PDF 5e8687b216f1ac18f5eabfe2d16387a3. Saved as data/spec/src/maths.pdf.

data/spec/maths.md is made by `python tools/extract-maths-spec.py` (pypdf 6.19.0; tools/extract-spec.py reads the science 4.x layout and does not fit). Section 3 (printed pages 9–36): headings 3.1–3.6 and 3.x.y, then one `#### <ref> (<section>)` block per reference with its content split by column (Basic foundation / Additional foundation / Higher only) and Notes; the Appendix of DfE formulae (printed page 43) is added as plain text. All 97 references present: N1–N16, A1–A25, R1–R16, G1–G25, P1–P9, S1–S6, no gaps, no duplicates (the script's own count). md5 of .md af06f1a410564e29944cbb02ecc3e9aa. Known limits: the PDF's symbol font uses one glyph for π and θ (θ is restored after sin/cos/tan and in "θ = 0°"); stacked fractions come out as numerator and denominator side by side; the √ sign inside N8's surd example is lost; diagrams are images. tools/check-spec-sections.py was not run (it reads 4.x headings).

specRef for the 41 maths subtopics is in data/maths-syllabus.json. There are 42 files in lessons/maths/: the 42nd is TEMPLATE.json, which has no subtopic. No subtopic has two files.
