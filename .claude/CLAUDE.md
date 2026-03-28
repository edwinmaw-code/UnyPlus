# CLAUDE.md — UnyPlus Project Instructions
# Product Name: UnyPlus (U capital, ny lowercase, P capital, lus lowercase)

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- **Reference these files before writing any code:**
  - `docs/PROJECT.md` — Full feature spec and scope
  - `docs/BRAND.md` — Colors, fonts, logo usage, design language
  - `docs/FEATURES.md` — Detailed breakdown of every feature and how it behaves
  - `docs/COMPONENTS.md` — Pre-built UI components already in the project

---

## What You Are Building
UnyPlus is a student companion desktop app. Every decision you make must serve one goal: helping students study smarter, stay organized, and never miss a lecture or deadline.

---

## Tech Stack
- **Framework:** React
- **Styling:** Tailwind CSS
- **Component Library:** Shadcn/ui
- **AI Integration:** Claude API (claude-sonnet-4-20250514)
- **Backend:** Node.js + MongoDB (custom built by the team)
- **Language:** JavaScript / JSX

---

## Brand Assets
- Always check the `assets/` folder before designing. It contains logos, color guides, and images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined in `docs/BRAND.md`, use those exact values. Do not invent brand colors.

---

## Reference Image Rule
- If a reference image (Figma screenshot) is provided: match layout, spacing, typography, and color exactly. Do not improve or add to the design.
- If no reference image is provided: design from scratch following the brand guidelines in `docs/BRAND.md` with high craft.
- After building any UI: compare your output against the reference image, fix any mismatches. Do at least 2 comparison rounds. Stop only when no visible differences remain or the user confirms it is correct.

---

## Component Rule
Before building ANY UI element, check `docs/COMPONENTS.md` first.
If a component already exists in `src/components/ui/`, use it. Do not rebuild it.
If it does not exist, build it, place it in `src/components/ui/`, and update `docs/COMPONENTS.md`.

---

## Design Rules
- Follow the Figma design exactly. Do not improvise layouts.
- The app is desktop-first. Minimum width: 1280px.
- The entire app is clean and professional in look and feel.
- The ONLY exception is the Quiz environment — when a user clicks into Quizzes from the Study Space, that page is gamified in feel (energetic, fun, game-like).
- The Study Space page itself is still professional. Gamification only activates inside the Quiz flow.
- Always use brand colors from `docs/BRAND.md`. Never use arbitrary hex codes.
- Use the official logo from `assets/logo/`. Never recreate or alter it.
- The quiz background SVG is at `assets/backgrounds/quiz-bg.svg`. Use it exactly as provided. Do not recreate it.

### Anti-Generic Design Rules
These apply to every component and page:

- **Colors:** Never use default Tailwind palette colors (indigo-500, blue-600, etc.). Always use the custom brand colors from `docs/BRAND.md`.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity for depth.
- **Typography:** Never use the same font for headings and body text. Apply tight tracking (-0.03em) on large headings, generous line-height (1.7) on body text.
- **Gradients:** Layer multiple radial gradients where decorative backgrounds are needed. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never use `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element must have hover, focus-visible, and active states. No exceptions.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces must have a layering system (base → elevated → floating). Not everything sits at the same z-plane.

---

## Code Rules
- Write clean, readable, commented code.
- Break UI into reusable components. Never repeat layout code.
- Every AI feature must use the Claude API. Do not use any other AI provider.
- All timetable logic (conflict detection, rescheduling) must be handled in a dedicated utility file, not inside components.
- Do not use `transition-all` anywhere in the codebase.
- Do not use default Tailwind blue or indigo as any primary color.

---

## Feature Scope (Hackathon Build)
Only build what is listed in `docs/FEATURES.md` under **Hackathon Scope**.
- Do not add features not listed there.
- Do not simplify or remove features listed there.
- Do not add sections, features, or content not in the reference design.

---

## Naming Conventions
- Components: PascalCase (e.g. `LectureCard.tsx`)
- Utilities: camelCase (e.g. `parseTimetable.ts`)
- Constants: UPPER_SNAKE_CASE
- CSS classes: Tailwind utility classes only

---

## When You Are Unsure
Check `docs/FEATURES.md` first. If still unclear, ask before building. Never assume.

---

## Screenshot Workflow
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `npm run dev` (serves the project at `http://localhost:5173`)
- If the server is already running, do not start a second instance.
- Before taking any screenshot, check if `screenshot.mjs` exists in the project root. If it does not exist, create it first using the template below.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:5173`
- Screenshots are saved automatically to `./screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:5173 label` → saves as `screenshot-N-label.png`
- After screenshotting, read the PNG from `screenshots/` and analyze it directly.
- When comparing against Figma reference, be specific: "heading is 32px but reference shows 24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing
- Do at least 2 comparison rounds after every UI build. Stop only when no visible differences remain or user confirms it is correct.

### screenshot.mjs template
If `screenshot.mjs` does not exist, create it in the project root with this content:

```js
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const url = process.argv[2] || 'http://localhost:5173';
const label = process.argv[3] || '';
const dir = './screenshots';

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));
const n = files.length + 1;
const filename = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
const filepath = path.join(dir, filename);

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2' });
await page.screenshot({ path: filepath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${filepath}`);
```