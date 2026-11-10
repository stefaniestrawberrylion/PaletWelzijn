/* =========================================================
   Palet Welzijn - Beleid & Onboarding
   6 stappen | 14 controle-vragen | felicitatie-modal
   Body = LETTERLIJKE tekst uit het handboek
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     1. STAPPEN EN INHOUD (letterlijk uit handboek)
     ========================================================= */

  var STEPS = [

    /* -------------------------------------------------------
       STAP 1 - WELKOM (H1 + 1.1 + 1.2)
       Vragen 1 en 2
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
  { type: "p", text: "Wat fijn dat je je als vrijwilliger wilt inzetten voor Palet Welzijn! Met jouw tijd en aandacht maak je écht verschil. Jij bent onmisbaar." },
  { type: "p", text: "Palet Welzijn gelooft in een samenleving waarin we met oprechte belangstelling naar elkaar omkijken. We versterken sociale netwerken, houden mensen actief en stellen professionele zorg waar mogelijk uit. Samen maken we het verschil!" }
],

      tasks: [
        "Ik weet wie Palet Welzijn is en wat onze droom en missie zijn",
        "Ik weet dat ik één van de ruim 1.300 vrijwilligers ben"
      ],

      quizzes: [
        {
          question: "Welke kenmerken heeft vrijwilligerswerk bij Palet Welzijn?",
          options: [
            { label: "A. Het is verplicht, onbetaald, binnen een organisatie en met een maatschappelijk doel", ok: false },
            { label: "B. Je doet het uit vrije wil, tegen een kleine vergoeding en met een maatschappelijk doel", ok: false },
            { label: "C. Je doet het uit vrije wil, het is onbetaald, het vindt plaats in een georganiseerde omgeving en het heeft een maatschappelijk doel", ok: true },
            { label: "D. Je doet het in je eigen tijd, zonder afspraken en voor een organisatie naar keuze", ok: false }
          ],
          explanation: "Dit zijn de vier kenmerken van vrijwilligerswerk: je doet het vrijwillig, onbetaald, in een georganiseerde omgeving en met een maatschappelijk doel."
        },
        {
          question: "Wat is typisch voor een projectvrijwilliger?",
          options: [
            { label: "A. Hij of zij bezoekt iemand thuis zodat de mantelzorger even tijd voor zichzelf heeft", ok: false },
            { label: "B. Hij of zij helpt mee aan een tijdelijk project met een duidelijk begin en einde", ok: true },
            { label: "C. Hij of zij is vooral gastheer of gastvrouw in een wijkcentrum", ok: false },
            { label: "D. Hij of zij is altijd chauffeur voor het seniorenvervoer", ok: false }
          ],
          explanation: "Een project heeft een duidelijk begin en een einde. Je weet dus vooraf wat er van je wordt verwacht en voor welke periode."
        }
      ]
    },

    /* -------------------------------------------------------
       STAP 2 - JE START (H4)
       Vragen 3, 4, 11 en 12
       ------------------------------------------------------- */
    {
      id: "start",
      title: "Je start bij Palet Welzijn",
      text: "Je contactpersoon, je VOG en je vrijwilligersovereenkomst.",
      img: "../../assets/start.png",
      alt: "Je start",
      icon: "fa-regular fa-file-lines",
      color: "#0055ff",
      link: "../onboarding/onboarding.html",

      body: [
        { type: "p", text: "We vinden het belangrijk dat je goed begint en weet waar je aan toe bent. Daarom doorlopen we samen een aantal stappen." },

        { type: "h", text: "Stap 1. Kennismaken" },
        { type: "p", text: "Je hebt een kennismakingsgesprek met de contactpersoon vrijwilligers van de locatie of dienst." },
        { type: "p", text: "Tijdens dit gesprek:" },
        { type: "list", items: [
          "Vertellen we je meer over Palet Welzijn.",
          "Bespreken we de vrijwilligersrol waarin je geïnteresseerd bent.",
          "Kijken we naar jouw motivatie en eventuele ervaring.",
          "Krijg je alle ruimte om vragen te stellen."
        ]},
        { type: "p", text: "Het gesprek is informeel. Als je dat prettig vindt, kun je ook een keer meelopen op locatie." },

        { type: "h", text: "Stap 2. De juiste match" },
        { type: "p", text: "Samen bekijken we of de vrijwilligersrol aansluit bij jouw wensen, interesses en mogelijkheden." },
        { type: "p", text: "We vinden het belangrijk dat je op een plek terechtkomt waar jij je prettig voelt." },

        { type: "h", text: "Stap 3. VOG en vrijwilligersovereenkomst" },
        { type: "p", text: "Omdat je werkt met kwetsbare mensen, vragen we iedere vrijwilliger om een Verklaring Omtrent het Gedrag (VOG)." },
        { type: "p", text: "Je ontvangt van Palet Welzijn een digitale link waarmee je de VOG kosteloos kunt aanvragen. Zodra je deze hebt ontvangen, laat je hem zien aan jouw contactpersoon. De VOG blijft jouw eigendom." },
        { type: "p", text: "Daarnaast ontvang je een vrijwilligersovereenkomst. Deze lees je door, vul je in en onderteken je. Dit is nodig voor je aanmelding en verzekering." },

        { type: "h", text: "Stap 4. Aan de slag!" },
        { type: "p", text: "Wanneer alles geregeld is, kun je beginnen met jouw vrijwilligerswerk." },
        { type: "p", text: "Soms spreken we eerst een proefperiode af. Zo kunnen we samen ervaren of de samenwerking en de rol goed bij je passen." },

        { type: "h", text: "Stap 5. Begeleiding en contact" },
        { type: "p", text: "Ook wanneer je eenmaal begonnen bent, sta je er niet alleen voor." },
        { type: "p", text: "Je kunt met vragen terecht bij:" },
        { type: "list", items: [
          "Jouw contactpersoon vrijwilligers.",
          "Een professional die in jouw omgeving werkzaam is."
        ]},
        { type: "p", text: "Na een aantal maanden plannen we een gesprek om te bespreken hoe het gaat. Daarnaast vinden we het belangrijk om regelmatig contact met je te houden." },

        { type: "h", text: "Stap 6. Wanneer je wilt stoppen" },
        { type: "p", text: "Er kunnen verschillende redenen zijn waarom je wilt stoppen. Misschien verandert je privésituatie, wordt het te druk of past de rol niet meer bij je." },
        { type: "p", text: "Bespreek dit altijd eerst met jouw contactpersoon. Samen kijken we of een andere rol, locatie of aangepaste inzet een oplossing kan zijn." },
        { type: "p", text: "Als stoppen uiteindelijk de beste keuze is, bespreken we hoe we jouw vrijwilligerswerk op een goede manier kunnen afronden." }
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
            { label: "A. Je stuurt hem op naar de vertrouwenspersoon", ok: false },
            { label: "B. Je geeft hem aan Palet Welzijn, die hem bewaart", ok: false },
            { label: "C. Je betaalt de kosten en dient hem later in", ok: false },
            { label: "D. Je laat hem zien aan je contactpersoon. De VOG blijft van jou", ok: true }
          ],
          explanation: "De VOG vraag je kosteloos aan via een digitale link van Palet Welzijn. De VOG blijft jouw eigendom."
        },
        {
          question: "Je overweegt te stoppen met je vrijwilligerswerk. Wat is de beste eerste stap?",
          options: [
            { label: "A. Het eerst bespreken met je contactpersoon, zodat jullie samen kunnen kijken naar een andere rol, locatie of aangepaste inzet", ok: true },
            { label: "B. Gewoon niet meer komen", ok: false },
            { label: "C. Wachten tot het gesprek na een paar maanden", ok: false },
            { label: "D. Een bericht sturen aan de cliënt", ok: false }
          ],
          explanation: "Als stoppen de beste keuze is, bespreken jullie samen hoe je je vrijwilligerswerk op een goede manier afrondt."
        },
        {
          question: "Wanneer ben je officieel aangemeld als vrijwilliger?",
          options: [
            { label: "A. Direct na het kennismakingsgesprek", ok: false },
            { label: "B. Zodra je de VOG hebt aangevraagd", ok: false },
            { label: "C. Wanneer alles op de checklist is geregeld, inclusief de ondertekende overeenkomst", ok: true },
            { label: "D. Na afloop van de proefperiode", ok: false }
          ],
          explanation: "Pas als alles geregeld is, inclusief de ondertekende vrijwilligersovereenkomst, ben je officieel aangemeld."
        },
        {
          question: "Welk onderdeel staat op de checklist?",
          options: [
            { label: "A. Een EHBO-diploma", ok: false },
            { label: "B. Referenties van twee oud-werkgevers", ok: false },
            { label: "C. Een medische keuring", ok: false },
            { label: "D. Afspraken over je start en begeleiding", ok: true }
          ],
          explanation: "Op de checklist staan onder andere het kennismakingsgesprek, de VOG, de overeenkomst en de afspraken over je start en begeleiding."
        }
      ]
    },

    /* -------------------------------------------------------
       STAP 3 - WAT BRENGT VRIJWILLIGERSWERK JOU? (H5)
       Vragen 5 en 6
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

        { type: "h", text: "Plezier" },
        { type: "p", text: "Je ontmoet mensen, onderneemt leuke activiteiten en doet iets waar je energie van krijgt." },

        { type: "h", text: "Voldoening" },
        { type: "p", text: "Het geeft een goed gevoel om te weten dat jouw inzet voor iemand anders verschil maakt." },

        { type: "h", text: "Zingeving" },
        { type: "p", text: "Je draagt bij aan een samenleving waarin mensen naar elkaar omkijken." },

        { type: "h", text: "Sociale contacten" },
        { type: "p", text: "Je ontmoet nieuwe mensen, bouwt contacten op en wordt onderdeel van een betrokken netwerk." },

        { type: "h", text: "Meedoen en samenwerken" },
        { type: "p", text: "Je werkt samen met andere vrijwilligers en professionals. Iedereen draagt op zijn eigen manier bij." },

        { type: "h", text: "Structuur" },
        { type: "p", text: "Vrijwilligerswerk kan een fijne invulling geven aan je week en zorgen voor een vast moment om naar uit te kijken." },

        { type: "h", text: "Talentontwikkeling" },
        { type: "p", text: "Je kunt bestaande talenten inzetten en nieuwe ervaringen opdoen. Ook kun je deelnemen aan workshops en scholingen." },

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

      quizzes: [
        {
          question: "Welke waardering krijg je van Palet Welzijn?",
          options: [
            { label: "A. Een vrijwilligersvergoeding per uur", ok: false },
            { label: "B. Een gratis persoonlijk lidmaatschap van Vierstroom Ledenservice", ok: true },
            { label: "C. Een gratis OV-jaarkaart", ok: false },
            { label: "D. Een eigen parkeerplek bij de locatie", ok: false }
          ],
          explanation: "Daarnaast ontvang je een nieuwsbrief, een jaarlijkse attentie, een kleine attentie bij bijzondere gelegenheden en kun je meedoen aan workshops en scholingen."
        },
        {
          question: "Hoe vaak organiseert Palet Welzijn een vrijwilligersbijeenkomst?",
          options: [
            { label: "A. Elke maand", ok: false },
            { label: "B. Elk kwartaal", ok: false },
            { label: "C. Eén keer per jaar", ok: true },
            { label: "D. Alleen wanneer je stopt", ok: false }
          ],
          explanation: "Eén keer per jaar is er een gezellige bijeenkomst voor alle vrijwilligers."
        }
      ]
    },

    /* -------------------------------------------------------
       STAP 4 - WAT VERWACHTEN WIJ VAN JOU? (H6)
       Vragen 7 en 8
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
        { type: "p", text: "We moeten op elkaar kunnen rekenen. Je gaat zorgvuldig om met informatie en respecteert de privacy van anderen." },

        { type: "h", text: "Communicatie en samenwerking" },
        { type: "p", text: "Je kunt zelfstandig werken, maar ook samenwerken met andere vrijwilligers en professionals. Je gaat respectvol om met meningsverschillen en oordeelt niet direct." },

        { type: "h", text: "Vrijwilligersovereenkomst en VOG" },
        { type: "p", text: "Je bent bereid een vrijwilligersovereenkomst met Palet Welzijn aan te gaan en een VOG aan te vragen." },

        { type: "h", text: "Beslissingen over zorg" },
        { type: "p", text: "Beslissingen over zorggerelateerde zaken laat je altijd over aan de verantwoordelijke professional. Twijfel je over een situatie? Bespreek dit dan met jouw contactpersoon." },

        { type: "h", text: "Medische handelingen" },
        { type: "p", text: "Als vrijwilliger verricht je nooit medische of verpleegtechnische handelingen. Dit geldt ook wanneer je deze handelingen in het verleden beroepsmatig hebt uitgevoerd." },
        { type: "p", text: "Daarnaast is het niet toegestaan om gevoelige of privéinformatie van cliënten te beheren of giften aan te nemen." },

        { type: "h", text: "Sociale media" },
        { type: "p", text: "Wees voorzichtig met het gebruik van sociale media, zoals WhatsApp, Facebook, Instagram en YouTube." },
        { type: "p", text: "Privacy is belangrijk. Je mag niet zomaar foto's, filmpjes of informatie over cliënten of bewoners online plaatsen of delen." },
        { type: "p", text: "Ook wanneer je samen met iemand een leuke foto maakt, mag je deze niet zonder toestemming op sociale media zetten." },
        { type: "p", text: "Palet Welzijn plaatst zelf ook geen duidelijk herkenbare portretfoto van jou online zonder jouw toestemming." },
        { type: "p", text: "Twijfel je? Overleg dan met jouw contactpersoon." },

        { type: "h", text: "Onze gedragscode" },
        { type: "p", text: "Bij Palet Welzijn vinden we respect voor elkaar belangrijk. Daarom hebben we een gedragscode opgesteld." },
        { type: "p", text: "We verwachten dat iedereen zich hieraan houdt." },
        { type: "p", text: "De belangrijkste uitgangspunten zijn:" },
        { type: "list", items: [
          "Respect voor elkaar: grensoverschrijdend fysiek of seksueel gedrag is niet toegestaan. Agressie, geweld en schelden worden niet geaccepteerd.",
          "Verantwoord omgaan met middelen: roken en het onder invloed zijn van alcohol en/of drugs tijdens je inzet zijn niet toegestaan.",
          "Respect voor eigendommen: diefstal is niet toegestaan.",
          "Zorgvuldig omgaan met sociale media: houd rekening met privacy en de gevolgen van wat je online plaatst."
        ]},
        { type: "p", text: "Je gedrag, kleding, representativiteit en uiterlijke verzorging passen bij een respectvolle benadering van anderen en bij de uitstraling van Palet Welzijn." },
        { type: "p", text: "Wanneer je ongewenste omgangsvormen of gedrag ervaart, bespreek dit dan met jouw contactpersoon of de vertrouwenspersoon." }
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
            { label: "A. Ik doe het niet, laat het aan de professional en bespreek het met mijn contactpersoon", ok: true },
            { label: "B. Ik doe het, want ik heb er ervaring mee", ok: false },
            { label: "C. Ik doe het alleen als de bewoner dat prettig vindt", ok: false },
            { label: "D. Ik doe het alleen als niemand het ziet", ok: false }
          ],
          explanation: "Als vrijwilliger verricht je nooit medische of verpleegtechnische handelingen, ook niet als je deze eerder beroepsmatig deed. Twijfel je? Bespreek het met je contactpersoon."
        },
        {
          question: "Je maakt tijdens een wandeling een leuke foto met een bewoner. Mag je die op sociale media zetten?",
          options: [
            { label: "A. Ja, het is jouw eigen account", ok: false },
            { label: "B. Ja, als je geen naam noemt", ok: false },
            { label: "C. Alleen met toestemming van de bewoner", ok: true },
            { label: "D. Ja, als je de foto na een dag verwijdert", ok: false }
          ],
          explanation: "Ook bij een leuke foto mag je niets zonder toestemming online zetten. Twijfel je? Overleg met je contactpersoon."
        }
      ]
    },

    /* -------------------------------------------------------
       STAP 5 - VEILIGHEID (H7)
       Vragen 9 en 10
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
        { type: "p", text: "Ben je getuige van een incident of maak je een situatie mee die mogelijk schadelijke gevolgen heeft voor jou of voor iemand anders?" },
        { type: "p", text: "Bespreek dit altijd met jouw contactpersoon." },
        { type: "p", text: "Deze kan naar je luisteren en samen met jou beoordelen of de situatie ook formeel gemeld moet worden." },
        { type: "p", text: "Wacht hier niet mee. Ook wanneer je twijfelt, is het belangrijk om een situatie bespreekbaar te maken." },

        { type: "h", text: "Vertrouwenspersoon" },
        { type: "p", text: "Heb je iets meegemaakt tijdens je vrijwilligerswerk en kun je hiermee niet terecht bij jouw contactpersoon of manager? Dan kun je contact opnemen met de vertrouwenspersoon van Palet Welzijn." },
        { type: "p", text: "Dit kan via de vertrouwenslijn:" },
        { type: "p", text: "088 - 144 0200" },
        { type: "p", text: "De vertrouwenslijn wordt verzorgd door Bezemer & Schubad. Je kunt een terugbelverzoek achterlaten. De vertrouwenspersoon neemt vervolgens zo snel mogelijk contact met je op, op een tijdstip dat jou uitkomt." },

        { type: "h", text: "Verzekering" },
        { type: "p", text: "Palet Welzijn heeft voor vrijwilligers een ongevallen- en aansprakelijkheidsverzekering afgesloten." },
        { type: "p", text: "Hierdoor ben je verzekerd voor eventuele schade die onbedoeld ontstaat tijdens je vrijwilligerswerk." },
        { type: "p", text: "Het eigen risico van de aansprakelijkheidsverzekering neemt Palet Welzijn voor haar rekening." },
        { type: "p", text: "Wil je meer weten over de actuele verzekeringsvoorwaarden? Vraag deze dan op bij de manager informele ondersteuning van Palet Welzijn." },

        { type: "h", text: "Geheimhouding en privacy" },
        { type: "p", text: "Wanneer je vrijwilligerswerk doet, kun je persoonlijke en vertrouwelijke informatie te horen krijgen." },
        { type: "p", text: "We verwachten dat je hier zorgvuldig mee omgaat." },
        { type: "p", text: "Alles wat je vertrouwelijk over cliënten, bewoners of de organisatie te weten komt, valt onder de geheimhoudingsplicht." },
        { type: "p", text: "Deze verplichting blijft ook gelden wanneer je stopt met vrijwilligerswerk bij Palet Welzijn." },
        { type: "p", text: "Ook jouw eigen persoonsgegevens behandelen we zorgvuldig. Palet Welzijn bewaart deze in een beveiligd systeem volgens de Algemene Verordening Gegevensbescherming (AVG)." },
        { type: "p", text: "Je gegevens worden alleen met jouw toestemming met anderen gedeeld. Dit geldt bijvoorbeeld voor het doorgeven van gegevens aan Vierstroom Ledenservice." }
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
          ],
          explanation: "Je contactpersoon luistert en beoordeelt samen met jou of de situatie formeel gemeld moet worden. Wacht hier niet mee."
        },
        {
          question: "Je bent gestopt met vrijwilligerswerk bij Palet Welzijn. Geldt de geheimhoudingsplicht dan nog?",
          options: [
            { label: "A. Nee, alleen zolang je vrijwilliger bent", ok: false },
            { label: "B. Ja, maar alleen een jaar lang", ok: false },
            { label: "C. Ja, de geheimhoudingsplicht blijft ook gelden na het stoppen", ok: true },
            { label: "D. Alleen als je nog contact hebt met cliënten", ok: false }
          ],
          explanation: "Alles wat je vertrouwelijk over cliënten, bewoners of de organisatie te weten komt, valt onder de geheimhouding. Dat geldt ook na het stoppen."
        }
      ]
    },

    /* -------------------------------------------------------
       STAP 6 - AANMELDING & TOT SLOT (H8 + H9 samengevoegd)
       Vragen 13 en 14
       ------------------------------------------------------- */
    {
      id: "aanmelding",
      title: "Aanmelding & tot slot",
      text: "Je officiële aanmelding en samen maken we het verschil.",
      img: "../../assets/aanmelding.png",
      alt: "Aanmelding & tot slot",
      icon: "fa-solid fa-flag-checkered",
      color: "#0F766E",
      link: "../onboarding/onboarding.html",

      body: [
        { type: "p", text: "Voordat je officieel aan de slag gaat, moeten een aantal zaken geregeld zijn." },

        { type: "h", text: "Jouw checklist:" },
        { type: "list", items: [
          "Kennismakingsgesprek gevoerd.",
          "Vrijwilligersrol en afspraken besproken.",
          "VOG aangevraagd en getoond aan jouw contactpersoon.",
          "Vrijwilligersovereenkomst ontvangen.",
          "Vrijwilligersovereenkomst ingevuld en ondertekend.",
          "Afspraken over jouw start en begeleiding gemaakt."
        ]},
        { type: "p", text: "Wanneer alles geregeld is, ben je officieel aangemeld als vrijwilliger bij Palet Welzijn." },
        { type: "p", text: "Welkom bij het team!" },

        { type: "h", text: "Tot slot – samen maken we het verschil!" },
        { type: "p", text: "We hopen dat je met veel plezier jouw rol als vrijwilliger bij Palet Welzijn gaat invullen." },
        { type: "p", text: "Onthoud dat jouw inzet waardevol is. Iedere vrijwilliger draagt op zijn of haar eigen manier bij aan het welzijn van onze cliënten, bewoners, mantelzorgers en hun sociale omgeving." },
        { type: "p", text: "Heb je vragen, loop je ergens tegenaan of ervaar je minder plezier in je vrijwilligerswerk? Blijf er niet mee rondlopen, maar ga met ons in gesprek. Samen zoeken we naar een passende oplossing." },
        { type: "p", text: "Ken je iemand die ook iets voor een ander wil betekenen?" },
        { type: "p", text: "Vertel dan gerust over jouw ervaringen bij Palet Welzijn! Misschien inspireer je iemand om ook vrijwilliger te worden." },
        { type: "p", text: "Er is veel mogelijk en we kijken graag samen welke rol bij iemand past." },
        { type: "p", text: "Meer weten of aanmelden?" },
        { type: "p", text: "Palet Welzijn" },
        { type: "list", items: [
          "Website: www.paletwelzijn.nl",
          "E-mail: vrijwilligerswerk@paletwelzijn.nl",
          "Telefoon: 088 - 359 45 66"
        ]},
        { type: "p", text: "Bedankt voor jouw betrokkenheid, jouw tijd en jouw aandacht. We zijn blij met je!" },
        { type: "p", text: "Samen maken we het verschil." }
      ],

      tasks: [
        "Ik heb de checklist doorlopen (kennismaking, VOG, overeenkomst, afspraken)",
        "Ik weet dat ik altijd in gesprek kan over wat bij mij past",
        "Ik weet hoe ik Palet Welzijn kan bereiken voor vragen of aanmeldingen"
      ],

      quizzes: [
        {
          question: "Je ervaart minder plezier in je vrijwilligerswerk. Wat vraagt Palet Welzijn van je?",
          options: [
            { label: "A. Gewoon doorgaan en er niets over zeggen", ok: false },
            { label: "B. In gesprek gaan, zodat jullie samen naar een passende oplossing zoeken", ok: true },
            { label: "C. Wachten tot de organisatie er zelf over begint", ok: false },
            { label: "D. Zonder te overleggen stoppen", ok: false }
          ],
          explanation: "Je hoeft hier niet mee rond te blijven lopen. Jullie zoeken samen naar een oplossing."
        },
        {
          question: "Een kennis wil ook iets voor een ander betekenen. Wat kun je doen?",
          options: [
            { label: "A. Hem zonder gesprek laten meelopen", ok: false },
            { label: "B. Zelf zijn VOG voor hem aanvragen", ok: false },
            { label: "C. Vertellen over je ervaringen en hem verwijzen naar de website of vrijwilligerswerk@paletwelzijn.nl", ok: true },
            { label: "D. Niets, aanmelden kan niet zomaar", ok: false }
          ],
          explanation: "Je mag je ervaringen delen. Voor aanmelden is er altijd eerst een kennismaking."
        }
      ]
    }
  ];

  /* =========================================================
     2. OPSLAG EN ELEMENTEN
     ========================================================= */

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

  /* =========================================================
     3. STATUS OPSLAAN EN LADEN
     ========================================================= */

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var p = JSON.parse(raw);
        if (p && typeof p === "object") {
          return { checked: p.checked || {}, quiz: p.quiz || {} };
        }
      }
    } catch (e) {
      console.warn("Voortgang kon niet worden geladen.", e);
    }
    return { checked: {}, quiz: {} };
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
    if (!Array.isArray(arr)) arr = [];
    return step.tasks.map(function (_, i) { return arr[i] === true; });
  }

  function isDone(step) {
    return checkedFor(step).every(Boolean);
  }

  function quizAnswered(step) {
    var answers = state.quiz[step.id];
    if (!Array.isArray(answers)) return false;
    return step.quizzes.every(function (_, i) { return answers[i] === true; });
  }

  function stepComplete(step) {
    return isDone(step) && quizAnswered(step);
  }

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

  /* =========================================================
     5. HULPFUNCTIES
     ========================================================= */

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

  /* =========================================================
     6. LINKERNAVIGATIE
     ========================================================= */

  function renderRail() {
    railEl.textContent = "";

    STEPS.forEach(function (step, i) {
      var status = statusOf(i);
      var li = el("li");
      var btn = el("button", "pw-ob-rail-item is-" + status);
      btn.type = "button";
      btn.style.setProperty("--step-color", step.color);

      if (status === "current" || activeId === step.id) {
        btn.setAttribute("aria-current", "step");
      }
      if (status === "locked") btn.disabled = true;

      btn.addEventListener("click", function () { setActive(step.id); });

      var stop = el("span", "pw-ob-rail-stop");
      if (status === "done") {
        stop.appendChild(svg(ICON_CHECK, "Stap " + (i + 1) + " voltooid"));
      } else if (status === "locked") {
        stop.appendChild(svg(ICON_LOCK, "Stap " + (i + 1) + " vergrendeld"));
      } else {
        stop.appendChild(icon(step.icon));
      }
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

  /* =========================================================
     7. RECHTERKOLOM / STAPPEN WEERGEVEN
     ========================================================= */

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

       /* AFBEELDING */
    var img = el("img", "pw-ob-panel-img");
    img.src = step.img;
    img.alt = step.alt;
    img.loading = "lazy";
    img.onerror = function () { this.style.display = "none"; };
    panelEl.appendChild(img);

    /* KOP */
    var head = el("div", "pw-ob-panel-head");
    head.appendChild(el("span", "pw-ob-panel-num", String(index + 1)));
    head.appendChild(el("h3", "pw-ob-panel-title", step.title));

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
    /* INTRO */
    panelEl.appendChild(el("p", "pw-ob-panel-intro", step.text));

    /* INFORMATIEBLOK — letterlijke tekst uit handboek */
    if (Array.isArray(step.body) && step.body.length) {
      var info = el("div", "pw-ob-info");

      step.body.forEach(function (block) {
        if (!block || !block.type) return;

        if (block.type === "p") {
          info.appendChild(el("p", "pw-ob-info-p", block.text));

        } else if (block.type === "h") {
          info.appendChild(el("h4", "pw-ob-info-h", block.text));

        } else if (block.type === "h3") {
          info.appendChild(el("h5", "pw-ob-info-h3", block.text));

        } else if (block.type === "list" && Array.isArray(block.items)) {
          var ul2 = el("ul", "pw-ob-info-list");
          block.items.forEach(function (it) { ul2.appendChild(el("li", null, it)); });
          info.appendChild(ul2);
        }
      });

      panelEl.appendChild(info);
    }

    /* TAKEN */
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

    /* QUIZ */
    if (isDone(step)) {
      panelEl.appendChild(buildQuiz(step));
    } else {
      panelEl.appendChild(el("p", "pw-ob-hint", "Vink eerst alle taken hierboven af. Daarna verschijnen de controle-vragen."));
    }

    /* FOOTER */
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

  /* =========================================================
     8. MEERDERE CONTROLE-VRAGEN PER STAP
     ========================================================= */

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

            feedback.textContent = "Goed gedaan! " + quiz.explanation;
            feedback.className = "pw-ob-quiz-feedback is-ok";
          } else {
            feedback.textContent = "Dat is helaas niet goed. Probeer het nog eens.";
            feedback.className = "pw-ob-quiz-feedback is-no";
          }

          renderRail();
          renderStatus();

          var nextBtn = panelEl.querySelector(".pw-ob-panel-foot .pw-ob-btn:not(.pw-ob-btn--ghost)");
          if (nextBtn) {
            nextBtn.disabled = !(isDone(step) && quizAnswered(step));
          }

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
        feedback.textContent = "Goed gedaan! " + quiz.explanation;
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

  /* =========================================================
     9. VOORTGANGSBALK EN STATUS
     ========================================================= */

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

  /* =========================================================
     10. NAAR EEN ANDERE STAP
     ========================================================= */

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

  /* =========================================================
     11. FELICITATIE-MODAL
     ========================================================= */

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

  function onModalKeydown(e) {
    if (e.key === "Escape") closeModal();
  }

  if (modalEl) {
    modalEl.addEventListener("click", function (e) {
      var t = e.target;
      if (t && t.getAttribute && t.getAttribute("data-close") === "true") closeModal();
    });
  }

  /* =========================================================
     12. RESETFUNCTIE
     ========================================================= */

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

  /* =========================================================
     13. INITIALISATIE
     ========================================================= */

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