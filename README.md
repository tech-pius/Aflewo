# AFLEWO — Immersive rebuild v2

A from-scratch Next.js/TypeScript/Tailwind/GSAP redesign of AFLEWO.

## What changed
- Real uploaded AFLEWO photography is used locally across the experience.
- Scroll-pinned cinematic hero changes imagery and message as the visitor scrolls.
- Persistent, draggable/minimizable YouTube worship player.
- Functional routes for Worship, Prayer, Community, Partnership, Gallery, Team, Chapters, Resources and Contact.
- Gallery supports photo archive now and video archive structure.
- Footer has organization links, policies, social configuration and contact pathways.
- Contact forms use a mailto fallback until AFLEWO provides a production form/email endpoint.
- WhatsApp/phone placeholders are intentionally not invented; add official details in `data/aflewo.ts`.
- Historical information is based on the original AFLEWO site and is labelled as archive/history where appropriate.

## Run
```bash
npm install
npm run dev
```

## Production notes
Replace placeholders with AFLEWO-approved current contacts, social URLs, privacy/terms/cookie text, current registration link, current chapter/event data and any approved official photography/video embeds.
