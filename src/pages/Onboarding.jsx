import { useState, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check, Search, Upload, FileText, X,
  BookOpen, GraduationCap, ChevronDown, Sparkles,
} from 'lucide-react'
import logoPrimary from '@/assets/logo/Unyplus-logo-primary.png'

// ── University icon loader (Vite glob) ────────────────────────────────────────
const coloredIconModules = import.meta.glob(
  '../assets/icons/colored-university-icons/*.webp',
  { eager: true }
)

function getIcon(filename) {
  const key = Object.keys(coloredIconModules).find(k => k.endsWith(`/${filename}`))
  return key ? coloredIconModules[key].default : null
}

// ── Data ──────────────────────────────────────────────────────────────────────
const UNIVERSITIES = [
  {
    name: 'University of Ghana',
    shortName: 'UG',
    location: 'Legon, Accra',
    icon: getIcon('University Of Ghana.webp'),
    accent: '#1a5276',
  },
  {
    name: 'Kwame Nkrumah University of Science and Technology',
    shortName: 'KNUST',
    location: 'Kumasi',
    icon: getIcon('Kwame Nkrumah University of Science and Technology.webp'),
    accent: '#1e8449',
  },
  {
    name: 'University of Cape Coast',
    shortName: 'UCC',
    location: 'Cape Coast',
    icon: getIcon('University of Cape Coast.webp'),
    accent: '#6c3483',
  },
  {
    name: 'Ashesi University',
    shortName: 'Ashesi',
    location: 'Berekuso',
    icon: getIcon('Ashesi University.webp'),
    accent: '#1a237e',
  },
  {
    name: 'Ghana Institute of Management and Public Administration',
    shortName: 'GIMPA',
    location: 'Accra',
    icon: getIcon('Ghana Institute of Management and Public Administration.webp'),
    accent: '#7b241c',
  },
  {
    name: 'Central University',
    shortName: 'Central',
    location: 'Miotso',
    icon: getIcon('Central University.webp'),
    accent: '#b7770d',
  },
  {
    name: 'Valley View University',
    shortName: 'VVU',
    location: 'Oyibi',
    icon: getIcon('Valley View University.webp'),
    accent: '#0e6655',
  },
  {
    name: 'Ghana Communication Technology University',
    shortName: 'GCTU',
    location: 'Accra',
    icon: getIcon('Ghana Communication Technology University.webp'),
    accent: '#1a5276',
  },
  {
    name: 'University of Professional Studies Accra',
    shortName: 'UPSA',
    location: 'Accra',
    icon: getIcon('University of Professional Studies Accra.webp'),
    accent: '#145a32',
  },
  {
    name: 'Accra Technical University',
    shortName: 'ATU',
    location: 'Accra',
    icon: getIcon('Accra Technical University.webp'),
    accent: '#7d6608',
  },
  {
    name: 'University of Education, Winneba',
    shortName: 'UEW',
    location: 'Winneba',
    icon: getIcon('University of Education, Winneba.webp'),
    accent: '#1b4f72',
  },
  {
    name: 'Akenten Appiah Menkah University',
    shortName: 'AAMUSTED',
    location: 'Kumasi',
    icon: getIcon('Akenten Appiah Menkah University of Skills Training and Entrepreneurial Development.webp'),
    accent: '#515a5a',
  },
]

const COURSES = [
  'BSc Computer Science',
  'BSc Information Technology',
  'BSc Data Science',
  'BSc Cybersecurity',
  'BSc Business Administration',
  'BSc Accounting',
  'BSc Finance',
  'BSc Marketing',
  'BA Economics',
  'BSc Electrical Engineering',
  'BSc Civil Engineering',
  'BSc Mechanical Engineering',
  'BSc Telecommunications Engineering',
  'BSc Biomedical Engineering',
  'MBChB Medicine and Surgery',
  'BSc Nursing',
  'BSc Pharmacy',
  'BSc Public Health',
  'LLB Law',
  'BA Communication Studies',
  'BA Political Science',
  'BA Psychology',
  'BA Sociology',
  'BA Linguistics',
  'BA History',
  'BSc Mathematics',
  'BSc Statistics',
  'BSc Physics',
  'BSc Chemistry',
  'BSc Architecture',
  'BSc Agricultural Science',
  'BSc Environmental Science',
  'BSc Food Science',
  'BEd Basic Education',
]

