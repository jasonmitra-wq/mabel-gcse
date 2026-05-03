/* ============================================================
   ICONS.JS  — Steampunk / cartoon SVG icon set
   All viewBox 40x40. Gear teeth via stroke-dasharray on circles.
   Palette: brass #f5c842 / #e4a020, plus app accent colours.
   ============================================================ */

const Icons = (() => {

  /* ----------------------------------------------------------
     Raw SVG definitions (no width/height — added by get())
  ---------------------------------------------------------- */
  const _d = {

    /* ── REVISE — open book with spine gear (brass) ── */
    revise: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 11 L7 15.5 L7 31 L20 27 L33 31 L33 15.5 Z"
        stroke="#f5c842" stroke-width="1.8" fill="rgba(245,200,66,0.08)" stroke-linejoin="round"/>
      <line x1="20" y1="11" x2="20" y2="27" stroke="#f5c842" stroke-width="1.5"/>
      <line x1="10" y1="20" x2="18.5" y2="18" stroke="#f5c842" stroke-width="1.1" opacity="0.5"/>
      <line x1="10" y1="24" x2="18.5" y2="22" stroke="#f5c842" stroke-width="1.1" opacity="0.5"/>
      <line x1="21.5" y1="18" x2="30" y2="20" stroke="#f5c842" stroke-width="1.1" opacity="0.5"/>
      <line x1="21.5" y1="22" x2="30" y2="24" stroke="#f5c842" stroke-width="1.1" opacity="0.5"/>
      <circle cx="20" cy="10" r="4.5" stroke="#e4a020" stroke-width="4"
        stroke-dasharray="2.4 2.31" fill="rgba(228,160,32,0.22)"
        stroke-linecap="butt" transform="rotate(-15 20 10)"/>
      <circle cx="20" cy="10" r="1.7" fill="#e4a020"/>
    </svg>`,

    /* ── TEST PREP — clipboard with crosshair (blue) ── */
    test: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="22" height="23" rx="2.5"
        stroke="#4d96ff" stroke-width="1.8" fill="rgba(77,150,255,0.07)"/>
      <rect x="15" y="8" width="10" height="7" rx="2"
        stroke="#4d96ff" stroke-width="1.5" fill="rgba(77,150,255,0.14)"/>
      <line x1="12" y1="21" x2="26" y2="21" stroke="#4d96ff" stroke-width="1.2" opacity="0.55"/>
      <line x1="12" y1="25" x2="22" y2="25" stroke="#4d96ff" stroke-width="1.2" opacity="0.55"/>
      <line x1="12" y1="29" x2="24" y2="29" stroke="#4d96ff" stroke-width="1.2" opacity="0.55"/>
      <circle cx="29" cy="14" r="5" stroke="#f5c842" stroke-width="1.6" fill="none"/>
      <line x1="29" y1="10" x2="29" y2="12.2" stroke="#f5c842" stroke-width="1.5"/>
      <line x1="29" y1="15.8" x2="29" y2="18" stroke="#f5c842" stroke-width="1.5"/>
      <line x1="25" y1="14" x2="27.2" y2="14" stroke="#f5c842" stroke-width="1.5"/>
      <line x1="30.8" y1="14" x2="33" y2="14" stroke="#f5c842" stroke-width="1.5"/>
      <circle cx="29" cy="14" r="1.5" fill="#f5c842"/>
    </svg>`,

    /* ── DASHBOARD — pressure gauge (purple) ── */
    dashboard: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="22" r="14" stroke="#c77dff" stroke-width="1.8" fill="rgba(199,125,255,0.07)"/>
      <path d="M 8.7 29 A 13 13 0 0 1 31.3 29" stroke="rgba(255,107,107,0.35)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M 8.7 29 A 13 13 0 0 1 20 9" stroke="rgba(107,203,119,0.4)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <line x1="9.5" y1="16.5" x2="11.2" y2="18" stroke="#c77dff" stroke-width="1.3" opacity="0.8"/>
      <line x1="7.5" y1="22" x2="9.5" y2="22" stroke="#c77dff" stroke-width="1.3" opacity="0.8"/>
      <line x1="20" y1="9.5" x2="20" y2="11.5" stroke="#c77dff" stroke-width="1.3" opacity="0.8"/>
      <line x1="30.5" y1="16.5" x2="28.8" y2="18" stroke="#c77dff" stroke-width="1.3" opacity="0.8"/>
      <line x1="32.5" y1="22" x2="30.5" y2="22" stroke="#c77dff" stroke-width="1.3" opacity="0.8"/>
      <line x1="20" y1="22" x2="12.5" y2="14.5" stroke="#f5c842" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="20" cy="22" r="3" stroke="#f5c842" stroke-width="1.8" fill="rgba(245,200,66,0.25)"/>
      <circle cx="20" cy="22" r="1.2" fill="#f5c842"/>
      <rect x="17" y="33.5" width="6" height="2.5" rx="1" stroke="#c77dff" stroke-width="1.2" fill="rgba(199,125,255,0.15)"/>
    </svg>`,

    /* ── CARD DECK — fanned cards with gear badge (green) ── */
    cards: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="14" width="20" height="14" rx="2.5"
        stroke="#6bcb77" stroke-width="1.5" fill="rgba(107,203,119,0.05)"
        transform="rotate(-10 18 21)"/>
      <rect x="8" y="14" width="20" height="14" rx="2.5"
        stroke="#6bcb77" stroke-width="1.5" fill="rgba(107,203,119,0.05)"
        transform="rotate(5 18 21)"/>
      <rect x="8" y="14" width="20" height="14" rx="2.5"
        stroke="#6bcb77" stroke-width="2" fill="rgba(107,203,119,0.11)"/>
      <line x1="12" y1="19.5" x2="24.5" y2="19.5" stroke="#6bcb77" stroke-width="1.1" opacity="0.5"/>
      <line x1="12" y1="23" x2="21" y2="23" stroke="#6bcb77" stroke-width="1.1" opacity="0.5"/>
      <circle cx="30" cy="30" r="5.5" stroke="#f5c842" stroke-width="4.5"
        stroke-dasharray="2.9 2.96" fill="rgba(245,200,66,0.18)"
        stroke-linecap="butt" transform="rotate(-18 30 30)"/>
      <circle cx="30" cy="30" r="2.2" fill="#f5c842"/>
    </svg>`,

    /* ── CONTINUE — play arrow inside gear ring (purple) ── */
    continue: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14" stroke="#c77dff" stroke-width="5.5"
        stroke-dasharray="4.7 4.75" fill="rgba(199,125,255,0.09)"
        stroke-linecap="butt" transform="rotate(-22.5 20 20)"/>
      <circle cx="20" cy="20" r="10" stroke="#c77dff" stroke-width="1.4" fill="rgba(199,125,255,0.09)"/>
      <path d="M15.5 13.5 L28 20 L15.5 26.5 Z"
        stroke="#c77dff" stroke-width="1.5" fill="rgba(199,125,255,0.45)" stroke-linejoin="round"/>
    </svg>`,

    /* ── BIOLOGY — microscope with gear (green) ── */
    biology: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="8" y1="35" x2="32" y2="35" stroke="#6bcb77" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="20" y1="35" x2="20" y2="10" stroke="#6bcb77" stroke-width="2" stroke-linecap="round"/>
      <line x1="12" y1="24" x2="28" y2="24" stroke="#6bcb77" stroke-width="1.5"/>
      <rect x="14" y="24" width="12" height="5" rx="1.5"
        stroke="#6bcb77" stroke-width="1.5" fill="rgba(107,203,119,0.12)"/>
      <ellipse cx="20" cy="10" rx="7" ry="4.5"
        stroke="#6bcb77" stroke-width="1.8" fill="rgba(107,203,119,0.1)"/>
      <circle cx="29" cy="18" r="5" stroke="#f5c842" stroke-width="4.5"
        stroke-dasharray="2.6 2.64" fill="rgba(245,200,66,0.2)"
        stroke-linecap="butt" transform="rotate(-15 29 18)"/>
      <circle cx="29" cy="18" r="2" fill="#f5c842"/>
    </svg>`,

    /* ── INTRO — clockwork brain with central gear (purple) ── */
    intro: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 7 C12.5 7 7 12 7 18 C7 22 9 25 12.5 26.5 C12.5 29.5 14.5 32 18 32 L22 32 C25.5 32 27.5 29.5 27.5 26.5 C31 25 33 22 33 18 C33 12 27.5 7 20 7 Z"
        stroke="#c77dff" stroke-width="1.8" fill="rgba(199,125,255,0.07)"/>
      <path d="M20 8 L20 31" stroke="#c77dff" stroke-width="1" stroke-dasharray="2 2" opacity="0.35"/>
      <path d="M10 17 Q12.5 14.5 15 17 Q17.5 19.5 19.5 17"
        stroke="#c77dff" stroke-width="1.3" fill="none" opacity="0.65"/>
      <path d="M20.5 17 Q22.5 14.5 25 17 Q27.5 19.5 30 17"
        stroke="#c77dff" stroke-width="1.3" fill="none" opacity="0.65"/>
      <path d="M11 22 Q13.5 19.5 16 22"
        stroke="#c77dff" stroke-width="1.3" fill="none" opacity="0.65"/>
      <circle cx="20" cy="19.5" r="6" stroke="#f5c842" stroke-width="4.5"
        stroke-dasharray="2.4 2.31" fill="rgba(245,200,66,0.18)"
        stroke-linecap="butt" transform="rotate(-30 20 19.5)"/>
      <circle cx="20" cy="19.5" r="2.5" fill="#f5c842"/>
    </svg>`,

    /* ── EXAM / WHAT MATTERS — hexagon with lightning bolt (brass) ── */
    exam: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="20,4 33.86,12 33.86,28 20,36 6.14,28 6.14,12"
        stroke="#f5c842" stroke-width="1.8" fill="rgba(245,200,66,0.07)"/>
      <polygon points="20,8 30.4,14 30.4,26 20,32 9.6,26 9.6,14"
        stroke="#f5c842" stroke-width="0.8" fill="none" opacity="0.3"/>
      <path d="M23 11 L14 22 L21 22 L17 32 L28 19 L21 19 Z"
        stroke="#f5c842" stroke-width="1.5" fill="rgba(245,200,66,0.3)" stroke-linejoin="round"/>
    </svg>`,

    /* ── NOTES / WRITE — scroll with mechanical pen (brass+teal) ── */
    notes: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="22" height="24" rx="2"
        stroke="#f5c842" stroke-width="1.8" fill="rgba(245,200,66,0.07)"/>
      <path d="M6 12.5 Q6 8 10 8 Q14 8 14 12.5"
        stroke="#f5c842" stroke-width="1.5" fill="rgba(245,200,66,0.12)"/>
      <path d="M6 31.5 Q6 36 10 36 Q14 36 14 31.5"
        stroke="#f5c842" stroke-width="1.5" fill="rgba(245,200,66,0.12)"/>
      <line x1="10" y1="17" x2="24" y2="17" stroke="#f5c842" stroke-width="1.1" opacity="0.45"/>
      <line x1="10" y1="21" x2="24" y2="21" stroke="#f5c842" stroke-width="1.1" opacity="0.45"/>
      <line x1="10" y1="25" x2="20" y2="25" stroke="#f5c842" stroke-width="1.1" opacity="0.45"/>
      <path d="M28 9 L35 16 L31 34 L27.5 34 Z"
        stroke="#4ecdc4" stroke-width="1.5" fill="rgba(78,205,196,0.13)" stroke-linejoin="round"/>
      <line x1="28" y1="9" x2="32" y2="13" stroke="#4ecdc4" stroke-width="1.2" opacity="0.7"/>
      <path d="M27.5 34 L29.25 36.5 L31 34"
        stroke="#4ecdc4" stroke-width="1.3" fill="rgba(78,205,196,0.3)"/>
    </svg>`,

    /* ── KEY — gear head + shaft + teeth (teal) ── */
    key: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="18" r="8" stroke="#4ecdc4" stroke-width="5"
        stroke-dasharray="3.14 3.21" fill="rgba(78,205,196,0.12)"
        stroke-linecap="butt" transform="rotate(-22.5 13 18)"/>
      <circle cx="13" cy="18" r="3.5" stroke="#4ecdc4" stroke-width="1.5" fill="rgba(78,205,196,0.2)"/>
      <circle cx="13" cy="18" r="1.5" fill="#4ecdc4"/>
      <rect x="19.5" y="16.5" width="16" height="3" rx="1"
        stroke="#4ecdc4" stroke-width="1.3" fill="rgba(78,205,196,0.1)"/>
      <rect x="24" y="19.5" width="3" height="4" rx="0.7"
        stroke="#4ecdc4" stroke-width="1.2" fill="rgba(78,205,196,0.15)"/>
      <rect x="30" y="19.5" width="3" height="3" rx="0.7"
        stroke="#4ecdc4" stroke-width="1.2" fill="rgba(78,205,196,0.15)"/>
    </svg>`,

    /* ── HOME — gothic arch door with roof gear (teal) ── */
    home: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 38 L5 20 L20 7 L35 20 L35 38 Z"
        stroke="#4ecdc4" stroke-width="1.8" fill="rgba(78,205,196,0.07)" stroke-linejoin="round"/>
      <circle cx="20" cy="7" r="5" stroke="#f5c842" stroke-width="4.5"
        stroke-dasharray="2.6 2.64" fill="rgba(245,200,66,0.2)"
        stroke-linecap="butt" transform="rotate(-18 20 7)"/>
      <circle cx="20" cy="7" r="2" fill="#f5c842"/>
      <path d="M14 38 L14 27 Q14 21.5 20 21.5 Q26 21.5 26 27 L26 38"
        stroke="#4ecdc4" stroke-width="1.5" fill="rgba(78,205,196,0.13)"/>
      <rect x="27" y="23" width="5" height="5" rx="0.8"
        stroke="#4ecdc4" stroke-width="1.2" fill="rgba(78,205,196,0.15)"/>
      <line x1="29.5" y1="23" x2="29.5" y2="28" stroke="#4ecdc4" stroke-width="0.9" opacity="0.5"/>
      <line x1="27" y1="25.5" x2="32" y2="25.5" stroke="#4ecdc4" stroke-width="0.9" opacity="0.5"/>
    </svg>`,

    /* ── CHECK — gear ring with tick inside (green) ── */
    check: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14" stroke="#6bcb77" stroke-width="5.5"
        stroke-dasharray="4.7 4.75" fill="rgba(107,203,119,0.1)"
        stroke-linecap="butt" transform="rotate(-22.5 20 20)"/>
      <circle cx="20" cy="20" r="9.5" stroke="#6bcb77" stroke-width="1.3" fill="rgba(107,203,119,0.09)"/>
      <polyline points="12.5,20.5 17.5,25.5 27.5,13.5"
        stroke="#6bcb77" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`,

    /* ── CROSS — gear ring with X inside, cracked (red) ── */
    cross: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14" stroke="#ff6b6b" stroke-width="5.5"
        stroke-dasharray="4.7 4.75" fill="rgba(255,107,107,0.08)"
        stroke-linecap="butt" transform="rotate(-22.5 20 20)"/>
      <circle cx="20" cy="20" r="9.5" stroke="#ff6b6b" stroke-width="1.3" fill="rgba(255,107,107,0.07)"/>
      <path d="M19 9.5 L20 14.5 L18 18 L21 21.5 L19.5 30.5"
        stroke="#ff6b6b" stroke-width="1" stroke-dasharray="2 1.5" opacity="0.4"/>
      <line x1="13.5" y1="13.5" x2="26.5" y2="26.5"
        stroke="#ff6b6b" stroke-width="2.8" stroke-linecap="round"/>
      <line x1="26.5" y1="13.5" x2="13.5" y2="26.5"
        stroke="#ff6b6b" stroke-width="2.8" stroke-linecap="round"/>
    </svg>`,

    /* ── WARNING — hexagonal badge with exclamation (orange) ── */
    warning: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="20,4 34.5,13 34.5,27 20,36 5.5,27 5.5,13"
        stroke="#ff9f43" stroke-width="1.8" fill="rgba(255,159,67,0.07)"/>
      <polygon points="20,8.5 31,15 31,25 20,31.5 9,25 9,15"
        stroke="#ff9f43" stroke-width="0.9" fill="none" opacity="0.3"/>
      <line x1="20" y1="14" x2="20" y2="24"
        stroke="#ff9f43" stroke-width="3" stroke-linecap="round"/>
      <circle cx="20" cy="28.5" r="1.8" fill="#ff9f43"/>
    </svg>`,

    /* ── TIP — Edison bulb with filament and rays (brass) ── */
    tip: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5 C12.5 5 7.5 10 7.5 17 C7.5 22.5 10.5 26.5 15 28.5 L15 31.5 L25 31.5 L25 28.5 C29.5 26.5 32.5 22.5 32.5 17 C32.5 10 27.5 5 20 5 Z"
        stroke="#f5c842" stroke-width="1.8" fill="rgba(245,200,66,0.08)"/>
      <path d="M15.5 20.5 L17.5 15.5 L20 19.5 L22.5 15.5 L24.5 20.5"
        stroke="#f5c842" stroke-width="1.5" fill="none" opacity="0.75"/>
      <line x1="15" y1="31.5" x2="25" y2="31.5" stroke="#f5c842" stroke-width="1.8"/>
      <line x1="15.5" y1="34" x2="24.5" y2="34" stroke="#f5c842" stroke-width="1.5" opacity="0.65"/>
      <line x1="17" y1="36.5" x2="23" y2="36.5" stroke="#f5c842" stroke-width="1.2" opacity="0.4"/>
      <path d="M12.5 12 Q15 9.5 18.5 9.5" stroke="#f5c842" stroke-width="1.2" opacity="0.3"/>
      <line x1="3.5" y1="17" x2="6" y2="17" stroke="#f5c842" stroke-width="1.8" opacity="0.45" stroke-linecap="round"/>
      <line x1="4.5" y1="10.5" x2="6.8" y2="12.5" stroke="#f5c842" stroke-width="1.5" opacity="0.45" stroke-linecap="round"/>
      <line x1="36.5" y1="17" x2="34" y2="17" stroke="#f5c842" stroke-width="1.8" opacity="0.45" stroke-linecap="round"/>
      <line x1="35.5" y1="10.5" x2="33.2" y2="12.5" stroke="#f5c842" stroke-width="1.5" opacity="0.45" stroke-linecap="round"/>
    </svg>`,

  };

  /* ----------------------------------------------------------
     Public API
     get(name, size)  → SVG string with width/height set
     inline(name, size) → same but display:inline-block
  ---------------------------------------------------------- */
  function get(name, size = 40) {
    const svg = _d[name];
    if (!svg) return '';
    return svg.replace(
      '<svg ',
      `<svg width="${size}" height="${size}" style="display:block;flex-shrink:0" `
    );
  }

  function inline(name, size = 22) {
    const svg = _d[name];
    if (!svg) return '';
    return svg.replace(
      '<svg ',
      `<svg width="${size}" height="${size}" style="display:inline-block;vertical-align:-${Math.round(size*0.2)}px;flex-shrink:0" `
    );
  }

  return { get, inline };
})();
