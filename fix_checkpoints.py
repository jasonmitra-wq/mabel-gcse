"""Fix lesson JSON files where the `checkpoints` object is closed with ]
instead of }. Pattern:  ...last_checkpoint}\n  ],\n  "commonMistakes"
should be:              ...last_checkpoint}\n  },\n  "commonMistakes"
"""
import json, re, os, glob

base = r'C:\Users\jason\OneDrive\Documents\GitHub\mabel-gcse\lessons'
fixed = []
still_bad = []

PATTERN = re.compile(
    r'("checkpoints"\s*:\s*\{.*?^\s{4}\})\n(\s{2}\])(,)',
    re.DOTALL | re.MULTILINE
)

for pattern in ['biology/*.json', 'chemistry/*.json', 'physics/*.json']:
    for fp in sorted(glob.glob(os.path.join(base, pattern))):
        with open(fp, encoding='utf-8') as f:
            raw = f.read()
        try:
            json.loads(raw)
            continue  # already valid
        except json.JSONDecodeError:
            pass

        # Fix: replace the ] that closes checkpoints with }
        attempt = PATTERN.sub(lambda m: m.group(1) + '\n' + m.group(2).rstrip(']') + '}' + m.group(3), raw)

        rel = os.path.relpath(fp, base)
        try:
            json.loads(attempt)
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(attempt)
            fixed.append(rel)
        except json.JSONDecodeError as e:
            still_bad.append((rel, str(e)))

print(f'Fixed {len(fixed)} files')
if still_bad:
    print(f'Still broken: {len(still_bad)}')
    for f, e in still_bad:
        print(f'  {f}: {e}')
else:
    print('All clear ✓')
