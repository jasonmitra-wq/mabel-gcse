"""
Extract section 4 "Subject content" of the AQA GCSE science specifications
into markdown.

    python tools/extract-spec.py

Reads data/spec/src/{biology,chemistry,physics}.pdf and writes
data/spec/{biology,chemistry,physics}.md. Re-runnable; reads nothing else.
Needs pypdf (pip install pypdf).

How it works: pypdf gives every text fragment with its position, font and
size. The spec pages are two columns: the left is the content, the right is
"Key opportunities for skills development". Fragments are grouped into lines
by height on the page, split into the two columns, and written out in reading
order. Numbered headings (4.6.1.2 etc.) become markdown headings with the
number kept exactly. Each section's right-hand column follows its content as
a quoted block. Equations: small raised/lowered fragments become ^powers,
subscripts, or a/b fractions.
"""

import os
import re
import sys

import pypdf

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'data', 'spec', 'src')
OUT = os.path.join(ROOT, 'data', 'spec')
SUBJECTS = ['biology', 'chemistry', 'physics']

BODY = 11.0            # body text size in all three specs
SMALL = 10.0           # anything smaller is a sub/superscript or fraction part
HEADING_MIN = 12.5     # numbered headings are 13, 16 or 19pt
LABELS = {'content', 'key opportunities for', 'skills development',
          'content key opportunities for', 'key opportunities for skills development'}
NUM_RE = re.compile(r'^(4(?:\.\d+)*)\b\s*(.*)$')


def frag_list(page):
    out = []

    def visit(text, cm, tm, font, size):
        if not text or not text.strip():
            return
        x = tm[4] * cm[0] + tm[5] * cm[2] + cm[4]
        y = tm[4] * cm[1] + tm[5] * cm[3] + cm[5]
        name = str((font or {}).get('/BaseFont', '')).split('+')[-1]
        eff = abs((size or 0) * tm[0] * cm[0]) or (size or 0)
        text = text.replace('\n', '').replace('\r', '')
        if 'Times' in name:
            # Times italic equation text carries kerning gaps as spaces
            # ("energ y", "s peci f ic"); real word gaps are separate fragments.
            lead = text[:len(text) - len(text.lstrip(' '))]
            trail = text[len(text.rstrip(' ')):]
            text = lead + text.strip(' ').replace(' ', '') + trail
        text = text.replace('\xa0', ' ').replace('\u0334', '~')   # overlay tilde = "about"
        out.append({'x': x, 'y': y, 'font': name, 'size': round(eff, 1), 't': text})

    page.extract_text(visitor_text=visit)
    return out


def est_end(f):
    return f['x'] + len(f['t']) * f['size'] * 0.5


def is_math(f):
    return 'Times' in f['font'] or 'Cambria' in f['font']


def is_small(f):
    # equation fragments are set slightly under body size inside fractions
    return f['size'] < SMALL or (is_math(f) and f['size'] < BODY - 0.2)


def group_lines(frags, tol=2.5):
    """Group full-size fragments into lines; hang small fragments on the
    nearest line within 8pt (powers, subscripts, fraction parts)."""
    base = sorted([f for f in frags if not is_small(f)], key=lambda f: (-f['y'], f['x']))
    small = [f for f in frags if is_small(f)]
    lines = []
    for f in base:
        for ln in lines:
            if abs(ln['y'] - f['y']) <= tol:
                ln['items'].append(f)
                break
        else:
            lines.append({'y': f['y'], 'items': [f]})
    loose = []
    for f in small:
        best = None
        for ln in lines:
            d = abs(ln['y'] - f['y'])
            if d <= 8 and (best is None or d < abs(best['y'] - f['y'])):
                # only hang it if it sits horizontally within that line
                xs = [i['x'] for i in ln['items']]
                if min(xs) - 40 <= f['x'] <= max(est_end(i) for i in ln['items']) + 40:
                    best = ln
        if best:
            best['items'].append(f)
        else:
            loose.append(f)
    for f in sorted(loose, key=lambda f: (-f['y'], f['x'])):
        for ln in lines:
            if ln.get('loose') and abs(ln['y'] - f['y']) <= tol:
                ln['items'].append(f)
                break
        else:
            lines.append({'y': f['y'], 'items': [f], 'loose': True})
    for ln in lines:
        ln['items'].sort(key=lambda f: f['x'])
    lines.sort(key=lambda ln: -ln['y'])
    return lines


def needs_space(a, b):
    if not a or not b:
        return False
    if a[-1].isspace() or b[0].isspace():
        return False
    return (a[-1].isalnum() or a[-1] in ').,;:') and (b[0].isalnum() or b[0] in '(')


