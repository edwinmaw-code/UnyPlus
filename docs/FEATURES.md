# FEATURES.md — UnyPlus Feature Specifications

## HACKATHON SCOPE
Only the features listed below are in scope for the current build.

---

## ONBOARDING

### Flow
1. User selects their university from a list
2. User selects their course of study
3. User uploads their lecture timetable (PDF or image accepted)
4. User may upload additional study materials (optional)
5. AI processes all uploads and extracts structured data

### Rules
- Timetable data must be parsed into: Course Name, Day, Time, Duration, Hall, Lecturer
- If any field cannot be extracted, prompt user to fill it in manually
- After onboarding, generate a personal study timetable immediately

---

## DASHBOARD

### Lecture Cards
- Display 2 cards side by side: Ongoing and Upcoming
- If no lecture is currently ongoing, show only the Upcoming card
- **Card contains:** Course name, Duration, Hall, Lecturer name
- **Ongoing card:** Shows a static "Ongoing" badge (not clickable)
- **Upcoming card:** Shows a live countdown timer to lecture start time
- **More button** on each card opens options:
  - Edit card details
  - Mark lecture as Canceled → triggers AI to reschedule a personal study session for that subject

### Quick Reminders Card
- Displays list of reminders for the current day
- User can add new reminders inline
- Notification behavior:
  - 30 minutes before: silent notification
  - 15 minutes before: silent notification
  - Exact time: audible notification with sound

### School News / Info Card
- Displays flyers and announcements pushed from Deepatec admin
- Each item is clickable → opens full detail view
- From detail view, user can add the event to their reminders
- For hackathon: simulate with hardcoded or mock data from University of Ghana

### Calendar + Weather Card
- Displays current month calendar
- Small weather widget showing current day's weather
- When user hovers or clicks a different date on the calendar, weather updates to show forecast for that date

### GPA Predictor Widget
- Displays predicted GPA range (e.g. "2.8 – 3.2")
- Prediction is based on quiz performance data across all courses
- Flashcard mode does NOT contribute to GPA prediction
- Only MCQ, Brain Dump, and Mix Mode scores count
- Updates after every completed quiz session

---

## STUDY SPACE

The Study Space page is professional in design — same look and feel as the rest of the app.
It contains 3 sections: Study Buddy, Quizzes, and Focus Timer.

The gamified experience is triggered ONLY when the user clicks into the Quiz section.
That quiz environment is designed to feel like a game — energetic, fun, engaging.
No other page or section uses the gamified style.

### Study Space Page Cards
When you land on the Study Space page, display 2 stat cards:
- **Quizzes Answered** — total number of quizzes the user has completed
- **Merit Points** — total merit points the user has accumulated

### Merit Points System
Merit points are points earned through app activity. They rank the user on the leaderboard.

Ways to earn merit points:
- Completing a quiz session (points based on score / correct answers)
- Completing a Focus Timer session

Merit points are stored per user in the database and update in real time after each activity.

### Study Buddy (AI Chat)
- AI tutor chat interface
- AI knows the user's university, course, and uploaded materials
- AI helps the user understand topics — it does NOT complete assignments
- When user shares their own answer/work, AI assesses it and gives feedback
- Tone: friendly, encouraging, like a personal tutor

### Quiz Section
Clicking Quizzes takes the user into the gamified quiz environment.

**Visual environment:**
- Background changes to the custom SVG cloud scene from `assets/backgrounds/quiz-bg.svg`
- Clouds in the background animate slowly (slow, smooth, continuous movement — not fast or distracting)
- Quiz content (questions, answer options, score) sits on top of the animated background
- Feels like entering a different world

**Animation rule:**
- Use CSS keyframe animation on the cloud elements
- Movement: slow horizontal drift, smooth loop, no easing jumps
- Never use `transition-all`
- Animate only `transform: translateX()` for cloud movement

**Four quiz modes:**
| Mode | Type | Counts for GPA? |
|---|---|---|
| Multiple Choice (MCQ) | Objective | Yes |
| Brain Dump | Subjective / Written | Yes |
| Flashcards | Passive review | No |
| Mix Mode | Blend of all modes | Yes |

**Quiz Setup Flow:**
1. User selects a quiz mode
2. User chooses number of questions
3. User types in the topic
4. User selects the course
5. User chooses: Generate with AI OR Upload a document
6. Quiz is generated and begins

### Focus Timer
- Based on Pomodoro technique
- Default session: 25 minutes study, 5 minutes break
- User can customize session length
- Completing a session awards merit points
- Notifications:
  - End of study session: notification to take a break
  - End of break: notification to resume studying
- Visual timer displayed prominently during session

### Leaderboard
- Displayed on the Study Space page
- Ranks all users by total merit points
- Shows the user's own current rank and merit point total
- Updates in real time after every quiz or focus timer session

---

## FULL TIMETABLE VIEW
- Accessible via button on dashboard
- Displays AI-generated personal study timetable in a weekly grid
- Shows both lecture slots and personal study slots
- Study slots do not conflict with lecture slots
- When a lecture is marked canceled, a new study slot appears for that subject automatically

---

## WHAT IS NOT IN SCOPE FOR HACKATHON
- Insights page
- Admin dashboard
- Paid advertising / event promotions
- Mobile version
- Multi-language support
- Offline mode
