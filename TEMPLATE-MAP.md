# Template Map: NCCER Clone (v1)
**Framework**: Next.js 14 App Router  
**Styling**: Tailwind CSS v4 + custom CSS (styles/)  
**Package Manager**: pnpm  
**Architecture**: Hybrid — primary client content lives in `/data/` files (data-driven); homepage sections and FAQ/contact pages are hardcoded inline in components  
**Last Mapped**: May 2026  
**First Client Built**: Pipe Monkeys (drain & sewer, Brooklyn/Queens/Nassau)

---

## Quick Reference

This template separates client content into `/data/` files typed as TypeScript objects. The most data-driven page is `/explore/[slug]` (About Us), which pulls entirely from `data/channel/[slug].tsx`. The services catalog and service detail pages are also fully data-driven. However, the homepage sections (Hero, Announcements, Difference, Testimonial) and the FAQs/Contact pages contain hardcoded inline content that requires direct component edits.

**The key insight for repositioning:** Edit data files first (lowest risk, highest leverage), then work through the hardcoded component list. Register every new client in `data/channel/index.ts` or the About Us page will 404.

**Known TypeScript gotcha:** When simplifying `mainNavItems.ts` to flat links (no dropdowns), you must export the array as `MainNavItem[]` with an explicit type definition in the same file. Without this, `MobileNav.tsx` throws a TS build error. See the TS Notes section below.

---

## Pages & Routes

| Route | Purpose | Data File | Inline Content? |
|-------|---------|-----------|----------------|
| `/` | Homepage | None — composed of components | Yes — Hero, Announcements, Difference, Testimonial sections all hardcoded |
| `/explore/[slug]` | About Us | `data/channel/[slug].tsx` | No — fully data-driven |
| `/craft-catalog` | Services catalog with filter | `data/craft-catalog/crafts.ts` | Minimal |
| `/craft-catalog/[slug]` | Individual service detail | `data/pipeline-corrosion-control.ts` (example) | No — data-driven, but only one example page exists |
| `/programs-crafts/programs` | Service detail list (cards) | `data/programs.tsx` | No — fully data-driven |
| `/general-faqs` | FAQs accordion | None | Yes — all FAQ items are inline arrays in the page file |
| `/contact-us` | Contact + service areas | None | Yes — service area cards are inline in the page file |
| `/gallery` | Before/After gallery | None | Yes — gallery items array inline in page file |
| `/service-areas` | Regional landing pages | None | Yes — area data inline in page file |
| `/blog` | Blog post index | None | Yes — post array inline in page file |

**Dynamic route note:** `/explore/[slug]` — the slug must match a key registered in `data/channel/index.ts`. Missing registration = 404.

**New pages added for trade clients (not in original template):**
- `/gallery` — Before/After grid
- `/service-areas` — Regional landing sections  
- `/blog` — Content marketing index

---

## Data Files — Content Slots

### `data/channel/[client-slug].tsx`
_Primary about-us and homepage channel data. One file per client._  
_Type: `ChannelPageData` (defined in `components/custom/channel/types.ts`)_

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `slug` | string | ✅ | URL key — must match registration in index.ts |
| `navItems[]` | `{href, label}[]` | ✅ | In-page anchor nav links for the About Us page |
| `hero.title` | string | ✅ | Page H1 |
| `hero.breadcrumbLabel` | string | ✅ | Breadcrumb text |
| `hero.imageBg` | string | ✅ | Full CSS background string e.g. `url(...) no-repeat center/cover` |
| `hero.description` | ReactNode | ✅ | 1–2 sentence intro `<p>` |
| `learnMore.title` | string | ✅ | About section headline |
| `learnMore.content` | ReactNode | ✅ | 3–5 paragraphs; can include `<h5>` subheads |
| `resources.title` | string | ✅ | Quick links section heading |
| `resources.resources[]` | array | ✅ | Each: `{title, href, icon}` — icon is icomoon class string |
| `crafts.description` | ReactNode | ✅ | Intro above the service links |
| `crafts.craftLinks[]` | array | ✅ | Each: `{label, href}` — links to service pages |
| `testimonials.videos[]` | array | ⬜ | Video testimonial objects — use `[]` if none |
| `testimonials.quote` | object | ✅ | `{text, name, position}` |
| `flexFeature.imageSrc` | string | ✅ | Feature section photo URL |
| `flexFeature.title` | string | ✅ | Feature section headline |
| `flexFeature.body` | ReactNode | ✅ | 1–2 sentence body `<p>` |
| `flexFeature.buttonLabel` | string | ✅ | CTA button text |
| `flexFeature.buttonHref` | string | ✅ | CTA link (usually `tel:` or `/contact-us`) |
| `getInTouch.body` | ReactNode | ✅ | Contact CTA paragraph |
| `getInTouch.buttonLabel` | string | ✅ | Button text |
| `getInTouch.buttonHref` | string | ✅ | Button link |

