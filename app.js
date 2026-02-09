/* ======================================
   POWERPOINT SHORTCUT MASTER — APP JS
   ====================================== */

// ===== SHORTCUT DATA =====
const SHORTCUTS = [
    { title: "Word Wrap", key: "Ctrl+7", category: "Formatting" },
    { title: "Do Not Word Wrap", key: "Ctrl+Shift+7", category: "Formatting" },
    { title: "Quick Keys", key: "Ctrl+Alt+Q", category: "Tools" },
    { title: "Toggle Shape State", key: "Ctrl+T", category: "Shapes" },
    { title: "Make Same Size", key: "Alt+Z", category: "Alignment" },
    { title: "Make Same Height", key: "Ctrl+Shift+E", category: "Alignment" },
    { title: "Make Same Width", key: "Ctrl+Alt+E", category: "Alignment" },
    { title: "Insert Textbox", key: "Alt+Q", category: "Insert" },
    { title: "Text to Autoshape", key: "Alt+Shift+Z", category: "Shapes" },
    { title: "Align and Group", key: "Alt+G", category: "Alignment" },
    { title: "Copy Position", key: "Ctrl+1", category: "Position" },
    { title: "Paste Position", key: "Ctrl+2", category: "Position" },
    { title: "Normal View", key: "Ctrl+3", category: "View" },
    { title: "Slide Sorter View", key: "Ctrl+4", category: "View" },
    { title: "Fit to Window", key: "Ctrl+5", category: "View" },
    { title: "Insert Flag", key: "Ctrl+6", category: "Insert" },
    { title: "Insert Yellow Sticky", key: "Ctrl+0", category: "Insert" },
    { title: "Insert Sticker", key: "Ctrl+Alt+S", category: "Insert" },
    { title: "Insert Legend", key: "Ctrl+Alt+L", category: "Insert" },
    { title: "Reset Fixed Elements", key: "Ctrl+Alt+R", category: "Tools" },
    { title: "Split/Join Textboxes", key: "Ctrl+Alt+J", category: "Tools" },
    { title: "Align Middle", key: "Ctrl+Alt+M", category: "Alignment" },
    { title: "Align Center", key: "Ctrl+Alt+C", category: "Alignment" },
    { title: "Align Left", key: "Ctrl+Alt+Left Arrow", category: "Alignment" },
    { title: "Align Right", key: "Ctrl+Alt+Right Arrow", category: "Alignment" },
    { title: "Align Top", key: "Ctrl+Alt+Up Arrow", category: "Alignment" },
    { title: "Align Bottom", key: "Ctrl+Alt+Down Arrow", category: "Alignment" },
    { title: "Distribute Vertically", key: "Alt+Shift+V", category: "Alignment" },
    { title: "Distribute Horizontally", key: "Alt+Shift+H", category: "Alignment" },
    { title: "Paste Unformatted Text", key: "Ctrl+Alt+T", category: "Formatting" },
    { title: "Shape to Text Box", key: "Ctrl+Shift+W", category: "Shapes" },
    { title: "Apply Default Text Format", key: "Ctrl+Space", category: "Formatting" },
    { title: "Cycle Accent Colors", key: "Alt+Shift+A", category: "Formatting" },
    { title: "Insert New Slide", key: "Ctrl+M", category: "Insert" },
    { title: "Change Font Size", key: "Ctrl+Shift+O", category: "Formatting" },
    { title: "Group", key: "Ctrl+G", category: "Alignment" },
    { title: "Ungroup", key: "Ctrl+Shift+G", category: "Alignment" },
    { title: "Pickup Style", key: "Ctrl+Shift+C", category: "Formatting" },
    { title: "Apply Style", key: "Ctrl+Shift+V", category: "Formatting" },
    { title: "Green Print", key: "Ctrl+Alt+P", category: "Print" },
    { title: "Green Print Two Slides", key: "Ctrl+Alt+2", category: "Print" },
    { title: "Green Print Four Slides", key: "Ctrl+Alt+4", category: "Print" },
    { title: "Insert Footnote", key: "Ctrl+Alt+F", category: "Insert" },
    { title: "Increase List Level", key: "Alt+Shift+Right Arrow", category: "Lists" },
    { title: "Decrease List Level", key: "Alt+Shift+Left Arrow", category: "Lists" },
    { title: "List Line Spacing", key: "Ctrl+Shift+L", category: "Lists" },
    { title: "Bring to Front", key: "Alt+Shift+]", category: "Ordering" },
    { title: "Bring Forward", key: "Alt+]", category: "Ordering" },
    { title: "Send to Back", key: "Alt+Shift+[", category: "Ordering" },
    { title: "Send Backward", key: "Alt+[", category: "Ordering" }
];

