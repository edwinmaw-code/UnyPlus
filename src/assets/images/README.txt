IMAGES — UnyPlus
================

General-purpose images used across the app — illustrations, UI graphics,
onboarding visuals, and any raster content that is not a logo or background.

Expected formats:
  .png   — for images that need transparency
  .jpg   — for photos or images without transparency (smaller file size)
  .webp  — preferred when targeting modern Electron/Chromium builds
  .svg   — for flat illustrations that need to scale cleanly

Naming convention:
  [section]-[descriptor].[ext]

  Examples:
    onboarding-upload-illustration.svg
    onboarding-welcome-graphic.png
    dashboard-empty-state.svg
    quiz-result-star.png
    studyspace-empty-state.svg

Guidelines:
  - Keep file sizes small. Compress PNGs and JPGs before adding.
  - Do NOT store logos here — use src/assets/logo/ instead.
  - Do NOT store background patterns or textures here — use src/assets/backgrounds/.
  - Avoid images that embed text (the text cannot be translated or resized).
  - Prefer SVG illustrations for empty states and onboarding screens.

Subdirectories (create as needed):
  images/onboarding/   — visuals used only in the onboarding flow
  images/dashboard/    — visuals used only on the dashboard
  images/studyspace/   — visuals used only in the Study Space / Quiz sections
