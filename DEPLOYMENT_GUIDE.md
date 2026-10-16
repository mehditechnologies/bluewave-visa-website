# 🌊 Blue Wave Visa Consultant — Live Deployment Guide

> **Target Domain:** [http://www.bluewavevisaconsultant.com](http://www.bluewavevisaconsultant.com)  
> **Production Package Ready:** `C:\BlueWaveVisa\BlueWaveWebsite_Production_Ready.zip`  
> **Local Preview Active:** [http://localhost:4173](http://localhost:4173)

---

## 🚀 Option 1: Deploy to cPanel / Shared Hosting (Simplest & Most Common)

If your domain `bluewavevisaconsultant.com` is hosted on cPanel (Hostinger, Namecheap, Bluehost, GoDaddy, etc.):

1. Log into your **cPanel**.
2. Open **File Manager** and navigate into the domain's root folder (usually `public_html/` or `public_html/bluewavevisaconsultant.com/`).
3. Click **Upload** and upload `C:\BlueWaveVisa\BlueWaveWebsite_Production_Ready.zip`.
4. Right-click the uploaded ZIP file in File Manager and select **Extract** directly into `public_html`.
5. Ensure the extracted files (including `index.html`, `.htaccess`, and the `assets/`, `team/`, `offers/`, `images/`, `downloads/` folders) sit directly inside the root folder.
6. Visit **[http://www.bluewavevisaconsultant.com](http://www.bluewavevisaconsultant.com)** — your website is immediately live!

---

## ⚡ Option 2: Deploy to Cloudflare Pages (Recommended - 100% Free & Lightning Fast)

1. Log into **[Cloudflare Dashboard](https://dash.cloudflare.com/)** -> **Workers & Pages** -> **Create application** -> **Pages**.
2. Select **Upload assets**.
3. Create a project name (e.g. `bluewavevisaconsultant`).
4. Drag & drop the `C:\BlueWaveVisa\blue_wave_website\dist` folder.
5. Click **Deploy Site**.
6. Under **Custom Domains**, add `www.bluewavevisaconsultant.com` and `bluewavevisaconsultant.com`. Cloudflare will automatically handle free SSL, DDoS protection, and worldwide CDN caching.

---

## 💻 Option 3: Run Locally or on VPS

### Run Development Server
```bash
cd C:\BlueWaveVisa\blue_wave_website
npm run dev
```

### Run Production Preview
```bash
cd C:\BlueWaveVisa\blue_wave_website
npm run preview -- --port 80 --host
```

---

## 📱 Features Included in this Build:
- **Logo & Branding:** Blue Wave official logo with wave, passport, globe, and plane motif.
- **26+ Country Destinations:** Belgium, Canada, Australia, New Zealand, Spain, USA, Azerbaijan, Tajikistan, Malta, Sweden, Italy, Germany, Ireland, Austria, Russia, Japan, Malaysia, Brazil, South Africa, Cambodia, Colombia, Turkey, Albania, Serbia, Belarus, China (plus Thailand).
- **Scenic Landmark Photography:** Banff, Sydney Harbour, Milford Sound, Fuji, Rome, Brussels Grand Place, Flame Towers, etc.
- **Bumper Offers Showcase:** All 10 promotional offers extracted directly from the official graphics with full-resolution poster viewer.
- **Executive Leadership & Team Section:**
  - CEO & Co-Founder: **AsadUllah Khan**
  - COO & Co-Founder: **Muhammad Huzaifah Ali**
  - Manager: **Laiba Khan**
  - Visit Visa Consultant: **Muhammad Rafay Akmal**
  - Visa Consultant: **Nimra Shaheen**
  - Visa Consultant: **Raheela Rubab**
  - Office Assistant: **Sajid Hassan**
- **Mobile Tracking App Showcase:** 5-stage status stepper, document dossier preview, and direct `BlueWaveVisa_v1.0.apk` download button.
- **Dual Global Offices:** Islamabad Head Office (Al Anayat Mall, G-11 Markaz with Google Maps link) & Baku Office (Fatali Khan Khoyski, Nariman Narimanov).
- **Direct WhatsApp:** Instant click-to-chat with `0322-2271478` across all offers, services, and assessment forms.
