import { useState, useEffect } from 'react'
import './App.css'
import './Sections.css'

// PUBLIC URL
const publicUrl = import.meta.env.BASE_URL || '/kandb/'

// IMAGES
const imageAssets = {
  interiorImage: new URL('./assets/aboutme.webp', import.meta.url).href,
  hungClothesImage: new URL('./assets/clothes.webp', import.meta.url).href,
  sewingMachineImage: new URL('./assets/sewingmachine.webp', import.meta.url).href,
  leatherImage: new URL('./assets/leather.webp', import.meta.url).href,
  uggsImage: new URL('./assets/uggs.webp', import.meta.url).href,
  weddingDressImage: new URL('./assets/weddingdress.webp', import.meta.url).href,
  beddingImage: new URL('./assets/bedding.webp', import.meta.url).href,
  woolImage: new URL('./assets/wool.webp', import.meta.url).href,
  cashmereImage: new URL('./assets/cashmere.webp', import.meta.url).href,
  silkImage: new URL('./assets/silk.webp', import.meta.url).href,
  sportswearImage: new URL('./assets/sportswear.webp', import.meta.url).href,
  customImage: new URL('./assets/customs.webp', import.meta.url).href,
  accessoriesImage: new URL('./assets/accessories.webp', import.meta.url).href,
}

const dryCleaningItems = [
  { id: 'dc-leather', label: 'Leather & Suede', image: imageAssets.leatherImage, alt: 'Leather garment care' },
  { id: 'dc-uggs', label: 'UGGs & Footwear', image: imageAssets.uggsImage, alt: 'UGGs and footwear care' },
  { id: 'dc-wedding', label: 'Wedding Dress Preservation', image: imageAssets.weddingDressImage, alt: 'Wedding dress preservation' },
  { id: 'dc-bedding', label: 'Comforters & Bedding', image: imageAssets.beddingImage, alt: 'Comforters and bedding care' },
  { id: 'dc-wool', label: 'Wool', image: imageAssets.woolImage, alt: 'Wool garment care' },
  { id: 'dc-cashmere', label: 'Cashmere', image: imageAssets.cashmereImage, alt: 'Cashmere garment care' },
  { id: 'dc-silk', label: 'Silk', image: imageAssets.silkImage, alt: 'Silk garment care' },
  { id: 'dc-sportswear', label: 'Sports Wear', image: imageAssets.sportswearImage, alt: 'Sports wear care' },
  { id: 'dc-customs', label: 'Costumes', image: imageAssets.customImage, alt: 'Custom garment care' },
  { id: 'dc-accessories', label: 'Accessories', image: imageAssets.accessoriesImage, alt: 'Accessory care services' },
]

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

// PLACEHOLDER CONTENT — these are example testimonials from the design mockup,
// not real customer reviews. Swap for real Google reviews before this ships.
const reviews = [
  { id: 'review-1', initial: 'M', name: 'Marie T.', location: 'West Seneca, NY', quote: "They treat every garment like it's their own. My wedding dress came back better than new." },
  { id: 'review-2', initial: 'D', name: 'David R.', location: 'Buffalo, NY', quote: 'Fast, friendly, and the alterations are flawless. This is the only cleaners I trust with suits.' },
  { id: 'review-3', initial: 'L', name: 'Linda S.', location: 'West Seneca, NY', quote: "Same great care since they took over. I've been a customer for over a decade." },
]

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
  { day: 'Mon', open: true, start: 8 * 60, end: 18 * 60 }, // 8:00 AM - 6:00 PM
  { day: 'Tue', open: true, start: 8 * 60, end: 18 * 60 },
  { day: 'Wed', open: false },
  { day: 'Thu', open: true, start: 8 * 60, end: 18 * 60 },
  { day: 'Fri', open: true, start: 8 * 60, end: 18 * 60 },
  { day: 'Sat', open: true, start: 8 * 60, end: 16 * 60 }, // 8:00 AM - 4:00 PM
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
// SECTION COMPONENTS
// These render the page sections and use the static content + props above.
// -----------------------------------------------------------------------------
const HeroSection = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-tags">
          <div className="tag">Dry Cleaning</div>
          <div className="dot" aria-hidden="true"></div>
          <div className="tag">Alterations</div>
          <div className="dot" aria-hidden="true"></div>
          <div className="tag">Pressing</div>
        </div>
        <h1 id="hero-title">Meticulous care for<br/>
          <span className="accent"><i>your finest garments</i></span>
        </h1>
        <p>Where precision meets elegance. Expert cleaning, tailoring, and pressing for everything from everyday wear to cherished heirlooms.</p>
        <div className="hero-cta">
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Request More Info</span>
            {arrowRightSVG}
          </button>
          <a className="btn btn-secondary" href="#services">
            <span>View Services</span>
            {arrowRightSVG}
          </a>
        </div>
      </div>
      <div className="image-container">
        <img className="hero-image" src={`${publicUrl}hero.jpg`} alt="Suite " fetchPriority="high" />
      </div>
    </section>
  )
}

