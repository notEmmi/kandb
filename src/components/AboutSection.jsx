import './AboutSection.css'

export default function AboutSection({ publicUrl }) {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about-inner">
        {/* Paper card */}
        <div className="about-card">
          <p className="section-label">ABOUT US</p>
          <h2 id="about-title">A Legacy of Care</h2>
          <p className="about-text">
            For over 50 years, our doors have been open to this community, built on a
            foundation of precision, pride, and genuine love for the people we serve. What
            started as one man's dedication to the craft of quality dry cleaning has grown
            into a local landmark of trust.
          </p>
          <p className="about-text">
            We stepped into this story as the new stewards of his legacy. To us, this isn't
            just a business — it's a responsibility. We still believe in knowing your name,
            remembering your preferences, and treating every piece of clothing as if it were
            our own.
          </p>
          <p className="about-tagline">Same Location. Same Heart. Still Caring.</p>
        </div>

        {/* Photo print */}
        <figure className="about-print">
          <img className="about-photo" src={`${publicUrl}aboutme.jpg`} alt="Inside the K & B Dry Cleaners shop" />
          <figcaption className="about-caption">K &amp; B Dry Cleaners</figcaption>
        </figure>
      </div>
    </section>
  )
}
