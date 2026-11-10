(function () {
  "use strict";

  var STEPS = [
    {
      id: "welkom",
      title: "Welkom – fijn dat je er bent!",
      text: "Maak kennis met Palet Welzijn.",
      img: "../../assets/welkom.png",
      icon: "fa-regular fa-hand",
      color: "#120a5c",
      link: "../onboarding/onboarding.html",
      body: [
        { type: "p", text: "Wat fijn dat je je als vrijwilliger wilt inzetten voor Palet Welzijn! Met jouw tijd en aandacht maak je écht verschil." },
        { type: "p", text: "Jij bent onmisbaar! Op deze pagina vind je alle informatie om goed van start te gaan." },
        { type: "h", text: "1.1 Palet Welzijn" },
        { type: "p", text: "Onze droom: Een samenleving waar we met oprechte belangstelling naar elkaar omkijken en ieder op eigen-wijze invulling kan geven aan zijn leven." },
        { type: "p", text: "We zetten ons in voor een wereld waarin iedereen de hoogst mogelijke kwaliteit van leven ervaart. Dat doen we door sociale netwerken te versterken en mensen actief te houden." },
        { type: "h", text: "1.2 Vrijwilliger zijn bij Palet Welzijn" },
        { type: "p", text: "Een vrijwilliger zet zich vanuit eigen motivatie in voor een ander of de samenleving, zonder financiële vergoeding. Bij Palet Welzijn zijn meer dan 1.300 vrijwilligers actief." },
        { type: "p", text: "Er zijn veel verschillende rollen. Denk aan Vrijwilliger Thuis (gezelschap), Activiteitenvrijwilliger (helpen bij evenementen) of Projectvrijwilliger (tijdelijke klussen)." }
      ],
      tasks: [
        "Ik weet wie Palet Welzijn is en wat onze droom is",
        "Ik weet dat ik keuze heb uit verschillende rollen (Thuis, Activiteiten, Project)"
      ],
      quizzes: [
        {
          question: "Wat is een kenmerk van vrijwilligerswerk bij Palet Welzijn?",
          options: [
            { label: "A. Het is verplicht en onbetaald", ok: false },
            { label: "B. Je doet het uit vrije wil, onbetaald en met een maatschappelijk doel", ok: true },
            { label: "C. Je krijgt een vast salaris", ok: false }
          ]
        }
      ]
    },
    {
      id: "start",
      title: "Je start bij Palet Welzijn",
      text: "Kennismaken en de juiste match vinden.",
      img: "../../assets/start.png",
      icon: "fa-regular fa-file-lines",
      color: "#0055ff",
      link: "../onboarding/onboarding.html",
      body: [
        { type: "p", text: "We vinden het belangrijk dat je goed begint en weet waar je aan toe bent. Daarom doorlopen we samen een aantal stappen." },
        { type: "h", text: "Stap 1. Kennismaken" },
        { type: "p", text: "Je hebt een informeel kennismakingsgesprek met de contactpersoon vrijwilligers. We bespreken je motivatie, ervaring en wensen. Je kunt ook een keer meelopen." },
        { type: "h", text: "Stap 2. De juiste match" },
        { type: "p", text: "Samen bekijken we of de vrijwilligersrol aansluit bij jouw wensen en mogelijkheden. We vinden het belangrijk dat jij je prettig voelt." },
        { type: "h", text: "Stap 3. Aan de slag!" },
        { type: "p", text: "Wanneer alles geregeld is, kun je beginnen. Soms spreken we eerst een proefperiode af om te ervaren of het goed past." },
        { type: "h", text: "Stap 4. Begeleiding en contact" },
        { type: "p", text: "Ook als je begonnen bent, sta je er niet alleen voor. Je kunt altijd terecht bij je contactpersoon of een professional." },
        { type: "p", text: "Waarom we contact houden: Het is fijn om te horen hoe het gaat. Regelmatig contact helpt om eventuele problemen vroeg te signaleren, zorgt voor een sterke band en helpt je om je werk met plezier te blijven doen." }
      ],
      tasks: [
        "Ik heb een kennismakingsgesprek gehad",
        "Ik weet wat de juiste match is voor mij",
        "Ik weet dat ik begeleiding krijg"
      ],
      quizzes: [
        {
          question: "Wanneer ben je officieel aangemeld als vrijwilliger?",
          options: [
            { label: "A. Direct na het kennismakingsgesprek", ok: false },
            { label: "B. Wanneer alle documenten (zoals de overeenkomst) geregeld zijn", ok: true },
            { label: "C. Na de eerste werkdag", ok: false }
          ]
        }
      ]
    },
    {
      id: "voor-jou",
      title: "Wat brengt vrijwilligerswerk jou?",
      text: "Plezier, voldoening, contacten en extra's.",
      img: "../../assets/voor-jou.png",
      icon: "fa-solid fa-star",
      color: "#C2410C",
      link: "../onboarding/onboarding.html",
      body: [
        { type: "p", text: "Vrijwilligerswerk betekent iets voor een ander, maar kan ook voor jou veel opleveren." },
        { type: "h", text: "Plezier & Voldoening" },
        { type: "p", text: "Je ontmoet mensen, onderneemt leuke activiteiten en doet iets waar je energie van krijgt. Het geeft een goed gevoel om te weten dat jouw inzet verschil maakt." },
        { type: "h", text: "Sociale contacten & Structuur" },
        { type: "p", text: "Je bouwt contacten op en wordt onderdeel van een betrokken netwerk. Het kan ook een fijne, vaste invulling aan je week geven." },
        { type: "h", text: "Wat biedt Palet Welzijn jou?" },
        { type: "p", text: "We vinden het belangrijk om onze waardering te laten zien:" },
        { type: "list", items: [
          "Nieuwsbrief met nieuwtjes en columns.",
          "Jaarlijkse attentie en attenties bij bijzondere gelegenheden.",
          "Vierstroom Ledenservice (gratis lidmaatschap met kortingen).",
          "Workshops en scholingen.",
          "Een jaarlijkse vrijwilligersbijeenkomst."
        ]}
      ],
      tasks: [
        "Ik weet wat vrijwilligerswerk mij oplevert",
        "Ik weet welke extra's ik van Palet Welzijn krijg"
      ]
    },
    {
      id: "afspraken",
      title: "Wat verwachten wij van jou?",
      text: "Gedragscode, geheimhouding en grenzen.",
      img: "../../assets/afspraken.png",
      icon: "fa-solid fa-graduation-cap",
      color: "#008241",
      link: "../onboarding/onboarding.html",
      body: [
        { type: "p", text: "We zijn ontzettend blij met jouw inzet. Om het vrijwilligerswerk voor iedereen prettig en veilig te houden, vinden we een aantal zaken belangrijk." },
        { type: "h", text: "Betrouwbaarheid en communicatie" },
        { type: "p", text: "We moeten op elkaar kunnen rekenen. Je gaat zorgvuldig om met informatie, respecteert privacy en communiceert respectvol met anderen." },
        { type: "h", text: "Medische handelingen" },
        { type: "p", text: "Als vrijwilliger verricht je nooit medische of verpleegtechnische handelingen. Dit geldt ook wanneer je deze handelingen in het verleden beroepsmatig hebt uitgevoerd. Beslissingen over zorg laat je aan de professional." },
        { type: "h", text: "Onze gedragscode" },
        { type: "p", text: "Bij Palet Welzijn vinden we respect voor elkaar belangrijk. De belangrijkste uitgangspunten zijn:" },
        { type: "list", items: [
          "Respect voor elkaar: grensoverschrijdend gedrag, agressie en geweld zijn niet toegestaan.",
          "Verantwoord omgaan met middelen: roken en drugs/alcohol tijdens je inzet zijn niet toegestaan.",
          "Respect voor eigendommen: diefstal is niet toegestaan."
        ]},
        { type: "h", text: "Zorgvuldig omgaan met sociale media" },
        { type: "p", text: "Houd rekening met privacy en de gevolgen van wat je online plaatst. Je mag niet zomaar foto's, filmpjes of informatie over cliënten of bewoners online plaatsen. Ook als je samen een leuke foto maakt, mag je deze niet zonder toestemming online zetten." },
        { type: "h", text: "Geheimhouding en privacy" },
        { type: "p", text: "Wanneer je vrijwilligerswerk doet, kun je persoonlijke en vertrouwelijke informatie te horen krijgen. Alles wat je over cliënten, bewoners of de organisatie te weten komt, valt onder de geheimhoudingsplicht. Deze verplichting blijft ook gelden wanneer je stopt met vrijwilligerswerk." }
      ],
      tasks: [
        "Ik ken de gedragscode van Palet Welzijn",
        "Ik doe geen medische handelingen",
        "Ik ga zorgvuldig om met sociale media",
        "Ik weet dat geheimhouding ook na mijn vrijwilligerswerk geldt"
      ],
      quizzes: [
        {
          question: "Ik ben gestopt met vrijwilligerswerk, maar ik vertel wat vertrouwelijks over een cliënt aan een bekende. Mag dat?",
          options: [
            { label: "A. Ja, want ik werk er niet meer", ok: false },
            { label: "B. Alleen als ik geen namen noem", ok: false },
            { label: "C. Nee, de geheimhoudingsplicht blijft ook na het stoppen gelden", ok: true }
          ]
        }
      ]
    },
    {
      id: "veiligheid",
      title: "Veiligheid",
      text: "Incidenten, vertrouwenspersoon en verzekering.",
      img: "../../assets/veiligheid.png",
      icon: "fa-solid fa-shield-halved",
      color: "#92278F",
      link: "../onboarding/onboarding.html",
      body: [
        { type: "p", text: "Bij Palet Welzijn staat veilig werken voorop." },
        { type: "h", text: "Incidenten melden" },
        { type: "p", text: "Maak je een situatie mee die mogelijk schadelijke gevolgen heeft? Bespreek dit altijd met jouw contactpersoon. Ook wanneer je twijfelt, is het belangrijk om een situatie bespreekbaar te maken." },
        { type: "h", text: "Vertrouwenspersoon" },
        { type: "p", text: "Kun je niet terecht bij jouw contactpersoon? Dan kun je contact opnemen met de vertrouwenspersoon via de vertrouwenslijn: 088 - 144 0200." },
        { type: "h", text: "Verzekering" },
        { type: "p", text: "Palet Welzijn heeft voor vrijwilligers een ongevallen- en aansprakelijkheidsverzekering afgesloten. Hierdoor ben je verzekerd voor schade die onbedoeld ontstaat tijdens je vrijwilligerswerk." }
      ],
      tasks: [
        "Ik weet dat mijn contactpersoon mijn eerste aanspreekpunt is",
        "Ik ken de vertrouwenslijn: 088 - 144 0200",
        "Ik weet dat ik verzekerd ben via Palet Welzijn"
      ]
    },
    {
      id: "aanmelding",
      title: "Afronding & Aanmelding",
      text: "Checklist, bestanden downloaden en formulier invullen.",
      img: "../../assets/aanmelding.png",
      icon: "fa-solid fa-flag-checkered",
      color: "#0F766E",
      link: "../onboarding/onboarding.html",
      body: [
        { type: "p", text: "Je bent bijna klaar! Voordat je officieel aan de slag gaat, moeten een aantal zaken geregeld zijn." },
        { type: "h", text: "Stap 1: Checklist doorlopen" },
        { type: "list", items: [
          "Kennismakingsgesprek gevoerd.",
          "VOG aangevraagd en getoond aan jouw contactpersoon.",
          "Vrijwilligersovereenkomst ontvangen.",
          "Afspraken over jouw start en begeleiding gemaakt."
        ]},
        { type: "h", text: "Stap 2: Download de bestanden" },
        { type: "p", text: "Download hieronder de benodigde bestanden (zoals de vrijwilligersovereenkomst en de VOG-aanvraag) en neem ze door." },
        { type: "h", text: "Stap 3: Contactformulier invullen" },
        { type: "p", text: "Vul het contactformulier in. Hierin geef je aan dat je de checklist hebt gedaan en de bestanden hebt doorgestuurd. Als je dit hebt gedaan, is je aanmelding compleet!" }
      ],
      tasks: [
        "Ik heb de checklist doorlopen",
        "Ik heb de benodigde bestanden gedownload en ingevuld",
        "Ik heb het contactformulier verzonden"
      ]
    }
  ];

  var STORAGE_KEY = "pw-onboarding-v4";
  var root = document.querySelector(".pw-onboarding");
  if (!root) return;

  var railEl = root.querySelector("#pw-ob-rail-list");
  var panelEl = root.querySelector("#pw-ob-panel");
  var badgeEl = root.querySelector("#pw-ob-badge");
  var progressLabelEl = root.querySelector("#pw-ob-progress-label");
  var barEl = root.querySelector("#pw-ob-bar");
  var barFillEl = root.querySelector("#pw-ob-bar-fill");
  var resetEl = root.querySelector("#pw-ob-reset");
  var modalEl = document.getElementById("pw-ob-modal");

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var p = JSON.parse(raw);
        if (p && typeof p === "object") { return { checked: p.checked || {}, quiz: p.quiz || {} }; }
      }
    } catch (e) {}
    return { checked: {}, quiz: {} };
  }
  var state = loadState();
  var activeId = null;
  function saveState() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {} }

  function checkedFor(step) { var arr = state.checked[step.id]; if (!Array.isArray(arr)) arr = []; return step.tasks.map(function (_, i) { return arr[i] === true; }); }
  function isDone(step) { return checkedFor(step).every(Boolean); }
  
  function quizAnswered(step) {
    if (!step.quizzes || step.quizzes.length === 0) return true; // Geen quiz = automatisch goed
    var answers = state.quiz[step.id];
    if (!Array.isArray(answers)) return false;
    return step.quizzes.every(function (_, i) { return answers[i] === true; });
  }
  function stepComplete(step) { return isDone(step) && quizAnswered(step); }
  
  function currentIndex() { for (var i = 0; i < STEPS.length; i++) { if (!stepComplete(STEPS[i])) return i; } return STEPS.length; }
  function statusOf(i) { var cur = currentIndex(); if (i < cur) return "done"; if (i === cur) return "current"; return "locked"; }

  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function svg(path, label) { var ns = "http://www.w3.org/2000/svg"; var s = document.createElementNS(ns, "svg"); s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("fill", "none"); s.setAttribute("stroke", "currentColor"); s.setAttribute("stroke-width", "2.5"); s.setAttribute("stroke-linecap", "round"); s.setAttribute("stroke-linejoin", "round"); if (label) { s.setAttribute("role", "img"); s.setAttribute("aria-label", label); } else { s.setAttribute("aria-hidden", "true"); } s.innerHTML = path; return s; }
  function icon(cls) { var i = document.createElement("i"); i.className = cls; i.setAttribute("aria-hidden", "true"); return i; }

  var ICON_CHECK = '<path d="M5 12l5 5 9-10"/>';
  var ICON_ARROW = '<path d="M5 12h14M13 6l6 6-6 6"/>';
  var ICON_LOCK = '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>';

  function renderRail() {
    railEl.textContent = "";
    STEPS.forEach(function (step, i) {
      var status = statusOf(i);
      var li = el("li");
      var btn = el("button", "pw-ob-rail-item is-" + status);
      btn.type = "button"; btn.style.setProperty("--step-color", step.color);
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
      var meta = status === "done" ? "Voltooid" : status === "current" ? "Hier ben je" : "Vergrendeld";
      txt.appendChild(el("span", "pw-ob-rail-meta", meta));
      btn.appendChild(txt);
      li.appendChild(btn);
      railEl.appendChild(li);
    });
  }

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

    /* AFBEELDING BOVEN TITEL */
    var img = el("img", "pw-ob-panel-img");
    img.src = step.img; img.alt = step.alt || ""; img.loading = "lazy"; img.onerror = function () { this.style.display = "none"; };
    panelEl.appendChild(img);

    /* KOP */
    var head = el("div", "pw-ob-panel-head");
    head.appendChild(el("span", "pw-ob-panel-num", String(index + 1)));
    head.appendChild(el("h3", "pw-ob-panel-title", step.title));
    var badge = el("span", "pw-ob-panel-badge");
    if (status === "done") { badge.textContent = "Voltooid"; badge.classList.add("is-done"); }
    else if (status === "current") { badge.textContent = "Hier ben je"; badge.classList.add("is-current"); }
    else { badge.textContent = "Vergrendeld"; }
    head.appendChild(badge);
    panelEl.appendChild(head);

    /* INTRO */
    panelEl.appendChild(el("p", "pw-ob-panel-intro", step.text));

    /* INFORMATIEBLOK IN LOSSE BLOCKS */
    if (Array.isArray(step.body) && step.body.length) {
      var info = el("div", "pw-ob-info");
      step.body.forEach(function (block) {
        if (!block || !block.type) return;
        var blockDiv = el("div", "pw-ob-block"); // NIEUW: wrapper voor animatie
        if (block.type === "p") blockDiv.appendChild(el("p", "pw-ob-info-p", block.text));
        else if (block.type === "h") blockDiv.appendChild(el("h4", "pw-ob-info-h", block.text));
        else if (block.type === "list" && Array.isArray(block.items)) {
          var ul2 = el("ul", "pw-ob-info-list");
          block.items.forEach(function (it) { ul2.appendChild(el("li", null, it)); });
          blockDiv.appendChild(ul2);
        }
        info.appendChild(blockDiv);
      });
      panelEl.appendChild(info);
    }

    /* TAKEN */
    panelEl.appendChild(el("p", "pw-ob-hint", "Vink af wat je al hebt gedaan:"));
    var ul = el("ul", "pw-ob-tasks");
    step.tasks.forEach(function (task, t) {
      var li = el("li", "pw-ob-task");
      var label = el("label");
      var input = el("input"); input.type = "checkbox"; input.checked = checks[t]; input.disabled = status === "locked";
      input.addEventListener("change", function () {
        var arr = checkedFor(step); arr[t] = input.checked; state.checked[step.id] = arr; saveState(); renderRail(); renderPanel(); renderStatus();
      });
      label.appendChild(input); label.appendChild(el("span", null, task)); li.appendChild(label); ul.appendChild(li);
    });
    panelEl.appendChild(ul);

    /* QUIZ (Alleen als de stap een quiz heeft, zoals H2 en H4) */
    if (step.quizzes && step.quizzes.length > 0 && isDone(step)) {
      panelEl.appendChild(buildQuiz(step));
    }

    /* FOOTER */
    var foot = el("div", "pw-ob-panel-foot");
    var backBtn = el("button", "pw-ob-btn pw-ob-btn--ghost", "Ga terug"); backBtn.type = "button";
    backBtn.addEventListener("click", function () { if (window.history.length > 1) window.history.back(); else window.location.href = "../onboarding/onboarding.html"; });
    foot.appendChild(backBtn);

    var isLast = index === STEPS.length - 1;
    
    // SPECIALE ACTIE VOOR DE LAATSTE STAP (Afronding)
    if (isLast) {
        if (status === "current") {
            // Hier tonen we de Download en Formulier knoppen in plaats van de standaard "Volgende" knop
            var downloadBtn = el("a", "pw-ob-btn", "Download Bestanden"); downloadBtn.href = "../../assets/vrijwilligersovereenkomst.pdf"; downloadBtn.target = "_blank";
            downloadBtn.style.background = "var(--pw-navy)";
            
            var formBtn = el("a", "pw-ob-btn", "Contactformulier Invullen"); formBtn.href = "../contact/contact.html"; // Pas link aan naar jouw formulier
            formBtn.style.background = "var(--pw-green)";
            
            var finishBtn = el("button", "pw-ob-btn", "Afronden & Verzenden"); finishBtn.type = "button";
            finishBtn.style.background = "var(--pw-blauw)"; finishBtn.style.marginTop = "10px";
            
            finishBtn.addEventListener("click", function() {
                if(confirm("Weet je zeker dat je alles hebt gedaan? Je aanmelding wordt dan voltooid.")) {
                    openModal();
                    // Optioneel: hier een fetch() naar je backend om het formulier te 'verzenden'
                    setTimeout(function() {
                        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
                    }, 300);
                }
            });
            
            foot.appendChild(downloadBtn);
            foot.appendChild(formBtn);
            foot.appendChild(finishBtn);
        }
    } else {
        // Standaard Volgende knop voor de andere stappen
        var next = el("button", "pw-ob-btn", "Verder naar stap " + (index + 2)); next.type = "button";
        next.appendChild(svg(ICON_ARROW));
        next.disabled = !(isDone(step) && answered);
        next.addEventListener("click", function () { setActive(STEPS[index + 1].id); });
        foot.appendChild(next);
    }
    panelEl.appendChild(foot);
  }

  function buildQuiz(step) {
    var wrap = el("div", "pw-ob-quiz");
    wrap.appendChild(el("h4", "pw-ob-quiz-heading", "Tijd om je kennis te testen!"));
    wrap.appendChild(el("p", "pw-ob-quiz-intro", "Beantwoord de vraag hieronder."));

    var answers = state.quiz[step.id];
    if (!Array.isArray(answers)) answers = [];

    step.quizzes.forEach(function (quiz, qi) {
      var correct = answers[qi] === true;
      var card = el("div", "pw-ob-question");
      card.appendChild(el("p", "pw-ob-quiz-title", quiz.question));

      var opts = el("div", "pw-ob-quiz-options");
      var feedback = el("div", "pw-ob-quiz-feedback");

      quiz.options.forEach(function (opt) {
        var b = el("button", "pw-ob-quiz-btn", opt.label);
        b.type = "button";
        if (correct && opt.ok) b.classList.add("is-selected", "is-correct");
        if (correct) b.disabled = true;

        b.addEventListener("click", function () {
          if (answers[qi] === true) return;
          if (opt.ok) {
            answers[qi] = true; state.quiz[step.id] = answers; saveState();
            b.classList.add("is-selected", "is-correct");
            Array.prototype.forEach.call(opts.children, function (c) { c.disabled = true; });
            feedback.textContent = "Perfect!"; // KORT ANTWOORD
            feedback.className = "pw-ob-quiz-feedback is-ok";
          } else {
            feedback.textContent = "Helaas, probeer het nog eens.";
            feedback.className = "pw-ob-quiz-feedback is-no";
          }
          renderRail(); renderStatus();
          var nextBtn = panelEl.querySelector(".pw-ob-panel-foot .pw-ob-btn:not(.pw-ob-btn--ghost)");
          if (nextBtn) nextBtn.disabled = !(isDone(step) && quizAnswered(step));
        });
        opts.appendChild(b);
      });

      card.appendChild(opts);
      if (correct) { feedback.textContent = "Perfect!"; feedback.className = "pw-ob-quiz-feedback is-ok"; }
      card.appendChild(feedback);
      wrap.appendChild(card);
    });
    return wrap;
  }

  function renderStatus() {
    var cur = currentIndex();
    var done = Math.min(cur, STEPS.length);
    progressLabelEl.textContent = done + " van " + STEPS.length + " stappen afgerond";
    barEl.setAttribute("aria-valuenow", String(done));
    barFillEl.style.width = (done / STEPS.length) * 100 + "%";
    badgeEl.textContent = cur >= STEPS.length ? "Klaar voor je eerste dag!" : "Je bent bij stap " + (cur + 1) + "!";
  }

  function setActive(id) {
    var targetIndex = STEPS.findIndex(function (s) { return s.id === id; });
    if (targetIndex < 0) return;
    if (statusOf(targetIndex) === "locked") return;
    activeId = id; renderRail(); renderPanel();
    panelEl.focus({ preventScroll: true });
    panelEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    if (history.replaceState) history.replaceState(null, "", "#" + id);
  }

  var lastFocused = null;
  function openModal() {
    if (!modalEl) return;
    lastFocused = document.activeElement;
    modalEl.hidden = false; document.body.style.overflow = "hidden";
    var firstBtn = modalEl.querySelector(".pw-ob-modal-btn");
    if (firstBtn) setTimeout(function () { firstBtn.focus(); }, 50);
    document.addEventListener("keydown", onModalKeydown);
  }
  function closeModal() {
    if (!modalEl) return;
    modalEl.hidden = true; document.body.style.overflow = "";
    document.removeEventListener("keydown", onModalKeydown);
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }
  function onModalKeydown(e) { if (e.key === "Escape") closeModal(); }
  if (modalEl) { modalEl.addEventListener("click", function (e) { var t = e.target; if (t && t.getAttribute && t.getAttribute("data-close") === "true") closeModal(); }); }

  if (resetEl) {
    resetEl.addEventListener("click", function () {
      if (window.confirm("Weet je zeker dat je alle voortgang wilt wissen en opnieuw wilt beginnen?")) {
        state = { checked: {}, quiz: {} }; saveState(); activeId = STEPS[0].id; renderRail(); renderPanel(); renderStatus();
        if (history.replaceState) history.replaceState(null, "", "#welkom");
      }
    });
  }

  var hashId = (location.hash || "").replace("#", "");
  var hashIndex = STEPS.findIndex(function (s) { return s.id === hashId; });
  if (hashIndex >= 0 && statusOf(hashIndex) !== "locked") { activeId = STEPS[hashIndex].id; } 
  else { var firstOpen = currentIndex(); activeId = STEPS[Math.min(firstOpen, STEPS.length - 1)].id; }

  renderRail(); renderPanel(); renderStatus();
})();