md here

# Ox FleetCare — MVP Website Spec

## 0) Goals

- Present services (repairs, maintenance), equipment sales (new + pre-owned), company story, careers, and contact info.
- Keep the look minimal, industrial, and trustworthy.
- Make inventory easy to skim and inquire about.

---

## 1) Pages (Sitemap)

- **Home**: Hero + three cards (Repairs, Maintenance, Sales) + careers teaser + “division of Ox Equipment” note.  
- **Services**: Medium/heavy duty & specialty equipment servicing summary.  
- **Sales**: (a) Pre-Owned inventory grid with product pages; (b) New equipment overview (MTS suction excavators list).  
- **Pre-Owned Equipment**: Archive grid (sort controls) → Product detail pages.  
- **Our Story**: Mission, vision, areas of work, shop capabilities, “Join our team” CTA.  
- **Careers**: Job postings (e.g., 310T Journeyman) + apply instructions.  
- **Contact**: Phone, email, address, simple form or mailto links.  
- **Utility**: 404, Privacy (stub), SEO pages as needed.

> Content sources captured from the live site’s sections (Home, Services, Sales, Our Story, Careers, Contact) and the pre-owned grid/product pages.

---

## 2) Content Requirements (Copy Blocks)

### Home

- **Hero**: Headline "**PERFORMANCE. DRIVEN.**"  
  - Sub-sections: **Repairs** (autos to heavy trucks; tankers, vac trailers, hydro vacs, specialty), **Maintenance** (same set), **Sales** (new & used equipment).  
- **Careers teaser**: “Looking for a new career? Contact us” CTA.
- **Affiliation**: “Ox FleetCare is a division of Ox Equipment; North America’s dry suction excavation experts.” Link to Ox Equipment.

### Services

- Overview of **dry/suction excavation expertise** and fleet-oriented servicing. Bullet list of capabilities is fine.

### Sales

- **Pre-Owned**: Card grid for inventory + note “All vehicles sold ‘As Is’; safety quotation upon request; inventory varies.”  
- **New**: MTS models list (DINO 4.5 / 8 / 12 / City DINO) with short value blurb.

### Pre-Owned Product Detail

- Title (e.g., “2016 Western Star Tandem/Tandem Hydro Vac Truck”).  
- Image gallery.  
- Specs/description (if available).  
- Contact line for more info (e.g., phone extension).  
- Related products.

### Our Story

- One-liners: **Premium Service, Safety Focused, 15+ years, Quality Workmanship, Professional Staff, Value Centered.**  
- **Mission** (optimize performance via proactive fleet mgmt).  
- **Vision** (people of character, service & innovation, communities).  
- **Areas of work**: Acquisition (PDI/upfitting), Safety & Compliance, Preventative Maintenance, Remarketing, Repairs, Custom Fabrication.  
- **We offer**: 15,000 ft² service area, parts network, trained techs, parts inventory, skilled mechanics, well-equipped shop.  
- **CTA**: Join our team.

### Careers

- Intro on culture/learning/leadership.  
- **Job card** example: “310T Journeyman” with short company blurb + link to apply/learn more.

### Contact

- **Phone**: (888) 290-4044  
- **Email**: <INFO@OX-EQUIPMENT.COM>  
- **Address**: 466 HWY 52, Dundas, ON L9H 5E2  
- Optional simple contact form (Name, Email, Phone, Message) or link buttons.

---

## 3) IA & Navigation

- Header: Logo (top left), primary nav: **Services, Sales, Our Story, Careers, Contact**.  
- Secondary CTAs: **View Inventory**, **Call (888) 290-4044**, **Email**.  
- Footer: Ox FleetCare ©, “A division of Ox Equipment” + link, address, phone, email.

---

## 4) Visual Design (MVP)
>
> The live site runs on WordPress + GeneratePress. Exact brand tokens aren’t publicly listed; use this **proposed** palette & typography that fits the industrial tone and uppercase headlines seen on the home hero:

- **Palette (proposed)**  
  - Primary: **#111111** (near-black)  
  - Accent: **#D90429** (industrial red for CTAs/links)  
  - Text: **#1F2937** (dark gray)  
  - Muted: **#6B7280** (labels, meta)  
  - Background: **#FFFFFF** / Alt section: **#F8FAFC**

- **Typography (proposed)**  
  - Headings: **Montserrat** (700/800), uppercase tracking for hero.  
  - Body: **Inter** or **Open Sans** (400/600).  
  - Buttons: Semi-bold, all caps, tight letter-spacing.

- **Imagery**  
  - Use **shop/fleet/equipment** photos; horizontal 16:9 hero, square cards for inventory.  
  - Product pages: 5–8 images (front/side/rear, interior, VIN plate if desired).

- **Components**  
  - Cards with 8–16px radius, soft shadows.  
  - Simple chips for categories (Hydro Vacs, Tankers, etc.).  
  - Sort dropdown on inventory: Popularity, Latest, Price (low→high/high→low).

---

## 5) Functional Requirements

- **Inventory (Pre-Owned)**  
  - Grid with sorting (Popularity, Latest, Price).  
  - Card shows Image, Title, “Read more” → Product page.  
  - Product pages support galleries + spec list + inquiry CTA.

- **Forms**  
  - Contact form → Email handler (or mailto buttons as MVP).  
  - Career application can be a link CTA (Phase 1) → email HR.

- **Performance & SEO**  
  - Lightweight (no unnecessary libraries).  
  - Title/Meta/OG per page.  
  - Schema: `LocalBusiness` + `Product` for inventory items.

- **Accessibility**  
  - Color contrast AA, focus states, semantic headings, alt text for product images, label all form fields.

---

## 6) Tech Stack (Suggestion)

- **MVP Build**: Next.js + Tailwind CSS (or WordPress + GeneratePress if you want parity).  
- **Inventory**: JSON/MDX for Phase 1; upgrade to a CMS (e.g., WP, Headless WP, or Sanity) later.  
- **Hosting**: Vercel/Netlify (static hybrid) or stick with current WordPress host.

---

## 7) Content Checklist (Copy/Paste)

- [ ] Hero headline: PERFORMANCE. DRIVEN.  
- [ ] Repairs copy (autos → heavy duty, trailers, tankers, vac/hydro vacs, specialty)  
- [ ] Maintenance copy (same families)  
- [ ] Sales intro (new + used)  
- [ ] Pre-Owned grid (at least 2–3 sample units)  
- [ ] Product pages (title, gallery, specs, contact line)  
- [ ] New MTS models list (DINO 4.5/8/12, City DINO)  
- [ ] Our Story (mission, vision, areas of work, capabilities)  
- [ ] Careers (culture + at least one posting)  
- [ ] Contact (phone, email, address)  
- [ ] Footer affiliation with Ox Equipment

---

## 8) Example Content Seeds (from site)

- **Repairs/Maintenance** scope lines (autos, light/HD trucks, tanker trailers, vac trailers, hydro vacs, specialty).  
- **Pre-Owned items** examples: 2016 Western Star Hydro Vac, 2018 Rival T7 Hydrovac, 2023 Western Star Suction Excavator.  
- **New equipment**: MTS DINO 4.5 / 8 / 12 / City DINO list.  
- **Our Story**: mission, vision, 15,000 ft² shop, trained techs, parts network, custom fabrication.
(These are present on the live site.)

---

## 9) Roadmap (Post-MVP)

- Inventory filters (Category, Year, Make).  
- Inquiry forms per product.  
- Simple ATS for Careers (or embeds).  
- Blog/Updates and case studies.  
- Photo/video tours of the shop.
