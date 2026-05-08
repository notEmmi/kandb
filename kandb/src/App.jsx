import { useState } from 'react'

import logo from './assets/logo.svg'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className='app'>
      <div className='top-nav'>
        <div className='logo'>
          <img className='logo-img' src={logo} alt='K & B Logo' />
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'is-open' : ''}`} id='primary-navigation'>
          <a href='#services' onClick={closeMobileMenu}>Services</a>
          <a href='#about' onClick={closeMobileMenu}>About Us</a>
          <a href='#contact' onClick={closeMobileMenu}>Contact</a>
        </div>

        <button
          className='nav-toggle'
          type='button'
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls='primary-navigation'
          onClick={() => setMobileMenuOpen((currentValue) => !currentValue)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className='main'>
        <section className='hero' aria-labelledby='hero-title'>
          <div className='hero-copy'>
            <div className='hero-tags'>
              <div className='tag'>DRY CLEANING</div>
              <div className='dot' aria-hidden='true'></div>
              <div className='tag'>ALTERATIONS</div>
            </div>

            <h1 id='hero-title'>Meticulous care for</h1>
            <h1 className='accent'><i>your finest garments</i></h1>
            <p>Where precision meets elegance. Expert cleaning, tailoring, and preservation for everything from everyday wear to cherished heirlooms.</p>

            <button className='btn'>Request More Info</button>
            <a className='secondary-link' href='#services'>View Services</a>
          </div>

          <div className='hero-visual' role='img' aria-label='Placeholder image for clothing care and tailoring services'>
            <span>Image Placeholder</span>
          </div>
        </section>

        <section className='services' id='services'>
          <h2>Our Services</h2>
          <h1>What We Clean and Restore</h1>
          <p>We handle everyday care and specialty items with the same attention to detail, including leather, UGGs, wedding dress preservation, and delicate formalwear.</p>

          <div className='service-grid'>
            <article className='service-card'>
              <h3>Dry Cleaning</h3>
              <ul>
                <li>Shirts, pants, jackets, and suits</li>
                <li>Leather cleaning and refresh</li>
                <li>UGGs and specialty footwear care</li>
                <li>Wedding dress preservation</li>
              </ul>
            </article>

            <article className='service-card'>
              <h3>Alterations</h3>
              <ul>
                <li>Hemming and shortening</li>
                <li>Lengthening and taking in</li>
                <li>Taking out and reshaping</li>
                <li>Measurements, fitting, and adjustments</li>
              </ul>
            </article>
          </div>
        </section>

        <section className='about' id='about'>
          <h2>About Us</h2>
          <h1>Coming Soon</h1>
          <p></p>
        </section>

        <section className='contact' id='contact'>
          <h2>Contact Us</h2>
          <h1>Call, Visit, or Find Us</h1>

          <div className='contact-layout'>
            <div className='contact-details'>
              <p><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Location:</strong> 123 Main Street, Your City, ST 00000</p>
              <p>Reach out for drop-off questions, pickup timing, and custom garment care.</p>
              <button className='btn'>Contact Us</button>
            </div>

            <div className='map-placeholder' role='img' aria-label='Map placeholder showing business location'>
              <span>Map Placeholder</span>
            </div>
          </div>
        </section>
      </div>

      <footer className='footer'>
        <p>K &amp; B Dry Cleaning and Alterations</p>
      </footer>
    </div>
  )
}

export default App
