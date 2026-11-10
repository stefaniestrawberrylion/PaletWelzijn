/* =========================================================
   Palet Welzijn – Onboarding "Jouw route als vrijwilliger"
   ========================================================= */
(function () {
  "use strict";

  var STEPS = [
    {
      id: "welkom",
      title: "Welkom – fijn dat je er bent!",
      text: "Maak kennis met Palet Welzijn en wat jij als vrijwilliger betekent.",
      img: "../../assets/welkom.png",
      alt: "Welkom",
      icon: "fa-regular fa-hand",
      color: "#120a5c",
      link: "../beleid/beleid.html",
      tasks: ["Ik weet wie Palet Welzijn is", "Ik weet dat ik één van de ruim 1.300 vrijwilligers ben"]
    },
    {
      id: "start",
      title: "Je start bij Palet Welzijn",
      text: "Je contactpersoon, je VOG en je vrijwilligersovereenkomst.",
      img: "../../assets/start.png",
      alt: "Start",
      icon: "fa-regular fa-file-lines",
      color: "#0055ff",
      link: "../beleid/beleid.html",
      tasks: ["Kennisgemaakt met mijn contactpersoon", "Gratis VOG aangevraagd en laten zien", "Vrijwilligersovereenkomst getekend"]
    },
    {
      id: "voor-jou",
      title: "Wat brengt vrijwilligerswerk jou?",
      text: "Plezier, voldoening, contacten en wat Palet Welzijn jou biedt.",
      img: "../../assets/voor-jou.png",
      alt: "Voor jou",
      icon: "fa-solid fa-star",
      color: "#C2410C",
      link: "../beleid/beleid.html",
      tasks: ["Ik weet wat vrijwilligerswerk mij oplevert", "Ik weet welke extra's ik van Palet Welzijn krijg"]
    },
    {
      id: "afspraken",
      title: "Wat verwachten wij van jou?",
      text: "De gedragscode, geheimhouding en geen zorgtaken.",
      img: "../../assets/afspraken.png",
      alt: "Afspraken",
      icon: "fa-solid fa-graduation-cap",
      color: "#008241",
      link: "../beleid/beleid.html",
      tasks: ["Ik ken de gedragscode", "Wat ik over cliënten hoor, blijft geheim", "Ik doe geen medische of verpleegkundige handelingen"]
    },
    {
      id: "veiligheid",
      title: "Veiligheid",
      text: "Wat doe je als er iets gebeurt? En hoe ben je verzekerd?",
      img: "../../assets/veiligheid.png",
      alt: "Veiligheid",
      icon: "fa-solid fa-shield-halved",
      color: "#92278F",
      link: "../beleid/beleid.html",
      tasks: ["Ik weet bij wie ik terechtkan als er iets gebeurt", "Ik ken de vertrouwenslijn: 088 - 144 02 00", "Ik weet dat ik verzekerd ben"]
    },
    {
      id: "checklist",
      title: "Checklist: je start bij Palet Welzijn",
      text: "Je contactpersoon, je VOG, je overeenkomst en het contactformulier.",
      img: "../../assets/start.png",
      alt: "Checklist",
      icon: "fa-regular fa-file-lines",
      color: "#0055ff",
      link: "../beleid/beleid.html",
      tasks: ["Ik heb een kennismakingsgesprek gehad", "Ik heb mijn VOG aangevraagd", "Ik heb mijn overeenkomst ingevuld", "Ik heb het contactformulier verstuurd"]
    }
  ];

  var STORAGE_KEY = "pw-onboarding-v7";
  var VIEW_KEY = "pw-onboarding-view";
  var BELEID_URL = "../beleid/beleid.html";

  var root = document.querySelector(".pw-onboarding");
  if (!root) return;

  var listEl = root.querySelector("#pw-ob-steps");
  var routeEl = root.querySelector("#pw-ob-route");
  var trackEl = root.querySelector("#pw-ob-track");
  var trackFillEl = root.querySelector("#pw-ob-track-fill");
  var badgeEl = root.querySelector("#pw-ob-badge");
  var progressLabelEl = root.querySelector("#pw-ob-progress-label");
  var barEl = root.querySelector("#pw-ob-bar");
  var barFillEl = root.querySelector("#pw-ob-bar-fill");
  var resetEl = root.querySelector("#pw-ob-reset");

  var viewRouteEl = root.querySelector("#pw-ob-view-route");
  var viewPraatplaatEl = root.querySelector("#pw-ob-view-praatplaat");
  var viewBtns = root.querySelectorAll(".pw-ob-viewbtn");

  var endActionsEl = document.getElementById("pw-ob-end-actions");

  /* ---------- Opslag ---------- */
  function loadState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          return { checked: parsed.checked || {}, quiz: parsed.quiz || {}, enrolled: parsed.enrolled === true };
        }
      }
    } catch (e) {}
    return { checked: {}, quiz: {}, enrolled: false };
  }
  function saveState() {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  var state = loadState();

  /* ---------- Hulpfuncties ---------- */
  function checkedFor(step) {
    var arr = state.checked[step.id];
    if (!Array.isArray(arr)) arr = [];
    return step.tasks.map(function (_, i) { return arr[i] === true; });
  }
  function isDone(step) { return checkedFor(step).every(Boolean); }

  function currentIndex() {
    for (var i = 0; i < STEPS.length; i++) {
      if (!isDone(STEPS[i])) return i;
    }
    return STEPS.length;
  }

  function statusOf(index) {
    var cur = currentIndex();
    if (cur >= STEPS.length) return "done";
    if (index < cur) return "done";
    if (index === cur) return "current";
    return "locked";
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
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
    else { s.setAttribute("aria-hidden", "true"); }
    s.innerHTML = path;
    return s;
  }
  function icon(className) {
    var i = document.createElement("i");
    i.className = className;
    i.setAttribute("aria-hidden", "true");
    return i;
  }

  var ICON_CHECK = '<path d="M5 12l5 5 9-10"/>';
  var ICON_ARROW = '<path d="M5 12h14M13 6l6 6-6 6"/>';
  var ICON_LOCK = '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>';

  /* =========================================================
     WELKOM-DIA ELEMENTEN
     ========================================================= */
  var welcomeEl = document.getElementById("pw-welcome");
  var slide1 = document.getElementById("pw-slide-1");
  var slide2 = document.getElementById("pw-slide-2");
  var slide3 = document.getElementById("pw-slide-3");
  var slide4 = document.getElementById("pw-slide-4");
  var btnNext = document.getElementById("pw-slide-next");
  var welcomeStartBtn = document.getElementById("pw-welcome-start");
  var welcomePlaatBtn = document.getElementById("pw-welcome-plaat");
  var contactBtn = document.getElementById("pw-slide-contact");
  var closeFinalBtn = document.getElementById("pw-welcome-close-final");

  var allSlides = [slide1, slide2, slide3, slide4];

  function showSlide(n) {
    allSlides.forEach(function (s, i) {
      if (!s) return;
      s.classList.toggle("is-active", i === n - 1);
    });
    if (!welcomeEl) return;
    welcomeEl.classList.add("is-visible");
    document.body.style.overflow = "hidden";
  }

  function hideWelcome() {
    if (!welcomeEl) return;
    welcomeEl.classList.remove("is-visible");
    document.body.style.overflow = "";
  }

  /* ---------- Kaarten tekenen ---------- */
  function renderSteps() {
    listEl.textContent = "";
    var cur = currentIndex();
    var allDone = cur >= STEPS.length;

    STEPS.forEach(function (step, i) {
      var status = statusOf(i);
      var li = el("li", "pw-ob-step is-" + status);
      li.style.setProperty("--step-color", step.color);
      if (status === "current") li.setAttribute("aria-current", "step");

      var stop = el("span", "pw-ob-stop");
      if (status === "done") {
        stop.appendChild(svg(ICON_CHECK, "Stap " + (i + 1) + " voltooid"));
      } else if (status === "locked") {
        stop.appendChild(svg(ICON_LOCK, "Stap " + (i + 1) + " vergrendeld"));
      } else {
        stop.appendChild(icon(step.icon));
      }
      li.appendChild(stop);

      var card = el("article", "pw-ob-card");

      var img = el("img");
      img.src = step.img;
      img.alt = step.alt;
      img.loading = "lazy";
      img.onerror = function () { this.style.display = "none"; };
      card.appendChild(img);

      var content = el("div", "pw-ob-card-content");

      var labelText = "Stap " + (i + 1);
      if (status === "done") labelText += " · Voltooid";
      if (status === "current") labelText += " · Hier ben je";

      content.appendChild(el("p", "pw-ob-label", labelText));
      content.appendChild(el("h3", null, step.title));
      content.appendChild(el("p", "pw-ob-text", step.text));
      card.appendChild(content);

      var action = el("div", "pw-ob-action");

      if (allDone) {
        var again = el("a", "pw-ob-linkbtn", "Opnieuw bekijken");
        again.href = BELEID_URL + "#" + step.id;
        action.appendChild(again);
      } else if (status === "current") {
        var btn = el("a", "pw-ob-btn", "Ga verder");
        btn.href = BELEID_URL + "#" + step.id;
        btn.appendChild(svg(ICON_ARROW));
        action.appendChild(btn);
      } else if (status === "done") {
        var again2 = el("a", "pw-ob-linkbtn", "Opnieuw bekijken");
        again2.href = BELEID_URL + "#" + step.id;
        action.appendChild(again2);
      } else {
        var locked = el("p", "pw-ob-locked");
        locked.appendChild(svg(ICON_LOCK));
        locked.appendChild(document.createTextNode("Na stap " + i));
        action.appendChild(locked);
      }
      card.appendChild(action);
      li.appendChild(card);
      listEl.appendChild(li);
    });

    // TOON/VERBERG DE ACTIEBLOKKEN (Bestanden & Formulier)
    if (endActionsEl) {
      if (allDone && !state.enrolled) {
        endActionsEl.style.display = "grid";
      } else {
        endActionsEl.style.display = "none";
      }
    }

    renderStatus(cur);
    positionTrack(cur);
  }

  function renderStatus(cur) {
    var done = Math.min(cur, STEPS.length);
    progressLabelEl.textContent = done + " van " + STEPS.length + " stappen afgerond";
    barEl.setAttribute("aria-valuenow", String(done));
    barFillEl.style.width = (done / STEPS.length) * 100 + "%";
    badgeEl.textContent = cur >= STEPS.length
      ? "Klaar voor je eerste dag!"
      : "Je bent bij stap " + (cur + 1) + "!";
  }

  function positionTrack(cur) {
    if (!viewRouteEl.classList.contains("is-active")) return;
    var stops = listEl.querySelectorAll(".pw-ob-stop");
    if (stops.length < 2) return;
    var base = routeEl.getBoundingClientRect();
    var first = stops[0].getBoundingClientRect();
    var last = stops[stops.length - 1].getBoundingClientRect();
    
    var allDone = cur >= STEPS.length;
    var target = allDone ? last : stops[Math.min(cur, stops.length - 1)].getBoundingClientRect();
    
    var vertical = Math.abs(last.top - first.top) > Math.abs(last.left - first.left);
    var size = 8;

    routeEl.classList.toggle("is-vertical", vertical);

    if (vertical) {
      var x = first.left + first.width / 2 - base.left - size / 2;
      var y1 = first.top + first.height / 2 - base.top;
      var y2 = last.top + last.height / 2 - base.top;
      var yt = target.top + target.height / 2 - base.top;
      setBox(trackEl, x, y1, size, y2 - y1);
      setBox(trackFillEl, 0, 0, size, Math.max(0, yt - y1));
      trackFillEl.style.left = x + "px";
      trackFillEl.style.top = y1 + "px";
    } else {
      var y = first.top + first.height / 2 - base.top - size / 2;
      var x1 = first.left + first.width / 2 - base.left;
      var x2 = last.left + last.width / 2 - base.left;
      var xt = target.left + target.width / 2 - base.left;
      setBox(trackEl, x1, y, x2 - x1, size);
      setBox(trackFillEl, 0, 0, Math.max(0, xt - x1), size);
      trackFillEl.style.left = x1 + "px";
      trackFillEl.style.top = y + "px";
    }
  }
  function setBox(node, left, top, width, height) {
    node.style.left = left + "px";
    node.style.top = top + "px";
    node.style.width = width + "px";
    node.style.height = height + "px";
  }

  /* ---------- View switch ---------- */
  function setView(view) {
    var isRoute = view === "route";
    viewRouteEl.classList.toggle("is-active", isRoute);
    viewPraatplaatEl.classList.toggle("is-active", !isRoute);
    viewBtns.forEach(function (b) {
      var active = b.dataset.view === view;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
    if (isRoute) {
      setTimeout(function () { positionTrack(currentIndex()); }, 50);
    }
    try { window.localStorage.setItem(VIEW_KEY, view); } catch (e) {}
  }

  viewBtns.forEach(function (b) {
    b.addEventListener("click", function () { setView(b.dataset.view); });
  });

  try {
    var savedView = window.localStorage.getItem(VIEW_KEY);
    if (savedView === "praatplaat") setView("praatplaat");
  } catch (e) {}

  /* ---------- Reset ---------- */
  resetEl.addEventListener("click", function () {
    if (!window.confirm("Weet je zeker dat je alle voortgang wilt wissen?")) return;
    state = { checked: {}, quiz: {}, enrolled: false };
    saveState();
    renderSteps();
    // Verwijder de hash uit de URL bij reset
    if (history.replaceState) history.replaceState(null, "", window.location.pathname);
  });

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { positionTrack(currentIndex()); }, 100);
  });
  window.addEventListener("load", function () { positionTrack(currentIndex()); });

  /* =========================================================
     WELKOM-DIA: knoppen koppelen
     ========================================================= */
  if (btnNext) {
    btnNext.addEventListener("click", function () { showSlide(2); });
  }

  if (welcomeStartBtn) {
    welcomeStartBtn.addEventListener("click", function () {
      hideWelcome();
      setView("route");
      // Verwijder #start uit de URL zodat een herlaad de dia niet opent
      if (history.replaceState) history.replaceState(null, "", window.location.pathname);
      
      var firstStep = listEl.querySelector(".pw-ob-step.is-current");
      if (firstStep) {
        setTimeout(function () {
          firstStep.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      }
    });
  }

  if (welcomePlaatBtn) {
    welcomePlaatBtn.addEventListener("click", function () {
      hideWelcome();
      setView("praatplaat");
      if (history.replaceState) history.replaceState(null, "", window.location.pathname);
    });
  }

  /* ---------- Inschrijf-flow ---------- */
  // 1. De knop in dia 3
  if (contactBtn) {
    contactBtn.addEventListener("click", function (e) {
      state.enrolled = true;
      saveState();
      setTimeout(function () { showSlide(4); }, 400);
    });
  }

  // 2. De nieuwe knop onder de kaarten
  var endContactBtn = document.querySelector(".pw-ob-end-card a[href*='contactformulier']");
  if (endContactBtn) {
    endContactBtn.addEventListener("click", function (e) {
      state.enrolled = true;
      saveState();
      setTimeout(function () { showSlide(4); }, 400);
    });
  }

  if (closeFinalBtn) {
    closeFinalBtn.addEventListener("click", function () {
      hideWelcome();
      setView("route");
      renderSteps(); // Update de weergave (verberg de actieblokken)
      
      // Verwijder #gefeliciteerd uit de URL
      if (history.replaceState) history.replaceState(null, "", window.location.pathname);
      
      var banner = listEl.querySelector(".pw-ob-finished-banner");
      if (banner) {
        setTimeout(function () {
          banner.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 200);
      }
    });
  }

  // Escape sluit de dia
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && welcomeEl && welcomeEl.classList.contains("is-visible")) {
      hideWelcome();
      if (history.replaceState) history.replaceState(null, "", window.location.pathname);
    }
  });

  /* =========================================================
     INITIALISATIE: Alleen dia's tonen op basis van de URL (hash)
     ========================================================= */
  renderSteps();

  // Kijk naar de URL (bijv. onboarding.html#start of #gefeliciteerd)
  var hash = window.location.hash;

  if (hash === "#start") {
    // Als er op de navbar is geklikt -> Toon Welcome Dia
    showSlide(1);
  } else if (hash === "#gefeliciteerd") {
    // Als er op Afronden is geklikt in Beleid -> Toon Felicitatie Dia
    showSlide(4);
  } 
  // Anders: doe helemaal niks. De dia's blijven verborgen en je ziet alleen de kaarten.

})();