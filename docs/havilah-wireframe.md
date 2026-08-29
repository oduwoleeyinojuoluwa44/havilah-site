# Havilah Development — Homepage Wireframe
Content constraint: only existing copy/images from havilahdevelopment.com. No invented fields (no floor plans, unit pricing, or new descriptions).

---

## 1. Navigation

**Structure**
```
HAVILAH                         Properties   About   Management   Contact   [Book an Inspection]
```

- Sticky/persistent across scroll (currently mix-blend-mode difference nav — keep the treatment, simplify the link list)
- Collapse to hamburger on mobile, same as now
- Drop from top nav: "Approach", "Testimonials" (both fold into other sections below, don't need their own nav slot)
- "Book an Inspection" stays visually distinct (button, not a text link) — it already is

---

## 2. Hero

**Layout:** full-bleed image crossfade (keep the 4 existing hero images), veil gradient, centered copy — structure unchanged.

**Copy hierarchy (reordered, same words available on the page already elsewhere — reuse, don't invent):**
```
HAVILAH
Building dreams, shaping communities

[Explore Properties]   [Book an Inspection]

7+ Years of trusted development
```

- Two buttons instead of one: "Explore Properties" (scrolls to grid) becomes the primary discovery path; "Book an Inspection" stays as the direct-conversion path
- Drop the standalone "Seven years of trusted development" line as isolated text — fold it into a small stat under the buttons instead, so it reads as credibility, not filler

---

## 3. Currently Developing (NEW POSITION — moved up from near-bottom)

This section already exists on the page as "THE RESIDENCES / THE TERRACES" — just relocated to directly after the hero instead of appearing after Testimonials.

**Content (all existing):**
```
CURRENTLY DEVELOPING

HAVILAH COURT 5
Beach Resort Estate, Lekki  ·  Ongoing

[large image — hero flag-01.jpg or proj-havilah-5.jpg]

"Four semi-detached homes, nineteen four-bedroom terraces and
sixteen apartments, with a gym, swimming pool and children's
play area."

[Book an Inspection]
```

- No new content added — this is the exact copy currently under "THE RESIDENCES / THE TERRACES", just moved and given a clearer section label
- This answers "what can I get right now" before asking the visitor to read company history

---

## 4. Our Projects — Filterable Grid (structural change, same 9 projects)

**Filter bar:**
```
[ All ]  [ Ongoing ]  [ Completed ]  [ Pipeline ]
```

**Grid card (repeats for all 9 existing projects — Koinonia, Havilah Court 1–5 + Annex, Homewood Residences, Havilah Court 6):**
```
┌────────────────────────┐
│                        │
│      [image]           │
│                        │
├────────────────────────┤
│ COMPLETED 2023          │  ← status + year, exactly as currently shown
│ Havilah Court 4         │
│ Jakande First Gate,     │
│ Lekki                   │
└────────────────────────┘
```

**Tap/click → expands to modal/panel (mobile: full-screen sheet):**
```
[large image]

COMPLETED 2023
Havilah Court 4
Jakande First Gate, Lekki

"Nine four-bedroom terraces and three apartments.
Fitted modern kitchens, all bedrooms en-suite and
a dedicated maid's room."

[Book an Inspection]   ← pre-fills "Havilah Court 4" into the inspection form
```

- Track record numbers (09 Developments / 06 Completed / 02 Ongoing / 01 Pipeline) sit as a small stat strip above the filter bar — this content already exists on the page, just repositioned as the section's opener instead of buried mid-scroll
- No project loses any existing copy — it just becomes tap-to-reveal instead of always-visible

---

## 5. The Havilah Way (was "Designed to Stand Out / Built to Last / Managed for Life")

**Existing copy, restructured from three large standalone statements into a numbered, explained sequence:**
```
WHAT MAKES HAVILAH DIFFERENT

01  DESIGN
    Bold facades, layered stone and clean white volumes:
    architecture that reads as a signature, not a template.

02  BUILD
    Delivered structures you can walk through, not just render.

03  MANAGEMENT
    Property management keeps every investment maintained
    and continuously valuable, long after handover.
```

- Every line of copy here already exists on the current page under the three headline statements — this just gives them a shared frame ("what makes us different") instead of presenting three disconnected headlines

---

## 6. About Havilah (trimmed)

Current "Built on trust, one relationship at a time" section is 4 long paragraphs. Reduce to first + last paragraph only (both already written), rest available via a "Read more" expand or moved to a dedicated About page later.

```
ABOUT HAVILAH

"Havilah Development and Management Services Limited is a real
estate development company with over seven years of experience
delivering quality, well-designed properties across Lagos."

[Read more ▾]  (expands remaining existing paragraphs)

[image: courtyard.jpg or completed-2.jpg alongside]
```

Note: swap "across Nigeria" language to "across Lagos" per the earlier footprint discussion — this is a factual correction, not new copy invention, since Ikate/Agungi/Lekki/Jakande are the only locations the existing content actually names.

---

## 7. More Than a Developer (was "Beyond Development")

Existing copy, kept as-is, just repositioned earlier (after About, not near the very end):

```
MORE THAN A DEVELOPER
We stay long after handover.

Facility & property management
Maintenance & long-term upkeep
Value preservation for investors
Design-to-management quality control

[image: completed-1.jpg]
```

---

## 8. Where We Build (was "Building Across Nigeria")

**Renamed per the footprint correction above.** Content is otherwise identical to current:

```
WHERE WE BUILD

Rooted in well-connected neighbourhoods, minutes from the major
corridors, established estates and the daily conveniences that
make an address worth keeping.

2017  First delivery
Today Two ongoing, one in pipeline
```

- Drop "Nationwide / Where next" language — not supported by current portfolio (all Lekki/Ikate/Agungi)

---

## 9. Homeowner Stories (was "Testimonials")

**Current:** 6 testimonial blocks, but only 3 unique statements, each repeated once, all "Anonymous."

**New:** show the 3 unique statements once each, no repetition:

```
"Updates received during the building phase. Structured
payment plan, flexibility and solution driven team when
challenges arise."
— Havilah Homeowner, June 2025

"Seeing that the house level was elevated and underground
drainage put in place to mitigate issues around flood."
— Havilah Homeowner, June 2025

"The personal touch in service delivery."
— Havilah Homeowner, June 2025
```

- No names/photos added since none exist in current content — flag to the client separately that named testimonials would strengthen this section, but don't fabricate attribution now

---

## 10. Final CTA

Unchanged from current — already the strongest closing section on the page:

```
Havilah Development & Management Services Ltd.

Built on trust one project at a time

A short conversation is enough to understand which property
fits: a family home, an investment, or a place to put down roots.
Come and walk the site with us.

[Book an Inspection]
```

---

## 11. Footer

Unchanged — existing contact/links content, no structural change needed.

---

## Full Page Order (top to bottom)

1. Navigation (persistent)
2. Hero
3. Currently Developing — Havilah Court 5 *(moved up)*
4. Our Projects — filterable grid *(new interaction, existing content)*
5. The Havilah Way *(reframed)*
6. About Havilah *(trimmed)*
7. More Than a Developer *(moved up)*
8. Where We Build *(renamed, geography corrected)*
9. Homeowner Stories *(deduplicated)*
10. Final CTA
11. Footer

---

## Inspection Form — one functional change

Add a hidden/pre-filled "Property of interest" field on `inspection.html`, populated from whichever project card's "Book an Inspection" button was clicked. Falls back to blank/"General enquiry" when reached via nav or final CTA. No new UI needed beyond what the form already has — this is a data-passing change, not a redesign of the form itself.
