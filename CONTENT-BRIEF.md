# Floral Park HVAC — Content Brief
**QuickFlip Sites | Build Log**  
Date: May 3, 2026  
Prospect: https://www.floralparkhvac.com/  
Template: PipeMonkey-Redesign (v2 — last updated May 3, 2026)  
Reference site: N/A — HVAC content library used for structural guidance  

---

## Source Material Summary

**Business name:** Floral Park HVAC (Corp)  
**Phone:** (516) 855-4328  
**Address:** 7 Florence St, Floral Park, NY 11001  
**Service area:** All Nassau County, Western Suffolk, Northern Queens, NY  
**Business hours:** Monday–Friday 7am–5pm, Saturday 7am–1pm  
**License/credentials:** Nassau County Home Improvement Contractor, licensed/insured/bonded; BuildZoom score 94 (top 24% of NY contractors)  
**Facebook:** https://www.facebook.com/floralparkhvac/  
**Partners/brands:** American Standard, Comfortmaker, Burnham, Aeroseal  
**Tagline extracted:** "100% Honesty, Hard Workers."  
**Key differentiators extracted:** Honest pricing, upfront estimates, licensed & insured, fast response, quality workmanship, years of local service  
**Testimonial extracted:** "Floral Park HVAC is a company that was great from scheduling an appointment to completion of inspection and analysis of issues. I cannot say enough about their service and professionalism." — via HomeAdvisor/web search  

---

## Service Inventory — Floral Park HVAC

Every item below has a corresponding slug in `data/craft-catalog/crafts.ts`:

1. Central Air Conditioning — slug: `central-air-conditioning`
2. Mini Split Systems — slug: `mini-split-systems`
3. A/C Tune-Up & Maintenance Plans — slug: `ac-maintenance`
4. Gas Heating — slug: `gas-heating`
5. Oil Heating — slug: `oil-heating`
6. Boilers — slug: `boilers`
7. Water Heaters — slug: `water-heaters`
8. Air Handlers & Duct Work — slug: `air-handlers-duct-work`
9. Full System Replacements — slug: `system-replacements`

**Source-to-slug mapping note:** The prospect's services page listed "A/C Service Plans," "Gas Heating Service Plans," and "Oil Heating Service Plans" as three separate entries. These have been mapped as follows:
- A/C Service Plans → `central-air-conditioning` (repair/install) + `ac-maintenance` (tune-up plans)
- Gas Heating Service Plans → `gas-heating` (includes maintenance discipline)
- Oil Heating Service Plans → `oil-heating` (includes maintenance discipline)

---

## Services Consolidated

None. All services from the source site are represented. The three "Service Plans" pages on the prospect site were 404 at time of crawl — content was inferred from homepage copy, Google Business Profile description, and the HVAC content library. See Copy Generation Log.

---

## Pages Built & Content Decisions

### Homepage (`app/page.tsx`)
- Removed: `<Insights />`, `<Donation />`, `<Research />`, `<News />` (NCCER-specific components)
- Kept: `<Hero />`, `<HomeSectionWithLine />` (wraps Announcements + Difference), `<Testimonial />`
- Content: all from prospect site + generated gap fill (see Copy Generation Log)

### Hero (`components/custom/Hero.tsx`)
- Headline: "Nassau County & Queens HVAC — Honest Pricing, Fast Service"
- Subhead: Extracted from prospect site language ("honest pricing," "licensed, insured")
- CTA: "Call (516) 855-4328" → `tel:5168554328`
- Image slot: [TODO] — video fallback left in place; replace with real HVAC job video or photo

### Topnav (`components/custom/header/Topnav.tsx`)
- Phone: (516) 855-4328
- Hours shown: Mon–Fri 7am–5pm · Sat 7am–1pm (extracted from services page)
- Logo slot: [TODO] — replace `/logos/logo-94.svg` with Floral Park HVAC logo

