/* Wires up the bottom banner (links + year) from js/config.js. Used on every page. */
(function () {
  const C = window.MABASA || {}, $$ = (s) => [...document.querySelectorAll(s)];
  const wa = (C.whatsapp || "").replace(/\D/g, "");
  const social = {};
  Object.entries(C.social || {}).forEach(([k, v]) => { social[k.toLowerCase()] = v; });
  $$("[data-wa]").forEach(a => wa ? a.href = "https://wa.me/" + wa + "?text=" + encodeURIComponent(C.whatsappMessage || "") : a.hidden = true);
  $$("[data-mail]").forEach(a => { if (C.email) { a.href = "mailto:" + C.email; const s = a.querySelector("span"); if (s) s.textContent = C.email; } else a.hidden = true; });
  $$("[data-tel]").forEach(a => { if (C.phone) { a.href = "tel:" + C.phone.replace(/[^\d+]/g, ""); const s = a.querySelector("span"); if (s) s.textContent = C.phone; } else a.hidden = true; });
  $$("[data-social]").forEach(a => { const u = social[a.dataset.social]; u ? (a.href = u, a.target = "_blank") : a.hidden = true; });
  $$("[data-year]").forEach(e => e.textContent = new Date().getFullYear());
})();
