import styles from './HeroSection.module.css'

export default function HeroSection({ publicUrl, arrowRightSVG }) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.content}>
        <div className={styles.tags}>
          <div className={styles.tag}>Dry Cleaning</div>
          <div className="dot" aria-hidden="true"></div>
          <div className={styles.tag}>Alterations</div>
          <div className="dot" aria-hidden="true"></div>
          <div className={styles.tag}>Pressing</div>
        </div>
        <h1 id="hero-title">Meticulous care for<br />
          <span className={styles.accent}><i>your finest garments</i></span>
        </h1>
        <p>Where precision meets elegance. Expert cleaning, tailoring, and pressing for everything from everyday wear to cherished heirlooms.</p>
        <div className={styles.cta}>
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
        <img className={styles.image} src={`${publicUrl}hero.jpg`} alt="Suite " fetchPriority="high" />
      </div>
    </section>
  )
}
