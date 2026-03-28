FONTS — UnyPlus
===============

Drop custom font files into this folder.

Expected formats:
  .woff2  (preferred — smallest size, best browser/Electron support)
  .woff   (fallback)
  .ttf    (fallback for older environments)

Do NOT use .eot or .otf unless there is no alternative.

Naming convention:
  [FontName]-[Weight]-[Style].[ext]

  Examples:
    Inter-Regular.woff2
    Inter-Medium.woff2
    Inter-SemiBold.woff2
    Inter-Bold.woff2
    Inter-Italic.woff2

One file per weight/style combination.

After dropping files here:
  1. Register the @font-face rules in src/styles/fonts.css (or your global CSS entry point).
  2. Reference the font name in tailwind.config.js under theme.extend.fontFamily.
  3. Update the Primary Font and Secondary Font fields in docs/BRAND.md.

Note:
  If using a Google Font or system font only (no custom files needed),
  this folder can stay empty — but keep this README for team reference.
