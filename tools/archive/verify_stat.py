import re, collections

with open('js/maths-questions.js', encoding='utf-8') as f:
    content = f.read()

subtopics = ['stat-averages','stat-charts','stat-scatter','stat-cumulative','stat-boxplots','stat-sampling']

block_pattern = re.compile(
    r'(\{[^{}]*?subtopic:\s*[\'\"](stat-averages|stat-charts|stat-scatter|stat-cumulative|stat-boxplots|stat-sampling)[\'\"](.*?)auditStatus:[^}]+\})',
    re.DOTALL
)

counts = {s: collections.Counter() for s in subtopics}
ids = {s: [] for s in subtopics}

for m in block_pattern.finditer(content):
    block = m.group(1)
    sub = m.group(2)
    band_m = re.search(r"band:\s*['\"]([ABC])['\"]", block)
    id_m = re.search(r"id:\s*['\"]([^'\"]+)['\"]", block)
    if band_m:
        counts[sub][band_m.group(1)] += 1
    if id_m:
        ids[sub].append(id_m.group(1))

print('=' * 60)
print('STATISTICS QUESTION BANK VERIFICATION')
print('=' * 60)
all_ok = True
for s in subtopics:
    a, b, c = counts[s]['A'], counts[s]['B'], counts[s]['C']
    total = a + b + c
    ok = (a == 5 and b == 6 and c == 4)
    status = 'OK' if ok else 'XX'
    print('')
    print('%s %s' % (status, s))
    print('  A:%d/5  B:%d/6  C:%d/4  Total:%d/15  %s' % (a, b, c, total, 'PASS' if ok else 'FAIL'))
    if ids[s]:
        print('  IDs: %s' % ', '.join(ids[s]))
    if not ok:
        all_ok = False

print('')
print('=' * 60)
if all_ok:
    print('ALL SUBTOPICS AT TARGET (5A / 6B / 4C = 15 each) PASS')
else:
    print('SOME SUBTOPICS NOT AT TARGET -- check above FAIL')
print('=' * 60)

# Check M6 array
m6_m = re.search(r"M6:\s*\[[^\]]+\]", content)
if m6_m:
    print('')
    print('M6 array: %s' % m6_m.group(0))