**Register in**: `data/channel/index.ts` — add import and add key to `channelDataMap`

---

### `data/craft-catalog/crafts.ts`
_Drives the services catalog page and its filter bar._

| Field | Type | Notes |
|-------|------|-------|
| `crafts[]` | `CraftItem[]` | Each: `slug, title, categories[], disciplines[], hasAssessment, hasTranslation` |
| `CATEGORIES` | const array | Filter tab labels — first item should be "All Categories" |
| `DISCIPLINES` | const array | Secondary filter labels — first item should be "All Disciplines" |

**Trade client example categories**: `["All Categories", "Drain Cleaning", "Advanced Services", "Commercial"]`

---

### `data/programs.tsx`
_Drives the service detail list page at `/programs-crafts/programs`._  
_Type: `ProgramsPageData`_

| Field | Type | Notes |
|-------|------|-------|
| `navItems[]` | `{href, label}[]` | In-page anchor nav |
| `hero.title` | string | Page H1 |
| `hero.bgImage` | string | Hero background URL |
| `hero.description` | ReactNode | Intro paragraph |
| `hero.breadcrumbParentLabel` | string | Breadcrumb parent text |
| `hero.breadcrumbParentHref` | string | Breadcrumb parent link |
| `overview.content` | ReactNode | Copy above the service cards |
| `overview.quickLinks[]` | array | Each: `{label, href, icon}` |
| `programs[]` | `ProgramItem[]` | Each: `{title, content ReactNode, learnMoreHref}` |
| `partners[]` | `PartnerItem[]` | Logo grid — use `[]` if no partners |

---

### `lib/constants/mainNavItems.ts`
_Controls the main desktop nav and mobile nav._

Default for trade clients — flat 4-item nav (no dropdowns):
```ts
export type MainNavItem = {
  label: string;
  href?: string | null;
  external?: boolean;
  dropdown?: NavDropdown | null; // NavDropdown type defined in same file
};

export const mainNavItems: MainNavItem[] = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/craft-catalog" },
  { label: "FAQs",     href: "/general-faqs" },
  { label: "Contact",  href: "/contact-us" },
];
```

**⚠️ TypeScript Note:** Do NOT use `dropdown: null` in items — TypeScript narrows the type to `never`, breaking `MobileNav.tsx`. Instead, omit the `dropdown` property entirely and export as `MainNavItem[]` with an explicit type that includes `dropdown?: NavDropdown | null`. See full type definition above.

---

### `lib/constants/AccordionItems.tsx`
_Feeds the `Insights` component (tabbed accordion on homepage)._  
Remove the `<Insights />` import from `app/page.tsx` for trade clients — this section is not applicable.

---

## Hardcoded Components (Require Direct Editing)

| Component | What to Change | Effort |
|-----------|---------------|--------|
| `components/custom/Hero.tsx` | Headline, subhead, CTA label + href, background image/video | Medium |
| `components/custom/header/Topnav.tsx` | Left utility bar — replace NCCER links with phone number | Low |
| `components/custom/Footer.tsx` | Quick links array, contact widget, service areas widget, socials, copyright | Low |
| `components/custom/Announcements.tsx` | Section headline, body copy (3 steps), image URL, CTA button | Medium |
| `components/custom/Difference.tsx` | Stats array (3 items), section headline, photo URL | Medium |
| `components/custom/Testimonial.tsx` | Quote array or video array | Medium |
| `app/page.tsx` | Which sections to include — remove Insights, Donation, Research, News for trade clients | Low |
| `app/general-faqs/page.tsx` | `faqItems[]` array — all 6–8 FAQs are inline | Medium |
| `app/contact-us/page.tsx` | `serviceAreas[]` array — area cards are inline | Medium |
| `app/gallery/page.tsx` | `galleryItems[]` array — all job cards inline | Medium |
| `app/service-areas/page.tsx` | `areas[]` array — all regional sections inline | Medium |
| `app/blog/page.tsx` | `posts[]` array — all post entries inline | Low |

---

## Navigation

- **Main nav file**: `lib/constants/mainNavItems.ts`
- **Template default**: 7-item mega-dropdown NCCER nav — **always replace for trade clients**
- **Recommended for trade clients**: 4–5 flat items, no dropdowns
- **Standard trade nav**: `Home | Services | FAQs | Contact` (add `Service Areas` if regional coverage is a key selling point)
- **Mobile nav file**: `components/custom/header/MobileNav.tsx` — reads from same `mainNavItems`
- **Desktop nav file**: `components/custom/header/Navbar.tsx` — also reads from `mainNavItems`
- **TS requirement**: Must export `mainNavItems` as `MainNavItem[]` — see TS note above

---

