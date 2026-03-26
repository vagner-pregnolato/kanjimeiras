    const LEVEL_ORDER = ['N5', 'N4', 'N3'];
    const LEVEL_COLOR = { N5: '#c49a3c', N4: '#5b8fc9', N3: '#8c5cb8' };
    const LEVEL_NEXT = { N5: 'N4', N4: 'N3' };
    const LEVEL_KANA = { N5: '基礎', N4: '初中級', N3: '中級' };
    const LEVEL_BTN_CL = { N5: 'btn-n4', N4: 'btn-n3' };
    const MAX_TRIES = 3;
    function getMaxTries() { return mode === 'medium' ? 1 : MAX_TRIES; }

    function isHiragana(s) {
      return /^[\u3041-\u3096ー\u309d\u309e]+$/.test(s.trim());
    }
    function shuffle(a) {
      const b = [...a];
      for (let i = b.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [b[i], b[j]] = [b[j], b[i]];
      }
      return b;
    }

    let mode = 'easy', curLevel = 'N5', deck = [], idx = 0,
      tries = 0, levelScore = 0, totalScore = 0;

    /* ── MENU → APP ── */
    function startApp(m) {
      mode = m;
      document.getElementById('menu').style.display = 'none';
      const app = document.getElementById('app');
      app.style.display = 'flex';

      const tag = document.getElementById('mode-tag');
      const inp = document.getElementById('answer');
      if (mode === 'hard') {
        tag.textContent = 'difícil · ひらがな';
        tag.className = 'mode-tag hard';
        inp.placeholder = 'ひらがなで入力...';
        inp.classList.add('hira');
      } else if (mode === 'medium') {
        tag.textContent = 'médio · romaji · 1 vida';
        tag.className = 'mode-tag medium';
        inp.placeholder = 'leitura em romaji...';
        inp.classList.remove('hira');
      } else {
        tag.textContent = 'fácil · romaji';
        tag.className = 'mode-tag easy';
        inp.placeholder = 'leitura em romaji...';
        inp.classList.remove('hira');
      }
      startLevel('N5');
    }

    /* ── LEVEL ── */
    function startLevel(lv) {
      const ov = document.getElementById('overlay');
      if (ov) ov.remove();
      curLevel = lv; deck = shuffle(LEVELS[lv]);
      idx = 0; tries = 0; levelScore = 0;
      const c = LEVEL_COLOR[lv];
      document.getElementById('lv-badge').textContent = lv;
      document.getElementById('lv-badge').style.color = c;
      document.getElementById('lv-badge').style.borderColor = c;
      document.getElementById('prog-fill').style.background = c;
      document.getElementById('card-stripe').style.background = c;
      loadCard();
    }

    /* ── LOAD CARD ── */
    function loadCard() {
      const k = deck[idx];
      const el = document.getElementById('kanji');
      el.textContent = k.w;
      el.className = 'kanji-display' + (k.w.length > 3 ? ' long' : '');
      document.getElementById('reveal-box').style.display = 'none';
      document.getElementById('next-btn').style.display = 'none';
      
      // Hide radical breakdown on new card
      document.getElementById('rev-radicals').style.display = 'none';

      const inp = document.getElementById('answer');
      inp.value = '';
      inp.className = mode === 'hard' ? 'hira' : '';
      inp.disabled = false;
      const fb = document.getElementById('feedback');
      fb.innerHTML = ''; fb.className = 'feedback';
      const hint = document.getElementById('hint');
      hint.innerHTML = '<i class="ph-bold ph-arrow-enter"></i> Enter para confirmar';
      hint.className = 'hint';
      tries = 0;
      renderDots(); updateProgress();
      setTimeout(() => inp.focus(), 60);
    }

    function updateProgress() {
      document.getElementById('prog-fill').style.width =
        (idx / deck.length * 100) + '%';
      document.getElementById('score-label').textContent =
        `${levelScore} / ${deck.length}`;
    }

    function renderDots() {
      const mt = getMaxTries();
      for (let i = 0; i < MAX_TRIES; i++) {
        const el = document.getElementById('d' + i);
        if (i < mt) {
          el.style.display = '';
          el.className = 'dot ' + (i < mt - tries ? 'alive' : 'lost');
        } else {
          el.style.display = 'none';
        }
      }
    }

    function anim(cls) {
      const el = document.getElementById('kanji');
      el.classList.add(cls);
      setTimeout(() => el.classList.remove(cls), 400);
    }

    /* ── CHECK ── */
    function check() {
      const inp = document.getElementById('answer');
      const fb = document.getElementById('feedback');
      const val = inp.value.trim();
      if (!val || inp.disabled) return;

      const k = deck[idx];

      if (mode === 'hard' && !isHiragana(val)) {
        const hint = document.getElementById('hint');
        hint.innerHTML = '<i class="ph-fill ph-warning-circle"></i> use ひらがな — ative o IME (Win+Space / Cmd+Space)';
        hint.className = 'hint warn';
        inp.className = 'hira wrong';
        anim('shake');
        setTimeout(() => {
          inp.value = ''; inp.className = 'hira';
          hint.innerHTML = '<i class="ph-bold ph-arrow-enter"></i> Enter para confirmar';
          hint.className = 'hint';
          inp.focus();
        }, 1400);
        return;
      }

      const accepted = mode === 'hard' ? k.h : k.r.map(s => s.toLowerCase());
      const input = mode === 'hard' ? val : val.toLowerCase().replace(/\s+/g, '');

      if (accepted.includes(input)) {
        inp.className = (mode === 'hard' ? 'hira ' : '') + 'ok';
        inp.disabled = true;
        fb.innerHTML = '<i class="ph-bold ph-check-circle"></i> Correto!';
        fb.className = 'feedback ok';
        levelScore++; totalScore++;
        updateProgress();
        anim('pop');
        setTimeout(next, 1000);
      } else {
        tries++;
        renderDots();
        inp.className = (mode === 'hard' ? 'hira ' : '') + 'wrong';
        anim('shake');
        if (tries >= getMaxTries()) {
          inp.disabled = true;
          fb.innerHTML = '<i class="ph-bold ph-warning"></i> Sem mais tentativas.';
          fb.className = 'feedback wrong';
          showReveal(k);
        } else {
          const left = getMaxTries() - tries;
          fb.innerHTML = `<i class="ph-bold ph-x-circle"></i> Errado — ${left} tentativa${left > 1 ? 's' : ''} restante${left > 1 ? 's' : ''}.`;
          fb.className = 'feedback wrong';
          setTimeout(() => {
            inp.value = ''; inp.className = mode === 'hard' ? 'hira' : '';
            fb.innerHTML = ''; fb.className = 'feedback';
            inp.focus();
          }, 850);
        }
      }
    }

    /* ── REVEAL ── */
    function showReveal(k) {
      const reading = mode === 'hard'
        ? k.h[0]
        : `${k.h[0]}  (${k.r[0]})`;
      document.getElementById('rev-reading').textContent = reading;
      document.getElementById('rev-pt').textContent = k.pt;
      document.getElementById('rev-ex').innerHTML = k.ex.join('<br>');

      // NEW: Radical breakdown from kanji-data.js
      const radEl = document.getElementById('rev-radicals');
      const rad = typeof RADICALS !== 'undefined' ? RADICALS[k.w] : null;

      if (rad) {
        let html = '';
        rad.parts.forEach(p => {
          html += `<div class="rad-row">
            <span class="rad-char">${p.char}</span>
            <span class="rad-name">${p.name}</span>
            <span class="rad-meaning">— ${p.meaning}</span>
          </div>`;
        });
        if (rad.mnemonic) {
          html += `<div class="rad-mnemonic"><i class="ph-fill ph-lightbulb"></i> ${rad.mnemonic}</div>`;
        }
        radEl.innerHTML = html;
        radEl.style.display = 'block';
      } else {
        radEl.innerHTML = '';
        radEl.style.display = 'none';
      }

      document.getElementById('reveal-box').style.display = 'block';
      document.getElementById('next-btn').style.display = 'block';
    }

    /* ── NEXT ── */
    function next() {
      idx++;
      if (idx < deck.length) { loadCard(); return; }
      LEVEL_NEXT[curLevel] ? showLevelUp() : showEnd();
    }

    function showLevelUp() {
      const nextLv = LEVEL_NEXT[curLevel];
      const pct = Math.round(levelScore / deck.length * 100);
      const ov = document.createElement('div');
      ov.className = 'overlay'; ov.id = 'overlay';
      ov.innerHTML = `
    <div class="overlay-inner">
      <span class="overlay-kana">${LEVEL_KANA[curLevel]}</span>
      <div class="overlay-title" style="color:${LEVEL_COLOR[curLevel]}">${curLevel} concluído!</div>
      <div class="overlay-sub">
        Você acertou <strong>${levelScore} de ${deck.length}</strong> (${pct}%).<br>
        Próxima parada: <strong style="color:${LEVEL_COLOR[nextLv]}">${nextLv}</strong> — ${LEVEL_KANA[nextLv]}.
      </div>
      <button class="overlay-btn ${LEVEL_BTN_CL[curLevel]}" onclick="startLevel('${nextLv}')">Continuar → ${nextLv}</button>
      <button class="overlay-btn btn-menu" onclick="goMenu()">Menu</button>
    </div>`;
      document.body.appendChild(ov);
    }

    function showEnd() {
      const total = LEVEL_ORDER.reduce((s, lv) => s + LEVELS[lv].length, 0);
      const pct = Math.round(totalScore / total * 100);
      const ov = document.createElement('div');
      ov.className = 'overlay'; ov.id = 'overlay';
      ov.innerHTML = `
    <div class="overlay-inner">
      <span class="overlay-kana">完成</span>
      <div class="overlay-title" style="color:var(--red)">N5 → N3 concluído!</div>
      <div class="overlay-sub">
        Acertos totais: <strong>${totalScore} de ${total}</strong> (${pct}%).<br>
        Quando estiver pronto, adapte o deck para N2 e N1.
      </div>
      <button class="overlay-btn btn-end" onclick="goMenu()">Voltar ao menu</button>
    </div>`;
      document.body.appendChild(ov);
    }

    function goMenu() {
      const ov = document.getElementById('overlay');
      if (ov) ov.remove();
      totalScore = 0;
      document.getElementById('app').style.display = 'none';
      document.getElementById('menu').style.display = 'flex';
    }

    // Dynamic footer count
    // Put inside an event listener so it runs after kanji-data.js has loaded
    window.addEventListener('DOMContentLoaded', () => {
      if (typeof LEVELS !== 'undefined' && typeof LEVEL_ORDER !== 'undefined') {
        const totalKanji = LEVEL_ORDER.reduce((s, lv) => s + LEVELS[lv].length, 0);
        document.getElementById('menu-footer').textContent = `N5 → N4 → N3 · ${totalKanji} kanjis`;
      }
    });

    document.getElementById('answer').addEventListener('keydown', e => {
      if (e.key === 'Enter') check();
    });

    // ── EASTER EGG: KONAMI CODE ──
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIdx = 0;
    window.addEventListener('keydown', e => {
      if (e.key === konamiCode[konamiIdx]) {
        konamiIdx++;
        if (konamiIdx === konamiCode.length) {
          const egg = document.getElementById('easter-egg');
          egg.classList.add('show');
          setTimeout(() => {
            egg.classList.remove('show');
          }, 3000);
          konamiIdx = 0;
        }
      } else {
        // Allow restarting from first ArrowUp even if wrong key
        konamiIdx = (e.key === konamiCode[0]) ? 1 : 0;
      }
    });
