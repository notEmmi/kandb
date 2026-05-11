import { useState } from 'react'
import './App.css'

import logo from './assets/logo.svg'
import interiorImage from './assets/interior.png'
import hungClothesImage from './assets/clothes.jpg'
import sewingMachineImage from './assets/sewingmachine.jpg'
import leatherImage from './assets/leather.jpg'
import uggsImage from './assets/uggs.jpg'
import weddingDressImage from './assets/weddingdress.jpg'
import beddingImage from './assets/bedding.jpg'
import heroImage from './assets/hero.png'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className="app">
      <nav className="top-nav">
        <div className="logo-text">
          <img className="logo-img" src={logo} alt="K & B logo" />
          <span className="logo-tagline">Dry Cleaning &<br/>Alterations</span>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'is-open' : ''}`} id="primary-navigation">
          <a href="#services" onClick={closeMobileMenu}>Services</a>
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

            <h1 id="hero-title">Meticulous care for</h1>
            <h1 className="accent"><i>your finest garments</i></h1>
            <p>Where precision meets elegance. Expert cleaning, tailoring, and preservation for everything from everyday wear to cherished heirlooms.</p>

            <div className="hero-cta">
              <button className="btn btn-primary">Request More Info</button>
              <a className="btn btn-secondary" href="#services">View Services</a>
            </div>
          </div>

          <div className="hero-visual">
            <img className="hero-image" src={heroImage} alt="Professional garment care services" />
          </div>
        </section>

        <section className="services" id="services">
          <div className="services-header">
            <span className="section-label">Our Services</span>
            <h2>What We Offer</h2>
            <div className="header-line" aria-hidden="true"></div>
          </div>

          <div className="service-featured">
            <div className="service-featured-visual service-bg-warm">
              <img className="service-image" src={hungClothesImage} alt="Hung clothes ready for dry cleaning" />
            </div>
            <div className="service-featured-content">
              <span className="service-number">01</span>
              <h3>Dry Cleaning</h3>
              <p>Expert care for your everyday and fine garments, from business attire to delicate fabrics.</p>
              <div className="service-items">
                <span className="service-item">Suits</span>
                <span className="service-item">Shirts</span>
                <span className="service-item">Pants</span>
                <span className="service-item">Jackets</span>
                <span className="service-item">Dresses</span>
                <span className="service-item">Coats</span>
              </div>
            </div>
          </div>

          <div className="service-featured service-featured-reverse">
            <div className="service-featured-visual service-bg-sage">
              <img className="service-image" src={sewingMachineImage} alt="Sewing machine for alterations" />
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
              </div>
            </div>
          </div>

          <div className="specialties-section">
            <div className="specialties-header">
              <span className="service-number">03</span>
              <h3>Specialties</h3>
              <p>We handle items that require extra care and expertise</p>
            </div>

            <div className="specialty-grid">
              <article className="specialty-card specialty-bg-blush">
                <div className="specialty-image">
                  <img className="service-image" src={leatherImage} alt="Leather garment care" />
                </div>
                <h4>Leather & Suede</h4>
              </article>

              <article className="specialty-card specialty-bg-sky">
                <div className="specialty-image">
                  <img className="service-image" src={uggsImage} alt="UGGs and footwear care" />
                </div>
                <h4>UGGs & Footwear</h4>
              </article>

              <article className="specialty-card specialty-bg-cream">
                <div className="specialty-image">
                  <img className="service-image" src={weddingDressImage} alt="Wedding dress preservation" />
                </div>
                <h4>Wedding Dress Preservation</h4>
              </article>

              <article className="specialty-card specialty-bg-lavender">
                <div className="specialty-image">
                  <img className="service-image" src={beddingImage} alt="Comforters and bedding care" />
                </div>
                <h4>Comforters & Bedding</h4>
              </article>
            </div>
          </div>

          <div className="service-note">
            <span className="note-dot"></span>
            <p>Expedited turnaround available upon request</p>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-content">
            <span className="section-label">About Us</span>
            <h2>A Legacy of Care</h2>
            <p>For over 50 years, our doors have been open to this community, built on a foundation of precision, pride,, and genuine love for the people we serve. What started as a one man's dedication to the craft of quality dry cleaning has grown into a local landmark of trust.</p>
            <p>Two years ago, we stepped into this story as the new stewards of his legacy. To us, this isn't just a business-it's a responsibility. We are commited to honoring the history of this shop by providing the same meticulous attention to detail-from expert repairs and alterations to careful handling of every garment.</p>
            <p>While we are beginning a New Chapter, our heart remains the same. We still believe in knwoing your name, rembering your preferences, and treating eery piece of clothing as if it were our own.</p>
            <p className="">Same Location. Same Heart. Still Caring.</p>
          </div>

          <div className="about-visual">
            <img className="about-image" src={interiorImage} alt="Interior of K & B dry cleaning shop" />
          </div>
        </section>

        <section className="contact" id="contact">
          <span className="section-label">Contact Us</span>
          <h2>Call, Visit, or Find Us</h2>

          <div className="contact-layout">
            <div className="contact-details">
              <div className="contact-info">
                <div className="info-item">
                  <strong>Phone</strong>
                  <p>
                    <a className="phone-link" href="tel:+17166683088">(716) 668-3088</a>
                  </p>
                </div>
                <div className="info-item">
                  <strong>Email</strong>
                  <p>
                    <a className="phone-link" href="mailto:kandbcleaner@gmail.com">kandbcleaner@gmail.com</a>
                  </p>
                </div>
                <div className="info-item">
                  <strong>Location</strong>
                  <p>3451 Clinton St,<br/>West Seneca,<br/> NY 14224</p>
                </div>
                <div className="info-item">
                  <strong>Hours</strong>
                  <p>Mon–Fri: 9am–5pm<br />Sat: 9am–3pm<br />Sun, Wed: Closed</p>
                </div>
              </div>
              <p className="contact-note">Reach out for drop-off questions, pickup timing, and custom garment care.</p>
              <a href="tel:(716) 668-3088" className="btn btn-primary">Call Now</a>
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
        <p>&copy; {new Date().getFullYear()} K & B Dry Cleaning and Alterations. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
