# Design QA — Silvia's Hair

## Comparison target

- Source visual truth: `references/direcao-escolhida.png`
- Rendered implementation: `qa/final-desktop.png`, plus the revised section captures under `qa/revision-desktop-*.png`
- Side-by-side normalized comparison: `qa/comparison-final.png`
- Revision before/after comparison: `qa/revision-comparison.png`
- Latest user-feedback comparison: `qa/revision2-comparison.png`
- Latest editorial-results and review-identity comparison: `qa/revision3-comparison.png`
- Latest public-reviewer-name comparison: `qa/revision4-comparison.png`
- Latest Instagram-footer simplification comparison: `qa/revision5-comparison.png`
- Latest Rio Poty rating-summary comparison: `qa/revision6-comparison.png`
- Desktop viewport: 1440 × 1024 CSS px, device pixel ratio 1
- Source pixels: 1536 × 1024
- Implementation pixels: 1425 × 1013. The in-app browser capture excludes the 15 px scrollbar and 11 px browser edge; the comparison was padded/cropped to the 1440 × 960 content target and normalized to 720 × 480 per side.
- Mobile viewport: 390 × 844 CSS px, device pixel ratio 1
- Mobile implementation pixels: 375 × 812, excluding the browser scrollbar and edge.
- State: homepage top-of-page plus results, moving gallery, reviews carousel, units, and mobile anchor states.

## Findings

- No actionable P0, P1, or P2 differences remain.
- The implementation preserves the selected editorial composition: slim dark header, image-led hero, left-aligned high-contrast display copy, restrained gold accent, and the dark-to-beige transition into the introduction.
- The expanded page follows the requested beige, black, and restrained-gold system through services, results, Google reviews, units, final CTA, and footer.
- The redundant standalone location block and its navigation item were removed; location and map actions now live together inside the units section.
- Results now show five images in the main composition. The lower gallery remains continuous, with a service/Instagram strip occupying the former empty band.
- The numeric Google score was removed. Six public review snippets now rotate automatically with pause, dots, and previous/next controls.
- The four supporting result images now use a full-width horizontal row and source-matched landscape ratios; they are no longer compressed into narrow portrait cells.
- Reviews now identify both Teresina Shopping and Shopping Rio Poty, and the primary “Ver mais trabalhos” CTA points directly to the Silvia's Hair Instagram profile.
- Reviewer avatar initials remain removed. Attribution now uses only full names displayed publicly on the corresponding Google Maps listing, together with the unit and source.
- Google Maps was subsequently checked directly for both units. Six positive reviews now use publicly visible full reviewer names, with three entries from Teresina Shopping and three from Shopping Rio Poty; no initials were expanded or identities inferred.
- The review stage reserves enough height for the longest quote on desktop and mobile, preventing carousel content from shifting the surrounding layout as slides change.
- The gallery footer now contains only one centered “Ver mais no Instagram” action. The service-category text was removed on desktop and mobile, leaving a quieter, more focused transition into reviews.
- The review header restores a compact star-rating summary using Shopping Rio Poty's stronger 4.7 Google Maps rating. The score remains secondary to the title and review content, while the carousel continues to represent both units.
- The former result strip was replaced by a spacious five-photo editorial mosaic: one dominant feature, two large stacked landscapes, and two wide closing images with restrained service captions.
- Residual P3 differences are acceptable: the generated salon hero does not reproduce the exact furniture and wall signage of the reference image; the about-image crop and a few fine navigation spacings vary slightly. These differences are inherent to using a newly generated, original photographic asset while retaining the same art direction.

## Full-view comparison evidence

- `qa/comparison-final.png` places the selected reference and the final desktop implementation in one normalized frame.
- Overall hierarchy, hero height, headline scale, CTA placement, dark/beige balance, and the start of the following section align closely.
- Additional captures verify the updated implementation beyond the reference's visible fold: `qa/revision-desktop-results.png`, `qa/revision-desktop-works.png`, `qa/revision-desktop-reviews.png`, and `qa/revision-desktop-units.png`.

## Focused-region evidence

- Header, hero, and about-section transition were reviewed at readable scale in `qa/final-desktop.png` and `qa/comparison-final.png`.
- Results, gallery footer, reviews, and units were reviewed together in `qa/revision-comparison.png`, which places their before and after captures in the same comparison input.
- The latest results and reviews changes were reviewed together in `qa/revision2-comparison.png`; it includes the prior compressed grid, the new top composition, the expanded four-image strip, the Teresina Shopping review state, and the mobile result state.
- The final editorial refinement was reviewed in `qa/revision3-comparison.png`, combining the former strip and initials state with the new desktop mosaic, honest review labels, and the single-column mobile composition.
- The public-name refinement was reviewed in `qa/revision4-comparison.png`, which pairs the prior anonymous label with the new named desktop state and a focused mobile named-review state.
- The gallery-footer simplification was reviewed in `qa/revision5-comparison.png`, pairing the former split category/CTA band with the centered single-action desktop and mobile states.
- The unit-rating refinement was reviewed in `qa/revision6-comparison.png`, pairing the prior generic star context with the explicit Rio Poty 4.7 desktop and mobile states.
- Mobile anchor placement and responsive review/results states were checked in `qa/revision-mobile-results.png` and `qa/revision-mobile-reviews.png`.

## Required fidelity surfaces

