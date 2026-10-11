"""Trim all memTip fields to max 2 sentences across all lesson JSON files."""
import json, re, os, glob

def split_sentences(text):
    # Split on sentence-ending punctuation + space + capital, guarding abbreviations
    ABBREVS = r'(?:e\.g|i\.e|vs?|etc|approx|vol|fig|dr|mr|mrs|ms|prof|pp|no)\.'
    parts = re.split(r'(?<=[.!?])\s+(?=[A-Z"])', text.strip())
    # Re-merge any split that followed an abbreviation
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
    if not trimmed[-1] in '.!?':
        trimmed += '.'
    return trimmed

base = r'C:\Users\jason\OneDrive\Documents\GitHub\mabel-gcse\lessons'
changed_files = []

for pattern in ['biology/*.json', 'chemistry/*.json', 'physics/*.json']:
    for fp in sorted(glob.glob(os.path.join(base, pattern))):
        with open(fp, encoding='utf-8') as f:
            data = json.load(f)
        changed = False
        for kp in data.get('keyPoints', []):
            tip = kp.get('memTip', '')
            if tip:
                trimmed = trim_to_two(tip)
                if trimmed != tip:
                    kp['memTip'] = trimmed
                    changed = True
        if changed:
            with open(fp, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            changed_files.append(os.path.relpath(fp, base))

print(f'Trimmed memTips in {len(changed_files)} files:')
for f in changed_files:
    print(' ', f)
