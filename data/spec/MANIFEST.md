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

Downloaded 2026-10-11.
