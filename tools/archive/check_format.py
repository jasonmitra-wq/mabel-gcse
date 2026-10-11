import re

with open('js/maths-questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find first ang- occurrence and show context
idx = content.find("id: 'ang-")
print("ang- context:", repr(content[idx:idx+200]))
print()

# Count all band A/B/C for geo-angles differently
# Look for lines with geo-angles topic
lines = content.split('\n')
for i, line in enumerate(lines):
    if 'geo-angles' in line or "id: 'ang-" in line:
        print(f"Line {i}: {line.strip()}")
    if i > 10000:
        break
