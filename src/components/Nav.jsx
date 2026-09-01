import './Nav.css'
import { useState } from 'react'

export default function Nav({publicUrl, phoneSVG}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => setMobileMenuOpen(false)

	return (
		 <nav
        className="top-nav"
      >
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
          <a href="tel:+17166683088" className="nav-call-btn">
            {phoneSVG} <span>(716) 668-3088</span>
          </a>
        </div>

        <a href="tel:+17166683088" className="nav-call-btn-mobile">
          {phoneSVG}
        </a>

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
	)
}