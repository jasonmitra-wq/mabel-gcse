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

for s in subtopics:
    a, b, c = counts[s]['A'], counts[s]['B'], counts[s]['C']
    print('%s: A=%d B=%d C=%d Total=%d' % (s, a, b, c, a+b+c))
    if ids[s]:
        print('  IDs: %s' % ', '.join(ids[s]))
