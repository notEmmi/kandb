import { useState } from 'react'

import logo from './assets/logo.svg'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="top-nav">
        <div className="logo-text">
          <img className="logo-img" src={logo} alt="K & B logo" />
          <span className="logo-tagline">Dry Cleaning <br></br>& Alterations</span>
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
        {/* Hero Section */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-tags">
              <div className="tag">Dry Cleaning</div>
              <div className="dot" aria-hidden="true"></div>
              <div className="tag">Alterations</div>
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
            {/* Replace with your image: <img src="/hero-image.jpg" alt="Garment care" /> */}
            <div className="placeholder-image" role="img" aria-label="Professional garment care services">
              <span>Hero Image</span>
              <small>Replace with your image</small>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services" id="services">
          <span className="section-label">Our Services</span>
          <h2>What We Clean and Restore</h2>
          <p className="section-description">We handle everyday care and specialty items with the same attention to detail, including leather, UGGs, wedding dress preservation, and delicate formalwear.</p>

          <div className="service-grid">
            <article className="service-card">
              <div className="service-icon">
                {/* Replace with image: <img src="/dry-cleaning.jpg" alt="Dry cleaning" /> */}
                <div className="placeholder-icon">
                  <span>Image</span>
                </div>
              </div>
              <h3>Dry Cleaning</h3>
              <ul>
                <li>Shirts, pants, jackets, and suits</li>
                <li>Leather cleaning and refresh</li>
                <li>UGGs and specialty footwear care</li>
                <li>Wedding dress preservation</li>
              </ul>
            </article>

            <article className="service-card">
              <div className="service-icon">
                {/* Replace with image: <img src="/alterations.jpg" alt="Alterations" /> */}
                <div className="placeholder-icon">
                  <span>Image</span>
                </div>
              </div>
              <h3>Alterations</h3>
              <ul>
                <li>Hemming and shortening</li>
                <li>Lengthening and taking in</li>
                <li>Taking out and reshaping</li>
                <li>Measurements, fitting, and adjustments</li>
              </ul>
            </article>

            <article className="service-card">
              <div className="service-icon">
                {/* Replace with image: <img src="/specialties.jpg" alt="Specialty items" /> */}
                <div className="placeholder-icon">
                  <span>Image</span>
                </div>
              </div>
              <h3>Specialties</h3>
              <ul>
                <li>Wedding dress boxed & preserved</li>
                <li>Leather and suede care</li>
                <li>Comforters and bedding</li>
                <li>Delicate and vintage garments</li>
              </ul>
            </article>
          </div>

          <div className="service-note">
            <span className="note-dot"></span>
            <p>Expedited turnaround available upon request</p>
          </div>
        </section>

        {/* About Section */}
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
            {/* Replace with image: <img src="/about-image.jpg" alt="Our shop" /> */}
            <div className="placeholder-image" role="img" aria-label="K & B dry cleaning shop">
              <span>About Image</span>
              <small>Replace with your image</small>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
          <span className="section-label">Contact Us</span>
          <h2>Call, Visit, or Find Us</h2>

          <div className="contact-layout">
            <div className="contact-details">
              <div className="contact-info">
                <div className="info-item">
                  <strong>Phone</strong>
                  <p>(555) 123-4567</p>
                </div>
                <div className="info-item">
                  <strong>Location</strong>
                  <p>123 Main Street<br />Your City, ST 00000</p>
                </div>
                <div className="info-item">
                  <strong>Hours</strong>
                  <p>Mon–Fri: 7am–7pm<br />Sat: 8am–5pm<br />Sun: Closed</p>
                </div>
              </div>
              <p className="contact-note">Reach out for drop-off questions, pickup timing, and custom garment care.</p>
              <a href="tel:5551234567" className="btn btn-primary">Call Now</a>
            </div>

            <div className="map-placeholder">
              {/* Replace with Google Maps embed or image */}
              <div className="placeholder-image" role="img" aria-label="Map showing business location">
                <span>Map</span>
                <small>Add Google Maps embed</small>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} K & B Dry Cleaning and Alterations. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