const CATEGORIES = [...new Set(SHORTCUTS.map(s => s.category))];

// ===== STATE =====
let state = {
    progress: {},     // { title: { status: 'new'|'learning'|'mastered', correctStreak: 0, lastSeen: 0 } }
    streak: 0,
    bestSpeed: 0,
    currentCard: 0,
    cardDeck: [],
    practiceIndex: 0,
    practiceQueue: [],
    practiceCorrect: 0,
    practiceWrong: 0,
    practiceAnswered: false,
    quizQuestions: [],
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: false,
    speedScore: 0,
    speedTimer: null,
    speedTimeLeft: 60,
    activeCategory: null
};

// ===== INIT =====
function init() {
    loadProgress();
    addSVGDefs();
    setupNav();
    setupDashboard();
    setupLearn();
    setupPractice();
    setupQuiz();
    setupSpeed();
    updateHeaderStats();
}

function addSVGDefs() {
    // Add gradient definition for progress ring
    const svg = document.querySelector('.progress-ring');
    if (svg) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.id = 'progressGradient';
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#6c5ce7');
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#00cec9');
        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
    }
}

// ===== PERSISTENCE =====
function loadProgress() {
    try {
        const saved = localStorage.getItem('pptx-shortcut-master');
        if (saved) {
            const data = JSON.parse(saved);
            state.progress = data.progress || {};
            state.streak = data.streak || 0;
            state.bestSpeed = data.bestSpeed || 0;
        }
    } catch (e) { /* ignore */ }
    // Ensure all shortcuts have progress entries
    SHORTCUTS.forEach(s => {
        if (!state.progress[s.title]) {
            state.progress[s.title] = { status: 'new', correctStreak: 0, lastSeen: 0 };
        }
    });
}

function saveProgress() {
    try {
        localStorage.setItem('pptx-shortcut-master', JSON.stringify({
            progress: state.progress,
            streak: state.streak,
            bestSpeed: state.bestSpeed
        }));
    } catch (e) { /* ignore */ }
}

function resetAllProgress() {
    if (confirm('Reset all progress? This cannot be undone.')) {
        state.progress = {};
        state.streak = 0;
        state.bestSpeed = 0;
        SHORTCUTS.forEach(s => {
            state.progress[s.title] = { status: 'new', correctStreak: 0, lastSeen: 0 };
        });
        saveProgress();
        setupDashboard();
        updateHeaderStats();
    }
}

// ===== HELPERS =====
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getFilteredShortcuts() {
    if (!state.activeCategory) return [...SHORTCUTS];
    return SHORTCUTS.filter(s => s.category === state.activeCategory);
}

function getMasteredCount() {
    return Object.values(state.progress).filter(p => p.status === 'mastered').length;
}

function getLearningCount() {
    return Object.values(state.progress).filter(p => p.status === 'learning').length;
}

function getNewCount() {
    return Object.values(state.progress).filter(p => p.status === 'new').length;
}

function updateHeaderStats() {
    document.getElementById('masteredCount').textContent = getMasteredCount();
    document.getElementById('streakCount').textContent = state.streak;
}

