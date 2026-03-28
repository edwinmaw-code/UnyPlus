# COMPONENTS.md — Pre-built UI Components

## How This Works
When you find a component online (from Shadcn, MagicUI, Aceternity, etc.):
1. Copy the component code
2. Save it as a file in `src/components/ui/`
3. Add an entry below so Claude Code knows it exists

Claude Code checks this file before building any UI element.
If it's listed here, it uses the existing component. It does not rebuild it.

---

## Components Available

### From Shadcn/ui
| Component | File | Used For |
|---|---|---|
| Button | `src/components/ui/Button.tsx` | All buttons across the app |
| Card | `src/components/ui/Card.tsx` | Dashboard cards |
| Dialog | `src/components/ui/Dialog.tsx` | Modals and popups |
| Input | `src/components/ui/Input.tsx` | All text inputs |
| Tabs | `src/components/ui/Tabs.tsx` | Quiz mode selector |
| Badge | `src/components/ui/Badge.tsx` | Ongoing / Upcoming labels |
| Avatar | `src/components/ui/Avatar.tsx` | User profile display |
| Scroll Area | `src/components/ui/ScrollArea.tsx` | Scrollable lists |

> Delete rows for any you have NOT installed yet. Only list what is actually in your project.

---

### From MagicUI
| Component | File | Used For |
|---|---|---|
| — | — | — |

> Add entries here as you copy components from MagicUI

---

### From Aceternity UI
| Component | File | Used For |
|---|---|---|
| — | — | — |

> Add entries here as you copy components from Aceternity UI (good for Study Space gamified elements)

---

### Custom Built
| Component | File | Used For |
|---|---|---|
| LectureCard | `src/components/LectureCard.tsx` | Ongoing + Upcoming lecture display |
| CountdownTimer | `src/components/CountdownTimer.tsx` | Countdown to next lecture |
| ReminderList | `src/components/ReminderList.tsx` | Quick reminders on dashboard |
| TimetableGrid | `src/components/TimetableGrid.tsx` | Full timetable view |
| GPAPredictor | `src/components/GPAPredictor.tsx` | GPA range widget |
| FocusTimer | `src/components/FocusTimer.tsx` | Pomodoro timer in Study Space |
| StudyBuddy | `src/components/StudyBuddy.tsx` | AI chat interface |
| QuizCard | `src/components/QuizCard.tsx` | Quiz question display |

> These will be built during development. Update the table as they are completed.

---

## How to Install Shadcn Components (Recommended First Step)
Run these commands in your project root after setting up your React project:

```bash
npx shadcn@latest init
npx shadcn@latest add button card dialog input tabs badge avatar scroll-area
```

This drops the component files directly into `src/components/ui/` automatically.