## Image Slots

| Slot | File | Notes |
|------|------|-------|
| Hero background video/image | `components/custom/Hero.tsx` | Video preferred; falls back to image |
| About Us hero | `data/channel/[client].tsx → hero.imageBg` | Full CSS background string |
| Feature section photo | `components/custom/Announcements.tsx` | Left-column image |
| Stats/trust section photo | `components/custom/Difference.tsx` | Right-column photo |
| Emergency CTA image | `data/channel/[client].tsx → flexFeature.imageSrc` | Full URL |
| Logo (mobile header) | `components/custom/header/MobileNav.tsx` + `Topnav.tsx` | `/logos/logo-94.svg` |
| Logo (footer) | `components/custom/Footer.tsx` | `/logos/logo-long.svg` |
| Gallery job photos | `app/gallery/page.tsx → galleryItems[].before/.after` | Before/After pairs per job |

**Placeholder strategy:** When client hasn't provided images, use `[TODO: Replace with X photo]` comment and set `backgroundColor: '#101d2b'` as a dark fallback.

---

## Sections to REMOVE for Trade Clients

These homepage sections are NCCER-specific and should be excluded (`app/page.tsx`):

| Component | Why Remove |
|-----------|------------|
| `<Insights />` | Tabbed org accordion — NCCER-specific |
| `<Donation />` | Nonprofit donation widget — not applicable |
| `<Research />` | Research publications — not applicable |
| `<News />` | NCCER newsroom — not applicable |

**Resulting homepage for trade clients**: `<Hero /> → <HomeSectionWithLine /> → <Testimonial />`  
(`HomeSectionWithLine` wraps `Announcements` + `Difference` with a decorative line element)

---

## Conceptual Remapping (NCCER → Trade Business)

| NCCER Concept | Trade Business Equivalent |
|--------------|--------------------------|
| Crafts & Programs | Services offered |
| Explore / Organizations | About Us |
| Credentials / Certifications | Licenses & certifications |
| Find a Center | Service area / coverage |
| Donate | Contact / Book service |
| Career Pathways | (Remove — not applicable) |
| Research | (Remove — not applicable) |
| Newsroom | Blog (optional) |
| NCCER Number | (Remove entirely) |

---

## TypeScript Notes (Known Build Issues)

1. **`mainNavItems` type** — must use explicit `MainNavItem[]` annotation with `dropdown?: NavDropdown | null`. Using `dropdown: null` causes `MobileNav.tsx:118` to throw `Property 'titleHref' does not exist on type 'never'`. Omitting dropdown entirely causes `MobileNav.tsx:60` to throw `Property 'dropdown' does not exist`. Solution: explicit type with optional dropdown.

2. **`NavDropdown.description`** — must be `description: string` (required), not `description?: string` (optional). `NavItem.tsx` expects it required, so making it optional causes an assignability error at `Navbar.tsx:32`.

---

## Repositioning Checklist

Use this for every new client build on the NCCER Clone template:

**Data files — start here:**
- [ ] Create `data/channel/[client-slug].tsx` using `ChannelPageData` type
- [ ] Register client in `data/channel/index.ts`
- [ ] Edit `data/craft-catalog/crafts.ts` — replace service list + CATEGORIES + DISCIPLINES
- [ ] Edit `data/programs.tsx` — replace service detail cards + hero + overview

**Constants:**
- [ ] Edit `lib/constants/mainNavItems.ts` — flat 4–5 item nav, export as `MainNavItem[]`

**Hardcoded components:**
- [ ] Edit `components/custom/Hero.tsx` — headline, subhead, CTA
- [ ] Edit `components/custom/header/Topnav.tsx` — phone number bar
- [ ] Edit `components/custom/Footer.tsx` — links, contact info, socials
- [ ] Edit `components/custom/Announcements.tsx` — How It Works / feature section
- [ ] Edit `components/custom/Difference.tsx` — trust stats
- [ ] Edit `components/custom/Testimonial.tsx` — client testimonials
- [ ] Edit `app/page.tsx` — remove Insights, Donation, Research, News

**Inline pages:**
- [ ] Edit `app/general-faqs/page.tsx` — 6–8 trade-specific FAQs
- [ ] Edit `app/contact-us/page.tsx` — service area cards + form

**New pages (confirm with client/workflow before adding):**
- [ ] Create `app/gallery/page.tsx` — before/after grid
- [ ] Create `app/service-areas/page.tsx` — regional landing sections
- [ ] Create `app/blog/page.tsx` — content index

**Before shipping:**
- [ ] All phone numbers match prospect's actual number
- [ ] No NCCER content anywhere in the build
- [ ] All image slots have real images or `[TODO]` comments
- [ ] TypeScript builds without errors (check TS Notes section above)
- [ ] `CONTENT-BRIEF.md` is complete
