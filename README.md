# New Son Medical Store — Website

Modern, responsive single-page website for **New Son Medical Store**, a licensed pharmacy in Pehati Ka Chauraha, Mirzapur (Uttar Pradesh).

**Live site:** https://newsonmedical.vercel.app

## Features

- Fully responsive design (desktop, tablet, mobile with off-canvas nav)
- Complete product catalogue: Allopathic, Ayurvedic, Patanjali & Veterinary
- 16 trusted pharma brands + Health Zone (baby care, women's care, beauty care)
- Store photo gallery with category filters and lightbox
- Store video tour
- Contact form that sends orders straight to WhatsApp
- Floating WhatsApp & call buttons, Google Maps embed, 24x7 emergency info

## Contact Information

| | |
|---|---|
| **Address** | Pehati Ka Chauraha, Mirzapur, Uttar Pradesh, India |
| **Phone** | +91 7705950290 / +91 7905863291 |
| **WhatsApp** | +91 7705950290 |
| **Proprietor** | प्रखर गुप्ता (Prakhar Gupta) |
| **Hours** | Daily 8:00 AM – 11:00 PM · 24x7 Emergency Service |

## Tech Stack

Plain HTML, CSS and JavaScript — no frameworks, no build step. Font Awesome icons and Google Fonts (Plus Jakarta Sans) load from CDNs.

## Local Preview

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8765
# then visit http://localhost:8765
```

## Deployment

The site auto-deploys: push to `main` on GitHub → Vercel builds and publishes to https://newsonmedical.vercel.app within about a minute. No build settings needed (Framework Preset: Other).

## Structure

```
├── index.html      # single-page site
├── styles.css      # design system + responsive styles
├── script.js       # gallery, lightbox, menu, form → WhatsApp
└── images/         # store photos + ShopVideo.mp4
```

---
© 2026 New Son Medical Store. All rights reserved.
