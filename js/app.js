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
        "Nein, die WEG-Verwaltung ersetzt keine Rechts- oder Steuerberatung. Wir kümmern uns um die ordnungsgemäße Verwaltung Ihrer Gemeinschaft und arbeiten bei speziellen rechtlichen oder steuerlichen Fragestellungen bei Bedarf mit den zuständigen Fachleuten zusammen. So ist sichergestellt, dass Ihre WEG in jedem Bereich passend betreut wird.",
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
        "No, WEG management does not replace legal or tax advice. We take care of the proper administration of your community and work together with the relevant specialists where specific legal or tax questions arise. This ensures that your WEG is appropriately supported in every area.",
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
    initFaqAccordions();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
