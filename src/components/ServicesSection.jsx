import { useEffect, useState } from 'react'
import './ServicesSection.css'

const dryCleaningItems = [
  { id: 'everyday', label: 'Everyday & Casual Wear', imageKey: 'everydayImage' },
  { id: 'leather-suede', label: 'Leather & Suede', imageKey: 'leatherImage' },
  { id: 'wedding-dress', label: 'Wedding Dresses (Boxed & Preserved)', imageKey: 'weddingDressImage' },
  { id: 'shoes-uggs', label: 'Shoes & Uggs', imageKey: 'uggsImage' },
  { id: 'bedding', label: 'Comforters & Bedding', imageKey: 'beddingImage' },
  { id: 'costumes', label: 'Costumes', imageKey: 'costumesImage' },
  { id: 'wool-cashmere-silk', label: 'Wool, Cashmere & Silk', imageKey: 'materialImage' },
  { id: 'accessories', label: 'Accessories', imageKey: 'accessoriesImage' },
  { id: 'sportswear', label: 'Sportswear', imageKey: 'sportswearImage' },
]

const alterationsItems = [
  { id: 'hemming', label: 'Hemming & Shortening' },
  { id: 'taking-in-letting-out', label: 'Taking in / letting out' },
  { id: 'zipper-button-repair', label: 'Zipper & button repair' },
  { id: 'suit-dress-resizing', label: 'Suit & dress resizing' },
  { id: 'custom-fitting', label: 'Custom fitting' },
]


export default function ServicesSection({ images = {} }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % dryCleaningItems.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="services" id="services">
      <div className="services-header">
        <p className="section-label">WHAT WE DO</p>
        <h2>Our Services</h2>
      </div>

      <div className="drycleaning">
        <div className="drycleaning-media">
          <div className="drycleaning-stage">
          {dryCleaningItems.map((item, index) => {
            const total = dryCleaningItems.length
            let offset = index - activeIndex
            if (offset > total / 2) offset -= total
            if (offset < -total / 2) offset += total

            const isActive = offset === 0
            const isVisible = Math.abs(offset) <= 1

            return (
              <img
                key={item.id}
                className={`drycleaning-slide ${isActive ? 'is-active' : ''}`}
                style={{
                  transform: `translateX(${offset * 62}%) scale(${isActive ? 1 : 0.82})`,
                  opacity: isVisible ? (isActive ? 1 : 0.35) : 0,
                  zIndex: isActive ? 2 : 1,
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
                src={images[item.imageKey]}
                alt={item.label}
              />
            )
          })}
          </div>
        </div>
        <div className="drycleaning-body">
          <p className="section-label">OUR MAIN SERVICE</p>
          <h3 className="drycleaning-name">Dry Cleaning</h3>
          <p className="drycleaning-description">
            Expert, careful cleaning for <b>every</b> kind of garment — from delicate silks to bulky
            sportswear.
          </p>

          <div className="garments">
            {dryCleaningItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`garments-item ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="bullet" aria-hidden="true">•</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <p className="drycleaning-note small">
            ...and much more.
          </p>
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
