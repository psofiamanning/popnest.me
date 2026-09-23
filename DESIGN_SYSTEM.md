# Popnest Design System

Working notes captured from the Figma file, batch by batch. Nothing here is applied to code
until a batch is confirmed complete.

## Colors (batch 1 — raw palette from Figma "Selection colors")

| Token (proposed)       | Hex       | Opacity | Notes                                            |
| ----------------------- | --------- | ------- | ------------------------------------------------- |
| `white`                 | `#FFFFFF` | 100%    | **All white text (for now)** — headline, subheading, promo bar, nav, etc. |
| `white-warm`            | `#FFFBFB` | 100%    | **"GO" button text color** — the word GO specifically |
| `indigo`                | `#566DAB` | 50%     | **Solid fill, reused across boxes**: "Where" and "When" search boxes (**1px white border**); promo-bar country-code box (flag + "+1"), which also has a **1px white stroke**. The whole promo-bar phone control has **corner radius 12** and a **white border** |
| `indigo-solid`          | `#566DAB` | 100%    | **"Here is why people use Popnest" section background** |
| `gray-muted`            | `#A49F9F` | 100%    | **Footer link text** — "Our neighborhoods", "Our partnerships", "About", etc. |
| `pink-light`            | `#F985C4` | 30%     | **Testimonial quote bubble fill** — solid at 30%    |
| `pink-light-70`         | `#F985C4` | 70%     | **GO button fill** — solid at 70%, plus effects: background blur (uniform, 4) and a drop shadow (details TBD) |
| `neutral-dark`          | `#444444` | 60%     | **Photo overlay** — solid fill at 60%, used on both the hero image and the testimonial (people) photos |
| `gradient-1`            | `linear-gradient(90deg, #F985C4 0%, #7A9AC9 100%)` | 100% | Pink → blue, 2 stops. **Angle assumed left-to-right (90deg) — not confirmed**, matches current promo-bar/perk-banner gradients. Role: likely promo bar / perk banner background. |
| `gradient-2`            | `linear-gradient(90deg, #F985C4 21.15%, #566DAB 50.96%)` | 100% | Pink → blue, stops at 21.15% / 50.96% (solid blue after). **Screen 2 page background** |
| `pink-primary`          | `#F82B9A` | 100%    | **Hero "GO" button fill** (next to "When") — distinct from the promo-bar GO button, which stays `#F985C4 @ 70%` + blur/shadow |

### Open questions
- The two `Linear` swatches are gradients — Figma's selection-colors panel doesn't show stops/angle. When convenient, share the gradient fill details (open the fill in the Figma inspector) so we can capture exact stops instead of guessing.
- Need to know intended **roles** for each color once typography/sections/hierarchy batches come in (e.g. is `#F82B9A` the button color, link color, accent only?).

## Typography

| Element                                  | Font    | Weight | Size  | Notes                                      |
| ----------------------------------------- | ------- | ------ | ----- | ------------------------------------------- |
| Promo bar text ("Unlock exclusive dining…") | Manrope | Mixed  | 14px  | "Mixed" = bold lead sentence + regular rest within the same paragraph (as currently built) |
| Hero headline ("On Demand Coworking Spaces in Mexico City") | Manrope | Extrabold | 80px | |
| Hero subheading ("FOCUS ON YOUR MEETINGS…") | Manrope | Semibold | 18px | |

## Effects

| Name                  | Type              | Value              | Used on          |
| ---------------------- | ----------------- | ------------------ | ----------------- |
| `blur-uniform-4`       | Background blur   | Uniform, 4          | GO button          |
| `shadow-go-button`     | Drop shadow       | Details TBD (x/y/blur/color not yet given) | GO button |

## Sections & hierarchy
_Pending — next batch._

## Screen 2 — Workspace map (`/workspace-map`) — structure observed from PNG, no tokens yet
- Header (repeats/sticky): white logo, filter boxes **Where** (Mexico City), **When** (Today), **Filter** (Day Pass), "Sign Up / Sign In" right. Page background is a pink → blue gradient.
- Left column: strip of 4 CDMX landmark photos → "Unlock the special offer" card → list of space cards.
- Space card: photo left; name, rating ("92% | 6.1 kms - Coyoacán"), "N minutes away from …"; price right ("$300 per day, Includes fees").
- Right column: Google map of Ciudad de México with pink pins.
- Spaces shown: Estudio Popnest Coyoacán, Coworking Condesa, Loom House Roma Norte, Jungle Desk Polanco, Casa Áurea Juárez, Terra Loft Condesa, Nomad Hub Santa Fe, Atelier Cibeles, Distrito Zen San Ángel, Skyline Workspaces Reforma.
- Map: **interactive Leaflet map, dark navy style** (OpenStreetMap tiles inverted + tinted via CSS filter, `.brand-map .leaflet-tile-pane` in `src/index.css`) so it doesn't look like Google Maps. Pins are pink `#F82B9A` dots with white border; from zoom 13 they turn into price pills ("$300"); hover shows name · price.

### Tokens for Screen 2 (source: Figma CSS export "Tokens Pagina 2", frame 1512 wide)
Legend: ✅ defined · ⚠️ inferred/assumed · ❌ still missing.

**Colors & fills**
| # | Token | Value | Status |
|---|-------|-------|--------|
| C1 | Page background (`gradient-2`) | `linear-gradient(90deg, #F985C4 21.15%, #566DAB 50.96%)`, starts under the browser chrome (Figma y=81) | ✅ |
| C2 | Filter boxes (Where / When) | fill `rgba(86,109,171,0.5)`, 1px `#FFFFFF` border, radius 12, shadow `0 4px 4px rgba(0,0,0,.25)`, backdrop blur 2px, 325×46 | ✅ (third box "Filter" ⚠️ assumed identical) |
| C3 | Offer card ("Unlock the special offer") | fill `rgba(86,109,171,0.9)` (`#566DAB @ 90%`), radius 15, shadow `0 4px 4px rgba(0,0,0,.25)` applied twice, 870×186 | ✅ |
| C4 | Space card | fill `#3C4C63 @ 60%` = `rgba(60,76,99,0.6)` (**new color, confirmed in Figma Hex panel**), radius 15, 866×184, no shadow given | ✅ |
| C5 | Card text colors (name, rating, price, captions, proximity) | `#FFFFFF` for all card text | ✅ |
| C6 | Sticky header background | ⚠️ assumed transparent (logo + filters sit directly on the gradient) | ⚠️ |

**Typography** — rule: *semibold (600) for the headline-level items of the screen (card name, price, offer title); medium/regular for supporting text.* This is how the pending "Manrope semibold" was assigned. Sizes are my call, adjustable.
| # | Element | Value | Status |
|---|---------|-------|--------|
| T7 | Filter label/text ("Where:", "When:") | Manrope 500, 13px, line-height 10px, color `#FFFBFB`, inset 14px left / 13px top | ✅ (the value line "Mexico City" ⚠️ assumed same) |
| T1 | Card name ("Estudio Popnest Coyoacán") | Manrope **600 (semibold)**, 22px, line-height 1.2, `#FFFFFF` | ✅ decided by Claude |
| T2 | Rating/distance line ("92% \| 6.1 kms - Coyoacán") | Manrope 500, 13px, line-height 1.3, `#FFFFFF` (same size/weight as filter text T7) | ✅ decided by Claude |
| T3 | Price ("$300") | Manrope **600 (semibold)**, 26px, line-height 1.1, `#FFFFFF`, right-aligned | ✅ decided by Claude |
| T4 | Price caption ("per day / Includes fees") | Manrope 500, 12px, line-height 1.3, `#FFFFFF`, right-aligned | ✅ decided by Claude |
| T5 | Proximity line ("5 minutes away from …") | Manrope 400, 13px, line-height 1.3, `#FFFFFF` | ✅ decided by Claude |
| T6 | Offer card title ("Unlock the special offer") | Manrope **600 (semibold)**, 28px, line-height 1.2, `#FFFFFF`, centered | ✅ decided by Claude |
| T8 | "Sign Up / Sign In" | Manrope 500, 14px, `#FFFFFF` (matches promo-bar size; already what Home uses) | ✅ decided by Claude |

**Shape & effects**
| # | Token | Value | Status |
|---|-------|-------|--------|
| S1 | Corner radii | filter boxes 12 · space card 15 · offer card 15 · landmark photos 15 · map 10 | ✅ |
| S2 | Shadow | filter boxes + offer card: `0 4px 4px rgba(0,0,0,.25)` (offer card twice); space card none | ✅ |
| S3 | Landmark photos | 4 × 210×144, radius 15, gap 10 (derived: 4×210 + 3×10 = 870). Only one image named ("Santa María la Ribera") | ✅ / ❌ 3 more images |

