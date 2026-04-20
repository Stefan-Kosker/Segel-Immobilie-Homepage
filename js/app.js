(function () {
  "use strict";

  /** Production contact address; keep in sync with visible mailto links in HTML. */
  var CONTACT_EMAIL = "kontakt@segel-immo.de";

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

    if (/\/ueber-uns\.html$/i.test(path)) {
      var aboutBase = path.replace(/\/ueber-uns\.html$/i, "");
      return aboutBase + "/en/ueber-uns.html" + search + hash;
    }

    if (/\/datenschutz\.html$/i.test(path)) {
      var dsBase = path.replace(/\/datenschutz\.html$/i, "");
      return dsBase + "/en/datenschutz.html" + search + hash;
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
      navPrivacy: "Datenschutz",
      navAbout: "Über uns",
      navOpenMenu: "Menü öffnen",
      navCloseMenu: "Menü schließen",
      navAriaSubmenuLeistungen: "Leistungen — Untermenü",
      navLeistungWeg: "Hausverwaltung (WEG)",
      navLeistungMiet: "Mietverwaltung",
      navLeistungDl: "Dienstleisterkoordination",
      navLeistungBau: "Baukoordination",
      brandTag: "Immobilienverwaltung & Koordination",
      heroBadge:
        "Persönliche Immobilienverwaltung in Karlsruhe und der Region",
      brandLogoAlt: "Segel Immoverwaltung — Logo",
      heroH1: "Damit Ihre WEG wieder ruhiger, verlässlicher und gut organisiert läuft",
      heroLead:
        "Wir übernehmen Verwaltung, Abstimmung und Umsetzung für WEGs und Immobilien in Karlsruhe und der Region – persönlich, strukturiert und mit einem festen Ansprechpartner. So werden Aufgaben klarer, Wege kürzer und der Alltag für Eigentümer und Beirat spürbar leichter.",
      carouselRoleDesc: "Karussell",
      carouselLeistungenHeading: "Unsere Leistungen im Überblick",
      carouselControlsAria: "Karussell steuern",
      carouselPrevAria: "Vorherige Leistung",
      carouselNextAria: "Nächste Leistung",
      ctaPrimary: "Kostenloses Erstgespräch für Ihre WEG vereinbaren",
      ctaSecondary: "So läuft ein Verwaltungswechsel ab",
      homeEntityTitle: "Wer wir sind — und wo wir arbeiten",
      homeEntityLead:
        "Segel Immoverwaltung ist eine persönlich geführte Immobilienverwaltung mit Sitz in Stutensee (Landkreis Karlsruhe). Inhaber: Stefan Kosker. Die vier Leistungsfelder Hausverwaltung (WEG), Mietverwaltung sowie Dienstleister- und Baukoordination sind bei uns gleichgewichtig aufgestellt. Wir betreuen Objekte im Raum Karlsruhe, nördlicher Landkreis Karlsruhe und Umgebung — unter anderem Rhein-Neckar, Mannheim, Heidelberg, Kraichgau und Oberrhein, typischerweise in etwa 60 km Umkreis.",
      homeEntityTrustListAria: "Verlässliche Angaben im Überblick",
      homeEntityTrust1:
        "Anschrift, Telefon und USt-IdNr. stehen transparent im Impressum.",
      homeEntityTrust2:
        "Auf Anfragen antworten wir in der Regel innerhalb eines Werktags.",
      homeEntityTrust3:
        "Zur Person, zum Aufbau und zur Arbeitsweise: siehe Über uns.",
      homeEntityAboutLink: "Mehr zu Stefan Kosker und zur Geschichte von Segel Immoverwaltung",
      answerFirstTitle: "Kurz & klar",
      answerWhoLabel: "Für wen ist das?",
      answerWhatLabel: "Was übernehmen wir konkret?",
      answerStartLabel: "Wie läuft der Start ab?",
      answerReplyLabel: "Wann melden wir uns zurück?",
      pageWegAnswerWho:
        "Wohnungseigentümergemeinschaften, deren Beirat oder Eigentümerinnen und Eigentümer Hausverwaltung im beschriebenen Umfang suchen — im Einzugsgebiet um Karlsruhe, den nördlichen Landkreis Karlsruhe und die umliegende Region (u. a. Rhein-Neckar, Mannheim, Heidelberg, Kraichgau, Oberrhein, typisch ca. 60 km).",
      pageWegAnswerWhat:
        "Unter anderem Jahresabrechnungen und Wirtschaftspläne, Vorbereitung und Nachbereitung der Eigentümerversammlungen inklusive Protokoll und Beschlussumsetzung, Instandhaltung und Handwerkerkoordination, Versicherungen und Schadensfälle, Hausgeld und Unterlagen sowie die Schnittstellen zu Steuerberatung und Recht — mit festem Ansprechpartner.",
      pageWegAnswerStart:
        "Erstgespräch zur Klärung von Objekt, Bedarf und Ansprechpartnern, dann strukturierte Übernahme der Unterlagen und laufenden Vorgänge, anschließend Start mit festen Zuständigkeiten (auf der Startseite auch unter „So läuft ein Verwaltungswechsel ab“ beschrieben).",
      pageWegAnswerReply:
        "Auf Ihre Anfrage reagieren wir üblicherweise innerhalb eines Werktags telefonisch oder per E-Mail.",
      pageMietAnswerWho:
        "Eigentümerinnen und Eigentümer vermieteter Einheiten, die kaufmännische und organisatorische Betreuung sowie koordinierte Mieterkommunikation im vereinbarten Rahmen brauchen — im gleichen regionalen Einzugsgebiet wie unsere übrigen Leistungen.",
      pageMietAnswerWhat:
        "Laufende kaufmännische Abläufe (z. B. Mieteingänge, Nebenkosten, Fristen), organisatorische Mieterbetreuung und technische Koordination mit Handwerk im Rahmen der Vereinbarung sowie transparente Eigentümerinformation — ohne Rechtsberatung zu ersetzen, wo Fachanwälte zuständig sind.",
      pageMietAnswerStart:
        "Erstgespräch zu Objekt und Bedarf, Abstimmung des Leistungsumfangs, dann strukturierter Start mit festem Ansprechpartner und klaren Kommunikationswegen.",
      pageMietAnswerReply:
        "In der Regel innerhalb eines Werktags, telefonisch oder per E-Mail.",
      pageDlAnswerWho:
        "Eigentümer, Verwaltungen und Objekte mit vielen parallelen Anfragen an Handwerk, Hausmeister, Versorger oder andere Partner — wenn Angebote, Termine und Nachverfolgung zentral gebündelt werden sollen.",
      pageDlAnswerWhat:
        "Erfassung und Einordnung der Themen, Einholen und Abgleich von Angeboten, Koordination von Beauftragung und Terminen sowie durchgehende Dokumentation und Nachverfolgung bis zum Abschluss der Leistung.",
      pageDlAnswerStart:
        "Kurzbeschreibung Ihrer Situation reicht für die Ersteinschätzung; gemeinsam priorisieren wir die nächsten Schritte und legen Zuständigkeiten sowie Kommunikationswege fest.",
      pageDlAnswerReply:
        "Üblicherweise innerhalb eines Werktags, telefonisch oder per E-Mail.",
      pageBauAnswerWho:
        "Wohnungseigentümergemeinschaften, Eigentümerinnen und Eigentümer sowie Vorhaben mit größeren Instandsetzungs- oder Sanierungsmaßnahmen, wenn Planung, Gewerke und Termine strukturiert begleitet und dokumentiert werden sollen.",
      pageBauAnswerWhat:
        "Steuerung der Abläufe, Abstimmung der Gewerke und Terminrahmen, Fokus auf Kosten- und Zeitrahmen im Rahmen der Beschlüsse sowie nachvollziehbare Dokumentation für Beirat und Eigentümer.",
      pageBauAnswerStart:
        "Erstgespräch zu Umfang, Zeitfenster und Schnittstellen (z. B. Beirat, Sondervermögen), danach strukturierter Projektstart mit klaren Zuständigkeiten und Kommunikationswegen.",
      pageBauAnswerReply:
        "In der Regel innerhalb eines Werktags, telefonisch oder per E-Mail.",
      pillarsTitle: "Worauf Sie sich bei uns verlassen können",
      pillar1Title: "Spürbare Entlastung im Alltag",
      pillar1Text:
        "Wir kümmern uns um die laufenden Themen, behalten Fristen und Vorgänge im Blick und nehmen dem Beirat wie auch der Eigentümergemeinschaft spürbar Arbeit ab.",
      pillar2Title: "Klarheit, auf die Sie sich verlassen können",
      pillar2Text:
        "Sie wissen, was ansteht, was bereits erledigt wurde und wie es weitergeht. Klare Abläufe und nachvollziehbare Dokumentation sorgen für mehr Übersicht und weniger unnötige Rückfragen.",
      pillar3Title: "Verlässlich begleitet – vom Beschluss bis zur Umsetzung",
      pillar3Text:
        "Wir bleiben an Themen dran, verfolgen Beschlüsse sauber nach und sorgen dafür, dass vereinbarte Maßnahmen nicht im Alltag untergehen.",
      pillar4Title: "Mehr Ruhe in der Zusammenarbeit",
      pillar4Text:
        "Mit klarer Kommunikation, festen Zuständigkeiten und einer ruhigen Begleitung schaffen wir mehr Transparenz und weniger Reibung – in der Gemeinschaft, im Mietalltag und bei Maßnahmen am Objekt.",
      servicesTitle: "Was wir für Ihre WEG zuverlässig übernehmen",
      servicesLead:
        "Klar erklärt, gut organisiert und so aufbereitet, dass Eigentümer und Beirat jederzeit den Überblick behalten.",
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
        "So bleibt Ihr Objekt im Alltag gut betreut, ohne dass Sie sich um jede Einzelabstimmung selbst kümmern müssen.",
      leistungTeaserDlTitle: "Dienstleisterkoordination",
      leistungTeaserDlText:
        "So bleiben Aufgaben nicht liegen und Zuständigkeiten werden für alle Beteiligten klarer.",
      leistungTeaserBauTitle: "Baukoordination",
      leistungTeaserBauText:
        "Von der Vorbereitung bis zur Übergabe sorgen wir dafür, dass Maßnahmen geordnet laufen und alle Beteiligten wissen, was als Nächstes ansteht.",
      leistungTeaserCta: "Mehr erfahren",
      detailBreadcrumbAria: "Brotkrümel",
      detailBreadcrumbHome: "Startseite",
      detailBack: "Zurück zur Leistungsübersicht",
      detailBackHome: "Zurück zur Startseite",
      pageAboutMetaTitle: "Über uns — Segel Immoverwaltung Karlsruhe & Region",
      pageAboutMetaDescription:
        "Segel Immoverwaltung: persönlich geführt, strukturierte Hausverwaltung (WEG), Mietverwaltung und Koordination in Karlsruhe und der Region.",
      pageAboutH1: "Über uns",
      pageAboutLead:
        "Persönlich geführt, verlässlich im Alltag und mit dem Anspruch, Verantwortung wirklich zu übernehmen.",
      pageAboutSectionHeading: "Stefan Kosker",
      pageAboutP1:
        "Segel Immoverwaltung ist persönlich geführt und aus einer sehr konkreten Verantwortung heraus entstanden. Mir ist wichtig, dass Verwaltung nicht nur formal funktioniert, sondern im Alltag wirklich trägt: verlässlich, klar organisiert und mit sauberer Umsetzung.",
      pageAboutP2:
        "Als mein Vater zu Beginn der Corona-Zeit aus gesundheitlichen Gründen ausfiel, habe ich seine Verwaltungsobjekte übernommen und Schritt für Schritt weitergeführt. Aus dieser Situation ist eine Arbeitsweise entstanden, die auf Verlässlichkeit, klaren Zuständigkeiten und nachvollziehbaren Abläufen beruht.",
      pageAboutP3:
        "Mein Hintergrund in der IT hilft mir dabei, Abläufe sinnvoll zu strukturieren, Dinge übersichtlich zu halten und Prozesse dort zu digitalisieren, wo es den Alltag wirklich einfacher macht. Gleichzeitig bringe ich praktische Erfahrung aus dem baulichen Umfeld mit – ein echter Vorteil, wenn es um Abstimmung, Umsetzung und saubere Koordination geht.",
      pageAboutP4:
        "So steht Segel Immoverwaltung heute für eine verlässliche Hausverwaltung mit Schwerpunkt WEG — getragen von dem Verständnis, dass gute Verwaltung immer auch Mietverwaltung, Dienstleisterkoordination und Baukoordination mitdenken muss.",
      pageAboutImgAlt: "Stefan Kosker",
      pageAboutImgCaption: "Inhaber: Stefan Kosker",
      pageWegMetaTitle: "Hausverwaltung (WEG) — Segel Immoverwaltung Karlsruhe & Region",
      pageWegMetaDescription:
        "Hausverwaltung für Wohnungseigentümergemeinschaften: Jahresabrechnung, Eigentümerversammlungen, Instandhaltung und Versicherungen — strukturiert, mit festem Ansprechpartner.",
      pageWegH1: "Hausverwaltung (WEG)",
      pageWegLead:
        "Damit Ihre WEG im Alltag verlässlich betreut wird und offene Themen nicht liegen bleiben.",
      pageWegImgAlt: "Eigentümerversammlung (Symbolbild)",
      pageMietMetaTitle: "Mietverwaltung — Segel Immoverwaltung Karlsruhe & Region",
      pageMietMetaDescription:
        "Mietverwaltung für Eigentümer: laufende Organisation, Mieterkommunikation und kaufmännische Abläufe — mit festem Ansprechpartner.",
      pageMietH1: "Mietverwaltung",
      pageMietLead:
        "Wir entlasten Sie im Mietalltag, kümmern uns um die laufende Organisation und sorgen dafür, dass Kommunikation, Abrechnung und Abstimmung verlässlich zusammenlaufen.",
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
        "Wenn viele Beteiligte zusammenkommen, braucht es vor allem eines: einen klaren Überblick. Wir koordinieren Anfragen, Angebote, Termine und Rückmeldungen so, dass Maßnahmen verlässlich vorankommen.",
      pageDlImgAlt: "Koordination am Bau (Symbolbild)",
      pageDlServicesHeading: "Was wir in der Dienstleisterkoordination übernehmen",
      pageDlServicesLead:
        "Damit aus vielen Einzelthemen wieder ein geordneter Ablauf wird.",
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
        "Größere Maßnahmen brauchen klare Planung, verlässliche Begleitung und einen ruhigen Überblick. Wir koordinieren Abläufe so, dass Fristen, Kosten und offene Punkte für Eigentümer und Beirat nachvollziehbar bleiben.",
      pageBauImgAlt: "Baustelle / Sanierung (Symbolbild)",
      pageBauServicesHeading: "Was wir bei Maßnahmen und Projekten übernehmen",
      pageBauServicesLead:
        "Damit auch größere Projekte übersichtlich bleiben und sauber begleitet werden.",
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
      regionTitle: "In welchen Orten wir für Sie tätig sind",
      regionLead:
        "Unser Schwerpunkt liegt in Karlsruhe und der Region. Regelmäßig betreuen wir Objekte unter anderem in folgenden Orten:",
      regionMore: "Weitere Orte im Radius gerne auf Anfrage.",
      regionCities:
        "Achern · Baden-Baden · Bretten · Bruchsal · Bühl · Ettlingen · Germersheim · Heidelberg · Karlsruhe · Landau in der Pfalz · Mannheim · Pforzheim · Rastatt · Schwetzingen · Speyer · Stutensee · Waghäusel",
      processTitle: "So läuft der Verwaltungswechsel",
      processLead:
        "Ein Verwaltungswechsel muss nicht kompliziert sein. Wir begleiten den Übergang Schritt für Schritt, damit Unterlagen, Zuständigkeiten und laufende Themen sauber übernommen werden.",
      step1Title: "Erstgespräch & Bedarf",
      step1Text:
        "Im ersten Gespräch schauen wir gemeinsam auf Ihre aktuelle Situation: Was läuft bereits gut, wo gibt es offene Punkte und was braucht Ihre Gemeinschaft jetzt konkret?",
      step2Title: "Unterlagen & Übernahme",
      step2Text:
        "Wir sichten die vorhandenen Unterlagen, ordnen laufende Themen sauber ein und sorgen dafür, dass beim Übergang nichts Wichtiges verloren geht.",
      step3Title: "Start & Kommunikation",
      step3Text:
        "Zum Start schaffen wir klare Zuständigkeiten und verlässliche Kommunikationswege, damit Ihre Verwaltung vom ersten Tag an geordnet weiterläuft.",
      processQuickTitle: "So läuft der Wechsel bei uns ab",
      processStepsBlurb:
        "Zuerst klären wir gemeinsam die Ausgangslage. Danach übernehmen wir Unterlagen und offene Vorgänge geordnet. Anschließend starten wir mit klaren Zuständigkeiten und einem verlässlichen Kommunikationsweg.",
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
        "Akute Schäden, Sicherheitsrisiken oder Störungen priorisieren wir und halten die Kommunikation eng. Erreichbarkeit klären wir im Erstgespräch; auf normale Anfragen antworten wir in der Regel innerhalb eines Werktags.",
      faq2Q: "Gibt es einen festen Ansprechpartner?",
      faq2A:
        "Ja. Sie haben einen festen Ansprechpartner, der Ihre Objektdaten und den Beschluss- und Kommunikationskontext kennt — weniger Rückfragen, klare Zuständigkeit.",
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
        "Die erste Rückmeldung auf Ihre Anfrage erfolgt in der Regel innerhalb eines Werktags. Der Start vor Ort hängt vom Umfang, laufenden Verträgen und der Übergabe an die Vorgängerverwaltung ab — den Zeitplan stimmen wir transparent mit der Gemeinschaft ab.",
      faq12Q: "Übernehmen Sie auch problematische oder festgefahrene WEGs?",
      faq12A:
        "Ja, auch Gemeinschaften mit erhöhtem Abstimmungsbedarf oder organisatorischen Herausforderungen können von einer klaren, strukturierten Verwaltung profitieren. Wichtig ist uns, wieder Ordnung, Transparenz und verlässliche Abläufe zu schaffen.",
      faq13Q: "Was unterscheidet Ihre Verwaltung von anderen Anbietern?",
      faq13A:
        "Persönliche Führung durch Stefan Kosker, gleichgewichtige Betreuung der vier Leistungsfelder auf der Website und klare, dokumentierte Abläufe statt generischer Versprechen. Hintergrund und Arbeitsweise sind unter „Über uns“ beschrieben.",
      contactTitle: "Kontakt",
      contactPhoneDisplay: "07244 558 05 02",
      contactEmailDisplay: CONTACT_EMAIL,
      contactCtaClosing: "Haben wir Ihr Interesse geweckt?",
      contactMicrocopy:
        "Sie möchten Ihre Verwaltung neu aufstellen, einen Wechsel vorbereiten oder einfach erst einmal klären, ob wir gut zusammenpassen? Melden Sie sich gern telefonisch oder per E-Mail. Wir hören uns Ihr Anliegen in Ruhe an, geben eine erste Einschätzung und sagen Ihnen offen, was der nächste sinnvolle Schritt ist. In der Regel melden wir uns innerhalb eines Werktags zurück. Hilfreich sind ein paar kurze Angaben zum Objekt, zum Ort und zum aktuellen Thema – dann können wir uns gezielt vorbereiten.",
      contactDrawerAria: "Kontakt — Telefon und E-Mail",
      contactCtaHome: "Unverbindlich Erstgespräch anfragen",
      contactMailSubjectHome: "Anfrage: Erstgespräch — Segel Immoverwaltung",
      contactMailBodyHome:
        "Guten Tag,\n\nwir möchten ein unverbindliches Erstgespräch zur Hausverwaltung (WEG) anfragen.\n\nGemeinschaft / Objekt:\nOrt:\nKurz zum Anliegen (z. B. Verwaltungswechsel, Beratung):\nErreichbarkeit:\n\nMit freundlichen Grüßen",
      mobileContactBarLabel: "Schnellkontakt",
      mobileContactCall: "Anrufen",
      mobileContactMail: "E-Mail",
      mobileContactRequest: "Erstgespräch",
      pageWegContactHook:
        "Ob laufende Betreuung oder geordneter Verwaltungswechsel: Wir schauen gemeinsam, was Ihre WEG jetzt braucht und wie ein sinnvoller Start aussehen kann.",
      pageWegContactCta: "Kostenloses Erstgespräch für Ihre WEG vereinbaren",
      pageWegMailSubject: "Anfrage: Hausverwaltung (WEG) — Segel Immoverwaltung",
      pageWegMailBody:
        "Guten Tag,\n\nwir interessieren uns für die Hausverwaltung unserer WEG.\n\nObjekt / Gemeinschaft:\nOrt:\nAktuelles Thema (z. B. Verwaltungswechsel, Übernahme):\nErreichbarkeit:\n\nMit freundlichen Grüßen",
      pageMietContactHook:
        "Wenn Sie Ihre vermietete Immobilie verlässlich betreuen lassen möchten, besprechen wir gern, welche Unterstützung für Ihr Objekt sinnvoll ist.",
      pageMietContactCta: "Mietverwaltung unverbindlich anfragen",
      pageMietMailSubject: "Anfrage: Mietverwaltung — Segel Immoverwaltung",
      pageMietMailBody:
        "Guten Tag,\n\nwir möchten die Mietverwaltung für unsere vermietete(n) Einheit(en) anfragen.\n\nObjekt / Adresse:\nAnzahl Einheiten / kurze Einordnung:\nAktuelles Thema:\nErreichbarkeit:\n\nMit freundlichen Grüßen",
      pageDlContactHook:
        "Gern klären wir mit Ihnen, welche Themen aktuell gebündelt und sauber koordiniert werden sollten.",
      pageDlContactCta: "Dienstleisterkoordination unverbindlich anfragen",
      pageDlMailSubject: "Anfrage: Dienstleisterkoordination — Segel Immoverwaltung",
      pageDlMailBody:
        "Guten Tag,\n\nwir benötigen Unterstützung bei der Koordination von Dienstleistern am Objekt.\n\nObjekt / Adresse:\nArt des Bedarfs (z. B. Instandhaltung, Störung, mehrere Gewerke):\nErreichbarkeit:\n\nMit freundlichen Grüßen",
      pageBauContactHook:
        "Wenn eine größere Maßnahme ansteht, besprechen wir gern mit Ihnen, wie die nächsten Schritte sinnvoll und geordnet aufgesetzt werden können.",
      pageBauContactCta: "Bauprojekt unverbindlich besprechen",
      pageBauMailSubject: "Anfrage: Baukoordination — Segel Immoverwaltung",
      pageBauMailBody:
        "Guten Tag,\n\nwir planen oder führen eine größere Instandsetzungs- oder Sanierungsmaßnahme durch und suchen Koordination.\n\nObjekt / Adresse:\nArt / ungefährer Umfang der Maßnahme:\nZeitrahmen (falls bekannt):\nErreichbarkeit:\n\nMit freundlichen Grüßen",
      pageWegFitHeading: "Für wen diese Leistung gut passt",
      pageWegFitYesTitle: "Besonders passend, wenn …",
      pageWegFitYes1:
        "Wohnungseigentümergemeinschaften mit laufender oder geplanter professioneller Verwaltung",
      pageWegFitYes2:
        "Beiräte und Eigentümer, die operative Themen strukturiert abgeben möchten",
      pageWegFitYes3:
        "Gemeinschaften mit Verwaltungswechsel oder Bedarf an sauberer Übernahme",
      pageWegFitNoTitle: "Weniger passend, wenn …",
      pageWegFitNo1:
        "Sie ausschließlich einmalige Rechtsberatung oder Prozessvertretung suchen (hier sind Fachanwälte die richtige Adresse)",
      pageWegFitNo2:
        "es um Themen ohne Bezug zu verwalteten Objekten oder Gemeinschaften geht",
      pageMietFitHeading: "Für wen diese Leistung gut passt",
      pageMietFitYesTitle: "Besonders passend, wenn …",
      pageMietFitYes1:
        "Eigentümer vermieteter Wohn- oder Gewerbeeinheiten mit Verwaltungsbedarf im Alltag",
      pageMietFitYes2:
        "Objekte, bei denen Mieterkommunikation, Abrechnungen und Koordination entlastet werden sollen",
      pageMietFitYes3:
        "Eigentümer, die einen festen Ansprechpartner für organisatorische und kaufmännische Abläufe möchten",
      pageMietFitNoTitle: "Weniger passend, wenn …",
      pageMietFitNo1:
        "Sie ausschließlich rechtliche Auseinandersetzungen mit Mietern führen lassen möchten, ohne Verwaltungsbezug",
      pageMietFitNo2:
        "Sie keine verwaltete Immobilie im beschriebenen Sinne betreuen",
      pageDlFitHeading: "Für wen diese Leistung gut passt",
      pageDlFitYesTitle: "Besonders passend, wenn …",
      pageDlFitYes1:
        "Objekte mit mehreren Dienstleistern oder laufenden Koordinationsthemen (Handwerk, Hausmeister, Versorger)",
      pageDlFitYes2:
        "WEGs, Vermieter oder Verwalter, die Angebote, Termine und Nachverfolgung bündeln möchten",
      pageDlFitYes3:
        "Situationen, in denen Maßnahmen sonst liegen bleiben oder unklare Zuständigkeiten entstehen",
      pageDlFitNoTitle: "Weniger passend, wenn …",
      pageDlFitNo1:
        "Sie ausschließlich eine einzelne Kleinreparatur ohne laufende Koordination benötigen",
      pageDlFitNo2:
        "kein konkreter Bedarf an strukturierter Steuerung mehrerer Leistungserbringer besteht",
      pageBauFitHeading: "Für wen diese Leistung gut passt",
      pageBauFitYesTitle: "Besonders passend, wenn …",
      pageBauFitYes1:
        "Größere Instandsetzungs-, Sanierungs- oder Modernisierungsprojekte mit mehreren Gewerken",
      pageBauFitYes2:
        "WEGs oder Eigentümer, die Planung, Vergleich und Ausführung begleitet haben möchten",
      pageBauFitYes3:
        "Vorhaben, bei denen Fristen, Kosten und Dokumentation von vornherein klar bleiben sollen",
      pageBauFitNoTitle: "Weniger passend, wenn …",
      pageBauFitNo1:
        "Sie ausschließlich Architektur- oder Bauleitung durch einen externen Fachplaner ohne Verwaltungsbezug suchen",
      pageBauFitNo2:
        "es sich um sehr kleine Maßnahmen ohne Koordinationsbedarf handelt",
      pagePrivacyMetaTitle: "Datenschutz — Segel Immoverwaltung",
      pagePrivacyMetaDescription:
        "Datenschutzhinweise der Segel Immoverwaltung: Verantwortlicher, Hosting, E-Mail-Kontakt und Ihre Rechte nach der DSGVO.",
      imprintTitle: "Impressum",
      imprintDdg: "Angaben gemäß § 5 DDG",
      imprintOwnerName: "Stefan Kosker",
      imprintStreet: "Eggensteiner Straße 57",
      imprintCity: "76297 Stutensee",
      imprintPhone: "Telefon: 07244 558 05 02",
      imprintEmailLabel: "E-Mail:",
      imprintVatIntro: "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:",
      imprintVatId: "DE343859857",
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
      navPrivacy: "Privacy",
      navAbout: "About",
      navOpenMenu: "Open menu",
      navCloseMenu: "Close menu",
      navAriaSubmenuLeistungen: "Services — submenu",
      navLeistungWeg: "Building management (WEG)",
      navLeistungMiet: "Rental property management",
      navLeistungDl: "Contractor coordination",
      navLeistungBau: "Construction coordination",
      brandTag: "Property management & coordination",
      heroBadge: "Personal property management in Karlsruhe and the region",
      brandLogoAlt: "Segel Immoverwaltung — logo",
      heroH1: "So your WEG runs more calmly, reliably and in good order again",
      heroLead:
        "We take care of administration, coordination and implementation for WEGs and properties in Karlsruhe and the region — personally, in a structured way and with a dedicated point of contact. Tasks become clearer, paths shorter and day-to-day life noticeably easier for owners and the advisory board.",
      carouselRoleDesc: "carousel",
      carouselLeistungenHeading: "Our services at a glance",
      carouselControlsAria: "Carousel controls",
      carouselPrevAria: "Previous service",
      carouselNextAria: "Next service",
      ctaPrimary: "Arrange a free initial call for your WEG",
      ctaSecondary: "How a change of management works",
      homeEntityTitle: "Who we are — and where we work",
      homeEntityLead:
        "Segel Immoverwaltung is an owner-led property management company based in Stutensee (Karlsruhe district). Owner: Stefan Kosker. We treat building management (WEG), rental management, contractor coordination and construction coordination as four equal pillars. We look after properties around Karlsruhe, the northern Karlsruhe district and the surrounding area — including Rhine-Neckar, Mannheim, Heidelberg, Kraichgau and the Upper Rhine — typically within about 60 km.",
      homeEntityTrustListAria: "Key facts at a glance",
      homeEntityTrust1:
        "Address, phone and VAT ID are listed transparently in the legal notice.",
      homeEntityTrust2:
        "We usually reply to enquiries within one business day.",
      homeEntityTrust3:
        "Background on the owner and how we work: see About us.",
      homeEntityAboutLink: "More about Stefan Kosker and how Segel Immoverwaltung came about",
      answerFirstTitle: "At a glance",
      answerWhoLabel: "Who is this for?",
      answerWhatLabel: "What do we take on, in concrete terms?",
      answerStartLabel: "How does onboarding work?",
      answerReplyLabel: "When will you hear back from us?",
      pageWegAnswerWho:
        "Condominium owners’ associations (WEG), advisory boards and owners who need professional building management as described — in our service area around Karlsruhe, the northern Karlsruhe district and the wider region (including Rhine-Neckar, Mannheim, Heidelberg, Kraichgau and the Upper Rhine — typically within about 60 km).",
      pageWegAnswerWhat:
        "Including annual statements and economic plans, preparing and following up owners’ meetings with minutes and implementation of resolutions, maintenance and trades coordination, insurance and claims, service charges and records, and interfaces to tax/legal advisers — with a dedicated point of contact.",
      pageWegAnswerStart:
        "Initial call to clarify the property, scope and contacts, then structured handover of documents and open items, then go-live with clear responsibilities (see also How a change of management works on the home page).",
      pageWegAnswerReply:
        "We usually respond to enquiries within one business day by phone or email.",
      pageMietAnswerWho:
        "Owners of rented units who need commercial and organisational support and coordinated tenant communication within an agreed scope — in the same regional area as our other services.",
      pageMietAnswerWhat:
        "Ongoing commercial processes (e.g. rent, service charges, deadlines), organisational tenant support and technical coordination with trades within the agreement, plus transparent owner reporting — without replacing legal advice where specialists are required.",
      pageMietAnswerStart:
        "Initial call on the property and requirements, alignment on scope, then structured onboarding with a dedicated contact and clear communication paths.",
      pageMietAnswerReply:
        "Usually within one business day, by phone or email.",
      pageDlAnswerWho:
        "Owners, property managers and buildings with many parallel enquiries to trades, caretakers, utilities or other partners — when quotes, appointments and follow-up need to be bundled.",
      pageDlAnswerWhat:
        "Capture and triage, obtain and compare quotes, coordinate commissioning and appointments, and document and track work through to completion.",
      pageDlAnswerStart:
        "A short description of your situation is enough for a first assessment; we then prioritise next steps together and define responsibilities and communication paths.",
      pageDlAnswerReply:
        "Usually within one business day, by phone or email.",
      pageBauAnswerWho:
        "Owners’ associations, owners and projects with larger refurbishment or renovation work where planning, trades and schedules need structured support and documentation.",
      pageBauAnswerWhat:
        "Steering workflows, coordinating trades and timelines, keeping cost and schedule aligned with resolutions, and traceable documentation for the board and owners.",
      pageBauAnswerStart:
        "Initial call on scope, time window and interfaces (e.g. board, special fund), then structured project start with clear responsibilities and communication paths.",
      pageBauAnswerReply:
        "Usually within one business day, by phone or email.",
      pillarsTitle: "What you can count on with us",
      pillar1Title: "Noticeable relief in day-to-day life",
      pillar1Text:
        "We look after ongoing matters, keep deadlines and cases in view, and take real work off the advisory board and the owners’ association.",
      pillar2Title: "Clarity you can rely on",
      pillar2Text:
        "You know what is due, what has already been done and what happens next. Clear processes and traceable documentation mean fewer unnecessary questions.",
      pillar3Title: "Reliable support — from resolution to implementation",
      pillar3Text:
        "We stay on top of topics, follow up resolutions properly and make sure agreed measures do not get lost in the day-to-day.",
      pillar4Title: "More calm in working together",
      pillar4Text:
        "With clear communication, defined responsibilities and calm support we create more transparency and less friction — in the community, in rental operations and for work on site.",
      servicesTitle: "What we reliably take on for your WEG",
      servicesLead:
        "Explained clearly, well organised and prepared so owners and the advisory board always keep the overview.",
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
        "So your property stays well looked after day to day without you handling every coordination yourself.",
      leistungTeaserDlTitle: "Contractor coordination",
      leistungTeaserDlText:
        "So tasks do not pile up and responsibilities become clearer for everyone involved.",
      leistungTeaserBauTitle: "Construction coordination",
      leistungTeaserBauText:
        "From preparation to handover we keep measures on track so everyone knows what comes next.",
      leistungTeaserCta: "Learn more",
      detailBreadcrumbAria: "Breadcrumb",
      detailBreadcrumbHome: "Home",
      detailBack: "Back to services overview",
      detailBackHome: "Back to home",
      pageAboutMetaTitle: "About us — Segel Immoverwaltung Karlsruhe & region",
      pageAboutMetaDescription:
        "Segel Immoverwaltung: personally led, structured building management (WEG), rental management and coordination in Karlsruhe and the region.",
      pageAboutH1: "About us",
      pageAboutLead:
        "Personally led, dependable in day-to-day work and committed to truly taking responsibility.",
      pageAboutSectionHeading: "Stefan Kosker",
      pageAboutP1:
        "Segel Immoverwaltung is personally led and grew out of a very concrete sense of responsibility. For me, management must not only work on paper — it has to carry everyday life: dependable, clearly organised and thoroughly implemented.",
      pageAboutP2:
        "When my father had to step back for health reasons at the start of the COVID period, I took over his managed properties and continued them step by step. From that situation emerged a way of working built on reliability, clear responsibilities and traceable processes.",
      pageAboutP3:
        "My IT background helps me structure workflows sensibly, keep things manageable and digitalise where it truly makes day-to-day life easier. I also bring hands-on experience from the building sector — a real advantage when coordination, implementation and clean follow-through matter.",
      pageAboutP4:
        "Today Segel Immoverwaltung stands for dependable property management with a focus on WEGs — grounded in the conviction that good administration must always also factor in rental management, contractor coordination, and construction coordination.",
      pageAboutImgAlt: "Stefan Kosker",
      pageAboutImgCaption: "Owner: Stefan Kosker",
      pageWegMetaTitle: "Building management (WEG) — Segel Immoverwaltung Karlsruhe & region",
      pageWegMetaDescription:
        "Building management for condominium owners’ associations: annual accounts, owners’ meetings, maintenance and insurance — structured, with a dedicated contact person.",
      pageWegH1: "Building management (WEG)",
      pageWegLead:
        "So your WEG is looked after reliably day to day and open topics do not drift.",
      pageWegImgAlt: "Owners’ meeting (illustrative image)",
      pageMietMetaTitle: "Rental property management — Segel Immoverwaltung Karlsruhe & region",
      pageMietMetaDescription:
        "Rental management for landlords: ongoing organisation, tenant communication and commercial processes — with a dedicated contact person.",
      pageMietH1: "Rental property management",
      pageMietLead:
        "We ease the load in your rental day-to-day, handle ongoing organisation and keep communication, accounting and coordination running together reliably.",
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
        "When many people are involved, you need a clear overview above all. We coordinate enquiries, quotes, appointments and feedback so measures move forward reliably.",
      pageDlImgAlt: "On-site coordination (illustrative image)",
      pageDlServicesHeading: "What we take on in contractor coordination",
      pageDlServicesLead:
        "So many individual topics become an orderly process again.",
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
        "Larger projects need clear planning, dependable support and a calm overview. We coordinate workflows so deadlines, costs and open points stay traceable for owners and the advisory board.",
      pageBauImgAlt: "Construction / refurbishment (illustrative image)",
      pageBauServicesHeading: "What we take on for measures and projects",
      pageBauServicesLead:
        "So larger projects stay manageable and are supported cleanly throughout.",
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
      regionTitle: "Where we work for you",
      regionLead:
        "Our focus is Karlsruhe and the region. We regularly look after properties in places including:",
      regionMore: "Other locations within the radius are welcome on request.",
      regionCities:
        "Achern · Baden-Baden · Bretten · Bruchsal · Bühl · Ettlingen · Germersheim · Heidelberg · Karlsruhe · Landau in der Pfalz · Mannheim · Pforzheim · Rastatt · Schwetzingen · Speyer · Stutensee · Waghäusel",
      processTitle: "How a change of management works",
      processLead:
        "A change of management does not have to be complicated. We guide the transition step by step so documents, responsibilities and ongoing topics are handed over cleanly.",
      step1Title: "Initial call & needs",
      step1Text:
        "In the first conversation we look at your situation together: what already works well, where are open points and what does your community need right now?",
      step2Title: "Documents & takeover",
      step2Text:
        "We review existing documents, organise ongoing topics cleanly and make sure nothing important is lost in the handover.",
      step3Title: "Go-live & communication",
      step3Text:
        "At go-live we establish clear responsibilities and reliable communication paths so your management continues in good order from day one.",
      processQuickTitle: "How the transition works with us",
      processStepsBlurb:
        "First we clarify the situation together. Then we take over documents and open cases in an orderly way. Finally we start with clear responsibilities and a reliable communication channel.",
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
        "We prioritise acute damage, safety risks or outages and keep communication tight. Availability rules are agreed in the initial call; for routine enquiries we usually reply within one business day.",
      faq2Q: "Is there a fixed contact person?",
      faq2A:
        "Yes — one fixed contact who knows your property data and the decision and communication context, so there is less back-and-forth and clear ownership.",
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
        "We usually reply to your first enquiry within one business day. The on-site start depends on scope, existing contracts and handover from the previous manager — we agree a transparent timeline with the association.",
      faq12Q: "Do you also take on difficult or stuck WEGs?",
      faq12A:
        "Yes — communities with greater need for coordination or organisational challenges can also benefit from clear, structured management. Our aim is to restore order, transparency and reliable processes.",
      faq13Q: "What sets your management apart from other providers?",
      faq13A:
        "Owner-led by Stefan Kosker, four equal service areas on the website as described, and clear documented processes instead of generic claims. Background and approach are on the About us page.",
      contactTitle: "Contact",
      contactPhoneDisplay: "07244 558 05 02",
      contactEmailDisplay: CONTACT_EMAIL,
      contactCtaClosing: "Have we sparked your interest?",
      contactMicrocopy:
        "Whether you want to set up management afresh, prepare a handover or simply see whether we are a good fit — please call or email. We listen to your situation, give a first assessment and say openly what the sensible next step is. We usually respond within one business day. A few brief details about the property, location and current topic help us prepare well.",
      contactDrawerAria: "Contact — phone and email",
      contactCtaHome: "Request a non-binding initial call",
      contactMailSubjectHome: "Inquiry: initial call — Segel Immoverwaltung",
      contactMailBodyHome:
        "Hello,\n\nwe would like to request a non-binding initial call on building (WEG) management.\n\nAssociation / property:\nLocation:\nBrief note on your situation (e.g. changing managers, advice):\nHow to reach you:\n\nKind regards",
      mobileContactBarLabel: "Quick contact",
      mobileContactCall: "Call",
      mobileContactMail: "Email",
      mobileContactRequest: "Initial call",
      pageWegContactHook:
        "Ongoing support or an orderly change of management: we look together at what your WEG needs now and how a sensible start could look.",
      pageWegContactCta: "Arrange a free initial call for your WEG",
      pageWegMailSubject: "Inquiry: building management (WEG) — Segel Immoverwaltung",
      pageWegMailBody:
        "Hello,\n\nwe are interested in building management for our condominium association.\n\nProperty / association:\nLocation:\nCurrent topic (e.g. changing managers, takeover):\nHow to reach you:\n\nKind regards",
      pageMietContactHook:
        "If you want your rented property looked after reliably, we are happy to discuss what support makes sense for your building.",
      pageMietContactCta: "Inquire about rental management — non-binding",
      pageMietMailSubject: "Inquiry: rental management — Segel Immoverwaltung",
      pageMietMailBody:
        "Hello,\n\nwe would like to inquire about rental management for our rented unit(s).\n\nProperty / address:\nNumber of units / brief context:\nCurrent topic:\nHow to reach you:\n\nKind regards",
      pageDlContactHook:
        "We are happy to clarify with you which topics should be bundled and coordinated cleanly right now.",
      pageDlContactCta: "Inquire about contractor coordination — non-binding",
      pageDlMailSubject: "Inquiry: contractor coordination — Segel Immoverwaltung",
      pageDlMailBody:
        "Hello,\n\nwe need support coordinating service providers at our property.\n\nProperty / address:\nType of need (e.g. maintenance, fault, several trades):\nHow to reach you:\n\nKind regards",
      pageBauContactHook:
        "If a larger project is coming up, we are happy to discuss how to set up the next steps sensibly and in good order.",
      pageBauContactCta: "Discuss a building project — non-binding",
      pageBauMailSubject: "Inquiry: construction coordination — Segel Immoverwaltung",
      pageBauMailBody:
        "Hello,\n\nwe are planning or carrying out a larger repair or refurbishment measure and are looking for coordination support.\n\nProperty / address:\nType / approximate scope:\nTimeline (if known):\nHow to reach you:\n\nKind regards",
      pageWegFitHeading: "Who this service suits well",
      pageWegFitYesTitle: "Especially suitable when …",
      pageWegFitYes1:
        "You represent a condominium association with ongoing or planned professional management",
      pageWegFitYes2:
        "The advisory board or owners want to hand off operational topics in a structured way",
      pageWegFitYes3:
        "You are changing managers or need a clean takeover of documents and cases",
      pageWegFitNoTitle: "Less suitable when …",
      pageWegFitNo1:
        "You only need one-off legal advice or litigation (a qualified lawyer is the right contact)",
      pageWegFitNo2:
        "The matter has no link to a managed property or owners’ association",
      pageMietFitHeading: "Who this service suits well",
      pageMietFitYesTitle: "Especially suitable when …",
      pageMietFitYes1:
        "You own rented residential or commercial units and need day-to-day administration support",
      pageMietFitYes2:
        "You want tenant communication, statements and coordination handled with less friction",
      pageMietFitYes3:
        "You want a dedicated contact for organisational and commercial processes",
      pageMietFitNoTitle: "Less suitable when …",
      pageMietFitNo1:
        "You only need legal disputes with tenants handled without any management scope",
      pageMietFitNo2:
        "You do not manage a property in the sense described above",
      pageDlFitHeading: "Who this service suits well",
      pageDlFitYesTitle: "Especially suitable when …",
      pageDlFitYes1:
        "The property has several service providers or ongoing coordination topics (trades, caretaker, utilities)",
      pageDlFitYes2:
        "WEGs, landlords or managers want quotes, appointments and follow-up bundled in one place",
      pageDlFitYes3:
        "Measures otherwise stall or responsibilities stay unclear",
      pageDlFitNoTitle: "Less suitable when …",
      pageDlFitNo1:
        "You only need a one-off minor repair without ongoing coordination",
      pageDlFitNo2:
        "There is no real need to steer several providers in a structured way",
      pageBauFitHeading: "Who this service suits well",
      pageBauFitYesTitle: "Especially suitable when …",
      pageBauFitYes1:
        "You are planning larger repair, refurbishment or modernisation with several trades",
      pageBauFitYes2:
        "WEGs or owners want support for planning, comparison and execution",
      pageBauFitYes3:
        "Deadlines, costs and documentation should stay clear from the outset",
      pageBauFitNoTitle: "Less suitable when …",
      pageBauFitNo1:
        "You only want architectural or site supervision by an external planner without a management link",
      pageBauFitNo2:
        "The job is very small with no coordination needs",
      pagePrivacyMetaTitle: "Privacy — Segel Immoverwaltung",
      pagePrivacyMetaDescription:
        "Privacy information for Segel Immoverwaltung: controller, hosting, email contact and your rights under the GDPR. The German version is legally authoritative.",
      imprintTitle: "Legal notice (Impressum)",
      imprintDdg: "Information pursuant to § 5 DDG (Digital Services Act)",
      imprintOwnerName: "Stefan Kosker",
      imprintStreet: "Eggensteiner Straße 57",
      imprintCity: "76297 Stutensee",
      imprintPhone: "Phone: +49 7244 5580502",
      imprintEmailLabel: "Email:",
      imprintVatIntro: "VAT identification number pursuant to § 27a UStG:",
      imprintVatId: "DE343859857",
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

    const contactEmail = CONTACT_EMAIL;
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
