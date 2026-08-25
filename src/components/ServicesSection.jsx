import { useEffect, useState } from 'react'
import './ServicesSection.css'

const dryCleaningItems = [
  { id: 'everyday', label: 'Everyday & Casual Wear', imageKey: 'everydayImage' },
  { id: 'leather-suede', label: 'Leather & Suede', imageKey: 'leatherImage' },
  { id: 'wedding-dress', label: 'Wedding Dresses (Boxed & Preserved)', imageKey: 'weddingDressImage' },
  { id: 'shoes-uggs', label: 'Shoes & Uggs', imageKey: 'uggsImage' },
  { id: 'bedding', label: 'Comforters & Bedding', imageKey: 'beddingImage' },
  { id: 'costumes', label: 'Costumes', imageKey: 'costumesImage' },
  { id: 'wool-cashmere-silk', label: 'Wool, Cashmere & Silk', imageKey: 'woolImage' },
  { id: 'accessories', label: 'Accessories', imageKey: 'accessoriesImage' },
  { id: 'sportswear', label: 'Sportswear', imageKey: 'sportswearImage' },
]

const otherServices = [
  {
    name: 'Alterations',
    imageKey: 'sewingMachineImage',
    desc: 'Expert tailoring and repairs, from simple adjustments to full restyles, done by hand.',
    items: ['Hemming & shortening', 'Taking in / letting out', 'Zipper & button repair', 'Suit & dress resizing', 'Custom fitting'],
  },
  {
    name: 'Pressing',
    imageKey: 'cashmereImage',
    desc: 'Crisp, professional pressing so everything you pick up looks ready to wear.',
    items: ['Pressing with dry cleaning', 'Pressing alone'],
  },
]

export default function ServicesSection({ images = {} }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % dryCleaningItems.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const activeItem = dryCleaningItems[activeIndex]

  return (
    <section className="services" id="services">
      <div className="services-header">
        <p className="section-label">WHAT WE DO</p>
        <h2>Our Services</h2>
      </div>

      <div className="drycleaning">
        <div className="drycleaning-media">
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
          <div className="drycleaning-overlay">
            <div className="drycleaning-caption">{activeItem.label}</div>
            <div className="dots">
              {dryCleaningItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`dots-dot ${index === activeIndex ? 'is-active' : ''}`}
                  aria-label={item.label}
                  onClick={() => setActiveIndex(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>

        <div className="flagship-body">
          <p className="section-label">OUR MAIN SERVICE</p>
          <div className="drycleaning-name">Dry Cleaning</div>
          <p className="drycleaning-description">
            Expert, careful cleaning for every kind of garment — from delicate silks to bulky
            sportswear. Tap any item to see our work.
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
        </div>
      </div>

      <div className="services-grid">
        {otherServices.map((service) => (
          <div className="service-card" key={service.name}>
            <div className="service-card-media">
              <img src={images[service.imageKey]} alt={service.name} />
            </div>
            <div className="service-card-body">
              <div className="service-card-name">{service.name}</div>
              <p className="service-card-description">{service.desc}</p>
              <div className="service-card-items">
                {service.items.map((item) => (
                  <div className="service-card-item" key={item}>
                    <span className="bullet" aria-hidden="true">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="services-note">Expedited service available on any of the above — just ask at drop-off.</p>
    </section>
  )
}
