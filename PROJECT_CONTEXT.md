## 0. FILE LOCATION & SELF-UPDATING WORKFLOW

**File location:** Save this file as `PROJECT_CONTEXT.md` in your project
**root directory** (same level as `package.json`).

**⚠️ AGENT INSTRUCTION — READ THIS:**
At the end of EVERY task, after making code changes, update the relevant
section(s) of `PROJECT_CONTEXT.md` to reflect:

- What was built/changed (add to Section 9 "Current Phase / Next Step" /
  progress log)
- Any new colours, components, or conventions introduced (update Section 2
  or add new sections as needed)
- Any decisions made that affect future work (domain name, new pages added,
  etc.)

This file is the persistent memory for this project across sessions and
chats. Keep it accurate and up to date — do not skip this step.

---

## 1. PROJECT OVERVIEW

**What this is:** Website for an online Quran Academy run by a retired Pakistani
Army Imam (30+ years experience), teaching Quran online to students worldwide.
One-on-one live classes via Zoom — Hifz, Tajweed, Qaida, Tafseer, Translation.

**Goal of website:** Long-term organic student acquisition via local SEO,
alongside existing WhatsApp/Instagram outreach (handled separately).

**Status:** Pre-launch. Domain not yet purchased (planned: `quranonlinelessons.org`
or similar — decision pending final confirmation).

---

## 2. BRAND IDENTITY

**Brand name (display):** Learn Quran Online / Quran Online Lessons
(used interchangeably — see Section 5 for how this works across pages)

**Instagram:** @quran_online_lessons

**WhatsApp:** +92 302 177 1373

**Colour palette (EXACT — verified from approved ad design):**

| Name                     | Hex       | Usage                                                                          |
| ------------------------ | --------- | ------------------------------------------------------------------------------ |
| Dark Green               | `#012615` | Primary dark section backgrounds (hero, footer, CTA banners)                   |
| Cream                    | `#F6EED7` | Light section backgrounds ("What We Teach", "Our Features" style sections)     |
| Gold                     | `#D4AF37` | Borders, pill badges, accents, icons on dark bg, dividers                      |
| Gold Bright              | `#E8C468` | Hover states, highlights, small decorative accents                             |
| White                    | `#FFFFFF` | Headings/text on dark green sections                                           |
| Dark Green Text          | `#0A3D24` | Headings/icons on cream sections (slightly lighter than bg green for contrast) |
| Body Text (on cream)     | `#2A2F28` | Paragraph text on cream sections                                               |
| Off-White Body (on dark) | `#F0E6CD` | Paragraph/secondary text on dark green sections                                |
| Black                    | `#03080A` | Text on gold buttons                                                           |

> Gold/Gold Bright/Dark Green Text/Body Text values are Claude's best-match
> additions to complete the palette (not directly sampled from the ad) —
> chosen to stay consistent with the two verified core colours (`#012615`
> dark green and `#F6EED7` cream). If the developer samples additional exact
> values from the ad later, update this table.

**⚠️ CRITICAL — TWO-THEME SECTION SYSTEM**

This is NOT a single dark-themed website. The approved ad uses an
**alternating light/dark section pattern**:

- **Dark sections** (`#012615` bg, white/gold text) — used for: hero,
  top-of-page intro, final CTA banner, footer
- **Cream sections** (`#F6EED7` bg, dark green/body text) — used for:
  feature grids, content blocks, "What We Teach" style sections, testimonials

Every page should alternate between these two section types for visual
rhythm — exactly like the ad does (dark hero → cream "What We Teach" →
cream "Our Features" → dark bottom banner). Define both as reusable
section wrapper components (e.g., `<DarkSection>` and `<LightSection>`)
early in the build so every page uses them consistently.

**⚠️ CRITICAL — Colours MUST match the approved ad creatives exactly.**
The website is NOT a separate brand exploration — it must look like the
same brand as the WhatsApp/Instagram ads the audience is already seeing.
If a component's colour doesn't map to one of the values above, don't
introduce a new colour — pick the closest match from this palette instead.
Consistency across ads → social media → website is what builds trust and
brand recognition.

