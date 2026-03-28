import { Link } from 'react-router-dom'
import {
  Gauge,
  Wand2,
  Trophy,
  Target,
  Play,
  Phone,
  Mail,
} from 'lucide-react'
import TestimonialSlider from '@/components/ui/testimonial-slider'

// ── Brand Assets ──────────────────────────────────────────────────────────────
import logoPrimary   from '@/assets/logo/Unyplus-logo-primary.png'
import logoLight     from '@/assets/logo/Unyplus-logo-light.png'
import logoIcon      from '@/assets/logo/Unyplus-icon.png'
import heroStudent   from '@/assets/images/Unyplus-hero-happy-student.png'
import phoneMain     from '@/assets/images/Unyplus-phone-Main.png'
import phoneHomepage from '@/assets/images/Unyplus-phone-homepage.png'
import phoneOnboard  from '@/assets/images/Unyplus-phone-onboarding.png'
import phoneCongrats from '@/assets/images/Unyplus-phone-Congratulations.png'
import happyStudents from '@/assets/images/Unyplus-happy-students-with-phone.png'

// B&W university icons
import uni01 from '@/assets/icons/Black-white-university-icons/University-icon-01.png'
import uni02 from '@/assets/icons/Black-white-university-icons/University-icon-02.png'
import uni03 from '@/assets/icons/Black-white-university-icons/University-icon-03.png'
import uni04 from '@/assets/icons/Black-white-university-icons/University-icon-04.png'
import uni05 from '@/assets/icons/Black-white-university-icons/University-icon-05.png'
import uni06 from '@/assets/icons/Black-white-university-icons/University-icon-06.png'
import uni07 from '@/assets/icons/Black-white-university-icons/University-icon-07.png'
import uni08 from '@/assets/icons/Black-white-university-icons/University-icon-08.png'
import uni09 from '@/assets/icons/Black-white-university-icons/University-icon-09.png'
import uni10 from '@/assets/icons/Black-white-university-icons/University-icon-10.png'
import uni11 from '@/assets/icons/Black-white-university-icons/University-icon-11.png'
import uni12 from '@/assets/icons/Black-white-university-icons/University-icon-12.png'

// ── Static Data ───────────────────────────────────────────────────────────────

const marqueeItems = [
  'Never miss a lecture',
  'AI-generated study plans',
  'Beat burnout with gamified studying',
  'Know your GPA before results drop',
  'Your Campus. Your schedule. Your edge.',
  'Built for African students by African students',
]

const uniLogos = [uni01, uni02, uni03, uni04, uni05, uni06, uni07, uni08, uni09, uni10, uni11, uni12]

const smallFeatures = [
  {
    icon: Wand2,
    title: 'AI Scheduler',
    description:
      'Upload your timetable and generate a personal study schedule that fits perfectly around your lectures. No more scrambling when classes get canceled.',
    bg: '#FFE171',
  },
  {
    icon: Trophy,
    title: 'Study Space',
    description:
      'Study Buddy, Quizzes, and Focus Timer — a gamified experience designed to keep you engaged and on top of every course.',
    bg: '#F9BBC6',
  },
  {
    icon: Target,
    title: 'GPA Predictor',
    description:
      'UnyPlus tracks your quiz performance across every course and predicts your GPA range — so you\'re never caught off guard when results drop.',
    bg: '#A6DDFF',
  },
]

// ── Marquee Ticker ────────────────────────────────────────────────────────────

