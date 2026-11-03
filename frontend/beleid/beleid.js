/* =========================================================
   Palet Welzijn - Beleid & Onboarding (tweeluik)
   Leest optioneel #stap-id uit de URL (bijv. #start)
   ========================================================= */
(function () {
  "use strict";

  var STEPS = [
    {
      id: "welkom", title: "Welkom",
      text: "Maak kennis met Palet Welzijn en wat jij als vrijwilliger betekent.",
      img: "/assets/welkom.png", alt: "Welkom",
      icon: "fa-regular fa-hand", color: "#120a5c",
      link: "stap1.html",
      tasks: ["Ik weet wie Palet Welzijn is", "Ik weet dat ik één van de ruim 1300 vrijwilligers ben"],
      quiz: {
        question: "Heb je stap 1 doorlopen en begrijp je wat Palet Welzijn doet?",
        options: [
          { label: "Ja, ik weet het", ok: true },
          { label: "Nog niet helemaal", ok: false }
        ],
        hint: "Lees de info opnieuw of stel je vraag via de hulpbalk onderaan."
      }
    },
    {
      id: "start", title: "Je start",
      text: "Je contactpersoon, je VOG en je vrijwilligersovereenkomst.",
      img: "/assets/start.png", alt: "Start",
      icon: "fa-regular fa-file-lines", color: "#0055ff",
      link: "stap2.html",
      tasks: ["Kennisgemaakt met mijn contactpersoon", "Gratis VOG aangevraagd en laten zien", "Vrijwilligersovereenkomst getekend"],
      quiz: {
        question: "Heb je je VOG en overeenkomst geregeld?",
        options: [
          { label: "Ja, alles is geregeld", ok: true },
          { label: "Nog niet alles", ok: false }
        ],
        hint: "Neem contact op met je contactpersoon als je hulp nodig hebt."
      }
    },
    {
      id: "afspraken", title: "Wat vragen wij van jou?",
      text: "De gedragscode, geheimhouding en geen zorgtaken.",
      img: "/assets/afspraken.png", alt: "Afspraken",
      icon: "fa-solid fa-graduation-cap", color: "#008241",
      link: "stap3.html",
      tasks: ["Ik ken de gedragscode", "Wat ik over cliënten hoor, blijft geheim", "Ik doe geen medische of verpleegkundige handelingen"],
      quiz: {
        question: "Snap je de gedragscode en het belang van geheimhouding?",
        options: [
          { label: "Ja, duidelijk", ok: true },
          { label: "Ik heb nog vragen", ok: false }
        ],
        hint: "Bespreek je vragen met je contactpersoon voordat je verdergaat."
      }
    },
    {
      id: "veiligheid", title: "Veiligheid",
      text: "Wat doe je als er iets gebeurt? En hoe ben je verzekerd?",
      img: "/assets/veiligheid.png", alt: "Veiligheid",
      icon: "fa-solid fa-shield-halved", color: "#92278F",
      link: "stap4.html",
      tasks: ["Ik weet bij wie ik terechtkan als er iets gebeurt", "Ik ken de vertrouwenslijn: 088 - 144 02 00", "Ik weet dat ik verzekerd ben"],
      quiz: {
        question: "Weet je wat je moet doen als er iets gebeurt?",
        options: [
          { label: "Ja, ik weet het", ok: true },
          { label: "Nee, nog niet", ok: false }
        ],
        hint: "De vertrouwenslijn staat in de hulpbalk onderaan deze pagina."
      }
    },
    {
      id: "voor-jou", title: "Wat doet Palet Welzijn voor jou?",
      text: "Waardering, workshops en samen kijken wat bij je past.",
      img: "/assets/voor-jou.png", alt: "Voor jou",
      icon: "fa-solid fa-flag-checkered", color: "#C2410C",
      link: "stap5.html",
      tasks: ["Ik weet wat ik van Palet Welzijn krijg", "Ik weet dat ik altijd kan praten over wat bij mij past"],
      quiz: {
        question: "Weet je wat je van Palet Welzijn kunt verwachten?",
        options: [
          { label: "Ja, helemaal", ok: true },
          { label: "Nog niet", ok: false }
        ],
        hint: "Bekijk de info nog eens of vraag het je contactpersoon."
      }
    }
  ];

  var STORAGE_KEY = "pw-onboarding-v2";

  var root = document.querySelector(".pw-onboarding");
  if (!root) return;
  var railEl = root.querySelector("#pw-ob-rail-list");
  var panelEl = root.querySelector("#pw-ob-panel");
  var badgeEl = root.querySelector("#pw-ob-badge");
  var progressLabelEl = root.querySelector("#pw-ob-progress-label");
  var barEl = root.querySelector("#pw-ob-bar");
  var barFillEl = root.querySelector("#pw-ob-bar-fill");
  var resetEl = root.querySelector("#pw-ob-reset");

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var p = JSON.parse(raw);
        if (p && typeof p === "object") {
          return { checked: p.checked || {}, quiz: p.quiz || {} };
        }
      }
    } catch (e) {}
    return { checked: {}, quiz: {} };
  }
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  var state = loadState();
  var activeId = null;

  function checkedFor(step) {
    var arr = state.checked[step.id];
    if (!Array.isArray(arr)) arr = [];
    return step.tasks.map(function (_, i) { return arr[i] === true; });
  }
  function isDone(step) { return checkedFor(step).every(Boolean); }
  function quizAnswered(step) { return state.quiz[step.id] === true; }
  function stepComplete(step) { return isDone(step) && quizAnswered(step); }

  function currentIndex() {
    for (var i = 0; i < STEPS.length; i++) if (!stepComplete(STEPS[i])) return i;
    return STEPS.length;
  }
  function statusOf(i) {
    var cur = currentIndex();
    if (i < cur) return "done";
    if (i === cur) return "current";
    return "locked";
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function svg(path, label) {
    var ns = "http://www.w3.org/2000/svg";
    var s = document.createElementNS(ns, "svg");
    s.setAttribute("viewBox", "0 0 24 24");
    s.setAttribute("fill", "none");
    s.setAttribute("stroke", "currentColor");
    s.setAttribute("stroke-width", "2.5");
    s.setAttribute("stroke-linecap", "round");
    s.setAttribute("stroke-linejoin", "round");
    if (label) { s.setAttribute("role", "img"); s.setAttribute("aria-label", label); }
    else s.setAttribute("aria-hidden", "true");
    s.innerHTML = path;
    return s;
  }
  function icon(cls) {
    var i = document.createElement("i");
    i.className = cls;
    i.setAttribute("aria-hidden", "true");
    return i;
  }

  var ICON_CHECK = '<path d="M5 12l5 5 9-10"/>';
  var ICON_ARROW = '<path d="M5 12h14M13 6l6 6-6 6"/>';
  var ICON_LOCK  = '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>';

  /* ---------- Linkerkolom ---------- */
  function renderRail() {
    railEl.textContent = "";
    STEPS.forEach(function (step, i) {
      var status = statusOf(i);
      var li = el("li");
      var btn = el("button", "pw-ob-rail-item is-" + status);
      btn.type = "button";
      btn.style.setProperty("--step-color", step.color);
      if (status === "current" || activeId === step.id) btn.setAttribute("aria-current", "step");
      if (status === "locked") btn.disabled = true;
      btn.addEventListener("click", function () { setActive(step.id); });

      var stop = el("span", "pw-ob-rail-stop");
      if (status === "done") stop.appendChild(svg(ICON_CHECK, "Stap " + (i + 1) + " voltooid"));
      else if (status === "locked") stop.appendChild(svg(ICON_LOCK, "Stap " + (i + 1) + " vergrendeld"));
      else stop.appendChild(icon(step.icon));
      btn.appendChild(stop);

      var txt = el("span", "pw-ob-rail-text");
      txt.appendChild(el("span", "pw-ob-rail-label", "Stap " + (i + 1) + " · " + step.title));
      var meta;
      if (status === "done") meta = "Voltooid";
      else if (status === "current") meta = "Hier ben je";
      else meta = "Vergrendeld";
      txt.appendChild(el("span", "pw-ob-rail-meta", meta));
      btn.appendChild(txt);

      li.appendChild(btn);
      railEl.appendChild(li);
    });
  }

  /* ---------- Rechterkolom ---------- */
  function renderPanel() {
    var index = STEPS.findIndex(function (s) { return s.id === activeId; });
    if (index < 0) index = Math.min(currentIndex(), STEPS.length - 1);
    var step = STEPS[index];
    activeId = step.id;
    var status = statusOf(index);
    var checks = checkedFor(step);
    var answered = quizAnswered(step);

    panelEl.textContent = "";
    panelEl.style.setProperty("--step-color", step.color);

    var head = el("div", "pw-ob-panel-head");
    head.appendChild(el("span", "pw-ob-panel-num", String(index + 1)));
    head.appendChild(el("h3", "pw-ob-panel-title", step.title));
    var badge = el("span", "pw-ob-panel-badge");
    if (status === "done") { badge.textContent = "Voltooid"; badge.classList.add("is-done"); }
    else if (status === "current") { badge.textContent = "Hier ben je"; badge.classList.add("is-current"); }
    else { badge.textContent = "Vergrendeld"; }
    head.appendChild(badge);
    panelEl.appendChild(head);

    var img = el("img", "pw-ob-panel-img");
    img.src = step.img; img.alt = step.alt; img.loading = "lazy";
    img.onerror = function () { this.style.display = "none"; };
    panelEl.appendChild(img);

    panelEl.appendChild(el("p", "pw-ob-panel-intro", step.text));

    var ul = el("ul", "pw-ob-tasks");
    step.tasks.forEach(function (task, t) {
      var li = el("li", "pw-ob-task");
      var label = el("label");
      var input = el("input");
      input.type = "checkbox";
      input.checked = checks[t];
      input.disabled = status === "locked";
      input.addEventListener("change", function () {
        var arr = checkedFor(step);
        arr[t] = input.checked;
        state.checked[step.id] = arr;
        saveState();
        renderRail();
        renderPanel();
        renderStatus();
      });
      label.appendChild(input);
      label.appendChild(el("span", null, task));
      li.appendChild(label);
      ul.appendChild(li);
    });
    panelEl.appendChild(ul);

    if (isDone(step)) {
      panelEl.appendChild(buildQuiz(step, answered));
    } else {
      panelEl.appendChild(el("p", "pw-ob-hint", "Vink eerst alle taken hierboven af."));
    }

    var foot = el("div", "pw-ob-panel-foot");

    if (step.link) {
      var linkBtn = el("a", "pw-ob-btn pw-ob-btn--ghost", "Open " + step.link);
      linkBtn.href = step.link;
      foot.appendChild(linkBtn);
    }

    var isLast = index === STEPS.length - 1;
    var next = el("button", "pw-ob-btn", isLast ? "Afronden" : "Verder naar stap " + (index + 2));
    next.type = "button";
    next.appendChild(svg(ICON_ARROW));
    next.disabled = !(isDone(step) && answered);
    next.addEventListener("click", function () {
      if (isLast) {
        renderStatus();
        badgeEl.textContent = "Klaar voor je eerste dag!";
        return;
      }
      setActive(STEPS[index + 1].id);
    });
    foot.appendChild(next);
    panelEl.appendChild(foot);
  }

  function buildQuiz(step, answered) {
    var wrap = el("div", "pw-ob-quiz");
    wrap.appendChild(el("p", "pw-ob-quiz-title", step.quiz.question));

    var opts = el("div", "pw-ob-quiz-options");
    var feedback = el("p", "pw-ob-quiz-feedback");

    step.quiz.options.forEach(function (opt) {
      var b = el("button", "pw-ob-quiz-btn", opt.label);
      b.type = "button";
      if (answered && opt.ok) b.classList.add("is-selected");
      b.addEventListener("click", function () {
        Array.prototype.forEach.call(opts.children, function (c) { c.classList.remove("is-selected"); });
        b.classList.add("is-selected");
        if (opt.ok) {
          state.quiz[step.id] = true;
          feedback.textContent = "Top! Je kunt verder.";
          feedback.className = "pw-ob-quiz-feedback is-ok";
        } else {
          state.quiz[step.id] = false;
          feedback.textContent = step.quiz.hint;
          feedback.className = "pw-ob-quiz-feedback is-no";
        }
        saveState();
        renderRail();
        renderStatus();
        var nextBtn = panelEl.querySelector(".pw-ob-panel-foot .pw-ob-btn:not(.pw-ob-btn--ghost)");
        if (nextBtn) nextBtn.disabled = !(isDone(step) && quizAnswered(step));
      });
      opts.appendChild(b);
    });
    wrap.appendChild(opts);

    if (answered) {
      feedback.textContent = "Je hebt deze vraag al beantwoord.";
      feedback.className = "pw-ob-quiz-feedback is-ok";
    }
    wrap.appendChild(feedback);
    return wrap;
  }

  function renderStatus() {
    var cur = currentIndex();
    var done = Math.min(cur, STEPS.length);
    progressLabelEl.textContent = done + " van " + STEPS.length + " stappen afgerond";
    barEl.setAttribute("aria-valuenow", String(done));
    barFillEl.style.width = (done / STEPS.length) * 100 + "%";
    badgeEl.textContent = cur >= STEPS.length
      ? "Klaar voor je eerste dag!"
      : "Je bent bij stap " + (cur + 1) + "!";
  }

  function setActive(id) {
    activeId = id;
    renderRail();
    renderPanel();
    panelEl.focus({ preventScroll: true });
    panelEl.scrollIntoView({
      behavior: window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "nearest"
    });
  }

  /* ---------- Reset ---------- */
  resetEl.addEventListener("click", function () {
    state = { checked: {}, quiz: {} };
    saveState();
    activeId = null;
    renderRail();
    renderPanel();
    renderStatus();
  });

  /* ---------- Init: lees hash uit URL (bijv. /frontend/beleid/beleid.html#start) ---------- */
  var hashId = (location.hash || "").replace("#", "");
  var hashIndex = STEPS.findIndex(function (s) { return s.id === hashId; });
  if (hashIndex >= 0) {
    activeId = STEPS[hashIndex].id;
  } else {
    var firstOpen = currentIndex();
    activeId = STEPS[Math.min(firstOpen, STEPS.length - 1)].id;
  }
  renderRail();
  renderPanel();
  renderStatus();
})();