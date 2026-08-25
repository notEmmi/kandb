import { useState, useEffect } from 'react'
import './App.css'
import ServicesSection from './components/ServicesSection'
import HeroSection from './components/HeroSection'
import ReviewsSection from './components/ReviewsSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'

// PUBLIC URL
const publicUrl = import.meta.env.BASE_URL || '/kandb/'

const placeholderImage = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="#e5e7eb"/><text x="400" y="300" text-anchor="middle" dominant-baseline="middle" fill="#6b7280" font-family="Arial, sans-serif" font-size="32">Image placeholder</text></svg>',
)}`

const imageAssets = {
  everydayImage: `${publicUrl}casualwear.jpg`,
  leatherImage: `${publicUrl}leather.jpg`,
  uggsImage: `${publicUrl}uggs.jpg`,
  weddingDressImage: `${publicUrl}weddingdress.jpg`,
  beddingImage: `${publicUrl}bedding.jpg`,
  materialImage: `${publicUrl}material.jpg`,
  sportswearImage: `${publicUrl}sportswear.jpg`,
  costumesImage: `${publicUrl}costumes.jpg`,
  accessoriesImage: `${publicUrl}accessories.jpg`,
  alterationsImage1: `${publicUrl}alterations1.jpg`,
  hungClothesImage: placeholderImage,
}

const instagramSVG = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const facebookSVG = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
)

const arrowRightSVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
)

const phoneSVG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
)

const emailSVG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
)

const locationSVG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

const clockSVG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const giftTierValues = [25, 50, 100, 150]

// -----------------------------------------------------------------------------
// TIME / HOLIDAY HELPERS
// These are static or pure helpers and can live at module scope.
// -----------------------------------------------------------------------------
const getNthWeekdayOfMonth = (year, month, weekday, n) => {
  const d = new Date(Date.UTC(year, month - 1, 1))
  let count = 0
  while (true) {
    if (d.getUTCDay() === weekday) {
      count += 1
      if (count === n) return d.getUTCDate()
    }
    d.setUTCDate(d.getUTCDate() + 1)
  }
}

const getLastWeekdayOfMonth = (year, month, weekday) => {
  const d = new Date(Date.UTC(year, month, 0))
  while (d.getUTCDay() !== weekday) d.setUTCDate(d.getUTCDate() - 1)
  return d.getUTCDate()
}

const getHolidaysForYear = (year) => [
  { name: "New Year's Day", month: 1, day: 1 },
  { name: 'Memorial Day', month: 5, day: getLastWeekdayOfMonth(year, 5, 1) },
  { name: 'Independence Day', month: 7, day: 4 },
  { name: 'Labor Day', month: 9, day: getNthWeekdayOfMonth(year, 9, 1, 1) },
  { name: 'Christmas Day', month: 12, day: 25 },
]

const hoursSchedule = [
  { day: 'Mon', open: true, start: 9 * 60, end: 17 * 60 }, // 9:00 AM - 5:00 PM
  { day: 'Tue', open: true, start: 9 * 60, end: 17 * 60 },
  { day: 'Wed', open: false },
  { day: 'Thu', open: true, start: 9 * 60, end: 17 * 60 },
  { day: 'Fri', open: true, start: 9 * 60, end: 17 * 60 },
  { day: 'Sat', open: true, start: 9 * 60, end: 15 * 60 }, // 9:00 AM - 3:00 PM
  { day: 'Sun', open: false }, // Closed
]

const getNYTime = () => {
  const now = new Date()
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now)

  const getPart = (type) => parts.find((p) => p.type === type)?.value || ''
  const weekday = getPart('weekday')
  const hour = parseInt(getPart('hour') || '0', 10)
  const minute = parseInt(getPart('minute') || '0', 10)

  return {
    weekday,
    minutes: hour * 60 + minute,
    year: parseInt(getPart('year') || '0', 10),
    month: parseInt(getPart('month') || '0', 10),
    day: parseInt(getPart('day') || '0', 10),
  }
}

const formatTime = (minutes) => {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  const ampm = h >= 12 ? 'PM' : 'AM'
  const hr12 = ((h + 11) % 12) + 1
  return `${hr12}:${m.toString().padStart(2, '0')} ${ampm}`
}

// -----------------------------------------------------------------------------
// APP STATE / LIVE STATUS
// These values depend on current time and UI state, so they belong in App.
// -----------------------------------------------------------------------------
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  const [nowNY, setNowNY] = useState(getNYTime())

  useEffect(() => {
    const id = setInterval(() => setNowNY(getNYTime()), 30 * 1000)
    return () => clearInterval(id)
  }, [])

  const todaysHoliday = getHolidaysForYear(nowNY.year).find(
    (h) => h.month === nowNY.month && h.day === nowNY.day
  )

  const todaySchedule = hoursSchedule.find((h) => h.day === nowNY.weekday)
  const isCurrentlyOpen = Boolean(
    !todaysHoliday &&
      todaySchedule?.open &&
      nowNY.minutes >= todaySchedule.start &&
      nowNY.minutes < todaySchedule.end
  )

  const statusLabel = todaysHoliday
    ? `Closed — ${todaysHoliday.name}`
    : isCurrentlyOpen
    ? 'Open now'
    : 'Closed'

  const statusClass = todaysHoliday ? 'is-holiday' : isCurrentlyOpen ? 'is-open' : 'is-closed'

  return (
    <div className="app">
      <div className="quick-contact">
        <div className={`quick-contact-status ${statusClass}`}>
          <span className="dot" aria-hidden="true"></span>
          <span>{statusLabel}</span>
        </div>

        <div className="quick-contact-right">
          <a href="tel:+17166683088" className="quick-contact-link small" aria-label="Call K and B Dry Cleaners">
            (716) 668-3088
          </a>
          <a href="mailto:kandbcleaners3451@gmail.com" className="quick-contact-link small" aria-label="Email K and B Dry Cleaners">
            kandbcleaner@gmail.com
          </a>
          <a
            href="https://www.instagram.com/kandbcleaners/"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-contact-icon"
            aria-label="Follow us on Instagram"
          >
            {instagramSVG}
          </a>
          <a
            href="https://www.facebook.com/people/KB-dry-cleaners/61589575148506/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-contact-icon"
            aria-label="Follow us on Facebook"
          >
            {facebookSVG}
          </a>
        </div>
      </div>
      <nav className="top-nav">
        <div className="logo">
          <img className="logo-img" src={`${publicUrl}logo.svg`} alt="K & B logo" />
          <p className="logo-tagline">Dry Cleaners &<br/>Alterations</p>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'is-open' : ''}`} id="primary-navigation">
          <a href="#services" onClick={closeMobileMenu}>Services</a>
          <a href="#reviews" onClick={closeMobileMenu}>Reviews</a>
          {/* <a href="#gift-cards" onClick={closeMobileMenu}>Gift Cards</a> */}
          <a href="#about" onClick={closeMobileMenu}>About Us</a>
          <a href="#contact" onClick={closeMobileMenu}>Contact</a>
        </div>

        <button
          className="nav-toggle"
          type="button"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileMenuOpen((currentValue) => !currentValue)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <main className="main">
        <HeroSection publicUrl={publicUrl} arrowRightSVG={arrowRightSVG} />
        <ServicesSection images={imageAssets} />
        <ReviewsSection />

        {/* <GiftCardsSection /> */}
        <AboutSection publicUrl={publicUrl} />
        <ContactSection
          nowNY={nowNY}
          todaysHoliday={todaysHoliday}
          hoursSchedule={hoursSchedule}
          formatTime={formatTime}
          phoneSVG={phoneSVG}
          emailSVG={emailSVG}
          locationSVG={locationSVG}
          clockSVG={clockSVG}
        />
      </main>

      <footer className="footer">
        <div className="top-footer">
          <div className="footer-social">
            <span>Follow Us</span>
            <div className="social-links">
              <a
                href="https://www.instagram.com/kandbcleaners/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                {instagramSVG}
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/people/KB-dry-cleaners/61589575148506/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
              >
                {facebookSVG}
                <span>Facebook</span>
              </a>
            </div>
          </div>
          <div className="footer-partner">
            <span>Associated with</span>
            <div className="footer-partner-links">
              <a
                href="https://www.tomandluigistailorshop.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                Tom and Luigi Tailor Shop
              </a>
              <a
                href="mailto:tomandluigis@gmail.com"
                className="partner-email"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                tomandluigis@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <p>&copy; {new Date().getFullYear()} K & B Dry Cleaners and Alterations. All rights reserved.</p>
          <div className="footer-contact">
            <p>Contact Us</p>
            <a href="mailto:kandbcleaners3451@gmail.com">kandbcleaners3451@gmail.com</a>
            <a href="tel:+17166683088">(716) 668-3088</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