const POPULAR_TAGS = [
  'BSc Computer Science',
  'BSc Business Administration',
  'MBChB Medicine and Surgery',
  'LLB Law',
  'BSc Electrical Engineering',
  'BA Economics',
  'BSc Nursing',
  'BSc IT',
]

// ── Step Indicator ────────────────────────────────────────────────────────────
function StepIndicator({ currentStep }) {
  const steps = [
    { num: 1, label: 'Choose University' },
    { num: 2, label: 'Choose Course' },
    { num: 3, label: 'Upload Timetable' },
  ]
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', marginBottom: '44px' }}>
      {steps.map((step, i) => {
        const done = currentStep > step.num
        const active = currentStep === step.num
        return (
          <div key={step.num} style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '104px' }}>
              <motion.div
                animate={{
                  backgroundColor: done || active ? '#050505' : 'transparent',
                  borderColor: done || active ? '#050505' : 'rgba(0,0,0,0.18)',
                }}
                transition={{ duration: 0.25 }}
                style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  border: '2px solid',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, position: 'relative',
                }}
              >
                {done ? (
                  <Check size={16} color="#fff" strokeWidth={2.5} />
                ) : (
                  <span style={{ fontSize: '13px', fontWeight: 800, color: active ? '#fff' : 'rgba(0,0,0,0.3)' }}>
                    {step.num}
                  </span>
                )}
                {active && (
                  <div style={{
                    position: 'absolute', inset: '-6px',
                    borderRadius: '50%', border: '2px solid rgba(5,5,5,0.1)',
                    pointerEvents: 'none',
                  }} />
                )}
              </motion.div>
              <span style={{
                fontSize: '11px',
                fontWeight: active ? 700 : done ? 600 : 500,
                color: active ? '#050505' : done ? '#212121' : 'rgba(0,0,0,0.38)',
                marginTop: '8px', textAlign: 'center',
                lineHeight: 1.35, letterSpacing: '-0.01em',
              }}>
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <motion.div
                animate={{ backgroundColor: currentStep > step.num ? '#050505' : 'rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.35 }}
                style={{ height: '2px', width: '72px', borderRadius: '2px', marginTop: '18px', flexShrink: 0 }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ── STEP 1: University ────────────────────────────────────────────────────────
function UniversityStep({ selected, onSelect }) {
  const [query, setQuery] = useState(selected?.name ?? '')
  const [showSuggestions, setShowSuggestions] = useState(false)

  const filtered = query.trim()
    ? UNIVERSITIES.filter(u =>
        u.name.toLowerCase().includes(query.toLowerCase()) ||
        u.shortName.toLowerCase().includes(query.toLowerCase())
      )
    : UNIVERSITIES

  const suggestions = query.trim() ? filtered : []

  const pick = (uni) => {
    setQuery(uni.name)
    setShowSuggestions(false)
    onSelect(uni)
  }

  return (
    <div>
      <h2 style={{
        fontFamily: 'Satoshi, sans-serif', fontSize: '22px', fontWeight: 800,
        color: '#050505', margin: '0 0 6px 0', letterSpacing: '-0.02em',
      }}>
        Which university do you attend?
      </h2>
      <p style={{ fontSize: '14px', color: '#505051', margin: '0 0 22px 0', lineHeight: 1.65 }}>
        Select from the grid or type to search. More universities coming soon.
      </p>

      {/* Search */}
      <div style={{ position: 'relative', marginBottom: '20px' }}>
        <Search size={16} style={{
          position: 'absolute', left: '14px', top: '50%',
          transform: 'translateY(-50%)', color: '#505051', pointerEvents: 'none',
        }} />
        <input
          type="text"
          placeholder="Search university…"
          value={query}
          onChange={e => { setQuery(e.target.value); setShowSuggestions(true) }}
          onFocus={() => query && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 160)}
          style={{
            width: '100%', height: '44px', borderRadius: '12px',
            border: '1.5px solid rgba(0,0,0,0.11)',
            paddingLeft: '42px', paddingRight: '16px',
            fontSize: '14px', color: '#050505', outline: 'none',
            backgroundColor: '#FAFAFA', boxSizing: 'border-box',
          }}
        />
        {showSuggestions && suggestions.length > 0 && (
          <div style={{
            position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0,
            backgroundColor: '#fff', borderRadius: '14px',
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
            zIndex: 20, overflow: 'hidden',
          }}>
            {suggestions.map(uni => (
              <div
                key={uni.name}
                onMouseDown={() => pick(uni)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '10px 16px', cursor: 'pointer',
                  borderBottom: '1px solid rgba(0,0,0,0.05)',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F5F3FF')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                {uni.icon && (
                  <img src={uni.icon} alt="" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                )}
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: '#050505', margin: 0 }}>{uni.name}</p>
                  <p style={{ fontSize: '11px', color: '#505051', margin: 0 }}>{uni.location}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* University card grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px', maxHeight: '300px', overflowY: 'auto', paddingRight: '2px',
      }}>
        {filtered.map(uni => {
          const sel = selected?.name === uni.name
          return (
            <motion.div
              key={uni.name}
              whileHover={{ y: -4, boxShadow: '0 10px 28px rgba(205,199,249,0.28)' }}
              whileTap={{ scale: 0.96 }}
              onClick={() => pick(uni)}
              style={{
                position: 'relative',
                backgroundColor: sel ? '#F5F3FF' : '#FAFAFA',
                border: sel ? '2px solid #CDC7F9' : '1.5px solid rgba(0,0,0,0.07)',
                borderRadius: '16px',
                padding: '14px 8px 12px',
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '8px', textAlign: 'center',
                boxShadow: sel ? '0 4px 14px rgba(205,199,249,0.3)' : '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              {sel && (
                <div style={{
                  position: 'absolute', top: '7px', right: '7px',
                  width: '17px', height: '17px', borderRadius: '50%',
                  backgroundColor: '#050505',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Check size={9} color="#fff" strokeWidth={3} />
                </div>
              )}
              <div style={{
                width: '50px', height: '50px', borderRadius: '13px',
                backgroundColor: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)', overflow: 'hidden', flexShrink: 0,
              }}>
                {uni.icon
                  ? <img src={uni.icon} alt={uni.shortName} style={{ width: '38px', height: '38px', objectFit: 'contain' }} />
                  : <GraduationCap size={22} color={uni.accent} />
                }
              </div>
              <span style={{
                fontSize: '11px', fontWeight: 700,
                color: sel ? '#050505' : '#212121',
                lineHeight: 1.2, letterSpacing: '-0.01em',
              }}>
                {uni.shortName}
              </span>
            </motion.div>
          )
        })}
        {filtered.length === 0 && (
          <div style={{
            gridColumn: '1/-1', textAlign: 'center',
            padding: '32px', color: '#505051', fontSize: '14px',
          }}>
            No universities matched. Check spelling or type to continue.
          </div>
        )}
      </div>
    </div>
  )
}

// ── STEP 2: Course ────────────────────────────────────────────────────────────
function CourseStep({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const [focused, setFocused] = useState(false)

  const matches = value.trim()
    ? COURSES.filter(c => c.toLowerCase().includes(value.toLowerCase()))
    : COURSES

  const pick = (c) => { onChange(c); setOpen(false) }

  return (
    <div>
      <h2 style={{
        fontFamily: 'Satoshi, sans-serif', fontSize: '22px', fontWeight: 800,
        color: '#050505', margin: '0 0 6px 0', letterSpacing: '-0.02em',
      }}>
        What are you studying?
      </h2>
      <p style={{ fontSize: '14px', color: '#505051', margin: '0 0 28px 0', lineHeight: 1.65 }}>
        Type your programme or pick from the list below.
      </p>

      <div style={{ position: 'relative' }}>
        <div
          style={{
            display: 'flex', alignItems: 'center', gap: '16px',
            backgroundColor: '#FAFAFA', borderRadius: '18px',
            border: focused ? '1.5px solid #CDC7F9' : '1.5px solid rgba(0,0,0,0.1)',
            padding: '18px 20px',
            boxShadow: focused ? '0 0 0 3px rgba(205,199,249,0.22)' : 'none',
            cursor: 'text',
          }}
          onClick={() => document.getElementById('course-inp').focus()}
        >
          <div style={{
            width: '44px', height: '44px', borderRadius: '13px',
            backgroundColor: '#EDE9FF', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <BookOpen size={20} color="#7C72D8" />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{
              fontSize: '10px', fontWeight: 700, color: '#505051', margin: '0 0 4px 0',
              textTransform: 'uppercase', letterSpacing: '0.07em',
            }}>Course of Study</p>
            <input
              id="course-inp"
              type="text"
              placeholder="e.g. BSc Computer Science"
              value={value}
              onChange={e => { onChange(e.target.value); setOpen(true) }}
              onFocus={() => { setFocused(true); setOpen(true) }}
              onBlur={() => { setFocused(false); setTimeout(() => setOpen(false), 160) }}
              style={{
                border: 'none', outline: 'none', backgroundColor: 'transparent',
                fontSize: '16px', fontWeight: 700, color: '#050505',
                width: '100%', fontFamily: 'Satoshi, sans-serif',
              }}
            />
          </div>
          <ChevronDown
            size={18} color="#505051"
            style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
            style={{
              position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0,
              backgroundColor: '#fff', borderRadius: '16px',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.1)',
              zIndex: 20, overflow: 'hidden',
              maxHeight: '260px', overflowY: 'auto',
            }}
          >
            {matches.length === 0 ? (
              <div style={{ padding: '20px', textAlign: 'center', color: '#505051', fontSize: '13px' }}>
                No match — press Continue to use your typed course
              </div>
            ) : (
              matches.slice(0, 10).map(course => {
                const sel = value === course
                return (
                  <div
                    key={course}
                    onMouseDown={() => pick(course)}
                    style={{
                      padding: '11px 20px', cursor: 'pointer',
                      fontSize: '14px', fontWeight: sel ? 700 : 500,
                      color: '#050505',
                      backgroundColor: sel ? '#F5F3FF' : 'transparent',
                      borderBottom: '1px solid rgba(0,0,0,0.04)',
                      display: 'flex', alignItems: 'center', gap: '10px',
                    }}
                    onMouseEnter={e => { if (!sel) e.currentTarget.style.backgroundColor = '#FAFAFA' }}
                    onMouseLeave={e => { if (!sel) e.currentTarget.style.backgroundColor = 'transparent' }}
                  >
                    <div style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      backgroundColor: '#CDC7F9', flexShrink: 0,
                    }} />
                    {course}
                    {sel && <Check size={13} color="#050505" style={{ marginLeft: 'auto' }} />}
                  </div>
                )
              })
            )}
          </motion.div>
        )}
      </div>

      {/* Popular tags */}
      <div style={{ marginTop: '28px' }}>
        <p style={{
          fontSize: '11px', fontWeight: 700, color: '#505051', margin: '0 0 12px 0',
          textTransform: 'uppercase', letterSpacing: '0.07em',
        }}>
          Popular programmes
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {POPULAR_TAGS.map(tag => {
            const sel = value === tag
            return (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => pick(tag)}
                style={{
                  padding: '7px 15px', borderRadius: '9999px',
                  border: sel ? '1.5px solid #050505' : '1.5px solid rgba(0,0,0,0.12)',
                  backgroundColor: sel ? '#050505' : '#fff',
                  color: sel ? '#fff' : '#212121',
                  fontSize: '12px', fontWeight: 600,
                  cursor: 'pointer', letterSpacing: '-0.01em',
                }}
              >
                {tag}
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ── STEP 3: Upload ────────────────────────────────────────────────────────────
function UploadStep({ file, onFile }) {
  const [dragging, setDragging] = useState(false)
  const [imgPreview, setImgPreview] = useState(null)
  const inputRef = useRef(null)

  const accept = useCallback((f) => {
    if (!f) { onFile(null); setImgPreview(null); return }
    onFile(f)
    if (f.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => setImgPreview(e.target.result)
      reader.readAsDataURL(f)
    } else {
      setImgPreview(null)
    }
  }, [onFile])

  const handleDrop = useCallback(e => {
    e.preventDefault()
    setDragging(false)
    const f = e.dataTransfer.files[0]
    if (f) accept(f)
  }, [accept])

  return (
    <div>
      <h2 style={{
        fontFamily: 'Satoshi, sans-serif', fontSize: '22px', fontWeight: 800,
        color: '#050505', margin: '0 0 6px 0', letterSpacing: '-0.02em',
      }}>
        Upload your lecture timetable
      </h2>
      <p style={{ fontSize: '14px', color: '#505051', margin: '0 0 24px 0', lineHeight: 1.65 }}>
        Drop your timetable here — PDF or image. Our AI will handle the rest.
      </p>

      <motion.div
        animate={{
          borderColor: dragging ? '#050505' : file ? '#CDC7F9' : 'rgba(0,0,0,0.15)',
          backgroundColor: dragging ? '#F5F3FF' : file ? '#FAFAFE' : '#FAFAFA',
        }}
        transition={{ duration: 0.18 }}
        onDrop={handleDrop}
        onDragOver={e => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onClick={() => !file && inputRef.current?.click()}
        style={{
          border: '2px dashed', borderRadius: '20px',
          padding: file ? '24px 28px' : '48px 24px',
          textAlign: 'center', cursor: file ? 'default' : 'pointer',
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.png,.jpg,.jpeg"
          onChange={e => { const f = e.target.files[0]; if (f) accept(f) }}
          style={{ display: 'none' }}
        />

        {!file ? (
          <div>
            <div style={{
              width: '64px', height: '64px', borderRadius: '18px',
              backgroundColor: dragging ? '#CDC7F9' : '#EDE9FF',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px',
            }}>
              <Upload size={28} color="#7C72D8" />
            </div>
            <p style={{ fontSize: '15px', fontWeight: 700, color: '#050505', margin: '0 0 6px 0' }}>
              {dragging ? 'Release to upload' : 'Drop your timetable here'}
            </p>
            <p style={{ fontSize: '13px', color: '#505051', margin: '0 0 18px 0' }}>
              or click to browse your files
            </p>
            <span style={{
              display: 'inline-block', padding: '5px 14px',
              backgroundColor: 'rgba(0,0,0,0.06)', borderRadius: '9999px',
              fontSize: '11px', fontWeight: 600, color: '#505051', letterSpacing: '0.05em',
            }}>
              PDF · PNG · JPG · JPEG
            </span>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
          >
            {imgPreview ? (
              <img src={imgPreview} alt="Timetable"
                style={{ width: '72px', height: '72px', objectFit: 'cover', borderRadius: '12px', flexShrink: 0 }} />
            ) : (
              <div style={{
                width: '60px', height: '60px', borderRadius: '14px',
                backgroundColor: '#EA3929', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <FileText size={26} color="#fff" />
              </div>
            )}
            <div style={{ textAlign: 'left', flex: 1, minWidth: 0 }}>
              <p style={{
                fontSize: '14px', fontWeight: 700, color: '#050505', margin: '0 0 3px 0',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {file.name}
              </p>
              <p style={{ fontSize: '12px', color: '#505051', margin: 0 }}>
                {(file.size / 1024).toFixed(1)} KB · {file.type.startsWith('image/') ? 'Image' : 'PDF'}
              </p>
              <button
                onClick={e => { e.stopPropagation(); accept(null) }}
                style={{
                  marginTop: '8px', padding: '4px 12px', borderRadius: '9999px',
                  border: '1px solid rgba(0,0,0,0.12)', backgroundColor: '#fff',
                  fontSize: '11px', fontWeight: 600, color: '#505051', cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: '4px',
                }}
              >
                <X size={10} /> Remove
              </button>
            </div>
            <div style={{
              width: '36px', height: '36px', borderRadius: '50%',
              backgroundColor: '#EDE9FF', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Check size={16} color="#7C72D8" />
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* AI info banner */}
      <div style={{
        marginTop: '16px', display: 'flex', alignItems: 'flex-start', gap: '14px',
        padding: '16px 18px', backgroundColor: '#EDE9FF', borderRadius: '14px',
      }}>
        <div style={{
          width: '34px', height: '34px', borderRadius: '10px',
          backgroundColor: '#CDC7F9', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Sparkles size={16} color="#050505" />
        </div>
        <div>
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#050505', margin: '0 0 3px 0' }}>
            AI-powered extraction
          </p>
          <p style={{ fontSize: '12px', color: '#505051', margin: 0, lineHeight: 1.55 }}>
            UnyPlus reads your timetable and automatically extracts course names, days, times, halls, and lecturers — no manual input needed.
          </p>
        </div>
      </div>
    </div>
  )
}

// ── Step animation ────────────────────────────────────────────────────────────
const variants = {
  enter: (dir) => ({ x: dir > 0 ? 36 : -36, opacity: 0 }),
  center: {
    x: 0, opacity: 1,
    transition: { type: 'spring', stiffness: 340, damping: 32 },
  },
  exit: (dir) => ({
    x: dir > 0 ? -36 : 36, opacity: 0,
    transition: { duration: 0.18 },
  }),
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function Onboarding() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [dir, setDir] = useState(1)
  const [university, setUniversity] = useState(null)
  const [course, setCourse] = useState('')
  const [file, setFile] = useState(null)
  const [error, setError] = useState('')

  const next = () => {
    if (step === 1 && !university) { setError('Please select a university to continue.'); return }
    if (step === 2 && !course.trim()) { setError('Please enter your course of study.'); return }
    if (step === 3 && !file) { setError('Please upload your timetable to finish.'); return }
    setError('')
    if (step < 3) { setDir(1); setStep(s => s + 1) }
    else navigate('/dashboard')
  }

  const back = () => { setError(''); setDir(-1); setStep(s => s - 1) }

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '32px 20px',
      background: 'linear-gradient(145deg, #F2EEFF 0%, #FFFBEE 45%, #EEF7FF 100%)',
      fontFamily: 'Satoshi, sans-serif',
    }}>
      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: '-160px', right: '-80px',
        width: '580px', height: '580px', borderRadius: '50%',
        background: 'radial-gradient(circle, #CDC7F9 0%, transparent 68%)',
        opacity: 0.4, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-100px', left: '-100px',
        width: '520px', height: '520px', borderRadius: '50%',
        background: 'radial-gradient(circle, #FFE171 0%, transparent 68%)',
        opacity: 0.28, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '35%', left: '5%',
        width: '280px', height: '280px', borderRadius: '50%',
        background: 'radial-gradient(circle, #F9BBC6 0%, transparent 70%)',
        opacity: 0.22, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '15%', right: '10%',
        width: '220px', height: '220px', borderRadius: '50%',
        background: 'radial-gradient(circle, #A6DDFF 0%, transparent 70%)',
        opacity: 0.28, pointerEvents: 'none',
      }} />

      {/* Card */}
      <div style={{
        backgroundColor: '#fff', borderRadius: '28px',
        boxShadow: [
          '0 2px 4px rgba(0,0,0,0.02)',
          '0 8px 24px rgba(0,0,0,0.05)',
          '0 32px 80px rgba(0,0,0,0.07)',
          '0 64px 120px rgba(205,199,249,0.14)',
        ].join(', '),
        width: '100%', maxWidth: '740px',
        padding: '44px 52px',
        position: 'relative', zIndex: 1,
      }}>
        {/* Card top bar */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', marginBottom: '36px',
        }}>
          <img src={logoPrimary} alt="UnyPlus" style={{ height: '26px', width: 'auto' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              width: '22px', height: '22px', borderRadius: '50%',
              backgroundColor: '#EDE9FF',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '11px', fontWeight: 800, color: '#7C72D8',
            }}>
              {step}
            </span>
            <span style={{ fontSize: '12px', color: '#505051', fontWeight: 500 }}>of 3</span>
          </div>
        </div>

        {/* Step indicator */}
        <StepIndicator currentStep={step} />

        {/* Animated step content */}
        <div style={{ position: 'relative', minHeight: '400px' }}>
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={step}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {step === 1 && (
                <UniversityStep
                  selected={university}
                  onSelect={u => { setUniversity(u); setError('') }}
                />
              )}
              {step === 2 && (
                <CourseStep
                  value={course}
                  onChange={v => { setCourse(v); setError('') }}
                />
              )}
              {step === 3 && (
                <UploadStep
                  file={file}
                  onFile={f => { setFile(f); setError('') }}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Error */}
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '13px', color: '#EA3929', margin: '12px 0 0 0', textAlign: 'center' }}
          >
            {error}
          </motion.p>
        )}

        {/* Navigation */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: step === 1 ? 'flex-end' : 'space-between',
          marginTop: '28px', paddingTop: '24px',
          borderTop: '1px solid rgba(0,0,0,0.06)',
        }}>
          {step > 1 && (
            <motion.button
              whileHover={{ backgroundColor: '#F5F3FF' }}
              whileTap={{ scale: 0.97 }}
              onClick={back}
              style={{
                padding: '12px 26px', borderRadius: '9999px',
                border: '1.5px solid rgba(0,0,0,0.13)',
                backgroundColor: 'transparent',
                fontSize: '14px', fontWeight: 600, color: '#212121',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
              }}
            >
              ← Back
            </motion.button>
          )}
          <motion.button
            whileHover={{ backgroundColor: '#212121' }}
            whileTap={{ scale: 0.97 }}
            onClick={next}
            style={{
              padding: '13px 32px', borderRadius: '9999px',
              border: 'none', backgroundColor: '#050505',
              color: '#fff', fontSize: '14px', fontWeight: 700,
              cursor: 'pointer', boxShadow: '0 4px 20px rgba(5,5,5,0.2)',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}
          >
            {step === 3 ? 'Finish & Go to Dashboard →' : 'Continue →'}
          </motion.button>
        </div>
      </div>
    </div>
  )
}
