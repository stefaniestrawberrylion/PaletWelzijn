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
     1. HOTSPOTS  ← pas hier de x/y aan op jouw praatplaat
     ---------------------------------------------------------
     x = % vanaf links  (0 = links, 100 = rechts)
     y = % vanaf boven  (0 = boven, 100 = onder)
     --------------------------------------------------------- */
  var HOTSPOTS = [
    { id: "welkom",     x: 18, y: 22, label: "Welkom bij Palet Welzijn",           audio: "../../assets/audio/test.mp3",     color: "#120a5c" },
    { id: "voor-jou",   x: 50, y: 15, label: "Wat brengt vrijwilligerswerk jou?",  audio: "../../assets/audio/test.mp3",   color: "#C2410C" },
    { id: "afspraken",  x: 82, y: 22, label: "Wat verwachten wij van jou?",        audio: "../../assets/audio/test.mp3",  color: "#008241" },
    { id: "veiligheid", x: 30, y: 65, label: "Veiligheid",                          audio: "../../assets/audio/test.mp3", color: "#92278F" },
    { id: "aanmelding", x: 70, y: 65, label: "Aanmelding & tot slot",              audio: "../../assets/audio/test.mp3", color: "#0F766E" }
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

      // nummer in de knop
      var num = document.createElement("span");
      num.className = "pw-ob-hotspot-num";
      num.textContent = String(i + 1);
      btn.appendChild(num);

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

  // Handig voor debuggen in de console: pwPraatplaat.play("welkom")
  window.pwPraatplaat = {
    play: function (id) { toggleHotspot(id); },
    stop: stopAll,
    ids: function () { return items.map(function (it) { return it.data.id; }); }
  };
})();