const ServicesSection = () => {
  return (
    <section className="services" id="services">
          <div className="services-header">
            <p className="section-label">WHAT WE DO</p>
            <h2>Our Services</h2>
            <div className="header-line" aria-hidden="true"></div>
          </div>

          <div className="services-intro">
            <h3>Dry Cleaning — Our Main Service</h3>
            <p>We provide expert dry cleaning services for a wide range of garments, from everyday wear to delicate fabrics.</p>
          </div>

          <div className="dry-cleaning-grid">
            {dryCleaningItems.map((item) => (
              <article className="dry-cleaning-card" key={item.id}>
                <div className="dry-cleaning-card-image">
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className="dry-cleaning-card-label">{item.label}</div>
              </article>
            ))}
          </div>

          <div className="service-chips-block">
            <p className="section-label">Everyday & Casual Wear</p>
            <div className="service-items">
              <span className="service-item">Suits</span>
              <span className="service-item">Shirts</span>
              <span className="service-item">Pants</span>
              <span className="service-item">Jackets</span>
              <span className="service-item">Dresses</span>
              <span className="service-item">Coats</span>
              <span className="service-item">Skirts</span>
              <span className="service-item">Blouses</span>
              <span className="service-item">And More...</span>
            </div>
          </div>

          <p className="services-note">Expedited turnaround available upon request.</p>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-card-image">
                <img src={imageAssets.sewingMachineImage} alt="Sewing machine for alterations" />
              </div>
              <div className="service-card-content">
                <h4>Alterations</h4>
                <p>Precision tailoring to ensure the perfect fit, from simple hems to complete garment reshaping.</p>
                <ul className="service-card-list">
                  <li>Hemming</li>
                  <li>Shortening</li>
                  <li>Lengthening</li>
                  <li>Taking In</li>
                  <li>Taking Out</li>
                  <li>Fitting</li>
                  <li>Reshaping</li>
                  <li>And More...</li>
                </ul>
              </div>
            </article>

            <article className="service-card">
              <div className="service-card-image">
                <img src={imageAssets.hungClothesImage} alt="Freshly pressed clothes on hangers" />
              </div>
              <div className="service-card-content">
                <h4>Pressing</h4>
                <p>Crisp, professional pressing so everything you pick up looks ready to wear.</p>
                <ul className="service-card-list">
                  <li>Pressing with dry cleaning</li>
                  <li>Pressing alone</li>
                </ul>
              </div>
            </article>
          </div>
        </section>
  )
}

