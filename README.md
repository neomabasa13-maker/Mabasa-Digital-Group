# Mabasa Digital Group website

Plain HTML, CSS and JavaScript. No build step.

## Run locally
1. Install Visual Studio Code and the "Live Server" extension.
2. Open this folder in VS Code, right-click `index.html`, choose "Open with Live Server".

## Replace before launch (all in `js/config.js`)
- `email`, `whatsapp` (digits only, e.g. 27XXXXXXXXX), `phone`, `siteUrl`, `social` links (empty ones are hidden)
- `form.accessKey`: see below
- `packages[].price`: numbers show "From R...", `null` shows "Request a Quote"
- `projects`: demo concepts; replace with real work and add `url`
- In `index.html`, `robots.txt` and `sitemap.xml`: replace `REPLACE-WITH-YOUR-DOMAIN`
- `legal.html`: replace every `[OWNER: ...]` note. It is a starter draft, not legal advice; check POPIA requirements.

## Contact form (Web3Forms)
Create a free access key at web3forms.com using your email, paste it into `form.accessKey`. The key is designed to be public. Check Web3Forms' current free-plan limits first. Until a key is set, the page says the form is not live and nothing is "sent". Test by submitting from your phone.

## Free hosting
Cloudflare Pages, Netlify or GitHub Pages all serve static sites. Confirm each one's current free-plan and commercial-use terms. Upload the folder, then add a custom domain later in the host's settings.

## Manual checklist
Nav links, mobile menu (open, Escape, closes on link), portfolio filters, FAQ, form validation, WhatsApp and email links, small phone width, reduced-motion setting. Not yet run in a browser.

## Not included yet
Stock photography. `legal.html` is only a starter draft and needs owner review.