def render_line(ln):
    items = ln['items']
    y0 = ln['y'] if not ln.get('loose') else items[0]['y']
    # small fragments raised or lowered relative to the line
    for f in items:
        dy = f['y'] - y0
        f['pos'] = 'up' if (is_small(f) and dy > 1.5) else 'down' if (is_small(f) and dy < -1.5) else 'on'
    used = set()
    pieces = []  # (x, text, kind)
    ups = [f for f in items if f['pos'] == 'up']
    downs = [f for f in items if f['pos'] == 'down']
    # fractions: a raised run sitting directly above a lowered run
    for u in ups:
        if id(u) in used:
            continue
        run_u = [u]
        for v in sorted(ups, key=lambda v: v['x']):
            if id(v) not in used and v is not u and abs(v['y'] - u['y']) < 3 \
                    and -6 <= v['x'] - est_end(run_u[-1]) + 4 < 12:
                run_u.append(v)   # next word of the same numerator
        lo, hi = min(v['x'] for v in run_u), max(est_end(v) for v in run_u)
        run_d = [d for d in downs if id(d) not in used and lo - 12 <= d['x'] <= hi + 4]
        if not run_d:
            continue
        num = join_plain(run_u)
        den = join_plain(run_d)
        for v in run_u + run_d:
            used.add(id(v))
        wrap = lambda s: s if re.fullmatch(r'[\w.]+', s) else '(' + s + ')'
        pieces.append((lo, wrap(num) + '/' + wrap(den), 'frac'))
    for f in items:
        if id(f) in used:
            continue
        kind = 'sup' if f['pos'] == 'up' else 'sub' if f['pos'] == 'down' else 'on'
        pieces.append((f['x'], f['t'], kind, f))
    pieces.sort(key=lambda p: p[0])
    s = ''
    prev = None
    for p in pieces:
        t = p[1]
        if p[2] == 'sup':
            s = s.rstrip() + '^' + t.strip()
        elif p[2] == 'sub':
            s = s.rstrip() + t.strip()
        elif p[2] == 'frac':
            s = s.rstrip() + ' ' + t + ' '
        else:
            f = p[3]
            if prev is not None and prev[2] == 'on' and not is_math(f) and not is_math(prev[3]) \
                    and f['x'] - est_end(prev[3]) > 30:
                s = s.rstrip() + ' | ' + t.lstrip()   # a gap this wide is a table column
            else:
                if needs_space(s, t):
                    s += ' '
                s += t
        prev = p
    return re.sub(r'\s+', ' ', s).strip()


def join_plain(fs):
    s = ''
    prev = None
    for f in sorted(fs, key=lambda f: f['x']):
        # a smaller fragment straight after a letter is its subscript (v p -> vp)
        if needs_space(s, f['t']) and not (prev and f['size'] < prev['size'] - 1):
            s += ' '
        s += f['t']
        prev = f
    return re.sub(r'\s+', ' ', s).strip()


def line_size(ln):
    return max(f['size'] for f in ln['items'])


def heading_of(ln):
    """Return (number, title) if this line is a numbered heading."""
    # 4.x to 4.x.y.z are 13pt and up; 4.x.y.z.w are smaller but still in
    # the heading typeface
    if line_size(ln) < HEADING_MIN and not any('Chevin' in f['font'] for f in ln['items']):
        return None
    text = render_line(ln)
    m = NUM_RE.match(text)
    if not m or not m.group(1) or (line_size(ln) < HEADING_MIN and m.group(1).count('.') < 4):
        return None
    return m.group(1), m.group(2)


def column_xs(pages):
    """Every x at which the right-hand column's "skills development" label
    starts anywhere in the document (it drifts by a few points page to page)."""
    xs = set()
    for frags in pages:
        for f in frags:
            if f['t'].strip().lower() == 'skills development':
                xs.add(round(f['x'], 1))
    return sorted(xs)


def split_columns(frags, col_xs):
    """Right column: in each row, the first full-size fragment in the right
    half that either starts at a known column x or follows a clear gap;
    it and everything after it on that row."""
    right = []
    rows = {}
    for f in frags:
        rows.setdefault(round(f['y'] / 2.5), []).append(f)
    for row in rows.values():
        row.sort(key=lambda f: f['x'])
        for i, b in enumerate(row):
            if b['x'] < 330 or is_small(b):
                continue
            a = row[i - 1] if i else None
            at_col = any(abs(b['x'] - c) < 5 for c in col_xs)
            if a is None or at_col or b['x'] - est_end(a) > 12:
                right.extend(row[i:])
                break
    rid = set(map(id, right))
    return [f for f in frags if id(f) not in rid], right


def page_body(frags):
    # drop running header and footer
    return [f for f in frags if 40 < f['y'] < 795]


