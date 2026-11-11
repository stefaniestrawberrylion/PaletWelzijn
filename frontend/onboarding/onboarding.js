/* =========================================================
   Palet Welzijn - Onboarding
   5 stappen, welkom-overlay, upload, confetti
   Deelt localStorage met beleid.js (zelfde STORAGE_KEY, zelfde taken, zelfde quiz-check)
   ========================================================= */
(function () {
  "use strict";

  var STEPS = [
    {
      id: "welkom",
      title: "Welkom - fijn dat je er bent!",
      text: "Maak kennis met Palet Welzijn en wat jij als vrijwilliger betekent.",
      img: "../../assets/welkom.png",
      alt: "Welkom",
      icon: "fa-regular fa-hand",
      color: "#120a5c",
      link: "../beleid/beleid.html",
      tasks: [
        "Ik weet wie Palet Welzijn is en wat onze droom en missie zijn",
        "Ik weet dat ik kan kiezen uit verschillende vrijwilligersrollen"
      ],
      quizzes: [{}, {}]              // beleid heeft 2 vragen
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
      tasks: [
        "Ik weet wat vrijwilligerswerk mij oplevert (plezier, voldoening, contacten)",
        "Ik weet welke extra's ik van Palet Welzijn krijg"
      ],
      quizzes: []                    // geen quiz
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
      tasks: [
        "Ik ken de gedragscode van Palet Welzijn",
        "Wat ik over clienten hoor of zie, blijft geheim, ook na mijn vrijwilligerswerk",
        "Ik doe geen medische of verpleegtechnische handelingen",
        "Ik weet wat gepaste kleding is tijdens mijn vrijwilligerswerk"
      ],
      quizzes: [{}, {}, {}, {}]      // beleid heeft 4 vragen
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
      tasks: [
        "Ik weet dat mijn contactpersoon mijn eerste aanspreekpunt is",
        "Ik ken de vertrouwenslijn: 088 - 144 0200",
        "Ik weet dat ik via Palet Welzijn verzekerd ben voor ongevallen en aansprakelijkheid"
      ],
      quizzes: [{}]                  // beleid heeft 1 vraag
    },
    {
      id: "aanmelding",
      title: "Aanmelding & tot slot",
      text: "Je checklist, VOG, overeenkomst en samen maken we het verschil.",
      img: "../../assets/start.png",
      alt: "Aanmelding",
      icon: "fa-solid fa-flag-checkered",
      color: "#0F766E",
      link: "../beleid/beleid.html",
      tasks: [
        "Ik heb de checklist doorlopen (kennismaking, VOG, overeenkomst, afspraken)",
        "Ik heb mijn gratis VOG aangevraagd en laten zien aan mijn contactpersoon",
        "Ik heb mijn vrijwilligersovereenkomst ingevuld en ondertekend",
        "Ik weet dat ik altijd in gesprek kan over wat bij mij past",
        "Ik weet hoe ik Palet Welzijn kan bereiken voor vragen of aanmeldingen"
      ],
      quizzes: [{}, {}, {}]          // beleid heeft 3 vragen
    }
  ];

  var STORAGE_KEY = "pw-onboarding-v7";   // ← zelfde als beleid.js
  var VIEW_KEY = "pw-onboarding-view";
  var WELKOM_KEY = "pw-welkom-gezien";
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

  var praatplaatCta = root.querySelector("#pw-ob-praatplaat-cta");
  var routeCta = root.querySelector("#pw-ob-route-cta");
  var praatplaatCtaWrap = root.querySelector("#pw-ob-praatplaat-cta-wrap");
  var routeCtaWrap = root.querySelector("#pw-ob-route-cta-wrap");

  var welkomEl = document.getElementById("pw-welkom");
  var welkomStartBtns = welkomEl ? welkomEl.querySelectorAll("[data-start]") : [];

  var modalEl = document.getElementById("pw-ob-modal");
  var modalX = document.getElementById("pw-ob-modal-x");
  var finishGrid = document.getElementById("pw-ob-finish-grid");
  var block1 = document.getElementById("pw-ob-finish-block1");
  var block2 = document.getElementById("pw-ob-finish-block2");
  var block3 = document.getElementById("pw-ob-finish-block3");
  var lockOverlay = document.getElementById("pw-ob-finish-lock-overlay");
  var contactForm = document.getElementById("pw-ob-contactform");

  var uploadBox = document.getElementById("pw-ob-upload-box");
  var uploadInput = document.getElementById("pw-ob-upload");
  var uploadStatus = document.getElementById("pw-ob-upload-status");

  var confettiCanvas = document.getElementById("pw-ob-confetti");

  /* ---------- Opslag ---------- */
  function loadState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          return { checked: parsed.checked || {}, quiz: parsed.quiz || {} };
        }
      }
    } catch (e) {}
    return { checked: {}, quiz: {} };
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

  // Taken + quiz samen bepalen of een stap klaar is (net als beleid.js)
  function isDone(step) {
    var tasksDone = checkedFor(step).every(Boolean);
    if (!tasksDone) return false;
    if (!step.quizzes || step.quizzes.length === 0) return true;

    var answers = state.quiz[step.id];
    if (!Array.isArray(answers)) return false;
    return step.quizzes.every(function (_, i) { return answers[i] === true; });
  }

  function currentIndex() {
    for (var i = 0; i < STEPS.length; i++) {
      if (!isDone(STEPS[i])) return i;
    }
    return STEPS.length;
  }
  function statusOf(index) {
    var cur = currentIndex();
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

  /* ---------- Kaarten ---------- */
  function renderSteps() {
    listEl.textContent = "";
    var cur = currentIndex();

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

      var banner = el("div", "pw-ob-card-banner");
      var img = el("img");
      img.src = step.img;
      img.alt = step.alt;
      img.loading = "lazy";
      img.onerror = function () {
        this.style.display = "none";
        if (!banner.querySelector(".pw-ob-card-banner-fallback")) {
          var fb = el("div", "pw-ob-card-banner-fallback");
          fb.appendChild(icon(step.icon));
          banner.appendChild(fb);
        }
      };
      banner.appendChild(img);
      card.appendChild(banner);

      var content = el("div", "pw-ob-card-content");

      var labelText = "Stap " + (i + 1);
      if (status === "done") labelText += " - Voltooid";
      if (status === "current") labelText += " - Hier ben je";
      if (i === STEPS.length - 1 && status !== "done") labelText += " - Finish";

      content.appendChild(el("p", "pw-ob-label", labelText));
      content.appendChild(el("h3", null, step.title));
      content.appendChild(el("p", "pw-ob-text", step.text));
      card.appendChild(content);

      var action = el("div", "pw-ob-action");
      if (status === "current") {
        var btn = el("a", "pw-ob-btn", "Ga verder");
        btn.href = BELEID_URL + "#" + step.id;
        btn.appendChild(svg(ICON_ARROW));
        action.appendChild(btn);
      } else if (status === "done") {
        var again = el("a", "pw-ob-linkbtn", "Opnieuw bekijken");
        again.href = BELEID_URL + "#" + step.id;
        action.appendChild(again);
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

    renderStatus(cur);
    updateCtaVisibility(cur);
    positionTrack(cur);
  }

  function renderStatus(cur) {
    var done = Math.min(cur, STEPS.length);
    progressLabelEl.textContent = done + " van " + STEPS.length + " stappen afgerond";
    barEl.setAttribute("aria-valuenow", String(done));
    barEl.setAttribute("aria-valuemax", String(STEPS.length));
    barFillEl.style.width = (done / STEPS.length) * 100 + "%";
    badgeEl.textContent = cur >= STEPS.length
      ? "Klaar voor je eerste dag!"
      : "Je bent bij stap " + (cur + 1) + "!";
  }

  function updateCtaVisibility(cur) {
    var allDone = cur >= STEPS.length;
    if (routeCtaWrap) routeCtaWrap.style.display = allDone ? "" : "none";
    if (praatplaatCtaWrap) praatplaatCtaWrap.style.display = allDone ? "" : "none";
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
  document.dispatchEvent(new CustomEvent("pw:viewchange", { detail: { view: view } }));

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

  /* ---------- Welkom overlay ---------- */
  function openWelkom() {
    if (!welkomEl) return;
    welkomEl.hidden = false;
    document.body.style.overflow = "hidden";
    var first = welkomEl.querySelector("[data-start]");
    if (first) setTimeout(function () { first.focus(); }, 60);
  }
  function closeWelkom(startView) {
    if (!welkomEl) return;
    welkomEl.hidden = true;
    document.body.style.overflow = "";
    try { window.localStorage.setItem(WELKOM_KEY, "1"); } catch (e) {}

    if (startView === "visueel") setView("praatplaat");
    else if (startView === "tekstueel") setView("route");
  }

  welkomStartBtns.forEach(function (b) {
    b.addEventListener("click", function () { closeWelkom(b.dataset.start); });
  });

  var welkomGezien = false;
  try { welkomGezien = window.localStorage.getItem(WELKOM_KEY) === "1"; } catch (e) {}
  if (!welkomGezien) openWelkom();

  /* ---------- Modal ---------- */
  var lastFocused = null;

  function resetModalState() {
    if (finishGrid) finishGrid.style.display = "";
    if (block1) block1.classList.remove("pw-ob-finish-block--hidden");
    if (block2) block2.classList.add("is-locked");
    if (lockOverlay) lockOverlay.style.display = "flex";
    if (block3) block3.classList.add("pw-ob-finish-block--hidden");
    if (modalX) modalX.style.display = "";
    if (contactForm) contactForm.reset();
    if (uploadInput) uploadInput.value = "";
    if (uploadBox) uploadBox.classList.remove("has-file", "is-dragover");
    if (uploadStatus) {
      uploadStatus.textContent = "";
      uploadStatus.className = "pw-ob-upload-status";
    }
    stopConfetti();
  }

  function openModal() {
    if (!modalEl) return;
    document.dispatchEvent(new CustomEvent("pw:modalopen"));
    lastFocused = document.activeElement;
    resetModalState();
    modalEl.hidden = false;
    document.body.style.overflow = "hidden";

    setTimeout(function () {
      var firstBtn = modalEl.querySelector(".pw-ob-finish-btn--outline");
      if (firstBtn) firstBtn.focus();
    }, 50);

    document.addEventListener("keydown", onModalKeydown);
  }

  function closeModal() {
    if (!modalEl) return;
    modalEl.hidden = true;
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onModalKeydown);
    stopConfetti();
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  function onModalKeydown(e) {
    if (e.key === "Escape") closeModal();
  }

  if (modalEl) {
    modalEl.addEventListener("click", function (e) {
      var t = e.target;
      if (t && t.getAttribute && t.getAttribute("data-close") === "true") closeModal();
    });
  }

  /* ---------- Upload van ondertekende overeenkomst ---------- */
  function isPdf(file) {
    if (!file) return false;
    var name = (file.name || "").toLowerCase();
    return file.type === "application/pdf" || name.endsWith(".pdf");
  }

  function handleUpload(file) {
    if (!uploadStatus || !block2 || !lockOverlay) return;
    if (!file) {
      uploadStatus.textContent = "Geen bestand gekozen.";
      uploadStatus.className = "pw-ob-upload-status is-err";
      return;
    }
    if (!isPdf(file)) {
      uploadStatus.textContent = "Alleen PDF-bestanden zijn toegestaan.";
      uploadStatus.className = "pw-ob-upload-status is-err";
      if (uploadBox) uploadBox.classList.remove("has-file");
      block2.classList.add("is-locked");
      lockOverlay.style.display = "flex";
      return;
    }
    var kb = Math.round(file.size / 1024);
    uploadStatus.textContent = "Bestand geupload: " + file.name + " (" + kb + " KB). Je kunt nu het formulier invullen.";
    uploadStatus.className = "pw-ob-upload-status is-ok";
    if (uploadBox) uploadBox.classList.add("has-file");
    block2.classList.remove("is-locked");
    lockOverlay.style.display = "none";
    setTimeout(function () {
      if (block2) block2.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 80);
  }

  if (uploadInput) {
    uploadInput.addEventListener("change", function () {
      handleUpload(uploadInput.files && uploadInput.files[0]);
    });
  }

  if (uploadBox) {
    ["dragenter", "dragover"].forEach(function (evt) {
      uploadBox.addEventListener(evt, function (e) {
        e.preventDefault();
        uploadBox.classList.add("is-dragover");
      });
    });
    ["dragleave", "drop"].forEach(function (evt) {
      uploadBox.addEventListener(evt, function (e) {
        e.preventDefault();
        uploadBox.classList.remove("is-dragover");
      });
    });
    uploadBox.addEventListener("drop", function (e) {
      var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if (f && uploadInput) {
        uploadInput.files = e.dataTransfer.files;
        handleUpload(f);
      }
    });
  }

  /* ---------- Formulier versturen -> confetti ---------- */
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      if (finishGrid) finishGrid.style.display = "none";
      if (block3) block3.classList.remove("pw-ob-finish-block--hidden");
      if (modalX) modalX.style.display = "none";

      setTimeout(function () {
        var c = block3.querySelector(".pw-ob-modal-btn");
        if (c) c.focus();
        startConfetti(6000);
      }, 100);
    });
  }

  /* ---------- CTA knoppen ---------- */
  if (praatplaatCta) praatplaatCta.addEventListener("click", openModal);
  if (routeCta) routeCta.addEventListener("click", openModal);

  /* ---------- Confetti ---------- */
  var confettiRAF = null;
  var confettiStopTimer = null;

  function stopConfetti() {
    if (confettiRAF) { cancelAnimationFrame(confettiRAF); confettiRAF = null; }
    if (confettiStopTimer) { clearTimeout(confettiStopTimer); confettiStopTimer = null; }
    if (confettiCanvas) {
      var ctx = confettiCanvas.getContext("2d");
      if (ctx) ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  function startConfetti(duration) {
    if (!confettiCanvas) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    stopConfetti();

    var ctx = confettiCanvas.getContext("2d");
    var box = confettiCanvas.parentElement;

    function size() {
      var rect = box.getBoundingClientRect();
      var dpr = window.devicePixelRatio || 1;
      confettiCanvas.width = Math.max(1, Math.floor(rect.width * dpr));
      confettiCanvas.height = Math.max(1, Math.floor(rect.height * dpr));
      confettiCanvas.style.width = rect.width + "px";
      confettiCanvas.style.height = rect.height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();

    var W = function () { return confettiCanvas.width / (window.devicePixelRatio || 1); };
    var H = function () { return confettiCanvas.height / (window.devicePixelRatio || 1); };

    var colors = ["#120a5c", "#008241", "#0055ff", "#4d88ff", "#F2C230", "#ffffff"];
    var pieces = [];
    var spawnEnd = Math.min(duration - 1500, 4000);
    var start = performance.now();

    function spawn() {
      var w = W();
      pieces.push({
        x: Math.random() * w,
        y: -10 - Math.random() * 40,
        vx: (Math.random() - 0.5) * 60,
        vy: 60 + Math.random() * 120,
        size: 5 + Math.random() * 6,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        sway: Math.random() * Math.PI * 2,
        swaySpeed: 1 + Math.random() * 2,
        shape: Math.random() < 0.5 ? "rect" : "strip"
      });
    }

    var last = start;
    function frame(now) {
      var elapsed = now - start;
      var dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      if (elapsed < spawnEnd) {
        for (var i = 0; i < 3; i++) spawn();
      }

      var w = W();
      var h = H();
      ctx.clearRect(0, 0, w, h);

      for (var p = pieces.length - 1; p >= 0; p--) {
        var it = pieces[p];
        it.sway += it.swaySpeed * dt;
        it.vx += Math.sin(it.sway) * 20 * dt;
        it.vy += 90 * dt;
        it.x += it.vx * dt;
        it.y += it.vy * dt;
        it.rot += it.vr * dt;

        if (it.y > h + 20) { pieces.splice(p, 1); continue; }

        ctx.save();
        ctx.translate(it.x, it.y);
        ctx.rotate(it.rot);
        ctx.fillStyle = it.color;
        if (it.shape === "rect") {
          ctx.fillRect(-it.size / 2, -it.size / 2, it.size, it.size * 0.6);
        } else {
          ctx.fillRect(-it.size / 2, -it.size / 4, it.size, it.size * 0.35);
        }
        ctx.restore();
      }

      if (elapsed < duration || pieces.length > 0) {
        confettiRAF = requestAnimationFrame(frame);
      } else {
        ctx.clearRect(0, 0, w, h);
        confettiRAF = null;
      }
    }

    confettiRAF = requestAnimationFrame(frame);
    confettiStopTimer = setTimeout(function () {
      if (confettiRAF) { cancelAnimationFrame(confettiRAF); confettiRAF = null; }
      if (confettiCanvas) {
        var cx = confettiCanvas.getContext("2d");
        if (cx) cx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      }
    }, duration + 100);
  }

  /* ---------- Reset ---------- */
  if (resetEl) {
    resetEl.addEventListener("click", function () {
      var ok = window.confirm("Weet je zeker dat je alle voortgang wilt wissen en opnieuw wilt beginnen?");
      if (!ok) return;
      state = { checked: {}, quiz: {} };
      saveState();
      renderSteps();
      try { window.localStorage.removeItem(WELKOM_KEY); } catch (e) {}
      openWelkom();
    });
  }

  /* ---------- Cross-tab / bfcache sync ---------- */
  window.addEventListener("storage", function (e) {
    if (e.key === STORAGE_KEY) {
      state = loadState();
      renderSteps();
    }
  });
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      state = loadState();
      renderSteps();
    }
  });

  /* ---------- Resize ---------- */
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { positionTrack(currentIndex()); }, 100);
  });
  window.addEventListener("load", function () { positionTrack(currentIndex()); });

  renderSteps();
})();