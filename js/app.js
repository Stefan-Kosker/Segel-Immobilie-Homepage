(function () {
  "use strict";

  const STORAGE_KEY = "segel-lang";

  const STRINGS = {
    de: {
      metaTitle: "Segel Immoverwaltung — WEG-Verwaltung Karlsruhe & Region",
      metaDescription:
        "WEG-Verwaltung mit klaren Prozessen: Abrechnung, Eigentümerversammlungen, Instandhaltung, Versicherungen. Einzugsgebiet Karlsruhe, Rhein-Neckar, Kraichgau und Umgebung.",
      skip: "Zum Inhalt springen",
      navAria: "Hauptnavigation",
      navServices: "Leistungen",
      navRegion: "Region",
      navProcess: "Verwaltungswechsel",
      navFaq: "FAQ",
      navContact: "Kontakt",
      navImprint: "Impressum",
      brandTag: "WEG-Verwaltung",
      heroH1: "WEG-Verwaltung, die entlastet und Struktur schafft",
      heroLead:
        "Für WEGs in Karlsruhe und der Region: klare Abläufe, saubere Abrechnung, gut vorbereitete Versammlungen — mit festem Ansprechpartner.",
      heroImgAlt: "Modernes Wohngebäude (Symbolbild)",
      photoCreditPre: "Foto:",
      photoCreditPost: "(Symbolbild)",
      ctaPrimary: "Kontakt aufnehmen",
      ctaSecondary: "Leistungen ansehen",
      pillarsTitle: "Worauf es ankommt",
      pillar1Title: "Entlastung",
      pillar1Text:
        "Weniger operative Last auf dem Beirat: Aufgaben werden strukturiert übernommen.",
      pillar2Title: "Ordnung",
      pillar2Text: "Klare Abläufe, Fristen und Dokumentation statt Papierchaos.",
      pillar3Title: "Sicherheit",
      pillar3Text:
        "Sorgfältiger Umgang mit Hausgeld, Verträgen und Versicherungen — ohne Rechtsberatung zu versprechen, wo sie nicht unsere Rolle ist.",
      pillar4Title: "Verlässlichkeit",
      pillar4Text:
        "Fristen im Blick; Beschlüsse werden umgesetzt, nicht nur protokolliert.",
      pillar5Title: "Weniger Konflikte",
      pillar5Text:
        "Transparente Kommunikation und klare Moderation reduzieren Reibung.",
      pillar6Title: "Professionelle Außenwirkung",
      pillar6Text:
        "Eine seriöse Anlaufstelle gegenüber Mietern, Versicherern und Handwerkern.",
      servicesTitle: "Was wir konkret für Ihre WEG übernehmen",
      servicesLead: "Klar formuliert — ohne unnötiges Fachchinesisch.",
      svcAccountingTitle: "Abrechnung & Planung",
      svcAccountingItems:
        "Jahresabrechnung, Wirtschaftspläne, Hausgeld, Archiv — inkl. Steuerberater-Schnittstelle, wo sinnvoll.",
      svcMeetingsTitle: "Eigentümerversammlungen",
      svcMeetingsItems:
        "Einberufung, Tagesordnung, Protokoll, Beschlussvorentwürfe, Umsetzung.",
      svcMaintenanceTitle: "Instandhaltung & Handwerk",
      svcMaintenanceItems:
        "Koordination, Angebote, Abstimmung mit Beschlüssen und Budget.",
      svcInsuranceTitle: "Versicherungen & Schäden",
      svcInsuranceItems: "Begleitung bei Fragen und Schäden; saubere Dokumentation.",
      svcLegalTitle: "Formalitäten & Schnittstellen",
      svcLegalItems:
        "Organisatorische Themen und Abstimmung mit Partnern — ohne Rechtsberatung, wo Spezialisten nötig sind.",
      regionTitle: "Einzugsgebiet",
      regionLead: "Schwerpunkt Karlsruhe und Umgebung (ca. 60 km), u. a.:",
      regionMore: "Weitere Orte im Radius gerne — kurz nachfragen, ob es passt.",
      regionCities:
        "Karlsruhe · Ettlingen · Bruchsal · Rastatt · Baden-Baden · Pforzheim · Mannheim · Heidelberg · Landau in der Pfalz · Germersheim · Speyer · Schwetzingen · Waghäusel · Stutensee · Bretten · Bühl · Achern",
      processTitle: "So läuft der Verwaltungswechsel",
      processLead: "Verwaltungswechsel strukturiert begleiten — damit nichts verloren geht.",
      step1Title: "Erstgespräch & Bedarf",
      step1Text: "Kurz klären: WEG-Größe, Themen, Erreichbarkeit, Ansprechpartner.",
      step2Title: "Unterlagen & Übergabe",
      step2Text:
        "Akten und laufende Vorgänge strukturiert übernehmen — mit Checkliste.",
      step3Title: "Start & Kommunikation",
      step3Text:
        "Kommunikationskanäle festlegen; Start mit Hausgeld, Versicherung, Terminen.",
      faqTitle: "Häufige Fragen",
      faq1Q: "Wie schnell erreiche ich jemanden bei Dringlichem?",
      faq1A:
        "Im Erstgespräch: Erreichbarkeit und Eskalation transparent vereinbaren.",
      faq2Q: "Gibt es einen festen Ansprechpartner?",
      faq2A: "Ja — Details klären wir beim Start der Zusammenarbeit.",
      faq3Q: "Sind auch kleinere WEGs willkommen?",
      faq3A:
        "In der Regel ja — mit realistischer Abstimmung zu Umfang und Rhythmus.",
      faq4Q: "Wie aufwendig ist der Wechsel von der alten Verwaltung?",
      faq4A:
        "Abhängig von Dokumentation und offenen Vorgängen — mit Checkliste gut steuerbar.",
      faq5Q: "Ersetzt die Verwaltung Rechts- oder Steuerberatung?",
      faq5A: "Nein — bei Bedarf holen wir Steuerberater oder Anwälte hinzu.",
      contactTitle: "Kontakt",
      contactLead:
        "Kurz beschreiben, was Sie brauchen — wir melden uns mit einem Vorschlag für ein Erstgespräch.",
      contactCta: "E-Mail vorbereiten",
      contactMailSubject: "Anfrage WEG-Verwaltung",
      contactMailBody:
        "Guten Tag,\n\nwir interessieren uns für eine WEG-Verwaltung.\n\nOrt der WEG:\nAnzahl Wohneinheiten (ca.):\nAktuelles Thema (optional):\n\nMit freundlichen Grüßen",
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
      metaTitle: "Segel Immoverwaltung — HOA (WEG) management Karlsruhe & region",
      metaDescription:
        "Professional condominium (WEG) management with clear processes: accounts, owners’ meetings, maintenance, insurance. Serving Karlsruhe, Rhine-Neckar, Kraichgau and surrounding areas.",
      skip: "Skip to content",
      navAria: "Main navigation",
      navServices: "Services",
      navRegion: "Area",
      navProcess: "Changing managers",
      navFaq: "FAQ",
      navContact: "Contact",
      navImprint: "Legal notice",
      brandTag: "Condominium (WEG) management",
      heroH1: "HOA management that relieves pressure and creates structure",
      heroLead:
        "For WEGs in Karlsruhe and the region: clear processes, clean accounts, well-prepared meetings — with a dedicated point of contact.",
      heroImgAlt: "Modern residential building (illustrative image)",
      photoCreditPre: "Photo:",
      photoCreditPost: "(illustrative image)",
      ctaPrimary: "Get in touch",
      ctaSecondary: "View services",
      pillarsTitle: "What actually matters",
      pillar1Title: "Relief",
      pillar1Text:
        "Less operational load on the board: tasks are taken on in a structured way.",
      pillar2Title: "Order",
      pillar2Text: "Clear processes, deadlines and documentation instead of paper chaos.",
      pillar3Title: "Sound handling",
      pillar3Text:
        "Careful handling of service charges, contracts and insurance — without promising legal advice where that is not our role.",
      pillar4Title: "Dependability",
      pillar4Text:
        "Deadlines in view; resolutions are implemented, not only minuted.",
      pillar5Title: "Fewer conflicts",
      pillar5Text:
        "Transparent communication and clear moderation reduce friction.",
      pillar6Title: "Professional outward image",
      pillar6Text:
        "A serious point of contact for tenants, insurers and contractors.",
      servicesTitle: "What we take on for your WEG, in concrete terms",
      servicesLead: "Clearly worded — without unnecessary jargon.",
      svcAccountingTitle: "Accounting & planning",
      svcAccountingItems:
        "Annual statements, budgets, service charges, archive — plus tax-adviser liaison where appropriate.",
      svcMeetingsTitle: "Owners’ meetings",
      svcMeetingsItems:
        "Convening, agenda, minutes, draft resolutions, follow-up.",
      svcMaintenanceTitle: "Maintenance & trades",
      svcMaintenanceItems:
        "Coordination, quotes, alignment with resolutions and budget.",
      svcInsuranceTitle: "Insurance & claims",
      svcInsuranceItems: "Support on questions and claims; clean documentation.",
      svcLegalTitle: "Formalities & interfaces",
      svcLegalItems:
        "Organisational topics and coordination with partners — without substituting legal advice where specialists are needed.",
      regionTitle: "Service area",
      regionLead: "Focus on Karlsruhe and surroundings (about 60 km), including:",
      regionMore: "Other nearby locations welcome — ask us if yours fits.",
      regionCities:
        "Karlsruhe · Ettlingen · Bruchsal · Rastatt · Baden-Baden · Pforzheim · Mannheim · Heidelberg · Landau in der Pfalz · Germersheim · Speyer · Schwetzingen · Waghäusel · Stutensee · Bretten · Bühl · Achern",
      processTitle: "How a change of management works",
      processLead:
        "We support a structured change of manager so nothing gets lost.",
      step1Title: "Initial call & needs",
      step1Text:
        "Short alignment: WEG size, topics, availability, contact person.",
      step2Title: "Records & handover",
      step2Text:
        "Structured takeover of files and ongoing cases — with a checklist.",
      step3Title: "Go-live & communication",
      step3Text:
        "Define communication channels; start with service charges, insurance and key dates.",
      faqTitle: "Frequently asked questions",
      faq1Q: "How quickly can I reach someone in an urgent case?",
      faq1A:
        "In the initial call we agree availability and escalation paths transparently.",
      faq2Q: "Is there a fixed contact person?",
      faq2A: "Yes — we agree the details when we start working together.",
      faq3Q: "Are smaller WEGs welcome?",
      faq3A:
        "Usually yes — with a realistic alignment on scope and rhythm.",
      faq4Q: "How demanding is switching from the previous manager?",
      faq4A:
        "It depends on documentation and open cases — manageable with a checklist.",
      faq5Q: "Does management replace legal or tax advice?",
      faq5A: "No — we bring in tax advisers or lawyers where needed.",
      contactTitle: "Contact",
      contactLead:
        "Briefly describe what you need — we will reply with a suggestion for an initial call.",
      contactCta: "Prepare email",
      contactMailSubject: "Inquiry: WEG / HOA management",
      contactMailBody:
        "Hello,\n\nwe are interested in professional WEG / condominium management.\n\nLocation of the WEG:\nApprox. number of units:\nCurrent topic (optional):\n\nKind regards",
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
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "de") return stored;
    return "de";
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "de") return;
    localStorage.setItem(STORAGE_KEY, lang);
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
  }

  function applyStrings(lang) {
    const t = STRINGS[lang];
    if (!t) return;

    document.title = t.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.metaDescription);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (!key || !Object.prototype.hasOwnProperty.call(t, key)) return;
      const value = t[key];
      if (el.hasAttribute("data-i18n-attr")) {
        const attr = el.getAttribute("data-i18n-attr");
        if (attr) el.setAttribute(attr, value);
        return;
      }
      el.textContent = value;
    });

    const mailto = document.getElementById("mailto-contact");
    if (mailto) {
      const subj = encodeURIComponent(t.contactMailSubject);
      const body = encodeURIComponent(t.contactMailBody);
      mailto.href = "mailto:?subject=" + subj + "&body=" + body;
    }
  }

  function initHeroParallax() {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    var hero = document.querySelector(".hero");
    var decor = document.querySelector(".hero-decor");
    var photo = document.querySelector(".hero-photo-parallax");
    if (!hero || !decor || !photo) return;

    var ticking = false;

    function update() {
      var maxT = Math.max(hero.offsetHeight, 1);
      var t = Math.min(window.scrollY, maxT);
      var d = t * 0.16;
      var p = t * 0.07;
      decor.style.transform = "translate3d(0, " + d + "px, 0)";
      photo.style.transform = "translate3d(0, " + p + "px, 0)";
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          update();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
  }

  function init() {
    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        const next = getLang() === "de" ? "en" : "de";
        setLang(next);
      });
    }
    setLang(getLang());
    initHeroParallax();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