class Section:
    def __init__(self, num, title, level):
        self.num, self.title, self.level = num, title, level
        self.left, self.right = [], []


def paragraphs(lines):
    """Turn rendered lines [(y, text, x, math)] into paragraphs."""
    out = []
    prev = None
    for y, text, x, math in lines:
        if text.strip().lower() in LABELS:
            continue
        bullet = text.startswith('•')
        if bullet:
            text = '- ' + text[1:].strip()
        join = (prev is not None and out and not bullet and not math and not prev[3]
                and 0 < prev[0] - y <= 17 and not text.startswith('-'))
        if join:
            out[-1] = out[-1] + ' ' + text
        else:
            if prev is not None and (prev[0] - y > 17 or prev[0] - y < 0) and out and out[-1] != '':
                out.append('')
            out.append(text)
        prev = (y, text, x, math)
    while out and out[-1] == '':
        out.pop()
    return out


def extract(subject):
    reader = pypdf.PdfReader(os.path.join(SRC, subject + '.pdf'))
    pages = [page_body(frag_list(p)) for p in reader.pages]
    col_xs = column_xs(pages)
    first_text = reader.pages[0].extract_text()
    version = re.search(r'Version\s+[\d.]+[^\n]*', first_text)

    sections = []
    cur = None
    started = done = False
    for pn, frags in enumerate(pages):
        if done:
            break
        left, right = split_columns(frags, col_xs)
        events = []
        for ln in group_lines(left):
            events.append(('L', ln))
        for ln in group_lines(right):
            events.append(('R', ln))
        events.sort(key=lambda e: -e[1]['y'])
        pending_heading = None
        for side, ln in events:
            if side == 'L':
                h = heading_of(ln)
                if h and not started:
                    if h[0] == '4' and h[1].lower().startswith('subject content') and pn > 5:
                        started = True
                        cur = Section('4', 'Subject content', 1)
                        sections.append(cur)
                    continue
                if not started:
                    continue
                if line_size(ln) >= 16 and re.match(r'^5\s', render_line(ln)):
                    done = True
                    break
                if h:
                    cur = Section(h[0], h[1], h[0].count('.') + 1)
                    sections.append(cur)
                    pending_heading = ln
                    continue
                if pending_heading is not None and line_size(ln) >= HEADING_MIN \
                        and 0 < pending_heading['y'] - ln['y'] < 1.6 * line_size(ln):
                    cur.title += ' ' + render_line(ln)   # heading wrapped onto a second line
                    pending_heading = ln
                    continue
                pending_heading = None
                text = render_line(ln)
                if not text:
                    continue
                if any('Chevin' in f['font'] for f in ln['items']):
                    if text.lower() not in LABELS:
                        text = '**' + text + '**'
                math = any(is_math(f) for f in ln['items'])
                cur.left.append((ln['y'], text, min(f['x'] for f in ln['items']), math, pn))
            elif started and not done:
                text = render_line(ln)
                if text:
                    cur.right.append((ln['y'], text, ln['items'][0]['x'], False, pn))

    md = []
    md.append('# AQA GCSE ' + subject.capitalize() + ' — section 4 Subject content')
    md.append('')
    md.append('Extracted by tools/extract-spec.py from data/spec/src/' + subject + '.pdf'
              + ((' (' + re.sub(r'\s+', ' ', version.group(0).strip()) + ')') if version else '') + '.')
    md.append('Quoted blocks are the right-hand column "Key opportunities for skills development".')
    md.append('')
    for s in sections:
        md.append('#' * min(s.level + 1, 6) + ' ' + s.num + ' ' + re.sub(r'\s+', ' ', s.title).strip())
        md.append('')
        body = paragraphs(page_breaks(s.left))
        if body:
            md.extend(body)
            md.append('')
        if s.right:
            skills = paragraphs(page_breaks(s.right))
            if skills:
                md.append('> **Key opportunities for skills development**')
                md.append('>')
                md.extend(('> ' + p) if p else '>' for p in skills)
                md.append('')
    return '\n'.join(md).rstrip() + '\n'


def page_breaks(lines):
    """Lines from different pages: make y fall monotonically so a page turn
    reads as a paragraph break, not a join."""
    out = []
    for y, text, x, math, pn in lines:
        out.append((-pn * 2000 + y, text, x, math))
    return out


def main():
    subjects = sys.argv[1:] or SUBJECTS
    for s in subjects:
        md = extract(s)
        path = os.path.join(OUT, s + '.md')
        with open(path, 'w', encoding='utf-8', newline='\n') as fh:
            fh.write(md)
        n = len(re.findall(r'^#{2,6} 4\.', md, re.M))
        print(f'{s}: {n} numbered headings -> {os.path.relpath(path, ROOT)}')


if __name__ == '__main__':
    main()
