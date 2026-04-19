(function () {
  "use strict";

  function pathIndicatesEn() {
    var path = window.location.pathname.replace(/\\/g, "/");
    return path.indexOf("/en/") !== -1;
  }

  function getEffectiveLang() {
    return pathIndicatesEn() ? "en" : "de";
  }

  function getAlternateLocaleUrl() {
    var path = window.location.pathname.replace(/\\/g, "/");
    var hash = window.location.hash || "";
    var search = window.location.search || "";

    if (path.indexOf("/en/") !== -1) {
      return path.replace("/en/", "/") + search + hash;
    }

    if (
      path === "/" ||
      path === "" ||
      path.endsWith("/") ||
      /\/index\.html$/i.test(path)
    ) {
      var base = path.replace(/\/?index\.html$/i, "").replace(/\/$/, "");
      return base + "/en/index.html" + search + hash;
    }

    if (path.indexOf("/leistungen/") !== -1) {
      var idx = path.lastIndexOf("/leistungen/");
      return path.slice(0, idx) + "/en" + path.slice(idx) + search + hash;
    }

    return path + search + hash;
  }

  function getMailContext() {
    var c = document.body && document.body.getAttribute("data-mail-context");
    if (c === "weg" || c === "miet" || c === "dl" || c === "bau") return c;
    return "home";
  }

  function mailPackForContext(t, ctx) {
    var map = {
      home: {
        sub: t.contactMailSubjectHome,
        body: t.contactMailBodyHome,
        cta: t.contactCtaHome,
      },
      weg: {
        sub: t.pageWegMailSubject,
        body: t.pageWegMailBody,
        cta: t.pageWegContactCta,
      },
      miet: {
        sub: t.pageMietMailSubject,
        body: t.pageMietMailBody,
        cta: t.pageMietContactCta,
      },
      dl: {
        sub: t.pageDlMailSubject,
        body: t.pageDlMailBody,
        cta: t.pageDlContactCta,
      },
      bau: {
        sub: t.pageBauMailSubject,
        body: t.pageBauMailBody,
        cta: t.pageBauContactCta,
      },
    };
    return map[ctx] || map.home;
  }

  const STRINGS = {
    de: {
      metaTitle: "Segel Immoverwaltung — Hausverwaltung & Koordination Karlsruhe & Region",
      metaDescription:
        "Hausverwaltung für WEGs, Mietverwaltung, Dienstleister- und Baukoordination mit klaren Prozessen. Einzugsgebiet Karlsruhe, Rhein-Neckar, Kraichgau und Umgebung.",
      skip: "Zum Inhalt springen",
      navAria: "Hauptnavigation",
      navServices: "Leistungen",
      navRegion: "Region",
      navProcess: "Verwaltungswechsel",
      navFaq: "FAQ",
      navContact: "Kontakt",
      navImprint: "Impressum",
      navOpenMenu: "Menü öffnen",
      navCloseMenu: "Menü schließen",
      navAriaSubmenuLeistungen: "Leistungen — Untermenü",
      navLeistungWeg: "Hausverwaltung (WEG)",
      navLeistungMiet: "Mietverwaltung",
      navLeistungDl: "Dienstleisterkoordination",
      navLeistungBau: "Baukoordination",
      brandTag: "Immobilienverwaltung & Koordination",
      brandLogoAlt: "Segel Immoverwaltung — Logo",
      heroH1: "Verwaltung und Koordination, die entlasten und Struktur schaffen",
      heroLead:
        "Vier Schwerpunkte in Karlsruhe und der Region: Hausverwaltung (WEG), Mietverwaltung, Dienstleister- und Baukoordination — mit klaren Abläufen und festem Ansprechpartner.",
      carouselRoleDesc: "Karussell",
      carouselLeistungenHeading: "Unsere Leistungen",
      carouselControlsAria: "Karussell steuern",
      carouselPrevAria: "Vorherige Leistung",
      carouselNextAria: "Nächste Leistung",
      ctaPrimary: "Kostenloses Erstgespräch für Ihre WEG anfragen",
      ctaSecondary: "Verwaltungswechsel in 3 Schritten",
      pillarsTitle: "Was uns ausmacht",
      pillar1Title: "Entlastung",
      pillar1Text:
        "Wir übernehmen operative Aufgaben strukturiert und zuverlässig – damit Beirat und Eigentümergemeinschaft spürbar entlastet werden.",
      pillar2Title: "Ordnung & Transparenz",
      pillar2Text:
        "Klare Abläufe, Fristen und eine nachvollziehbare Dokumentation schaffen Struktur und reduzieren unnötige Rückfragen.",
      pillar3Title: "Verlässlichkeit",
      pillar3Text:
        "Fristen bleiben im Blick, Beschlüsse werden sauber nachverfolgt und vereinbarte Maßnahmen zuverlässig umgesetzt.",
      pillar4Title: "Ruhigere Zusammenarbeit",
      pillar4Text:
        "Klare Kommunikation und eine sachliche, diplomatische Begleitung sorgen für mehr Transparenz und weniger Reibung — in der Gemeinschaft, im Mietalltag und bei Koordination am Objekt.",
      servicesTitle: "Was wir in der Hausverwaltung für Ihre WEG übernehmen",
      servicesLead:
        "Klar, strukturiert und verständlich — ohne unnötiges Fachchinesisch.",
      svcAccountingTitle: "Abrechnung & Finanzplanung",
      svcAccountingItems:
        "Jahresabrechnungen, Wirtschaftspläne, Hausgeld und alle wichtigen kaufmännischen Grundlagen — transparent und gut nachvollziehbar, bei Bedarf in Abstimmung mit dem Steuerberater.",
      svcMeetingsTitle: "Eigentümerversammlungen",
      svcMeetingsItems:
        "Einberufung, Tagesordnung, Vorbereitung, Protokollierung, Beschlussvorlagen und die zuverlässige Umsetzung gefasster Beschlüsse.",
      svcMaintenanceTitle: "Instandhaltung & Handwerkerkoordination",
      svcMaintenanceItems:
        "Organisation von Reparaturen und Instandhaltungsmaßnahmen, Einholung von Angeboten und Abstimmung im Rahmen von Beschlüssen und Budget — mit einem bewährten Netzwerk zuverlässiger Handwerksbetriebe.",
      svcInsuranceTitle: "Versicherungen & Schadensfälle",
      svcInsuranceItems:
        "Begleitung bei Versicherungsfragen und Schäden, Koordination der nächsten Schritte und saubere Dokumentation des gesamten Vorgangs.",
      svcOrgTitle: "Organisation & Dienstleister",
      svcOrgItems:
        "Abstimmung mit Hausmeistern, Handwerksbetrieben, Versorgern und weiteren Partnern, damit Abläufe reibungslos und zuverlässig funktionieren.",
      svcCommTitle: "Kommunikation & Betreuung",
      svcCommItems:
        "Verlässliche Kommunikation mit Eigentümern, Beirat und Dienstleistern — digital, postalisch und telefonisch. Auch bei unterschiedlichem Abstimmungsbedarf innerhalb der WEG sorgen wir für eine sachliche, diplomatische und lösungsorientierte Begleitung.",
      leistungTeaserWegTitle: "Hausverwaltung (WEG)",
      leistungTeaserWegText:
        "Hausverwaltung für Wohnungseigentümergemeinschaften (WEG): Abrechnung, Versammlungen, Instandhaltung, Versicherungen und verlässliche Kommunikation.",
      leistungTeaserMietTitle: "Mietverwaltung",
      leistungTeaserMietText:
        "Organisation rund um vermietete Einheiten: laufende Verwaltung, Abstimmung mit Mietern und saubere Einbindung kaufmännischer Abläufe.",
      leistungTeaserDlTitle: "Dienstleisterkoordination",
      leistungTeaserDlText:
        "Handwerk, Hausmeister, Versorger: Angebote, Termine und Nachverfolgung — damit Maßnahmen nicht stehen bleiben.",
      leistungTeaserBauTitle: "Baukoordination",
      leistungTeaserBauText:
        "Begleitung größerer Instandsetzungs- und Sanierungsprojekte: Planung, Koordination der Gewerke und nachvollziehbare Dokumentation.",
      leistungTeaserCta: "Mehr erfahren",
      detailBreadcrumbAria: "Brotkrümel",
      detailBreadcrumbHome: "Startseite",
      detailBack: "Zurück zur Leistungsübersicht",
      pageWegMetaTitle: "Hausverwaltung (WEG) — Segel Immoverwaltung Karlsruhe & Region",
      pageWegMetaDescription:
        "Hausverwaltung für Wohnungseigentümergemeinschaften: Jahresabrechnung, Eigentümerversammlungen, Instandhaltung und Versicherungen — strukturiert, mit festem Ansprechpartner.",
      pageWegH1: "Hausverwaltung (WEG)",
      pageWegLead:
        "Was wir für Ihre Wohnungseigentümergemeinschaft konkret übernehmen — klar strukturiert und gut nachvollziehbar.",
      pageWegImgAlt: "Eigentümerversammlung (Symbolbild)",
      pageMietMetaTitle: "Mietverwaltung — Segel Immoverwaltung Karlsruhe & Region",
      pageMietMetaDescription:
        "Mietverwaltung für Eigentümer: laufende Organisation, Mieterkommunikation und kaufmännische Abläufe — mit festem Ansprechpartner.",
      pageMietH1: "Mietverwaltung",
      pageMietLead:
        "Organisierte Verwaltung vermieteter Objekte: weniger operative Last im Alltag, klare Abläufe gegenüber Mietern und verlässliche Abstimmung der kaufmännischen Themen — ohne Rechtsberatung zu ersetzen, wo Spezialisten gefragt sind.",
      pageMietImgAlt: "Mietverwaltung (Symbolbild)",
      pageMietServicesHeading: "Was wir in der Mietverwaltung übernehmen",
      pageMietBlock1Title: "Kaufmännische Verwaltung",
      pageMietBlock1Text:
        "Mieteingänge, Nebenkostenabrechnungen, Fristen und Unterlagen werden strukturiert und nachvollziehbar betreut – bei Bedarf in abgestimmter Zusammenarbeit mit dem Steuerberater.",
      pageMietBlock2Title: "Kommunikation & Mieterbetreuung",
      pageMietBlock2Text:
        "Wir sind für organisatorische Anliegen erreichbar, koordinieren Übergaben und begleiten gemeldete Mängel sachlich und dokumentiert. So werden Eigentümer im Alltag deutlich entlastet.",
      pageMietBlock3Title: "Technische Koordination & Dienstleister",
      pageMietBlock3Text:
        "Handwerker und weitere Dienstleister werden im Rahmen der vereinbarten Leistungen eingebunden, Termine abgestimmt und Vorgänge nachvollziehbar nachverfolgt.",
      pageMietBlock4Title: "Eigentümerkommunikation & Transparenz",
      pageMietBlock4Text:
        "Eigentümer erhalten klare und nachvollziehbare Informationen zu laufenden Vorgängen, abgestimmten Maßnahmen und wichtigen Entwicklungen – ohne sich um jede Einzelabstimmung selbst kümmern zu müssen.",
      pageDlMetaTitle: "Dienstleisterkoordination — Segel Immoverwaltung",
      pageDlMetaDescription:
        "Koordination von Handwerk, Hausmeister und Versorgern: Angebote, Termine und Qualität im Blick — strukturiert dokumentiert.",
      pageDlH1: "Dienstleisterkoordination",
      pageDlLead:
        "Wenn viele Parteien zusammenkommen, braucht es eine ruhige Steuerung: wir bündeln Anfragen, holen Vergleichsangebote ein, koordinieren Termine und begleiten die Ausführung — damit nichts untergeht.",
      pageDlImgAlt: "Koordination am Bau (Symbolbild)",
      pageDlServicesHeading: "Was wir in der Dienstleisterkoordination übernehmen",
      pageDlServicesLead:
        "Damit Leistungen abgestimmt, transparent und zuverlässig umgesetzt werden.",
      pageDlBlock1Title: "Erfassung & Einordnung",
      pageDlBlock1Text:
        "Störungen, Maßnahmen und Rückmeldungen werden strukturiert aufgenommen, eingeordnet und für die weitere Bearbeitung klar erfasst.",
      pageDlBlock2Title: "Angebote & Abstimmung",
      pageDlBlock2Text:
        "Notwendige Angebote werden eingeholt und im Rahmen der vereinbarten Zuständigkeiten, Budgets und Anforderungen abgestimmt.",
      pageDlBlock3Title: "Beauftragung & Umsetzung",
      pageDlBlock3Text:
        "Leistungen werden verlässlich beauftragt, Termine koordiniert und die Ausführung mit den beteiligten Dienstleistern nachvollziehbar begleitet.",
      pageDlBlock4Title: "Dokumentation & Nachverfolgung",
      pageDlBlock4Text:
        "Fortschritte, Rückmeldungen und Ergebnisse werden sauber dokumentiert, damit offene Punkte im Blick bleiben und Vorgänge nachvollziehbar abgeschlossen werden können.",
      pageDlBlock5Title: "Abstimmung mit Partnern",
      pageDlBlock5Text:
        "Die Zusammenarbeit mit Handwerkern, Hausmeistern, Versicherern, Energieversorgern und weiteren Partnern erfolgt mit klarer Kommunikation und eindeutigen Zuständigkeiten.",
      pageBauMetaTitle: "Baukoordination — Segel Immoverwaltung Karlsruhe & Region",
      pageBauMetaDescription:
        "Koordination von Instandsetzungs- und Sanierungsmaßnahmen: Gewerke, Termine und Dokumentation — strukturiert begleitet.",
      pageBauH1: "Baukoordination",
      pageBauLead:
        "Größere Maßnahmen an Gebäude oder technischer Anlage brauchen Planung und Begleitung: wir steuern Abläufe, halten Fristen im Blick und sorgen für eine nachvollziehbare Dokumentation für Eigentümer und Beirat.",
      pageBauImgAlt: "Baustelle / Sanierung (Symbolbild)",
      pageBauServicesHeading: "Was wir bei Maßnahmen und Projekten übernehmen",
      pageBauServicesLead:
        "Damit Planung, Umsetzung und Übergabe strukturiert und verlässlich ablaufen.",
      pageBauBlock1Title: "Grundlagen & Bedarf",
      pageBauBlock1Text:
        "Wir erfassen den Bedarf auf Basis von Beschlüssen, Bestandsaufnahmen oder konkreten Anforderungen und schaffen damit eine belastbare Grundlage für die weitere Planung.",
      pageBauBlock2Title: "Angebote & Bewertung",
      pageBauBlock2Text:
        "Leistungen werden beschrieben, Angebote eingeholt und nachvollziehbar verglichen – mit Blick auf Qualität, Wirtschaftlichkeit und den passenden Leistungsumfang.",
      pageBauBlock3Title: "Kosten & Zeitrahmen",
      pageBauBlock3Text:
        "Budget, zeitlicher Ablauf und organisatorische Eckpunkte werden im Einklang mit den gefassten Beschlüssen und den verfügbaren Mitteln abgestimmt.",
      pageBauBlock4Title: "Umsetzung & Koordination",
      pageBauBlock4Text:
        "Die Durchführung wird strukturiert begleitet, beteiligte Gewerke werden koordiniert und Termine sowie Abläufe verlässlich nachgehalten.",
      pageBauBlock5Title: "Abnahme & Nachverfolgung",
      pageBauBlock5Text:
        "Leistungen, Rückmeldungen und mögliche Mängel werden sauber dokumentiert und bis zur Klärung beziehungsweise Freigabe nachvollziehbar begleitet.",
      pageBauBlock6Title: "Übergabe & Dokumentation",
      pageBauBlock6Text:
        "Nach Abschluss werden relevante Unterlagen geordnet in die laufende Verwaltung übernommen – als Grundlage für Abrechnung, Fortführung und spätere Maßnahmen.",
      regionTitle: "Einzugsgebiet",
      regionLead: "Schwerpunkt Karlsruhe und Umgebung (ca. 60 km), u. a.:",
      regionMore: "Weitere Orte im Radius gerne — kurz nachfragen, ob es passt.",
      regionCities:
        "Karlsruhe · Ettlingen · Bruchsal · Rastatt · Baden-Baden · Pforzheim · Mannheim · Heidelberg · Landau in der Pfalz · Germersheim · Speyer · Schwetzingen · Waghäusel · Stutensee · Bretten · Bühl · Achern",
      processTitle: "So läuft der Verwaltungswechsel",
      processLead:
        "Wir begleiten den Wechsel strukturiert und sorgen für einen geordneten, reibungslosen Übergang.",
      step1Title: "Erstgespräch & Bedarf",
      step1Text:
        "Zu Beginn klären wir die wichtigsten Eckpunkte – etwa Objekt oder Gemeinschaft, Umfang, aktuelle Themen, Ansprechpartner und Erreichbarkeit.",
      step2Title: "Unterlagen & Übernahme",
      step2Text:
        "Wir übernehmen die vorhandenen Unterlagen und laufenden Vorgänge strukturiert und nachvollziehbar – mit klarem Blick auf Vollständigkeit und offene Themen.",
      step3Title: "Start & Kommunikation",
      step3Text:
        "Zum Start legen wir Zuständigkeiten und Kommunikationswege fest und kümmern uns um die geordnete Weiterführung laufender Verwaltungs- und Koordinationsthemen — etwa Hausgeld, Versicherungen, Termine und offene Maßnahmen.",
      processQuickTitle: "Kurz & konkret zum Verwaltungswechsel",
      processStepsBlurb:
        "So läuft ein Wechsel in 3 Schritten: Erstgespräch und Bedarf klären → Unterlagen und laufende Vorgänge strukturiert übernehmen → Start mit festen Zuständigkeiten und klaren Kommunikationswegen.",
      processDocsHeading: "Welche Unterlagen wir zuerst brauchen",
      processDocsLi1:
        "Letzte Jahresabrechnung, Wirtschaftsplan und aktuelle Hausgeldabrechnungen (sofern vorhanden)",
      processDocsLi2:
        "Protokolle der Eigentümerversammlungen, Beschlusssammlung, Teilungserklärung / Gemeinschaftsordnung",
      processDocsLi3:
        "Verträge zu Versicherungen, Hausmeister, Dienstleistern; offene Reparatur- und Schadensfälle in Kurzform",
      processDaysHeading: "Was wir in den ersten 14 Tagen typischerweise übernehmen",
      processDaysIntro:
        "Direkt nach Start sorgen wir dafür, dass nichts liegen bleibt und alle Beteiligten wissen, wie es weitergeht:",
      processDaysLi1:
        "Erfassung der Dringlichkeiten: offene Maßnahmen, Fristen, wiederkehrende Zahlungen und laufende Schadens- oder Störungsfälle",
      processDaysLi2:
        "Abstimmung mit Beirat bzw. Ansprechpartnern: Zuständigkeiten, Erreichbarkeit und nächste organisatorische Schritte",
      processDaysLi3:
        "Saubere Priorisierung und Nachverfolgung der wichtigsten Verwaltungs- und Koordinationsthemen bis zur ersten Statusübersicht",
      faqTitle: "Häufige Fragen",
      faq1Q: "Wie schnell erreiche ich jemanden bei Dringlichem?",
      faq1A:
        "Bei dringenden Anliegen sind wir für die Eigentümergemeinschaft schnell und verlässlich erreichbar. Schadensfälle, technische Störungen oder andere akute Themen bearbeiten wir mit hoher Priorität, damit keine unnötige Zeit verloren geht. Uns ist wichtig, dass Sie sich im Ernstfall nicht allein gelassen fühlen.",
      faq2Q: "Gibt es einen festen Ansprechpartner?",
      faq2A:
        "Ja, bei uns haben Sie einen festen Ansprechpartner, der Ihre WEG und die Besonderheiten Ihrer Gemeinschaft kennt. Dadurch vermeiden wir unnötige Rückfragen, schaffen kurze Wege und sorgen für eine persönliche, verbindliche Betreuung. So wissen Sie immer, an wen Sie sich wenden können.",
      faq3Q: "Sind auch kleinere WEGs willkommen?",
      faq3A:
        "Selbstverständlich. Wir betreuen nicht nur größere Gemeinschaften, sondern auch kleinere WEGs engagiert, zuverlässig und mit der gleichen Sorgfalt. Gerade kleinere Eigentümergemeinschaften profitieren von einer strukturierten, persönlichen und gut organisierten Verwaltung.",
      faq4Q: "Wie aufwendig ist der Wechsel von der alten Verwaltung?",
      faq4A:
        "Der Wechsel ist in der Regel deutlich einfacher, als viele zunächst denken. Wir begleiten Sie strukturiert durch den gesamten Übergang, unterstützen bei den notwendigen Schritten und sorgen für eine geordnete Übernahme der Unterlagen und Informationen. Unser Ziel ist es, den Verwaltungswechsel für Ihre WEG so reibungslos wie möglich zu gestalten.",
      faq5Q: "Ersetzt die Verwaltung Rechts- oder Steuerberatung?",
      faq5A:
        "Nein, die Hausverwaltung ersetzt keine Rechts- oder Steuerberatung. Wir kümmern uns um die ordnungsgemäße Verwaltung Ihrer Gemeinschaft und arbeiten bei speziellen rechtlichen oder steuerlichen Fragestellungen bei Bedarf mit den zuständigen Fachleuten zusammen. So ist sichergestellt, dass Ihre WEG in jedem Bereich passend betreut wird.",
      faq6Q: "Wie läuft die Zusammenarbeit mit dem Verwaltungsbeirat ab?",
      faq6A:
        "Eine gute Zusammenarbeit mit dem Beirat ist uns wichtig. Wir verstehen den Beirat als wichtigen Ansprechpartner innerhalb der Gemeinschaft und sorgen für eine offene, verlässliche und strukturierte Kommunikation.",
      faq7Q: "Wie werden Reparaturen und Instandhaltungen organisiert?",
      faq7A:
        "Wir organisieren Reparaturen und Instandhaltungsmaßnahmen zuverlässig, wirtschaftlich und effizient. Dabei profitieren unsere Eigentümergemeinschaften von unserem gewachsenen Netzwerk an erfahrenen Handwerksbetrieben, mit denen wir vertrauensvoll zusammenarbeiten. So können Maßnahmen oft schnell, abgestimmt und in guter Qualität umgesetzt werden.",
      faq8Q: "Unterstützen Sie bei Eigentümerversammlungen?",
      faq8A:
        "Ja, selbstverständlich. Wir bereiten Eigentümerversammlungen sorgfältig vor und begleiten diese professionell. Dabei stellen wir sicher, dass Beschlüsse klar dokumentiert und im Anschluss zuverlässig umgesetzt werden.",
      faq9Q: "Wie transparent ist die Verwaltung bei Kosten und Entscheidungen?",
      faq9A:
        "Transparenz ist für uns ein zentraler Bestandteil einer guten Verwaltung. Eigentümergemeinschaften erhalten klare Informationen zu laufenden Themen, Beschlüssen, Maßnahmen und Kosten, damit Entscheidungen nachvollziehbar und gut vorbereitet getroffen werden können.",
      faq10Q: "Wie erfolgt die Kommunikation mit Eigentümern?",
      faq10A:
        "Wir kommunizieren mit Eigentümern digital, postalisch und telefonisch – je nachdem, was im jeweiligen Fall sinnvoll und gewünscht ist. Dabei achten wir auf eine zuverlässige Erreichbarkeit, klare Informationen und eine verbindliche Bearbeitung aller Anliegen. So ist eine moderne und zugleich persönliche Kommunikation gewährleistet.",
      faq11Q: "Wie schnell kann eine Übernahme erfolgen?",
      faq11A:
        "Das hängt vom Einzelfall ab, ist aber in vielen Fällen gut planbar. Wir stimmen den Ablauf mit der Eigentümergemeinschaft ab und sorgen für einen geordneten Start ohne unnötige Reibungsverluste.",
      faq12Q: "Übernehmen Sie auch problematische oder festgefahrene WEGs?",
      faq12A:
        "Ja, auch Gemeinschaften mit erhöhtem Abstimmungsbedarf oder organisatorischen Herausforderungen können von einer klaren, strukturierten Verwaltung profitieren. Wichtig ist uns, wieder Ordnung, Transparenz und verlässliche Abläufe zu schaffen.",
      faq13Q: "Was unterscheidet Ihre Verwaltung von anderen Anbietern?",
      faq13A:
        "Wir verbinden persönliche Betreuung mit strukturierter Arbeitsweise und einem hohen Anspruch an Verlässlichkeit. Unser Ziel ist nicht nur die laufende Verwaltung, sondern eine langfristig gut organisierte und stabile Betreuung Ihrer Eigentümergemeinschaft.",
      contactTitle: "Kontakt",
      contactPhoneDisplay: "07244 558 05 02",
      contactEmailDisplay: "kontakt@nomailyet.com",
      contactCtaClosing: "Haben wir Ihr Interesse geweckt?",
      contactMicrocopy:
        "Nehmen Sie unverbindlich Kontakt mit uns auf – telefonisch oder per E-Mail. Wir melden uns in der Regel innerhalb eines Werktags zurück und besprechen mit Ihnen, wie Ihr Anliegen am besten eingeordnet und weitergeführt werden kann. Für eine schnelle und gezielte Rückmeldung helfen uns einige kurze Angaben: um welches Objekt oder welche Gemeinschaft es geht, in welchem Ort sich die Immobilie befindet, welches Thema Sie beschäftigt und wann Sie gut erreichbar sind. So erhalten Sie ohne Umwege eine passende erste Einschätzung und einen klaren nächsten Schritt.",
      contactDrawerAria: "Kontakt — Telefon und E-Mail",
      contactCtaHome: "Unverbindliche Anfrage senden",
      contactMailSubjectHome: "Anfrage: Erstgespräch — Segel Immoverwaltung",
      contactMailBodyHome:
        "Guten Tag,\n\nwir möchten ein unverbindliches Erstgespräch zur Hausverwaltung (WEG) anfragen.\n\nGemeinschaft / Objekt:\nOrt:\nKurz zum Anliegen (z. B. Verwaltungswechsel, Beratung):\nErreichbarkeit:\n\nMit freundlichen Grüßen",
      mobileContactBarLabel: "Schnellkontakt",
      mobileContactCall: "Anrufen",
      mobileContactMail: "E-Mail",
      mobileContactRequest: "Anfrage",
      pageWegContactHook:
        "Beirat entlasten und Verwaltungswechsel sauber übernehmen — wir klären Bedarf und nächste Schritte im Erstgespräch.",
      pageWegContactCta: "Kostenloses Erstgespräch für Ihre WEG anfragen",
      pageWegMailSubject: "Anfrage: Hausverwaltung (WEG) — Segel Immoverwaltung",
      pageWegMailBody:
        "Guten Tag,\n\nwir interessieren uns für die Hausverwaltung unserer WEG.\n\nObjekt / Gemeinschaft:\nOrt:\nAktuelles Thema (z. B. Verwaltungswechsel, Übernahme):\nErreichbarkeit:\n\nMit freundlichen Grüßen",
      pageMietContactHook:
        "Weniger operative Last im Mietalltag — wir strukturieren Verwaltung, Mieterkommunikation und kaufmännische Abläufe.",
      pageMietContactCta: "Unverbindliche Anfrage zur Mietverwaltung senden",
      pageMietMailSubject: "Anfrage: Mietverwaltung — Segel Immoverwaltung",
      pageMietMailBody:
        "Guten Tag,\n\nwir möchten die Mietverwaltung für unsere vermietete(n) Einheit(en) anfragen.\n\nObjekt / Adresse:\nAnzahl Einheiten / kurze Einordnung:\nAktuelles Thema:\nErreichbarkeit:\n\nMit freundlichen Grüßen",
      pageDlContactHook:
        "Handwerk, Hausmeister, Versorger — wir koordinieren Angebote, Termine und Nachverfolgung am Objekt.",
      pageDlContactCta: "Anfrage zur Dienstleisterkoordination senden",
      pageDlMailSubject: "Anfrage: Dienstleisterkoordination — Segel Immoverwaltung",
      pageDlMailBody:
        "Guten Tag,\n\nwir benötigen Unterstützung bei der Koordination von Dienstleistern am Objekt.\n\nObjekt / Adresse:\nArt des Bedarfs (z. B. Instandhaltung, Störung, mehrere Gewerke):\nErreichbarkeit:\n\nMit freundlichen Grüßen",
      pageBauContactHook:
        "Größere Maßnahmen begleiten wir mit Planung, Gewerkekoordination und nachvollziehbarer Dokumentation.",
      pageBauContactCta: "Anfrage zur Baukoordination senden",
      pageBauMailSubject: "Anfrage: Baukoordination — Segel Immoverwaltung",
      pageBauMailBody:
        "Guten Tag,\n\nwir planen oder führen eine größere Instandsetzungs- oder Sanierungsmaßnahme durch und suchen Koordination.\n\nObjekt / Adresse:\nArt / ungefährer Umfang der Maßnahme:\nZeitrahmen (falls bekannt):\nErreichbarkeit:\n\nMit freundlichen Grüßen",
      pageWegFitHeading: "Passt das zu Ihrer Situation?",
      pageWegFitYesTitle: "Geeignet für",
      pageWegFitYes1:
        "Wohnungseigentümergemeinschaften mit laufender oder geplanter professioneller Verwaltung",
      pageWegFitYes2:
        "Beiräte und Eigentümer, die operative Themen strukturiert abgeben möchten",
      pageWegFitYes3:
        "Gemeinschaften mit Verwaltungswechsel oder Bedarf an sauberer Übernahme",
      pageWegFitNoTitle: "Weniger geeignet, wenn",
      pageWegFitNo1:
        "Sie ausschließlich einmalige Rechtsberatung oder Prozessvertretung suchen (hier sind Fachanwälte die richtige Adresse)",
      pageWegFitNo2:
        "es um Themen ohne Bezug zu verwalteten Objekten oder Gemeinschaften geht",
      pageMietFitHeading: "Passt das zu Ihrer Situation?",
      pageMietFitYesTitle: "Geeignet für",
      pageMietFitYes1:
        "Eigentümer vermieteter Wohn- oder Gewerbeeinheiten mit Verwaltungsbedarf im Alltag",
      pageMietFitYes2:
        "Objekte, bei denen Mieterkommunikation, Abrechnungen und Koordination entlastet werden sollen",
      pageMietFitYes3:
        "Eigentümer, die einen festen Ansprechpartner für organisatorische und kaufmännische Abläufe möchten",
      pageMietFitNoTitle: "Weniger geeignet, wenn",
      pageMietFitNo1:
        "Sie ausschließlich rechtliche Auseinandersetzungen mit Mietern führen lassen möchten, ohne Verwaltungsbezug",
      pageMietFitNo2:
        "Sie keine verwaltete Immobilie im beschriebenen Sinne betreuen",
      pageDlFitHeading: "Passt das zu Ihrer Situation?",
      pageDlFitYesTitle: "Geeignet für",
      pageDlFitYes1:
        "Objekte mit mehreren Dienstleistern oder laufenden Koordinationsthemen (Handwerk, Hausmeister, Versorger)",
      pageDlFitYes2:
        "WEGs, Vermieter oder Verwalter, die Angebote, Termine und Nachverfolgung bündeln möchten",
      pageDlFitYes3:
        "Situationen, in denen Maßnahmen sonst liegen bleiben oder unklare Zuständigkeiten entstehen",
      pageDlFitNoTitle: "Weniger geeignet, wenn",
      pageDlFitNo1:
        "Sie ausschließlich eine einzelne Kleinreparatur ohne laufende Koordination benötigen",
      pageDlFitNo2:
        "kein konkreter Bedarf an strukturierter Steuerung mehrerer Leistungserbringer besteht",
      pageBauFitHeading: "Passt das zu Ihrer Situation?",
      pageBauFitYesTitle: "Geeignet für",
      pageBauFitYes1:
        "Größere Instandsetzungs-, Sanierungs- oder Modernisierungsprojekte mit mehreren Gewerken",
      pageBauFitYes2:
        "WEGs oder Eigentümer, die Planung, Vergleich und Ausführung begleitet haben möchten",
      pageBauFitYes3:
        "Vorhaben, bei denen Fristen, Kosten und Dokumentation von vornherein klar bleiben sollen",
      pageBauFitNoTitle: "Weniger geeignet, wenn",
      pageBauFitNo1:
        "Sie ausschließlich Architektur- oder Bauleitung durch einen externen Fachplaner ohne Verwaltungsbezug suchen",
      pageBauFitNo2:
        "es sich um sehr kleine Maßnahmen ohne Koordinationsbedarf handelt",
      imprintTitle: "Impressum",
      imprintPlaceholder:
        "Angaben gemäß gesetzlicher Pflicht (Anbieterkennzeichnung) werden vor Veröffentlichung der Website durch die Segel Immoverwaltung ergänzt. Bis dahin wenden Sie sich bitte direkt per E-Mail.",
      imprintPlaceholderNote:
        "Platzhalter bis zur Freigabe der finalen Impressumsdaten.",
      footerCompany: "Segel Immoverwaltung",
      langDe: "Deutsch",
      langEn: "English",
      langToggle: "Sprache wählen",
      langSwitchToEn: "Sprache: Deutsch. Auf Englisch umschalten.",
      langSwitchToDe: "Sprache: Englisch. Auf Deutsch umschalten.",
    },
    en: {
      metaTitle: "Segel Immoverwaltung — Property & building management, Karlsruhe & region",
      metaDescription:
        "Building management for condominium associations (WEG), rental management, contractor and construction coordination — clear processes. Serving Karlsruhe, Rhine-Neckar, Kraichgau and surrounding areas.",
      skip: "Skip to content",
      navAria: "Main navigation",
      navServices: "Services",
      navRegion: "Area",
      navProcess: "Changing managers",
      navFaq: "FAQ",
      navContact: "Contact",
      navImprint: "Legal notice",
      navOpenMenu: "Open menu",
      navCloseMenu: "Close menu",
      navAriaSubmenuLeistungen: "Services — submenu",
      navLeistungWeg: "Building management (WEG)",
      navLeistungMiet: "Rental property management",
      navLeistungDl: "Contractor coordination",
      navLeistungBau: "Construction coordination",
      brandTag: "Property management & coordination",
      brandLogoAlt: "Segel Immoverwaltung — logo",
      heroH1: "Management and coordination that create relief and structure",
      heroLead:
        "Four focus areas in Karlsruhe and the region: building management (WEG), rental management, contractor and construction coordination — clear processes and a dedicated point of contact.",
      carouselRoleDesc: "carousel",
      carouselLeistungenHeading: "Our services",
      carouselControlsAria: "Carousel controls",
      carouselPrevAria: "Previous service",
      carouselNextAria: "Next service",
      ctaPrimary: "Request a free initial call for your WEG",
      ctaSecondary: "Changing managers in 3 steps",
      pillarsTitle: "What defines us",
      pillar1Title: "Relief",
      pillar1Text:
        "We take on operational tasks in a structured, dependable way — so the advisory board and owners’ association feel a real reduction in workload.",
      pillar2Title: "Order & transparency",
      pillar2Text:
        "Clear processes, deadlines and traceable documentation create structure and cut down on unnecessary back-and-forth.",
      pillar3Title: "Dependability",
      pillar3Text:
        "Deadlines stay on the radar, resolutions are followed through properly and agreed measures are implemented reliably.",
      pillar4Title: "Calmer collaboration",
      pillar4Text:
        "Clear communication and factual, diplomatic support foster more transparency and less friction — in owners’ associations, rental operations and on-site coordination.",
      servicesTitle: "What we take on in building management for your WEG",
      servicesLead:
        "Clear, structured and easy to understand — without unnecessary jargon.",
      svcAccountingTitle: "Accounts & financial planning",
      svcAccountingItems:
        "Annual statements, economic plans, service charges and all essential commercial foundations — transparent and easy to follow, coordinated with your tax adviser where needed.",
      svcMeetingsTitle: "Owners’ meetings",
      svcMeetingsItems:
        "Convening, agenda, preparation, minutes, draft resolutions and reliable implementation of adopted resolutions.",
      svcMaintenanceTitle: "Maintenance & trades coordination",
      svcMaintenanceItems:
        "Organising repairs and maintenance, obtaining quotes and aligning work with resolutions and budget — with a trusted network of reliable trades businesses.",
      svcInsuranceTitle: "Insurance & claims",
      svcInsuranceItems:
        "Support on insurance matters and claims, coordination of next steps and thorough documentation of the entire process.",
      svcOrgTitle: "Organisation & service providers",
      svcOrgItems:
        "Coordination with caretakers, trades, utilities and other partners so processes run smoothly and reliably.",
      svcCommTitle: "Communication & support",
      svcCommItems:
        "Dependable communication with owners, advisory board and service providers — digital, by post and by phone. Even where owners need different levels of coordination, we provide factual, diplomatic and solution-oriented support.",
      leistungTeaserWegTitle: "Building management (WEG)",
      leistungTeaserWegText:
        "Building management for condominium owners’ associations: accounts, meetings, maintenance, insurance and dependable communication.",
      leistungTeaserMietTitle: "Rental property management",
      leistungTeaserMietText:
        "Organisation for rented units: day-to-day administration, tenant communication and sound commercial processes.",
      leistungTeaserDlTitle: "Contractor coordination",
      leistungTeaserDlText:
        "Trades, caretaker, utilities: quotes, appointments and follow-up — so work does not stall.",
      leistungTeaserBauTitle: "Construction coordination",
      leistungTeaserBauText:
        "Support for larger repair and refurbishment projects: planning, coordinating trades and clear documentation.",
      leistungTeaserCta: "Learn more",
      detailBreadcrumbAria: "Breadcrumb",
      detailBreadcrumbHome: "Home",
      detailBack: "Back to services overview",
      pageWegMetaTitle: "Building management (WEG) — Segel Immoverwaltung Karlsruhe & region",
      pageWegMetaDescription:
        "Building management for condominium owners’ associations: annual accounts, owners’ meetings, maintenance and insurance — structured, with a dedicated contact person.",
      pageWegH1: "Building management (WEG)",
      pageWegLead:
        "What we take on for your homeowners’ association in concrete terms — clearly structured and easy to follow.",
      pageWegImgAlt: "Owners’ meeting (illustrative image)",
      pageMietMetaTitle: "Rental property management — Segel Immoverwaltung Karlsruhe & region",
      pageMietMetaDescription:
        "Rental management for landlords: ongoing organisation, tenant communication and commercial processes — with a dedicated contact person.",
      pageMietH1: "Rental property management",
      pageMietLead:
        "Organised administration of rented properties: less day-to-day load, clear processes with tenants and reliable handling of commercial matters — without replacing legal advice where specialists are required.",
      pageMietImgAlt: "Rental management (illustrative image)",
      pageMietServicesHeading: "What we take on in rental management",
      pageMietBlock1Title: "Commercial administration",
      pageMietBlock1Text:
        "Incoming rent, tenant service-charge statements, deadlines and records are handled in a structured, traceable way — where needed in coordination with your tax adviser.",
      pageMietBlock2Title: "Communication & tenant support",
      pageMietBlock2Text:
        "We are available for organisational matters, coordinate handovers and support reported defects in a factual, documented way — so landlords are noticeably relieved in day-to-day life.",
      pageMietBlock3Title: "Technical coordination & contractors",
      pageMietBlock3Text:
        "Trades and other contractors are involved within the agreed scope, appointments are coordinated and matters followed up in a traceable way.",
      pageMietBlock4Title: "Owner communication & transparency",
      pageMietBlock4Text:
        "Owners receive clear, traceable information on ongoing matters, agreed measures and important developments — without having to handle every individual coordination themselves.",
      pageDlMetaTitle: "Contractor coordination — Segel Immoverwaltung",
      pageDlMetaDescription:
        "Coordination of trades, caretaker and utilities: quotes, appointments and quality — documented in a structured way.",
      pageDlH1: "Contractor coordination",
      pageDlLead:
        "When many parties are involved, calm steering matters: we bundle requests, obtain comparable quotes, coordinate appointments and follow execution — so nothing falls through the cracks.",
      pageDlImgAlt: "On-site coordination (illustrative image)",
      pageDlServicesHeading: "What we take on in contractor coordination",
      pageDlServicesLead:
        "So that services are aligned, implemented transparently and reliably.",
      pageDlBlock1Title: "Recording & classification",
      pageDlBlock1Text:
        "Faults, measures and feedback are captured in a structured way, classified and clearly logged for further processing.",
      pageDlBlock2Title: "Quotes & coordination",
      pageDlBlock2Text:
        "Necessary quotes are obtained and aligned within the agreed responsibilities, budgets and requirements.",
      pageDlBlock3Title: "Commissioning & implementation",
      pageDlBlock3Text:
        "Services are commissioned reliably, appointments coordinated and execution followed in a traceable way with the contractors involved.",
      pageDlBlock4Title: "Documentation & follow-up",
      pageDlBlock4Text:
        "Progress, feedback and results are documented clearly so open items stay visible and cases can be closed in a traceable way.",
      pageDlBlock5Title: "Coordination with partners",
      pageDlBlock5Text:
        "Collaboration with trades, caretaker, insurers, utilities and other partners is handled with clear communication and unambiguous responsibilities.",
      pageBauMetaTitle: "Construction coordination — Segel Immoverwaltung Karlsruhe & region",
      pageBauMetaDescription:
        "Coordination of repair and refurbishment measures: trades, schedules and documentation — structured support.",
      pageBauH1: "Construction coordination",
      pageBauLead:
        "Larger building or plant measures need planning and on-site support: we steer workflows, keep deadlines in view and provide traceable documentation for owners and the advisory board.",
      pageBauImgAlt: "Construction / refurbishment (illustrative image)",
      pageBauServicesHeading: "What we take on for measures and projects",
      pageBauServicesLead:
        "So that planning, implementation and handover proceed in a structured, reliable way.",
      pageBauBlock1Title: "Foundations & requirements",
      pageBauBlock1Text:
        "We capture requirements based on resolutions, condition surveys or concrete needs, creating a sound basis for further planning.",
      pageBauBlock2Title: "Quotes & evaluation",
      pageBauBlock2Text:
        "Work is described, quotes obtained and compared in a traceable way — with an eye on quality, value for money and the right scope of services.",
      pageBauBlock3Title: "Costs & timeline",
      pageBauBlock3Text:
        "Budget, timing and organisational milestones are aligned with adopted resolutions and available funds.",
      pageBauBlock4Title: "Implementation & coordination",
      pageBauBlock4Text:
        "Execution is supported in a structured way, trades involved are coordinated, and schedules and workflows are tracked reliably.",
      pageBauBlock5Title: "Acceptance & follow-up",
      pageBauBlock5Text:
        "Services, feedback and potential defects are documented clearly and followed in a traceable way until clarified or signed off.",
      pageBauBlock6Title: "Handover & documentation",
      pageBauBlock6Text:
        "After completion, relevant documents are organised for handover into ongoing administration — as a basis for accounting, continuity and future work.",
      regionTitle: "Service area",
      regionLead: "Focus on Karlsruhe and surroundings (about 60 km), including:",
      regionMore: "Other nearby locations welcome — ask us if yours fits.",
      regionCities:
        "Karlsruhe · Ettlingen · Bruchsal · Rastatt · Baden-Baden · Pforzheim · Mannheim · Heidelberg · Landau in der Pfalz · Germersheim · Speyer · Schwetzingen · Waghäusel · Stutensee · Bretten · Bühl · Achern",
      processTitle: "How a change of management works",
      processLead:
        "We guide the transition in a structured way and ensure an orderly, smooth handover.",
      step1Title: "Initial call & needs",
      step1Text:
        "At the outset we clarify the key points — such as property or community, scope, current topics, contact persons and availability.",
      step2Title: "Documents & takeover",
      step2Text:
        "We take over existing documents and ongoing matters in a structured, traceable way — with a clear view of completeness and open items.",
      step3Title: "Go-live & communication",
      step3Text:
        "At go-live we define responsibilities and communication channels and ensure the orderly continuation of ongoing administration and coordination topics — such as service charges, insurance, appointments and open measures.",
      processQuickTitle: "Changing managers — the essentials",
      processStepsBlurb:
        "Three steps: clarify needs in an initial call → take over documents and ongoing cases in a structured way → start with clear responsibilities and communication paths.",
      processDocsHeading: "Documents we need first",
      processDocsLi1:
        "Latest annual statement, economic plan and current service-charge statements (if available)",
      processDocsLi2:
        "Minutes of owners’ meetings, collection of resolutions, declaration of division / community rules",
      processDocsLi3:
        "Insurance contracts, caretaker and service contracts; a short summary of open repairs and claims",
      processDaysHeading: "What we typically take on in the first 14 days",
      processDaysIntro:
        "Right after go-live we make sure nothing stalls and everyone knows what happens next:",
      processDaysLi1:
        "Capture priorities: open measures, deadlines, recurring payments and ongoing claims or faults",
      processDaysLi2:
        "Align with the advisory board or key contacts: responsibilities, availability and next organisational steps",
      processDaysLi3:
        "Sound prioritisation and follow-up on the most important administration and coordination topics until the first status overview",
      faqTitle: "Frequently asked questions",
      faq1Q: "How quickly can I reach someone in an urgent case?",
      faq1A:
        "For urgent matters we are quickly and reliably available for the owners' association. We handle damage events, technical faults and other acute issues with high priority so no unnecessary time is lost. It is important to us that you do not feel left alone when it really matters.",
      faq2Q: "Is there a fixed contact person?",
      faq2A:
        "Yes, with us you have a dedicated contact person who knows your WEG and the specifics of your community. This avoids unnecessary back-and-forth, keeps communication paths short and ensures personal, dependable support. You always know exactly whom to turn to.",
      faq3Q: "Are smaller WEGs welcome?",
      faq3A:
        "Absolutely. We look after not only larger communities but also smaller WEGs with the same commitment, reliability and care. Smaller owners' associations in particular benefit from structured, personal and well-organised management.",
      faq4Q: "How demanding is switching from the previous manager?",
      faq4A:
        "Switching is usually much easier than many initially think. We guide you through the entire transition in a structured way, support you with the necessary steps and ensure an orderly handover of records and information. Our goal is to make the change of management as smooth as possible for your WEG.",
      faq5Q: "Does management replace legal or tax advice?",
      faq5A:
        "No, property management does not replace legal or tax advice. We take care of the proper administration of your community and work together with the relevant specialists where specific legal or tax questions arise. This ensures that your WEG is appropriately supported in every area.",
      faq6Q: "How does cooperation with the management advisory board work?",
      faq6A:
        "Good cooperation with the advisory board matters to us. We see the board as an important contact within the community and ensure open, dependable and structured communication.",
      faq7Q: "How are repairs and maintenance organised?",
      faq7A:
        "We organise repairs and maintenance reliably, economically and efficiently. Our owners' associations benefit from our established network of experienced trades businesses we work with in confidence. That often allows work to be carried out quickly, in coordination and to a high standard.",
      faq8Q: "Do you support owners' meetings?",
      faq8A:
        "Yes, of course. We prepare owners' meetings carefully and support them professionally. We ensure resolutions are clearly documented and reliably implemented afterwards.",
      faq9Q: "How transparent is management on costs and decisions?",
      faq9A:
        "Transparency is central to good management for us. Owners' associations receive clear information on ongoing topics, resolutions, measures and costs so decisions can be made in an understandable and well-informed way.",
      faq10Q: "How do you communicate with owners?",
      faq10A:
        "We communicate with owners digitally, by post and by phone — depending on what makes sense and is preferred in each case. We focus on reliable availability, clear information and dependable handling of every concern. That ensures communication is both modern and personal.",
      faq11Q: "How quickly can a takeover happen?",
      faq11A:
        "It depends on the individual case, but is often easy to plan. We align the process with the owners' association and ensure an orderly start without unnecessary friction.",
      faq12Q: "Do you also take on difficult or stuck WEGs?",
      faq12A:
        "Yes — communities with greater need for coordination or organisational challenges can also benefit from clear, structured management. Our aim is to restore order, transparency and reliable processes.",
      faq13Q: "What sets your management apart from other providers?",
      faq13A:
        "We combine personal support with structured working practices and high standards of reliability. Our goal is not only day-to-day administration but long-term, well-organised and stable care for your owners' association.",
      contactTitle: "Contact",
      contactPhoneDisplay: "07244 558 05 02",
      contactEmailDisplay: "kontakt@nomailyet.com",
      contactCtaClosing: "Have we sparked your interest?",
      contactMicrocopy:
        "Please contact us on a non-binding basis — by phone or by email. We usually get back to you within one business day and discuss how your enquiry can best be understood and taken forward. For a quick, targeted reply, a few brief details help us: which property or owners’ association it concerns, where the property is located, what topic you would like to discuss, and when you are easy to reach. That way you receive an appropriate first assessment and a clear next step without unnecessary detours.",
      contactDrawerAria: "Contact — phone and email",
      contactCtaHome: "Send a non-binding inquiry",
      contactMailSubjectHome: "Inquiry: initial call — Segel Immoverwaltung",
      contactMailBodyHome:
        "Hello,\n\nwe would like to request a non-binding initial call on building (WEG) management.\n\nAssociation / property:\nLocation:\nBrief note on your situation (e.g. changing managers, advice):\nHow to reach you:\n\nKind regards",
      mobileContactBarLabel: "Quick contact",
      mobileContactCall: "Call",
      mobileContactMail: "Email",
      mobileContactRequest: "Inquiry",
      pageWegContactHook:
        "Relieve the advisory board and manage a clean handover — we clarify needs and next steps in an initial call.",
      pageWegContactCta: "Request a free initial call for your WEG",
      pageWegMailSubject: "Inquiry: building management (WEG) — Segel Immoverwaltung",
      pageWegMailBody:
        "Hello,\n\nwe are interested in building management for our condominium association.\n\nProperty / association:\nLocation:\nCurrent topic (e.g. changing managers, takeover):\nHow to reach you:\n\nKind regards",
      pageMietContactHook:
        "Less day-to-day load in rental operations — we structure administration, tenant communication and commercial processes.",
      pageMietContactCta: "Send a non-binding rental management inquiry",
      pageMietMailSubject: "Inquiry: rental management — Segel Immoverwaltung",
      pageMietMailBody:
        "Hello,\n\nwe would like to inquire about rental management for our rented unit(s).\n\nProperty / address:\nNumber of units / brief context:\nCurrent topic:\nHow to reach you:\n\nKind regards",
      pageDlContactHook:
        "Trades, caretaker, utilities — we coordinate quotes, appointments and follow-up on site.",
      pageDlContactCta: "Send a contractor coordination inquiry",
      pageDlMailSubject: "Inquiry: contractor coordination — Segel Immoverwaltung",
      pageDlMailBody:
        "Hello,\n\nwe need support coordinating service providers at our property.\n\nProperty / address:\nType of need (e.g. maintenance, fault, several trades):\nHow to reach you:\n\nKind regards",
      pageBauContactHook:
        "We support larger projects with planning, trades coordination and traceable documentation.",
      pageBauContactCta: "Send a construction coordination inquiry",
      pageBauMailSubject: "Inquiry: construction coordination — Segel Immoverwaltung",
      pageBauMailBody:
        "Hello,\n\nwe are planning or carrying out a larger repair or refurbishment measure and are looking for coordination support.\n\nProperty / address:\nType / approximate scope:\nTimeline (if known):\nHow to reach you:\n\nKind regards",
      pageWegFitHeading: "Is this a good fit?",
      pageWegFitYesTitle: "A good fit if",
      pageWegFitYes1:
        "You represent a condominium association with ongoing or planned professional management",
      pageWegFitYes2:
        "The advisory board or owners want to hand off operational topics in a structured way",
      pageWegFitYes3:
        "You are changing managers or need a clean takeover of documents and cases",
      pageWegFitNoTitle: "Less of a fit if",
      pageWegFitNo1:
        "You only need one-off legal advice or litigation (a qualified lawyer is the right contact)",
      pageWegFitNo2:
        "The matter has no link to a managed property or owners’ association",
      pageMietFitHeading: "Is this a good fit?",
      pageMietFitYesTitle: "A good fit if",
      pageMietFitYes1:
        "You own rented residential or commercial units and need day-to-day administration support",
      pageMietFitYes2:
        "You want tenant communication, statements and coordination handled with less friction",
      pageMietFitYes3:
        "You want a dedicated contact for organisational and commercial processes",
      pageMietFitNoTitle: "Less of a fit if",
      pageMietFitNo1:
        "You only need legal disputes with tenants handled without any management scope",
      pageMietFitNo2:
        "You do not manage a property in the sense described above",
      pageDlFitHeading: "Is this a good fit?",
      pageDlFitYesTitle: "A good fit if",
      pageDlFitYes1:
        "The property has several service providers or ongoing coordination topics (trades, caretaker, utilities)",
      pageDlFitYes2:
        "WEGs, landlords or managers want quotes, appointments and follow-up bundled in one place",
      pageDlFitYes3:
        "Measures otherwise stall or responsibilities stay unclear",
      pageDlFitNoTitle: "Less of a fit if",
      pageDlFitNo1:
        "You only need a one-off minor repair without ongoing coordination",
      pageDlFitNo2:
        "There is no real need to steer several providers in a structured way",
      pageBauFitHeading: "Is this a good fit?",
      pageBauFitYesTitle: "A good fit if",
      pageBauFitYes1:
        "You are planning larger repair, refurbishment or modernisation with several trades",
      pageBauFitYes2:
        "WEGs or owners want support for planning, comparison and execution",
      pageBauFitYes3:
        "Deadlines, costs and documentation should stay clear from the outset",
      pageBauFitNoTitle: "Less of a fit if",
      pageBauFitNo1:
        "You only want architectural or site supervision by an external planner without a management link",
      pageBauFitNo2:
        "The job is very small with no coordination needs",
      imprintTitle: "Legal notice (Impressum)",
      imprintPlaceholder:
        "Mandatory provider details under German law will be added by Segel Immoverwaltung before the site goes live. Until then, please use email for direct contact.",
      imprintPlaceholderNote:
        "Placeholder until final imprint details are approved.",
      footerCompany: "Segel Immoverwaltung",
      langDe: "German",
      langEn: "English",
      langToggle: "Choose language",
      langSwitchToEn: "Language: German. Switch to English.",
      langSwitchToDe: "Language: English. Switch to German.",
    },
  };

  function getLang() {
    return getEffectiveLang();
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "de") return;
    applyStrings(lang);
    document.documentElement.lang = lang;
    const toggle = document.getElementById("lang-toggle");
    const badge = document.getElementById("lang-badge");
    const t = STRINGS[lang];
    if (toggle && t) {
      toggle.setAttribute(
        "aria-label",
        lang === "de" ? t.langSwitchToEn : t.langSwitchToDe
      );
    }
    if (badge) badge.textContent = lang === "de" ? "DE" : "EN";

    var navToggle = document.getElementById("nav-toggle");
    var siteHeader = document.querySelector(".site-header");
    if (navToggle && siteHeader && t) {
      var navOpen = siteHeader.classList.contains("is-nav-open");
      navToggle.setAttribute(
        "aria-label",
        navOpen ? t.navCloseMenu : t.navOpenMenu
      );
    }
  }

  function applyStrings(lang) {
    const t = STRINGS[lang];
    if (!t) return;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (!key || !Object.prototype.hasOwnProperty.call(t, key)) return;
      const value = t[key];
      if (el.hasAttribute("data-i18n-attr")) {
        const attr = el.getAttribute("data-i18n-attr");
        if (attr) el.setAttribute(attr, value);
        return;
      }
      if (el.id === "mailto-contact" || el.id === "mailto-contact-detail") return;
      el.textContent = value;
    });

    var titleEl = document.querySelector("title");
    if (titleEl && titleEl.textContent) {
      document.title = titleEl.textContent;
    }

    const contactEmail = "kontakt@nomailyet.com";
    const pack = mailPackForContext(t, getMailContext());
    const subj = encodeURIComponent(pack.sub);
    const body = encodeURIComponent(pack.body);
    const mailHref =
      "mailto:" + contactEmail + "?subject=" + subj + "&body=" + body;
    document
      .querySelectorAll("#mailto-contact, #mailto-contact-detail, .mailto-contact-link")
      .forEach(function (el) {
        el.href = mailHref;
      });

    var primaryMailCta = document.getElementById("mailto-contact");
    if (primaryMailCta && pack.cta) primaryMailCta.textContent = pack.cta;
    var detailMailCta = document.getElementById("mailto-contact-detail");
    if (detailMailCta && pack.cta) detailMailCta.textContent = pack.cta;

    const carousel = document.querySelector(".hero-carousel");
    if (carousel && t.carouselRoleDesc) {
      carousel.setAttribute("aria-roledescription", t.carouselRoleDesc);
    }
  }

  function initHeroCarousel() {
    var root = document.querySelector(".hero-carousel");
    if (!root) return;
    var track = document.getElementById("hero-carousel-track");
    if (!track) return;
    var slides = root.querySelectorAll(".hero-carousel__slide");
    var prevBtn = document.getElementById("hero-carousel-prev");
    var nextBtn = document.getElementById("hero-carousel-next");
    var dots = root.querySelectorAll(".hero-carousel__dot");
    var n = slides.length;
    if (!n) return;

    var index = 0;
    var reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    var AUTO_MS = 2000;
    var timer = null;

    function applySlideTabStops() {
      slides.forEach(function (slide, j) {
        var link = slide.querySelector("a.hero-carousel__more");
        if (!link) return;
        link.tabIndex = j === index ? 0 : -1;
      });
    }

    function go(target) {
      index = ((target % n) + n) % n;
      track.style.transform =
        "translateX(-" + index * (100 / n) + "%)";
      slides.forEach(function (slide, j) {
        slide.setAttribute("aria-hidden", j === index ? "false" : "true");
      });
      dots.forEach(function (dot, j) {
        var on = j === index;
        dot.classList.toggle("is-active", on);
        dot.setAttribute("aria-current", on ? "true" : "false");
      });
      applySlideTabStops();
    }

    function goNext() {
      go(index + 1);
    }
    function goPrev() {
      go(index - 1);
    }

    function startAuto() {
      if (reduceMotion || timer !== null) return;
      timer = window.setInterval(goNext, AUTO_MS);
    }
    function stopAuto() {
      if (timer !== null) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        stopAuto();
        goPrev();
        startAuto();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        stopAuto();
        goNext();
        startAuto();
      });
    }

    dots.forEach(function (dot, j) {
      dot.addEventListener("click", function () {
        stopAuto();
        go(j);
        startAuto();
      });
    });

    root.addEventListener("mouseenter", stopAuto);
    root.addEventListener("mouseleave", startAuto);
    root.addEventListener("focusin", stopAuto);
    root.addEventListener("focusout", function (e) {
      if (!root.contains(e.relatedTarget)) startAuto();
    });

    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        stopAuto();
        goPrev();
        startAuto();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        stopAuto();
        goNext();
        startAuto();
      }
    });

    go(0);
    startAuto();
  }

  function initLogoTransition() {
    var html = document.documentElement;
    var headerLogo = document.querySelector(".brand img");
    var heroWrap = document.querySelector(".hero-logo-wrap");
    var heroLogo = heroWrap ? heroWrap.querySelector(".hero-logo") : null;
    var heroBadge = document.querySelector(".hero-badge");
    var header = document.querySelector(".site-header");
    if (!headerLogo || !heroWrap || !heroLogo || !heroBadge || !header) return;

    // If the page was opened with a hash or already scrolled (back/forward cache,
    // anchor, or browser scroll restoration), skip straight to the final state.
    if (window.location.hash || window.scrollY > 0) {
      var preWrapHeight =
        window.scrollY > 0 ? heroWrap.getBoundingClientRect().height : 0;
      var preScroll = window.scrollY;
      // Disable scroll anchoring AND force scroll-behavior auto so the
      // compensating scroll is instant (CSS defaults to smooth site-wide).
      var prevAnchorEarly = html.style.overflowAnchor;
      var prevBehaviorEarly = html.style.scrollBehavior;
      html.style.overflowAnchor = "none";
      html.style.scrollBehavior = "auto";
      html.classList.remove("logo-in-hero");
      html.classList.remove("logo-moving");
      html.classList.add("logo-in-header");
      if (preWrapHeight > 0) {
        window.scrollTo({
          top: Math.max(0, preScroll - preWrapHeight),
          left: 0,
          behavior: "instant"
        });
      }
      requestAnimationFrame(function () {
        html.style.overflowAnchor = prevAnchorEarly;
        html.style.scrollBehavior = prevBehaviorEarly;
      });
      return;
    }

    // Prevent the browser from restoring a previous scroll position on reload,
    // so we reliably start at the top and play the transition.
    if ("scrollRestoration" in history) {
      try { history.scrollRestoration = "manual"; } catch (e) { /* noop */ }
    }

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var triggered = false;

    function trigger() {
      if (triggered) return;
      triggered = true;

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onIntent);
      window.removeEventListener("touchstart", onIntent);
      window.removeEventListener("touchmove", onIntent);
      window.removeEventListener("keydown", onKey);

      var heroRect = heroLogo.getBoundingClientRect();

      // Reduced motion: snap straight to the final state (no clone, no
      // animation). Apply the class change so .hero-logo-wrap is removed
      // from flow; the browser's default scroll anchoring compensates the
      // collapse, so we don't need to scroll the page ourselves.
      if (reduceMotion) {
        html.classList.remove("logo-in-hero");
        html.classList.add("logo-in-header");
        return;
      }

      // Build a fixed-positioned clone that visually covers the hero logo
      // at its current viewport location, then animate it to the header slot.
      var clone = heroLogo.cloneNode(true);
      clone.classList.add("logo-flight");
      clone.removeAttribute("id");
      clone.style.top = heroRect.top + "px";
      clone.style.left = heroRect.left + "px";
      clone.style.width = heroRect.width + "px";
      clone.style.height = heroRect.height + "px";
      document.body.appendChild(clone);

      // Pin the wrap's current size BEFORE switching to the moving state,
      // so we have a concrete starting value to animate from. overflow is
      // clipped so the (now visibility:hidden) image doesn't bleed out as
      // the container shrinks.
      var wrapStartH = heroWrap.getBoundingClientRect().height;
      var wrapStartMB = getComputedStyle(heroWrap).marginBottom;
      heroWrap.style.height = wrapStartH + "px";
      heroWrap.style.overflow = "hidden";
      heroWrap.style.marginBottom = wrapStartMB;

      // Switch to the moving state (hides the original hero logo via CSS).
      html.classList.remove("logo-in-hero");
      html.classList.add("logo-moving");

      // Two rAFs guarantee the clone's initial top/left are committed before
      // the transform transition starts, so the browser animates from the
      // current visual position rather than snapping. Same goes for the
      // wrap's pinned starting height/margin, which we transition to 0 in
      // lockstep with the clone -- so the content below "rises" into place
      // at exactly the same rate as the logo flies into the header. No page
      // scrolling is required, which means no jump-back can happen.
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          var targetRect = headerLogo.getBoundingClientRect();
          var scale = targetRect.height / heroRect.height;
          var dx = targetRect.left - heroRect.left;
          var dy = targetRect.top - heroRect.top;

          var EASING = "cubic-bezier(0.65, 0, 0.35, 1)";
          var DURATION_MS = 760;
          var DURATION = DURATION_MS + "ms";

          clone.style.transition = "transform " + DURATION + " " + EASING;
          clone.style.transform =
            "translate3d(" + dx + "px, " + dy + "px, 0) scale(" + scale + ")";

          heroWrap.style.transition =
            "height " + DURATION + " " + EASING +
            ", margin-bottom " + DURATION + " " + EASING;
          heroWrap.style.height = "0px";
          heroWrap.style.marginBottom = "0px";

          var finished = false;
          function finish() {
            if (finished) return;
            finished = true;
            clone.removeEventListener("transitionend", onEnd);

            // Flip to the final state. logo-in-header sets display:none on
            // .hero-logo-wrap, but the wrap is already height/margin 0 so
            // there is no visual jump. Clear the inline styles afterwards
            // so the element returns to a clean state.
            html.classList.remove("logo-moving");
            html.classList.add("logo-in-header");
            heroWrap.style.transition = "";
            heroWrap.style.height = "";
            heroWrap.style.marginBottom = "";
            heroWrap.style.overflow = "";

            if (clone.parentNode) clone.parentNode.removeChild(clone);
          }
          function onEnd(ev) {
            if (ev && ev.propertyName && ev.propertyName !== "transform") return;
            finish();
          }
          clone.addEventListener("transitionend", onEnd);
          // Safety fallback in case transitionend is missed.
          setTimeout(finish, DURATION_MS + 640);
        });
      });
    }

    function onScroll() {
      if (window.scrollY > 0) trigger();
    }
    function onIntent() {
      trigger();
    }
    function onKey(e) {
      var k = e.key;
      if (
        k === "ArrowDown" ||
        k === "ArrowUp" ||
        k === "PageDown" ||
        k === "PageUp" ||
        k === "End" ||
        k === "Home" ||
        k === " " ||
        k === "Spacebar"
      ) {
        trigger();
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onIntent, { passive: true });
    window.addEventListener("touchstart", onIntent, { passive: true });
    window.addEventListener("touchmove", onIntent, { passive: true });
    window.addEventListener("keydown", onKey);
  }

  function initFaqAccordions() {
    const faq = document.querySelector(".faq");
    if (!faq) return;
    const detailsList = faq.querySelectorAll("details");
    if (!detailsList.length) return;

    const DURATION_MS = 250;
    const EASING = "ease";
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Signal to CSS that the JS animation path is active so the chevron and
    // summary spacing follow the .is-open class (instead of [open]) and
    // therefore animate in sync with the height transition.
    faq.classList.add("faq-anim");

    detailsList.forEach(function (details) {
      const summary = details.querySelector("summary");
      if (!summary) return;

      // Move every node after <summary> into a single wrapper we can
      // height-animate cleanly without disturbing the original markup
      // semantics (the <p> still lives inside <details>).
      const body = document.createElement("div");
      body.className = "faq-body";
      let next = summary.nextSibling;
      while (next) {
        const after = next.nextSibling;
        body.appendChild(next);
        next = after;
      }
      details.appendChild(body);

      if (details.open) details.classList.add("is-open");

      let endHandler = null;
      function clearEnd() {
        if (endHandler) {
          body.removeEventListener("transitionend", endHandler);
          endHandler = null;
        }
      }

      summary.addEventListener("click", function (e) {
        e.preventDefault();

        if (reduceMotion) {
          if (details.open) {
            details.open = false;
            details.classList.remove("is-open");
          } else {
            details.open = true;
            details.classList.add("is-open");
          }
          return;
        }

        clearEnd();

        const wasOpen = details.classList.contains("is-open");
        // Capture the body's current rendered height as the starting point
        // so a click mid-animation continues smoothly from where we are.
        const startH = body.getBoundingClientRect().height;

        body.style.transition = "none";
        body.style.overflow = "hidden";
        body.style.height = startH + "px";
        // Force a style flush so the explicit start height takes effect
        // before we kick off the new transition.
        void body.offsetHeight;

        if (wasOpen) {
          details.classList.remove("is-open");
          body.style.transition = "height " + DURATION_MS + "ms " + EASING;
          body.style.height = "0px";
          endHandler = function (ev) {
            if (ev.propertyName !== "height") return;
            clearEnd();
            details.open = false;
            body.style.transition = "";
            body.style.height = "";
            body.style.overflow = "";
          };
        } else {
          details.open = true;
          details.classList.add("is-open");
          // scrollHeight reads the natural content height even though we've
          // pinned the inline height to the starting value.
          const targetH = body.scrollHeight;
          body.style.transition = "height " + DURATION_MS + "ms " + EASING;
          body.style.height = targetH + "px";
          endHandler = function (ev) {
            if (ev.propertyName !== "height") return;
            clearEnd();
            body.style.transition = "";
            body.style.height = "";
            body.style.overflow = "";
          };
        }
        body.addEventListener("transitionend", endHandler);
      });
    });
  }

  function initDetailParallax() {
    var layer = document.querySelector(".detail-hero__parallax");
    if (!layer) return;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    var ticking = false;
    var factor = 0.38;
    var maxShift = 160;

    function update() {
      ticking = false;
      var y = window.scrollY || window.pageYOffset || 0;
      var shift = Math.min(y * factor, maxShift);
      layer.style.transform = "translate3d(0, " + shift + "px, 0)";
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
  }

  function initNavDropdownOutsideClose() {
    if (!document.querySelector("details.nav-dropdown")) return;

    document.addEventListener("click", function (e) {
      var t = e.target;
      if (!t) return;
      if (t.nodeType === Node.TEXT_NODE) {
        t = t.parentElement;
      }
      if (!t || typeof t.closest !== "function") return;

      document.querySelectorAll("details.nav-dropdown[open]").forEach(function (d) {
        if (!d.contains(t)) {
          d.open = false;
        }
      });
    });
  }

  function initMobileNav() {
    var toggle = document.getElementById("nav-toggle");
    var header = document.querySelector(".site-header");
    var drawer = document.getElementById("site-nav-drawer");
    var backdrop = document.querySelector(".nav-drawer-backdrop");
    if (!toggle || !header || !drawer || !backdrop) return;

    var mq = window.matchMedia
      ? window.matchMedia("(max-width: 900px)")
      : { matches: false, addEventListener: function () {}, removeEventListener: function () {} };

    function navStrings() {
      return STRINGS[getLang()] || STRINGS.de;
    }

    function syncDrawerAria(open) {
      if (!mq.matches) {
        drawer.removeAttribute("aria-hidden");
        return;
      }
      drawer.setAttribute("aria-hidden", open ? "false" : "true");
    }

    function setOpen(open) {
      header.classList.toggle("is-nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute(
        "aria-label",
        open ? navStrings().navCloseMenu : navStrings().navOpenMenu
      );
      document.body.classList.toggle("is-nav-open", open);
      syncDrawerAria(open);
    }

    function closeIfMobile() {
      if (mq.matches) setOpen(false);
    }

    toggle.addEventListener("click", function () {
      if (!mq.matches) return;
      setOpen(!header.classList.contains("is-nav-open"));
    });

    backdrop.addEventListener("click", function () {
      closeIfMobile();
    });

    drawer.addEventListener("click", function (e) {
      if (!mq.matches) return;
      var a = e.target && e.target.closest ? e.target.closest("a") : null;
      if (a && drawer.contains(a)) closeIfMobile();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeIfMobile();
    });

    function onMqChange() {
      if (!mq.matches) {
        setOpen(false);
      } else {
        syncDrawerAria(header.classList.contains("is-nav-open"));
      }
    }

    if (mq.addEventListener) {
      mq.addEventListener("change", onMqChange);
    } else if (mq.addListener) {
      mq.addListener(onMqChange);
    }

    syncDrawerAria(header.classList.contains("is-nav-open"));
  }

  function initMobileContactBar() {
    var bar = document.querySelector(".mobile-contact-bar");
    if (!bar) return;
    var mq = window.matchMedia
      ? window.matchMedia("(max-width: 900px)")
      : { matches: true, addEventListener: function () {}, removeEventListener: function () {} };

    function sync() {
      bar.classList.toggle("is-visible", mq.matches);
    }

    if (mq.addEventListener) {
      mq.addEventListener("change", sync);
    } else if (mq.addListener) {
      mq.addListener(sync);
    }
    sync();
  }

  function init() {
    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var url = getAlternateLocaleUrl();
        if (url) window.location.href = url;
      });
    }
    setLang(getEffectiveLang());
    initLogoTransition();
    initHeroCarousel();
    initFaqAccordions();
    initNavDropdownOutsideClose();
    initMobileNav();
    initDetailParallax();
    initMobileContactBar();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