function MarqueeTicker() {
  const items = [...marqueeItems, ...marqueeItems] // duplicate for seamless loop

  return (
    <div
      className="overflow-hidden border-b"
      style={{ borderColor: 'rgba(0,0,0,0.06)', backgroundColor: '#fff', padding: '10px 0' }}
    >
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
      `}</style>
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2 whitespace-nowrap"
            style={{ fontSize: '12px', color: '#505051', padding: '0 24px' }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: '#CDC7F9' }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Navbar ────────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#fff' }}>
      <nav
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: '1200px',
          padding: '0 40px',
          height: '64px',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logoPrimary} alt="UnyPlus" style={{ height: '32px', width: 'auto' }} />
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center" style={{ gap: '32px' }}>
          {[
            { label: 'Home',         href: '/'             },
            { label: 'Features',     href: '#features'     },
            { label: 'How it works', href: '#how-it-works' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#212121',
                textDecoration: 'none',
                transition: 'color 150ms',
              }}
              onMouseEnter={e => (e.target.style.color = '#050505')}
              onMouseLeave={e => (e.target.style.color = '#212121')}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right: Sign In + Get started */}
        <div className="flex items-center" style={{ gap: '16px' }}>
          <Link
            to="/signin"
            style={{ fontSize: '14px', fontWeight: 500, color: '#212121', textDecoration: 'none' }}
          >
            Sign In
          </Link>
          <Link to="/signup">
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#050505',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 600,
                padding: '10px 20px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 150ms, transform 150ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#212121')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#050505')}
            >
              Get started
            </button>
          </Link>
        </div>
      </nav>

      {/* Scrolling marquee */}
      <MarqueeTicker />
    </header>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section style={{ backgroundColor: '#fff', overflow: 'hidden' }}>
      <div
        className="mx-auto"
        style={{
          maxWidth: '1200px',
          padding: '60px 40px 0 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'flex-start',
          minHeight: '680px',
          gap: '40px',
        }}
      >
        {/* Left: Text */}
        <div style={{ paddingRight: '0', paddingLeft: '24px', paddingTop: '72px' }}>
          {/* Small icon */}
          <div style={{ marginBottom: '20px' }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#EDE9FF" />
              <path d="M16 8L17.5 13.5H23L18.5 17L20 22.5L16 19.5L12 22.5L13.5 17L9 13.5H14.5L16 8Z" fill="#CDC7F9" />
            </svg>
          </div>

          <h1
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '60px',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#050505',
              margin: '0 0 20px 0',
            }}
          >
            Your academic life,<br />finally organized
          </h1>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#505051',
              maxWidth: '440px',
              margin: '0 0 36px 0',
            }}
          >
            Upload your timetable and UnyPlus handles the rest — schedules, study plans, and reminders built around you.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/signup">
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#050505',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 600,
                  padding: '14px 28px',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 150ms, transform 150ms',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#212121')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#050505')}
              >
                Get started
              </button>
            </Link>

            {/* Watch a demo button */}
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0',
              }}
            >
              <span
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#050505',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Play className="w-4 h-4" style={{ color: '#fff', marginLeft: '2px' }} fill="#fff" />
              </span>
              <span style={{ fontSize: '15px', fontWeight: 600, color: '#050505' }}>
                Watch a demo
              </span>
            </button>
          </div>
        </div>

        {/* Right: Student on beanbag with lavender circle */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: '100%',
            minHeight: '700px',
          }}
        >
          {/* Lavender circle — bleeds off right edge */}
          <div
            style={{
              position: 'absolute',
              right: '-120px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              backgroundColor: '#EDE9FF',
              zIndex: 0,
            }}
          />
          {/* Student image */}
          <img
            src={heroStudent}
            alt="Happy student with laptop"
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: '560px',
              objectFit: 'contain',
              marginRight: '-40px',
            }}
          />
        </div>
      </div>
    </section>
  )
}

// ── University Strip ──────────────────────────────────────────────────────────

function UniversityStrip() {
  // Duplicate for seamless infinite loop
  const logos = [...uniLogos, ...uniLogos]

  return (
    <section style={{ backgroundColor: '#F4F4F4', padding: '36px 0', overflow: 'hidden' }}>
      <style>{`
        @keyframes marquee-logos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-logos-track {
          display: flex;
          width: max-content;
          animation: marquee-logos 24s linear infinite;
        }
        .marquee-logos-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee-logos-track">
        {logos.map((logo, i) => (
          <div
            key={i}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '14px',
              backgroundColor: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              flexShrink: 0,
              margin: '0 14px',
            }}
          >
            <img
              src={logo}
              alt={`University logo ${(i % 12) + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Features ──────────────────────────────────────────────────────────────────

function Features() {
  return (
    <section id="features" style={{ backgroundColor: '#fff', padding: '96px 0' }}>
      <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 40px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '40px',
              fontWeight: 900,
              color: '#050505',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              margin: '0 0 12px 0',
            }}
          >
            Best features
          </h2>
          <p style={{ fontSize: '16px', color: '#505051', lineHeight: 1.6, margin: 0 }}>
            Every thing a serious student needs, in one place.
          </p>
        </div>

        {/* Large Smart Dashboard card — phone overflows ABOVE the card */}
        <div style={{ paddingTop: '140px', position: 'relative', marginBottom: '32px' }}>
          <div
            style={{
              backgroundColor: '#CDC7F9',
              borderRadius: '24px',
              padding: '48px 48px 56px 56px',
              display: 'grid',
              gridTemplateColumns: '1fr 1.3fr',
              gap: '32px',
              alignItems: 'flex-start',
              position: 'relative',
            }}
          >
            {/* Left: text */}
            <div>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  backgroundColor: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              >
                <Gauge style={{ width: '24px', height: '24px', color: '#050505' }} strokeWidth={1.8} />
              </div>
              <h3
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: '26px',
                  fontWeight: 800,
                  color: '#050505',
                  letterSpacing: '-0.02em',
                  margin: '0 0 14px 0',
                }}
              >
                A Smart Dashboard
              </h3>
              <p style={{ fontSize: '15px', color: '#212121', lineHeight: 1.7, margin: 0 }}>
                See your ongoing and upcoming lectures, countdowns, reminders, school updates, and
                predicted GPA — all on one screen the moment you log in.
              </p>
            </div>

            {/* Right: phone screenshots — overflow ABOVE the card */}
            <div style={{ position: 'relative', height: '320px' }}>
              <img
                src={phoneHomepage}
                alt="UnyPlus dashboard screens"
                style={{
                  position: 'absolute',
                  top: '-140px',
                  right: '-16px',
                  height: '560px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 24px 56px rgba(0,0,0,0.24))',
                }}
              />
            </div>
          </div>
        </div>

        {/* Three smaller cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {smallFeatures.map(({ icon: Icon, title, description, bg }) => (
            <div
              key={title}
              style={{
                backgroundColor: bg,
                borderRadius: '24px',
                padding: '32px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              >
                <Icon style={{ width: '22px', height: '22px', color: '#050505' }} strokeWidth={1.8} />
              </div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#050505',
                  margin: '0 0 10px 0',
                  letterSpacing: '-0.01em',
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: '14px', color: '#212121', lineHeight: 1.7, margin: 0 }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── How It Works ──────────────────────────────────────────────────────────────

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ backgroundColor: '#EDE9FF', padding: '96px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 40px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '40px',
              fontWeight: 900,
              color: '#050505',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              margin: '0 0 12px 0',
            }}
          >
            How it works
          </h2>
          <p style={{ fontSize: '16px', color: '#505051', lineHeight: 1.6, margin: 0 }}>
            Get started in less than 3mins
          </p>
        </div>

        {/* Two onboarding phones side by side */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '0px',
          }}
        >
          <img
            src={phoneOnboard}
            alt="UnyPlus onboarding — Your Class Timetable, Automated"
            style={{
              width: '100%',
              maxWidth: '640px',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    </section>
  )
}

// ── Study Space: "Where studying feels like winning" ──────────────────────────

function StudyWinSection() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '96px 0' }}>
      <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 40px' }}>
        {/* Heading centered */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <h2
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '40px',
              fontWeight: 900,
              color: '#050505',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              margin: '0 0 14px 0',
            }}
          >
            Where studying feels like winning!
          </h2>
          <p style={{ fontSize: '16px', color: '#505051', lineHeight: 1.6, margin: 0 }}>
            Most student avoid studying because it feels like a chore. We fixed that.
          </p>
        </div>

        {/* Two column: left text + right phones */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left: diamond icon + text */}
          <div>
            {/* Diamond outline icon */}
            <div style={{ marginBottom: '28px' }}>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <path d="M22 6L26 17H37L28 24L31.5 35.5L22 29.5L12.5 35.5L16 24L7 17H18L22 6Z"
                  fill="none" stroke="#CDC7F9" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>
            <p style={{ fontSize: '17px', color: '#212121', lineHeight: 1.8, margin: 0 }}>
              The moment you enter the Quiz, you step into a different world. Earn Points while
              studying, designed to trick your brain into thinking it's playing a game.
            </p>
          </div>

          {/* Right: phones — bleed off right edge */}
          <div style={{ overflow: 'visible', marginRight: '-60px' }}>
            <img
              src={phoneCongrats}
              alt="UnyPlus gamified quiz — congratulations screen"
              style={{
                width: '100%',
                maxWidth: '680px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 24px 56px rgba(0,0,0,0.16))',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── "Because when your mind is having fun" ────────────────────────────────────

function MindFunSection() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '0 0 96px 0' }}>
      <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 40px' }}>
        {/* Centered heading */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '36px',
              fontWeight: 900,
              color: '#050505',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Because when your mind is having fun,<br />it never gets tired.
          </h2>
        </div>

        {/* Two phones side by side */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={phoneMain}
            alt="UnyPlus study space and home screens"
            style={{
              width: '100%',
              maxWidth: '680px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.1))',
            }}
          />
        </div>
      </div>
    </section>
  )
}

// ── Video Section ─────────────────────────────────────────────────────────────

function VideoSection() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '48px 0 96px 0' }}>
      <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 40px' }}>
        {/* Heading */}
        <h2
          style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '36px',
            fontWeight: 900,
            color: '#050505',
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          Watch UnyPlus in action
        </h2>

        {/* YouTube embed */}
        <div
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0,0,0,0.14)',
            position: 'relative',
            paddingBottom: '56.25%', /* 16:9 aspect ratio */
            height: 0,
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Watch UnyPlus in action"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>
      </div>
    </section>
  )
}

// ── CTA Section ───────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section
      style={{
        backgroundColor: '#CDC7F9',
        overflow: 'visible',
        position: 'relative',
      }}
    >
      {/* Full-width grid — no maxWidth container so image bleeds to edge */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'flex-end',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        {/* Left: text */}
        <div style={{ padding: '80px 60px 80px 120px' }}>
          <h2
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '44px',
              fontWeight: 900,
              color: '#050505',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              margin: '0 0 16px 0',
            }}
          >
            Your semester begins<br />with{' '}
            <strong style={{ fontWeight: 900 }}>UnyPlus</strong>
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#212121',
              lineHeight: 1.7,
              margin: '0 0 32px 0',
              maxWidth: '380px',
            }}
          >
            Join students who have stopped guessing and started winning. UnyPlus is free to get started.
          </p>
          <Link to="/onboarding">
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#050505',
                color: '#fff',
                fontSize: '15px',
                fontWeight: 600,
                padding: '14px 28px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 150ms, transform 150ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#212121')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#050505')}
            >
              Get started Today!
            </button>
          </Link>
        </div>

        {/* Right: happy students photo — grounded at bottom, overflows top */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            overflow: 'visible',
          }}
        >
          <img
            src={happyStudents}
            alt="Students using UnyPlus"
            style={{
              width: '110%',
              maxWidth: '680px',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
              marginTop: '-80px',  /* overflows above the card top edge */
            }}
          />
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

const socialIconStyle = {
  width: '36px',
  height: '36px',
  borderRadius: '8px',
  backgroundColor: 'rgba(255,255,255,0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  transition: 'background-color 150ms',
  flexShrink: 0,
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#050505', padding: '56px 0 40px 0' }}>
      <div
        className="mx-auto"
        style={{
          maxWidth: '1200px',
          padding: '0 40px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr',
            gap: '48px',
            paddingBottom: '40px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Left: Brand */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <img src={logoIcon} alt="UnyPlus icon" style={{ height: '32px', width: 'auto' }} />
              <span
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#fff',
                  fontFamily: 'Satoshi, sans-serif',
                }}
              >
                UnyPlus
              </span>
            </div>
            <p
              style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.7,
                margin: '0 0 24px 0',
                maxWidth: '260px',
              }}
            >
              The student companion app built for every smart university student.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" style={socialIconStyle}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="rgba(255,255,255,0.7)">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" aria-label="Twitter" style={socialIconStyle}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="rgba(255,255,255,0.7)">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" style={socialIconStyle}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="rgba(255,255,255,0.7)" stroke="none"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" style={socialIconStyle}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="rgba(255,255,255,0.7)">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Center: Product */}
          <div>
            <p
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#fff',
                margin: '0 0 20px 0',
              }}
            >
              Product
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Features',     href: '#features'     },
                { label: 'How it works', href: '#how-it-works' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.55)',
                      textDecoration: 'none',
                      transition: 'color 150ms',
                    }}
                    onMouseEnter={e => (e.target.style.color = '#fff')}
                    onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact Us */}
          <div>
            <p
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#fff',
                margin: '0 0 20px 0',
              }}
            >
              Contact Us
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li>
                <a
                  href="tel:+233595212028"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    transition: 'color 150ms',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  <Phone style={{ width: '14px', height: '14px', flexShrink: 0 }} />
                  (+233) 595 212 028
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@unyplus.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    transition: 'color 150ms',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  <Mail style={{ width: '14px', height: '14px', flexShrink: 0 }} />
                  support@unyplus.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: '24px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            © 2026 Deepatec (Deeper African Tech Innovations Limited). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Landing() {
  return (
    <div style={{ fontFamily: 'Satoshi, sans-serif', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <UniversityStrip />
      <Features />
      <HowItWorks />
      <StudyWinSection />
      <MindFunSection />
      <VideoSection />
      <TestimonialSlider />
      <CTASection />
      <Footer />
    </div>
  )
}
