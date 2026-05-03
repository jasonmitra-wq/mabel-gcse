/* ============================================================
   GLOSSARY.JS — Clickable key-term definitions
   Wraps first occurrence of each known term per lesson step.
   Shows a bottom-sheet with definition, exam requirement,
   and a pointer to the lesson that covers it in depth.
   ============================================================ */

const Glossary = (() => {

  // ── Term dictionary ──────────────────────────────────────────
  // syllabusTopic: lesson ID to link to, or null if not yet built
  const _terms = {
    'protein': {
      def: 'A large molecule made of chains of amino acids. Proteins have many different roles in the body — enzymes are proteins that catalyse reactions, antibodies are proteins that fight infection, and haemoglobin is a protein that carries oxygen.',
      examRequired: true,
      syllabusTopic: 'b2-enzymes',
      syllabusName: 'Digestive enzymes — the chemical scissors'
    },
    'enzyme': {
      def: 'A biological catalyst — a protein that speeds up a chemical reaction without being used up. Each enzyme has an active site with a specific shape; only one type of molecule (its substrate) fits in.',
      examRequired: true,
      syllabusTopic: 'b2-enzymes',
      syllabusName: 'Digestive enzymes — the chemical scissors'
    },
    'organ': {
      def: 'A group of different tissues working together to carry out a specific function. Examples: the heart (pumps blood), the stomach (digests food), the leaf (photosynthesises).',
      examRequired: true,
      syllabusTopic: 'b2-organisation',
      syllabusName: 'Levels of organisation — cells to organisms'
    },
    'tissue': {
      def: 'A group of similar cells performing the same function. Examples: muscular tissue (contracts), epithelial tissue (lines surfaces), glandular tissue (makes substances).',
      examRequired: true,
      syllabusTopic: 'b2-organisation',
      syllabusName: 'Levels of organisation — cells to organisms'
    },
    'cell': {
      def: 'The basic structural and functional unit of all living organisms. Every living thing is made of one or more cells. Animal cells have a nucleus, cytoplasm, cell membrane, and mitochondria.',
      examRequired: true,
      syllabusTopic: null,
      syllabusName: 'Cell structure (B1) — coming soon'
    },
    'platelet': {
      def: 'A small cell fragment (not a full cell) with no nucleus. Platelets clump together at wound sites and trigger a chain of chemical reactions that form a blood clot — sealing the wound and stopping blood loss.',
      examRequired: true,
      syllabusTopic: 'b2-blood',
      syllabusName: 'Blood — what\'s in it and what it does'
    },
    'plasma': {
      def: 'The straw-coloured liquid part of blood — about 55% of its total volume. It carries dissolved substances including glucose, hormones, CO₂, urea, and antibodies around the body.',
      examRequired: true,
      syllabusTopic: 'b2-blood',
      syllabusName: 'Blood — what\'s in it and what it does'
    },
    'haemoglobin': {
      def: 'An iron-containing protein inside red blood cells. In the lungs, it combines with oxygen to form oxyhaemoglobin. In the tissues, it releases that oxygen. This is how red blood cells carry oxygen around the body.',
      examRequired: true,
      syllabusTopic: 'b2-blood',
      syllabusName: 'Blood — what\'s in it and what it does'
    },
    'antibody': {
      def: 'A protein produced by lymphocytes (a type of white blood cell) in response to a specific pathogen. Each antibody has a unique shape that matches one antigen, locking onto it and neutralising the threat.',
      examRequired: true,
      syllabusTopic: 'b2-blood',
      syllabusName: 'Blood — what\'s in it and what it does'
    },
    'antigen': {
      def: 'A molecule (usually on the surface of a pathogen) that triggers the immune system to produce antibodies. Each pathogen has unique antigens — your immune system learns to recognise them.',
      examRequired: true,
      syllabusTopic: null,
      syllabusName: 'Pathogens (B3) — coming soon'
    },
    'pathogen': {
      def: 'A microorganism that causes infectious disease. Pathogens include bacteria, viruses, fungi, and protists. They invade the body and reproduce, causing damage.',
      examRequired: true,
      syllabusTopic: null,
      syllabusName: 'Pathogens (B3) — coming soon'
    },
    'catalyst': {
      def: 'A substance that speeds up a chemical reaction without being used up or permanently changed. Enzymes are biological catalysts — they do the same job inside living cells.',
      examRequired: true,
      syllabusTopic: 'b2-enzymes',
      syllabusName: 'Digestive enzymes — the chemical scissors'
    },
    'substrate': {
      def: 'The specific molecule that an enzyme acts upon. The substrate fits into the active site of the enzyme — like a key fits into a lock — and is changed into products.',
      examRequired: true,
      syllabusTopic: 'b2-enzymes',
      syllabusName: 'Digestive enzymes — the chemical scissors'
    },
    'glucose': {
      def: 'A simple sugar — the main fuel source for cellular respiration. In plants it\'s made by photosynthesis. In animals it\'s absorbed from digested food and carried in the blood.',
      examRequired: true,
      syllabusTopic: null,
      syllabusName: 'Aerobic respiration (B4) — coming soon'
    },
    'diffusion': {
      def: 'The net movement of particles from an area of higher concentration to an area of lower concentration. It\'s passive — no energy needed. Oxygen diffuses from the lungs into the blood; CO₂ diffuses the other way.',
      examRequired: true,
      syllabusTopic: null,
      syllabusName: 'Diffusion (B1) — coming soon'
    },
    'osmosis': {
      def: 'The movement of water molecules through a partially permeable membrane from a dilute solution (high water potential) to a concentrated solution (low water potential). A special case of diffusion.',
      examRequired: true,
      syllabusTopic: null,
      syllabusName: 'Osmosis (B1) — coming soon'
    },
    'nucleus': {
      def: 'The control centre of the cell. It contains the cell\'s DNA (genetic material) and controls which proteins the cell makes. Note: red blood cells have no nucleus — this is a key AQA adaptation.',
      examRequired: true,
      syllabusTopic: null,
      syllabusName: 'Cell structure (B1) — coming soon'
    },
    'mitochondria': {
      def: 'Organelles in the cytoplasm where aerobic respiration takes place — releasing energy from glucose. Cells with high energy demands (muscle cells, sperm cells) have large numbers of mitochondria.',
      examRequired: true,
      syllabusTopic: null,
      syllabusName: 'Cell structure (B1) — coming soon'
    },
    'respiration': {
      def: 'The process by which cells release energy from glucose. Aerobic respiration (with oxygen) produces CO₂ and water. Anaerobic respiration (without oxygen) produces lactic acid in muscles, or ethanol and CO₂ in yeast.',
      examRequired: true,
      syllabusTopic: null,
      syllabusName: 'Aerobic respiration (B4) — coming soon'
    },
    'photosynthesis': {
      def: 'The process by which plants use light energy to convert CO₂ and water into glucose and oxygen. Equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Takes place in chloroplasts.',
      examRequired: true,
      syllabusTopic: null,
      syllabusName: 'Photosynthesis (B4) — coming soon'
    },
    'hormone': {
      def: 'A chemical messenger made by a gland and carried in the blood to a target organ, where it causes a specific response. Examples: insulin controls blood glucose; adrenaline prepares the body for action.',
      examRequired: true,
      syllabusTopic: null,
      syllabusName: 'Hormones (B5) — coming soon'
    },
    'bile': {
      def: 'A digestive fluid produced by the liver and stored in the gall bladder. Bile emulsifies fats — breaking large fat globules into tiny droplets. This increases the surface area so lipase can digest fats faster.',
      examRequired: true,
      syllabusTopic: 'b2-digestive-system',
      syllabusName: 'The digestive system — breaking food down'
    },
    'phagocytosis': {
      def: 'The process by which phagocytes (a type of white blood cell) engulf and destroy pathogens. The phagocyte wraps around the pathogen, takes it inside, and breaks it down with digestive enzymes.',
      examRequired: true,
      syllabusTopic: 'b2-blood',
      syllabusName: 'Blood — what\'s in it and what it does'
    },
    'urea': {
      def: 'A waste product made in the liver when excess amino acids are broken down (deamination). Urea is dissolved in plasma and transported to the kidneys, which filter it out and excrete it in urine.',
      examRequired: true,
      syllabusTopic: null,
      syllabusName: 'Kidneys (B5) — coming soon'
    },
    'villi': {
      def: 'Tiny finger-like folds covering the inner wall of the small intestine. They massively increase the surface area for absorbing digested food molecules into the blood. Each villus has a network of capillaries and a lacteal inside.',
      examRequired: true,
      syllabusTopic: 'b2-digestive-system',
      syllabusName: 'The digestive system — breaking food down'
    },
    'chloroplast': {
      def: 'An organelle found in plant cells (not animal cells) where photosynthesis takes place. Contains a green pigment called chlorophyll that absorbs light energy.',
      examRequired: true,
      syllabusTopic: null,
      syllabusName: 'Cell structure (B1) — coming soon'
    },
    'active transport': {
      def: 'The movement of substances from a low concentration to a high concentration — against the concentration gradient. This requires energy from respiration. Example: root hair cells absorbing mineral ions from the soil.',
      examRequired: true,
      syllabusTopic: null,
      syllabusName: 'Active transport (B1) — coming soon'
    },
    'amino acid': {
      def: 'The building blocks (monomers) of proteins. There are 20 different amino acids. The sequence of amino acids in a chain determines the shape and function of the protein.',
      examRequired: true,
      syllabusTopic: 'b2-enzymes',
      syllabusName: 'Digestive enzymes — the chemical scissors'
    },
    'starch': {
      def: 'A large carbohydrate molecule made of many glucose units joined together. Found in foods like bread and potatoes. Broken down by amylase into maltose, then further into glucose.',
      examRequired: true,
      syllabusTopic: 'b2-enzymes',
      syllabusName: 'Digestive enzymes — the chemical scissors'
    },
    'artery': {
      def: 'A blood vessel that carries blood AWAY from the heart. Arteries have thick, elastic, muscular walls to withstand high pressure. They have a narrow lumen. Remember: A = Away.',
      examRequired: true,
      syllabusTopic: 'b2-heart',
      syllabusName: 'The heart & blood vessels'
    },
    'vein': {
      def: 'A blood vessel that carries blood TOWARDS the heart under low pressure. Veins have thin walls, a wide lumen, and valves to prevent backflow.',
      examRequired: true,
      syllabusTopic: 'b2-heart',
      syllabusName: 'The heart & blood vessels'
    },
    'capillary': {
      def: 'The smallest blood vessel — walls just one cell thick. This allows rapid diffusion of oxygen, glucose, CO₂ and urea between the blood and surrounding cells. Capillaries connect arteries to veins.',
      examRequired: true,
      syllabusTopic: 'b2-heart',
      syllabusName: 'The heart & blood vessels'
    },
    'valve': {
      def: 'A flap of tissue in the heart or a vein that prevents blood flowing backwards. Heart valves include the tricuspid (right AV), bicuspid (left AV), and semilunar valves. Faulty valves cause heart murmurs.',
      examRequired: true,
      syllabusTopic: 'b2-heart',
      syllabusName: 'The heart & blood vessels'
    },
    'ventricle': {
      def: 'The lower pumping chambers of the heart. The right ventricle pumps deoxygenated blood to the lungs. The left ventricle pumps oxygenated blood to the body — it has a thicker wall because it pumps further.',
      examRequired: true,
      syllabusTopic: 'b2-heart',
      syllabusName: 'The heart & blood vessels'
    },
    'atrium': {
      def: 'An upper receiving chamber of the heart. The right atrium receives deoxygenated blood from the body (via the vena cava). The left atrium receives oxygenated blood from the lungs (via the pulmonary vein).',
      examRequired: true,
      syllabusTopic: 'b2-heart',
      syllabusName: 'The heart & blood vessels'
    },
    'peristalsis': {
      def: 'Wave-like contractions of circular muscles in the walls of the oesophagus (and digestive tract) that push food along. No enzymes involved — this is a physical, mechanical process.',
      examRequired: true,
      syllabusTopic: 'b2-digestive-system',
      syllabusName: 'The digestive system — breaking food down'
    },
    'emulsification': {
      def: 'The process by which bile breaks large fat droplets into smaller ones — increasing the surface area for lipase to work on. This is a physical change, not a chemical reaction, which is why bile is NOT classified as an enzyme.',
      examRequired: true,
      syllabusTopic: 'b2-digestive-system',
      syllabusName: 'The digestive system — breaking food down'
    },
    'absorption': {
      def: 'The movement of digested food molecules from the small intestine into the bloodstream or lymph. Glucose and amino acids pass into blood capillaries; fatty acids and glycerol pass into lacteals.',
      examRequired: true,
      syllabusTopic: 'b2-digestive-system',
      syllabusName: 'The digestive system — breaking food down'
    }
  };

  // ── Build sorted term list (longest first, to avoid partial matches) ──
  const _termKeys = Object.keys(_terms).sort((a, b) => b.length - a.length);
  const _regex = new RegExp(
    `\\b(${_termKeys.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`,
    'gi'
  );

  // ── Markup a rendered container ──────────────────────────────
  // Wraps the FIRST occurrence of each known term in the container.
  // Skips text inside buttons, links, headings, and existing key-term spans.
  function markupContainer(container) {
    const seen = new Set();
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const tag = node.parentElement?.tagName?.toUpperCase();
        const cls = node.parentElement?.getAttribute?.('class') || '';
        if (['BUTTON', 'A', 'H1', 'H2', 'H3', 'H4', 'SCRIPT', 'STYLE'].includes(tag)) return NodeFilter.FILTER_REJECT;
        if (cls.includes('key-term') || cls.includes('checkpoint-q') || cls.includes('step-nav')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) textNodes.push(node);

    textNodes.forEach(textNode => {
      const text = textNode.textContent;
      _regex.lastIndex = 0;

      let hasNew = false;
      const parts = [];
      let last = 0;
      let m;

      while ((m = _regex.exec(text)) !== null) {
        const key = m[0].toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        hasNew = true;
        if (m.index > last) parts.push(document.createTextNode(text.slice(last, m.index)));
        const span = document.createElement('span');
        span.className = 'key-term';
        span.dataset.term = key;
        span.textContent = m[0];
        span.addEventListener('click', e => { e.stopPropagation(); show(key); });
        parts.push(span);
        last = m.index + m[0].length;
      }

      if (!hasNew) return;
      if (last < text.length) parts.push(document.createTextNode(text.slice(last)));
      const frag = document.createDocumentFragment();
      parts.forEach(p => frag.appendChild(p));
      textNode.parentNode.replaceChild(frag, textNode);
    });
  }

  // ── Show the bottom sheet ────────────────────────────────────
  function show(termKey) {
    const key   = termKey.toLowerCase();
    const entry = _terms[key];
    if (!entry) return;

    const examBadge = entry.examRequired
      ? `<span class="glossary-exam-badge exam">✓ AQA definition — you need to know this</span>`
      : `<span class="glossary-exam-badge info">ℹ Good to know — not a named definition</span>`;

    const syllabusLink = entry.syllabusTopic
      ? `<button class="btn" style="margin-top:0.5rem;width:100%;justify-content:flex-start;gap:0.5rem;font-size:0.85rem"
           onclick="Glossary.hide();Lessons.open('${entry.syllabusTopic}','${entry.syllabusName}','B2')">
           📖 Open: ${entry.syllabusName} →
         </button>`
      : `<p style="font-size:0.83rem;color:var(--muted);margin-top:0.5rem">📍 Covered in: ${entry.syllabusName}</p>`;

    document.getElementById('glossaryTerm').textContent = termKey.charAt(0).toUpperCase() + termKey.slice(1);
    document.getElementById('glossaryBody').innerHTML = `
      ${examBadge}
      <p style="font-size:0.95rem;line-height:1.7;margin:0.75rem 0 0.5rem">${entry.def}</p>
      ${syllabusLink}`;

    document.getElementById('glossarySheet').classList.add('open');
    document.getElementById('glossaryBackdrop').classList.add('open');
  }

  function hide() {
    document.getElementById('glossarySheet').classList.remove('open');
    document.getElementById('glossaryBackdrop').classList.remove('open');
  }

  function lookup(key) { return _terms[key.toLowerCase()] || null; }

  return { markupContainer, show, hide, lookup };

})();
