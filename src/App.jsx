import { useState, useEffect } from 'react'
import './App.css'

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

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)  

  const publicUrl = import.meta.env.BASE_URL || '/kandb/'

  const closeMobileMenu = () => setMobileMenuOpen(false)

  // Business hours (America/New_York)
  const hoursSchedule = [
    { day: 'Mon', open: true, start: 9 * 60, end: 17 * 60 },
    { day: 'Tue', open: true, start: 9 * 60, end: 17 * 60 },
    { day: 'Wed', open: false },
    { day: 'Thu', open: true, start: 9 * 60, end: 17 * 60 },
    { day: 'Fri', open: true, start: 9 * 60, end: 17 * 60 },
    { day: 'Sat', open: true, start: 9 * 60, end: 15 * 60 },
    { day: 'Sun', open: false },
  ]

  const getNYTime = () => {
    const now = new Date()
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(now)

    const weekday = parts.find((p) => p.type === 'weekday')?.value || ''
    const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10)
    const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10)
    return { weekday, minutes: hour * 60 + minute }
  }

  const [nowNY, setNowNY] = useState(getNYTime())

  useEffect(() => {
    const id = setInterval(() => setNowNY(getNYTime()), 30 * 1000)
    return () => clearInterval(id)
  }, [])

  const todaySchedule = hoursSchedule.find((h) => h.day === nowNY.weekday)
  const isCurrentlyOpen = Boolean(
    todaySchedule?.open &&
      nowNY.minutes >= todaySchedule.start &&
      nowNY.minutes < todaySchedule.end
  )

  const formatTime = (minutes) => {
    const h = Math.floor(minutes / 60)
    const m = minutes % 60
    const ampm = h >= 12 ? 'PM' : 'AM'
    const hr12 = ((h + 11) % 12) + 1
    return `${hr12}:${m.toString().padStart(2, '0')} ${ampm}`
  }


  return (
    <div className="app">
      <div className="quick-contact">
        <div className={`quick-contact-status ${isCurrentlyOpen ? 'is-open' : 'is-closed'}`}>
          <span className="dot" aria-hidden="true"></span>
          <span>{isCurrentlyOpen ? 'Open now' : 'Closed'}</span>
        </div>

        <div className="quick-contact-right">
          <a href="tel:+17166683088" className="quick-contact-link" aria-label="Call K and B Dry Cleaners">
            (716) 668-3088
          </a>
          <a href="mailto:kandbcleaners3451@gmail.com" className="quick-contact-link" aria-label="Email K and B Dry Cleaners">
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
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
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
        

          <div className="hero-visual">
            <img className="hero-image" src={`${publicUrl}hero.jpg`} alt="Suite " fetchPriority="high" />
          </div>
        </section>

        <section className="services" id="services">
          <div className="services-header">
            <span className="section-label label">Our Services</span>
            <h2>What We Offer</h2>
            <div className="header-line" aria-hidden="true"></div>
          </div>

          <div className="service-featured">
            <div className="service-featured-visual service-bg-warm">
              <img className="service-image" src={imageAssets.hungClothesImage} alt="Hung clothes ready for dry cleaning" />
            </div>
            <div className="service-featured-content">
              <span className="service-number">01</span>
              <h3>Dry Cleaning & Pressing</h3>
              <p>Expert care for your everyday and fine garments, from business attire to delicate fabrics.</p>
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
              <div className="service-note">
                <span className="note dot"></span>
                <p>Expedited turnaround available upon request</p>
              </div>
            </div>
            
          </div>

          {/* Specialties grouped under Dry Cleaning (full width below image + content) */}
          <div className="specialties-section sub-specialties">
            <div className="specialties-header">
              <h4>Specialties</h4>
              <p>We handle items that require extra care and expertise</p>
            </div>

            <div className="specialty-grid">
              <article className="specialty-card specialty-bg-blush">
                <div className="specialty-image">
                  <img className="service-image" src={imageAssets.leatherImage} alt="Leather garment care" />
                </div>
                <h4>Leather & Suede</h4>
              </article>

              <article className="specialty-card specialty-bg-sky">
                <div className="specialty-image">
                  <img className="service-image" src={imageAssets.uggsImage} alt="UGGs and footwear care" />
                </div>
                <h4>UGGs & Footwear</h4>
              </article>

              <article className="specialty-card specialty-bg-cream">
                <div className="specialty-image">
                  <img className="service-image" src={imageAssets.weddingDressImage} alt="Wedding dress preservation" />
                </div>
                <h4>Wedding Dress Preservation</h4>
              </article>

              <article className="specialty-card specialty-bg-lavender">
                <div className="specialty-image">
                  <img className="service-image" src={imageAssets.beddingImage} alt="Comforters and bedding care" />
                </div>
                <h4>Comforters & Bedding</h4>
              </article>

              <article className="specialty-card specialty-bg-blush">
                <div className="specialty-image">
                  <img className="service-image" src={imageAssets.woolImage} alt="Wool garment care" />
                </div>
                <h4>Wool</h4>
              </article>

              <article className="specialty-card specialty-bg-sky">
                <div className="specialty-image">
                  <img className="service-image" src={imageAssets.cashmereImage} alt="Cashmere garment care" />
                </div>
                <h4>Cashmere</h4>
              </article>

              <article className="specialty-card specialty-bg-cream">
                <div className="specialty-image">
                  <img className="service-image" src={imageAssets.silkImage} alt="Silk garment care" />
                </div>
                <h4>Silk</h4>
              </article>

              <article className="specialty-card specialty-bg-lavender">
                <div className="specialty-image">
                  <img className="service-image" src={imageAssets.sportswearImage} alt="Sports wear care" />
                </div>
                <h4>Sports Wear</h4>
              </article>

              <article className='specialty-card specialty-bg-blush'>
                <div className="specialty-image">
                  <img className="service-image" src={imageAssets.customImage} alt="Custom garment care" />
                </div>
                <h4>Customs</h4>
              </article>

              <article className='specialty-card specialty-bg-sky'>
                <div className="specialty-image">
                  <img className="service-image" src={imageAssets.accessoriesImage} alt="Accessory care services" />  
                </div>
                <h4>Accessories</h4>
              </article>
            </div>
            
          </div>

          <div className="services-divider" aria-hidden="true"></div>

          <div className="service-featured service-featured-reverse">
            
            <div className="service-featured-visual service-bg-sage">
              <img className="service-image" src={imageAssets.sewingMachineImage} alt="Sewing machine for alterations" />
            </div>
            <div className="service-featured-content">
              <span className="service-number">02</span>
              <h3>Alterations</h3>
              <p>Precision tailoring to ensure the perfect fit, from simple hems to complete garment reshaping.</p>
              <div className="service-items">
                <span className="service-item">Hemming</span>
                <span className="service-item">Shortening</span>
                <span className="service-item">Lengthening</span>
                <span className="service-item">Taking In</span>
                <span className="service-item">Taking Out</span>
                <span className="service-item">Fitting</span>
                <span className="service-item">Reshaping</span>
                <span className="service-item">And More...</span>
              </div>
            </div>
          </div>

        </section>

        <section className="about" id="about">
          <div className="about-content">
            <span className="section-label">About Us</span>
            <h2>A Legacy of Care</h2>
            <p>For over 50 years, our doors have been open to this community, built on a foundation of precision, pride, and genuine love for the people we serve. What started as a one man's dedication to the craft of quality dry cleaning has grown into a local landmark of trust.</p>
            <p>Two years ago, we stepped into this story as the new stewards of his legacy. To us, this isn't just a business—it's a responsibility. We are committed to honoring the history of this shop by providing the same meticulous attention to detail from expert repairs and alterations to careful handling of every garment.</p>
            <p>While we are beginning a new chapter, our heart remains the same. We still believe in knowing your name, remembering your preferences, and treating every piece of clothing as if it were our own.</p>
            <p><b>Same Location. Same Heart. Still Caring.</b></p>
          </div>

          <div className="about-visual">
            <img className="about-image" src={imageAssets.interiorImage} alt="Interior of K & B dry cleaning shop" />
          </div>
        </section>

        <section className="contact" id="contact">
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
                        const isOpen = h.open && nowNY.minutes >= h.start && nowNY.minutes < h.end
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

            <div className="map-placeholder">
              <iframe
                className="google-map"
                title="K & B Dry Cleaning location"
                src="https://www.google.com/maps?q=3451+Clinton+St,+West+Seneca,+NY+14224&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
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
