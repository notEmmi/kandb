import './ServicesSection.css'

const everydayItems = ['Suits', 'Shirts', 'Pants', 'Jackets', 'Dresses', 'Coats', 'Skirts', 'Blouses']

const featuredSpecialties = [
  { id: 'wedding-dress', name: 'Wedding Dress Preservation', note: 'Cleaned, boxed & preserved', imageKey: 'weddingDressImage', alt: 'Wedding dress preservation' },
  { id: 'leather-suede', name: 'Leather & Suede', note: 'Jackets, coats & more', imageKey: 'leatherImage', alt: 'Leather garment care' },
]

const specialties = [
  { id: 'shoes-uggs', name: 'UGGs & Footwear', imageKey: 'uggsImage', alt: 'UGGs and footwear care' },
  { id: 'bedding', name: 'Comforters & Bedding', imageKey: 'beddingImage', alt: 'Comforters and bedding care' },
  { id: 'wool-cashmere-silk', name: 'Wool, Cashmere & Silk', imageKey: 'materialImage', alt: 'Wool, cashmere and silk care' },
  { id: 'sportswear', name: 'Sportswear', imageKey: 'sportswearImage', alt: 'Sportswear care' },
  { id: 'costumes', name: 'Costumes', imageKey: 'costumesImage', alt: 'Costume care' },
  { id: 'accessories', name: 'Accessories', imageKey: 'accessoriesImage', alt: 'Accessory care' },
]

const alterationsItems = [
  { id: 'hemming', label: 'Hemming & Shortening' },
  { id: 'taking-in-letting-out', label: 'Taking in / letting out' },
  { id: 'zipper-button-repair', label: 'Zipper & button repair' },
  { id: 'patches', label: 'Patches' },
  { id: 'seam-repairs', label: 'Seam repairs' },
  { id: 'suit-dress-resizing', label: 'Suit & dress resizing' },
  { id: 'custom-fitting', label: 'Custom fitting' },
]


export default function ServicesSection({ images = {} }) {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <p className="section-label">WHAT WE DO</p>
        <h2>Our Services</h2>
      </div>

      <div className="dc" id="dry-cleaning">
        <img className="dc-image" src={images.drycleaningImage} alt="Freshly dry cleaned garments" />
        <div className="dc-content">
          <p className="section-label">OUR MAIN SERVICE</p>
          <h3 className="dc-title">Dry Cleaning</h3>
          <p className="dc-text">
            Expert care for your everyday and fine garments, from business attire to delicate fabrics.
          </p>
          <ul className="dc-items">
            {everydayItems.map((item) => (
              <li key={item} className="dc-item">{item}</li>
            ))}
            <li className="dc-item is-more">and more...</li>
          </ul>
        </div>
      </div>

      <div className="specialties">
        <div className="specialties-inner">
          <div className="specialties-header">
            <p className="section-label">SPECIALTIES</p>
            <h3 className="specialties-title">We handle items that require extra care and expertise</h3>
          </div>

          <div className="specialties-featured">
            {featuredSpecialties.map((item) => (
              <article key={item.id} className="feature">
                <img className="feature-img" src={images[item.imageKey]} alt={item.alt} loading="lazy" />
                <div className="feature-overlay">
                  <h4 className="feature-name">{item.name}</h4>
                  <p className="feature-note">{item.note}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="specialties-grid">
            {specialties.map((item) => (
              <article key={item.id} className="tile">
                <img className="tile-img" src={images[item.imageKey]} alt={item.alt} loading="lazy" />
                <h4 className="tile-name">{item.name}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="pressing">
        <div className="pressing-body">
          <div className="pressing-head">
            <p className="section-label">PART OF OUR SERVICE</p>
            <h3 id="pressing-title" className="pressing-title">Steaming & Pressing</h3>
          </div>
          <p className="pressing-description">
              Every dry-cleaned garment comes back pressed. Need just a press? Bring in clean pants, shirts, dresses or coats and we'll press them ready to wear. Military and custom creases on request.
          </p>
        </div>
        <div
          className="pressing-media"
          role="img"
          aria-label="iron pressing clothes"
          style={{ backgroundImage: `url(${images.pressImage})` }}
        ></div>
      </div>

      <div className="alterations">
        <div className="alterations-body">
          <p className="section-label">TAILORING</p>
          <h3 id="alterations-title" className="alterations-title">Alterations</h3>
          <p className="alterations-description">
            Expert tailoring and repairs, from simple adjustments to full restyles, done by hand.
          </p>
          <div className='alterations-list'>
            {alterationsItems.map((item, index) => (
              <div className="alterations-item" key={item.id ?? index}>
                <span className="bullet" aria-hidden="true">•</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className="drycleaning-note small">
            ...and much more.
          </div>
        </div>
        <div className="alterations-media"
          role="img"
          aria-label="tailor making alterations"
          style={{ backgroundImage: `url(${images.alterationsImage})` }}
        ></div>
      </div>

      <p className="services-note">Expedited service available on any of the above — just ask at drop-off.</p>
    </section>
  )
}
