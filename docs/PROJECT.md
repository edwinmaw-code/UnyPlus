# PROJECT.md — UnyPlus

## Product Name
**UnyPlus** — The Student Companion App
- U → capital, ny → lowercase, P → capital, lus → lowercase
- Never written as UNiPLUS, UNYplus, or uniplus

## Developed By
Deepatec (Deeper African Tech Innovations Limited)

## Vision
A smart, AI-powered desktop app that helps university students manage their lectures, study schedules, quizzes, and academic performance — all in one place.

## Target Users
University students across Africa, starting with Ghana.

## Current Build
Desktop application built with Electron + React.
Mobile version is planned post-hackathon.

## Tech Stack
- **Framework:** React
- **Styling:** Tailwind CSS
- **Component Library:** Shadcn/ui
- **AI Integration:** Claude API (claude-sonnet-4-20250514)
- **Backend:** Node.js + MongoDB (custom built by the team)
- **Language:** JavaScript / JSX

---

## Pages / Sections

### 1. Onboarding Flow
- Step 1: Select University
- Step 2: Select Course of Study
- Step 3: Upload lecture timetable (PDF or image)
- Step 4: Upload any additional study materials (optional)
- AI scrapes and structures all uploaded data for use across the app.

### 2. Dashboard (Home Page)
Main landing page after login. Contains:
- Lecture Cards (Ongoing + Upcoming)
- Quick Reminders Card
- School News / Info Card
- Calendar + Weather Card
- GPA Predictor Widget

### 3. Study Space Page
Gamified feel. Contains:
- Study Buddy (AI chat tutor)
- Quiz Section (4 modes)
- Focus Timer (Pomodoro)

### 4. Full Timetable View
- Displays AI-generated personal study timetable
- Does not conflict with lecture timetable
- Auto-adjusts when lectures are marked as canceled

### 5. Admin Dashboard (Post-Hackathon)
- Separate login for Deepatec team
- Push school news to specific or all universities
- Monitor user activity and manage accounts

---

## AI Features Summary
| Feature | What AI Does |
|---|---|
| Timetable Upload | Scrapes and structures timetable data |
| Personal Study Timetable | Generates conflict-free study schedule |
| Lecture Canceled | Reschedules study session for that subject |
| Study Buddy | Acts as personal tutor, does not complete assignments |
| Quiz Generation | Generates questions from topic or uploaded document |
| GPA Predictor | Predicts GPA range from quiz performance data |
| Insights (Post-Hackathon) | Detects study pattern gaps, gives improvement advice |

---

## Monetization (Post-Hackathon)
- Campus event and program advertising via the News Card
- Schools pay to push targeted announcements to their students

---

## Post-Hackathon Features
- Mobile app version
- Insights page
- Admin dashboard
- Paid advertising / event promotion layer
- Expanded university database
