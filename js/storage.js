/* ============================================================
   STORAGE.JS — All persistence via localStorage with fallback
   ============================================================ */

const Store = (() => {
  const PREFIX = 'mabel_';

  function get(key) {
    try {
      const v = localStorage.getItem(PREFIX + key);
      return v ? JSON.parse(v) : null;
    } catch(e) { return null; }
  }

  function set(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
      return true;
    } catch(e) { return false; }
  }

  function remove(key) {
    try { localStorage.removeItem(PREFIX + key); return true; }
    catch(e) { return false; }
  }

  // ── Progress ──────────────────────────────────────────────
  function getProgress() {
    return get('progress') || {
      covered: {},       // { topicId: true }
      testScores: [],    // { topic, score, total, pct, date }
      learnerProfile: { liked: [], disliked: [], summary: '' },
      lastPosition: null,
      savedAt: null,
    };
  }

  function saveProgress(data) {
    data.savedAt = new Date().toISOString();
    set('progress', data);
  }

  function markCovered(subtopicId) {
    const p = getProgress();
    p.covered[subtopicId] = true;
    saveProgress(p);
  }

  function addScore(topicName, score, total) {
    const p = getProgress();
    const pct = Math.round((score / total) * 100);
    p.testScores.push({ topic: topicName, score, total, pct, date: new Date().toISOString() });
    // Keep last 50
    if (p.testScores.length > 50) p.testScores = p.testScores.slice(-50);
    saveProgress(p);
  }

  function setLastPosition(pos) {
    const p = getProgress();
    p.lastPosition = pos;
    saveProgress(p);
  }

  function getLearnerProfile() {
    return getProgress().learnerProfile;
  }

  function updateLearnerProfile(profile) {
    const p = getProgress();
    p.learnerProfile = profile;
    saveProgress(p);
  }

  function clearAll() {
    const keys = Object.keys(localStorage).filter(k => k.startsWith(PREFIX));
    keys.forEach(k => localStorage.removeItem(k));
  }

  // ── Mabel's personal profile (Silver + skating) ──────────
  function getMabelProfile() {
    return get('mabel_profile') || {
      silver: {
        colour:    null,   // e.g. "grey"
        breed:     null,
        habits:    [],     // e.g. ["sits on homework", "knocks pens off desk"]
        mood:      null,   // e.g. "grumpy", "affectionate"
      },
      skating: {
        monthsIn:  6,      // confirmed from earlier session
        hasLessons: true,  // confirmed
        rink:      null,
        currentMove: null, // e.g. "axel", "sit spin"
        recentWin: null,
        level:     null,   // e.g. "NISA level 3"
        competes:  null,   // true / false
      },
      askedAbout: [],      // tracks what we've already asked so we don't repeat
    };
  }

  function saveMabelProfile(profile) {
    set('mabel_profile', profile);
  }

  function updateMabelProfile(updates) {
    const p = getMabelProfile();
    // Deep merge
    if (updates.silver)  Object.assign(p.silver,  updates.silver);
    if (updates.skating) Object.assign(p.skating, updates.skating);
    if (updates.askedAbout) p.askedAbout = [...new Set([...p.askedAbout, ...updates.askedAbout])];
    saveMabelProfile(p);
    return p;
  }

  function hasAsked(topic) {
    return getMabelProfile().askedAbout.includes(topic);
  }

  function markAsked(topic) {
    const p = getMabelProfile();
    if (!p.askedAbout.includes(topic)) {
      p.askedAbout.push(topic);
      saveMabelProfile(p);
    }
  }
  function getDeck() {
    return get('deck') || [];
  }

  function saveDeck(deck) {
    set('deck', deck);
  }

  function addCards(newCards) {
    const deck = getDeck();
    let added = 0;
    newCards.forEach(c => {
      if (!deck.some(d => d.back === c.back)) {
        deck.push(c);
        added++;
      }
    });
    saveDeck(deck);
    return added;
  }

  function updateCardStatus(cardId, difficulty) {
    const deck = getDeck();
    const i = deck.findIndex(c => c.id === cardId);
    if (i < 0) return;

    const intervals = { again: 0, hard: 1, good: 3, easy: 7 };
    const statusMap = { again: 'unseen', hard: 'learning', good: 'learning', easy: 'known' };
    const days = intervals[difficulty] ?? 0;

    deck[i].difficulty   = difficulty;
    deck[i].status       = statusMap[difficulty] || 'unseen';
    deck[i].interval     = days;
    deck[i].lastReviewed = new Date().toISOString();

    const next = new Date();
    next.setHours(0, 0, 0, 0);
    next.setDate(next.getDate() + days);
    deck[i].nextReview = next.toISOString();
    saveDeck(deck);
  }

  function clearDeck() {
    set('deck', []);
  }

  // ── Error log ─────────────────────────────────────────────
  function getErrorLog() {
    return get('errors') || {};
  }

  function logError(key, data) {
    const log = getErrorLog();
    log[key] = data;
    set('errors', log);
  }

  function clearErrorLog() {
    set('errors', {});
  }

  // ── Sessions ──────────────────────────────────────────────────
  function saveSession(data) {
    const sessions = getSessions();
    sessions.unshift(data);
    if (sessions.length > 10) sessions.length = 10;
    set('sessions', sessions);
  }

  function getSessions() {
    return get('sessions') || [];
  }

  // ── Mastery ───────────────────────────────────────────────────
  // Returns 0–100 (% of cards rated good/easy), or null if no cards saved yet.
  function getSubtopicMastery(subtopicId, deck) {
    const d = deck || getDeck();
    const cards = d.filter(c => c.id && c.id.startsWith(`card_${subtopicId}_`));
    if (!cards.length) return null;
    const good = cards.filter(c =>
      c.difficulty === 'good' || c.difficulty === 'easy' || c.status === 'known'
    ).length;
    return Math.round((good / cards.length) * 100);
  }

  // Weighted average mastery across a list of subtopicIds.
  function getTopicMastery(subtopicIds, deck) {
    const d = deck || getDeck();
    let total = 0, good = 0;
    subtopicIds.forEach(id => {
      const cards = d.filter(c => c.id && c.id.startsWith(`card_${id}_`));
      total += cards.length;
      good  += cards.filter(c =>
        c.difficulty === 'good' || c.difficulty === 'easy' || c.status === 'known'
      ).length;
    });
    return total ? Math.round((good / total) * 100) : null;
  }

  return {
    get, set, remove,
    getProgress, saveProgress, markCovered, addScore,
    setLastPosition, getLearnerProfile, updateLearnerProfile, clearAll,
    getDeck, saveDeck, addCards, updateCardStatus, clearDeck,
    getMabelProfile, saveMabelProfile, updateMabelProfile, hasAsked, markAsked,
    getErrorLog, logError, clearErrorLog,
    getSubtopicMastery, getTopicMastery,
    saveSession, getSessions,
  };
})();