- Fonts and typography: Cormorant Garamond provides the elegant editorial display voice; Manrope handles navigation, body text, controls, and labels. Weight, line height, wrapping, and optical hierarchy were checked at desktop and mobile sizes.
- Spacing and layout rhythm: hero proportions, content offsets, section padding, alternating backgrounds, grid gaps, card radii, and vertical rhythm were checked against the selected direction.
- Colors and visual tokens: beige is the primary light surface, near-black supplies contrast, and muted gold is limited to fine lines, icons, stars, button details, and hover accents. No glow, glassmorphism, loud gradients, or excessive gold borders are present.
- Image quality and asset fidelity: all visible photography uses real raster assets sized and cropped for its slot. Generated hero, about, and result imagery follows the warm, premium salon direction and remains sharp at target sizes.
- Copy and content: service, results, units, contact, and review copy is realistic and in Portuguese. Public review snippets are included without making a numeric score the visual focus.

## Primary interactions and technical checks

- Desktop navigation scrolls to the correct sections.
- Mobile menu opens, closes, and navigates correctly.
- Results gallery auto-animates on desktop and becomes manual horizontal touch-scroll with snap points on mobile.
- Reviews advance automatically every 4.6 seconds, pause on hover/focus, and respond to manual arrow and dot controls.
- Anchor navigation reserves the fixed header height on desktop and mobile; section headings are not obscured.
- The results section contains five images, the reviews carousel exposes six slides, and no standalone location section remains.
- The main results CTA resolves to `https://www.instagram.com/silvias_hair/` in a new tab.
- WhatsApp and Google Maps destinations are wired to real external URLs.
- Browser console check: 0 warnings and 0 errors.
- Production build and Sites readiness tests passed.

## Comparison history

1. First comparison
   - Earlier P2 finding: the 960 px hero made the above-the-fold composition too tall and pushed the beige introduction below the reference position.
   - Fix: reduced the hero to 728 px, constrained content width, and recalibrated the dark/beige transition.
   - Post-fix evidence: `qa/final-desktop.png` and `qa/comparison-final.png`.
2. Second comparison
   - Earlier P2 finding: hero content sat too high and the about heading wrapped differently from the reference, weakening the editorial rhythm.
   - Fix: adjusted hero top padding to 214 px, about spacing to 66 px, aligned the introduction to the top, and tuned the about heading to 50 px.
   - Post-fix evidence: `qa/comparison-final.png`; the headline, CTA, and introduction now occupy the same visual bands as the selected direction.
3. User-feedback revision
   - Earlier P2 findings: duplicated location presentation, numeric score competing with review content, only three static reviews, only three main result images, and unused vertical space below the moving gallery.
   - Fixes: consolidated location into units, replaced one repeated-logo unit image with an interior image, removed the score, added six rotating reviews with controls, expanded the main results composition to five images, and added the service/Instagram strip below the gallery.
   - Post-fix evidence: `qa/revision-comparison.png`, `qa/revision-mobile-results.png`, and `qa/revision-mobile-reviews.png`.
4. Responsive navigation correction
   - Earlier P2 finding: a section title could sit beneath the fixed header when reached by an anchor on mobile.
   - Fix: added fixed-header-aware `scroll-margin-top` values for desktop and mobile.
   - Post-fix evidence: `qa/revision-mobile-results.png`, where the eyebrow and complete title remain visible below the header.
5. Results proportion and review-source correction
   - Earlier P2 findings: four result images were squeezed into narrow two-column cells, the main CTA still navigated to the internal gallery, and all visible review entries were labeled Shopping Rio Poty.
   - Fixes: moved the four supporting images into a full-width landscape row using near-source aspect ratios, changed the CTA to the official Instagram profile, and added a public Teresina Shopping review as the first carousel entry while retaining Rio Poty entries.
   - Post-fix evidence: `qa/revision2-comparison.png`, `qa/revision2-desktop-results-strip.png`, `qa/revision2-desktop-reviews.png`, and `qa/revision2-mobile-results-strip.png`.
6. Editorial results and reviewer-identity refinement
   - Earlier P2 findings: abbreviated reviewer initials felt artificial, while the wide result strip still read as a collection of cropped thumbnails instead of a premium portfolio.
   - Fixes: removed avatar initials and replaced them with transparent unit-specific customer labels; rebuilt the five result photographs as a large, asymmetrical editorial mosaic with service captions and more generous crops.
   - Post-fix evidence: `qa/revision3-comparison.png`, `qa/revision3-desktop-results-top.png`, `qa/revision3-desktop-results-bottom.png`, `qa/revision3-desktop-reviews.png`, and `qa/revision3-mobile-mosaic.png`.
7. Public reviewer names
   - Earlier P2 finding: the honest anonymous fallback still felt less credible because Google Maps exposes full public names on several reviews.
   - Fixes: replaced all six anonymous entries with directly verified public names and matching review text, balanced evenly across both units, and stabilized the carousel height for longer real-world quotes.
   - Post-fix evidence: `qa/revision4-comparison.png`, `qa/revision4-desktop-reviews.png`, `qa/revision4-mobile-reviews.png`, and `qa/revision4-mobile-review-focus.png`.
8. Instagram footer simplification
   - Earlier P2 finding: the service-category list added visual noise and competed with the portfolio CTA in the gallery footer.
   - Fixes: removed the category list and centered the Instagram action as the sole element in the band at every breakpoint.
   - Post-fix evidence: `qa/revision5-comparison.png`, `qa/revision5-desktop-instagram-footer.png`, and `qa/revision5-mobile-instagram-footer.png`.
9. Rio Poty rating summary
   - Earlier P2 finding: the review header's stars had no unit-specific meaning after the numeric summary was removed.
   - Fixes: restored a restrained 4.7 rating beside five gold stars and simplified the visible label to “Avaliações no Google”, without altering the mixed-unit carousel.
   - Post-fix evidence: `qa/revision7-desktop-rating-label.png` and `qa/revision7-mobile-rating-label.png`.

## Follow-up polish

- Optional P3: commission a location-specific hero photograph containing the real Silvia's Hair wall sign for exact brand-environment fidelity.

final result: passed
