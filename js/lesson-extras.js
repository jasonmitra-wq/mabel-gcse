/* ============================================================
   LESSON-EXTRAS.JS — the v3.1 lesson pieces (brief
   docs/briefs/2026-10-19-pilot-feedback-v3-1.md, step 1), shared by the
   slides (js/lessons.js) and the AI lesson (js/teach.js). Browser only.

   pictureHtml / labelChips — a picture of a sequence; its labels as
                              tappable glossary words
   workedEl    — a worked example revealed step by step, then "Try another"
   practiceEl  — "Try another": a fresh question from js/practice/, her
                 answer checked in code, a wrong one shown step by step
   questionEl  — a multiple-choice or generator question (mixed, quiz,
                 recall, readiness), marked in code
   ownWordsEl  — her line in her own words, then a self-check list
   chatCard    — a worked example or a widget under a tutor message
   ============================================================ */
const LessonExtras = (() => {
  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const css = `
    .lx-labels { display:flex; flex-wrap:wrap; gap:0.35rem; margin:0.45rem 0.2rem 0; }
    .lx-label { font-size:0.8rem; padding:0.15rem 0.55rem; border-radius:999px; border:1px solid var(--border2);
      background:transparent; color:var(--teal); cursor:pointer; font-family:inherit; }
    .lx-card { background:var(--s2); border:1px solid var(--border2); border-radius:12px; padding:0.8rem 0.9rem; margin:0.6rem 0; max-width:100%; }
    .lx-title { font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--amber); margin-bottom:0.4rem; }
    .lx-card ol { margin:0.4rem 0; padding-left:1.2rem; line-height:1.6; }
    .lx-card .btn { font-size:0.85rem; padding:0.4rem 0.8rem; margin:0.3rem 0.4rem 0 0; }
    .lx-ans { display:flex; gap:0.4rem; margin-top:0.45rem; }
    .lx-ans input { flex:1; min-width:0; font:inherit; padding:0.4rem 0.6rem; border-radius:8px; border:1px solid var(--border2); background:var(--bg); color:var(--text); }
    .lx-fb { margin-top:0.45rem; line-height:1.55; }
    .lx-fb.ok { color:var(--teal); } .lx-fb.no { color:#e8705a; }
    .lx-opts { display:flex; flex-direction:column; gap:0.4rem; margin-top:0.45rem; }
    .lx-opts button { text-align:left; }
    .lx-opts button.right { border-color:var(--teal); color:var(--teal); }
    .lx-opts button.wrong { border-color:#e8705a; color:#e8705a; }
    .lx-check li { list-style:none; margin:0.25rem 0; }
    .lx-card textarea { width:100%; box-sizing:border-box; font:inherit; padding:0.45rem 0.6rem; border-radius:8px; border:1px solid var(--border2); background:var(--bg); color:var(--text); }`;
  function _style() {
    if (document.getElementById('lxStyles')) return;
    const el = document.createElement('style');
    el.id = 'lxStyles';
    el.textContent = css;
    document.head.appendChild(el);
  }
  function _el(html) { _style(); const d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstElementChild; }

  function labelChips(labels) {
    const row = _el(`<div class="lx-labels"></div>`);
    (labels || []).forEach(l => {
      const b = document.createElement('button');
      b.className = 'lx-label';
      b.textContent = l;
      b.onclick = e => { e.stopPropagation(); if (typeof Glossary !== 'undefined' && Glossary.showTerm) Glossary.showTerm(l); };
      row.appendChild(b);
    });
    return row;
  }
  function pictureEl(subject, pic, enlarge) {
    const fig = _el(`<figure class="lx-picture" style="margin:0.6rem 0">
      <img src="diagrams/${esc(subject)}/${esc(pic.diagram)}.svg" alt="${esc(pic.caption || pic.diagram)}" style="display:block;width:100%;height:auto;border-radius:8px;cursor:zoom-in"
        onerror="this.closest('figure').style.display='none'">
      ${pic.caption ? `<figcaption style="font-size:0.85rem;color:var(--muted);font-style:italic;margin:0.35rem 0.2rem 0">${esc(pic.caption)}</figcaption>` : ''}</figure>`);
    if (enlarge) fig.querySelector('img').onclick = () => enlarge(pic);
    if ((pic.labels || []).length) fig.appendChild(labelChips(pic.labels));
    return fig;
  }

  // "Try another": a fresh question each time, marked in code; a wrong answer
  // is shown one step at a time, then another is offered.
  function practiceEl(eq) {
    if (typeof Practice === 'undefined' || !Practice.has(eq)) return null;
    const box = _el(`<div class="lx-practice"></div>`);
    function ask() {
      const q = Practice.make(eq);
      box.innerHTML = `<div class="lx-title" style="margin-top:0.6rem">Your turn</div><p style="margin:0">${esc(q.question)}</p>
        <div class="lx-ans"><input inputmode="decimal" placeholder="Your answer (${esc(q.answer.unit)})"><button class="btn pri">Check</button></div>
        <div class="lx-fb"></div>`;
      const input = box.querySelector('input'), fb = box.querySelector('.lx-fb');
      const check = () => {
        const r = Practice.check(q, input.value);
        if (!r.given) { fb.className = 'lx-fb no'; fb.textContent = 'Type a number.'; return; }
        input.disabled = true; box.querySelector('.lx-ans .btn').remove();
        const ans = `${Practice.fmt(q.answer.value)} ${q.answer.unit}`;
        if (typeof Record !== 'undefined') Record.answer({ where: `try another ${eq}`, right: r.ok, text: input.value });
        if (r.ok) { fb.className = 'lx-fb ok'; fb.innerHTML = `Yes, that's right: ${esc(ans)}.`; another(); return; }
        fb.className = 'lx-fb no';
        fb.innerHTML = `Not quite. Here is how it goes:<ol></ol>`;
        const ol = fb.querySelector('ol');
        let k = 0;
        const next = _el(`<button class="btn">Show the next step</button>`);
        const step = () => {
          const li = document.createElement('li'); li.textContent = q.steps[k++].text; ol.appendChild(li);
          if (k >= q.steps.length) { next.remove(); another(); }
        };
        next.onclick = step;
        fb.appendChild(next);
        step();
      };
      box.querySelector('.lx-ans .btn').onclick = check;
      input.onkeydown = e => { if (e.key === 'Enter') check(); };
    }
    function another() {
      const b = _el(`<button class="btn">Try another</button>`);
      b.onclick = ask;
      box.appendChild(b);
    }
    const start = _el(`<button class="btn">Try another</button>`);
    start.onclick = ask;
    box.appendChild(start);
    return box;
  }

  function workedEl(x, withPractice = true) {
    const card = _el(`<div class="lx-card"><div class="lx-title">Worked example</div><p style="margin:0">${x.question}</p><ol></ol></div>`);
    const ol = card.querySelector('ol');
    const steps = (x.steps || []).map(s => (typeof s === 'string' ? s : s.text));
    let k = 0;
    const btn = _el(`<button class="btn">Show the first step</button>`);
    btn.onclick = () => {
      const li = document.createElement('li'); li.innerHTML = steps[k++]; ol.appendChild(li);
      if (k >= steps.length) btn.remove(); else btn.textContent = 'Show the next step';
    };
    card.appendChild(btn);
    if (withPractice && x.equation) { const p = practiceEl(x.equation); if (p) card.appendChild(p); }
    return card;
  }

  // One question, marked in code. onDone(right) after she answers.
  function questionEl(q, label, onDone) {
    if (q.generator) {
      if (typeof Practice === 'undefined' || !Practice.has(q.generator)) return null;
      const g = Practice.make(q.generator);
      const card = _el(`<div class="lx-card"><div class="lx-title">${esc(label)}</div><p style="margin:0">${esc(g.question)}</p>
        <div class="lx-ans"><input inputmode="decimal" placeholder="Your answer (${esc(g.answer.unit)})"><button class="btn pri">Check</button></div><div class="lx-fb"></div></div>`);
      const input = card.querySelector('input'), fb = card.querySelector('.lx-fb'), b = card.querySelector('.lx-ans .btn');
      const check = () => {
        const r = Practice.check(g, input.value);
        if (!r.given) { fb.className = 'lx-fb no'; fb.textContent = 'Type a number.'; return; }
        input.disabled = true; b.remove();
        const work = (g.steps.find(s => /Put the numbers in/.test(s.text)) || g.steps[g.steps.length - 1]).text;
        fb.className = `lx-fb ${r.ok ? 'ok' : 'no'}`;
        fb.textContent = r.ok ? `Yes, that's right: ${Practice.fmt(g.answer.value)} ${g.answer.unit}.` : `Not quite: it's ${Practice.fmt(g.answer.value)} ${g.answer.unit}. ${work}`;
        if (typeof Record !== 'undefined') Record.answer({ where: label, right: r.ok, text: input.value });
        if (onDone) onDone(r.ok);
      };
      b.onclick = check;
      input.onkeydown = e => { if (e.key === 'Enter') check(); };
      return card;
    }
    const card = _el(`<div class="lx-card"><div class="lx-title">${esc(label)}</div><p style="margin:0">${q.question}</p><div class="lx-opts"></div><div class="lx-fb"></div></div>`);
    const opts = card.querySelector('.lx-opts'), fb = card.querySelector('.lx-fb');
    // A fixed shuffle, so the answer is not always first.
    let h = 0; for (const ch of String(q.question)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    const order = q.options.map((o, k) => k);
    for (let k = order.length - 1; k > 0; k--) { h = (h * 1103515245 + 12345) >>> 0; const r = h % (k + 1); [order[k], order[r]] = [order[r], order[k]]; }
    order.forEach(k => {
      const b = _el(`<button class="btn">${q.options[k]}</button>`);
      b.onclick = () => {
        opts.querySelectorAll('button').forEach(x => { x.disabled = true; });
        const right = k === q.correct;
        b.classList.add(right ? 'right' : 'wrong');
        if (!right) opts.children[order.indexOf(q.correct)].classList.add('right');
        fb.className = `lx-fb ${right ? 'ok' : 'no'}`;
        fb.innerHTML = `${right ? "Yes, that's right." : `Not quite: it's "${q.options[q.correct]}".`} ${q.explain || ''}`;
        if (typeof Record !== 'undefined') Record.answer({ where: label, right, text: String(q.options[k]).replace(/<[^>]+>/g, '') });
        if (onDone) onDone(right);
      };
      opts.appendChild(b);
    });
    return card;
  }

  // Her line in her own words, then the points it should include, to tick.
  function ownWordsEl(ow) {
    const card = _el(`<div class="lx-card"><div class="lx-title">In your own words</div><p style="margin:0 0 0.4rem">${esc(ow.prompt)}</p>
      <textarea rows="2" placeholder="One line…"></textarea><button class="btn pri">Check my line</button><div class="lx-fb"></div></div>`);
    card.querySelector('.btn').onclick = () => {
      card.querySelector('.btn').remove();
      card.querySelector('textarea').readOnly = true;
      if (typeof Record !== 'undefined') Record.answer({ where: 'own words', text: card.querySelector('textarea').value });
      const fb = card.querySelector('.lx-fb');
      fb.innerHTML = `Does your line say these? Tick the ones it does.<ul class="lx-check" style="padding:0;margin:0.3rem 0 0">${ow.points.map(p =>
        `<li><label style="display:flex;gap:0.5rem;align-items:flex-start"><input type="checkbox"><span>${esc(p)}</span></label></li>`).join('')}</ul>`;
    };
    return card;
  }

  // Under a tutor message: a worked example (step by step; "Try another" is
  // the tutor's own button), or a widget.
  function chatCard(card, subject) {
    _style();
    if (card.type === 'worked') return workedEl({ question: esc(card.question), steps: card.steps.map(esc) }, false);
    if (card.type === 'widget' && typeof WidgetView !== 'undefined') {
      const el = document.createElement('div');
      el.style.alignSelf = 'stretch';
      WidgetView.mount(el, card.id, card.options);
      if ((card.labels || []).length) el.appendChild(labelChips(card.labels));
      return el;
    }
    return null;
  }

  return { pictureEl, labelChips, practiceEl, workedEl, questionEl, ownWordsEl, chatCard, esc };
})();
