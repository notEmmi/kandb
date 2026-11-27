import "./Perks.css";

const STEPS = [
  { title: "Visit us in person.", text: "Gift cards are sold at our shop, 3451 Clinton St, West Seneca." },
  { title: "Choose the amount.", text: "Tell us how much you'd like to put on the card and pay at the counter." },
  { title: "Give it to someone.", text: "They can use it for dry cleaning, alterations, or pressing." },
];

export default function Perks({ publicUrl }) {
  return (
    <section className="perks" id="perks" aria-labelledby="perks-title">
      {/* Drawn gift card */}
      <div className="perks-visual">
        <div className="gift-card" aria-hidden="true">
          <div className="gift-card-top">
            <img src={`${publicUrl}logo.svg`} alt="" className="gift-card-logo" />
            <span className="gift-card-tag">Gift Card</span>
          </div>
          <div>
            <p className="gift-card-line">A gift of fresh care</p>
            <p className="gift-card-name">K &amp; B Dry Cleaners &amp; Alterations</p>
          </div>
        </div>
      </div>

      <div className="perks-content">
        <p className="section-label">GIFT CARDS</p>
        <h2 id="perks-title" className="perks-title">Give someone a fresh start</h2>
        <p className="perks-description">
          Perfect for a new job, a wedding, or anyone who deserves their favorite suit
          looking like new. Gift cards can be used for dry cleaning, alterations, and pressing.
        </p>

        <ol className="perks-steps">
          {STEPS.map((step) => (
            <li key={step.title}>
              <p>
                <strong>{step.title}</strong> <span>{step.text}</span>
              </p>
            </li>
          ))}
        </ol>

        <div className="perks-buttons">
          <a href="tel:+17166683088" className="btn btn-primary">Call to ask</a>
          <a href="#contact" className="btn btn-secondary">See our hours</a>
        </div>
      </div>
    </section>
  );
}
