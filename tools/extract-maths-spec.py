"""Make data/spec/maths.md from the AQA GCSE Mathematics (8300) specification.

    python tools/extract-maths-spec.py      # reads data/spec/src/maths.pdf

tools/extract-spec.py is tuned to the science specifications (4.x headings).
The maths specification is laid out differently: section headings 3.x and
3.x.y, then one block per reference (N1, A12, G20 ...) with three columns
(Basic foundation, Additional foundation, Higher only) and full-width Notes.

This reads each text fragment's position and size with pypdf:
  size >= 15   a 3.x / 3.x.y heading
  size ~13     a reference heading (N1, A12 ...)
  size ~12     the column header row (skipped)
  x < 46       Notes, full width
  otherwise    the column from x: < 210 basic, < 365 additional, else higher.
Fragments are grouped into lines by y (within 6 pt, so superscripts join
their line); a raised small fragment is written with ^ in front.

Known limits: a fragment that pypdf hands over as one piece across two
columns stays in the column it starts in; stacked fractions come out as
numerator and denominator side by side; diagrams are images and are lost.
The Appendix (DfE formulae) is added as plain text at the end.
"""
import re
import pypdf

SRC = 'data/spec/src/maths.pdf'
OUT = 'data/spec/maths.md'
FIRST, LAST = 8, 35          # 0-based pdf pages holding section 3 (printed 9-36)
APPENDIX = 42                # printed page 43

reader = pypdf.PdfReader(SRC)


def fragments(page):
    out = []

    def visit(text, cm, tm, fd, fs):
        t = text.replace('', 'π').replace('\n', ' ').strip()
        if t:
            out.append((tm[4], tm[5], fs * tm[0], t))
    page.extract_text(visitor_text=visit)
    return out


def lines_of(frags):
    frags = sorted(frags, key=lambda f: -f[1])
    lines = []
    for f in frags:
        if lines and abs(lines[-1]['y'] - f[1]) <= 6:
            lines[-1]['frags'].append(f)
        else:
            lines.append({'y': f[1], 'frags': [f]})
    for ln in lines:
        ln['frags'].sort(key=lambda f: f[0])
        big = [f for f in ln['frags'] if f[2] >= 9]
        ln['base'] = min((f[1] for f in big), default=ln['y'])
    return lines


COL_START = {'basic': 48, 'additional': 218, 'higher': 373}
NEXT = {'basic': 'additional', 'additional': 'higher'}


def split_wide(f, c):
    """A fragment that runs past the next column's start (estimated at 0.48 em
    per character) is cut at the word boundary nearest that start."""
    x, y, size, t = f
    if c not in NEXT:
        return [(c, t)]
    w = 0.48 * size
    nxt = COL_START[NEXT[c]]
    if x + len(t) * w < nxt + 20:
        return [(c, t)]
    best = None
    for i, ch in enumerate(t):
        if ch == ' ':
            d = abs(x + i * w - nxt)
            if best is None or d < best[0]:
                best = (d, i)
    if best is None or best[0] > 30:
        return [(c, t)]
    i = best[1]
    return [(c, t[:i])] + split_wide((x + (i + 1) * w, y, size, t[i + 1:]), NEXT[c])


def col_of(x):
    return 'notes' if x < 46 else 'basic' if x < 210 else 'additional' if x < 365 else 'higher'


LABEL = {'basic': 'Basic foundation', 'additional': 'Additional foundation', 'higher': 'Higher only', 'notes': 'Notes'}
md = ['# GCSE Mathematics (8300) — subject content',
      '',
      'Made by tools/extract-maths-spec.py from the AQA specification (see data/spec/MANIFEST.md).',
      'Each reference lists its content by column: Basic foundation, Additional foundation, Higher only.',
      '']
ref = None
cols = {}
section_title = ''


notes_mode = False


def flush():
    global ref, cols, notes_mode
    notes_mode = False
    if ref:
        md.append(f'#### {ref} ({section_title})')
        for c in ('basic', 'additional', 'higher', 'notes'):
            txt = ' '.join(cols.get(c, [])).strip()
            txt = re.sub(r'\s+', ' ', txt).replace('Notes: ', '').replace('Notes:', '').strip()
            if txt:
                md.append(f'- {LABEL[c]}: {txt}')
        md.append('')
    ref, cols = None, {}


for p in range(FIRST, LAST + 1):
    for ln in lines_of(fragments(reader.pages[p])):
        fr = ln['frags']
        first = fr[0]
        text = ' '.join(f[3] for f in fr)
        if ln['y'] < 40 or ln['y'] > 800 or text.startswith('GCSE Mathematics (8300)') or 'Visit aqa.org.uk' in text:
            continue
        if first[2] >= 15 and re.match(r'^3\.\d', first[3]):
            flush()
            m = re.match(r'^(3\.\d+(?:\.\d+)?)\s+(.*)$', text)
            num, title = (m.group(1), m.group(2)) if m else (first[3], '')
            # 3.4.3 Vectors shares its line with the column header
            title = re.sub(r'\s*Basic foundation.*|\s*Additional foundation.*|\s*Higher content only.*', '', title)
            level = '##' if num.count('.') == 1 else '###'
            section_title = f'{num} {title}'.strip()
            md.append(f'{level} {num} {title}'.strip())
            md.append('')
            continue
        if 12.5 <= first[2] < 15 and re.match(r'^[NARGPS]\d+$', first[3]) and first[0] < 46:
            flush()
            ref = first[3]
            rest = [f for f in fr[1:] if f[2] < 11.5 or f[2] >= 12.5]
            fr = [f for f in rest if f[2] < 11.5]
            if not fr:
                continue
        if all(11.5 <= f[2] < 12.5 for f in fr):
            continue   # column header row
        if ref is None:
            md.append(text)
            continue
        fr = [f for f in fr if not (11.5 <= f[2] < 12.5)]
        if fr and fr[0][0] < 46:
            notes_mode = True     # Notes run full width to the next heading
        for f in fr:
            raised = f[2] < 9 and f[1] > ln['base'] + 2
            parts = [('notes', f[3])] if notes_mode else split_wide(f, col_of(f[0]))
            for c, t in parts:
                cols.setdefault(c, []).append(('^' if raised else '') + t)
flush()

md.append('## 6 Appendix: mathematical formulae')
md.append('')
md.append(reader.pages[APPENDIX].extract_text().replace('', 'π'))
text = '\n'.join(md)
text = re.sub(r'\n{3,}', '\n\n', text)
# The symbol font uses one glyph (U+F800) for both π and θ: it is θ after
# sin/cos/tan and in "θ = 0°, 30° ...".
text = re.sub(r'\b(sin|cos|tan) π', r'\1 θ', text)
text = text.replace('π = 0°', 'θ = 0°')
text = re.sub(r'- Notes: Notes ?: ?', '- Notes: ', text)
open(OUT, 'w', encoding='utf-8', newline='\n').write(text + '\n')
refs = re.findall(r'^#### ([NARGPS]\d+) ', text, re.M)
print(f'wrote {OUT}: {len(refs)} references')
for k in 'NARGPS':
    got = sorted(int(r[1:]) for r in refs if r[0] == k)
    missing = [i for i in range(1, max(got) + 1) if i not in got] if got else []
    print(f'  {k}: {len(got)} (1..{max(got) if got else 0}), missing {missing or "none"}, dupes {sorted(set(x for x in got if got.count(x) > 1)) or "none"}')
