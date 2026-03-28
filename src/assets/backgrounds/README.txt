BACKGROUNDS — UnyPlus
=====================

Background images, patterns, gradients, and textures used as full-page or
section-level backgrounds. Two distinct visual modes exist in UnyPlus:

  1. PROFESSIONAL mode   — Clean, minimal. Used on all pages except the Quiz flow.
  2. GAMIFIED mode       — Energetic, vibrant. Used ONLY inside the Quiz flow.
     (See docs/BRAND.md → Design Personality for the rule.)

Expected formats:
  .svg   — preferred for geometric patterns, gradients, and abstract shapes (scalable)
  .png   — for textured or photographic backgrounds that cannot be SVG
  .webp  — acceptable for photographic backgrounds targeting Electron/Chromium

Naming convention:
  bg-[mode]-[descriptor].[ext]

  Examples:
    bg-pro-subtle-grid.svg         — light geometric grid for professional pages
    bg-pro-auth-gradient.svg       — gradient used on login / onboarding screens
    bg-quiz-confetti-pattern.svg   — repeating confetti tile for the quiz environment
    bg-quiz-results-burst.svg      — radial burst graphic on the quiz results screen
    bg-studyspace-ambient.svg      — ambient background for the Study Space page (professional)

Guidelines:
  - NEVER apply a gamified background to any page outside the Quiz flow.
  - SVG backgrounds should use currentColor or hardcoded brand tokens — no embedded bitmaps.
  - Keep file sizes minimal: background assets load on every render.
  - Backgrounds should not contain text.
  - If a background is defined purely in CSS/Tailwind (e.g. a solid color or a CSS gradient),
    no file is needed here — only store files for visuals that cannot be done in CSS alone.
