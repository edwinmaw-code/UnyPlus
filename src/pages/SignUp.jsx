import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoLight from '@/assets/logo/Unyplus-logo-light.png'

// ── Decorative left-panel background ─────────────────────────────────────────
function LeftPanel() {
  return (
    <div
      style={{
        position: 'relative',
        width: '44%',
        minHeight: '100vh',
        backgroundColor: '#050505',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '48px 52px',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          left: '-80px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          backgroundColor: '#CDC7F9',
          opacity: 0.12,
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-80px',
          right: '-60px',
          width: '340px',
          height: '340px',
          borderRadius: '50%',
          backgroundColor: '#FFE171',
          opacity: 0.08,
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '60%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: '#F9BBC6',
          opacity: 0.07,
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* Logo */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <img src={logoLight} alt="UnyPlus" style={{ height: '32px', width: 'auto' }} />
      </div>

      {/* Center content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <span
          style={{
            display: 'inline-block',
            padding: '4px 14px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(205,199,249,0.15)',
            border: '1px solid rgba(205,199,249,0.25)',
            color: '#CDC7F9',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          Free forever for students
        </span>

        <h2
          style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '40px',
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: '#fff',
            margin: '0 0 20px 0',
          }}
        >
          Your campus.<br />
          Your schedule.<br />
          Your edge.
        </h2>

        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.55)',
            maxWidth: '320px',
            margin: 0,
          }}
        >
          Join thousands of students who never miss a lecture, always know their GPA, and study smarter every day.
        </p>

        {/* Social proof */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: '40px',
          }}
        >
          {/* Stacked avatars */}
          <div style={{ display: 'flex' }}>
            {['#CDC7F9', '#FFE171', '#F9BBC6', '#A6DDFF'].map((color, i) => (
              <div
                key={i}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: color,
                  border: '2px solid #050505',
                  marginLeft: i === 0 ? 0 : '-8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#050505',
                }}
              >
                {['A', 'K', 'Z', 'D'][i]}
              </div>
            ))}
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.5 }}>
            <span style={{ color: '#fff', fontWeight: 700 }}>2,400+ students</span><br />
            already on UnyPlus
          </p>
        </div>
      </div>

      {/* Bottom credit */}
      <p style={{ position: 'relative', zIndex: 1, fontSize: '12px', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
        Built by Deepatec · Made for Africa
      </p>
    </div>
  )
}

// ── Field wrapper with label + error ─────────────────────────────────────────
function Field({ label, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label
        style={{
          fontSize: '13px',
          fontWeight: 600,
          color: '#212121',
          letterSpacing: '0.01em',
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p style={{ fontSize: '12px', color: '#EA3929', margin: 0 }}>{error}</p>
      )}
    </div>
  )
}

// ── Input ────────────────────────────────────────────────────────────────────
function AuthInput({ type = 'text', placeholder, value, onChange, hasError }) {
  const [focused, setFocused] = useState(false)
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        width: '100%',
        height: '48px',
        borderRadius: '12px',
        border: hasError
          ? '1.5px solid #EA3929'
          : focused
          ? '1.5px solid #CDC7F9'
          : '1.5px solid rgba(0,0,0,0.12)',
        backgroundColor: focused ? '#fff' : '#FAFAFA',
        padding: '0 16px',
        fontSize: '15px',
        color: '#050505',
        outline: 'none',
        boxSizing: 'border-box',
        boxShadow: focused ? '0 0 0 3px rgba(205,199,249,0.25)' : 'none',
      }}
    />
  )
}

// ── SignUp Page ───────────────────────────────────────────────────────────────
export default function SignUp() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim()) e.lastName = 'Last name is required'
    if (!form.email.trim()) {
      e.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email address'
    }
    if (!form.password) {
      e.password = 'Password is required'
    } else if (form.password.length < 8) {
      e.password = 'Password must be at least 8 characters'
    }
    if (!form.confirmPassword) {
      e.confirmPassword = 'Please confirm your password'
    } else if (form.password !== form.confirmPassword) {
      e.confirmPassword = 'Passwords do not match'
    }
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setLoading(true)
    // Simulated async auth
    setTimeout(() => {
      setLoading(false)
      navigate('/onboarding')
    }, 1400)
  }

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        fontFamily: 'Satoshi, sans-serif',
        backgroundColor: '#fff',
      }}
    >
      <LeftPanel />

      {/* Right: form panel */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 64px',
          overflowY: 'auto',
        }}
      >
        <div style={{ width: '100%', maxWidth: '440px' }}>
          {/* Heading */}
          <div style={{ marginBottom: '36px' }}>
            <h1
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '32px',
                fontWeight: 900,
                color: '#050505',
                letterSpacing: '-0.025em',
                margin: '0 0 8px 0',
              }}
            >
              Create your account
            </h1>
            <p style={{ fontSize: '15px', color: '#505051', margin: 0, lineHeight: 1.6 }}>
              Get started with UnyPlus — it&apos;s completely free.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* First + Last name row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <Field label="First name" error={errors.firstName}>
                <AuthInput
                  placeholder="Ama"
                  value={form.firstName}
                  onChange={set('firstName')}
                  hasError={!!errors.firstName}
                />
              </Field>
              <Field label="Last name" error={errors.lastName}>
                <AuthInput
                  placeholder="Owusu"
                  value={form.lastName}
                  onChange={set('lastName')}
                  hasError={!!errors.lastName}
                />
              </Field>
            </div>

            <Field label="Email address" error={errors.email}>
              <AuthInput
                type="email"
                placeholder="ama@university.edu.gh"
                value={form.email}
                onChange={set('email')}
                hasError={!!errors.email}
              />
            </Field>

            <Field label="Password" error={errors.password}>
              <AuthInput
                type="password"
                placeholder="At least 8 characters"
                value={form.password}
                onChange={set('password')}
                hasError={!!errors.password}
              />
            </Field>

            <Field label="Confirm password" error={errors.confirmPassword}>
              <AuthInput
                type="password"
                placeholder="Repeat your password"
                value={form.confirmPassword}
                onChange={set('confirmPassword')}
                hasError={!!errors.confirmPassword}
              />
            </Field>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: '4px',
                width: '100%',
                height: '52px',
                borderRadius: '9999px',
                backgroundColor: loading ? '#505051' : '#050505',
                color: '#fff',
                fontSize: '15px',
                fontWeight: 700,
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                letterSpacing: '0.01em',
                boxShadow: '0 4px 16px rgba(5,5,5,0.18)',
              }}
              onMouseEnter={(e) => { if (!loading) e.currentTarget.style.backgroundColor = '#212121' }}
              onMouseLeave={(e) => { if (!loading) e.currentTarget.style.backgroundColor = '#050505' }}
            >
              {loading ? (
                <>
                  <SpinnerIcon />
                  Creating account…
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          {/* Sign in link */}
          <p
            style={{
              textAlign: 'center',
              marginTop: '28px',
              fontSize: '14px',
              color: '#505051',
            }}
          >
            Already have an account?{' '}
            <Link
              to="/signin"
              style={{
                color: '#050505',
                fontWeight: 700,
                textDecoration: 'none',
                borderBottom: '1.5px solid #CDC7F9',
                paddingBottom: '1px',
              }}
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

// ── Spinner icon ──────────────────────────────────────────────────────────────
function SpinnerIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      style={{
        animation: 'spin 0.8s linear infinite',
      }}
    >
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  )
}
