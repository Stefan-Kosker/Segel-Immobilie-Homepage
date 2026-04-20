/**
 * Lighthouse's hreflang audit requires alternate link href values to be absolute (http/https).
 * This rewrites relative hrefs using the current document URL and adds hreflang="x-default"
 * pointing at the German URL (primary site language).
 */
(function () {
  var head = document.head;
  if (!head) return;

  function toAbsolute(href) {
    if (!href) return href;
    if (/^https?:\/\//i.test(href)) return href;
    try {
      return new URL(href, window.location.href).href;
    } catch (e) {
      return href;
    }
  }

  var links = head.querySelectorAll('link[rel="alternate"][hreflang]');
  var deHref = null;
  links.forEach(function (link) {
    var lang = (link.getAttribute("hreflang") || "").toLowerCase();
    if (lang === "x-default") return;
    var abs = toAbsolute(link.getAttribute("href"));
    if (abs) link.setAttribute("href", abs);
    if (lang === "de") deHref = abs;
  });

  if (!deHref) return;
  var existing = head.querySelector('link[rel="alternate"][hreflang="x-default"]');
  if (existing) {
    var eh = existing.getAttribute("href");
    if (!eh || !/^https?:\/\//i.test(eh)) existing.setAttribute("href", deHref);
  } else {
    var x = document.createElement("link");
    x.rel = "alternate";
    x.hreflang = "x-default";
    x.setAttribute("href", deHref);
    head.appendChild(x);
  }
})();
