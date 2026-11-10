(function () {
  "use strict";

  var STEPS = [
    { id: "welkom", title: "Welkom – fijn dat je er bent!", text: "Maak kennis met Palet Welzijn.", img: "../../assets/welkom.png", icon: "fa-regular fa-hand", color: "#120a5c", link: "../beleid/beleid.html", tasks: ["Ik weet wie Palet Welzijn is", "Ik weet dat ik één van de ruim 1.300 vrijwilligers ben"] },
    { id: "start", title: "Je start bij Palet Welzijn", text: "Je contactpersoon, je VOG en je overeenkomst.", img: "../../assets/start.png", icon: "fa-regular fa-file-lines", color: "#0055ff", link: "../beleid/beleid.html", tasks: ["Kennisgemaakt", "VOG aangevraagd", "Overeenkomst getekend"] },
    { id: "voor-jou", title: "Wat brengt het jou?", text: "Plezier, voldoening en contacten.", img: "../../assets/voor-jou.png", icon: "fa-solid fa-star", color: "#C2410C", link: "../beleid/beleid.html", tasks: ["Ik weet wat het mij oplevert", "Ik ken de extra's"] },
    { id: "afspraken", title: "Wat verwachten wij?", text: "Gedragscode en geheimhouding.", img: "../../assets/afspraken.png", icon: "fa-solid fa-graduation-cap", color: "#008241", link: "../beleid/beleid.html", tasks: ["Ik ken de gedragscode", "Ik houd dingen geheim"] },
    { id: "veiligheid", title: "Veiligheid", text: "Wat te doen bij incidenten?", img: "../../assets/veiligheid.png", icon: "fa-solid fa-shield-halved", color: "#92278F", link: "../beleid/beleid.html", tasks: ["Ik weet bij wie ik terechtkan", "Ik ken de vertrouwenslijn"] },
    { id: "aanmelding", title: "Afronding", text: "Checklist, download en formulier.", img: "../../assets/aanmelding.png", icon: "fa-solid fa-flag-checkered", color: "#0F766E", link: "../beleid/beleid.html#aanmelding", tasks: ["Checklist gedaan", "Formulier verzonden"] }
  ];

  var STORAGE_KEY = "pw-onboarding-v4";
  var VIEW_KEY = "pw-onboarding-view";
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

  function loadState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") { return { checked: parsed.checked || {}, quiz: parsed.quiz || {} }; }
      }
    } catch (e) {}
    return { checked: {}, quiz: {} };
  }
  var state = loadState();
  function saveState() { try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {} }

  function checkedFor(step) { var arr = state.checked[step.id]; if (!Array.isArray(arr)) arr = []; return step.tasks.map(function (_, i) { return arr[i] === true; }); }
  function isDone(step) { return checkedFor(step).every(Boolean); }
  function currentIndex() { for (var i = 0; i < STEPS.length; i++) { if (!isDone(STEPS[i])) return i; } return STEPS.length; }
  function statusOf(index) { var cur = currentIndex(); if (index < cur) return "done"; if (index === cur) return "current"; return "locked"; }

  function el(tag, className, text) { var node = document.createElement(tag); if (className) node.className = className; if (text != null) node.textContent = text; return node; }
  function svg(path, label) { var ns = "http://www.w3.org/2000/svg"; var s = document.createElementNS(ns, "svg"); s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("fill", "none"); s.setAttribute("stroke", "currentColor"); s.setAttribute("stroke-width", "2.5"); s.setAttribute("stroke-linecap", "round"); s.setAttribute("stroke-linejoin", "round"); if (label) { s.setAttribute("role", "img"); s.setAttribute("aria-label", label); } else { s.setAttribute("aria-hidden", "true"); } s.innerHTML = path; return s; }
  function icon(className) { var i = document.createElement("i"); i.className = className; i.setAttribute("aria-hidden", "true"); return i; }

  var ICON_CHECK = '<path d="M5 12l5 5 9-10"/>';
  var ICON_ARROW = '<path d="M5 12h14M13 6l6 6-6 6"/>';
  var ICON_LOCK = '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>';

  function renderSteps() {
    listEl.textContent = "";
    var cur = currentIndex();
    STEPS.forEach(function (step, i) {
      var status = statusOf(i);
      var li = el("li", "pw-ob-step is-" + status);
      li.style.setProperty("--step-color", step.color);
      if (status === "current") li.setAttribute("aria-current", "step");

      var stop = el("span", "pw-ob-stop");
      if (status === "done") { stop.appendChild(svg(ICON_CHECK, "Stap " + (i + 1) + " voltooid")); } 
      else if (status === "locked") { stop.appendChild(svg(ICON_LOCK, "Stap " + (i + 1) + " vergrendeld")); } 
      else { stop.appendChild(icon(step.icon)); }
      li.appendChild(stop);

      var card = el("article", "pw-ob-card");
      var img = el("img"); img.src = step.img; img.alt = ""; img.loading = "lazy"; img.onerror = function () { this.style.display = "none"; }; card.appendChild(img);
      var content = el("div", "pw-ob-card-content");
      var labelText = "Stap " + (i + 1) + (status === "done" ? " · Voltooid" : status === "current" ? " · Hier ben je" : "");
      content.appendChild(el("p", "pw-ob-label", labelText));
      content.appendChild(el("h3", null, step.title));
      content.appendChild(el("p", "pw-ob-text", step.text));
      card.appendChild(content);

      var action = el("div", "pw-ob-action");
      if (status === "current") {
        var btn = el("a", "pw-ob-btn", "Ga verder"); btn.href = step.link; btn.appendChild(svg(ICON_ARROW)); action.appendChild(btn);
      } else if (status === "done") {
        var again = el("a", "pw-ob-linkbtn", "Opnieuw bekijken"); again.href = step.link; action.appendChild(again);
      } else {
        var locked = el("p", "pw-ob-locked"); locked.appendChild(svg(ICON_LOCK)); locked.appendChild(document.createTextNode("Na stap " + i)); action.appendChild(locked);
      }
      card.appendChild(action);
      li.appendChild(card);
      listEl.appendChild(li);
    });
    renderStatus(cur);
    positionTrack(cur);
  }

  function renderStatus(cur) {
    var done = Math.min(cur, STEPS.length);
    progressLabelEl.textContent = done + " van " + STEPS.length + " stappen afgerond";
    barEl.setAttribute("aria-valuenow", String(done));
    barFillEl.style.width = (done / STEPS.length) * 100 + "%";
    badgeEl.textContent = cur >= STEPS.length ? "Klaar voor je eerste dag!" : "Je bent bij stap " + (cur + 1) + "!";
  }

  function positionTrack(cur) {
    if (!viewRouteEl.classList.contains("is-active")) return;
    var stops = listEl.querySelectorAll(".pw-ob-stop");
    if (stops.length < 2) return;
    var base = routeEl.getBoundingClientRect();
    var first = stops[0].getBoundingClientRect();
    var last = stops[stops.length - 1].getBoundingClientRect();
    var target = stops[Math.min(cur, stops.length - 1)].getBoundingClientRect();
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
      trackFillEl.style.left = x + "px"; trackFillEl.style.top = y1 + "px";
    } else {
      var y = first.top + first.height / 2 - base.top - size / 2;
      var x1 = first.left + first.width / 2 - base.left;
      var x2 = last.left + last.width / 2 - base.left;
      var xt = target.left + target.width / 2 - base.left;
      setBox(trackEl, x1, y, x2 - x1, size);
      setBox(trackFillEl, 0, 0, Math.max(0, xt - x1), size);
      trackFillEl.style.left = x1 + "px"; trackFillEl.style.top = y + "px";
    }
  }
  function setBox(node, left, top, width, height) { node.style.left = left + "px"; node.style.top = top + "px"; node.style.width = width + "px"; node.style.height = height + "px"; }

  function setView(view) {
    var isRoute = view === "route";
    viewRouteEl.classList.toggle("is-active", isRoute);
    viewPraatplaatEl.classList.toggle("is-active", !isRoute);
    viewBtns.forEach(function (b) {
      var active = b.dataset.view === view;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
    if (isRoute) { setTimeout(function () { positionTrack(currentIndex()); }, 50); }
    try { window.localStorage.setItem(VIEW_KEY, view); } catch (e) {}
  }
  viewBtns.forEach(function (b) { b.addEventListener("click", function () { setView(b.dataset.view); }); });
  try { var savedView = window.localStorage.getItem(VIEW_KEY); if (savedView === "praatplaat") setView("praatplaat"); } catch (e) {}

  resetEl.addEventListener("click", function () {
    if(confirm("Weet je zeker dat je alle voortgang wilt wissen?")) {
        state = { checked: {}, quiz: {} }; saveState(); renderSteps();
    }
  });
  var resizeTimer;
  window.addEventListener("resize", function () { clearTimeout(resizeTimer); resizeTimer = setTimeout(function () { positionTrack(currentIndex()); }, 100); });
  window.addEventListener("load", function () { positionTrack(currentIndex()); });
  renderSteps();

  /* ---------- Welkomst-dia Slideshow ---------- */
  var welcomeEl = document.getElementById("pw-welcome");
  var slide1 = document.getElementById("pw-slide-1");
  var slide2 = document.getElementById("pw-slide-2");
  var btnNext = document.getElementById("pw-slide-next");
  var welcomeStartBtn = document.getElementById("pw-welcome-start");
  var welcomePlaatBtn = document.getElementById("pw-welcome-plaat");

  function showWelcome() {
    if (!welcomeEl) return;
    if(slide1) slide1.classList.add("is-active");
    if(slide2) slide2.classList.remove("is-active");
    welcomeEl.classList.add("is-visible");
    document.body.style.overflow = "hidden";
  }
  function hideWelcome() {
    if (!welcomeEl) return;
    welcomeEl.classList.remove("is-visible");
    document.body.style.overflow = "";
  }
  showWelcome();
  if (btnNext) { btnNext.addEventListener("click", function () { slide1.classList.remove("is-active"); slide2.classList.add("is-active"); }); }
  if (welcomeStartBtn) {
    welcomeStartBtn.addEventListener("click", function () {
      hideWelcome(); setView("route");
      var firstStep = listEl.querySelector(".pw-ob-step.is-current");
      if (firstStep) { setTimeout(function() { firstStep.scrollIntoView({ behavior: "smooth", block: "center" }); }, 300); }
    });
  }
  if (welcomePlaatBtn) { welcomePlaatBtn.addEventListener("click", function () { hideWelcome(); setView("praatplaat"); }); }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && welcomeEl && welcomeEl.classList.contains("is-visible")) { hideWelcome(); } });
})();