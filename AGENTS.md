# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Silvia's Hair design decisions

- The selected visual target is `references/direcao-escolhida.png`; preserve it as the baseline rather than replacing it.
- Use beige as the light base, black/charcoal for contrast, and gold only for restrained accents such as rules, icons, button details, dividers, and hover states.
- The site should feel elegant, modern, careful, exclusive, and light while remaining a natural evolution of the previous Silvia's Hair site.
- Avoid bright yellow, flashy gradients, glassmorphism, glow, casino-style luxury, excessive gold borders, decorative clutter, and generic AI-template styling.
- The hero uses a salon photograph with a soft black overlay, light copy, and a CTA with a gold detail.
- Results and the continuous gallery use a black background with large photography and small gold accents. Keep at least five photos in the main results composition, and give supporting images enough width to preserve their natural landscape crops instead of squeezing them into narrow portrait cells.
- The main “Ver mais trabalhos” action should open the official Silvia's Hair Instagram profile, where the current portfolio lives.
- Google reviews are mandatory; integrate them into the beige surface with gold stars and lightweight separators instead of heavy cards. Do not make the numeric score the visual focus, keep the reviews moving automatically with at least six entries plus manual controls, and represent both Teresina Shopping and Shopping Rio Poty.
- The compact rating summary should use Shopping Rio Poty's 4.7 rating with four full gold stars and a fifth star filled to 70%, but label the source simply as “Avaliações no Google”; keep the carousel itself balanced across both units.
- Preserve Liliane Mayumi's verified public 4-star Teresina Shopping review and render each carousel review's actual star count, using a muted outline for any unfilled star.
- Use consistent 16px rounded corners on content photography (about, results, moving gallery, and unit cards); keep full-bleed hero and final CTA imagery square to the viewport.
- Keep the primary results area to six bookable procedures—Megahair, Penteado, Maquiagem, Noiva, Nail Design, and Corte Masculino—each with a direct WhatsApp action and a procedure-specific prefilled message; use the verified original-site photographs for the last two.
- Style each result name as an editorial label: restrained gold “Procedimento” eyebrow with a short rule and a large Cormorant Garamond title; avoid heavy badges or template-like treatments.
- In the results header, “Ver mais procedimentos” should scroll to the `#mais-trabalhos` carousel; reserve the Instagram destination for the centered CTA beneath that carousel.
- Use the real `silvia-meneses.png` portrait in the About section; do not replace it with generated salon imagery.
- Prioritize full reviewer names when they are directly and publicly verifiable on Google Maps. Never expand initials or invent identities; use a transparent unit-specific anonymous label only when no public full name is available.
- Present the five main result photographs as a spacious editorial mosaic with large landscape crops and subtle service captions; avoid squeezed strips, tiny cards, or uniform grids that diminish the work.
- Keep location details and Google Maps actions inside the units section instead of repeating them in a separate location block. Avoid stacking repeated storefront logos; use an interior image for one of the units when necessary.
- Keep the band below the continuous gallery minimal: remove the service-category list and center a single “Ver mais no Instagram” CTA.
- On mobile, keep a restrained “Deslize para o lado” cue with a small animated arrow immediately above the horizontally scrollable work gallery; hide it on larger screens and respect reduced-motion preferences.
- The footer is black with beige/white text and small gold accents.
