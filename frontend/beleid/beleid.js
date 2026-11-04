/* =========================================================
   Palet Welzijn - Beleid & Onboarding (tweeluik)
   Per stap: info-blok + taken + controle-vraag (meerkeuze)
   Leest optioneel #stap-id uit de URL (bijv. #start)
   ========================================================= */
(function () {
  "use strict";

  var STEPS = [
    {
      id: "welkom", title: "Welkom",
      text: "Maak kennis met Palet Welzijn en wat jij als vrijwilliger betekent.",
      img: "./assets/welkom.png", alt: "Welkom",
      icon: "fa-regular fa-hand", color: "#120a5c",
      link: "./frontend/onboarding/onboarding.html",
      body: [
        { type: "p", text: "Palet Welzijn is een organisatie die mensen in hun eigen omgeving ondersteunt met allerlei activiteiten: van samen koffiedrinken tot wandelen, koken of meegaan naar een afspraak. Vrijwilligers zijn daarbij onmisbaar." },
        { type: "p", text: "Als vrijwilliger maak je écht het verschil. Je biedt gezelschap, een luisterend oor en praktische hulp. Daarbij werk je altijd samen met een vaste contactpersoon binnen Palet Welzijn." },
        { type: "p", text: "Met ruim 1300 vrijwilligers vormen we samen een grote, betrokken club. Jij bent daar vanaf vandaag onderdeel van — welkom!" }
      ],
      tasks: ["Ik weet wie Palet Welzijn is", "Ik weet dat ik één van de ruim 1300 vrijwilligers ben"],
      quiz: {
        question: "Wat is de belangrijkste rol van een vrijwilliger bij Palet Welzijn?",
        options: [
          { label: "Gezelschap en praktische ondersteuning bieden", ok: true },
          { label: "Medische handelingen overnemen van de huisarts", ok: false },
          { label: "Het bestuur van Palet Welzijn adviseren", ok: false }
        ],
        hint: "Kijk nog eens naar de eerste alinea: het gaat om gezelschap, een luisterend oor en praktische hulp."
      }
    },
    {
      id: "start", title: "Je start",
      text: "Je contactpersoon, je VOG en je vrijwilligersovereenkomst.",
      img: "./assets/start.png", alt: "Start",
      icon: "fa-regular fa-file-lines", color: "#0055ff",
      link: "./onboarding.html",
      body: [
        { type: "p", text: "Voordat je echt aan de slag gaat, regel je een paar praktische zaken. Je krijgt een vaste contactpersoon binnen Palet Welzijn. Bij die persoon kun je terecht met al je vragen over je vrijwilligerswerk." },
        { type: "p", text: "Daarnaast vraag je een Verklaring Omtrent het Gedrag (VOG) aan. Dit is gratis voor vrijwilligers en laat zien dat je betrouwbaar bent in de omgang met kwetsbare mensen." },
        { type: "p", text: "Tot slot onderteken je een vrijwilligersovereenkomst. Daarin staan wederzijdse afspraken: wat jij doet, wat Palet Welzijn voor jou regelt (zoals verzekering) en hoe lang je betrokken blijft." }
      ],
      tasks: ["Kennisgemaakt met mijn contactpersoon", "Gratis VOG aangevraagd en laten zien", "Vrijwilligersovereenkomst getekend"],
      quiz: {
        question: "Wat regel je allemaal voordat je begint?",
        options: [
          { label: "Contactpersoon, VOG en vrijwilligersovereenkomst", ok: true },
          { label: "Alleen een VOG", ok: false },
          { label: "Niets, je kunt direct beginnen", ok: false }
        ],
        hint: "Er zijn drie dingen: een contactpersoon, een VOG en een overeenkomst."
      }
    },
    {
      id: "afspraken", title: "Wat vragen wij van jou?",
      text: "De gedragscode, geheimhouding en geen zorgtaken.",
      img: "./assets/afspraken.png", alt: "Afspraken",
      icon: "fa-solid fa-graduation-cap", color: "#008241",
      link: "./onboarding.html",
      body: [
        { type: "p", text: "Palet Welzijn heeft een gedragscode. Daarin staat hoe we met elkaar en met cliënten omgaan: respectvol, betrouwbaar en met aandacht voor ieders grenzen." },
        { type: "p", text: "Wat je tijdens je vrijwilligerswerk over cliënten hoort of ziet, blijft geheim. Je deelt geen namen, situaties of foto's — ook niet op social media." },
        { type: "p", text: "Belangrijk: je doet géén medische of verpleegkundige handelingen. Dat mag alleen door bevoegde zorgverleners. Twijfel je? Overleg altijd met je contactpersoon." }
      ],
      tasks: ["Ik ken de gedragscode", "Wat ik over cliënten hoor, blijft geheim", "Ik doe geen medische of verpleegkundige handelingen"],
      quiz: {
        question: "Wat doe je als een cliënt je vraagt om een verband te verschonen?",
        options: [
          { label: "Dat doe ik zelf, het is maar klein", ok: false },
          { label: "Ik zeg dat dit niet bij mijn taak hoort en overleg met mijn contactpersoon", ok: true },
          { label: "Ik vraag een andere vrijwilliger het te doen", ok: false }
        ],
        hint: "Medische en verpleegkundige handelingen zijn voorbehouden aan bevoegde zorgverleners."
      }
    },
    {
      id: "veiligheid", title: "Veiligheid",
      text: "Wat doe je als er iets gebeurt? En hoe ben je verzekerd?",
      img: "./assets/veiligheid.png", alt: "Veiligheid",
      icon: "fa-solid fa-shield-halved", color: "#92278F",
      link: "./onboarding.html",
      body: [
        { type: "p", text: "Als er iets gebeurt — een val, een verwarde situatie of een onveilig gevoel — dan is er altijd iemand bij wie je terechtkunt. Je contactpersoon is je eerste aanspreekpunt." },
        { type: "p", text: "Daarnaast is er een vertrouwenslijn: 088 - 144 02 00. Je kunt daar terecht als je iets wilt melden wat je liever niet met je contactpersoon bespreekt." },
        { type: "p", text: "Als vrijwilliger ben je via Palet Welzijn verzekerd tijdens je werkzaamheden. Dit staat ook in je vrijwilligersovereenkomst." }
      ],
      tasks: ["Ik weet bij wie ik terechtkan als er iets gebeurt", "Ik ken de vertrouwenslijn: 088 - 144 02 00", "Ik weet dat ik verzekerd ben"],
      quiz: {
        question: "Bij wie kun je terecht als je iets wilt melden wat je niet met je contactpersoon wilt bespreken?",
        options: [
          { label: "De politie bellen meteen", ok: false },
          { label: "De vertrouwenslijn: 088 - 144 02 00", ok: true },
          { label: "Een andere vrijwilliger", ok: false }
        ],
        hint: "De vertrouwenslijn staat in de hulpbalk onderaan deze pagina."
      }
    },
    {
      id: "voor-jou", title: "Wat doet Palet Welzijn voor jou?",
      text: "Waardering, workshops en samen kijken wat bij je past.",
      img: "./assets/voor-jou.png", alt: "Voor jou",
      icon: "fa-solid fa-flag-checkered", color: "#C2410C",
      link: "./onboarding.html",
      body: [
        { type: "p", text: "Palet Welzijn waardeert haar vrijwilligers. Dat uit zich in attenties, een jaarlijks uitje en aandacht voor jouw welzijn." },
        { type: "p", text: "Daarnaast organiseert Palet Welzijn workshops en trainingen. Denk aan een cursus omgaan met dementie, grenzen aangeven of EHBO. Je kunt je hiervoor aanmelden via je contactpersoon." },
        { type: "p", text: "Past een taak niet meer bij je? Samen met je contactpersoon kijk je wat wél bij je past. Jouw plezier en welzijn staan voorop." }
      ],
      tasks: ["Ik weet wat ik van Palet Welzijn krijg", "Ik weet dat ik altijd kan praten over wat bij mij past"],
      quiz: {
        question: "Wat kun je doen als een taak niet meer bij je past?",
        options: [
          { label: "Stoppen zonder iets te zeggen", ok: false },
          { label: "In gesprek gaan met mijn contactpersoon om iets anders te zoeken", ok: true },
          { label: "Gewoon doorgaan, het is maar tijdelijk", ok: false }
        ],
        hint: "Samen met je contactpersoon kijk je wat wél bij je past."
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

    /* --- Kop --- */
    var head = el("div", "pw-ob-panel-head");
    head.appendChild(el("span", "pw-ob-panel-num", String(index + 1)));
    head.appendChild(el("h3", "pw-ob-panel-title", step.title));
    var badge = el("span", "pw-ob-panel-badge");
    if (status === "done") { badge.textContent = "Voltooid"; badge.classList.add("is-done"); }
    else if (status === "current") { badge.textContent = "Hier ben je"; badge.classList.add("is-current"); }
    else { badge.textContent = "Vergrendeld"; }
    head.appendChild(badge);
    panelEl.appendChild(head);

    /* --- Afbeelding --- */
    var img = el("img", "pw-ob-panel-img");
    img.src = step.img; img.alt = step.alt; img.loading = "lazy";
    img.onerror = function () { this.style.display = "none"; };
    panelEl.appendChild(img);

    /* --- Intro --- */
    panelEl.appendChild(el("p", "pw-ob-panel-intro", step.text));

    /* --- Uitlegblok (paragrafen) --- */
    if (Array.isArray(step.body) && step.body.length) {
      var info = el("div", "pw-ob-info");
      step.body.forEach(function (block) {
        if (block.type === "p") {
          info.appendChild(el("p", "pw-ob-info-p", block.text));
        } else if (block.type === "list" && Array.isArray(block.items)) {
          var ul2 = el("ul", "pw-ob-info-list");
          block.items.forEach(function (it) { ul2.appendChild(el("li", null, it)); });
          info.appendChild(ul2);
        }
      });
      panelEl.appendChild(info);
    }

    /* --- Taken --- */
    panelEl.appendChild(el("p", "pw-ob-hint", "Vink af wat je al hebt gedaan:"));
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

    /* --- Controle-vraag (verschijnt pas als alle taken zijn afgevinkt) --- */
    if (isDone(step)) {
      panelEl.appendChild(buildQuiz(step, answered));
    } else {
      panelEl.appendChild(el("p", "pw-ob-hint", "Vink eerst alle taken hierboven af. Daarna verschijnt de controle-vraag."));
    }

    /* --- Footer --- */
    var foot = el("div", "pw-ob-panel-foot");

    if (step.link) {
      var linkBtn = el("a", "pw-ob-btn pw-ob-btn--ghost", "Ga naar landingpagina"); 
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

  /* ---------- Meerkeuze controle-vraag ---------- */
  function buildQuiz(step, answered) {
    var wrap = el("div", "pw-ob-quiz");
    wrap.appendChild(el("p", "pw-ob-quiz-title", step.quiz.question));

    var opts = el("div", "pw-ob-quiz-options");
    var feedback = el("p", "pw-ob-quiz-feedback");

    step.quiz.options.forEach(function (opt, oi) {
      var b = el("button", "pw-ob-quiz-btn", opt.label);
      b.type = "button";
      b.dataset.ok = opt.ok ? "1" : "0";
      if (answered && opt.ok) b.classList.add("is-selected");
      b.addEventListener("click", function () {
        Array.prototype.forEach.call(opts.children, function (c) { c.classList.remove("is-selected"); });
        b.classList.add("is-selected");
        if (opt.ok) {
          state.quiz[step.id] = true;
          feedback.textContent = "Top! Je antwoord is goed. Je kunt verder.";
          feedback.className = "pw-ob-quiz-feedback is-ok";
        } else {
          state.quiz[step.id] = false;
          feedback.textContent = "Nog niet helemaal. " + step.quiz.hint;
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
      feedback.textContent = "Je hebt deze vraag al goed beantwoord.";
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

  /* ---------- Init: lees hash uit URL (bijv. #start) ---------- */
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