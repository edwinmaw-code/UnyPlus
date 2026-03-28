ICONS — UnyPlus
===============

This folder is for CUSTOM icons only — icons that are not available in the
project's chosen icon library (see docs/BRAND.md → Iconography).

Do NOT store library icons here (e.g. Lucide, Phosphor, Heroicons are
imported directly from npm — they do not need files here).

When to add a file here:
  - The icon is unique to UnyPlus and does not exist in the icon library.
  - A brand-specific glyph is needed (e.g. a custom "study mode" symbol).

Expected formats:
  .svg  (strongly preferred — scalable, styleable with CSS/Tailwind)
  .png  (only if SVG is not available; provide @1x and @2x versions)

Naming convention:
  icon-[descriptor].[ext]

  Examples:
    icon-study-buddy.svg
    icon-quiz-lightning.svg
    icon-gpa-chart.svg
    icon-focus-timer.svg

SVG rules:
  - Set viewBox but do NOT hardcode width/height attributes.
  - Remove fill="..." from paths so color can be controlled via CSS/Tailwind.
  - Keep SVG markup clean — no inline styles, no editor metadata.

How to use in React:
  Import as a React component using Vite's ?react suffix or SVGR:
    import StudyBuddyIcon from '@/assets/icons/icon-study-buddy.svg?react';
