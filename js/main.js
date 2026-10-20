/* Mabasa Digital Group: site behaviour. Business details live in js/config.js */
(function () {
  const C = window.MABASA;
  const $ = (s, r = document) => r.querySelector(s);
  const NS = "http://www.w3.org/2000/svg";
  const ICONS = {
    globe: "M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
    layout: "M3 4h18v16H3zM3 9h18M9 9v11", target: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 8a4 4 0 100 8 4 4 0 000-8z",
    cart: "M3 4h2l2 11h10l2-8H6M9 20h.01M17 20h.01", refresh: "M20 11a8 8 0 10-2 6M20 4v7h-7",
    wrench: "M14.7 6.3a4 4 0 005 5L10 21a2 2 0 01-3-3z", code: "M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14", zap: "M13 2L4 14h7l-1 8 9-12h-7z"
  };
  // Safe element builder: text goes in as textContent, never as HTML.
  function el(tag, props = {}, kids = []) {
    const n = document.createElement(tag);
    for (const k in props) k === "text" ? (n.textContent = props[k]) : n.setAttribute(k, props[k]);
    [].concat(kids).forEach(c => n.append(c));
    return n;
  }
  function icon(name) {
    const s = document.createElementNS(NS, "svg"), p = document.createElementNS(NS, "path");
    s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("class", "ico"); s.setAttribute("aria-hidden", "true");
    p.setAttribute("d", ICONS[name] || ICONS.globe); s.append(p); return s;
  }
  const money = n => C.currency + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const wa = C.whatsapp.replace(/\D/g, "");
  const waUrl = wa ? "https://wa.me/" + wa + "?text=" + encodeURIComponent(C.whatsappMessage) : "";

  // Services + service dropdown
  const select = $("#service");
  select.append(el("option", { value: "", text: "Choose a service" }));
  C.services.forEach(s => {
    $("#services-grid").append(el("article", { class: "card reveal" }, [icon(s.icon), el("h3", { text: s.title }), el("p", { text: s.text }),
      el("a", { class: "btn btn-line", href: "#contact", "data-quote": "", "data-service": s.title, text: "Enquire Now" })]));
    select.append(el("option", { value: s.title, text: s.title }));
  });
  select.append(el("option", { value: "Not sure yet", text: "Not sure yet" }));

  // Packages
  C.packages.forEach(p => {
    const price = p.price == null ? "Request a Quote" : "From " + money(p.price);
    $("#pricing-grid").append(el("article", { class: "card reveal" + (p.featured ? " featured" : "") }, [
      el("h3", { text: p.name }), el("p", { text: p.audience }), el("div", { class: "price", text: price }),
      el("ul", {}, p.features.map(f => el("li", { text: f }))),
      el("a", { class: "btn btn-line", href: "#contact", "data-quote": "", "data-service": p.name, text: "Get a Quote" })]));
    select.insertBefore(el("option", { value: p.name, text: "Package: " + p.name }), select.lastChild);
  });

  // Portfolio with filters
  const cats = ["All"].concat([...new Set(["Business Websites", "Landing Pages", "Ecommerce", "Web Applications"])]);
  const grid = $("#work-grid");
  function showWork(cat) {
    grid.replaceChildren();
    const list = C.projects.filter(p => cat === "All" || p.category === cat);
    if (!list.length) grid.append(el("p", { class: "empty", text: "No projects in this category yet." }));
    list.forEach(p => {
      const card = el("article", { class: "card" }, [
        el("div", { class: "mock", style: "background:" + p.tone, "aria-hidden": "true" }, [el("b"), el("b"), el("em")]),
        el("p", { class: "tag", text: p.category + " (concept project)" }), el("h3", { text: p.title }),
        el("p", { text: p.desc }), el("p", { class: "tech", text: "Built with " + p.tech.join(", ") })]);
      if (p.url) card.append(el("a", { class: "btn btn-line", href: p.url, target: "_blank", rel: "noopener", text: "View Project" }));
      grid.append(card);
    });
  }
  cats.forEach(c => {
    const b = el("button", { type: "button", "aria-pressed": c === "All" ? "true" : "false", text: c });
    b.addEventListener("click", () => { [...$("#filters").children].forEach(x => x.setAttribute("aria-pressed", "false")); b.setAttribute("aria-pressed", "true"); showWork(c); });
    $("#filters").append(b);
  });
  showWork("All");

  // FAQ (native details/summary is keyboard accessible)
  C.faq.forEach(([q, a]) => $("#faq-list").append(el("details", {}, [el("summary", { text: q }), el("p", { text: a })])));

  // Contact + footer links: unconfigured ones are simply omitted
  const IC = { wa: "M3 21l1.6-4.7A9 9 0 1112 21a9 9 0 01-4.4-1.2L3 21z",
    tel: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z", mail: "M3 5h18v14H3zM3 7l9 6 9-6" };
  function ib(kind, label, href, ext) {
    const a = el("a", { class: "ic " + kind, href, "aria-label": label, title: label }, [icon("globe"), el("span", { text: label })]);
    a.querySelector("path").setAttribute("d", IC[kind]);
    if (kind === "wa") { // white handset: its bounding box centre (12,12) = the bubble's centre
      const h = document.createElementNS(NS, "path");
      h.setAttribute("d", "M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.9.6 2.8.7a2 2 0 011.7 2z");
      h.setAttribute("transform", "translate(12 12) scale(.4) translate(-12 -12)"); h.setAttribute("fill", "#fff"); h.setAttribute("stroke", "none");
      a.querySelector("svg").append(h);
    } if (ext) { a.target = "_blank"; a.rel = "noopener"; } return a;
  }
  const subj = encodeURIComponent("Website enquiry"), body = encodeURIComponent("Hello Mabasa Digital Group,\n\nI would like to discuss a website project.\n");
  const links = [];
  if (waUrl) links.push(ib("wa", "WhatsApp", waUrl, true));
  if (C.phone) links.push(ib("tel", "Call", "tel:" + C.phone.replace(/[^\d+]/g, "")));
  if (C.email) links.push(ib("mail", "Email", "mailto:" + C.email + "?subject=" + subj + "&body=" + body));
  links.forEach(l => $("#contact-links").append(l));
  const formLive = !!C.form.accessKey;
  if (!formLive) {
    const n = $("#form-notice"); n.hidden = false;
    n.textContent = "The enquiry form is not live yet. " + (links.length ? "Please use the contact options above." : "Contact details have not been configured yet.");
  }

  // Mobile menu
  const burger = $(".burger"), nav = $("#nav");
  const setMenu = open => { nav.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); burger.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
  burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); burger.focus(); } });

  // Quote buttons preselect the service
  document.addEventListener("click", e => {
    const a = e.target.closest("[data-quote]"); if (!a) return;
    if (a.dataset.service) select.value = a.dataset.service;
  });

  // Scroll reveals + active nav
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: .12 }) : null;
  document.querySelectorAll(".reveal").forEach(n => io ? io.observe(n) : n.classList.add("in"));
  if (io) {
    const nio = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) document.querySelectorAll(".nav a:not(.btn)").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + x.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
    ["top", "services", "portfolio", "about", "contact"].forEach(id => nio.observe(document.getElementById(id)));
  }

  // Form: validation + real submission
  const form = $("#quote-form"), status = $("#form-status"), btn = $("button[type=submit]", form);
  const rules = { name: v => v.trim() ? "" : "Enter your full name.", email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address.",
    service: v => v ? "" : "Choose a service.", message: v => v.trim().length >= 10 ? "" : "Describe your project in at least a sentence." };
  function validate() {
    let first = null;
    Object.keys(rules).concat("consent").forEach(k => {
      const f = form.elements[k], msg = k === "consent" ? (f.checked ? "" : "Please tick this box to continue.") : rules[k](f.value);
      $("#e-" + k).textContent = msg; f.setAttribute("aria-invalid", !!msg); if (f.id) f.setAttribute("aria-describedby", "e-" + k);
      if (msg && !first) first = f;
    });
    if (first) first.focus(); return !first;
  }
  form.addEventListener("submit", async e => {
    e.preventDefault(); status.className = ""; status.textContent = "";
    if (!validate()) return;
    if (!formLive) { status.className = "bad"; status.textContent = "The form is not live yet, so nothing was sent. Please use WhatsApp or email instead."; return; }
    btn.disabled = true; btn.textContent = "Sending...";
    const d = Object.fromEntries(new FormData(form)); d.access_key = C.form.accessKey; d.subject = "New website enquiry: " + d.service; d.from_name = C.name;
    try {
      const r = await fetch(C.form.endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error();
      form.replaceChildren(el("h3", { text: "Enquiry sent" }), el("p", { text: "Thank you. Your enquiry has been submitted and will be reviewed." }));
      form.setAttribute("tabindex", "-1"); form.focus();
    } catch (_) {
      status.className = "bad"; status.textContent = "Your enquiry could not be sent. Please try again, or contact us by WhatsApp or email.";
      btn.disabled = false; btn.textContent = "Send enquiry";
    }
  });
})();
