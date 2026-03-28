import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  LayoutGrid,
  AlignLeft,
  BarChart2,
  Lightbulb,
  Users,
  Settings,
  Bell,
  ChevronRight,
  ChevronLeft,
  MoreHorizontal,
  CheckCircle2,
  Clock,
  MapPin,
  Plus,
  ArrowRight,
  Timer,
} from 'lucide-react'

import logoIcon from '@/assets/logo/Unyplus-icon.png'
import newsImage from '@/assets/images/News-card-1.png'
import letGoImage from '@/assets/images/let-go-image.png'

// ────────────────────────────────────────────────────────────────────────────
// COUNTDOWN HOOK
// ────────────────────────────────────────────────────────────────────────────
function useCountdown(initH = 4, initM = 27, initS = 54) {
  const [t, setT] = useState({ h: initH, m: initM, s: initS })
  useEffect(() => {
    const id = setInterval(() => {
      setT(({ h, m, s }) => {
        s--
        if (s < 0) { s = 59; m-- }
        if (m < 0) { m = 59; h-- }
        if (h < 0) { h = 0; m = 0; s = 0 }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])
  return t
}

// ────────────────────────────────────────────────────────────────────────────
// SIDEBAR NAV ICON
// ────────────────────────────────────────────────────────────────────────────
function SideIcon({ icon: Icon, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors duration-200 cursor-pointer ${
        active
          ? 'bg-gradient-to-br from-[#A6DDFF] to-[#CDC7F9]'
          : 'hover:bg-white/10'
      }`}
    >
      <Icon size={19} className={active ? 'text-[#050505]' : 'text-[#666]'} strokeWidth={2} />
    </button>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// LECTURE CARD
// ────────────────────────────────────────────────────────────────────────────
function LectureCard({ ongoing, time }) {
  const pad = (n) => String(n).padStart(2, '0')
  return (
    <div
      className={`flex-1 rounded-3xl p-5 relative ${
        ongoing ? 'bg-[#C8E8FF]' : 'bg-[#CDC7F9]'
      }`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={17} className="text-[#050505]" strokeWidth={2.5} />
          <span className="font-black text-[#050505] text-[15px] tracking-tight">DCIT 105</span>
        </div>
        <button className="text-[#666] hover:text-[#050505] p-0.5">
          <MoreHorizontal size={17} />
        </button>
      </div>

      {/* Info rows */}
      <div className="space-y-1 mb-4">
        <div className="flex items-center gap-5 text-[12px] text-[#444]">
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-[#555]" />
            <span>10:00am - 12:00pm</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={12} className="text-[#555]" />
            <span>Mr. Mark Mensah</span>
          </div>
        </div>
        <div className="flex items-center gap-5 text-[12px] text-[#444]">
          <div className="flex items-center gap-1.5">
            <MapPin size={12} className="text-[#555]" />
            <span>Mensah Saba Hall</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Timer size={12} className="text-[#555]" />
            <span>{ongoing ? '2' : '3'}Hours</span>
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div className="flex items-end gap-5 mb-5">
        {[
          { val: pad(time.h), label: 'Hours' },
          { val: pad(time.m), label: 'Minutes' },
          { val: pad(time.s), label: 'Seconds' },
        ].map(({ val, label }, i) => (
          <div key={i} className="text-center min-w-[36px]">
            <div className="font-black text-[30px] text-[#050505] leading-none tracking-tighter">{val}</div>
            <div className="text-[9px] font-medium text-[#777] mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Status button */}
      <button
        className={`w-full rounded-full py-2.5 text-[13px] font-bold tracking-tight transition-opacity hover:opacity-90 ${
          ongoing
            ? 'bg-[#FF4D4D] text-white'
            : 'bg-[#050505] text-white'
        }`}
      >
        {ongoing ? 'On Going Class' : 'Upcoming Class'}
      </button>
    </div>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// TASK ITEM
// ────────────────────────────────────────────────────────────────────────────
const TASK_COLORS = {
  blue:   'bg-[#3593F7]',
  purple: 'bg-[#9B87F5]',
  red:    'bg-[#FF4D4D]',
}

function TaskItem({ color, completed, isLast }) {
  const circleBg = TASK_COLORS[color] ?? TASK_COLORS.blue
  return (
    <div className="relative flex items-start gap-3 pb-3">
      {/* Vertical connector line */}
      {!isLast && (
        <div className="absolute left-[7px] top-[26px] bottom-0 w-0.5 bg-[#CDCDCD]" />
      )}

      {/* Circle */}
      <div className={`w-[17px] h-[17px] rounded-full flex-shrink-0 flex items-center justify-center mt-2 relative z-10 ${circleBg}`}>
        {completed ? (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <div className="w-2 h-2 rounded-full bg-white/50" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-between bg-[#F3F3F3] rounded-2xl px-3 py-2.5">
        <div>
          <p className="text-[13px] font-semibold text-[#050505] leading-none">Submit Group Project</p>
          <div className="flex items-center gap-1 mt-1">
            <Clock size={11} className="text-[#999]" />
            <span className="text-[11px] text-[#999]">10:00am</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[18px] h-[18px] rounded-full border-2 border-[#D0D0D0]" />
          <button className="text-[#BBB] hover:text-[#666]">
            <MoreHorizontal size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// CALENDAR
// ────────────────────────────────────────────────────────────────────────────
// March 2026: starts Sunday (index 6 in Mon-based week)
const DAY_LABELS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

function buildMarchCalendar() {
  const cells = []
  // Feb fill: 23,24,25,26,27,28 (6 days before March 1 which is Sunday=col7)
  for (let d = 23; d <= 28; d++) cells.push({ day: d, type: 'prev' })
  // March dates
  for (let d = 1; d <= 31; d++) cells.push({ day: d, type: 'current' })
  // April fill to complete last row
  const rem = cells.length % 7
  if (rem > 0) for (let d = 1; d <= 7 - rem; d++) cells.push({ day: d, type: 'next' })
  // Chunk into weeks
  const weeks = []
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))
  return weeks
}

const MARCH_WEEKS = buildMarchCalendar()

function Calendar() {
  return (
    <div className="bg-white rounded-3xl p-5">
      {/* Month header */}
      <div className="flex items-center justify-between mb-3">
        <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#F0F0F0] transition-colors">
          <ChevronLeft size={15} className="text-[#555]" />
        </button>
        <span className="font-bold text-[13px] text-[#050505]">March 2026</span>
        <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#F0F0F0] transition-colors">
          <ChevronRight size={15} className="text-[#555]" />
        </button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 mb-0.5">
        {DAY_LABELS.map((d) => (
          <div key={d} className="text-center text-[9px] font-bold text-[#BBBBBB] py-1 tracking-wide">
            {d}
          </div>
        ))}
      </div>

      {/* Weeks */}
      {MARCH_WEEKS.map((week, wi) => (
        <div key={wi} className="grid grid-cols-7">
          {week.map(({ day, type }, di) => {
            const isCurrent = type === 'current'
            const isToday = isCurrent && day === 15
            const isHoliday24 = isCurrent && day === 24
            const isHoliday19 = isCurrent && day === 19
            const isDay1Blue = isCurrent && day === 1

            let cellClass = 'w-[26px] h-[26px] flex items-center justify-center rounded-full text-[11px] font-medium cursor-pointer transition-colors mx-auto'
            let textClass = ''

            if (isToday) {
              cellClass += ' bg-[#3593F7]'
              textClass = 'text-white font-bold'
            } else if (isHoliday24) {
              cellClass += ' bg-[#9B87F5]'
              textClass = 'text-white font-semibold'
            } else if (isHoliday19) {
              cellClass += ' ring-[1.5px] ring-[#9B87F5]'
              textClass = 'text-[#050505]'
            } else if (isDay1Blue) {
              cellClass += ' ring-[1.5px] ring-[#3593F7]'
              textClass = 'text-[#050505]'
            } else if (!isCurrent) {
              textClass = 'text-[#C8C8C8]'
            } else {
              cellClass += ' hover:bg-[#F5F5F5]'
              textClass = 'text-[#333]'
            }

            return (
              <div key={di} className="flex items-center justify-center py-0.5">
                <div className={cellClass}>
                  <span className={textClass}>{day}</span>
                </div>
              </div>
            )
          })}
        </div>
      ))}

      {/* Legend */}
      <div className="flex items-center gap-4 mt-3 pt-2 border-t border-[#F0F0F0]">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#9B87F5]" />
          <span className="text-[11px] text-[#888]">Holidays</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#3593F7]" />
          <span className="text-[11px] text-[#888]">Current Date</span>
        </div>
      </div>
    </div>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// WEATHER WIDGET
// ────────────────────────────────────────────────────────────────────────────
function WeatherWidget() {
  return (
    <div className="bg-white rounded-3xl px-5 py-4 flex items-center gap-4 mt-3">
      <span className="text-[44px] leading-none select-none">☀️</span>
      <div>
        <p className="font-semibold text-[13px] text-[#050505]">Monday</p>
        <p className="text-[11px] text-[#888]">Mostly cloudy</p>
        <p className="font-black text-[24px] text-[#050505] leading-tight">28°C</p>
      </div>
    </div>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// CTA CARD
// ────────────────────────────────────────────────────────────────────────────
function CTACard() {
  return (
    <div className="bg-[#EDE9FF] rounded-3xl p-5 relative overflow-hidden flex-shrink-0" style={{ minHeight: '160px' }}>
      {/* Text content */}
      <div className="relative z-10" style={{ maxWidth: '58%' }}>
        <h3 className="font-black text-[#050505] text-[15px] leading-tight mb-1.5">
          Start Your Academic Journey Today!
        </h3>
        <p className="text-[11px] text-[#666] leading-relaxed mb-4">
          Complete quizzes and follow your study plan to unlock your GP prediction.
        </p>
        <button className="flex items-center gap-2 bg-[#050505] text-white rounded-full py-2 px-4 text-[12px] font-bold hover:opacity-90 transition-opacity">
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowRight size={11} />
          </div>
          Start Quiz
        </button>
      </div>

      {/* Student illustration */}
      <img
        src={letGoImage}
        alt="Let's go!"
        className="absolute right-0 bottom-0 h-[150px] object-contain"
        style={{ maxWidth: '50%' }}
      />
    </div>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// DARK / LIGHT TOGGLE
// ────────────────────────────────────────────────────────────────────────────
function ThemeToggle({ dark, onToggle }) {
  return (
    <div className="flex items-center bg-[#EBEBEB] rounded-full p-1 gap-0.5">
      <button
        onClick={() => onToggle(true)}
        className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-colors ${
          dark ? 'bg-[#050505] text-white shadow-sm' : 'text-[#888]'
        }`}
      >
        Dark
      </button>
      <button
        onClick={() => onToggle(false)}
        className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-colors ${
          !dark ? 'bg-white text-[#050505] shadow-sm' : 'text-[#888]'
        }`}
      >
        Light
      </button>
    </div>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// DASHBOARD PAGE
// ────────────────────────────────────────────────────────────────────────────
const TASKS = [
  { color: 'blue',   completed: true  },
  { color: 'purple', completed: false },
  { color: 'red',    completed: false },
  { color: 'blue',   completed: false },
  { color: 'purple', completed: false },
]

const NAV_ITEMS = [
  { id: 'dashboard', icon: LayoutGrid },
  { id: 'timetable', icon: AlignLeft  },
  { id: 'insights',  icon: BarChart2  },
]

export default function Dashboard() {
  const [dark, setDark]       = useState(false)
  const [activeNav, setActiveNav] = useState('dashboard')
  const time = useCountdown(4, 27, 54)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className={`flex h-screen w-screen overflow-hidden ${dark ? 'dark' : ''}`} style={{ minWidth: '1280px' }}>

      {/* ── SIDEBAR ──────────────────────────────────────────────────────── */}
      <aside className="w-[72px] bg-[#0D0D0D] flex flex-col items-center py-5 flex-shrink-0 relative">
        {/* Logo */}
        <div className="w-10 h-10 rounded-2xl bg-white overflow-hidden flex items-center justify-center mb-4">
          <img src={logoIcon} alt="UnyPlus" className="w-8 h-8 object-contain" />
        </div>

        {/* Collapse toggle — right edge */}
        <button className="absolute -right-3 top-[68px] w-6 h-6 bg-[#1A1A1A] border border-[#333] rounded-full flex items-center justify-center z-20 hover:bg-[#222] transition-colors">
          <ChevronRight size={11} className="text-[#888]" />
        </button>

        {/* Primary nav */}
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map(({ id, icon }) => (
            <SideIcon
              key={id}
              icon={icon}
              active={activeNav === id}
              onClick={() => setActiveNav(id)}
            />
          ))}
        </nav>

        <div className="flex-1" />

        {/* Secondary nav */}
        <nav className="flex flex-col gap-2 mb-4">
          <SideIcon icon={Lightbulb} />
          <SideIcon icon={Users} />
        </nav>

        {/* Bottom: settings + avatar */}
        <div className="flex flex-col items-center gap-3">
          <SideIcon icon={Settings} />
          <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#2A2A2A]">
            <div className="w-full h-full bg-gradient-to-br from-[#A6DDFF] to-[#CDC7F9] flex items-center justify-center">
              <span className="text-[#050505] font-black text-sm">A</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col bg-[#F6F6F6] dark:bg-[#111] overflow-hidden">

        {/* ── TOP BAR ──────────────────────────────────────────────── */}
        <header className="flex items-center justify-between px-8 pt-6 pb-4 flex-shrink-0">
          <div>
            <h1 className="text-[30px] font-black text-[#050505] dark:text-white tracking-tight leading-none">
              Good morning, Amanda!
            </h1>
            <p className="text-[13px] text-[#888] dark:text-[#AAA] mt-1.5 font-medium">
              Small progress today leads to big results tomorrow.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Bell */}
            <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-[#1E1E1E] shadow-sm hover:shadow-md transition-shadow">
              <Bell size={17} className="text-[#333] dark:text-white" />
            </button>

            {/* Dark/Light toggle */}
            <ThemeToggle dark={dark} onToggle={setDark} />

            {/* My Timetable */}
            <Link to="/timetable">
              <button className="px-5 py-2.5 rounded-full bg-[#050505] dark:bg-white text-white dark:text-[#050505] text-[13px] font-bold hover:opacity-90 transition-opacity">
                My Timetable
              </button>
            </Link>

            {/* Study Space */}
            <Link to="/studyspace">
              <button className="px-5 py-2.5 rounded-full border-2 border-[#050505] dark:border-white text-[#050505] dark:text-white text-[13px] font-bold bg-white dark:bg-transparent hover:bg-[#F0F0F0] dark:hover:bg-white/10 transition-colors">
                Study Space
              </button>
            </Link>
          </div>
        </header>

        {/* ── CONTENT COLUMNS ──────────────────────────────────────── */}
        <div className="flex-1 flex gap-5 px-8 pb-6 min-h-0 overflow-hidden">

          {/* Left / center column */}
          <div className="flex-1 flex flex-col gap-4 min-w-0 overflow-y-auto">

            {/* Lecture cards row */}
            <div className="flex gap-4 flex-shrink-0">
              <LectureCard ongoing={true}  time={time} />
              <LectureCard ongoing={false} time={time} />
            </div>

            {/* Daily tasks + Calendar row */}
            <div className="flex gap-4 flex-1 min-h-0">

              {/* Daily Task section */}
              <div className="flex-1 flex flex-col min-w-0">
                <div className="flex items-center justify-between mb-3 flex-shrink-0">
                  <h2 className="font-black text-[14px] text-[#050505] dark:text-white">My Daily Task</h2>
                  <button className="flex items-center gap-1.5 text-[12px] font-bold text-[#050505] dark:text-white hover:opacity-70 transition-opacity">
                    <span>Add New</span>
                    <div className="w-5 h-5 rounded-full bg-[#050505] dark:bg-white flex items-center justify-center">
                      <Plus size={11} className="text-white dark:text-[#050505]" />
                    </div>
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto pr-1">
                  {TASKS.map((task, i) => (
                    <TaskItem
                      key={i}
                      color={task.color}
                      completed={task.completed}
                      isLast={i === TASKS.length - 1}
                    />
                  ))}
                </div>
              </div>

              {/* Calendar + Weather column */}
              <div className="w-[268px] flex-shrink-0 flex flex-col overflow-y-auto">
                <Calendar />
                <WeatherWidget />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="w-[258px] flex-shrink-0 flex flex-col gap-4 overflow-hidden">
            {/* News card — flex-1 so it takes up most of the height */}
            <div className="flex-1 min-h-0 relative rounded-3xl overflow-hidden">
              <img
                src={newsImage}
                alt="University news"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
              <div className="absolute top-3 right-3 bg-[#22B573] rounded-lg px-2 py-0.5">
                <span className="text-white text-[9px] font-bold tracking-wide">VOK</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[12.5px] font-bold leading-snug mb-3">
                  <span className="text-[#FFE171]">UG celebrates 153 PhDs, </span>
                  <span className="text-white">15,288 graduates at Feb 2026 Congregation</span>
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-1.5 rounded-full bg-white" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <ChevronLeft size={13} className="text-white" />
                    </button>
                    <button className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <ChevronRight size={13} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <CTACard />
          </div>
        </div>
      </main>
    </div>
  )
}
