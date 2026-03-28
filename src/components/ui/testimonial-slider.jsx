import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "UnyPlus completely transformed how I manage my semester. I've not missed a single lecture since I started using it!",
    name: "Ama Owusu",
    username: "@amaowusu",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?fm=jpg&q=60&w=300",
  },
  {
    id: 2,
    quote: "The GPA predictor is honestly scary accurate. It warned me I was heading for a C before results even dropped. It saved me.",
    name: "Kofi Mensah",
    username: "@kofimensah",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=300",
  },
  {
    id: 3,
    quote: "Quiz mode feels like a game. I studied for 3 hours straight without even noticing. Nothing else has ever done that for me.",
    name: "Zainab Alhassan",
    username: "@zainabalhassan",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fm=jpg&q=60&w=300",
  },
  {
    id: 4,
    quote: "I uploaded my timetable and my entire week was automatically organized in under 2 minutes. Genuinely life-changing.",
    name: "David Asiedu",
    username: "@davidasiedu",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=300",
  },
  {
    id: 5,
    quote: "No more 'I forgot about that test'. UnyPlus keeps me three steps ahead of every deadline and assignment. I love it.",
    name: "Priscilla Boateng",
    username: "@priscillaboateng",
    avatar: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?fm=jpg&q=60&w=300",
  },
]

const getVisibleCount = (width) => {
  if (width >= 1280) return 3
  if (width >= 768) return 2
  return 1
}

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  )
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef(null)
  const [direction, setDirection] = useState(1)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth
      const oldVisible = getVisibleCount(windowWidth)
      const newVisible = getVisibleCount(newWidth)
      setWindowWidth(newWidth)
      if (oldVisible !== newVisible) {
        const maxIdx = testimonials.length - newVisible
        if (currentIndex > maxIdx) setCurrentIndex(Math.max(0, maxIdx))
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth, currentIndex])

  useEffect(() => {
    if (!isAutoPlaying) return
    autoPlayRef.current = setInterval(() => {
      const visibleCount = getVisibleCount(windowWidth)
      const maxIndex = testimonials.length - visibleCount
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) return Math.max(0, prev - 1)
        if (prev <= 0) return Math.min(maxIndex, prev + 1)
        return prev + direction
      })
    }, 4000)
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current) }
  }, [isAutoPlaying, currentIndex, windowWidth, direction])

  const visibleCount = getVisibleCount(windowWidth)
  const maxIndex = testimonials.length - visibleCount
  const canGoNext = currentIndex < maxIndex
  const canGoPrev = currentIndex > 0

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const goNext = () => {
    if (!canGoNext) return
    setDirection(1)
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    pauseAutoPlay()
  }

  const goPrev = () => {
    if (!canGoPrev) return
    setDirection(-1)
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
    pauseAutoPlay()
  }

  const handleDragEnd = (_event, info) => {
    if (info.offset.x < -30 && canGoNext) goNext()
    else if (info.offset.x > 30 && canGoPrev) goPrev()
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    pauseAutoPlay()
  }

  return (
    <section style={{ backgroundColor: '#fff', padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span
            style={{
              display: 'inline-block',
              padding: '4px 14px',
              borderRadius: '9999px',
              backgroundColor: '#EDE9FF',
              color: '#7C72D8',
              fontWeight: 600,
              fontSize: '12px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Testimonials
          </span>
          <h2
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '40px',
              fontWeight: 900,
              color: '#050505',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            What students are saying
          </h2>
        </motion.div>

        {/* Slider container */}
        <div style={{ position: 'relative' }} ref={containerRef}>

          {/* Navigation buttons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '8px',
              marginBottom: '24px',
            }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goPrev}
              disabled={!canGoPrev}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: canGoPrev ? '#fff' : '#f5f5f5',
                border: '1px solid rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: canGoPrev ? 'pointer' : 'not-allowed',
                boxShadow: canGoPrev ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              <ChevronLeft size={18} style={{ color: canGoPrev ? '#050505' : '#bbb' }} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goNext}
              disabled={!canGoNext}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: canGoNext ? '#fff' : '#f5f5f5',
                border: '1px solid rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: canGoNext ? 'pointer' : 'not-allowed',
                boxShadow: canGoNext ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              <ChevronRight size={18} style={{ color: canGoNext ? '#050505' : '#bbb' }} />
            </motion.button>
          </div>

          {/* Cards track */}
          <div style={{ overflow: 'hidden' }}>
            <motion.div
              style={{ display: 'flex' }}
              animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
              transition={{ type: 'spring', stiffness: 70, damping: 20 }}
            >
              {testimonials.map((t) => (
                <motion.div
                  key={t.id}
                  style={{
                    flexShrink: 0,
                    width: `${100 / visibleCount}%`,
                    padding: '8px',
                    cursor: 'grab',
                  }}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                >
                  <motion.div
                    style={{
                      backgroundColor: '#fff',
                      borderRadius: '20px',
                      padding: '28px',
                      border: '1px solid rgba(0,0,0,0.06)',
                      boxShadow: '0 4px 24px rgba(205,199,249,0.15)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    whileHover={{ boxShadow: '0 12px 40px rgba(205,199,249,0.35)' }}
                  >
                    {/* Decorative quote mark */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-4px',
                        left: '-4px',
                        opacity: 0.07,
                        pointerEvents: 'none',
                      }}
                    >
                      <Quote size={64} style={{ color: '#CDC7F9' }} />
                    </div>

                    {/* Quote text */}
                    <p
                      style={{
                        fontSize: '15px',
                        color: '#212121',
                        lineHeight: 1.75,
                        margin: '0 0 20px 0',
                        position: 'relative',
                      }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        borderTop: '1px solid rgba(0,0,0,0.05)',
                        paddingTop: '16px',
                      }}
                    >
                      <img
                        src={t.avatar}
                        alt={t.name}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          flexShrink: 0,
                          border: '2px solid #EDE9FF',
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                      <div>
                        <p style={{ fontSize: '14px', fontWeight: 700, color: '#050505', margin: 0 }}>
                          {t.name}
                        </p>
                        <p style={{ fontSize: '12px', color: '#505051', margin: 0 }}>{t.username}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dot indicators */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '6px',
              marginTop: '32px',
            }}
          >
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <motion.button
                key={i}
                onClick={() => goToSlide(i)}
                style={{
                  height: '8px',
                  width: i === currentIndex ? '24px' : '8px',
                  borderRadius: '9999px',
                  backgroundColor: i === currentIndex ? '#CDC7F9' : 'rgba(0,0,0,0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'width 300ms ease, background-color 300ms ease',
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
