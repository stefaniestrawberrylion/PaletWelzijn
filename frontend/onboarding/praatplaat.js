/* =========================================================
   Palet Welzijn - Interactieve praatplaat met voice-over
   ========================================================= */
(function () {
  "use strict";

  var root = document.querySelector(".pw-onboarding");
  if (!root) return;

  var stage = root.querySelector("#pw-ob-praatplaat-stage");
  if (!stage) return;

  /* ---------------------------------------------------------
     1. HOTSPOTS
     ---------------------------------------------------------
     x = % vanaf links  (0 = links, 100 = rechts)
     y = % vanaf boven  (0 = boven, 100 = onder)

     1 t/m 10   = de genummerde stappen
     11 t/m 18  = "wat brengt het jou" (8 items, linksonder)

     ⚠ audio staat nu op test.mp3 (placeholder)
     --------------------------------------------------------- */
  var HOTSPOTS = [
    /* ===== Nummers 1 t/m 10 ===== */
    { id: "stap-01",  x: 4.4,  y: 32.1, label: "Stap 1",                     audio: "../../assets/audio/punt1.mp3", color: "#120a5c" },
    { id: "stap-02",  x: 12.8, y: 50.9, label: "Stap 2",                     audio: "../../assets/audio/test.mp3", color: "#120a5c" },
    { id: "stap-03",  x: 12.4, y: 61.5, label: "Stap 3",                     audio: "../../assets/audio/test.mp3", color: "#120a5c" },
    { id: "stap-04",  x: 75.5, y: 13.8, label: "Stap 4",                     audio: "../../assets/audio/test.mp3", color: "#120a5c" },
    { id: "stap-05",  x: 75.7, y: 21.7, label: "Stap 5",                     audio: "../../assets/audio/test.mp3", color: "#120a5c" },
    { id: "stap-06",  x: 75.7, y: 29.9, label: "Stap 6",                     audio: "../../assets/audio/test.mp3", color: "#120a5c" },
    { id: "stap-07",  x: 75.7, y: 43.0, label: "Stap 7",                     audio: "../../assets/audio/test.mp3", color: "#120a5c" },
    { id: "stap-08",  x: 76.4, y: 53.1, label: "Stap 8",                     audio: "../../assets/audio/test.mp3", color: "#120a5c" },
    { id: "stap-09",  x: 76.6, y: 68.9, label: "Stap 9",                     audio: "../../assets/audio/test.mp3", color: "#120a5c" },
    { id: "stap-10",  x: 76.7, y: 80.0, label: "Stap 10",                    audio: "../../assets/audio/test.mp3", color: "#120a5c" },

    /* ===== Wat brengt het jou (8 items) ===== */
    { id: "brengt-01", x: 6.7,  y: 82.3, label: "Wat brengt het jou – 1",    audio: "../../assets/audio/test.mp3", color: "#C2410C" },
    { id: "brengt-02", x: 14.2, y: 81.8, label: "Wat brengt het jou – 2",    audio: "../../assets/audio/test.mp3", color: "#C2410C" },
    { id: "brengt-03", x: 20.8, y: 80.5, label: "Wat brengt het jou – 3",    audio: "../../assets/audio/test.mp3", color: "#C2410C" },
    { id: "brengt-04", x: 26.8, y: 81.3, label: "Wat brengt het jou – 4",    audio: "../../assets/audio/test.mp3", color: "#C2410C" },
    { id: "brengt-05", x: 6.3,  y: 91.1, label: "Wat brengt het jou – 5",    audio: "../../assets/audio/test.mp3", color: "#C2410C" },
    { id: "brengt-06", x: 14.3, y: 91.9, label: "Wat brengt het jou – 6",    audio: "../../assets/audio/test.mp3", color: "#C2410C" },
    { id: "brengt-07", x: 21.7, y: 89.7, label: "Wat brengt het jou – 7",    audio: "../../assets/audio/test.mp3", color: "#C2410C" },
    { id: "brengt-08", x: 27.6, y: 89.9, label: "Wat brengt het jou – 8",    audio: "../../assets/audio/test.mp3", color: "#C2410C" }
  ];

  /* ---------------------------------------------------------
     2. State
     --------------------------------------------------------- */
  var items = [];            // { btn, audio, data }
  var activeId = null;
  var currentAudio = null;

  /* ---------------------------------------------------------
     3. Hotspots bouwen (één keer)
     --------------------------------------------------------- */
  function buildHotspots() {
    if (stage.querySelector(".pw-ob-hotspot")) return; // al gebouwd

    HOTSPOTS.forEach(function (data, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pw-ob-hotspot";
      btn.style.left = data.x + "%";
      btn.style.top = data.y + "%";
      btn.style.setProperty("--hs-color", data.color);
      btn.setAttribute("aria-label", "Speel audio af: " + data.label);
      btn.setAttribute("aria-pressed", "false");
      btn.dataset.hotspotId = data.id;

      

      // tooltip
      var tip = document.createElement("span");
      tip.className = "pw-ob-hotspot-tip";
      tip.textContent = data.label;
      btn.appendChild(tip);

      // audio
      var audio = new Audio();
      audio.preload = "none";
      audio.src = data.audio;

      audio.addEventListener("ended", function () { clearActive(data.id); });
      audio.addEventListener("error", function () {
        console.warn("[praatplaat] Audio niet gevonden:", data.audio);
        clearActive(data.id);
      });

      btn.addEventListener("click", function (e) {
        e.preventDefault();
        toggleHotspot(data.id);
      });

      stage.appendChild(btn);
      items.push({ btn: btn, audio: audio, data: data });
    });
  }

  /* ---------------------------------------------------------
     4. Afspelen / stoppen
     --------------------------------------------------------- */
  function toggleHotspot(id) {
    if (activeId === id) { stopAll(); return; }
    stopAll();

    var item = items.find(function (it) { return it.data.id === id; });
    if (!item) return;

    activeId = id;
    currentAudio = item.audio;
    item.btn.classList.add("is-playing");
    item.btn.setAttribute("aria-pressed", "true");

    try { currentAudio.currentTime = 0; } catch (e) {}

    var p = currentAudio.play();
    if (p && typeof p.catch === "function") {
      p.catch(function (err) {
        console.warn("[praatplaat] Kan audio niet afspelen:", err);
        clearActive(id);
      });
    }
  }

  function clearActive(id) {
    var item = items.find(function (it) { return it.data.id === id; });
    if (item) {
      item.btn.classList.remove("is-playing");
      item.btn.setAttribute("aria-pressed", "false");
    }
    if (activeId === id) { activeId = null; currentAudio = null; }
  }

  function stopAll() {
    items.forEach(function (it) {
      try { it.audio.pause(); it.audio.currentTime = 0; } catch (e) {}
      it.btn.classList.remove("is-playing");
      it.btn.setAttribute("aria-pressed", "false");
    });
    activeId = null;
    currentAudio = null;
  }

  /* ---------------------------------------------------------
     5. Reageren op view-wissel / modal / tab / reset
     --------------------------------------------------------- */
  function isVisible() {
    var v = root.querySelector("#pw-ob-view-praatplaat");
    return v && v.classList.contains("is-active");
  }

  document.addEventListener("pw:viewchange", function (e) {
    if (e.detail && e.detail.view === "praatplaat") buildHotspots();
    else stopAll();
  });

  // Fallback (werkt ook zonder het event in onboarding.js)
  root.querySelectorAll(".pw-ob-viewbtn").forEach(function (b) {
    b.addEventListener("click", function () {
      if (b.dataset.view === "praatplaat") setTimeout(buildHotspots, 50);
      else stopAll();
    });
  });

  document.addEventListener("pw:modalopen", stopAll);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stopAll();
  });
  var resetBtn = root.querySelector("#pw-ob-reset");
  if (resetBtn) resetBtn.addEventListener("click", stopAll);

  // Als de pagina al op praatplaat begint
  if (isVisible()) buildHotspots();

  // Handig voor debuggen: pwPraatplaat.play("stap-01")
  window.pwPraatplaat = {
    play: function (id) { toggleHotspot(id); },
    stop: stopAll,
    ids: function () { return items.map(function (it) { return it.data.id; }); }
  };
})();