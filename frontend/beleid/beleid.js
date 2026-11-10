/* =========================================================
   Palet Welzijn - Beleid & Onboarding
   5 stappen · blocks · quiz zonder explanation
   ========================================================= */

(function () {
  "use strict";

  var STEPS = [

    /* -------------------------------------------------------
       STAP 1 - WELKOM (H1 + 1.1 + 1.2)
       ------------------------------------------------------- */
    {
      id: "welkom",
      title: "Welkom – fijn dat je er bent!",
      text: "Maak kennis met Palet Welzijn en wat jij als vrijwilliger betekent.",
      img: "../../assets/welkom.png",
      alt: "Welkom",
      icon: "fa-regular fa-hand",
      color: "#120a5c",
      link: "../onboarding/onboarding.html",

      body: [
        { type: "h3", text: "Onze droom" },
        { type: "p", text: "Een samenleving waar we met oprechte belangstelling naar elkaar omkijken en ieder op eigen wijze invulling kan geven aan zijn leven." },
        { type: "p", text: "Palet Welzijn zet zich in voor een wereld waarin iedereen de hoogst mogelijke kwaliteit van leven ervaart en waarin zorg en welzijn elkaar versterken. Of iemand nu thuis woont of in een woonzorglocatie verblijft: wij dragen bij aan welzijn door sociale netwerken te versterken, mensen actief te houden en professionele zorg waar mogelijk uit te stellen." },

        { type: "h3", text: "Onze missie en visie" },
        { type: "p", text: "We verbinden mensen met elkaar, vergroten hun sociale netwerk en zorgen ervoor dat iedereen zoveel mogelijk mee kan blijven doen. Oprechte aandacht, betrokkenheid en kleine momenten van betekenis hebben grote waarde voor iemands welzijn." },
        { type: "p", text: "Samen maken we het verschil!" },

        { type: "h", text: "Vrijwilliger zijn bij Palet Welzijn" },
        { type: "p", text: "Een vrijwilliger zet zich vanuit eigen motivatie in voor een ander of voor de samenleving, zonder financiële vergoeding. Bij Palet Welzijn zijn meer dan 1.300 vrijwilligers actief: in de wijk, op woonzorglocaties en binnen het sociaal domein in Midden-Holland." },
        { type: "p", text: "Vrijwilligerswerk bij Palet Welzijn:" },
        { type: "list", items: [
          "Doe je uit vrije wil.",
          "Is onbetaald.",
          "Vindt plaats binnen een georganiseerde omgeving.",
          "Heeft een maatschappelijk doel."
        ]},

        { type: "h", text: "Verschillende rollen" },
        { type: "p", text: "Er zijn veel verschillende mogelijkheden. Je kunt kiezen uit meerdere rollen — samen kijken we welke bij jou, jouw interesses en jouw mogelijkheden past." },
        { type: "list", items: [
          "Vrijwilliger Thuis: je bezoekt iemand in de eigen woonomgeving en biedt gezelschap en ondersteuning.",
          "Activiteitenvrijwilliger: je helpt bij het organiseren en begeleiden van activiteiten en evenementen.",
          "Projectvrijwilliger: je helpt mee aan een tijdelijk project met een duidelijk begin en einde.",
          "Overige rollen: gastvrouw/gastheer, chauffeur seniorenvervoer, ondersteuning in een wijkrestaurant of preventieve huisbezoeken."
        ]}
      ],

      tasks: [
        "Ik weet wie Palet Welzijn is en wat onze droom en missie zijn",
        "Ik weet dat ik kan kiezen uit verschillende vrijwilligersrollen"
      ],

      quizzes: [
        {
          question: "Welke kenmerken heeft vrijwilligerswerk bij Palet Welzijn?",
          options: [
            { label: "A. Het is verplicht, onbetaald, binnen een organisatie en met een maatschappelijk doel", ok: false },
            { label: "B. Je doet het uit vrije wil, tegen een kleine vergoeding en met een maatschappelijk doel", ok: false },
            { label: "C. Je doet het uit vrije wil, het is onbetaald, het vindt plaats in een georganiseerde omgeving en het heeft een maatschappelijk doel", ok: true },
            { label: "D. Je doet het in je eigen tijd, zonder afspraken en voor een organisatie naar keuze", ok: false }
          ]
        },
        {
          question: "Wat is typisch voor een projectvrijwilliger?",
          options: [
            { label: "A. Hij of zij bezoekt iemand thuis zodat de mantelzorger even tijd voor zichzelf heeft", ok: false },
            { label: "B. Hij of zij helpt mee aan een tijdelijk project met een duidelijk begin en einde", ok: true },
            { label: "C. Hij of zij is vooral gastheer of gastvrouw in een wijkcentrum", ok: false },
            { label: "D. Hij of zij is altijd chauffeur voor het seniorenvervoer", ok: false }
          ]
        }
      ]
    },

    /* -------------------------------------------------------
       STAP 2 - WAT BRENGT VRIJWILLIGERSWERK JOU?
       Alleen aanvink-taken, geen quiz
       ------------------------------------------------------- */
    {
      id: "voor-jou",
      title: "Wat brengt vrijwilligerswerk jou?",
      text: "Plezier, voldoening, contacten en wat Palet Welzijn jou biedt.",
      img: "../../assets/voor-jou.png",
      alt: "Wat brengt vrijwilligerswerk jou?",
      icon: "fa-solid fa-star",
      color: "#C2410C",
      link: "../onboarding/onboarding.html",

      body: [
        { type: "p", text: "Vrijwilligerswerk betekent iets voor een ander, maar kan ook voor jou veel opleveren." },
        { type: "list", items: [
          "Plezier: je ontmoet mensen, onderneemt leuke activiteiten en doet iets waar je energie van krijgt.",
          "Voldoening: het geeft een goed gevoel om te weten dat jouw inzet voor iemand anders verschil maakt.",
          "Zingeving: je draagt bij aan een samenleving waarin mensen naar elkaar omkijken.",
          "Sociale contacten: je ontmoet nieuwe mensen, bouwt contacten op en wordt onderdeel van een betrokken netwerk.",
          "Meedoen en samenwerken: je werkt samen met andere vrijwilligers en professionals.",
          "Structuur: vrijwilligerswerk kan een fijne invulling geven aan je week en zorgen voor een vast moment om naar uit te kijken.",
          "Talentontwikkeling: je kunt bestaande talenten inzetten en nieuwe ervaringen opdoen. Ook kun je deelnemen aan workshops en scholingen."
        ]},

        { type: "h", text: "Wat biedt Palet Welzijn jou?" },
        { type: "p", text: "We vinden het belangrijk om onze waardering voor jouw inzet te laten zien. Daarom bieden we verschillende extra's:" },
        { type: "list", items: [
          "Nieuwsbrief: je ontvangt een digitale nieuwsbrief met nieuwtjes, mooie columns en andere informatie.",
          "Jaarlijkse attentie: ieder jaar ontvang je een attentie als blijk van waardering.",
          "Vierstroom Ledenservice: je ontvangt een gratis persoonlijk lidmaatschap op naam, waarmee je gebruik kunt maken van verschillende kortingen en aanbiedingen.",
          "Bijzondere gelegenheden: ook op bijzondere momenten laten we graag van ons horen met een kleine attentie.",
          "Workshops en scholingen: je kunt deelnemen aan verschillende workshops en scholingen.",
          "Vrijwilligersbijeenkomst: één keer per jaar organiseren we een gezellige bijeenkomst voor onze vrijwilligers."
        ]}
      ],

      tasks: [
        "Ik weet wat vrijwilligerswerk mij oplevert (plezier, voldoening, contacten)",
        "Ik weet welke extra's ik van Palet Welzijn krijg"
      ],

      quizzes: []
    },

    /* -------------------------------------------------------
       STAP 3 - WAT VERWACHTEN WIJ VAN JOU?
       + geheimhouding/privacy (uit H5) + kleding + betrouwbaarheid
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
        { type: "p", text: "We zijn ontzettend blij met jouw inzet. Om het vrijwilligerswerk voor iedereen prettig en veilig te houden, vinden we een aantal zaken belangrijk." },

        { type: "h", text: "Affiniteit met de doelgroep" },
        { type: "p", text: "Je hebt belangstelling voor de mensen met wie je werkt en vindt het fijn om iets voor een ander te betekenen." },

        { type: "h", text: "Betrouwbaarheid en discretie" },
        { type: "p", text: "We moeten op elkaar kunnen rekenen. Je gaat zorgvuldig om met informatie en respecteert de privacy van anderen. Alles wat je vertrouwelijk over cliënten, bewoners of de organisatie te weten komt, valt onder de geheimhoudingsplicht — ook wanneer je stopt met vrijwilligerswerk." },

        { type: "h", text: "Communicatie en samenwerking" },
        { type: "p", text: "Je kunt zelfstandig werken, maar ook samenwerken met andere vrijwilligers en professionals. Je gaat respectvol om met meningsverschillen en oordeelt niet direct." },

        { type: "h", text: "Vrijwilligersovereenkomst en VOG" },
        { type: "p", text: "Je bent bereid een vrijwilligersovereenkomst met Palet Welzijn aan te gaan en een VOG aan te vragen." },

        { type: "h", text: "Beslissingen over zorg" },
        { type: "p", text: "Beslissingen over zorggerelateerde zaken laat je altijd over aan de verantwoordelijke professional. Twijfel je over een situatie? Bespreek dit dan met jouw contactpersoon." },

        { type: "h", text: "Medische handelingen" },
        { type: "p", text: "Als vrijwilliger verricht je nooit medische of verpleegtechnische handelingen. Dit geldt ook wanneer je deze handelingen in het verleden beroepsmatig hebt uitgevoerd. Daarnaast is het niet toegestaan om gevoelige of privéinformatie van cliënten te beheren of giften aan te nemen." },

        { type: "h", text: "Sociale media" },
        { type: "p", text: "Wees voorzichtig met het gebruik van sociale media, zoals WhatsApp, Facebook, Instagram en YouTube. Je mag niet zomaar foto's, filmpjes of informatie over cliënten of bewoners online plaatsen of delen. Ook wanneer je samen met iemand een leuke foto maakt, mag je deze niet zonder toestemming op sociale media zetten. Palet Welzijn plaatst zelf ook geen duidelijk herkenbare portretfoto van jou online zonder jouw toestemming. Twijfel je? Overleg dan met jouw contactpersoon." },

        { type: "h", text: "Kleding en representativiteit" },
        { type: "p", text: "Je gedrag, kleding en uiterlijke verzorging passen bij een respectvolle benadering van anderen en bij de uitstraling van Palet Welzijn. Denk aan: rokjes en korte broeken minimaal tot op de knie, geen aanstootgevende teksten op kleding en kleding die schoon, verzorgd en passend is bij de werkzaamheden. Twijfel je of iets gepast is? Overleg met je contactpersoon." },

        { type: "h", text: "Onze gedragscode" },
        { type: "p", text: "Bij Palet Welzijn vinden we respect voor elkaar belangrijk. Daarom hebben we een gedragscode opgesteld. We verwachten dat iedereen zich hieraan houdt. De belangrijkste uitgangspunten zijn:" },
        { type: "list", items: [
          "Respect voor elkaar: grensoverschrijdend fysiek of seksueel gedrag is niet toegestaan. Agressie, geweld en schelden worden niet geaccepteerd.",
          "Verantwoord omgaan met middelen: roken en het onder invloed zijn van alcohol en/of drugs tijdens je inzet zijn niet toegestaan.",
          "Respect voor eigendommen: diefstal is niet toegestaan."
        ]},
        { type: "p", text: "Zorgvuldig omgaan met sociale media: houd rekening met privacy en de gevolgen van wat je online plaatst." },
        { type: "p", text: "Wanneer je ongewenste omgangsvormen of gedrag ervaart, bespreek dit dan met jouw contactpersoon of de vertrouwenspersoon." }
      ],

      tasks: [
        "Ik ken de gedragscode van Palet Welzijn",
        "Wat ik over cliënten hoor of zie, blijft geheim — ook na mijn vrijwilligerswerk",
        "Ik doe geen medische of verpleegtechnische handelingen",
        "Ik weet wat gepaste kleding is tijdens mijn vrijwilligerswerk"
      ],

      quizzes: [
        {
          question: "Je bent gestopt met vrijwilligerswerk bij Palet Welzijn. Je wilt je vriendin vertellen wat een bewoner ooit tegen je zei. Mag dat?",
          options: [
            { label: "A. Ja, want ik werk er niet meer", ok: false },
            { label: "B. Ja, zolang ik geen naam noem", ok: false },
            { label: "C. Nee, de geheimhoudingsplicht blijft ook gelden na het stoppen", ok: true },
            { label: "D. Alleen als de bewoner dat goed vindt", ok: false }
          ]
        },
        {
          question: "Je werkte vroeger in de zorg. Een bewoner vraagt of jij zijn medicijnen wilt klaarzetten. Wat doe je?",
          options: [
            { label: "A. Ik doe het niet, laat het aan de professional en bespreek het met mijn contactpersoon", ok: true },
            { label: "B. Ik doe het, want ik heb er ervaring mee", ok: false },
            { label: "C. Ik doe het alleen als de bewoner dat prettig vindt", ok: false },
            { label: "D. Ik doe het alleen als niemand het ziet", ok: false }
          ]
        },
        {
          question: "Het is heet buiten en je weet niet wat je moet aandoen. Wat is het meest gangbare?",
          options: [
            { label: "A. Ik draag wat ik wil, zolang het maar schoon is", ok: false },
            { label: "B. Rokjes en korte broeken minimaal tot op de knie, geen aanstootgevende teksten, schoon en verzorgd", ok: true },
            { label: "C. Alleen bedrijfskleding is toegestaan", ok: false },
            { label: "D. Kleding maakt niet uit, want ik werk niet met cliënten", ok: false }
          ]
        },
        {
          question: "Je maakt tijdens een wandeling een leuke foto met een bewoner. Mag je die op sociale media zetten?",
          options: [
            { label: "A. Ja, het is jouw eigen account", ok: false },
            { label: "B. Ja, als je geen naam noemt", ok: false },
            { label: "C. Alleen met toestemming van de bewoner", ok: true },
            { label: "D. Ja, als je de foto na een dag verwijdert", ok: false }
          ]
        }
      ]
    },

    /* -------------------------------------------------------
       STAP 4 - VEILIGHEID (geheimhouding eruit → naar stap 3)
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
        { type: "p", text: "Bij Palet Welzijn staat veilig werken voorop. We vragen je om tijdens je vrijwilligerswerk bewust en verantwoordelijk met veiligheid om te gaan." },

        { type: "h", text: "Incidenten melden" },
        { type: "p", text: "Ben je getuige van een incident of maak je een situatie mee die mogelijk schadelijke gevolgen heeft voor jou of voor iemand anders? Bespreek dit altijd met jouw contactpersoon. Deze kan naar je luisteren en samen met jou beoordelen of de situatie ook formeel gemeld moet worden. Wacht hier niet mee. Ook wanneer je twijfelt, is het belangrijk om een situatie bespreekbaar te maken." },

        { type: "h", text: "Vertrouwenspersoon" },
        { type: "p", text: "Heb je iets meegemaakt tijdens je vrijwilligerswerk en kun je hiermee niet terecht bij jouw contactpersoon of manager? Dan kun je contact opnemen met de vertrouwenspersoon van Palet Welzijn." },
        { type: "p", text: "Dit kan via de vertrouwenslijn: 088 - 144 0200" },
        { type: "p", text: "De vertrouwenslijn wordt verzorgd door Bezemer & Schubad. Je kunt een terugbelverzoek achterlaten. De vertrouwenspersoon neemt vervolgens zo snel mogelijk contact met je op, op een tijdstip dat jou uitkomt." },

        { type: "h", text: "Verzekering" },
        { type: "p", text: "Palet Welzijn heeft voor vrijwilligers een ongevallen- en aansprakelijkheidsverzekering afgesloten. Hierdoor ben je verzekerd voor eventuele schade die onbedoeld ontstaat tijdens je vrijwilligerswerk. Het eigen risico van de aansprakelijkheidsverzekering neemt Palet Welzijn voor haar rekening." },
        { type: "p", text: "Wil je meer weten over de actuele verzekeringsvoorwaarden? Vraag deze dan op bij de manager informele ondersteuning van Palet Welzijn." },

        { type: "h", text: "Privacy en jouw gegevens" },
        { type: "p", text: "Ook jouw eigen persoonsgegevens behandelen we zorgvuldig. Palet Welzijn bewaart deze in een beveiligd systeem volgens de Algemene Verordening Gegevensbescherming (AVG). Je gegevens worden alleen met jouw toestemming met anderen gedeeld. Dit geldt bijvoorbeeld voor het doorgeven van gegevens aan Vierstroom Ledenservice." }
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
            { label: "A. Ik wacht af of het vanzelf overgaat", ok: false },
            { label: "B. Ik meld het alleen als ik er zeker van ben", ok: false },
            { label: "C. Ik los het zelf op", ok: false },
            { label: "D. Ik bespreek het met mijn contactpersoon, ook als ik twijfel", ok: true }
          ]
        }
      ]
    },

    /* -------------------------------------------------------
       STAP 5 - AANMELDING & TOT SLOT (checklist + VOG + overeenkomst + contact)
       ------------------------------------------------------- */
    {
      id: "aanmelding",
      title: "Aanmelding & tot slot",
      text: "Je checklist, VOG, overeenkomst en samen maken we het verschil.",
      img: "../../assets/aanmelding.png",
      alt: "Aanmelding & tot slot",
      icon: "fa-solid fa-flag-checkered",
      color: "#0F766E",
      link: "../onboarding/onboarding.html",

      body: [
        { type: "p", text: "Voordat je officieel aan de slag gaat, moeten een aantal zaken geregeld zijn." },

        { type: "h", text: "Stap 1. Kennismaken" },
        { type: "p", text: "Je hebt een kennismakingsgesprek met de contactpersoon vrijwilligers van de locatie of dienst. Tijdens dit gesprek vertellen we je meer over Palet Welzijn, bespreken we de vrijwilligersrol waarin je geïnteresseerd bent, kijken we naar jouw motivatie en eventuele ervaring en krijg je alle ruimte om vragen te stellen. Het gesprek is informeel. Als je dat prettig vindt, kun je ook een keer meelopen op locatie." },

        { type: "h", text: "Stap 2. De juiste match" },
        { type: "p", text: "Samen bekijken we of de vrijwilligersrol aansluit bij jouw wensen, interesses en mogelijkheden. We vinden het belangrijk dat je op een plek terechtkomt waar jij je prettig voelt." },

        { type: "h", text: "Stap 3. VOG en vrijwilligersovereenkomst" },
        { type: "p", text: "Omdat je werkt met kwetsbare mensen, vragen we iedere vrijwilliger om een Verklaring Omtrent het Gedrag (VOG). Je ontvangt van Palet Welzijn een digitale link waarmee je de VOG kosteloos kunt aanvragen. Zodra je deze hebt ontvangen, laat je hem zien aan jouw contactpersoon. De VOG blijft jouw eigendom." },
        { type: "p", text: "Daarnaast ontvang je een vrijwilligersovereenkomst. Deze lees je door, vul je in en onderteken je. Dit is nodig voor je aanmelding en verzekering." },

        { type: "h", text: "Stap 4. Aan de slag!" },
        { type: "p", text: "Wanneer alles geregeld is, kun je beginnen met jouw vrijwilligerswerk. Soms spreken we eerst een proefperiode af. Zo kunnen we samen ervaren of de samenwerking en de rol goed bij je passen." },

        { type: "h", text: "Stap 5. Begeleiding en contact" },
        { type: "p", text: "Ook wanneer je eenmaal begonnen bent, sta je er niet alleen voor. Je kunt met vragen terecht bij jouw contactpersoon vrijwilligers of bij een professional die in jouw omgeving werkzaam is. Na een aantal maanden plannen we een gesprek om te bespreken hoe het gaat." },
        { type: "p", text: "Daarnaast vinden we het belangrijk om regelmatig contact met je te houden. Zo blijven we op de hoogte van hoe het met je gaat, kunnen we je vragen snel beantwoorden en sturen we samen bij waar nodig. Zo voel je je gehoord en betrokken." },

        { type: "h", text: "Jouw checklist" },
        { type: "list", items: [
          "Kennismakingsgesprek gevoerd.",
          "Vrijwilligersrol en afspraken besproken.",
          "VOG aangevraagd en getoond aan jouw contactpersoon.",
          "Vrijwilligersovereenkomst ontvangen.",
          "Vrijwilligersovereenkomst ingevuld en ondertekend.",
          "Afspraken over jouw start en begeleiding gemaakt."
        ]},
        { type: "p", text: "Wanneer alles geregeld is, ben je officieel aangemeld als vrijwilliger bij Palet Welzijn. Welkom bij het team!" },

        { type: "h", text: "Tot slot – samen maken we het verschil!" },
        { type: "p", text: "We hopen dat je met veel plezier jouw rol als vrijwilliger bij Palet Welzijn gaat invullen. Onthoud dat jouw inzet waardevol is. Iedere vrijwilliger draagt op zijn of haar eigen manier bij aan het welzijn van onze cliënten, bewoners, mantelzorgers en hun sociale omgeving." },
        { type: "p", text: "Heb je vragen, loop je ergens tegenaan of ervaar je minder plezier in je vrijwilligerswerk? Blijf er niet mee rondlopen, maar ga met ons in gesprek. Samen zoeken we naar een passende oplossing." },
        { type: "p", text: "Ken je iemand die ook iets voor een ander wil betekenen? Vertel dan gerust over jouw ervaringen bij Palet Welzijn! Misschien inspireer je iemand om ook vrijwilliger te worden. Er is veel mogelijk en we kijken graag samen welke rol bij iemand past." },

        { type: "h", text: "Meer weten of aanmelden?" },
        { type: "p", text: "Palet Welzijn" },
        { type: "list", items: [
          "Website: www.paletwelzijn.nl",
          "E-mail: vrijwilligerswerk@paletwelzijn.nl",
          "Telefoon: 088 - 359 45 66"
        ]},
        { type: "p", text: "Bedankt voor jouw betrokkenheid, jouw tijd en jouw aandacht. We zijn blij met je! Samen maken we het verschil." }
      ],

      tasks: [
        "Ik heb de checklist doorlopen (kennismaking, VOG, overeenkomst, afspraken)",
        "Ik heb mijn gratis VOG aangevraagd en laten zien aan mijn contactpersoon",
        "Ik heb mijn vrijwilligersovereenkomst ingevuld en ondertekend",
        "Ik weet dat ik altijd in gesprek kan over wat bij mij past",
        "Ik weet hoe ik Palet Welzijn kan bereiken voor vragen of aanmeldingen"
      ],

      quizzes: [
        {
          question: "Wat doe je met je VOG nadat je hem hebt ontvangen?",
          options: [
            { label: "A. Je stuurt hem op naar de vertrouwenspersoon", ok: false },
            { label: "B. Je geeft hem aan Palet Welzijn, die hem bewaart", ok: false },
            { label: "C. Je betaalt de kosten en dient hem later in", ok: false },
            { label: "D. Je laat hem zien aan je contactpersoon. De VOG blijft van jou", ok: true }
          ]
        },
        {
          question: "Je overweegt te stoppen met je vrijwilligerswerk. Wat is de beste eerste stap?",
          options: [
            { label: "A. Het eerst bespreken met je contactpersoon, zodat jullie samen kunnen kijken naar een andere rol, locatie of aangepaste inzet", ok: true },
            { label: "B. Gewoon niet meer komen", ok: false },
            { label: "C. Wachten tot het gesprek na een paar maanden", ok: false },
            { label: "D. Een bericht sturen aan de cliënt", ok: false }
          ]
        },
        {
          question: "Je ervaart minder plezier in je vrijwilligerswerk. Wat vraagt Palet Welzijn van je?",
          options: [
            { label: "A. Gewoon doorgaan en er niets over zeggen", ok: false },
            { label: "B. In gesprek gaan, zodat jullie samen naar een passende oplossing zoeken", ok: true },
            { label: "C. Wachten tot de organisatie er zelf over begint", ok: false },
            { label: "D. Zonder te overleggen stoppen", ok: false }
          ]
        }
      ]
    }
  ];

  var STORAGE_KEY = "pw-onboarding-v5";

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

  /* ---------- Opslag ---------- */
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
  var state = loadState();
  var activeId = null;

  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  /* ---------- Voortgang ---------- */
  function checkedFor(step) {
    var arr = state.checked[step.id];
    if (!Array.isArray(arr)) arr = [];
    return step.tasks.map(function (_, i) { return arr[i] === true; });
  }
  function isDone(step) { return checkedFor(step).every(Boolean); }
  function quizAnswered(step) {
    if (!step.quizzes || step.quizzes.length === 0) return true;
    var answers = state.quiz[step.id];
    if (!Array.isArray(answers)) return false;
    return step.quizzes.every(function (_, i) { return answers[i] === true; });
  }
  function stepComplete(step) { return isDone(step) && quizAnswered(step); }
  function currentIndex() {
    for (var i = 0; i < STEPS.length; i++) {
      if (!stepComplete(STEPS[i])) return i;
    }
    return STEPS.length;
  }
  function statusOf(i) {
    var cur = currentIndex();
    if (i < cur) return "done";
    if (i === cur) return "current";
    return "locked";
  }

  /* ---------- Hulpfuncties ---------- */
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
    else { s.setAttribute("aria-hidden", "true"); }
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
  var ICON_LOCK = '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>';

  /* ---------- Rail ---------- */
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

  /* ---------- Panel ---------- */
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

    /* Kop */
    var head = el("div", "pw-ob-panel-head");
    head.appendChild(el("span", "pw-ob-panel-num", String(index + 1)));
    head.appendChild(el("h3", "pw-ob-panel-title", step.title));
    var badge = el("span", "pw-ob-panel-badge");
    if (status === "done") { badge.textContent = "Voltooid"; badge.classList.add("is-done"); }
    else if (status === "current") { badge.textContent = "Hier ben je"; badge.classList.add("is-current"); }
    else badge.textContent = "Vergrendeld";
    head.appendChild(badge);
    panelEl.appendChild(head);

    /* Banner-afbeelding boven titel */
    var banner = el("div", "pw-ob-panel-banner");
    var img = el("img", "pw-ob-panel-img");
    img.src = step.img;
    img.alt = step.alt;
    img.loading = "lazy";
    img.onerror = function () { this.style.display = "none"; };
    banner.appendChild(img);
    panelEl.appendChild(banner);

    /* Intro */
    panelEl.appendChild(el("p", "pw-ob-panel-intro", step.text));

    /* Info blocks */
    if (Array.isArray(step.body) && step.body.length) {
      var info = el("div", "pw-ob-info");
      step.body.forEach(function (block, bi) {
        if (!block || !block.type) return;
        if (block.type === "p") {
          var p = el("p", "pw-ob-info-p", block.text);
          p.style.animationDelay = (bi * 40) + "ms";
          info.appendChild(p);
        } else if (block.type === "h") {
          var h = el("h4", "pw-ob-info-h", block.text);
          h.style.animationDelay = (bi * 40) + "ms";
          info.appendChild(h);
        } else if (block.type === "h3") {
          var h3 = el("h5", "pw-ob-info-h3", block.text);
          h3.style.animationDelay = (bi * 40) + "ms";
          info.appendChild(h3);
        } else if (block.type === "list" && Array.isArray(block.items)) {
          var ul2 = el("ul", "pw-ob-info-list");
          block.items.forEach(function (it) { ul2.appendChild(el("li", null, it)); });
          ul2.style.animationDelay = (bi * 40) + "ms";
          info.appendChild(ul2);
        }
      });
      panelEl.appendChild(info);
    }

    /* Taken */
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

    /* Quiz */
    if (step.quizzes && step.quizzes.length > 0) {
      if (isDone(step)) {
        panelEl.appendChild(buildQuiz(step));
      } else {
        panelEl.appendChild(el("p", "pw-ob-hint", "Vink eerst alle taken hierboven af. Daarna verschijnen de controle-vragen."));
      }
    }

    /* Footer */
    var foot = el("div", "pw-ob-panel-foot");
    var backBtn = el("button", "pw-ob-btn pw-ob-btn--ghost", "Ga terug");
    backBtn.type = "button";
    backBtn.addEventListener("click", function () {
      if (window.history.length > 1) window.history.back();
      else window.location.href = "../onboarding/onboarding.html";
    });
    foot.appendChild(backBtn);

    var isLast = index === STEPS.length - 1;
    var next = el("button", "pw-ob-btn", isLast ? "Afronden" : "Verder naar stap " + (index + 2));
    next.type = "button";
    next.appendChild(svg(ICON_ARROW));
    next.disabled = !(isDone(step) && answered);
    next.addEventListener("click", function () {
      if (isLast) {
        renderStatus();
        openModal();
        return;
      }
      setActive(STEPS[index + 1].id);
    });
    foot.appendChild(next);
    panelEl.appendChild(foot);
  }

  /* ---------- Quiz ---------- */
  function buildQuiz(step) {
    var wrap = el("div", "pw-ob-quiz");
    wrap.appendChild(el("h4", "pw-ob-quiz-heading", "Tijd om je kennis te testen!"));
    wrap.appendChild(el("p", "pw-ob-quiz-intro", "Beantwoord de vragen hieronder. Je moet alle vragen goed beantwoorden om verder te gaan."));

    var answers = state.quiz[step.id];
    if (!Array.isArray(answers)) answers = [];

    step.quizzes.forEach(function (quiz, qi) {
      var correct = answers[qi] === true;
      var card = el("div", "pw-ob-question");
      card.appendChild(el("span", "pw-ob-question-number", "Vraag " + (qi + 1) + " van " + step.quizzes.length));
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
            answers[qi] = true;
            state.quiz[step.id] = answers;
            saveState();
            b.classList.add("is-selected", "is-correct");
            Array.prototype.forEach.call(opts.children, function (c) { c.disabled = true; });
            feedback.textContent = "Perfect!";
            feedback.className = "pw-ob-quiz-feedback is-ok";
          } else {
            feedback.textContent = "Dat is helaas niet goed. Probeer het nog eens.";
            feedback.className = "pw-ob-quiz-feedback is-no";
          }
          renderRail();
          renderStatus();
          var nextBtn = panelEl.querySelector(".pw-ob-panel-foot .pw-ob-btn:not(.pw-ob-btn--ghost)");
          if (nextBtn) nextBtn.disabled = !(isDone(step) && quizAnswered(step));
          if (quizAnswered(step)) {
            var success = wrap.querySelector(".pw-ob-quiz-complete");
            if (!success) {
              success = el("div", "pw-ob-quiz-complete", "Fantastisch! Je hebt alle vragen goed beantwoord. Je kunt verder naar de volgende stap.");
              wrap.appendChild(success);
            }
          }
        });
        opts.appendChild(b);
      });

      card.appendChild(opts);
      if (correct) {
        feedback.textContent = "Perfect!";
        feedback.className = "pw-ob-quiz-feedback is-ok";
      }
      card.appendChild(feedback);
      wrap.appendChild(card);
    });

    if (quizAnswered(step)) {
      wrap.appendChild(el("div", "pw-ob-quiz-complete", "Fantastisch! Je hebt alle vragen goed beantwoord. Je kunt verder naar de volgende stap."));
    }
    return wrap;
  }

  /* ---------- Status ---------- */
  function renderStatus() {
    var cur = currentIndex();
    var done = Math.min(cur, STEPS.length);
    progressLabelEl.textContent = done + " van " + STEPS.length + " stappen afgerond";
    barEl.setAttribute("aria-valuenow", String(done));
    barEl.setAttribute("aria-valuemax", String(STEPS.length));
    barFillEl.style.width = (done / STEPS.length) * 100 + "%";
    badgeEl.textContent = cur >= STEPS.length ? "Klaar voor je eerste dag!" : "Je bent bij stap " + (cur + 1) + "!";
  }

  /* ---------- Navigatie ---------- */
  function setActive(id) {
    var targetIndex = STEPS.findIndex(function (s) { return s.id === id; });
    if (targetIndex < 0) return;
    if (statusOf(targetIndex) === "locked") return;
    activeId = id;
    renderRail();
    renderPanel();
    panelEl.focus({ preventScroll: true });
    panelEl.scrollIntoView({
      behavior: (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) ? "auto" : "smooth",
      block: "nearest"
    });
    if (history.replaceState) history.replaceState(null, "", "#" + id);
  }

  /* ---------- Modal ---------- */
  var lastFocused = null;
  function openModal() {
    if (!modalEl) return;
    lastFocused = document.activeElement;
    modalEl.hidden = false;
    document.body.style.overflow = "hidden";
    var firstBtn = modalEl.querySelector(".pw-ob-modal-btn");
    if (firstBtn) setTimeout(function () { firstBtn.focus(); }, 50);
    document.addEventListener("keydown", onModalKeydown);
  }
  function closeModal() {
    if (!modalEl) return;
    modalEl.hidden = true;
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onModalKeydown);
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }
  function onModalKeydown(e) { if (e.key === "Escape") closeModal(); }
  if (modalEl) {
    modalEl.addEventListener("click", function (e) {
      var t = e.target;
      if (t && t.getAttribute && t.getAttribute("data-close") === "true") closeModal();
    });
  }

  /* ---------- Reset ---------- */
  if (resetEl) {
    resetEl.addEventListener("click", function () {
      var confirmed = window.confirm("Weet je zeker dat je alle voortgang wilt wissen en opnieuw wilt beginnen?");
      if (!confirmed) return;
      state = { checked: {}, quiz: {} };
      saveState();
      activeId = STEPS[0].id;
      renderRail();
      renderPanel();
      renderStatus();
      if (history.replaceState) history.replaceState(null, "", "#welkom");
    });
  }

  /* ---------- Init ---------- */
  var hashId = (location.hash || "").replace("#", "");
  var hashIndex = STEPS.findIndex(function (s) { return s.id === hashId; });
  if (hashIndex >= 0 && statusOf(hashIndex) !== "locked") {
    activeId = STEPS[hashIndex].id;
  } else {
    var firstOpen = currentIndex();
    activeId = STEPS[Math.min(firstOpen, STEPS.length - 1)].id;
  }

  renderRail();
  renderPanel();
  renderStatus();
})();