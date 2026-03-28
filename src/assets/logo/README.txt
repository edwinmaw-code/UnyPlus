LOGO — UnyPlus
==============

This folder holds the official UnyPlus logo files.
Do NOT rename, recolor, stretch, or recreate these files.
Always use the exact filenames listed below. Components reference these paths directly.

Required files (per docs/BRAND.md):
--------------------------------------------------
  UnyPlus-logo-primary.png   — Main logo. Use on white or light neutral backgrounds.
  UnyPlus-logo-light.png     — Light (white) version. Use on dark backgrounds.
  UnyPlus-logo-dark.png      — Dark version. Use on light backgrounds where primary has low contrast.
  UnyPlus-icon.png           — Icon only, no wordmark. Used for app icons, favicons, small spaces.
--------------------------------------------------

Format:
  .png with transparent background (no white box behind the logo).
  Recommended export size: at least 400px wide for primary/light/dark logos.
  For UnyPlus-icon.png: export at 512x512 and 256x256 (keep both if needed).

Where these are used in the app:
  - UnyPlus-logo-primary.png  → Sidebar header, login screen, splash screen
  - UnyPlus-logo-light.png    → Any dark-themed header or splash variant
  - UnyPlus-logo-dark.png     → Light-mode header variants
  - UnyPlus-icon.png          → Electron app icon, loading spinner branding, favicon

Electron app icon:
  The Electron app icon (electron/icon.png or build/icon.png) should be a copy
  of UnyPlus-icon.png. Do not reference this folder directly from electron config —
  copy the file to the location Electron expects.

Parent company: Deepatec (Deeper African Tech Innovations Limited)
Brand name spelling: UnyPlus — U capital, ny lowercase, P capital, lus lowercase.