const ReviewsSection = () => {
  return (
    <section className="reviews" id="reviews">
          <div className="reviews-header">
            <p className="section-label">CUSTOMER REVIEWS</p>
            <h2>Trusted by our neighbors</h2>
            {/* PLACEHOLDER — rating below is example copy from the design mockup, not a real figure. */}
            <div className="reviews-rating">
              <span className="reviews-stars">★★★★★</span>
              <strong>4.9</strong>
              <span>· based on Google reviews</span>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.id}>
                <div className="review-header">
                  <div className="review-avatar" aria-hidden="true">{review.initial}</div>
                  <div>
                    <div className="review-name">{review.name}</div>
                    <div className="review-location">{review.location}</div>
                  </div>
                </div>
                <div className="review-stars">★★★★★</div>
                <p className="review-quote">&ldquo;{review.quote}&rdquo;</p>
              </article>
            ))}
          </div>
        </section>
  )
}


const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <span className="section-label">About Us</span>
        <h2>A Legacy of Care</h2>
        <p>For over 50 years, our doors have been open to this community, built on a foundation of precision, pride, and genuine love for the people we serve. What started as a one man's dedication to the craft of quality dry cleaning has grown into a local landmark of trust.</p>
        <p>Two years ago, we stepped into this story as the new stewards of his legacy. To us, this isn't just a business—it's a responsibility. We are committed to honoring the history of this shop by providing the same meticulous attention to detail from expert repairs and alterations to careful handling of every garment.</p>
        <p>While we are beginning a new chapter, our heart remains the same. We still believe in knowing your name, remembering your preferences, and treating every piece of clothing as if it were our own.</p>
        <p><b>Same Location. Same Heart. Still Caring.</b></p>
      </div>

      <div className="image-container">
        <img className="about-image" src={imageAssets.interiorImage} alt="Interior of K & B dry cleaning shop" />
      </div>
    </section>
  )
}

const ContactSection = ({ nowNY, todaysHoliday }) => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <span className="section-label">Contact Us</span>
          <h2>Call, Visit, or Find Us</h2>

          <div className="contact-layout">
            <div className="contact-details">
              <div className="contact-info">
                <div className="info-item">
                  <div className="info-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <strong>Phone</strong>
                  </div>
                  <p>
                    <a className="phone-link" href="tel:+17166683088">(716) 668-3088</a>
                  </p>
                </div>
                <div className="info-item">
                  <div className="info-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <strong>Email</strong>
                  </div>
                  <p>
                    <a className="phone-link" href="mailto:kandbcleaners3451@gmail.com">kandbcleaners3451@gmail.com</a>
                  </p>
                </div>
                <div className="info-item">
                  <div className="info-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <strong>Location</strong>
                  </div>
                  <p>3451 Clinton St,<br/>West Seneca,<br/> NY 14224</p>
                </div>
                <div className="info-item">
                  <div className="info-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <strong>Hours</strong>
                  </div>
                  <table className="hours-table" aria-label="Business hours">
                    <tbody>
                      {hoursSchedule.map((h) => {
                        const isToday = nowNY.weekday === h.day
                        const isOpen =
                          !todaysHoliday && h.open && nowNY.minutes >= h.start && nowNY.minutes < h.end
                        const timeText = h.open ? `${formatTime(h.start)} – ${formatTime(h.end)}` : 'Closed'
                        return (
                          <tr key={h.day} className={isToday ? 'today' : ''}>
                            <td>{h.day}</td>
                            <td>
                              {timeText}
                              {isToday && isOpen ? (
                                <span className="open-now">Open now</span>
                              ) : null}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="contact-note">Reach out for drop-off questions, pickup timing, and custom garment care.</p>
              <a href="tel:(716) 668-3088" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Call Now</span>
              </a>
            </div>
          </div>
      </div>
      <div className="map-container">
        <iframe
          className="google-map"
          title="K & B Dry Cleaning location"
          src="https://www.google.com/maps?q=3451+Clinton+St,+West+Seneca,+NY+14224&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
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
        <HeroSection />
        {/* <ServicesSection />
        <ReviewsSection /> */}

      
        {/* <GiftCardsSection /> */}
        <AboutSection />
        <ContactSection
          nowNY={nowNY}
          todaysHoliday={todaysHoliday}
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
