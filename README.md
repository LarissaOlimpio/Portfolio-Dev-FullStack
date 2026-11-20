# Larissa Olimpio — Portfolio

A bilingual portfolio for Larissa Olimpio, a full-stack developer. It presents her background, experience, education, engineering principles, volunteer work, and software and data projects in Portuguese and English.

## 30-second animated demo

The 16:9 demo highlights the portfolio’s profile, skills, experience, projects, and engineering values.

<video controls preload="metadata" poster="../portfolio-demo/public/images/larissa-portrait.jpg" width="100%">
  <source src="../portfolio-demo/public/larissa-portfolio-demo.mp4" type="video/mp4" />
  Your browser does not support embedded video. <a href="../portfolio-demo/public/larissa-portfolio-demo.mp4">Watch or download the demo video</a>.
</video>

[Watch or download the 30-second MP4](../portfolio-demo/public/larissa-portfolio-demo.mp4)

## Features

- **Portuguese and English:** Switch languages from the navigation. The selection is saved in local storage and updates the page language and social metadata.
- **Light and dark themes:** Toggle themes; the selection persists across visits.
- **Animated introduction:** Typewriter-style current-role line, profile image, and links to projects and LinkedIn.
- **About and skills:** Profile narrative and technology/toolkit list.
- **Experience:** Expandable cards for Embraer, Alura, and Supliu, with keyboard support.
- **Education:** Current and completed programs with status labels.
- **Featured projects:** Workout Tracker, Events API, and a digital-retail Business Intelligence project, with technology tags, video or browser previews, and repository links.
- **Engineering principles and volunteer work:** Sections about engineering practices, thoughtful AI use, learning, and ONE Next Education.
- **Contact and social links:** Navigation to the contact section, plus GitHub and LinkedIn links.
- **Responsive and accessible presentation:** Layout adapts to smaller screens, honors reduced-motion preferences, and includes semantic labels and visible keyboard focus.
- **Page metadata and fallback route:** Localized page/social metadata and a not-found page.

## Technologies

- React 19 and TypeScript
- Vite 7
- Wouter for client-side routing
- Framer Motion for animations and expandable experience cards
- Tailwind CSS 4 and custom CSS
- Radix UI primitives for reusable interface components
- Lucide React icons
- Plus Jakarta Sans and DM Mono fonts
- Browser local storage for language and theme preferences

The portfolio is a frontend-only application; its profile, experience, education, skills, and project content is maintained in TypeScript data files.

## Run locally

From the workspace root:

```sh
pnpm install
pnpm --filter @workspace/larissa-portfolio run dev
```

Build the production site:

```sh
pnpm --filter @workspace/larissa-portfolio run build
```

The Vite configuration accepts optional `PORT` and `BASE_PATH` environment variables. Their defaults are `5173` and `/`.

## Credits

This portfolio and its animated demonstration were created with the help of **Replit’s AI**.
