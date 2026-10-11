"""
Independent completeness check for tools/extract-spec.py.

    python tools/check-spec-sections.py

For each subject, lists every numbered section of section 4 down to three
levels (4.x and 4.x.y) straight from the PDF, without using the extractor:
  - the PDF's own contents page (4.x lines),
  - the PDF's bookmarks (the outline the PDF carries for its headings),
  - a plain-text scan of the section 4 pages for heading lines.
Then compares that list with the headings in data/spec/<subject>.md and
reports sections in the PDF, sections in the .md, any missing, any extra,
and any gap in the numbering. Needs pypdf.
"""

import os
import re

import pypdf

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'data', 'spec', 'src')
OUT = os.path.join(ROOT, 'data', 'spec')
SUBJECTS = ['biology', 'chemistry', 'physics']


def key(num):
    return tuple(int(p) for p in num.split('.'))


def three(num):
    return '.'.join(num.split('.')[:3])


def from_contents(reader):
    found = set()
    for page in reader.pages[1:5]:
        text = page.extract_text() or ''
        if 'Contents' not in text and not found:
            continue
        for line in text.splitlines():
            m = re.match(r'^\s*(4\.\d+)\s+\S.*?\s(\d+)\s*$', line)
            if m:
                found.add(m.group(1))
    return found


def from_outline(reader):
    found = set()

    def walk(items):
        for it in items:
            if isinstance(it, list):
                walk(it)
            else:
                m = re.match(r'^\s*(4(?:\.\d+)+)\s', it.title)
                if m:
                    found.add(m.group(1))
    walk(reader.outline)
    return found


def from_page_text(reader):
    found = set()
    on = False
    for i, page in enumerate(reader.pages):
        text = page.extract_text() or ''
        for line in text.splitlines():
            line = line.strip()
            if i > 5 and re.match(r'^4\s+Subject content\s*$', line):
                on = True
            elif on and re.match(r'^5\s+Scheme of assessment\s*$', line):
                return found
            elif on:
                m = re.match(r'^(4(?:\.\d+)+)\s+[A-Z(]', line)
                # heading lines are short and carry no full stop at the end
                if m and len(line) < 110 and not line.endswith('.'):
                    found.add(m.group(1))
    return found


def from_md(subject):
    with open(os.path.join(OUT, subject + '.md'), encoding='utf-8') as fh:
        md = fh.read()
    return set(re.findall(r'^#{2,6} (4\.\d+(?:\.\d+)*) ', md, re.M))


def gaps(nums):
    """Numbers missing inside a run, e.g. 4.2.1, 4.2.3 -> 4.2.2."""
    out = []
    by_parent = {}
    for n in nums:
        parts = n.split('.')
        by_parent.setdefault('.'.join(parts[:-1]), []).append(int(parts[-1]))
    for parent, kids in sorted(by_parent.items(), key=lambda kv: key(kv[0])):
        for k in range(1, max(kids) + 1):
            if k not in kids:
                out.append(parent + '.' + str(k))
    return out


def fmt(nums):
    return ', '.join(sorted(nums, key=key)) or 'none'


def main():
    for s in SUBJECTS:
        reader = pypdf.PdfReader(os.path.join(SRC, s + '.pdf'))
        contents = from_contents(reader)
        outline_all = from_outline(reader)
        scanned_all = from_page_text(reader)
        md_all = from_md(s)
        outline = {three(n) for n in outline_all}
        scanned = {three(n) for n in scanned_all}
        pdf = contents | outline | scanned
        md = {three(n) for n in md_all}
        lv2 = lambda xs: {x for x in xs if x.count('.') == 1}
        lv3 = lambda xs: {x for x in xs if x.count('.') == 2}
        print(f'## {s}')
        print(f'- PDF sources: contents page {len(contents)} topics (4.x); '
              f'bookmarks {len(lv2(outline))} topics + {len(lv3(outline))} sections; '
              f'page-text scan {len(lv2(scanned))} topics + {len(lv3(scanned))} sections')
        print(f'- Sections in the PDF (union): {len(lv2(pdf))} topics (4.x) + {len(lv3(pdf))} sections (4.x.y)')
        print(f'- Sections in the .md: {len(lv2(md))} topics (4.x) + {len(lv3(md))} sections (4.x.y)')
        print(f'- Missing from the .md: {fmt(pdf - md)}')
        print(f'- In the .md but not found in the PDF: {fmt(md - pdf)}')
        if lv3(outline):
            disagree = (outline ^ scanned) | (lv2(contents) ^ lv2(outline))
            print(f'- PDF sources disagree on: {fmt(disagree)}')
        else:
            disagree = (lv2(contents) ^ lv2(scanned)) | (lv2(contents) ^ lv2(outline))
            print(f'- PDF sources disagree on: {fmt(disagree)} (bookmarks stop at 4.x, so 4.x.y rests on the page-text scan)')
        print(f'- Gaps in numbering (PDF): {fmt(gaps(pdf))}')
        print(f'- Gaps in numbering (.md): {fmt(gaps(md))}')
        deep_pdf = outline_all | scanned_all
        print(f'- All depths (4.x down to 4.x.y.z.w): PDF {len(deep_pdf)}, .md {len(md_all)}; '
              f'missing from .md: {fmt(deep_pdf - md_all)}; not in PDF: {fmt(md_all - deep_pdf)}')
        print()


if __name__ == '__main__':
    main()
