import './HeroSection.css'

export default function HeroSection({arrowRightSVG, statusLabel, statusClass }) {
  return (
    <section
      className="hero"
      aria-labelledby="hero-title"
    >
      <div className="hero-content">
        <div className="hero-tags">
          <div className="tag">Dry Cleaning</div>
          <div className="dot" aria-hidden="true"></div>
          <div className="tag">Alterations</div>
          <div className="dot" aria-hidden="true"></div>
          <div className="tag">Pressing</div>
        </div>
        <h1 id="hero-title">Meticulous care for<br />
          <span className="accent"><i>your finest garments</i></span>
        </h1>
        <p>Expert cleaning, tailoring, and pressing for everything from everyday wear to cherished heirlooms.</p>
        <div className="hero-cta">
          <a
            className="btn btn-primary"
            href="#contact"
          >
            <span>Request More Info</span>
            {arrowRightSVG}
          </a>
          <a className="btn btn-secondary" href="#services">
            <span>View Services</span>
            {arrowRightSVG}
          </a>
        </div>
        <div className="hero-status">
          <span className={`quick-contact-status ${statusClass}`}>
            <span className="dot" aria-hidden="true"></span>
            <span>{statusLabel}</span>
          </span>
          <span className="hero-status-divider" aria-hidden="true">|</span>
          <span>Holiday hours may vary</span>
        </div>
      </div>
    </section>
  )
}
