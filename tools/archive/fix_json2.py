"""Fix JSON lesson files:
1. Replace Windows-1252 control chars encoded as C1 Unicode (U+0080-U+009F)
   that JSON parsers reject — most common is U+0096 → em-dash (—)
2. Also fix any stray ] that should be } closing checkpoints object
Then trim memTips to 2 sentences.
"""
import json, re, os, glob

# Windows-1252 C1 control character → proper Unicode replacement
WIN1252 = {
    '': '€', '': '‚', '': 'ƒ', '': '„',
    '': '…', '': '†', '': '‡', '': 'ˆ',
    '': '‰', '': 'Š', '': '‹', '': 'Œ',
    '': 'Ž', '': '‘', '': '’',
    '': '“', '': '”', '': '•',
    '': '–', '': '—', '': '˜', '': '™',
    '': 'š', '': '›', '': 'œ', '': 'ž',
    '': 'Ÿ',
}
CTRL_RE = re.compile('[' + ''.join(WIN1252.keys()) + ']')

def split_sentences(text):
    ABBREVS = r'(?:e\.g|i\.e|vs?|etc|approx|vol|fig|dr|mr|mrs|ms|prof|pp|no)\.'
    parts = re.split(r'(?<=[.!?])\s+(?=[A-Z"])', text.strip())
    result = []
    for p in parts:
        if result and re.search(ABBREVS + r'\s*$', result[-1], re.I):
            result[-1] += ' ' + p
        else:
            result.append(p)
    return result

def trim_to_two(text):
    if not text:
        return text
    sents = split_sentences(text)
    if len(sents) <= 2:
        return text
    trimmed = ' '.join(sents[:2]).strip()
    if trimmed and trimmed[-1] not in '.!?':
        trimmed += '.'
    return trimmed

base = r'C:\Users\jason\OneDrive\Documents\GitHub\mabel-gcse\lessons'
results = {'fixed_ctrl': [], 'fixed_memtip': [], 'still_broken': []}

for pattern in ['biology/*.json', 'chemistry/*.json', 'physics/*.json']:
    for fp in sorted(glob.glob(os.path.join(base, pattern))):
        with open(fp, encoding='utf-8') as f:
            raw = f.read()

        # Step 1: replace C1 control chars
        cleaned = CTRL_RE.sub(lambda m: WIN1252.get(m.group(), m.group()), raw)
        ctrl_changed = cleaned != raw

        # Step 2: verify JSON is now valid; try fixing ] → } if not
        try:
            data = json.loads(cleaned)
        except json.JSONDecodeError:
            # Try replacing stray ] closers of objects
            attempt = re.sub(r'(\n\s*\})\n(\s*\])(,\n)',
                             lambda m: m.group(1)+'\n'+m.group(2).replace(']','}')+m.group(3),
                             cleaned)
            try:
                data = json.loads(attempt)
                cleaned = attempt
            except json.JSONDecodeError as e:
                rel = os.path.relpath(fp, base)
                results['still_broken'].append((rel, str(e)))
                if ctrl_changed:
                    with open(fp, 'w', encoding='utf-8') as f:
                        f.write(cleaned)
                continue

        # Step 3: trim memTips
        memtip_changed = False
        for kp in data.get('keyPoints', []):
            tip = kp.get('memTip', '')
            if tip:
                trimmed = trim_to_two(tip)
                if trimmed != tip:
                    kp['memTip'] = trimmed
                    memtip_changed = True

        rel = os.path.relpath(fp, base)
        if ctrl_changed:
            results['fixed_ctrl'].append(rel)
        if memtip_changed:
            results['fixed_memtip'].append(rel)

        if ctrl_changed or memtip_changed:
            with open(fp, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)

print(f"Fixed C1 control chars in {len(results['fixed_ctrl'])} files")
print(f"Trimmed memTips in {len(results['fixed_memtip'])} files")
if results['still_broken']:
    print(f"\nStill broken ({len(results['still_broken'])}):")
    for f, e in results['still_broken']:
        print(f'  {f}: {e}')
else:
    print("\nAll files now valid JSON ✓")
