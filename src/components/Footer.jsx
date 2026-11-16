import './Footer.css'

const INSTAGRAM_URL = 'https://www.instagram.com/kandbcleaners/'
const FACEBOOK_URL = 'https://www.facebook.com/people/KB-dry-cleaners/61589575148506/?mibextid=wwXIfr'

export default function Footer({ publicUrl }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img className="footer-logo" src={`${publicUrl}logo.svg`} alt="K & B logo" />
          <p className="footer-tagline">Dry Cleaners &amp;<br />Alterations</p>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <a href={INSTAGRAM_URL} aria-label="K & B on Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href={FACEBOOK_URL} aria-label="K & B on Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>

          <span className="footer-divider" aria-hidden="true" />

          <div className="footer-partner">
            <p className="footer-partner-label">Associated with</p>
            <a
              className="footer-partner-name"
              href="https://www.tomandluigistailorshop.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tom and Luigi Tailor Shop
            </a>
            <a className="footer-partner-email" href="mailto:tomandluigis@gmail.com">
              tomandluigis@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">&copy; {year} K &amp; B Dry Cleaners and Alterations. All rights reserved.</p>
        <div className="footer-contact">
          <a href="tel:+17166683088">(716) 668-3088</a>
          <a href="mailto:kandbcleaners3451@gmail.com">kandbcleaners3451@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
