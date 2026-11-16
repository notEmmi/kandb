import "./AnnouncementBar.css";

// Place this at the very top of the page, above the hero/nav.
export default function AnnouncementBar() {
  return (
    <a href="#perks" className="announce">
      <span className="announce__text">
        🎁 Gift cards now available, in-store.
      </span>
      <span className="announce__link">Learn more</span>
    </a>
  );
}