### Footer (`components/custom/Footer.tsx`)
- Quick links updated for HVAC structure
- Contact widget: phone + address (7 Florence St, Floral Park, NY 11001) + hours
- Service areas widget: Nassau County, Western Suffolk, Northern Queens
- Social: Facebook only (https://www.facebook.com/floralparkhvac/)
- Logo slot: [TODO] — replace `/logos/logo-long.svg` with Floral Park HVAC logo

### Announcements (`components/custom/Announcements.tsx`)
- Headline: "Straight Answers, Upfront Pricing, Clean Work"
- 3-step process rewritten for HVAC: Diagnose → Approve & Schedule → Test & Confirm
- Copy generated from HVAC content library and prospect site differentiators
- Image slot: [TODO]

### Difference (`components/custom/Difference.tsx`)
- Stats: Same-Day scheduling | Licensed/Insured/Bonded | 100% Upfront Pricing
- Headline: "Honest HVAC Service You Can Actually Count On"
- Image slot: [TODO]

### Testimonial (`components/custom/Testimonial.tsx`)
- Quote extracted from HomeAdvisor review sourced via web search
- Attribution: "Verified Customer, Nassau County Homeowner"
- Note: Prospect site had no individual named testimonials with quotes. [TODO] Swap with real named Google or Yelp reviews when client provides them.

### About Us (`data/channel/floralparkhvac.tsx`)
- Slug: `floralparkhvac`
- Registered in `data/channel/index.ts`
- Content sections: tagline, license/credentials, upfront pricing, brands serviced, service area history
- All copy either extracted from site or generated as gap fill (see Copy Generation Log)

### Services Catalog (`data/craft-catalog/crafts.ts`)
- 9 services across 3 categories: Cooling, Heating, Equipment
- Categories: All Categories | Cooling | Heating | Equipment
- Disciplines: All Disciplines | Installation | Repair | Maintenance | Replacement

### Service Detail Cards (`data/programs.tsx`)
- All 9 services have full paragraph descriptions
- Mix of extracted and generated copy (see Copy Generation Log)

### FAQs (`app/general-faqs/page.tsx`)
- 8 HVAC-specific FAQs for Nassau County / Long Island audience
- Topics: response time, upfront pricing, repair vs. replace, brands, licensing, service areas, tune-up frequency, financing

### Contact (`app/contact-us/page.tsx`)
- 3 service area cards: Nassau County, Western Suffolk, Northern Queens
- Hours and address extracted from prospect site
- Google Maps embed: [TODO] — placeholder iframe needs real embed src
- Contact form: [TODO] — placeholder div needs form embed

### Gallery (`app/gallery/page.tsx`)
- 6 job card placeholders (AC install, boiler replacement, air handler, mini split, system swap, water heater)
- All images: [TODO] — placeholder backgrounds using dark fallback

### Service Areas (`app/service-areas/page.tsx`)
- 3 regional sections: Nassau County, Western Suffolk, Northern Queens
- Neighborhood lists extracted from services page + expanded with local knowledge

### Blog (`app/blog/page.tsx`)
- 6 placeholder article cards with HVAC/Long Island topics
- All flagged [TODO] — replace with real written content or CMS

---

## Navigation Changes

**From template default (7-item NCCER mega-dropdown nav):**  
**To:** 5-item flat nav — Home | Services | Service Areas | FAQs | Contact  

Added "Service Areas" as a 5th item because regional coverage is a key differentiator for this prospect (three distinct coverage areas). Flat structure per template map recommendation for trade clients.

---

## Copy Generation Log

All copy below was generated — it does not appear verbatim on the prospect's source site:

| Section | Generated | Basis |
|---------|-----------|-------|
| About Us `learnMore.content` | Full 4 sections | Prospect credentials, differentiators + HVAC library |
| Hero headline | Full | Prospect service area + differentiators |
| Hero subhead | Full | Prospect site language, condensed |
| Announcements 3-step process | Full | HVAC content library adapted to this client |
| Difference stats | Partial (labels) | Prospect differentiators |
| `data/programs.tsx` — all 9 service descriptions | Full | HVAC content library, adapted for Nassau County |
| FAQs — all 8 questions + answers | Full | HVAC content library, adapted for Nassau County |
| Service area section descriptions | Full | Prospect service area data + local knowledge |
| Blog post titles + excerpts | Full | HVAC content library topics, localized to Nassau County |
| Gallery job card labels | Full | Service types + local neighborhood names |

**Testimonial note:** The quote used in `Testimonial.tsx` is derived from a HomeAdvisor review fragment found via web search. It is attributed generally as "Verified Customer, Nassau County Homeowner." [TODO]: Replace with a real named review from Google/Yelp once client provides.

---

## TODOs for Client Before Launch

| # | Item | File | Notes |
|---|------|------|-------|
| 1 | Replace hero video/image | `components/custom/Hero.tsx` | Swap `<source src>` with actual HVAC job video or still photo |
| 2 | Replace Announcements section image | `components/custom/Announcements.tsx` | Set `backgroundImage` to a real team/job site photo URL |
| 3 | Replace Difference section image | `components/custom/Difference.tsx` | Set `<VapeImage src>` to a real photo URL |
| 4 | Replace logo (header mobile) | `components/custom/header/Topnav.tsx` | Swap `/logos/logo-94.svg` with client logo file |
| 5 | Replace logo (footer) | `components/custom/Footer.tsx` | Swap `/logos/logo-long.svg` with client logo file |
| 6 | Update About Us hero image | `data/channel/floralparkhvac.tsx → hero.imageBg` | Replace URL with actual background image |
| 7 | Update About Us feature image | `data/channel/floralparkhvac.tsx → flexFeature.imageSrc` | Replace URL with actual feature photo |
| 8 | All gallery before/after photos | `app/gallery/page.tsx` | Replace all 12 placeholder slots with real job photos |
| 9 | Google Maps embed | `app/contact-us/page.tsx` | Replace placeholder iframe src with real embed for 7 Florence St, Floral Park, NY 11001 |
| 10 | Contact form embed | `app/contact-us/page.tsx` | Replace placeholder div with JotForm, HubSpot, or preferred form tool |
| 11 | Replace testimonial quote | `components/custom/Testimonial.tsx` | Swap generic quote with real named Google/Yelp review |
| 12 | Confirm financing answer | `app/general-faqs/page.tsx` | Update FAQ #8 once financing options confirmed with client |
| 13 | Replace blog placeholder posts | `app/blog/page.tsx` | Write real content or connect CMS; all current posts are placeholder titles |
| 14 | Add Instagram URL | `components/custom/Footer.tsx` | If client has Instagram, add to `socials[]` array |
| 15 | Delete or update `pipeline-corrosion-control` page | `app/craft-catalog/pipeline-corrosion-control/` | NCCER template example page — delete before launch or replace with an HVAC service detail page |
| 16 | Update programs-crafts hero background | `data/programs.tsx → hero.bgImage` | Replace URL with actual hero photo |

---

## Pre-Delivery QA Checklist

- [x] Service Inventory: all 9 services have slugs in `crafts.ts`
- [x] Client registered in `data/channel/index.ts`
- [x] No old Pipe Monkeys phone (718-749-1830) in any client-authored file
- [x] No "Pipe Monkeys" brand name in components, app pages, or lib files
- [x] NCCER content removed from `app/page.tsx`
- [x] Nav simplified to 5 flat items, exported as `MainNavItem[]` with explicit type
- [x] All `tel:` hrefs use `5168554328`
- [x] Facebook link uses actual client URL (https://www.facebook.com/floralparkhvac/)
- [x] Footer contact info includes actual address and hours
- [ ] Hero video: placeholder (nccer.org video) — flagged TODO #1
- [ ] All image slots: dark fallback backgrounds in place — flagged TODOs #2-8
- [ ] Google Maps embed: placeholder — flagged TODO #9
- [ ] Contact form: placeholder — flagged TODO #10
- [ ] `pipeline-corrosion-control` NCCER example page: flagged TODO #15
