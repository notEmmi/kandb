import './HeroSection.css'

export default function HeroSection({ publicUrl, arrowRightSVG }) {
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
        <h1 id="hero-title">Meticulous care for<br />
          <span className="accent"><i>your finest garments</i></span>
        </h1>
        <p>Expert cleaning, tailoring, and pressing for everything from everyday wear to cherished heirlooms.</p>
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
