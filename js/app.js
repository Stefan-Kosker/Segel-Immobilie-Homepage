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
      var badgeRect = heroBadge.getBoundingClientRect();
      var headerH = header.getBoundingClientRect().height;
      var targetDocY = Math.max(
        0,
        Math.round(window.scrollY + badgeRect.top - headerH)
      );

      // Reduced motion: snap straight to the final state (no clone, no
      // animation). Apply the class change (removing hero-logo-wrap from
      // flow), then measure the badge's new position and scroll so it lands
      // under the header.
      if (reduceMotion) {
        var prevAnchorRM = html.style.overflowAnchor;
        var prevBehaviorRM = html.style.scrollBehavior;
        html.style.overflowAnchor = "none";
        html.style.scrollBehavior = "auto";
        html.classList.remove("logo-in-hero");
        html.classList.add("logo-in-header");
        var badgeRectRM = heroBadge.getBoundingClientRect();
        var finalYRM = Math.max(
          0,
          Math.round(window.scrollY + badgeRectRM.top - headerH)
        );
        window.scrollTo({ top: finalYRM, left: 0, behavior: "instant" });
        requestAnimationFrame(function () {
          html.style.overflowAnchor = prevAnchorRM;
          html.style.scrollBehavior = prevBehaviorRM;
        });
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

      // Switch to the moving state (hides the original hero logo via CSS).
      html.classList.remove("logo-in-hero");
      html.classList.add("logo-moving");

      // Kick off the smooth page scroll toward the hero-badge target.
      window.scrollTo({ top: targetDocY, behavior: "smooth" });

      // Two rAFs guarantee the clone's initial top/left are committed before
      // the transform transition starts, so the browser animates from the
      // current visual position rather than snapping.
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          var targetRect = headerLogo.getBoundingClientRect();
          var scale = targetRect.height / heroRect.height;
          var dx = targetRect.left - heroRect.left;
          var dy = targetRect.top - heroRect.top;

          clone.style.transition =
            "transform 760ms cubic-bezier(0.65, 0, 0.35, 1)";
          clone.style.transform =
            "translate3d(" + dx + "px, " + dy + "px, 0) scale(" + scale + ")";

          var finished = false;
          function finish() {
            if (finished) return;
            finished = true;
            clone.removeEventListener("transitionend", onEnd);

            // Suppress scroll-behavior (CSS default is smooth) and scroll
            // anchoring for this single mutation so the viewport lands on an
            // exact pixel without any smooth animation or auto-compensation.
            var prevAnchor = html.style.overflowAnchor;
            var prevBehavior = html.style.scrollBehavior;
            html.style.overflowAnchor = "none";
            html.style.scrollBehavior = "auto";

            // Flip to the final state. This triggers display:none on
            // .hero-logo-wrap, so the document collapses by its height.
            html.classList.remove("logo-moving");
            html.classList.add("logo-in-header");

            // Measure where .hero-badge sits NOW (after the layout change)
            // and scroll so its top sits exactly under the sticky header.
            // Using a live rect avoids any guesswork about wrap height or
            // browser-specific scroll anchoring.
            var headerH = header.getBoundingClientRect().height;
            var badgeRectNow = heroBadge.getBoundingClientRect();
            var finalY = Math.max(
              0,
              Math.round(window.scrollY + badgeRectNow.top - headerH)
            );
            window.scrollTo({ top: finalY, left: 0, behavior: "instant" });

            requestAnimationFrame(function () {
              html.style.overflowAnchor = prevAnchor;
              html.style.scrollBehavior = prevBehavior;
            });

            if (clone.parentNode) clone.parentNode.removeChild(clone);
          }
          function onEnd(ev) {
            if (ev && ev.propertyName && ev.propertyName !== "transform") return;
            finish();
          }
          clone.addEventListener("transitionend", onEnd);
          // Safety fallback in case transitionend is missed.
          setTimeout(finish, 1400);
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

  function init() {
    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        const next = getLang() === "de" ? "en" : "de";
        setLang(next);
      });
    }
    setLang(getLang());
    initLogoTransition();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