**Layout** (frame 1512 wide; y measured from the top of the page = Figma y − 81)
| # | Token | Value | Status |
|---|-------|-------|--------|
| L1 | Columns | list x 10→880 (870 wide) · gap 11 · map x 891→1495 (604 wide) · right margin 17 | ✅ |
| L2 | Space card | 866×184 at x=14 (inset 4px from the offer card's left edge); **photo 300×184** (full card height, clipped by the card radius 15) | ✅ |
| L3 | Header | logo 77×35 at x=10; filter boxes at x=105, 443 (+781 assumed), all y=9; **sticky: yes, stays fixed while scrolling** (desktop only; on mobile it scrolls away to save space) | ✅ |
| L4 | Vertical rhythm | header 9 → photo strip 109 (144 tall) → offer card 265 (186 tall) → first card 461 (184 tall), gaps 10–12 | ✅ |
| L5 | Map | 604×736 at y=69, radius 10, static image | ✅ / ❌ image file |

**Footer (Screen 2)** — my decision, not from Figma: solid `#566DAB` background (white text keeps ≥4.5:1 contrast, unlike the pink side of the gradient), brand block (logo + "A lifestyle company" 18px/600 + social icons) and three link groups (Explore / Company / Help, headings 14px/600 uppercase, links 14px), legal row (13px) with © line. Semantic `<footer>`/`<nav>`/`<ul>`; link targets pending real pages.

**Assets to drop into `public/images/`**: static map image ("Screenshot 2025-09-02 at 9.15.15 PM.png"), 4 landmark photos, 2–3 card interiors. (Offer card has no background photo — removed.) Logo: reuse `logo-popnest-white.png`.

### Mobile layout (`/workspace-map`) — BUILT

Replaces the desktop layout below `lg` (1024px) — `src/components/workspace/MobileMapView.jsx`, switched via `useMediaQuery('(min-width: 1024px)')` so only one map instance mounts at a time. Full-bleed map (`h-[100dvh]`), floating header (hamburger + centered logo, dark gradient overlay so it doesn't need a solid bg), rounded-full filter pills (same `#566DAB @ 50%` + white border as desktop, just `rounded-full`), a "1 Day Pass" pill with a sliders icon, and a horizontal-scroll card strip pinned to the bottom (photo + name + price, links to `/espacios/:id`).

Pins: added `alwaysShowPrice` + `highlightId` props to `BrandMap` — dark `#232C45` pills (`.map-pin--dark`) with price always visible, and the cheapest-priced workspace highlighted in pink (`.map-pin--highlight`, `#F82B9A`). Desktop pins are unchanged (still pink, price only at high zoom).

**Decisions made** (per your answers): this fully replaces the mobile layout, no toggle. Cookie banner **not implemented** (demo, no real consent to manage) — skipped from the reference. Hamburger button is a visual stub with no menu behind it yet. Map base color: the reference PNG shows a light/gray basemap, but **kept dark navy to match the desktop map** (your call, for brand consistency across breakpoints) — a deliberate deviation from that reference, not an oversight.

Original open questions, superseded by the above:

1. **Header** (floating, dark translucent bar over the map): ☰ hamburger icon (left) · logo centered · nothing on the right visible.
2. **Filter pills** (rounded-full, not the radius-12 boxes from desktop): "Where: Los Angeles, CA" and "When: Today" side by side, semi-transparent dark-blue fill. Below them, a full-width pill "1 Day Pass" with a filter/sliders icon on the right.
3. **Map**: fills most of the screen, behind the header/filters. Pins are dark price bubbles ("USD 300"); one pin is highlighted pink/magenta ("USD 25") — presumably the currently-focused or cheapest listing.
4. **Card strip**: a horizontal row of space photos peeks in from the bottom edge (looks like a swipe-up drawer over the map, Airbnb-map-view style), only partially visible.
5. **Cookie consent banner**: "We value your privacy" sheet from the bottom — "Accept All" (pink outline) / "Reject All" (outline) / "Customise" (pink→blue gradient, filled).

**Open questions before I build this**
1. Is this meant to **replace** the current mobile layout entirely (map fills the screen, cards become a swipe-up strip), or is it a separate "map view" mode reachable by a toggle (like Airbnb's List/Map switch), with the current stacked layout staying as the default list view?
2. Colors for the pill filters, the "1 Day Pass" pill, the price-pin bubbles (dark ones + the highlighted pink one), and the header bar — none given yet (I'd guess `#232C45`-ish dark + `#F82B9A` pink, but want to confirm rather than assume for a whole new pattern).
3. Is the **cookie banner** a real feature to implement (with real consent logic / a cookie library) or just part of the visual reference to ignore for this demo?
4. The hamburger menu — does it open a real menu? If so, what goes in it?
5. Should desktop stay exactly as-is, with only `<lg` breakpoints getting this new treatment?

### Screen 4 — Location search overlay (mobile) — reference PNG, structure only, no tokens yet

Full-screen overlay, opens when tapping the "Where" field on the mobile map view. Dark navy→indigo gradient background (our palette family — looks close to `#232C45` → `#566DAB`).

**Structure (top → bottom)**
1. Search bar: white/light pill, magnifying-glass icon, placeholder "Type a neighborhood in Mexico City" · "Cancel" link to the right (closes the overlay).
2. "Spaces in Mexico City" — pin icon + heading, subtitle "Find the best coworking spaces to have productive days and take meetings on the fly".
3. Row of 3 landmark photo cards with a label under each: **Coyoacan**, **Condesa**, **Roma**.
4. Quick option row: plane/near-me icon + "Mexico City - Downtown".
5. **Recent Searches** (clock icon) — one item: "Condesa, CDMX, Mexico".
6. **Trending Locations** (trending-up icon) — list: Coyoacan, Juarez, Roma Norte, Santa Maria la Ribera, Polanco, Del Valle, Escandon.

**Open questions before I build this**
1. Does tapping "Where" open this as a full-screen overlay (replacing the map temporarily), or a bottom sheet over the map? Selecting a result — does it just fill the "Where" field, or also re-run the search/re-center the map?
2. No CSS tokens yet (colors/fonts/sizes) — want to send those like the last few screens, or should I build a first pass reusing what we already have (Manrope, `#232C45`→`#566DAB` gradient, `#F82B9A` accents) and refine after?
3. The 3 landmark photos (Coyoacán, Condesa, Roma) — real photos to drop in `public/images/`, or placeholders for now?
4. Is this specific to the mobile map view, or does desktop need an equivalent (e.g. a dropdown under the "Where" box)?

### Screen 5 — Mobile space detail (compact) — BUILT

Much simpler than the desktop `/espacios/:id` page I built (which stacks hero photo, rating, why-we-like-it, 3× reservation card, gallery, amenities, need-to-know, keep-in-mind, footer). This mobile reference looks like a compact single-screen listing preview instead.

**Structure (top → bottom)**
1. Top bar: hamburger + centered logo, white background (same as the map view's top bar).
2. Photo carousel — full width, at least 2 photos, next one peeking on the right (same swipe pattern as the map-hero carousel).
3. Info card (dark navy→indigo gradient, our palette family): light lavender "Elegant" tag pill (top-left) · title "Coworking Santa Maria la Ribera part of Grupo NWI" (bold, white, wraps) · star + "92% | 2 Ratings" · address "Calle Treinta y Ocho #41, Santa María la Ribera, CDMX" (smaller, lighter).
4. Map — light/gray basemap in this reference (not our dark-tinted one).
5. Full-width pink sticky(?) button: "BOOK NOW | 350 MXN".

**Decisions**: confirmed as the mobile version of `/espacios/:id` — `WorkspaceDetail.jsx` now branches on `useMediaQuery('(min-width: 1024px)')` and renders `MobileWorkspaceDetail.jsx` below that breakpoint, same as `WorkspaceMap.jsx` does for the map. New shared `MobileTopBar.jsx` (hamburger + centered logo) reused by both mobile screens. Map kept **dark** (consistent with the earlier map-view decision, not re-asked). "BOOK NOW" button is a fixed bottom bar, **visual only for now** — no navigation wired, destination still pending your answer. Skipped adding "part of Grupo NWI" as a generic data field (kept just the workspace name) since it read as one-off example text, not a confirmed new field — say if you want it added back for real.

**Full content added below the map** (no reference PNG for this part — my call on order/spacing, applying UX best practice for a mobile listing page): reused the exact same desktop components (`AmenitiesCard`, `RatingCard`, `NeedToKnowCard`, `KeepInMindCard`) rather than rebuilding them, so the visual language stays identical between breakpoints. Order: **Amenities → Reviews/Ratings → Need to Know → Things to Keep in Mind** — what's included, then social proof, then the rules right before the "BOOK NOW" bar, so the last thing scrolled past before booking is the policy fine print. `AmenitiesCard`'s 2-column grid already collapses to 1 column below `sm` (640px), so no mobile-specific layout work was needed there. Same `mx-1`/`mt-[11px]` rhythm as the rest of the page.

**Exact tokens applied** (from Figma CSS export): photo `aspect-[310/284]` (near-square, not wide) radius 16px · info card gradient `#566DAB→#232C45`, radius 10px, `mx-1`/`mt-[11px]` gaps · tag "Elegant" background `#D7C9E8`, **black text, no border-radius (square)** — a deliberate token, not an oversight · title 20px/22px bold white · rating row 14px/500 **solid white** (not dimmed) · address 14px/500 **solid white** (was `#D1D5DB` in my first guess — corrected) · map: token gave 106px, first fixed the leftover blank space by making it `flex-1`, then reverted to a fixed **220px** once a footer was added below it (a growing map no longer made sense once there's more content after it) — page went back to a normal scrollable `min-h-[100dvh]`, with the "BOOK NOW" bar staying `fixed` on top of the scrolled content. Needed a `ResizeObserver` + `map.invalidateSize()` fix in `BrandMap.jsx` for the flex-1 phase since Leaflet otherwise measures the container before the flex layout settles and renders blank — left that fix in since it's harmless and helps other dynamic-height usages. Added the shared `WorkspaceFooter` below the map (`px-4`, no `lg:` padding needed here) — a new **`compact` prop** on `WorkspaceFooter.jsx` (smaller logo, no tagline, no Explore/Company/Help columns, tighter padding) is used only here; every other usage (Home, `/workspace-map`, desktop `/espacios/:id`) keeps the full footer unchanged. · "BOOK NOW" bar: `#F82B9A` — token gave 80% opacity, but per your later feedback this specific button on `/espacios/:id` (Screen 5) is now **solid 100%**; 18px/600 text, ~square corners (1px radius ≈ none). Note: Screen 6's own "BOOK NOW" button (the gradient pill inside the checkout page) is unaffected — that one keeps its own separate gradient token.

### Screen 6 — Mobile checkout (`/espacios/:id/reservar`) — BUILT, exact tokens

Reached by tapping "BOOK NOW" on Screen 5 (now wired — was a no-op stub before). Full-page gradient `#566DAB → #232C45`. "‹ Back to space details" link at top (white, 11px) returns to `/espacios/:id`. Rows below all share one "glass" style: `bg-white/10`, `border-white/30` (1.5px), `shadow-[0_4px_4px_rgba(0,0,0,.25)]`, `backdrop-blur-[10px]`, radius 10px:
- Guest → "Required" (60px tall) · Room Type → "Day Pass - Shared space" (50px)
- Check-In / Check-Out (125px, two rows) — static example dates/times
- Price breakdown (109px): "1 day x MXN {price}" → MXN {price} · "Taxes and fees" → MXN {tax} · divider · **Total (MXN)** → MXN {total}
- Payment Method → "Credit Card" (44px) · Promo Code (44px, chevron only, not in the CSS batch but visible in the PNG so added to match)
- "Need to Know" note reusing `KEEP_IN_MIND[0]` (also from the PNG, not the CSS batch)
- "BOOK NOW" button: `linear-gradient(90deg, #F985C4 0%, #566DAB 100%)`, radius 10, 16px/700 white — **now wired**: creates a real booking via `BookingContext` and navigates to `/confirmacion/:id`, same as the desktop reservation flow.

**Correction, not a literal copy**: the token's example total was "MXN 2,385", which doesn't reconcile with its own line items (300 + 7.2 ≠ 2,385) — read as leftover/mismatched placeholder data rather than a real target. Computed `tax = price × 2.4%` (matches the 300→7.2 example ratio) and `total = price + tax` dynamically instead, so the number is internally consistent for every workspace's price.

### Screen 7 — Mobile room type picker (`/espacios/:id/reservar/room-type`) — BUILT

Opens from tapping "Room Type" on the checkout screen (was static text, now a link). "Solo Workspaces" → Day Pass · "Team Rooms" → Small/Medium/Large, each with capacity. Rows: `bg-white/10`, `border-white/30` (0.5px), radius 10, 37px tall. Selected row: confirmed exact token — `border-[#F985C4]` (0.5px) + `bg-[#F985C4]/40` (was my own guess of `#F82B9A`/1.5px, now corrected). Selection is carried via a `?room=` query param on the checkout URL (`getRoomTypeById` in `workspaces.js`), so tapping a row updates the checkout's "Room Type" row and, if you book, shows up on the confirmation screen too (`Confirmation.jsx` now shows a "Tipo de sala" line when present).

Found and fixed a real bug while wiring this up: my first version applied both the default border/bg classes **and** the selected-state classes together (relying on JSX order to "win"), but Tailwind's generated CSS order doesn't follow className order, so the highlight silently failed to render even though the right classes were present in the DOM. Fixed by picking one color variant exclusively instead of layering an override on top.

Page background gradient (`#566DAB → #8FA3D9`) is my own approximation — no exact token was given for this screen's page-level background, only individual elements.

### Screen 8 — Mobile date picker (`/espacios/:id/reservar/date`) — BUILT

Opens from tapping Check-In or Check-Out on the checkout screen (both were static text, now links). Wheel-style picker: Year / Month / Day columns, `WheelColumn.jsx` (new, reusable). Row height 28px (matches every text token's own `line-height: 28px`), 7 rows visible, center row highlighted with a shared band (`rgba(217,217,217,0.2)`, radius 5) spanning all 3 columns. Falloff style is exact from tokens and symmetric: ±1 row `#E7E7E7`/14px, ±2 `rgba(35,44,69,.77)`/13px, ±3+ `rgba(35,44,69,.58)`/11px — note these outer-row colors are a **dark** navy tone, not white-at-low-opacity, which is what the tokens actually specify (rows recede into the background rather than fading to white). Center row (selected) isn't in the token dump — used white/bold/18px, matching what's visible in the reference PNG.

Two things called out as **not literal copies**:
1. The token's own row content (Sep/Oct/Nov/**Dec**/Nov/Oct/Sep, year jumping 2025→2026 mid-list) is mirrored/palindromic — not a real calendar sequence, clearly placeholder content from the Figma mock rather than a working wheel. Built **real, independently-scrolling** Year (2024–2028) / Month (Jan–Dec) / Day (1–31) columns instead, so the picker actually works when a real person uses the demo.
2. `Select a Date` heading + its description text were positioned at Figma coordinates far outside the 393px frame (x≈6805, y≈8732) — an orphaned/misplaced layer, not part of this screen. Skipped it; used the on-canvas `Set Date` label instead.

Wiring: selection flows back to checkout via `?checkin=` / `?checkout=` query params (format "Mon D, YYYY"), read by `MobileCheckout.jsx` to override the placeholder Check-In/Check-Out text and to populate the real booking on submit. Also fixed a param-loss bug while wiring this: the Room Type and Check-In/Check-Out links were overwriting the checkout URL's other query params instead of merging with them (so picking a room would silently reset a date you'd already set) — all three sub-screens now read and re-append the full current query string instead of writing a single param in isolation.

Page background gradient is the same approximation as Screen 7 (no exact token given for the page-level background here either).

### Footer, consistently — all mobile booking-flow screens
Every screen in the mobile reservation journey (`/espacios/:id`, `/reservar`, `/reservar/room-type`, `/reservar/date`) now ends with the `compact` `WorkspaceFooter`, pinned to the bottom via `flex flex-col` + `mt-auto` on the footer, so it sits at the true bottom of the viewport on short screens and simply follows the content when it's taller than one screen. Fixed a real layout bug this surfaced on the date picker: switching its wrapper to `flex flex-col` made the wheel-picker row collapse to its shrink-to-fit width (132px instead of 340px) since it had `max-w` but no `width`, so at the bigger font size "2025" visually collided with "Dec" — fixed by adding `w-full` alongside the existing `max-w-[340px]`.

### Screen 9 — Mobile time picker (`/espacios/:id/reservar/time`) — BUILT

**Chained the flow, flagging this as an inference, not a literal spec**: this screen's back link says "Back to date picker", which only makes sense if it's reached *from* the date picker (Screen 8). Since the original checkout mockup showed Check-In/Check-Out as combined date+time strings ("Thu 11 Sep, 9:00 am"), I connected the two screens: **Date picker's Submit now goes here instead of straight back to checkout**; this screen's Submit combines the chosen date with the chosen Start/End times and writes both `checkin` and `checkout` on the checkout URL. Tested end to end — works. Flagging in case a direct date-only submit was actually what you wanted instead.

Structure: "Select a Time" title + description (both new: title 16px/500 white, description 13px/500 white/90 — sized slightly differently from the literal 14px/11px tokens, to read comfortably at the enlarged wheel scale already established for Screen 8). Start/End segmented toggle (`Rectangle 3608/3609`: outer pill border-white/0.5px/radius30, inner active segment `#F985C4 @ 40%` fill + white/30 border) — tapping Start vs End switches which one the wheel below is currently editing, and each keeps its own independent hour/meridiem state. Below: two `WheelColumn`s (reused from Screen 8, same enlarged scale) — Hours 1–12 and AM/PM — editing whichever segment is active. Page background gradient `#566DAB 45.19% → #F985C4 100%` is an exact token this time (first page-level gradient actually given for one of these sub-screens). Ends with the compact footer, `mt-auto` pinned, same as the rest of the flow.

### Screen 10 — Mobile payment card (`/espacios/:id/reservar/payment`) — BUILT

Opens from "Payment Method" on checkout (was static "Credit Card" text, now a link). Back link "Back to Reservation Details" returns to checkout preserving params. "Payment Card" title 30px/500 white (wraps 2 lines) · "New Card" pill button (border-2 white, radius 20) — **visual only, no add-card flow**, matches this project's no-backend/mock convention. Card visual: 319×185, radius 5, tinted `rgba(190,126,126,0.79)` — the token's background also referenced a texture photo I don't have, so it's a flat tinted color instead, flagged as a placeholder. "Selected" badge `#F955AE` + white border, exact token. Masked number and cardholder name ("•••• •••• •••• 1234", "Ray Evans") are **not in the CSS batch** — added from the PNG only, so their sizing/color is my own approximation, not literal tokens. "Continue" button is an outline (not filled) — exact token, distinct from every other screen's filled "BOOK NOW"/"Submit". On Continue, writes `?payment=Visa •••• 1234` back onto the checkout URL, same pattern as Room Type/Date/Time.

**Follow-up tweaks (your feedback)**: more breathing room between "Back to Reservation Details" and the title (was too tight) · enlarged the whole layout (title, card, buttons, spacing) so the compact footer no longer peeks in without scrolling — wrapped everything above the footer in its own `min-h-[100dvh]` block instead of eyeballing a fixed spacer, so it reliably stays off-screen first-load regardless of device height.

### Still open from Home (not blocking Screen 2)
drop-shadow values for GO button (likely the same `0 4px 4px rgba(0,0,0,.25)` seen on Screen 2 — to confirm), "Sign Up / Sign In" and section-heading/body/footer typography (currently my guesses), testimonial quote text size.

## Screen 3 — Space detail (PNG shows URL `popnest.org/workspace-map`; plan: `/espacios/:id`) — structure observed, tokens pending

**Page**: near-white background (not the pink→blue gradient of Screen 2), no header/nav visible, content centered ~ (left column ≈ 2/3, right column ≈ 1/3). Cards on this page use blue gradients, radius ≈ 15.

**Layout (top → bottom)**
1. Row 1: large hero photo (left) + rating card (right).
2. Row 2: "Why We Like It / Why Book with Us" card (left) · small map thumbnail (middle) · **Your Reservation** card (right).
3. Photo gallery card: 4 thumbnails.
4. **Amenities** card (2 columns of icon + text, plus "Add Ons"). Right column: Your Reservation repeated → it is **sticky** while scrolling.
5. **Need to Know** card (8 icon + text rules) with a map below it showing price pins ("USD 310"…) and an address label.
6. **Things to Keep in Mind** card (5 bullets).

**Content transcribed from the PNG**
- Rating card: "92% of Bookers Liked It · 2 Ratings"; Jackson Reed ★★★★☆ — "Estudio Popnest is an ideal space for collaborative dynamics and corporate events that seek to get out of the traditional scheme. Its modern design full of natural light and versatile furniture, creates an environment that stimulates creativity, interaction and group productivity."; Avery Morgan ★★★☆☆ — "This space stands out for its warmth and functionality, perfect for workshops, team sessions or presentations in a relaxed but professional environment. Its strategic location in Berkeley and the included services make it a comprehensive solution for modern corporate meetings."
- Why We Like It: "It's all focus, no noise. Work in a space designed for calm and creativity. Step into bold interiors where design sparks new ideas." · Why Book with Us: "Receive one month of LinkedIn premium after spending $6,000 in reservations"
- Your Reservation: Date (Wed, Dec 10) · People (1 Person) · Start Time (9:00 AM) · End Time (5:00 AM — looks like a typo, should be PM) · button "Reserve Now" (pink → blue gradient).
- Amenities — Coworking Space: Fast, secure WiFi · Complimentary coffee & tea · Presentation screen & whiteboard · A/C and natural lighting · Quiet, professional environment · Easy access from Benito Juárez, Del Valle · Wellness quiet zone · Filtered Water & Healthy Snacks · Community Events · Ergonomic Furniture · Printing & Scanning · Kitchenette · Phone Booths · Lockers/Storage · Mail & Package Handling · Networking events · Bike Storage. **Add Ons**: 24/7 Access · Mail & Package Handling · Conference Rooms.
- Need to Know: Day pass hours 9am–7pm, no entry outside · Valid photo ID at check-in · Wi-Fi included, details at front desk · Complimentary coffee, tea and water in the lounge · Common areas only (hot desks, lounge; private rooms need separate booking) · Lockers for day use (bring your own lock or rent one) · Quiet zones enforced, use phone booths for calls · 18+ only. Address label on map: "Londres 105 col. Del Carmen, Coyoacán, CDMX".
- Things to Keep in Mind: Day pass = shared spaces only (private offices/meeting rooms need separate booking, may incur fees) · Desk availability first-come, first-served · Outside food only in designated areas · May not meet all accessibility needs (requests subject to approval) · Individual use only; groups contact community manager.

### Tokens for Screen 3 (source: Figma CSS export, batch 2 — layer names in *italics*)
Legend: ✅ defined · ⚠️ inferred/assumed · ❌ still missing. Coordinates are absolute (same space Figma exported for this frame); left column starts x=181, right column starts x=935, right column width 373.

**Colors & fills**
| # | Token | Value | Status |
|---|-------|-------|--------|
| C1 | Page background | — | ❌ (still unknown; not white gradient like Screen 2 per the PNG, but no fill given) |
| C2 | Rating card (*Rectangle 3514*) | `linear-gradient(180deg, #566DAB 33.17%, #7A9AC9 100%)`, radius 10, 373×448 | ✅ |
| C3 | "Why We Like It" card (*Rectangle 3511*) | `linear-gradient(180deg, #566DAB 0%, #232C45 100%)`, radius 10, 361×254 | ✅ (**new color `#232C45`** — dark navy) |
| C4 | Your Reservation card (*Rectangle 3512*) | same as C3: `linear-gradient(180deg, #566DAB 0%, #232C45 100%)`, radius 10, 373×254 | ✅ |
| C5 | Gallery card (*Rectangle 3400*) | same as C3/C4, radius 10, 746×331 | ✅ |
| C6 | Amenities card (*Rectangle 3399*) | same gradient as C2: `linear-gradient(180deg, #566DAB 33.17%, #7A9AC9 100%)`, radius 10, 746×462 | ✅ |
| C7 | Need to Know card (*Rectangle 3404*) | `linear-gradient(180deg, rgba(86,109,171,0.8) 0%, #232C45 87.5%)`, radius 10, 749×607 | ✅ |
| C7b | Things to Keep in Mind card | — | ❌ not in this batch (no rectangle given) |
| C8 | Reservation form fields (*Rectangle 3520/3521*) | `#FFFFFF`, **no radius given (square corners)**, 324×60 | ✅ |
| C9 | "Reserve Now" button (*Rectangle 3522*) | `linear-gradient(90deg, #F985C4 0%, #566DAB 100%)`, **no radius given (square corners)**, 324×37 | ✅ |
| C10 | Star colors | — | ❌ |
| C11 | Divider line color | — | ❌ |

**Typography** — note: this screen mixes **Inter** (card titles, reservation fields/button) and **Manrope** (amenity list items). Inter isn't loaded in the project yet (only Manrope) — flagging before I add a second font.
| # | Element | Value | Status |
|---|---------|-------|--------|
| T1 | Card titles ("Your Reservation", "Amenities") | Inter 600, 15–16px (Reservation 15px/lh18, Amenities 16px/lh19), `#FFFFFF` | ✅ |
| T2 | Card subtitle ("Coworking Space") | Inter 500, 15px, line-height 18px, `#FFFFFF` | ✅ |
| T3 | Reservation field text ("Date Wed, Dec 10", "People", "Start Time", "End Time") | Inter 400, 14px, line-height 17px, `#000000`, bottom-aligned in its box | ✅ (label vs. value not separated in this export — looks like one stacked text node per field) |
| T4 | "Reserve Now" button text | Inter 500, 14px, line-height 17px, `#FFFFFF` | ✅ |
| T5 | Amenity list items (both columns + Add Ons) | Manrope 500, 14px, **line-height 30px** (the export flags "or 214%" itself), `#FFFFFF` | ✅ |
| T6 | "92% of Bookers Liked It" / "2 Ratings" | — | ❌ |
| T7 | Reviewer name / review body | — | ❌ |
| T8 | Need to Know / Things to Keep in Mind list text | — | ❌ (⚠️ my assumption: same as T5, Manrope 500/14/30, unconfirmed) |

**Shape & effects**
| # | Token | Value | Status |
|---|-------|-------|--------|
| S1 | Corner radii | hero photo 15 · all gradient cards 10 · **form fields and button: 0 (square)** | ✅ |
| S2 | Shadows | — | ❌ none given so far |
| S3 | Gallery thumbnails | one given: 177×264, x=189 (⚠️ assumed 4 across, ~10px gap, same height — not confirmed) | ⚠️ |
| S4 | Amenity icons | wifi icon 23×26 at (214,1306); **user note: icons "have to be white"** — filename was a placeholder, not a real asset. Full icon set (16 rules) still needed | ❌ |

**Layout** (absolute coords from the export)
| # | Section | Position / size |
|---|---------|------------------|
| L1 | Hero photo | 746×448 at (181,159) |
| L2 | Rating card | 373×448 at (935,159) — same row as hero, gap 8px |
| L3 | Why We Like It | 361×254 at (181,617) |
| L4 | Map thumbnail | 373×254 at (554,617) |
| L5 | Your Reservation card | 373×254 at (935,617) — title at (961,634); field row 1 at (961,663) 324×60; field row 2 at (961,731) 324×60 (gap 8); button at (961,805) 324×37 |
| L6 | Gallery card | 746×331 at (181,881) |
| L7 | Amenities card | 746×462 at (180,1220); title (209,1250); subtitle (209,1275); col 1 list (272,1304) 278×300; col 2 list (624,1304) 239×235; Add Ons list (624,1562) 173×76 |
| L8 | Need to Know card | 749×607 at (178,1692); map image 686×267 at (210,2020) |
| L9 | Things to Keep in Mind | — ❌ not in this batch |
| L10 | Vertical rhythm | consistent ~8–10px gap between stacked cards (confirms the pattern from Screen 2) |
| L11 | Reservation card repeats | **Confirmed by you**: appears 3 times (not sticky) — aligned via CSS grid explicit rows so each one lines up with its left-column neighbor: beside "Why We Like It"+map (spans through the gallery row too), beside Amenities, and beside Need to Know (spans through Things to Keep in Mind too). Implemented in `WorkspaceDetail.jsx`. |

**Open questions before I build this**
1. Page background color (C1) and the "Things to Keep in Mind" card (C7b, L9) weren't in this batch — need those.
2. Should I add **Inter** as a second web font, or convert these specific texts to Manrope to keep one typeface? (Home + Screen 2 are Manrope-only so far.)
3. Square corners on the reservation fields/button — intentional, right? It stands out next to the radius-12 fields on Home/Screen 2.
4. Star colors, divider color, reviewer/rating typography, and the full amenity-icon set (must be white) are still missing.
5. Gallery thumbnail count/gap is inferred from a single photo — confirm 4 photos at equal size.



## Real assets
- Hero background: `public/images/hero-coworking.png` (real photo — replaced the picsum placeholder)
- Testimonial photos: `public/images/testimonial-{omar-haddad,woman-blazer,man-suit,woman-laptop}.png` (real headshots — replaced pravatar placeholders)

## Status
Applied so far: colors (indigo/pink/gray/overlay roles), Manrope typography (promo text, hero headline/subhead),
GO button effects (blur + shadow placeholder), `gradient-1` (promo bar + perk banner backgrounds).
Still pending: real drop-shadow values for the Home GO button, sections & hierarchy batch, Screen 2 items marked ❌.


## Screen 11 — Add a New Payment Card (`/espacios/:id/reservar/payment/new`)

Reached from the "New Card" button on the Payment Card screen (Screen 10), which is now a real `Link` instead of a decorative button.

- Back control: chevron `‹` (32px, line-height 28px) + "Back" label (11px) — smaller than the 16px "Back to..." labels used on sibling screens; this size was given explicitly in the Figma tokens for this screen, so kept as an intentional variant rather than normalized to match.
- Title "Add a new payment card" (30px/35px), max-width 227px to force the two-line wrap shown in the design.
- Form fields (Name on Card, Card Number, Expired Date, Security Code, Billing Contact) use a rounder `rounded-[20px]` bordered-box style, distinct from the `rounded-[10px]` rows on Checkout — matches the given tokens, kept as-is.
- Card Number, Expired Date, Security Code, "Set as default payment method" checkbox, and Billing Contact were not in the CSS export (only Name on Card and the Save Card button were) — built from the reference PNG. Fields are real controlled inputs (not just static display) since this is an actual data-entry form; still no backend, per the project's "mock/demo" convention.
- Visa badge on the Card Number field: small white pill with "VISA" wordmark, inferred from the PNG (no literal token given).
- Save Card button: `linear-gradient(90deg, #7E7171 0%, #E4CDCD 100%)` — a distinct brownish/tan gradient from the pink/blue gradient used elsewhere (e.g. Checkout's "BOOK NOW"); this is the literal token given for this screen, kept as an intentional one-off.
- Same `min-h-[100dvh]` wrapper pattern as Screen 10 so the compact footer requires a scroll to see.
- **Bug caught during verification**: the Expired Date / Security Code two-column row initially overflowed past the viewport edge — flex children with `flex-1` don't shrink below an `<input>`'s intrinsic min-content width unless `min-w-0` is set (classic flexbox `min-width: auto` trap). Fixed by adding `min-w-0` to both the field wrappers and the inputs.
- Save Card action: takes the last 4 digits typed into Card Number and writes `payment=Visa •••• {last4}` onto the checkout URL, then navigates straight back to Checkout — same "merge into query params" pattern used by Room Type/Date/Time, and mirrors the existing Continue button's behavior on the Payment Card list screen.


**Fix (your feedback)**: Save Card wasn't updating the Payment Card screen — it skipped straight to Checkout with a hardcoded "Visa •••• 1234", so the saved-card display never reflected what you typed on the New Card form. Fixed the chain: Save Card now writes `cardName`/`cardLast4` onto the query params and routes back to the Payment Card list (Screen 10), which reads those (falling back to the "Ray Evans"/1234 demo defaults when absent) and renders them on the card face. Continue then builds `payment=Visa •••• {cardLast4}` from that same value before handing off to Checkout, and strips the now-redundant `cardName`/`cardLast4` params off the URL. Verified end-to-end: entered "Sofia Manning" / card ending 9999 → Payment Card screen shows it → Continue → Checkout shows "Visa •••• 9999".


## Screen 12 — Choose Your Card (redesign of Screen 10, `/espacios/:id/reservar/payment`)

Only a PNG was given this round, no CSS export — everything below is inferred from the screenshot, flagged accordingly.

- Renamed "Payment Card" → "Choose your card" (title now a single flowing sentence wrapped at `max-w-[260px]` to match the "Choose your / card" line break, rather than the old hardcoded `<br/>`).
- Subtitle copy updated to "Pick a card to complete your payment securely".
- **New interaction**: this is no longer a single static card — it's a picker over multiple saved cards. A mock `DEFAULT_CARDS` array (3 cards, distinct gradient colors: mauve/pink, lavender/purple, gold/olive — colors estimated from the screenshot, no hex tokens given) backs a small fanned "wallet" stack: the selected card renders full-size up top with the "Selected" badge, the rest render smaller and overlapping behind/below it, bled off the left edge of the viewport (`-ml-[140px]` on the row, `-ml-[90px]` between stacked cards) to match the cropped-card look in the design. Tapping any stacked card swaps it into the selected slot.
- If you arrive here with `cardName`/`cardLast4` in the URL (i.e. you just saved a new card on Screen 11), that card is prepended to the list and auto-selected — so "New Card" now genuinely adds a card to your wallet instead of overwriting the one saved card, closing the gap from the previous fix.
- "Continue" button restyled: solid `#232C45` fill (matches the page's own dark gradient stop) with a white border, replacing the previous transparent/outline-only button — reads as "cut into" the background per the screenshot.
- Card face content unchanged from Screen 10 (VISA wordmark, masked digits, "Cardholder name" + name) — extracted into a small `CardFace` component reused for the selected card; the smaller stacked cards use a simplified version (no name line, matching the screenshot which only shows the label there).
- Same `min-h-[100dvh]` + `overflow-x-hidden` wrapper as before — the horizontal bleed on the card stack needed the `overflow-x-hidden` addition on the outer container so it doesn't introduce a page-level horizontal scrollbar.


## Screen 13 — Mobile Confirmation (`/confirmacion/:id` on mobile)

New mobile-specific "thank you" screen, replacing the shared desktop confirmation card when viewed on a narrow viewport. Follows the same desktop/mobile split pattern as [WorkspaceDetail.jsx](src/pages/WorkspaceDetail.jsx) → [MobileWorkspaceDetail.jsx](src/pages/MobileWorkspaceDetail.jsx): `Confirmation.jsx` checks `useMediaQuery('(min-width: 1024px)')` and renders `MobileConfirmation` below that breakpoint, leaving the existing desktop confirmation card untouched.

- `/confirmacion/:id` was added to `hasOwnChrome` in `App.jsx` (previously it always got the global Navbar/Footer). Since the mobile version needs a full-bleed custom background with no nav at all, and the desktop version still wants its Navbar/Footer, `Confirmation.jsx`'s desktop branch now renders its own `<Navbar />`/`<Footer />` directly instead of relying on the global wrapper — verified both render correctly.
- The CSS export merged the title and paragraph into a single text node (one font-size/line-height for "Thank you for booking with us!" *and* the paragraph below it) — same kind of Figma export artifact seen on earlier screens. Split it into a bolder ~24px title and a lighter ~15px/85%-opacity paragraph to match the visual hierarchy actually shown in the PNG; flagging since the literal token said both should be 24px/500 weight.
- Calendar+arrow icon (Material Symbols "event_upcoming", referenced by filename in the export but no asset was provided) rebuilt as an inline SVG approximation — outlined calendar with two top tabs, a header rule, and a right-pointing arrow breaking through the lower half.
- "Back to Home Page" button: same pink→blue gradient used elsewhere in the flow, links to `/`.
- No footer on this screen (matches the screenshot — it's a dead-end confirmation, not part of the reservation flow chrome).


## Screen 14 — Mobile Menu Drawer (`src/components/workspace/MobileMenu.jsx`)

Wired to the hamburger button that already existed (decorative, no `onClick`) in [MobileTopBar.jsx](src/components/workspace/MobileTopBar.jsx), shared by the mobile map and mobile detail screens — so the drawer is now reachable from both.

- Panel: `linear-gradient(180deg, rgba(249,133,196,0.9) 7.21%, rgba(86,109,171,0.9) 26.92%)` — note this is NOT a full pink→blue sweep like the reservation flow's gradients; it's mostly translucent blue with just a pink flash in the top ~27%, per the literal token. Kept as given since it reads intentional (lets the map/page content show through with a tint, rather than fully obscuring it).
- Width 274px, full height, `shadow-[0_4px_4px_rgba(0,0,0,0.25)]`, closes on tapping the back chevron, the "Menu" trigger is a toggle, and also closes on tapping anywhere outside the panel (an invisible full-screen backdrop button) — that outside-tap-to-close wasn't in the tokens but is standard drawer behavior and was added for usability.
- Nav copy came from one merged text block in the CSS export (`Profile / My Bookings / Saved Spaces / Popular Coworkings / Payments / Billing / 🌍 Language / 💱 Currency`) with a single line-height — the visible gaps before "Payments / Billing" and before "🌍 Language" in the PNG were reconstructed as `mt-10` breaks between groups, everything else just stacks on the given `leading-[40px]`.
- None of the nav/bottom items (Profile, My Bookings, Saved Spaces, Popular Coworkings, Payments/Billing, Language, Currency, Help/FAQ, Terms & Privacy, Log out) route anywhere — no such pages exist yet in this demo, so they're rendered as static text rather than dead links, consistent with how other not-yet-built destinations have been handled.


## Screen 15 — Booking Confirmation receipt (top of Screen 13's mobile confirmation)

New tokens/PNG this round showed only the top portion of the mobile confirmation screen (title, hero photo, glassmorphism details card, guest form — cut off mid-scroll right after the "Email" field, no button visible). Read this as the SAME screen as Screen 13's "Thank you for booking with us!", just its upper half — so it was prepended above the existing thank-you section in [MobileConfirmation.jsx](src/pages/MobileConfirmation.jsx) rather than replacing it: scrolling down from this new receipt card leads into the already-built thank-you message + "Back to Home Page" button.

- **Data plumbing**: `MobileCheckout.jsx`'s `handleBookNow` now also stores `workspaceId`, the raw `checkIn`/`checkOut` strings, and a real numeric `guests: 2` on the booking (previously `guests` was literally the placeholder string `'Required'` — a latent bug, now fixed; this also improved the existing desktop confirmation card, which now shows "Personas: 2" instead of "Required"). `getWorkspaceById(booking.workspaceId)` supplies the photo/name/address for the new receipt card.
- Check-in/out date and time are split from the stored strings with a small `splitDateTime` helper (splits on the last comma) since the upstream flow produces two slightly different formats depending on whether you went through the date/time pickers or used the default.
- **Simplified the glass effect**: the tokens described two overlapping rectangles (a 217px photo, a separate 582px frosted-blur rectangle) that don't by themselves reproduce the photo-tinted frosted look under the info cards in the PNG. Built an approximation instead — photo image up top, a `bg-white/[0.14] backdrop-blur` wash over the card — close to the screenshot without literally stacking the exact two rectangles.
- Each info "pill" (Location, Check-in Date, Map, Check-in/out Time, Number of guests) uses the given `rgba(63,46,38,0.49)` dark warm fill + blur — these tokens were given and used as-is.
- **Map thumbnail**: no real embeddable map was specified for this small a preview — built as a simple decorative SVG (abstract road lines + a pink pin dot), not an interactive map.
- **Guest 1 fields** (Name/Last Name/Email) had no CSS tokens, only visible in the PNG — built as real controlled inputs (matching the New Card form pattern), pre-filled with the demo values shown ("Mariana Sarali" / "Rodriguez Ibargüengoitia"), not persisted anywhere.
- Subtitle copy: the design literally said "2 Pases Individuales" (Spanish), inconsistent with every other string in this flow (all English). Normalized to `"{guests} guests · {roomType}"` in English rather than copying the literal Spanish — flagging in case that was intentional.


## Screen 15 follow-up — Guest 2, Space Rules, Cancellation Policy, Payment

Continuation of the same scroll (Screen 15) with new tokens/PNG for what comes after Guest 1's fields.

- **Fixed the photo backdrop**: this batch's tokens (`Rectangle 3400`, a 749px-tall photo background; `Rectangle 3626`, a 676px brown 0.49-opacity wash) confirmed the workspace photo is meant to show through — blurred and tinted — behind the *entire* glass card, not just the top hero strip. Reworked the card to layer: a `blur-md` full-height photo background → the brown wash → the sharp, unblurred photo just for the top 217px hero → the frosted content on top. Matches the warm, photo-tinted look across all the info cards now instead of the flat page-gradient bleed-through from before.
- Guest 1's email field actually has a value in the tokens ("testest@gmail.com") — updated it from the blank/placeholder state I'd guessed at last round.
- Added a **Guest 2** block, structurally identical to Guest 1 (extracted into a shared `GuestFields` component). Its name/last name are literally identical to Guest 1's ("Mariana Sarali" / "Rodriguez Ibargüengoitia") in the tokens — same recurring placeholder-duplication pattern seen elsewhere in this file — kept as given rather than "fixed" to look more realistic.
- **Space Rules**: bullet list, copied verbatim from the merged CSS text block.
- **Cancellation Policy**: paragraph, copied verbatim.
- **Payment**: Total row + description now pull from the real `booking.total` (tax-inclusive) instead of the design's literal "$600 MXN" — so the number matches whatever was actually booked. "Get receipt" / "Get Invoice" are static text, not wired to anything (no real receipt/invoice generation in this demo).
- Two small alarm/clock icon layers in the tokens (positioned inside the Cancellation Policy area) had no corresponding visible content in the PNG and unclear purpose — skipped rather than guessed at.
- The card's bottom-rounded cap (`Rectangle 3641`, rounded only on top) hints the screen continues further below what's visible in this crop — stopped here; more may follow in a future batch.


## Design-system fix — dynamic card tint on the Booking Confirmation receipt

**Your feedback**: the `rgba(63,46,38,…)` brown wash behind the confirmation card's text (Location, Check-in Date, Guest fields, etc.) was a constant hardcoded color, but it needs to be derived per-workspace from that workspace's own photo — it only happened to look right because the workspace I tested with (Estudio Popnest Coyoacán) has a warm orange/brown photo.

**Fix**: new [`useDominantColor` hook](src/hooks/useDominantColor.js) — draws the workspace's hero photo onto a small offscreen canvas (24×24), averages every sampled pixel's RGB (a simple, dependency-free "main color" formula — not a full k-means dominant-cluster algorithm, which would be more accurate but is overkill for a demo), then darkens that average ~45% toward black (`darkenForOverlay`) so it stays legible as a translucent wash behind white text regardless of how bright the source photo is. Results are cached per image URL so it's only computed once. [MobileConfirmation.jsx](src/pages/MobileConfirmation.jsx) now uses this instead of the fixed brown for every pill/card background and the top photo-wash overlay, with a `transition-colors` so it doesn't hard-cut once the async extraction resolves.

Verified: Estudio Popnest Coyoacán (orange/teal photo) still reads warm brown-ish; Nomad Hub Santa Fe (blue photo) now reads cool blue-grey — confirmed the tint actually varies per workspace instead of being constant.


## Design-system fix — collapsed the three near-duplicate pinks into a two-color system

**Your feedback**: `#F82B9A`, `#F985C4`, and `#F955AE` were all in active use with no semantic rule distinguishing them.

**Resolution — two pinks, each with a clear role**, based on what their actual usages already mostly agreed on:
- **`#F82B9A` — Interactive/action pink.** Things you tap: map pins (`.map-pin`, `.map-dot`, `.map-pin--highlight` in `index.css`), the Hero "GO" button, the mobile "BOOK NOW" bar, the "DEAL" tag. Always solid/opaque.
- **`#F985C4` — Highlight/status pink.** Things that indicate state rather than being clickable themselves: gradient stops (paired with blue, across ~8 buttons/backgrounds), selected-row fills (Room Type, Time Picker toggle — both already used this at reduced opacity), star ratings, the checkbox accent, the testimonial quote bubble.

**Fixes applied** (3 spots where the same job was inconsistently colored):
1. [MobilePaymentCard.jsx](src/pages/MobilePaymentCard.jsx) — the "Selected" badge was the lone `#F955AE` usage in the whole app, doing the exact same "this one is chosen" job as Room Type's selected-row highlight. Changed to `#F985C4`, eliminating the third color entirely.
2. [PromoBar.jsx](src/components/landing/PromoBar.jsx) — its "GO" button was `#F985C4 @ 70%`, while the Hero's own "GO" button (same literal job, same literal label) was solid `#F82B9A`. Unified both to solid `#F82B9A` — verified side-by-side on Home, both now read as the same button.
3. [MobileConfirmation.jsx](src/pages/MobileConfirmation.jsx) — the decorative mini-map's pin dot used `#F985C4`, inconsistent with every real map pin elsewhere in the app (`#F82B9A`). Changed to match.

Left everything else as-is — the remaining `#F985C4` usages already fit the "highlight, not interactive" role cleanly, so no further changes were needed there. Scope note: this is a direct hex-value fix, not a full tokenization pass (no CSS custom properties introduced) — colors are still literal Tailwind arbitrary values throughout, consistent with the rest of the codebase's existing convention. Centralizing into real design tokens is a larger, separate change (flagged as issue #3 in the color critique) if you want to take that on next.


## Design-system fix — consolidated gradient proliferation into named, reusable tokens

**Your feedback**: at least 6 pink→blue gradient variants existed across the app with no canonical version — different angles, different stop percentages, all copy-pasted per screen from their own Figma export.

**Resolution**: new [`src/styles/gradients.js`](src/styles/gradients.js) exports three named, reused constants (Tailwind-ready class strings):
- `BRAND_GRADIENT` — `180deg, #566DAB 0%, #232C45 100%` (dark navy). This was already the most common variant (11 occurrences) so it became the canonical "page/card background" gradient. Now imported and reused by `MobileSpaceCard`, `GalleryCard`, `WhyCard`, `ReservationCard`, `MobileConfirmation` (×2), `MobilePaymentCard`, `MobileWorkspaceDetail`, `MobileNewCard`, `MobileCheckout`, and — fixing two real inconsistencies — `MobileRoomType` and `MobileDatePicker`, which had been using an unconfirmed `#566DAB→#8FA3D9` approximation (already flagged in this doc as "no exact token given") instead of matching every other screen in the same reservation flow. Those two now visually match Checkout/Payment/Confirmation instead of standing out.
- `BRAND_GRADIENT_LIGHT` — `180deg, #566DAB 33.17%, #7A9AC9 100%` (lighter blue, desktop detail-page cards). `AmenitiesCard` and `RatingCard` were using near-identical versions of this gradient with different stop percentages (33.17% vs 60%) for no stated reason — unified to one value, both imported from the shared constant.
- `CTA_GRADIENT` — `90deg, #F985C4 0%, #566DAB 100%` (primary button gradient). Already consistently reused 3× (`ReservationCard`, `MobileCheckout`'s BOOK NOW, `MobileConfirmation`'s Back to Home) — centralized into the shared constant so it can't drift going forward, even though there was no current inconsistency to fix here.

**Left untouched — confirmed exact tokens or genuinely distinct roles, not drift**:
- `WorkspaceHeader.jsx`'s `90deg, #F985C4 21.15%, #566DAB 50.96%` — the desktop `/workspace-map` page background, a confirmed exact Figma token (`gradient-2`).
- `MobileTimePicker.jsx`'s `180deg, #566DAB 45.19%, #F985C4 100%` — a confirmed exact token for that one screen's intentional "pink moment."
- `MobileMenu.jsx`'s translucent pink-flash panel gradient — a distinct role (glass overlay tint, not a page background).
- `KeepInMindCard`/`NeedToKnowCard`'s `rgba(86,109,171,0.8)→#232C45 87.5%` — a confirmed distinct token for those two desktop policy cards.
- `PromoBar`/`PerkBanner`'s `90deg, #F985C4→#7A9AC9` — already consistent with each other (2 identical uses), a legitimately different blue (`#7A9AC9`, not `#566DAB`) for these lighter marketing banners.
- `MobileNewCard`'s brown/tan Save Card button gradient and `MobilePaymentCard`'s per-card decorative gradients — separate concerns (an out-of-family color choice, and intentional per-card visual differentiation), not part of the "brand gradient" system.

**Scope note**: implemented as exported JS string constants (matching the codebase's existing local pattern, e.g. `WorkspaceHeader.jsx`'s prior `PAGE_GRADIENT`), not CSS custom properties — Tailwind v4's arbitrary-value gradient detection doesn't reliably resolve `var(--x)` as a background-image without an explicit `bg-[image:var(--x)]` cast, so plain JS constants were the lower-risk choice for this codebase's existing conventions.


## Design-system fix — centralized color tokens (root cause of #1 and #2)

**Your feedback**: every color was a hardcoded hex/rgba baked into Tailwind arbitrary-value classes scattered across ~15 files, with no single source of truth — the root cause behind both the duplicate-pink problem and the gradient proliferation fixed earlier.

**Fix**: audited every hex/rgba literal in the codebase (counted occurrences per color, checked context) and defined the reused ones as real Tailwind v4 theme tokens in [`index.css`](src/index.css)'s `@theme` block:

| Token | Hex | Role |
|---|---|---|
| `--color-brand-indigo` | `#566DAB` | primary blue (15 uses) |
| `--color-brand-navy` | `#232C45` | dark navy (gradient partner, card fills) |
| `--color-brand-navy-muted` | `#3C4C63` | muted navy (map pins, dividers, icons) |
| `--color-brand-blue-light` | `#7A9AC9` | lighter blue (gradient stops) |
| `--color-map-surface` | `#2B3550` | map panel background |
| `--color-pink-interactive` | `#F82B9A` | from the earlier pink fix |
| `--color-pink-highlight` | `#F985C4` | from the earlier pink fix |
| `--color-white-warm` | `#FFFBFB` | warm white text — also absorbed `#FFFCFC`, an imperceptibly-different near-duplicate white that had crept into the Payment/New Card screens |
| `--color-gray-muted` | `#A49F9F` | footer link text |
| `--color-overlay` | `#444444` | photo darkening overlay |
| `--color-label` / `--color-placeholder` / `--color-caption` | `#CBCACA` / `#8891A8` / `#D1D5DB` | secondary text roles (New Card labels/placeholders, space-card captions) |
| `--color-tag-lavender` | `#D7C9E8` | category tag background |

In Tailwind v4, tokens defined this way auto-generate `bg-*`/`text-*`/`border-*`/`fill-*` utilities (e.g. `--color-brand-indigo` → `bg-brand-indigo`, `text-brand-indigo`, ...), so every one of the ~60 usages across ~20 files was migrated from e.g. `bg-[#566DAB]` to `bg-brand-indigo`. `index.css`'s own `.map-pin`/`.leaflet-*` rules were updated to reference the same tokens via `var(--color-*)`. [`gradients.js`](src/styles/gradients.js) (from the earlier gradient-consolidation fix) was updated so its gradient strings reference these tokens too (`var(--color-brand-indigo)` instead of a hardcoded `#566DAB`), including two translucent cases (the menu drawer, the policy-card gradient) using `color-mix(in srgb, var(...) 90%, transparent)` since a CSS variable holding a hex can't be blended into an `rgba()` string directly.

**Left as literals (deliberately, not oversights)**: colors that appear exactly once with no reuse risk — the VISA logo's brand-blue (`#1A1F71`), the Save Card button's brown/tan gradient, the wheel-picker's falloff gray (`#E7E7E7`), and the per-card decorative gradients on the payment-card stack (mauve/lavender/gold — intentionally distinct per card, not brand colors).

**A real bug caught during this refactor**: Tailwind's class scanner reads source files as plain text — it cannot resolve a class name assembled via `` `bg-[${SOME_IMPORTED_CONSTANT}]` `` template interpolation, because the complete candidate string never appears literally in any single file. The first pass of this fix silently broke every gradient in the app (all rendered as plain white/transparent) despite passing lint and *appearing* to work in the dev server, because Vite's dev server was still serving CSS generated from before the refactor. A clean `vite build` caught it immediately. Fixed by making every `bg*Gradient` export in `gradients.js` a single complete literal string (`'bg-[linear-gradient(...)]'`) rather than building it from a separately-exported raw gradient constant — verified again with a from-scratch production build and a full visual sweep (Home, both map views, the whole reservation flow, the confirmation receipt, the desktop detail page's policy cards) before considering this done.


## Design-system fix — contrast floor for translucent white text

**Your feedback**: white text at reduced opacity (`white/70`, `/50`, `/40`) sits on top of gradients and the new photo-derived tint with no stated contrast floor to catch problems.

**Audit**: computed real WCAG contrast ratios (relative luminance formula, not a guess) for white text at every opacity level used in the app against every brand background color. Two backgrounds failed badly — `#7A9AC9` (brand-blue-light) and `#F985C4` (pink-highlight) — both under 3:1 for even **fully opaque** white text (2.88 and 2.29 respectively; AA normal text needs 4.5:1, large text needs 3:1). `#566DAB` (brand-indigo) passes at white/85+ but drops to 3.37 at white/70, marginal for small (11-13px) label text specifically.

**Fixes**:
1. **The dynamic photo tint** ([`useDominantColor.js`](src/hooks/useDominantColor.js)): `darkenForOverlay` no longer applies a flat "45% darker" — it now computes real WCAG relative luminance/contrast and keeps darkening in steps until the result is guaranteed ≥4.5:1 against white, however light or pastel the source photo is. If a photo is already dark enough, it now darkens it less (or not at all) instead of always applying the same flat reduction — a side benefit of doing the math properly instead of guessing a fixed percentage.
2. **The four real static-gradient failures** — [RatingCard](src/components/detail/RatingCard.jsx), [AmenitiesCard](src/components/detail/AmenitiesCard.jsx) (`#566DAB→#7A9AC9`), and [PromoBar](src/components/landing/PromoBar.jsx)/[PerkBanner](src/components/landing/PerkBanner.jsx) (`#F985C4→#7A9AC9`) — got a `bg-black/30` scrim layered between the gradient and the text (an overlay div, not a change to the gradient tokens themselves), bringing both problem colors to ~4.4-5.7:1. This was chosen over recoloring the confirmed Figma gradients directly, so the brand color itself stays exactly as specified anywhere else it might be reused — only these specific text-heavy usages get the readability fix.

**Stated contrast floor going forward** (previously nonexistent, per your point): secondary/label text should reach **≥4.5:1** against its immediate background; text ≥18px (or ≥14px semibold/bold) may use **≥3:1**. `#7A9AC9` and `#F985C4` are now flagged as backgrounds that need either a scrim or being reserved for large/heading text — anyone adding new text on either of them should check this section first.

**Left as a known, lower-severity item, not fixed**: `text-white/70` on plain `#566DAB` (3.37:1) is used for short labels across dozens of existing elements (filter labels, row labels). It's below the formal 4.5:1 floor for small text but is short/high-legibility label copy in practice; a blanket opacity bump would be a much larger, more visually disruptive change than the clear failures above, so it's documented here as tracked-but-not-yet-fixed rather than silently left undocumented.


## Design-system fix — a real button hierarchy (primary / secondary / tertiary)

**Your feedback**: 4 button treatments coexisted (pink→blue gradient / white outline / solid navy+border / brown-tan gradient) with no primary/secondary/tertiary convention — color told you which screen a button came from, not how important the action was.

**Audit**: found every button-like element in the app (37 instances) and classified each by what it actually does, not what color it happened to be. Two of the four treatments (solid navy+border, brown-tan gradient) turned out to have exactly **one instance each** — both of them genuinely primary, flow-ending actions ("Continue" on the card picker, "Save Card" on the new-card form) that had simply inherited whatever color their own Figma export specified, unrelated to their real importance.

**The system, going forward**:
- **Primary** — `bgCtaGradient` (pink→blue gradient, from the earlier gradient-consolidation fix). The one main action per screen: submit, confirm, book, continue, reserve, go home.
- **Secondary** — white/transparent fill with a visible white border. A real but non-primary action alongside a primary one (currently: "+ New Card" next to "Continue" on the card picker).
- **Tertiary** — plain text, no fill or border. Back links, dismiss/close, minor toggles. Already consistent app-wide, no changes needed.

**Converted to Primary** (previously inconsistent, now unified):
- [MobileDatePicker.jsx](src/pages/MobileDatePicker.jsx) & [MobileTimePicker.jsx](src/pages/MobileTimePicker.jsx) "Submit" — was a white outline, undersold as the *sole* action on those screens.
- [MobilePaymentCard.jsx](src/pages/MobilePaymentCard.jsx) "Continue" — was solid navy+border (the one-off "Group 3").
- [MobileNewCard.jsx](src/pages/MobileNewCard.jsx) "Save Card" — was the brown/tan gradient (the one-off "Group 4"), unrelated to the rest of the brand palette.
- [HeroSection.jsx](src/components/landing/HeroSection.jsx) & [PromoBar.jsx](src/components/landing/PromoBar.jsx) "GO" — were solid `pink-interactive`, a near-duplicate of the gradient CTA rather than the gradient itself; now the two identical-looking "GO" buttons on the same page actually share the same treatment.
- [MobileWorkspaceDetail.jsx](src/pages/MobileWorkspaceDetail.jsx)'s sticky "BOOK NOW" bar — same solid-pink-to-gradient fix.
- [Confirmation.jsx](src/pages/Confirmation.jsx) (desktop) "Buscar otro espacio" — was `bg-neutral-900`, the one place the desktop and mobile confirmation screens visibly disagreed on what a primary action looks like.

**Left alone, and why**: the "frosted glass" summary rows on Checkout and the Room Type selection list are a different UI pattern (editable fields / choosing among options), not discrete action buttons, so they weren't forced into this 3-tier system. `PromoBar`'s "GO" is a non-functional mock button (the form has no real submit handler, per its own code comment) — it still got the primary treatment so it visually matches the identical, working "GO" button in the Hero just above it, rather than looking broken or different for no visible reason.


## Design-system fix — out-of-family one-off colors, resolved

**Your feedback**: the Save Card button's brown/tan gradient and the VISA badge's navy don't relate to the brand palette at all.

- **Save Card's brown/tan gradient (`#7E7171`→`#E4CDCD`)**: already eliminated as a side effect of the button-hierarchy fix — it's now `bgCtaGradient` (the same primary pink→blue gradient as every other main action), since "Save Card" is a primary action and had no real reason to be a different color family in the first place. No further change needed.
- **VISA badge's navy (`#1A1F71`, [MobileNewCard.jsx](src/pages/MobileNewCard.jsx))**: kept as-is, deliberately. Unlike the brown gradient, this isn't drift — it's Visa's actual real-world brand color, used specifically so the small badge reads as an authentic card-network logo. Real checkout flows (Stripe, PayPal, etc.) always render card-network marks in their own official colors rather than reskinning them into the host site's palette; forcing this into the pink/indigo family would make it look *less* correct, not more, since "navy-blue VISA" is a recognizable trust signal people expect to see unchanged. Documented here as an intentional exception so it doesn't get "fixed" again later.


## Feature — Full internationalization (English/Spanish, everywhere)

**Your feedback**: only the desktop confirmation screen was in Spanish while the rest of the journey was English — the whole app should work fully in both languages, auto-detected by IP location on first visit, with a manual toggle to override.

**Architecture**:
- [`src/i18n/translations.js`](src/i18n/translations.js) — one flat `{en: {...}, es: {...}}` dictionary, ~180 keys, covering every user-facing string in the app: the landing page, both map views, the desktop and mobile workspace detail pages, the entire mobile booking flow (room type, date/time pickers, payment card, new card), the mobile menu drawer, and both confirmation screens (desktop and mobile) — including the desktop one, which was the original hardcoded-Spanish screen this whole request started from.
- [`src/context/LanguageContext.jsx`](src/context/LanguageContext.jsx) — a `LanguageProvider` (wraps the app in `main.jsx`, alongside the existing `BookingProvider`) exposing `{ language, setLanguage, t }`. `t(key, vars)` looks up the string in the current language (falling back to English, then to the raw key, if something's missing) and does simple `{{var}}` interpolation for values like counts, prices, and place names.
- **Auto-detection**: on first visit (no saved preference yet), calls a free IP-geolocation API and maps the visitor's country to `es` or `en` via a list of Spanish-speaking country codes. Falls back to `en` on any failure — no browser-language fallback layer, per your explicit choice of "real IP geolocation" over that alternative.
  - **Real bug found and fixed during this**: the first implementation used `ipapi.co`, which turned out to reject every browser request outright — it doesn't send an `Access-Control-Allow-Origin` header, so the fetch fails via CORS before it even reaches the try/catch's *intended* failure path (it still correctly fell back to English, but only because of the error handling, not because detection ever worked). Switched to `geojs.io`, which is built specifically for client-side geolocation and sends `Access-Control-Allow-Origin: *` — confirmed working end-to-end in the browser (verified the raw `fetch` call succeeds and returns a real `country_code`).
- **Manual toggle**: [`LanguageToggle.jsx`](src/components/LanguageToggle.jsx), a small EN/ES pill switcher. Selecting a language calls `setLanguage`, which persists it to `localStorage` (`popnest_language`) — a manual choice always wins over IP detection on future visits, and switching is instant (no reload). Placed in both requested spots: the desktop header chrome (`Navbar.jsx` — reachable on the desktop confirmation page and 404; `DetailHeader.jsx` on the desktop workspace-detail page; `WorkspaceHeader.jsx` on the desktop map page; `HeroSection.jsx`'s own header on Home, since Home/Map/Detail all use their own page-level chrome rather than the global `Navbar`) and the mobile menu drawer (the "🌍 Language" row in `MobileMenu.jsx`, previously static text, now a real toggle).

**Data-layer changes** (so translated data doesn't break other lookups): `data/workspaces.js`'s amenities, need-to-know rules, keep-in-mind rules, room types, tags, and reviews were converted from literal English strings to stable id/key references (e.g. `'wifi'`, `'roomType.dayPass'`) that both languages' dictionaries key off of. `AmenityIcon.jsx` was changed to look up its icon by that stable id instead of the (now-translatable) label text, so the icon set doesn't break when the label changes language. Month names in the date/time pickers are translated too (`Dic`, `Ene`, ...), including in the final "Dic 9, 2025" label written back onto the checkout URL.

**Known, deliberate scope boundaries**:
- A booking's stored `city`/`roomType`/date strings are snapshotted in whatever language was active *when the booking was made* — switching languages afterward doesn't retroactively translate a past booking's confirmation, the same way a real receipt wouldn't change language after the fact.
- A few default/placeholder values (the checkout screen's default check-in/out time before you've picked one, the desktop reservation form's default date/time field values) stay in English — they're editable input content, not fixed UI copy.
- A couple of screen-reader-only `aria-label`s (the hamburger menu's "Menu", the drawer's "Close menu"/"Back") weren't translated — genuinely lower priority than any visible text, flagged here rather than silently skipped.
