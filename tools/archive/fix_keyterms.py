"""Fix specific key term definitions that are scientifically wrong or imprecise."""
import json, os

FIXES = {
    # (file, term): new definition
    (r'lessons\biology\b2-enzymes.json', 'Amylase'):
        'An enzyme that catalyses the hydrolysis of starch into maltose. Produced in the salivary glands and the pancreas.',
    (r'lessons\biology\b3-antibiotics.json', 'Pathogen'):
        'An agent that causes infectious disease. Pathogens include bacteria, viruses, fungi, and protists.',
    (r'lessons\biology\b3-pathogens.json', 'Pathogen'):
        'An agent that causes infectious disease. Pathogens include bacteria, viruses, fungi, and protists.',
    (r'lessons\biology\b1-mitosis.json', 'Daughter cell'):
        'Either of the two genetically identical cells produced when a parent cell divides by mitosis. Each has the same number of chromosomes as the parent.',
    (r'lessons\biology\b6-monohybrid.json', 'Phenotype'):
        'The observable characteristics of an organism resulting from its genotype and the environment. Examples: blood group, eye colour, height.',
}

base = r'C:\Users\jason\OneDrive\Documents\GitHub\mabel-gcse'
changed = []

for (rel_path, term), new_def in FIXES.items():
    fp = os.path.join(base, rel_path)
    with open(fp, encoding='utf-8') as f:
        data = json.load(f)
    found = False
    for kp in data.get('keyPoints', []):
        for kt in kp.get('keyTerms', []):
            if kt.get('term') == term:
                kt['def'] = new_def
                found = True
    if found:
        with open(fp, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        changed.append(f'{rel_path}: {term}')
    else:
        print(f'WARNING: term not found: {term} in {rel_path}')

print(f'Fixed {len(changed)} key terms:')
for c in changed:
    print(f'  {c}')
