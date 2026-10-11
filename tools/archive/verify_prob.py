import re, collections

with open('js/maths-questions.js', encoding='utf-8') as f:
    content = f.read()

subtopics = ['prob-basic', 'prob-combined', 'prob-tree-diagrams', 'prob-venn', 'prob-conditional']

# Extract all probability question blocks
pattern = re.compile(
    r'\{[^{}]*?(?:sub)?topic:\s*[\'"](' + '|'.join(subtopics) + r')[\'"][^{}]*?band:\s*[\'"](A|B|C)[\'"][^{}]*?\}',
    re.DOTALL
)

counts = {s: collections.Counter() for s in subtopics}
ids = {s: [] for s in subtopics}

# Also extract IDs
id_pattern = re.compile(r'id:\s*[\'"]([^\'"]+)[\'"]')

# Find all question objects with subtopic in probability
block_pattern = re.compile(
    r'(\{[^{}]*?(?:sub)?topic:\s*[\'"](prob-basic|prob-combined|prob-tree-diagrams|prob-venn|prob-conditional)[\'"].*?auditStatus:[^}]+\})',
    re.DOTALL
)

for m in block_pattern.finditer(content):
    block = m.group(1)
    sub = m.group(2)
    band_m = re.search(r"band:\s*['\"]([ABC])['\"]", block)
    id_m = re.search(r"id:\s*['\"]([^'\"]+)['\"]", block)
    if band_m:
        counts[sub][band_m.group(1)] += 1
    if id_m:
        ids[sub].append(id_m.group(1))

print("=" * 60)
print("PROBABILITY QUESTION BANK VERIFICATION")
print("=" * 60)
all_ok = True
for s in subtopics:
    a, b, c = counts[s]['A'], counts[s]['B'], counts[s]['C']
    total = a + b + c
    ok = (a == 5 and b == 6 and c == 4)
    status = "OK" if ok else "XX"
    print(f"\n{status} {s}")
    print(f"  A:{a}/5  B:{b}/6  C:{c}/4  Total:{total}/15  {'PASS' if ok else 'FAIL'}")
    if ids[s]:
        print(f"  IDs: {', '.join(ids[s])}")
    if not ok:
        all_ok = False

print()
print("=" * 60)
if all_ok:
    print("ALL SUBTOPICS AT TARGET (5A / 6B / 4C = 15 each) PASS")
else:
    print("SOME SUBTOPICS NOT AT TARGET -- check above FAIL")
print("=" * 60)

# Also check M5 array
if "'prob-conditional'" in content and "M5:" in content:
    m5_m = re.search(r"M5:\s*\[[^\]]+\]", content)
    if m5_m:
        print(f"\nM5 array: {m5_m.group(0)}")