function markCorrect(title) {
    const p = state.progress[title];
    p.correctStreak++;
    p.lastSeen = Date.now();
    if (p.correctStreak >= 3) {
        p.status = 'mastered';
    } else if (p.status === 'new') {
        p.status = 'learning';
    }
    state.streak++;
    saveProgress();
    updateHeaderStats();
}

function markWrong(title) {
    const p = state.progress[title];
    p.correctStreak = 0;
    p.lastSeen = Date.now();
    if (p.status === 'new') p.status = 'learning';
    state.streak = 0;
    saveProgress();
    updateHeaderStats();
}

// ===== NAVIGATION =====
function setupNav() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const modeLaunchBtns = document.querySelectorAll('.mode-card[data-launch]');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;
            switchView(mode);
        });
    });

    modeLaunchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.launch;
            switchView(mode);
        });
    });
}

function switchView(mode) {
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-btn[data-mode="${mode}"]`);
    if (activeNav) activeNav.classList.add('active');

    // Update views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const view = document.getElementById(mode);
    if (view) view.classList.add('active');

    // Initialize mode-specific content
    if (mode === 'learn') initLearnDeck();
    if (mode === 'practice') initPractice();
    if (mode === 'quiz') initQuiz();
    if (mode === 'speed') initSpeed();
    if (mode === 'dashboard') setupDashboard();
}

// ===== DASHBOARD =====
function setupDashboard() {
    updateProgressRing();
    renderCategoryChips();
    renderShortcutTable();
    document.getElementById('resetProgress').addEventListener('click', resetAllProgress);
}

function updateProgressRing() {
    const mastered = getMasteredCount();
    const learning = getLearningCount();
    const newCount = getNewCount();
    const total = SHORTCUTS.length;
    const percent = Math.round((mastered / total) * 100);

    document.getElementById('progressPercent').textContent = percent + '%';
    document.getElementById('newCount').textContent = newCount;
    document.getElementById('learningCount').textContent = learning;
    document.getElementById('masteredCountDash').textContent = mastered;

    const ring = document.getElementById('progressRingFill');
    const circumference = 2 * Math.PI * 70; // r=70
    const offset = circumference - (mastered / total) * circumference;
    ring.style.strokeDashoffset = offset;
}

function renderCategoryChips() {
    const container = document.getElementById('categoryChips');
    container.innerHTML = '';

    const allChip = document.createElement('button');
    allChip.className = 'category-chip' + (!state.activeCategory ? ' active' : '');
    allChip.textContent = `All (${SHORTCUTS.length})`;
    allChip.addEventListener('click', () => {
        state.activeCategory = null;
        renderCategoryChips();
        renderShortcutTable();
    });
    container.appendChild(allChip);

    CATEGORIES.forEach(cat => {
        const count = SHORTCUTS.filter(s => s.category === cat).length;
        const chip = document.createElement('button');
        chip.className = 'category-chip' + (state.activeCategory === cat ? ' active' : '');
        chip.textContent = `${cat} (${count})`;
        chip.addEventListener('click', () => {
            state.activeCategory = cat;
            renderCategoryChips();
            renderShortcutTable();
        });
        container.appendChild(chip);
    });
}

function renderShortcutTable(filter = '') {
    const tbody = document.getElementById('shortcutTableBody');
    tbody.innerHTML = '';

    let shortcuts = getFilteredShortcuts();
    if (filter) {
        const lf = filter.toLowerCase();
        shortcuts = shortcuts.filter(s =>
            s.title.toLowerCase().includes(lf) ||
            s.key.toLowerCase().includes(lf) ||
            s.category.toLowerCase().includes(lf)
        );
    }

    shortcuts.forEach(s => {
        const p = state.progress[s.title];
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${s.title}</td>
            <td><span class="shortcut-key">${s.key}</span></td>
            <td><span class="category-badge">${s.category}</span></td>
            <td><span class="status-badge ${p.status}">${p.status}</span></td>
        `;
        tbody.appendChild(tr);
    });

    // Bind search
    const searchInput = document.getElementById('searchInput');
    searchInput.removeEventListener('input', handleSearch);
    searchInput.addEventListener('input', handleSearch);
}

