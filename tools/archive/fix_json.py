"""Fix two classes of JSON errors found in lesson files:
1. checkpoints opened with { but closed with ]  →  replace with }
2. Any other parse errors - report them
Then run the memTip trim on all valid files.
"""
import re, os, glob, json

def fix_text(text):
    """Replace ],\n  "commonMistakes" with },\n  "commonMistakes"
       when it appears after a checkpoints object close."""
    # The broken files have checkpoints open with { and close with ]
    # Pattern: the closing ] of a top-level-ish array that should be }
    # Look for:  }\n  ],\n  "  (closing of last checkpoint entry then wrong closer)
    # Replace:   }\n  },\n  "
    #
    # More targeted: find ],\n  "commonMistakes" and replace with },\n  "commonMistakes"
    fixed = re.sub(
        r'(\n\s*\})\n(\s*\]),(\n\s*"(?:commonMistakes|examTips|revisionCard|videoLinks|tables|diagrams|askme))',
        r'\1\n\2},' .replace(r'\2', r'\2'[:-1]),
        text
    )
    # Simpler and more reliable approach:
    # Find every occurrence of:  }\n  ],\n  "<key>"
    # and replace the ] with }
    fixed = re.sub(
        r'(^\s*\})\n(\s*\])(,\n\s*"(?:commonMistakes|examTips|revisionCardBullets|videoLinks|tables|diagrams|checkpoints|askme|intro|keyPoints))',
        lambda m: m.group(1) + '\n' + m.group(2)[:-1] + '}' + m.group(3),
        text,
        flags=re.MULTILINE
    )
    return fixed

base = r'C:\Users\jason\OneDrive\Documents\GitHub\mabel-gcse\lessons'
fixed_files = []
still_broken = []

for pattern in ['biology/*.json', 'chemistry/*.json', 'physics/*.json']:
    for fp in sorted(glob.glob(os.path.join(base, pattern))):
        with open(fp, encoding='utf-8') as f:
            raw = f.read()
        try:
            json.loads(raw)
            continue  # already valid
        except json.JSONDecodeError:
            pass  # needs fixing

        # Try the fix
        fixed = raw
        # Find all "},\n  ]," patterns near section boundaries and flip ] to }
        # The issue: inside "checkpoints": { ... last_entry },\n  ],\n  "nextKey"
        # We need to change that ],  to  },
        fixed = re.sub(
            r'(\n\s*\})\n(\s*\])(,)',
            lambda m: m.group(1) + '\n' + re.sub(r'\]', '}', m.group(2)) + m.group(3),
            fixed
        )
        try:
            json.loads(fixed)
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(fixed)
            fixed_files.append(os.path.relpath(fp, base))
        except json.JSONDecodeError as e:
            still_broken.append((os.path.relpath(fp, base), str(e)))

print(f'Fixed {len(fixed_files)} files')
for f in fixed_files:
    print(' ', f)
if still_broken:
    print(f'\nStill broken ({len(still_broken)}):')
    for f, e in still_broken:
        print(f'  {f}: {e}')
