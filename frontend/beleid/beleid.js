/* =========================================================
   Palet Welzijn - Beleid & Onboarding
   5 stappen | 14 controle-vragen

   Functionaliteiten:
   - Informatie per stap
   - Afvinkbare taken
   - Meerdere quizvragen per stap
   - Feedback en uitleg per vraag
   - Voortgang opslaan in localStorage
   - Stappen worden na afronding ontgrendeld
   - Scrollbare inhoud via CSS
   - URL-hash ondersteuning
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     1. STAPPEN EN INHOUD
     ========================================================= */

    var STEPS = [

    /* -------------------------------------------------------
       STAP 1 - WELKOM
       Vragen 1 en 2
       ------------------------------------------------------- */

    {
      id: "welkom",
      title: "Welkom",
      text: "Maak kennis met Palet Welzijn en wat jij als vrijwilliger betekent.",
      img: "../../assets/welkom.png",
      alt: "Welkom",
      icon: "fa-regular fa-hand",
      color: "#120a5c",
      link: "../onboarding/onboarding.html",

      body: [
        {
          type: "p",
          text: "Palet Welzijn is een organisatie zonder winstoogmerk die zich inzet voor een samenleving waarin we met oprechte belangstelling naar elkaar omkijken. We versterken sociale netwerken, houden mensen actief en stellen professionele zorg waar mogelijk uit. Dat doen we samen met maatschappelijke organisaties en gemeenten in Midden-Holland."
        },
        {
          type: "p",
          text: "Vrijwilligers zijn daarbij onmisbaar. Met jouw tijd, aandacht en betrokkenheid maak je écht verschil: een gezellig gesprek, samen een kop koffie drinken, een wandeling maken of iemand de ruimte geven om even op adem te komen."
        },
        {
          type: "p",
          text: "Bij Palet Welzijn zijn meer dan 1.300 vrijwilligers actief — in de wijk, op woonzorglocaties en binnen verschillende onderdelen van het sociaal domein. Jij bent daar vanaf vandaag onderdeel van. Welkom!"
        }
      ],

      tasks: [
        "Ik weet wie Palet Welzijn is en wat onze droom en missie zijn",
        "Ik weet dat ik één van de ruim 1.300 vrijwilligers ben"
      ],

      quizzes: [
        {
          question: "Welke kenmerken heeft vrijwilligerswerk bij Palet Welzijn?",

          options: [
            {
              label: "A. Het is verplicht, onbetaald, binnen een organisatie en met een maatschappelijk doel",
              ok: false
            },
            {
              label: "B. Je doet het uit vrije wil, tegen een kleine vergoeding en met een maatschappelijk doel",
              ok: false
            },
            {
              label: "C. Je doet het uit vrije wil, het is onbetaald, het vindt plaats in een georganiseerde omgeving en het heeft een maatschappelijk doel",
              ok: true
            },
            {
              label: "D. Je doet het in je eigen tijd, zonder afspraken en voor een organisatie naar keuze",
              ok: false
            }
          ],

          explanation: "Dit zijn de vier kenmerken van vrijwilligerswerk: je doet het vrijwillig, onbetaald, in een georganiseerde omgeving en met een maatschappelijk doel."
        },

        {
          question: "Wat is typisch voor een projectvrijwilliger?",

          options: [
            {
              label: "A. Hij of zij bezoekt iemand thuis zodat de mantelzorger even tijd voor zichzelf heeft",
              ok: false
            },
            {
              label: "B. Hij of zij helpt mee aan een tijdelijk project met een duidelijk begin en einde",
              ok: true
            },
            {
              label: "C. Hij of zij is vooral gastheer of gastvrouw in een wijkcentrum",
              ok: false
            },
            {
              label: "D. Hij of zij is altijd chauffeur voor het seniorenvervoer",
              ok: false
            }
          ],

          explanation: "Een project heeft een duidelijk begin en een einde. Je weet dus vooraf wat er van je wordt verwacht en voor welke periode."
        }
      ]
    },


    /* -------------------------------------------------------
       STAP 2 - JE START
       Vragen 3, 4, 11 en 12
       ------------------------------------------------------- */

    {
      id: "start",
      title: "Je start",
      text: "Je contactpersoon, je VOG en je vrijwilligersovereenkomst.",
      img: "../../assets/start.png",
      alt: "Je start",
      icon: "fa-regular fa-file-lines",
      color: "#0055ff",
      link: "../onboarding/onboarding.html",

      body: [
        {
          type: "p",
          text: "Je start met een informeel kennismakingsgesprek met de contactpersoon vrijwilligers van de locatie of dienst. Jullie bespreken de rol waarin je geïnteresseerd bent, je motivatie en ervaring. Je mag alle vragen stellen. Als je dat prettig vindt, kun je ook een keer meelopen op locatie."
        },
        {
          type: "p",
          text: "Samen bekijken we of de rol bij jouw wensen, interesses en mogelijkheden past. Omdat je werkt met kwetsbare mensen, vragen we iedere vrijwilliger om een Verklaring Omtrent het Gedrag (VOG). Je ontvangt van Palet Welzijn een digitale link waarmee je de VOG kosteloos kunt aanvragen. Zodra je hem hebt ontvangen, laat je hem zien aan jouw contactpersoon. De VOG blijft jouw eigendom."
        },
        {
          type: "p",
          text: "Daarnaast ontvang je een vrijwilligersovereenkomst. Deze lees je door, vul je in en onderteken je. Dit is nodig voor je aanmelding en verzekering. Soms spreken we eerst een proefperiode af, zodat jullie samen kunnen ervaren of de samenwerking en de rol goed passen."
        }
      ],

      tasks: [
        "Ik heb een kennismakingsgesprek gehad met mijn contactpersoon",
        "Ik heb mijn gratis VOG aangevraagd en laten zien aan mijn contactpersoon",
        "Ik heb mijn vrijwilligersovereenkomst ingevuld en ondertekend"
      ],

      quizzes: [
        {
          question: "Wat doe je met je VOG nadat je hem hebt ontvangen?",

          options: [
            {
              label: "A. Je stuurt hem op naar de vertrouwenspersoon",
              ok: false
            },
            {
              label: "B. Je geeft hem aan Palet Welzijn, die hem bewaart",
              ok: false
            },
            {
              label: "C. Je betaalt de kosten en dient hem later in",
              ok: false
            },
            {
              label: "D. Je laat hem zien aan je contactpersoon. De VOG blijft van jou",
              ok: true
            }
          ],

          explanation: "De VOG vraag je kosteloos aan via een digitale link van Palet Welzijn. De VOG blijft jouw eigendom."
        },

        {
          question: "Je overweegt te stoppen met je vrijwilligerswerk. Wat is de beste eerste stap?",

          options: [
            {
              label: "A. Het eerst bespreken met je contactpersoon, zodat jullie samen kunnen kijken naar een andere rol, locatie of aangepaste inzet",
              ok: true
            },
            {
              label: "B. Gewoon niet meer komen",
              ok: false
            },
            {
              label: "C. Wachten tot het gesprek na een paar maanden",
              ok: false
            },
            {
              label: "D. Een bericht sturen aan de cliënt",
              ok: false
            }
          ],

          explanation: "Als stoppen de beste keuze is, bespreken jullie samen hoe je je vrijwilligerswerk op een goede manier afrondt."
        },

        {
          question: "Wanneer ben je officieel aangemeld als vrijwilliger?",

          options: [
            {
              label: "A. Direct na het kennismakingsgesprek",
              ok: false
            },
            {
              label: "B. Zodra je de VOG hebt aangevraagd",
              ok: false
            },
            {
              label: "C. Wanneer alles op de checklist is geregeld, inclusief de ondertekende overeenkomst",
              ok: true
            },
            {
              label: "D. Na afloop van de proefperiode",
              ok: false
            }
          ],

          explanation: "Pas als alles geregeld is, inclusief de ondertekende vrijwilligersovereenkomst, ben je officieel aangemeld."
        },

        {
          question: "Welk onderdeel staat op de checklist?",

          options: [
            {
              label: "A. Een EHBO-diploma",
              ok: false
            },
            {
              label: "B. Referenties van twee oud-werkgevers",
              ok: false
            },
            {
              label: "C. Een medische keuring",
              ok: false
            },
            {
              label: "D. Afspraken over je start en begeleiding",
              ok: true
            }
          ],

          explanation: "Op de checklist staan onder andere het kennismakingsgesprek, de VOG, de overeenkomst en de afspraken over je start en begeleiding."
        }
      ]
    },


    /* -------------------------------------------------------
       STAP 3 - WAT VERWACHTEN WIJ VAN JOU?
       Vragen 7, 8 en 10
       ------------------------------------------------------- */

    {
      id: "afspraken",
      title: "Wat verwachten wij van jou?",
      text: "De gedragscode, geheimhouding en jouw grenzen als vrijwilliger.",
      img: "../../assets/afspraken.png",
      alt: "Afspraken",
      icon: "fa-solid fa-graduation-cap",
      color: "#008241",
      link: "../onboarding/onboarding.html",

      body: [
        {
          type: "p",
          text: "Palet Welzijn heeft een gedragscode. Daarin staat hoe we met elkaar en met cliënten omgaan. De belangrijkste uitgangspunten: respect voor elkaar (geen grensoverschrijdend fysiek of seksueel gedrag, geen agressie, geweld of schelden), verantwoord omgaan met middelen (geen roken of alcohol/drugs tijdens je inzet), respect voor eigendommen (geen diefstal) en zorgvuldig omgaan met sociale media."
        },
        {
          type: "p",
          text: "Wat je tijdens je vrijwilligerswerk over cliënten, bewoners of de organisatie hoort of ziet, blijft geheim. Je deelt geen namen, situaties of foto's zonder toestemming. Ook wanneer je samen met iemand een leuke foto maakt, mag je deze niet zonder toestemming online zetten. Deze geheimhoudingsplicht blijft gelden, ook wanneer je stopt met vrijwilligerswerk."
        },
        {
          type: "p",
          text: "Belangrijk: je doet géén medische of verpleegtechnische handelingen. Dat mag alleen door bevoegde zorgverleners. Ook als je vroeger in de zorg hebt gewerkt, geldt deze afspraak. Beslissingen over zorggerelateerde zaken laat je altijd over aan de verantwoordelijke professional. Twijfel je? Overleg altijd met je contactpersoon."
        }
      ],

      tasks: [
        "Ik ken de gedragscode van Palet Welzijn",
        "Wat ik over cliënten hoor of zie, blijft geheim — ook na mijn vrijwilligerswerk",
        "Ik doe geen medische of verpleegtechnische handelingen"
      ],

      quizzes: [
        {
          question: "Je werkte vroeger in de zorg. Een bewoner vraagt of jij zijn medicijnen wilt klaarzetten. Wat doe je?",

          options: [
            {
              label: "A. Ik doe het niet, laat het aan de professional en bespreek het met mijn contactpersoon",
              ok: true
            },
            {
              label: "B. Ik doe het, want ik heb er ervaring mee",
              ok: false
            },
            {
              label: "C. Ik doe het alleen als de bewoner dat prettig vindt",
              ok: false
            },
            {
              label: "D. Ik doe het alleen als niemand het ziet",
              ok: false
            }
          ],

          explanation: "Als vrijwilliger verricht je nooit medische of verpleegtechnische handelingen, ook niet als je deze eerder beroepsmatig deed. Twijfel je? Bespreek het met je contactpersoon."
        },

        {
          question: "Je maakt tijdens een wandeling een leuke foto met een bewoner. Mag je die op sociale media zetten?",

          options: [
            {
              label: "A. Ja, het is jouw eigen account",
              ok: false
            },
            {
              label: "B. Ja, als je geen naam noemt",
              ok: false
            },
            {
              label: "C. Alleen met toestemming van de bewoner",
              ok: true
            },
            {
              label: "D. Ja, als je de foto na een dag verwijdert",
              ok: false
            }
          ],

          explanation: "Ook bij een leuke foto mag je niets zonder toestemming online zetten. Twijfel je? Overleg met je contactpersoon."
        },

        {
          question: "Je bent gestopt met vrijwilligerswerk bij Palet Welzijn. Geldt de geheimhoudingsplicht dan nog?",

          options: [
            {
              label: "A. Nee, alleen zolang je vrijwilliger bent",
              ok: false
            },
            {
              label: "B. Ja, maar alleen een jaar lang",
              ok: false
            },
            {
              label: "C. Ja, de geheimhoudingsplicht blijft ook gelden na het stoppen",
              ok: true
            },
            {
              label: "D. Alleen als je nog contact hebt met cliënten",
              ok: false
            }
          ],

          explanation: "Alles wat je vertrouwelijk over cliënten, bewoners of de organisatie te weten komt, valt onder de geheimhouding. Dat geldt ook na het stoppen."
        }
      ]
    },


    /* -------------------------------------------------------
       STAP 4 - VEILIGHEID
       Vraag 9
       ------------------------------------------------------- */

    {
      id: "veiligheid",
      title: "Veiligheid",
      text: "Wat doe je als er iets gebeurt? En hoe ben je verzekerd?",
      img: "../../assets/veiligheid.png",
      alt: "Veiligheid",
      icon: "fa-solid fa-shield-halved",
      color: "#92278F",
      link: "../onboarding/onboarding.html",

      body: [
        {
          type: "p",
          text: "Als er iets gebeurt — een val, een verwarde situatie of een onveilig gevoel — dan is er altijd iemand bij wie je terechtkunt. Je contactpersoon is je eerste aanspreekpunt. Ben je getuige van een incident of maak je een situatie mee die mogelijk schadelijke gevolgen heeft? Bespreek dit altijd met jouw contactpersoon, ook als je twijfelt. Wacht hier niet mee."
        },
        {
          type: "p",
          text: "Kun je niet terecht bij je contactpersoon of manager? Dan is er een vertrouwenslijn: 088 - 144 0200, verzorgd door Bezemer & Schubad. Je kunt een terugbelverzoek achterlaten; de vertrouwenspersoon neemt zo snel mogelijk contact met je op, op een tijdstip dat jou uitkomt."
        },
        {
          type: "p",
          text: "Palet Welzijn heeft voor vrijwilligers een ongevallen- en aansprakelijkheidsverzekering afgesloten. Je bent verzekerd voor eventuele schade die onbedoeld ontstaat tijdens je vrijwilligerswerk. Het eigen risico van de aansprakelijkheidsverzekering neemt Palet Welzijn voor haar rekening. Voor de actuele voorwaarden vraag je deze op bij de manager informele ondersteuning."
        }
      ],

      tasks: [
        "Ik weet dat mijn contactpersoon mijn eerste aanspreekpunt is",
        "Ik ken de vertrouwenslijn: 088 - 144 0200",
        "Ik weet dat ik via Palet Welzijn verzekerd ben voor ongevallen en aansprakelijkheid"
      ],

      quizzes: [
        {
          question: "Je maakt iets mee dat mogelijk schadelijk is, maar je twijfelt of het ernstig genoeg is. Wat doe je?",

          options: [
            {
              label: "A. Ik wacht af of het vanzelf overgaat",
              ok: false
            },
            {
              label: "B. Ik meld het alleen als ik er zeker van ben",
              ok: false
            },
            {
              label: "C. Ik los het zelf op",
              ok: false
            },
            {
              label: "D. Ik bespreek het met mijn contactpersoon, ook als ik twijfel",
              ok: true
            }
          ],

          explanation: "Je contactpersoon luistert en beoordeelt samen met jou of de situatie formeel gemeld moet worden. Wacht hier niet mee."
        }
      ]
    },


    /* -------------------------------------------------------
       STAP 5 - WAT DOET PALET WELZIJN VOOR JOU?
       Vragen 5, 6, 13 en 14
       ------------------------------------------------------- */

    {
      id: "voor-jou",
      title: "Wat doet Palet Welzijn voor jou?",
      text: "Waardering, workshops en samen kijken wat bij je past.",
      img: "../../assets/voor-jou.png",
      alt: "Wat doet Palet Welzijn voor jou?",
      icon: "fa-solid fa-flag-checkered",
      color: "#C2410C",
      link: "../onboarding/onboarding.html",

      body: [
        {
          type: "p",
          text: "Palet Welzijn waardeert haar vrijwilligers. Dat laat zich zien in een aantal extra's: je ontvangt een digitale nieuwsbrief met nieuwtjes en columns, een jaarlijkse attentie, een kleine attentie bij bijzondere gelegenheden, en één keer per jaar een gezellige vrijwilligersbijeenkomst."
        },
        {
          type: "p",
          text: "Daarnaast ontvang je een gratis persoonlijk lidmaatschap op naam van Vierstroom Ledenservice, waarmee je gebruik kunt maken van verschillende kortingen en aanbiedingen. Je kunt ook deelnemen aan workshops en scholingen."
        },
        {
          type: "p",
          text: "Past een taak niet meer bij je? Samen met je contactpersoon kijk je wat wél bij je past. Jouw plezier en welzijn staan voorop. En ken je iemand die ook iets voor een ander wil betekenen? Vertel gerust over je ervaringen bij Palet Welzijn — misschien inspireer je iemand om ook vrijwilliger te worden."
        },
        {
          type: "p",
          text: "Meer weten of aanmelden? Kijk op www.paletwelzijn.nl, mail naar vrijwilligerswerk@paletwelzijn.nl of bel 088 - 359 45 66."
        }
      ],

      tasks: [
        "Ik weet welke extra's ik van Palet Welzijn krijg",
        "Ik weet dat ik met vragen of twijfels altijd in gesprek kan gaan"
      ],

      quizzes: [
        {
          question: "Welke waardering krijg je van Palet Welzijn?",

          options: [
            {
              label: "A. Een vrijwilligersvergoeding per uur",
              ok: false
            },
            {
              label: "B. Een gratis persoonlijk lidmaatschap van Vierstroom Ledenservice",
              ok: true
            },
            {
              label: "C. Een gratis OV-jaarkaart",
              ok: false
            },
            {
              label: "D. Een eigen parkeerplek bij de locatie",
              ok: false
            }
          ],

          explanation: "Daarnaast ontvang je een nieuwsbrief, een jaarlijkse attentie, een kleine attentie bij bijzondere gelegenheden en kun je meedoen aan workshops en scholingen."
        },

        {
          question: "Hoe vaak organiseert Palet Welzijn een vrijwilligersbijeenkomst?",

          options: [
            {
              label: "A. Elke maand",
              ok: false
            },
            {
              label: "B. Elk kwartaal",
              ok: false
            },
            {
              label: "C. Eén keer per jaar",
              ok: true
            },
            {
              label: "D. Alleen wanneer je stopt",
              ok: false
            }
          ],

          explanation: "Eén keer per jaar is er een gezellige bijeenkomst voor alle vrijwilligers."
        },

        {
          question: "Je ervaart minder plezier in je vrijwilligerswerk. Wat vraagt Palet Welzijn van je?",

          options: [
            {
              label: "A. Gewoon doorgaan en er niets over zeggen",
              ok: false
            },
            {
              label: "B. In gesprek gaan, zodat jullie samen naar een passende oplossing zoeken",
              ok: true
            },
            {
              label: "C. Wachten tot de organisatie er zelf over begint",
              ok: false
            },
            {
              label: "D. Zonder te overleggen stoppen",
              ok: false
            }
          ],

          explanation: "Je hoeft hier niet mee rond te blijven lopen. Jullie zoeken samen naar een oplossing."
        },

        {
          question: "Een kennis wil ook iets voor een ander betekenen. Wat kun je doen?",

          options: [
            {
              label: "A. Hem zonder gesprek laten meelopen",
              ok: false
            },
            {
              label: "B. Zelf zijn VOG voor hem aanvragen",
              ok: false
            },
            {
              label: "C. Vertellen over je ervaringen en hem verwijzen naar de website of vrijwilligerswerk@paletwelzijn.nl",
              ok: true
            },
            {
              label: "D. Niets, aanmelden kan niet zomaar",
              ok: false
            }
          ],

          explanation: "Je mag je ervaringen delen. Voor aanmelden is er altijd eerst een kennismaking."
        }
      ]
    }

  ];

  /* =========================================================
     2. OPSLAG EN ELEMENTEN
     ========================================================= */

  var STORAGE_KEY = "pw-onboarding-v3";

  var root = document.querySelector(".pw-onboarding");

  if (!root) return;

  var railEl = root.querySelector("#pw-ob-rail-list");
  var panelEl = root.querySelector("#pw-ob-panel");
  var badgeEl = root.querySelector("#pw-ob-badge");
  var progressLabelEl = root.querySelector("#pw-ob-progress-label");
  var barEl = root.querySelector("#pw-ob-bar");
  var barFillEl = root.querySelector("#pw-ob-bar-fill");
  var resetEl = root.querySelector("#pw-ob-reset");


  /* =========================================================
     3. STATUS OPSLAAN EN LADEN
     ========================================================= */

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);

      if (raw) {
        var p = JSON.parse(raw);

        if (p && typeof p === "object") {
          return {
            checked: p.checked || {},
            quiz: p.quiz || {}
          };
        }
      }

    } catch (e) {
      console.warn("Voortgang kon niet worden geladen.", e);
    }

    return {
      checked: {},
      quiz: {}
    };
  }


  var state = loadState();
  var activeId = null;


  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Voortgang kon niet worden opgeslagen.", e);
    }
  }


  /* =========================================================
     4. VOORTGANG CONTROLEREN
     ========================================================= */

  function checkedFor(step) {
    var arr = state.checked[step.id];

    if (!Array.isArray(arr)) {
      arr = [];
    }

    return step.tasks.map(function (_, i) {
      return arr[i] === true;
    });
  }


  function isDone(step) {
    return checkedFor(step).every(Boolean);
  }


  /* Controleren of alle vragen goed zijn beantwoord */
  function quizAnswered(step) {
    var answers = state.quiz[step.id];

    if (!Array.isArray(answers)) {
      return false;
    }

    return step.quizzes.every(function (_, i) {
      return answers[i] === true;
    });
  }


  /* Een stap is pas klaar als taken en vragen voltooid zijn */
  function stepComplete(step) {
    return isDone(step) && quizAnswered(step);
  }


  /* Bepalen welke stap als volgende openstaat */
  function currentIndex() {
    for (var i = 0; i < STEPS.length; i++) {
      if (!stepComplete(STEPS[i])) {
        return i;
      }
    }

    return STEPS.length;
  }


  function statusOf(i) {
    var cur = currentIndex();

    if (i < cur) return "done";
    if (i === cur) return "current";

    return "locked";
  }


  /* =========================================================
     5. HULPFUNCTIES
     ========================================================= */

  function el(tag, cls, text) {
    var n = document.createElement(tag);

    if (cls) {
      n.className = cls;
    }

    if (text != null) {
      n.textContent = text;
    }

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

    if (label) {
      s.setAttribute("role", "img");
      s.setAttribute("aria-label", label);
    } else {
      s.setAttribute("aria-hidden", "true");
    }

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

  var ICON_LOCK =
    '<rect x="5" y="11" width="14" height="10" rx="2"/>' +
    '<path d="M8 11V7a4 4 0 0 1 8 0v4"/>';


  /* =========================================================
     6. LINKERNAVIGATIE
     ========================================================= */

  function renderRail() {
    railEl.textContent = "";

    STEPS.forEach(function (step, i) {

      var status = statusOf(i);

      var li = el("li");

      var btn = el(
        "button",
        "pw-ob-rail-item is-" + status
      );

      btn.type = "button";

      btn.style.setProperty("--step-color", step.color);

      if (status === "current" || activeId === step.id) {
        btn.setAttribute("aria-current", "step");
      }

      if (status === "locked") {
        btn.disabled = true;
      }

      btn.addEventListener("click", function () {
        setActive(step.id);
      });


      /* Icoon */
      var stop = el("span", "pw-ob-rail-stop");

      if (status === "done") {
        stop.appendChild(
          svg(ICON_CHECK, "Stap " + (i + 1) + " voltooid")
        );

      } else if (status === "locked") {
        stop.appendChild(
          svg(ICON_LOCK, "Stap " + (i + 1) + " vergrendeld")
        );

      } else {
        stop.appendChild(icon(step.icon));
      }

      btn.appendChild(stop);


      /* Tekst */
      var txt = el("span", "pw-ob-rail-text");

      txt.appendChild(
        el(
          "span",
          "pw-ob-rail-label",
          "Stap " + (i + 1) + " · " + step.title
        )
      );


      var meta;

      if (status === "done") {
        meta = "Voltooid";
      } else if (status === "current") {
        meta = "Hier ben je";
      } else {
        meta = "Vergrendeld";
      }

      txt.appendChild(
        el("span", "pw-ob-rail-meta", meta)
      );

      btn.appendChild(txt);

      li.appendChild(btn);

      railEl.appendChild(li);

    });
  }


  /* =========================================================
     7. RECHTERKOLOM / STAPPEN WEERGEVEN
     ========================================================= */

  function renderPanel() {

    var index = STEPS.findIndex(function (s) {
      return s.id === activeId;
    });

    if (index < 0) {
      index = Math.min(currentIndex(), STEPS.length - 1);
    }

    var step = STEPS[index];

    activeId = step.id;

    var status = statusOf(index);

    var checks = checkedFor(step);

    var answered = quizAnswered(step);


    /* Leegmaken */
    panelEl.textContent = "";

    panelEl.style.setProperty("--step-color", step.color);


    /* -------------------------------------------------------
       KOP
       ------------------------------------------------------- */

    var head = el("div", "pw-ob-panel-head");

    head.appendChild(
      el("span", "pw-ob-panel-num", String(index + 1))
    );

    head.appendChild(
      el("h3", "pw-ob-panel-title", step.title)
    );

    var badge = el("span", "pw-ob-panel-badge");

    if (status === "done") {
      badge.textContent = "Voltooid";
      badge.classList.add("is-done");

    } else if (status === "current") {
      badge.textContent = "Hier ben je";
      badge.classList.add("is-current");

    } else {
      badge.textContent = "Vergrendeld";
    }

    head.appendChild(badge);

    panelEl.appendChild(head);


    /* -------------------------------------------------------
       AFBEELDING
       ------------------------------------------------------- */

    var img = el("img", "pw-ob-panel-img");

    img.src = step.img;
    img.alt = step.alt;
    img.loading = "lazy";

    img.onerror = function () {
      this.style.display = "none";
    };

    panelEl.appendChild(img);


    /* -------------------------------------------------------
       INTRO
       ------------------------------------------------------- */

    panelEl.appendChild(
      el("p", "pw-ob-panel-intro", step.text)
    );


    /* -------------------------------------------------------
       INFORMATIEBLOK
       ------------------------------------------------------- */

    if (Array.isArray(step.body) && step.body.length) {

      var info = el("div", "pw-ob-info");

      step.body.forEach(function (block) {

        if (block.type === "p") {

          info.appendChild(
            el("p", "pw-ob-info-p", block.text)
          );

        } else if (
          block.type === "list" &&
          Array.isArray(block.items)
        ) {

          var ul2 = el("ul", "pw-ob-info-list");

          block.items.forEach(function (it) {
            ul2.appendChild(el("li", null, it));
          });

          info.appendChild(ul2);
        }

      });

      panelEl.appendChild(info);
    }


    /* -------------------------------------------------------
       TAKEN / CHECKLIST
       ------------------------------------------------------- */

    panelEl.appendChild(
      el("p", "pw-ob-hint", "Vink af wat je al hebt gedaan:")
    );

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

      label.appendChild(
        el("span", null, task)
      );

      li.appendChild(label);

      ul.appendChild(li);

    });

    panelEl.appendChild(ul);


    /* -------------------------------------------------------
       MEERKEUZE VRAGEN
       Verschijnen als alle taken zijn afgevinkt
       ------------------------------------------------------- */

    if (isDone(step)) {

      panelEl.appendChild(
        buildQuiz(step)
      );

    } else {

      panelEl.appendChild(
        el(
          "p",
          "pw-ob-hint",
          "Vink eerst alle taken hierboven af. Daarna verschijnen de controle-vragen."
        )
      );

    }


    /* -------------------------------------------------------
       FOOTER / NAVIGATIE
       ------------------------------------------------------- */

    var foot = el("div", "pw-ob-panel-foot");


    /* "Ga terug"-knop (vervangt de oude landingspagina-link) */
    var backBtn = el(
      "button",
      "pw-ob-btn pw-ob-btn--ghost",
      "Ga terug"
    );

    backBtn.type = "button";

    backBtn.addEventListener("click", function () {

      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "../onboarding/onboarding.html";
      }

    });

    foot.appendChild(backBtn);


    var isLast = index === STEPS.length - 1;

    var next = el(
      "button",
      "pw-ob-btn",
      isLast ? "Afronden" : "Verder naar stap " + (index + 2)
    );

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


  /* =========================================================
     8. MEERDERE CONTROLE-VRAGEN PER STAP
     ========================================================= */

  function buildQuiz(step) {

    var wrap = el("div", "pw-ob-quiz");

    wrap.appendChild(
      el("h4", "pw-ob-quiz-heading", "Tijd om je kennis te testen!")
    );

    wrap.appendChild(
      el(
        "p",
        "pw-ob-quiz-intro",
        "Beantwoord de vragen hieronder. Je moet alle vragen goed beantwoorden om verder te gaan."
      )
    );


    /* Bestaande antwoorden ophalen */
    var answers = state.quiz[step.id];

    if (!Array.isArray(answers)) {
      answers = [];
    }


    /* Iedere vraag afzonderlijk weergeven */
    step.quizzes.forEach(function (quiz, qi) {

      var correct = answers[qi] === true;


      /* Vraagkaart */
      var card = el("div", "pw-ob-question");

      card.appendChild(
        el(
          "span",
          "pw-ob-question-number",
          "Vraag " + (qi + 1) + " van " + step.quizzes.length
        )
      );


      card.appendChild(
        el("p", "pw-ob-quiz-title", quiz.question)
      );


      /* Antwoordmogelijkheden */
      var opts = el("div", "pw-ob-quiz-options");

      var feedback = el("div", "pw-ob-quiz-feedback");


      quiz.options.forEach(function (opt) {

        var b = el(
          "button",
          "pw-ob-quiz-btn",
          opt.label
        );

        b.type = "button";


        /* Eerder goed beantwoorde vragen herstellen */
        if (correct && opt.ok) {
          b.classList.add("is-selected", "is-correct");
        }

        if (correct) {
          b.disabled = true;
        }


        b.addEventListener("click", function () {

          /* Niet opnieuw beantwoorden als de vraag al goed is */
          if (answers[qi] === true) {
            return;
          }


          /* -------------------------------------------------
             GOED ANTWOORD
             ------------------------------------------------- */

          if (opt.ok) {

            answers[qi] = true;

            state.quiz[step.id] = answers;

            saveState();


            b.classList.add("is-selected", "is-correct");


            /* Alle antwoordknoppen van deze vraag uitschakelen */
            Array.prototype.forEach.call(
              opts.children,
              function (c) {
                c.disabled = true;
              }
            );


            /* Uitleg tonen */
            feedback.textContent =
              "Goed gedaan! " + quiz.explanation;

            feedback.className =
              "pw-ob-quiz-feedback is-ok";


          } else {


            /* -------------------------------------------------
               FOUT ANTWOORD
               ------------------------------------------------- */

            feedback.textContent =
              "Dat is helaas niet goed. Probeer het nog eens.";

            feedback.className =
              "pw-ob-quiz-feedback is-no";

          }


          /* Voortgang en navigatie bijwerken */
          renderRail();

          renderStatus();


          /* Bijwerken van de knop Verder */
          var nextBtn = panelEl.querySelector(
            ".pw-ob-panel-foot .pw-ob-btn:not(.pw-ob-btn--ghost)"
          );

          if (nextBtn) {

            nextBtn.disabled = !(
              isDone(step) && quizAnswered(step)
            );

          }


          /* Bij alle vragen goed: succesmelding tonen */
          if (quizAnswered(step)) {

            var success = wrap.querySelector(
              ".pw-ob-quiz-complete"
            );

            if (!success) {

              success = el(
                "div",
                "pw-ob-quiz-complete",
                "Fantastisch! Je hebt alle vragen goed beantwoord. Je kunt verder naar de volgende stap."
              );

              wrap.appendChild(success);

            }

          }

        });


        opts.appendChild(b);

      });


      card.appendChild(opts);


      /* Feedback tonen als vraag al goed beantwoord is */
      if (correct) {

        feedback.textContent =
          "Goed gedaan! " + quiz.explanation;

        feedback.className =
          "pw-ob-quiz-feedback is-ok";

      }


      card.appendChild(feedback);

      wrap.appendChild(card);

    });


    /* Succesmelding herstellen na opnieuw laden */
    if (quizAnswered(step)) {

      wrap.appendChild(
        el(
          "div",
          "pw-ob-quiz-complete",
          "Fantastisch! Je hebt alle vragen goed beantwoord. Je kunt verder naar de volgende stap."
        )
      );

    }


    return wrap;

  }


  /* =========================================================
     9. VOORTGANGSBALK EN STATUS
     ========================================================= */

  function renderStatus() {

    var cur = currentIndex();

    var done = Math.min(cur, STEPS.length);


    progressLabelEl.textContent =
      done + " van " + STEPS.length + " stappen afgerond";


    barEl.setAttribute(
      "aria-valuenow",
      String(done)
    );


    barFillEl.style.width =
      (done / STEPS.length) * 100 + "%";


    badgeEl.textContent =
      cur >= STEPS.length
        ? "Klaar voor je eerste dag!"
        : "Je bent bij stap " + (cur + 1) + "!";

  }


  /* =========================================================
     10. NAAR EEN ANDERE STAP
     ========================================================= */

  function setActive(id) {

    var targetIndex = STEPS.findIndex(function (s) {
      return s.id === id;
    });

    if (targetIndex < 0) {
      return;
    }


    /* Voorkom dat een vergrendelde stap wordt geopend */
    if (statusOf(targetIndex) === "locked") {
      return;
    }


    activeId = id;

    renderRail();

    renderPanel();


    panelEl.focus({
      preventScroll: true
    });


    /* Scroll naar het moduleblok, niet door de hele pagina */
    panelEl.scrollIntoView({
      behavior:
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",

      block: "nearest"
    });


    /* URL bijwerken */
    if (history.replaceState) {
      history.replaceState(null, "", "#" + id);
    }

  }


  /* =========================================================
     11. RESETFUNCTIE
     ========================================================= */

  if (resetEl) {

    resetEl.addEventListener("click", function () {

      var confirmed = window.confirm(
        "Weet je zeker dat je alle voortgang wilt wissen en opnieuw wilt beginnen?"
      );

      if (!confirmed) {
        return;
      }


      state = {
        checked: {},
        quiz: {}
      };

      saveState();

      activeId = STEPS[0].id;


      renderRail();

      renderPanel();

      renderStatus();


      if (history.replaceState) {
        history.replaceState(null, "", "#welkom");
      }

    });

  }


  /* =========================================================
     12. INITIALISATIE
     Lees eventueel de stap uit de URL
     Bijvoorbeeld: #start
     ========================================================= */

  var hashId = (location.hash || "").replace("#", "");

  var hashIndex = STEPS.findIndex(function (s) {
    return s.id === hashId;
  });


  if (
    hashIndex >= 0 &&
    statusOf(hashIndex) !== "locked"
  ) {

    activeId = STEPS[hashIndex].id;

  } else {

    var firstOpen = currentIndex();

    activeId = STEPS[
      Math.min(firstOpen, STEPS.length - 1)
    ].id;

  }


  /* Eerste weergave */
  renderRail();

  renderPanel();

  renderStatus();


})();