function handleSearch(e) {
    renderShortcutTable(e.target.value);
}

// ===== LEARN (FLASHCARDS) =====
function setupLearn() {
    document.getElementById('flashcard').addEventListener('click', flipCard);
    document.querySelectorAll('.recall-btn').forEach(btn => {
        btn.addEventListener('click', () => handleRecall(btn.dataset.recall));
    });
    document.getElementById('prevCard').addEventListener('click', prevCard);
    document.getElementById('skipCard').addEventListener('click', skipCard);
}

function initLearnDeck() {
    const filtered = getFilteredShortcuts();
    // Prioritize: new and learning first, then mastered
    const newAndLearning = filtered.filter(s => state.progress[s.title].status !== 'mastered');
    const mastered = filtered.filter(s => state.progress[s.title].status === 'mastered');
    state.cardDeck = [...shuffle(newAndLearning), ...shuffle(mastered)];
    if (state.cardDeck.length === 0) state.cardDeck = shuffle(filtered);
    state.currentCard = 0;
    showCard();
}

function showCard() {
    const deck = state.cardDeck;
    if (deck.length === 0) return;
    const idx = state.currentCard % deck.length;
    const card = deck[idx];

    document.getElementById('cardFrontText').textContent = card.title;
    document.getElementById('cardBackText').textContent = card.key;
    document.getElementById('cardProgress').textContent = `${idx + 1} / ${deck.length}`;

    const fill = ((idx + 1) / deck.length) * 100;
    document.getElementById('cardProgressFill').style.width = fill + '%';

    // Reset flip
    document.getElementById('flashcardInner').classList.remove('flipped');
    document.getElementById('recallButtons').style.display = 'none';
}

function flipCard() {
    const inner = document.getElementById('flashcardInner');
    inner.classList.toggle('flipped');
    if (inner.classList.contains('flipped')) {
        document.getElementById('recallButtons').style.display = 'flex';
    }
}

function handleRecall(level) {
    const deck = state.cardDeck;
    const idx = state.currentCard % deck.length;
    const card = deck[idx];

    if (level === 'easy') {
        markCorrect(card.title);
    } else if (level === 'hard') {
        markWrong(card.title);
        // Re-queue card near the end
        deck.push(card);
    } else {
        // okay
        const p = state.progress[card.title];
        if (p.status === 'new') p.status = 'learning';
        p.lastSeen = Date.now();
        saveProgress();
    }

    state.currentCard++;
    showCard();
}

function prevCard() {
    if (state.currentCard > 0) state.currentCard--;
    showCard();
}

function skipCard() {
    state.currentCard++;
    showCard();
}

// ===== PRACTICE (TYPE SHORTCUT) =====
function setupPractice() {
    document.getElementById('showAnswer').addEventListener('click', showPracticeAnswer);
    document.getElementById('nextPractice').addEventListener('click', nextPracticeQuestion);
}

function initPractice() {
    state.practiceQueue = shuffle(getFilteredShortcuts());
    state.practiceIndex = 0;
    state.practiceCorrect = 0;
    state.practiceWrong = 0;
    state.practiceAnswered = false;
    document.getElementById('practiceCorrect').textContent = '0';
    document.getElementById('practiceWrong').textContent = '0';
    showPracticeQuestion();
    startKeyListener();
}

function showPracticeQuestion() {
    const q = state.practiceQueue;
    if (q.length === 0) return;
    const idx = state.practiceIndex % q.length;
    const shortcut = q[idx];

    document.getElementById('practiceAction').textContent = shortcut.title;
    document.getElementById('keyDisplay').innerHTML = '<span class="key-placeholder">Press the shortcut keys...</span>';
    document.getElementById('keyDisplay').className = 'key-display listening';
    document.getElementById('practiceFeedback').textContent = '';
    document.getElementById('practiceFeedback').className = 'practice-feedback';
    state.practiceAnswered = false;
}

