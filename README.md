<div align="center">

# Larissa Olimpio — Portfolio

**A bilingual portfolio for a full-stack developer**
Portuguese 🇧🇷 · English 🇺🇸

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

[Demo](#-30-second-animated-demo) · [Features](#-features) · [Tech stack](#-tech-stack) · [Run locally](#-run-locally) · [Structure](#-project-structure)

</div>

---

## 📖 About

This portfolio presents the background, experience, education, engineering principles, volunteer work, and software and data projects of Larissa Olimpio, a full-stack developer. Everything is available in **Portuguese and English**, with light and dark themes.

## 🎬 30-second animated demo

A 16:9 walkthrough of the profile, skills, experience, projects, and engineering values.

https://github.com/user-attachments/assets/39642ffc-eee6-43a1-8d58-9812e7eda617

## ✨ Features

| | Feature | Details |
|---|---|---|
| 🌐 | **Bilingual** | Switch between Portuguese and English from the navigation. The choice is saved in local storage and updates the page language and social metadata. |
| 🌗 | **Light and dark themes** | Toggle themes; the selection persists across visits. |
| ⌨️ | **Animated introduction** | Typewriter-style current-role line, profile image, and links to projects and LinkedIn. |
| 🧰 | **About and skills** | Profile narrative and a technology/toolkit list. |
| 💼 | **Experience** | Expandable cards for Embraer, Alura, and Supliu, with keyboard support. |
| 🎓 | **Education** | Current and completed programs with status labels. |
| 🚀 | **Featured projects** | Workout Tracker, Events API, and a digital-retail Business Intelligence project, with technology tags, video or browser previews, and repository links. |
| 🧭 | **Principles and volunteer work** | Engineering practices, thoughtful AI use, continuous learning, and ONE Next Education. |
| 📬 | **Contact and social links** | Contact section, plus GitHub and LinkedIn. |
| ♿ | **Responsive and accessible** | Adapts to smaller screens, honors reduced-motion preferences, and includes semantic labels and visible keyboard focus. |
| 🔎 | **Metadata and fallback route** | Localized page and social metadata, and a not-found page. |

## 🛠 Tech stack

| Area | Tools |
|---|---|
| **Core** | React 19, TypeScript, Vite 7 |
| **Routing** | Wouter |
| **Animation** | Framer Motion |
| **Styling** | Tailwind CSS 4, custom CSS |
| **UI primitives** | Radix UI, Lucide React icons |
| **Typography** | Plus Jakarta Sans, DM Mono |
| **Persistence** | Browser local storage (language and theme) |

> The portfolio is a **frontend-only** application. Profile, experience, education, skills, and project content live in TypeScript data files.

## 💻 Run locally

**Requirements:** Node.js and [pnpm](https://pnpm.io/).

From the workspace root:

```sh
# Install dependencies
pnpm install

# Start the dev server
pnpm --filter @workspace/larissa-portfolio run dev
```

Build the production site:

```sh
pnpm --filter @workspace/larissa-portfolio run build
```

The Vite configuration accepts optional environment variables:

| Variable | Default | Purpose |
|---|---|---|
| `PORT` | `5173` | Dev server port |
| `BASE_PATH` | `/` | Base path for the built site |

## 🗂 Project structure

This repository is a **pnpm monorepo**. The portfolio app lives in `artifacts/larissa-portfolio`.

```text
.
├── artifacts/
│   ├── larissa-portfolio/   # Portfolio app (React + Vite)
│   ├── portfolio-demo/      # Animated demo video components
│   ├── api-server/
│   └── mockup-sandbox/
├── lib/
├── scripts/
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

## 🙌 Credits

This portfolio and its animated demonstration were created with the help of **Replit's AI**.
