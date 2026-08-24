import './AboutSection.css'

export default function AboutSection({ publicUrl }) {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <span className="section-label">About Us</span>
        <h2>A Legacy of Care</h2>
        <p>For over 50 years, our doors have been open to this community, built on a foundation of precision, pride, and genuine love for the people we serve. What started as a one man's dedication to the craft of quality dry cleaning has grown into a local landmark of trust.</p>
        <p>We stepped into this story as the new stewards of his legacy. To us, this isn't just a business&mdash;it's a responsibility. We are committed to honoring the history of this shop by providing the same meticulous attention to detail from expert repairs and alterations to careful handling of every garment.</p>
        <p>While we are beginning a new chapter, our heart remains the same. We still believe in knowing your name, remembering your preferences, and treating every piece of clothing as if it were our own.</p>
        <p><b>Same Location. Same Heart. Still Caring.</b></p>
      </div>

      <div className="image-container">
        <img className="about-image" src={`${publicUrl}/aboutme.jpg`} alt="Interior of K & B dry cleaning shop" />
      </div>
    </section>
  )
}