function startKeyListener() {
    // Remove old listener if exists
    document.removeEventListener('keydown', handlePracticeKey);
    document.addEventListener('keydown', handlePracticeKey);
}

function handlePracticeKey(e) {
    // Only active in practice view
    const practiceView = document.getElementById('practice');
    if (!practiceView.classList.contains('active')) return;
    if (state.practiceAnswered) return;

    e.preventDefault();

    // Build key string from event
    const parts = [];
    if (e.ctrlKey || e.metaKey) parts.push('Ctrl');
    if (e.altKey) parts.push('Alt');
    if (e.shiftKey) parts.push('Shift');

    const keyMap = {
        'ArrowLeft': 'Left Arrow',
        'ArrowRight': 'Right Arrow',
        'ArrowUp': 'Up Arrow',
        'ArrowDown': 'Down Arrow',
        'BracketRight': ']',
        'BracketLeft': '[',
        ' ': 'Space',
        'Space': 'Space'
    };

    let key = e.key;
    if (keyMap[key]) key = keyMap[key];
    else if (keyMap[e.code]) key = keyMap[e.code];
    else if (key.length === 1) key = key.toUpperCase();

    // Don't add modifier keys alone
    if (['Control', 'Alt', 'Shift', 'Meta'].includes(key)) {
        const display = document.getElementById('keyDisplay');
        display.innerHTML = `<span style="color: var(--accent-light)">${parts.join('+') + '+...'}</span>`;
        return;
    }

    parts.push(key);
    const pressed = parts.join('+');

    const display = document.getElementById('keyDisplay');
    display.innerHTML = `<span>${pressed}</span>`;

    // Check answer
    const q = state.practiceQueue;
    const idx = state.practiceIndex % q.length;
    const correct = q[idx].key;

    if (normalizeKey(pressed) === normalizeKey(correct)) {
        display.className = 'key-display correct';
        document.getElementById('practiceFeedback').textContent = 'Correct!';
        document.getElementById('practiceFeedback').className = 'practice-feedback correct';
        state.practiceCorrect++;
        document.getElementById('practiceCorrect').textContent = state.practiceCorrect;
        markCorrect(q[idx].title);
        state.practiceAnswered = true;
    } else {
        display.className = 'key-display wrong';
        document.getElementById('practiceFeedback').innerHTML = `Wrong — the answer is <strong>${correct}</strong>`;
        document.getElementById('practiceFeedback').className = 'practice-feedback wrong';
        state.practiceWrong++;
        document.getElementById('practiceWrong').textContent = state.practiceWrong;
        markWrong(q[idx].title);
        state.practiceAnswered = true;
    }
}

function normalizeKey(k) {
    return k.toLowerCase()
        .replace(/\s+/g, '')
        .replace('arrowleft', 'leftarrow').replace('leftarrow', 'leftarrow')
        .replace('arrowright', 'rightarrow').replace('rightarrow', 'rightarrow')
        .replace('arrowup', 'uparrow').replace('uparrow', 'uparrow')
        .replace('arrowdown', 'downarrow').replace('downarrow', 'downarrow');
}

function showPracticeAnswer() {
    const q = state.practiceQueue;
    const idx = state.practiceIndex % q.length;
    const correct = q[idx].key;

    document.getElementById('keyDisplay').innerHTML = `<span style="color: var(--accent-light)">${correct}</span>`;
    document.getElementById('keyDisplay').className = 'key-display';
    document.getElementById('practiceFeedback').textContent = 'Answer revealed';
    document.getElementById('practiceFeedback').className = 'practice-feedback';
    state.practiceAnswered = true;
}

function nextPracticeQuestion() {
    state.practiceIndex++;
    showPracticeQuestion();
}

