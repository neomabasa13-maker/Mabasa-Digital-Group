/* ===== MABASA DIGITAL GROUP: EDIT YOUR BUSINESS DETAILS HERE =====
   Empty values ("") are hidden on the site. Never put secret keys in this file. */
window.MABASA = {
  name: "Mabasa Digital Group",
  slogan: "Building Digital Excellence.",
  email: "neomabasa16@gmail.com",            // REPLACE: e.g. "hello@yourdomain.co.za"
  whatsapp: "27716650107",         // REPLACE: international format, digits only, e.g. "27XXXXXXXXX"
  phone: "+27716650107",            // REPLACE: e.g. "+27XXXXXXXXX" (optional)
  siteUrl: "",          // REPLACE once live: e.g. "https://www.yourdomain.co.za"
  social: { LinkedIn: "", Facebook: "", Instagram: "", X: "" },
  currency: "R",
  whatsappMessage: "Hello Mabasa Digital Group! I am interested in your website development services. Could we discuss my project?",
  // Contact form: Web3Forms (free). Get a public access key at web3forms.com and paste it below.
  form: { endpoint: "https://api.web3forms.com/submit", accessKey: "d3df3cc9-f335-482f-9ce0-82b2087115e4" },

  // Add, remove or edit services freely. icon: globe|layout|target|cart|refresh|wrench|code|zap
  services: [
    { icon: "globe", title: "Business Website Development", text: "Professional websites for small and medium sized businesses, entrepreneurs and service providers." },
    { icon: "layout", title: "Custom Website Design", text: "Unique layouts and branding shaped around your business goals and identity." },
    { icon: "target", title: "Landing Page Development", text: "Focused pages for campaigns, products, services and lead generation." },
    { icon: "cart", title: "Ecommerce Websites", text: "Online storefronts with catalogues, carts and checkout integrations, where the chosen platform supports them." },
    { icon: "refresh", title: "Website Redesign", text: "Modernise an outdated site: better presentation, responsiveness, navigation and usability." },
    { icon: "wrench", title: "Website Maintenance", text: "Content updates, technical fixes, backups and support, according to the agreed scope." },
    { icon: "code", title: "Web Applications and Custom Software", text: "Applications that run in the browser, built for business workflows. Scope is confirmed per project." },
    { icon: "zap", title: "Automation and Digital Solutions", text: "We explore where repetitive tasks can be automated. Availability is confirmed per project." }
  ],

  // Prices: set price to a number (e.g. 4500) to show "From R4 500". null shows "Request a Quote".
  packages: [
    {
      name: "Starter Website", audience: "For individuals, freelancers and new businesses.", price: null,
      features: ["A simple professional website", "Responsive design", "Essential business information", "Contact links or a contact form", "Basic SEO setup"]
    },
    {
      name: "Business Website", audience: "For established businesses needing a stronger online presence.", price: null, featured: true,
      features: ["Multiple pages", "Custom styling", "Services and portfolio sections", "Contact form", "Basic SEO", "Social media integration"]
    },
    {
      name: "Advanced Website", audience: "For businesses needing additional functionality.", price: null,
      features: ["Extensive custom design", "Additional pages", "Suitable integrations with other services", "Advanced forms or workflows", "Additional testing and optimisation"]
    }
  ],

  // Demo projects only. Replace with real work later (add url to show "View Project").
  projects: [
    { title: "Concept: Local construction company", category: "Business Websites", tone: "#0B3D3A", desc: "A trustworthy brochure site with services, project gallery and quote request.", tech: ["HTML", "CSS", "JavaScript"], url: "demos/construction.html" },
    { title: "Concept: Premium restaurant", category: "Business Websites", tone: "#8A5A10", desc: "Menu, reservations call to action and a layout led by mood.", tech: ["HTML", "CSS", "JavaScript"], url: "demos/restaurant.html" },
    { title: "Concept: Consulting company", category: "Business Websites", tone: "#1F2D3D", desc: "Clean pages that put credibility first, for a professional services firm.", tech: ["HTML", "CSS"], url: "demos/consulting.html" },
    { title: "Concept: Small online retail store", category: "Ecommerce", tone: "#7A3E2B", desc: "Product catalogue, cart and checkout flow concept.", tech: ["HTML", "CSS", "JavaScript"], url: "demos/store.html" },
    { title: "Concept: Technology startup", category: "Landing Pages", tone: "#2B3F7A", desc: "A focused page built to collect early sign ups.", tech: ["HTML", "CSS", "JavaScript"], url: "demos/startup.html" },
    { title: "Concept: Booking dashboard", category: "Web Applications", tone: "#3E5A3A", desc: "A tool that runs in the browser for managing appointments.", tech: ["JavaScript", "HTML", "CSS"], url: "demos/dashboard.html" }
  ],

  faq: [
    ["How much does a website cost?", "It depends on the number of pages, the features you need, how ready your content is and any services from other providers involved. Request a quote and you will get a clear scope and price."],
    ["How long does it take to build a website?", "Timelines depend on project size and how quickly content and feedback are shared. A realistic schedule is agreed after discovery, so no fixed time is promised upfront."],
    ["Can you build a website for my specific business?", "Yes. Every site is planned around your business, audience and goals rather than a generic template."],
    ["Will my website work on mobile phones?", "Yes. Sites are built to be responsive across phones, tablets and desktops, and tested on each."],
    ["Can I update my website after launch?", "Yes. Depending on how the site is built, you can update it yourself or request updates under a maintenance arrangement."],
    ["Do I need to purchase a domain?", "To have your own web address, yes. A domain is usually a separate yearly cost. A first version can launch on a free address while you decide."],
    ["Is website hosting included?", "Hosting, domains and paid integrations may be quoted separately. Some sites can use free hosting. This is explained in your quote."],
    ["Can you redesign my existing website?", "Yes. Redesigns focus on presentation, responsiveness, navigation and usability."],
    ["Can you add online payments?", "Often, yes, through a payment gateway that suits your business. Gateway fees and subscriptions are charged by those providers and quoted separately."],
    ["Do you provide maintenance and support?", "Yes, according to an agreed scope covering updates, fixes and backups."],
    ["How do I get started?", "Send an enquiry using the form below or message on WhatsApp. Tell me about your business and what you need."]
  ]
};
