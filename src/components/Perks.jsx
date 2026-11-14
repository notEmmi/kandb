import "./Perks.css";
import logo from "./assets/logo.svg"; // adjust path to your logo

// TODO: swap in your real profile links
const INSTAGRAM_URL = "https://www.instagram.com/kandbcleaners";
const FACEBOOK_URL = "https://www.facebook.com/YOUR_PAGE";

export default function Perks() {
  return (
    <section id="perks" className="perks" aria-labelledby="perks-title">
      <div className="perk-header">
        <p className="section-label">In-Store Perks</p>
        <h2 id="perks-title" className="perk-title">A little extra at the counter</h2>
      </div>

      <div className="perk-content">
        {/* Gift cards */}
        <article className="perk perk--light">
          <div className="perk__card" aria-hidden="true">
            <img src={logo} alt="" />
          </div>
          <div>
            <p className="perk__eyebrow">Gift Cards</p>
            <h3 className="perk__title">The gift of looking sharp</h3>
            <p className="perk__text">Available now at our counter — good for any service.</p>
          </div>
        </article>

        {/* Follow offer */}
        <article className="perk perk--dark">
          <span className="perk__badge">Limited time</span>
          <p className="perk__eyebrow">Follow &amp; Save</p>
          <h3 className="perk__title">A free dress shirt, cleaned &amp; pressed</h3>

          <ol className="perk__steps">
            <li>Follow us on Instagram or Facebook</li>
            <li>Show us at the counter</li>
            <li>Get one shirt free with an order of 3+ items</li>
          </ol>

          <div className="perk__buttons">
            <a className="perk__btn perk__btn--gold" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a className="perk__btn perk__btn--outline" href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>

          <p className="perk__fine">One per customer. While the offer lasts.</p>
        </article>
      </div>
    </section>
  );
}