// ===== QUIZ =====
function setupQuiz() {
    document.getElementById('quizNext').addEventListener('click', nextQuizQuestion);
    document.getElementById('retakeQuiz').addEventListener('click', initQuiz);
}

function initQuiz() {
    const pool = shuffle(getFilteredShortcuts());
    state.quizQuestions = pool.slice(0, Math.min(10, pool.length));
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizAnswered = false;

    document.getElementById('quizResults').style.display = 'none';
    document.querySelector('.quiz-area').style.display = 'block';
    showQuizQuestion();
}

function showQuizQuestion() {
    const q = state.quizQuestions;
    if (state.quizIndex >= q.length) {
        showQuizResults();
        return;
    }

    const current = q[state.quizIndex];
    document.getElementById('quizAction').textContent = current.title;
    document.getElementById('quizProgressText').textContent = `Question ${state.quizIndex + 1} / ${q.length}`;
    document.getElementById('quizScoreText').textContent = `Score: ${state.quizScore}`;
    document.getElementById('quizProgressFill').style.width = ((state.quizIndex + 1) / q.length * 100) + '%';
    document.getElementById('quizNext').style.display = 'none';
    state.quizAnswered = false;

    // Generate 4 options
    const correctKey = current.key;
    const wrongPool = SHORTCUTS.filter(s => s.key !== correctKey);
    const wrongOptions = shuffle(wrongPool).slice(0, 3).map(s => s.key);
    const options = shuffle([correctKey, ...wrongOptions]);

    const container = document.getElementById('quizOptions');
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = opt;
        btn.addEventListener('click', () => handleQuizAnswer(btn, opt, correctKey, current.title));
        container.appendChild(btn);
    });
}

function handleQuizAnswer(btn, selected, correct, title) {
    if (state.quizAnswered) return;
    state.quizAnswered = true;

    const allBtns = document.querySelectorAll('.quiz-option');
    allBtns.forEach(b => b.classList.add('disabled'));

    if (selected === correct) {
        btn.classList.add('selected-correct');
        state.quizScore++;
        markCorrect(title);
    } else {
        btn.classList.add('selected-wrong');
        markWrong(title);
        // Highlight correct answer
        allBtns.forEach(b => {
            if (b.textContent === correct) b.classList.add('reveal-correct');
        });
    }

    document.getElementById('quizScoreText').textContent = `Score: ${state.quizScore}`;
    document.getElementById('quizNext').style.display = 'block';
}

function nextQuizQuestion() {
    state.quizIndex++;
    showQuizQuestion();
}

function showQuizResults() {
    document.querySelector('.quiz-area').style.display = 'none';
    const results = document.getElementById('quizResults');
    results.style.display = 'flex';

    const total = state.quizQuestions.length;
    const correct = state.quizScore;
    const wrong = total - correct;
    const accuracy = Math.round((correct / total) * 100);

    document.getElementById('resultCorrect').textContent = correct;
    document.getElementById('resultWrong').textContent = wrong;
    document.getElementById('resultAccuracy').textContent = accuracy + '%';

    if (accuracy >= 80) {
        document.getElementById('resultsTitle').textContent = 'Excellent!';
        document.getElementById('resultsSubtitle').textContent = `You scored ${correct} out of ${total}!`;
    } else if (accuracy >= 60) {
        document.getElementById('resultsTitle').textContent = 'Good Effort!';
        document.getElementById('resultsSubtitle').textContent = `You scored ${correct} out of ${total}. Keep practicing!`;
    } else {
        document.getElementById('resultsTitle').textContent = 'Keep Learning!';
        document.getElementById('resultsSubtitle').textContent = `You scored ${correct} out of ${total}. Review the flashcards and try again.`;
    }

    // Show missed items
    const missedContainer = document.getElementById('resultsMissed');
    missedContainer.innerHTML = '';
    const missed = state.quizQuestions.filter((q, i) => {
        // We need to track which were wrong — simplification: show all non-mastered from this quiz
        return state.progress[q.title].status !== 'mastered';
    });

    if (missed.length > 0 && wrong > 0) {
        missedContainer.innerHTML = '<h4>Review These:</h4>';
        missed.slice(0, wrong).forEach(m => {
            const div = document.createElement('div');
            div.className = 'missed-item';
            div.innerHTML = `<span>${m.title}</span><span class="shortcut-key">${m.key}</span>`;
            missedContainer.appendChild(div);
        });
    }
}

