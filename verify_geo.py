import re

with open('js/maths-questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

topics = {
    'geo-angles': 'ang-',
    'geo-shapes': 'shp-',
    'geo-area-volume': 'av-',
    'geo-transformations': 'tr-',
    'geo-pythagoras': 'pyth-',
    'geo-trigonometry': 'trig-',
    'geo-circle-theorems': 'cth-',
    'geo-vectors': 'vec-',
}

for topic, prefix in topics.items():
    # Match both 'topic' and 'subtopic' field names
    pattern = r"id:\s*'" + re.escape(prefix) + r"[^']*',\s*(?:sub)?topic:\s*'" + re.escape(topic) + r"',\s*band:\s*'([ABC])'"
    matches = re.findall(pattern, content)
    a = matches.count('A')
    b = matches.count('B')
    c = matches.count('C')
    status = 'OK  ' if a==5 and b==6 and c==4 else 'FAIL'
    print(f"{status} {topic}: A={a} B={b} C={c} total={len(matches)}")