**Visual style:** Premium, elegant, Islamic-inspired (geometric patterns,
crescent moon, mosque silhouettes, lantern imagery). NOT cartoonish, NOT
AI-photo-heavy. Real photography preferred (e.g., real Quran on rehal stand).

**Typography style:**

- Headings: Serif/display font (Playfair Display style) — elegant, large
- Body/UI: Sans-serif (Poppins style) — clean, modern

**NO EMOJIS** in final marketing copy — use icon-style symbols (✦ ◆) or
proper icon components instead.

---

## 3. TECH STACK

- **Framework:** Next.js (App Router), TypeScript
- **Styling:** Tailwind CSS (assume default unless told otherwise)
- **Database:** NONE — static/content site, no DB needed
- **Hosting:** Vercel (planned)
- **Analytics:** Google Analytics 4 installed via @next/third-parties, Measurement ID: G-YW2WQ0KRLF, live on Vercel, tracking all pages via root layout
- **Images:** Placeholder strategy — developer (site owner) sources real
  images separately and provides URLs/paths. Claude specifies WHAT image is
  needed + ALT TEXT for SEO; developer fills in actual asset.

### MOBILE-FIRST — NON-NEGOTIABLE

**Every section, every page, MUST be built mobile-first and fully
responsive.** The majority of target users (diaspora parents searching on
their phones) will land on this site via mobile search results.

Requirements for every component/section:

- Design and test for mobile viewport FIRST (375px-420px width), then scale
  up to tablet/desktop
- No fixed pixel widths that break on small screens — use Tailwind responsive
  utilities (`sm:`, `md:`, `lg:`) throughout
- Touch-friendly tap targets (buttons/links min 44px height) — especially
  WhatsApp CTA buttons
- Text must remain readable without zooming (min 16px body text on mobile)
- Hero sections, feature grids, and cards must stack vertically on mobile,
  not overflow or get cut off
- Test every section at mobile width before considering it "done"

---

## 4. TARGET MARKET & SEO STRATEGY