// ===== SPEED RUN =====
function setupSpeed() {
    document.getElementById('startSpeed').addEventListener('click', startSpeedRun);
    document.getElementById('retrySpeed').addEventListener('click', initSpeed);
}

function initSpeed() {
    document.getElementById('speedPre').style.display = 'block';
    document.getElementById('speedGame').style.display = 'none';
    document.getElementById('speedResults').style.display = 'none';
    document.getElementById('bestScore').textContent = state.bestSpeed;
    if (state.speedTimer) clearInterval(state.speedTimer);
}

function startSpeedRun() {
    state.speedScore = 0;
    state.speedTimeLeft = 60;

    document.getElementById('speedPre').style.display = 'none';
    document.getElementById('speedGame').style.display = 'block';
    document.getElementById('speedResults').style.display = 'none';
    document.getElementById('speedScore').textContent = '0';
    document.getElementById('speedTimer').textContent = '60';
    document.getElementById('speedTimer').className = 'speed-timer';

    showSpeedQuestion();
    startSpeedTimer();
}

function startSpeedTimer() {
    state.speedTimer = setInterval(() => {
        state.speedTimeLeft--;
        const timerEl = document.getElementById('speedTimer');
        timerEl.textContent = state.speedTimeLeft;

        if (state.speedTimeLeft <= 10) {
            timerEl.className = 'speed-timer danger';
        } else if (state.speedTimeLeft <= 20) {
            timerEl.className = 'speed-timer warning';
        }

        if (state.speedTimeLeft <= 0) {
            clearInterval(state.speedTimer);
            endSpeedRun();
        }
    }, 1000);
}

function showSpeedQuestion() {
    const pool = getFilteredShortcuts();
    const current = pool[Math.floor(Math.random() * pool.length)];

    document.getElementById('speedAction').textContent = current.title;

    // Generate 4 options
    const correctKey = current.key;
    const wrongPool = SHORTCUTS.filter(s => s.key !== correctKey);
    const wrongOptions = shuffle(wrongPool).slice(0, 3).map(s => s.key);
    const options = shuffle([correctKey, ...wrongOptions]);

    const container = document.getElementById('speedOptions');
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'speed-option';
        btn.textContent = opt;
        btn.addEventListener('click', () => handleSpeedAnswer(btn, opt, correctKey, current.title));
        container.appendChild(btn);
    });
}

function handleSpeedAnswer(btn, selected, correct, title) {
    if (selected === correct) {
        btn.classList.add('flash-correct');
        state.speedScore++;
        document.getElementById('speedScore').textContent = state.speedScore;
        markCorrect(title);
        setTimeout(showSpeedQuestion, 200);
    } else {
        btn.classList.add('flash-wrong');
        markWrong(title);
        // Highlight correct
        document.querySelectorAll('.speed-option').forEach(b => {
            if (b.textContent === correct) b.classList.add('flash-correct');
        });
        setTimeout(showSpeedQuestion, 600);
    }
}

function endSpeedRun() {
    document.getElementById('speedGame').style.display = 'none';
    document.getElementById('speedResults').style.display = 'block';

    document.getElementById('speedFinalScore').textContent = state.speedScore;

    const newBestEl = document.getElementById('speedNewBest');
    if (state.speedScore > state.bestSpeed) {
        state.bestSpeed = state.speedScore;
        saveProgress();
        newBestEl.style.display = 'block';
    } else {
        newBestEl.style.display = 'none';
    }
}

// ===== BOOTSTRAP =====
document.addEventListener('DOMContentLoaded', init);
