import "./Perks.css";

const INSTAGRAM_URL = "https://www.instagram.com/kandbcleaners/";
const FACEBOOK_URL = "https://www.facebook.com/people/KB-dry-cleaners/61589575148506/";

export default function Perks({ publicUrl }) {
  return (
    <section className="perks" id="perks" aria-labelledby="perks-title">
      <div className="perks-header">
        <p className="section-label">IN-STORE PERKS</p>
        <h2 id="perks-title">A little extra at the counter</h2>
      </div>

      <div className="perks-grid">
        {/* Gift cards */}
        <article className="perk perk-light">
          <div className="perk-card" aria-hidden="true">
            <img src={`${publicUrl}logo.svg`} alt="" />
          </div>
          <div className="perk-body">
            <p className="section-label">GIFT CARDS</p>
            <h3 className="perk-title">The gift of looking sharp</h3>
            <p className="perk-description">Available now at our counter — good for any service.</p>
          </div>
        </article>

        {/* Follow offer */}
        <article className="perk perk-dark">
          <span className="perk-badge">Limited time</span>
          <p className="section-label">FOLLOW &amp; SAVE</p>
          <h3 className="perk-title">A free dress shirt, cleaned &amp; pressed</h3>

          <ol className="perk-steps">
            <li>Follow us on Instagram or Facebook</li>
            <li>Leave us a review on Google</li>
            <li>Show us at the counter</li>
          </ol>

          <div className="perk-buttons">
            <a className="btn perk-btn-gold" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a className="btn perk-btn-outline" href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>

          <p className="perk-note">One per customer. While the offer lasts.</p>
        </article>
      </div>
    </section>
  );
}