**Primary target countries:** UK and Australia
(Reasoning: large Muslim/Pakistani diaspora populations, favorable timezone
overlap with Pakistan for the teacher, lower competition than USA in
Australia's case)

**Secondary/organic markets:** USA, Canada (will receive students via
WhatsApp/Instagram outreach regardless, but NOT primary SEO content focus
initially due to timezone difficulty — 9-13hrs behind Pakistan)

**Primary cities for landing pages (Phase order):**

1. Birmingham, UK
2. Bradford, UK
3. Manchester, UK (later)
4. London, UK (later — high competition, lower priority)
5. Sydney, Australia
6. Melbourne, Australia

**SEO Site Structure (planned):**

```
/                                    → Homepage (broad "Online Quran Academy")
/online-quran-classes-uk             → UK hub page
/online-quran-classes-birmingham     → City landing page
/online-quran-classes-bradford       → City landing page
/online-quran-classes-manchester     → City landing page (later)
/online-quran-classes-australia      → Australia hub page
/online-quran-classes-sydney         → City landing page
/online-quran-classes-melbourne      → City landing page
/female-quran-teacher                → Dedicated topic page (high search demand)
/kids-quran-classes                  → Dedicated topic page
/courses/hifz
/courses/tajweed
/courses/qaida
/courses/tafseer
/courses/kalima-tawheed
/courses/masnoon-duas
/blog/[slug]                         → Content marketing (Phase 2+)
/free-trial                          → Conversion/contact page
/about
/contact
```

**City page content requirements (each page must include):**

- City name in H1, page title, meta description
- Genuinely local context (areas with Pakistani/Muslim community in that
  city — e.g., Sparkbrook/Small Heath for Birmingham, Lakemba/Auburn for
  Sydney)
- LocalBusiness + EducationalOrganization JSON-LD schema with city details
- FAQ section with city-specific phrasing
- Internal links to other city pages, courses, free-trial page
- 800-1200 words minimum, NOT thin/duplicate content

---

## 5. CONTENT & MESSAGING GUIDELINES

**Core selling points (use across site, in this priority order):**

1. Female Teachers Available — Sisters & Girls Welcome
2. Flexible Timings — Morning, Evening & Weekends
3. All Ages Welcome — Kids, Adults & Elders
4. One-on-One Live Classes via Zoom — Personalized Attention
5. Hifz · Tajweed · Qaida · Tafseer · Translation
6. First Class FREE — Book a Trial

**DO NOT mention:**

- "30 years experience" as a standalone selling point in ads (was explicitly
  rejected by client) — though background context about the teacher's
  experience CAN appear in About page / trust-building content
- Specific countries (UK/USA/Canada list) in ad creatives — but CAN/SHOULD
  appear in website SEO content (this is the opposite of ads — website city
  pages NEED location mentions)

**Brand name vs. page titles — important nuance:**

- Brand identity ("Quran Online Lessons" / "Learn Quran Online") appears in:
  logo, header, footer, site title suffix
- Individual page H1s/titles use SEARCH-FRIENDLY phrasing matching what
  parents actually Google (e.g., "Online Quran Classes in Birmingham" even
  though brand name is "Quran Online Lessons")
- This is intentional and correct — NOT inconsistency

**Tone:** Warm, trustworthy, value-first. No aggressive sales language.
Avoid "trial class" as 4th-point framing in ads — frame around VALUE
(personal attention, live via Zoom, etc.) not pressure to convert.

---

## 6. GOOGLE BUSINESS PROFILE (separate from website — do alongside)

- Category: Education
- Type: Service Area Business (no physical location)
- Service areas: UK, Australia (primary) — can also list USA/Canada
- Get reviews from early students ASAP — high priority once first
  students are enrolled

---

## 7. EXISTING ASSETS (already completed)

- WhatsApp Business account: set up, name "Learn Quran Online" / similar,
  category Education, appointments-only hours, logo added
- Instagram: @quran_online_lessons (existing, being improved)
- Ad creatives: Multiple versions created — current FINAL/APPROVED version
  is the reference design for the website's visual direction (see below)

### THE APPROVED AD DESIGN — VISUAL REFERENCE FOR WEBSITE

The latest approved ad (lantern/crescent version) is the **visual north
star** for the website's hero section and overall feel. Key elements to
translate into the website design:

- **Decorative arch shape** at top framing the headline (scalloped/mosque-
  arch silhouette in dark green with gold border) — could become the
  hero section's shape/frame on desktop
- **Hanging lantern illustrations** (gold/ornate, lit) on either side —
  reusable as decorative accents in hero or section dividers
- **Crescent moon + small star** accent near main heading
- **"LEARN QURAN ONLINE"** — three-line stacked headline, white/gold/white
  colour pattern, large serif display font
- **Real photo of open Quran on wooden rehal stand** — used as a key visual,
  NOT stock/AI imagery — website should use a similarly authentic photo
- **Pill-shaped badges** with gold border for short taglines (e.g.,
  "ONE-ON-ONE LIVE CLASSES") — reusable as a UI component (Badge/Pill)
- **"WHAT WE TEACH" icon grid** — 6 items, each with a simple icon
  (book, prayer figure, hands, Arabic letter) + title + short description —
  this maps directly to the `/courses` overview section on homepage
- **"OUR FEATURES"** section — icon + bold title + description, 2-column
  list — maps to the homepage features/benefits section
- **Pull-quote/Hadith box** — distinct bordered box with italic quote and
  source citation — reusable as a `Quote`/`Testimonial` component, could
  also house student testimonials later
- **Contact block** — WhatsApp (green icon) + Instagram (gradient icon)
  side by side with clear CTAs ("SAVE & MESSAGE NOW" / "FOLLOW US") —
  this exact pattern should appear in the website footer and on the
  free-trial/contact page
- **Bottom banner strip** — dark green full-width bar with tagline
  ("START YOUR JOURNEY WITH QURAN TODAY") — good pattern for a final
  CTA section before the footer on every page

**Overall palette/spacing feel:** generous padding, rounded pill shapes for
badges/buttons, gold borders/dividers separating sections, cream/off-white
backgrounds for content-dense sections (like "WHAT WE TEACH") contrasted
against dark green hero/CTA sections. This light/dark section alternation
is a good pattern to carry through the website for visual rhythm.

---

## 8. WORKING PROCESS WITH CLAUDE

- Claude acts as SEO + content co-pilot, NOT the one writing final code
- Work proceeds page-by-page / section-by-section
- For each section, Claude provides: structure, SEO metadata (title, meta
  description, OG tags), JSON-LD schema where relevant, content copy
  (headings + body text), image specifications (description + alt text
  for SEO — developer sources actual image)
- Developer (site owner) implements in Next.js/TypeScript via their own
  code agent
- Analytics (GA4) and blog are Phase 2+ — not blocking initial build

---

## 9. CURRENT PHASE / NEXT STEP

**Current status:** Homepage v2 + 6 Course Pages COMPLETE.

Homepage structure (confirmed, 5 sections, alternating light/dark):
Hero (dark, two-column with image placeholder) → What We Teach (cream,
6-item clickable grid) → Our Features (dark, 6 features + QuoteBox) →
CTA Banner (cream) → Footer (dark).

NOTE: A "USP Trust Bar" was added below the Hero in an earlier step,
then REMOVED (commented out manually by developer due to agent errors
during a later edit attempt) — it was redundant with "Our Features"
anyway. Homepage is back to the clean 5-section structure above. If the
commented-out USP bar code is still sitting in app/page.tsx, it can be
deleted entirely next time that file is touched — not urgent, just
confirming the current intended state.

All 6 course pages built and working: /courses/hifz, /courses/tajweed,
/courses/qaida, /courses/tafseer, /courses/kalima-tawheed,
/courses/masnoon-duas — each with full SEO metadata, JSON-LD, working
breadcrumbs (Home + Courses links functional), and all clickable from
homepage "What We Teach" grid.

**Outstanding from earlier discussion (not yet done, revisit before/with
Phase 2):**
- No site-wide header/navigation bar exists yet — course pages currently
  only have a breadcrumb, no way to navigate to other sections except
  "Home". Consider adding a simple sticky header (logo + nav links) before
  building many more pages.
- 7 image placeholders still pending real images (see Section 11) —
  developer to source and provide.

**Next step:** Phase 2 — Birmingham city landing page
(/online-quran-classes-birmingham) — NOT YET STARTED. Developer wants to
review current build and discuss plan before proceeding.

**Live site:** https://quranonlinelessons-seven.vercel.app

---

## 10. PROGRESS LOG

> Agent: append a new dated entry here after each session, briefly
> describing what was completed.

- **Phase 1a completed** — Tailwind v4 theme configured with all 9 brand colours (dark-green #012615, cream #F6EED7, gold #D4AF37, gold-bright #E8C468, white, dark-green-text #0A3D24, body-cream #2A2F28, off-white-body #F0E6CD, black #03080A) as `colors.brand.*` utilities. Fonts: Playfair Display (headings), Poppins (body). Created `/app/components/DarkSection.tsx` and `/app/components/LightSection.tsx` wrapper components with mobile-first responsive padding. Root layout updated with fonts as CSS variables. Placeholder homepage deployed to visually confirm theme.

- **Phase 1b completed** — SEO metadata updated in app/layout.tsx with full title ("Online Quran Classes | Learn Quran Online with Live 1-on-1 Tutors"), description, Open Graph tags (og:title, og:description, og:type). Added LocalBusiness + EducationalOrganization JSON-LD schema with name "Quran Online Lessons", areaServed [UK, Australia], sameAs Instagram link. Hero section built in DarkSection: gold pill badge "ONE-ON-ONE LIVE CLASSES", H1 "Learn Quran Online" (responsive text-4xl to text-7xl), subheadline paragraph, two CTA buttons (gold primary "Book Free Trial on WhatsApp" linking to wa.me/923021771373, outlined secondary "Follow on Instagram" linking to @quran_online_lessons). Buttons stack vertically on mobile, side-by-side on sm+, min 44px height for touch targets.

- **Phase 1c completed** — Built "What We Teach" section in LightSection with 6-item responsive grid (1 col mobile, 2 cols sm, 3 cols lg). Each card has lucide-react icon, display font title, body-cream description, gold border with 30% opacity, rounded corners. Installed lucide-react package.

- **Phase 1d completed** — Built "Our Features" section in DarkSection with 6 features in responsive 2-column grid (1 col mobile, 2 cols md). Desktop layout: features grid takes 2/3 width, QuoteBox takes 1/3 width side-by-side (lg breakpoint), mobile stacks vertically. Created reusable `/app/components/QuoteBox.tsx` component. Current quote: "The best of you are those who learn the Qur'an and teach it." — Sahih Bukhari.

- **Phase 1e completed** — Final CTA banner section built, contact cards (WhatsApp + Instagram), Footer added as separate <footer> element. Homepage v1 COMPLETE. Fixed build error — replaced unavailable lucide-react 'Instagram' icon with 'AtSign' icon. Converted CTA banner to LightSection (cream) for proper light/dark alternation — homepage now has clean 5-section alternating rhythm: dark/light/dark/light/dark.

- **Phase 1f completed** — Created reusable ImagePlaceholder component. Restructured Homepage Hero to be a responsive two-column layout on desktop containing text content and a square ImagePlaceholder. Created `app/courses/data.ts` exporting structured data for 4 courses (Hifz, Tajweed, Qaida, Tafseer). Built dynamic course page routes under `/courses/[slug]` using dynamic parameters, metadata generator for SEO, JSON-LD schemas, and the alternating sections layout with a responsive footer. Hooked up Homepage "What We Teach" grid to link "Quran Recitation", "Alif Ba Ta (Qaida)", and "Quran Translation" directlyly to their course pages with interactive hover styles.

- **Navigation & USP Bar Fixes** — Updated course pages to make "Home" and "Courses" breadcrumbs fully interactive links, with "Courses" anchoring to the homepage teachings section. Swapped "Namaz (Salah)" in the homepage grid with "Hifz" linking directly to the Hifz course page. Split grid rendering so hover transitions only apply to clickable course cards. Added a USP Trust Bar below the Hero (Female Teachers, Flexible Timings, All Ages, First Class Free) — later identified as redundant.

- **USP Redesign & Final Courses** — Redesigned the USP trust bar as a premium dark-green-text (#0A3D24) slim horizontal strip with gold vertical dividers. Added 2 final course pages: "Kalima & Tawheed" (`/courses/kalima-tawheed`) and "Masnoon Du'ain" (`/courses/masnoon-duas`). Made all 6 cards in the "What We Teach" homepage grid clickable to their respective courses.

- **USP Bar removed** — Developer manually commented out the USP Trust Bar section in app/page.tsx (agent was hitting errors attempting a clean removal). Confirmed redundant with "Our Features" section. Homepage confirmed back to clean 5-section structure: Hero → What We Teach → Our Features → CTA Banner → Footer. Total course pages: 6 (hifz, tajweed, qaida, tafseer, kalima-tawheed, masnoon-duas), all linked from homepage grid.

- **Google Analytics 4 added** — Google Analytics 4 added (G-YW2WQ0KRLF) via @next/third-parties/google in root layout, pushed to GitHub, auto-deployed on Vercel

---

## 11. IMAGE PLACEHOLDERS — TRACKING LIST

| Page/Section | Placeholder Label | Status |
| :--- | :--- | :--- |
| Homepage Hero | Open Quran on wooden rehal stand, dark green background, warm lighting | Pending |
| Hifz Course Hero | Student reciting Quran from memory with teacher listening on video call | Pending |
| Tajweed Course Hero | Close-up of Quran page with Tajweed colour-coded markings | Pending |
| Qaida Course Hero | Young child learning Arabic alphabet with teacher online, Qaida book visible | Pending |
| Tafseer Course Hero | Teacher and student discussing Quran meaning over video call, open book and notes visible | Pending |
| Kalima & Tawheed Course Hero | Child reciting Kalima with teacher on video call, simple calligraphy in background | Pending |
| Masnoon Du'ain Course Hero | Open dua book with translation, soft warm lighting | Pending |

---

_Last updated: ongoing project — update this file as decisions change._