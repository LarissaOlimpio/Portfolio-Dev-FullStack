# Larissa Olimpio — Portfolio

A bilingual personal portfolio for Larissa Olimpio, a full-stack developer based in São José dos Campos, Brazil. The site presents her professional experience, education, technical skills, engineering principles, volunteer work, and selected software and data projects in Portuguese and English.

## Features

- **Portuguese and English:** Switch languages from the navigation. The selected language persists in local storage and updates the document language and social metadata.
- **Light and dark themes:** Toggle between themes; the preference persists across visits.
- **Responsive portfolio homepage:** Fixed, translucent navigation; animated introduction with typed “currently at” line; illustrated portrait; smooth section navigation.
- **About and skills:** Profile narrative with a technology/toolkit cloud.
- **Experience:** Expandable experience cards covering Embraer, Alura, and Supliu.
- **Education:** Current and completed programs with status labels.
- **Project showcase:** Workout Tracker, Events API, and a digital-retail Business Intelligence project, including project technologies, preview media, and repository links.
- **Principles and community:** Engineering approach, thoughtful AI use, learning, and ONE Next Education volunteer work.
- **Contact and social links:** GitHub and LinkedIn destinations plus a contact invitation.
- **Accessible motion and metadata:** Reduced-motion support, visible keyboard focus, semantic labels, and page/social metadata updated with the active language.
- **30-second animated demo:** A 16:9, five-part film built from the portfolio's identity and original project/portrait assets, with an original instrumental music bed.

## Watch the 30-second demonstration

The video below is an MP4 montage with animated framing and feature captions. The Replit video artifact also contains the full motion-graphics implementation and soundtrack.

<video controls preload="metadata" poster="./public/images/larissa-portrait.jpg" width="100%">
  <source src="./public/larissa-portfolio-demo.mp4" type="video/mp4" />
  Your browser does not support embedded video. <a href="./public/larissa-portfolio-demo.mp4">Download the demo video</a>.
</video>

## Technologies

### Portfolio application

- React with TypeScript
- Vite
- Wouter routing
- Framer Motion
- Lucide icons
- Tailwind CSS and custom CSS
- Plus Jakarta Sans and DM Mono
- Browser local storage for language and theme preferences

### Animation demonstration

- React and TypeScript, rendered with Vite
- Framer Motion for timed scene and transition choreography
- Replit video scaffold primitives and playback/recording lifecycle
- Original synthesized MP3 soundtrack

## Project layout

- `artifacts/larissa-portfolio/` — source portfolio application
- `artifacts/portfolio-demo/` — animated demonstration and this README
- `artifacts/portfolio-demo/SCRIPT.md` — full director's treatment, audio specification, and shot-by-shot script
- `artifacts/portfolio-demo/public/audio/bg_music.mp3` — original demo soundtrack
- `artifacts/portfolio-demo/public/larissa-portfolio-demo.mp4` — downloadable 30-second MP4 overview

## Run locally

From the portfolio app directory:

```sh
npm run dev
```

The animation lives in its own Replit video artifact and uses the workspace's managed video preview/export flow.

## Credits

Portfolio content and project details are based on Larissa Olimpio's portfolio source. The animated demonstration and this project documentation were created with the help of **Replit's AI**.
