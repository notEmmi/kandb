import { useEffect, useRef, useState } from 'react'
import './Services.css'

const dryCleaningItems = [
  { imageIds: ['customImage', 'woolImage', 'cashmereImage'], label: 'Everyday & Casual Wear' },
  { imageIds: ['leatherImage', 'woolImage', 'cashmereImage'], label: 'Leather & Suede' },
  { imageIds: ['weddingDressImage', 'silkImage', 'accessoriesImage'], label: 'Wedding Dresses (Boxed & Preserved)' },
  { imageIds: ['uggsImage', 'sportswearImage', 'customImage'], label: 'Shoes & Uggs' },
  { imageIds: ['customImage', 'accessoriesImage', 'leatherImage'], label: 'Beading & Embellishments' },
  { imageIds: ['customImage', 'weddingDressImage', 'sportswearImage'], label: 'Costumes' },
  { imageIds: ['woolImage', 'cashmereImage', 'silkImage'], label: 'Wool, Cashmere & Silk' },
  { imageIds: ['accessoriesImage', 'leatherImage', 'uggsImage'], label: 'Accessories' },
  { imageIds: ['customImage', 'woolImage', 'cashmereImage'], label: 'Everyday & Casual Wear' },
  { imageIds: ['sportswearImage', 'uggsImage', 'customImage'], label: 'Sportswear' },
]

const services = [
  {
    imageIds: ['sewingMachineImage', 'customImage', 'accessoriesImage'],
    name: 'Alterations',
    desc: 'Expert tailoring and repairs, from simple adjustments to full restyles, done by hand.',
    items: ['Hemming & shortening', 'Taking in / letting out', 'Zipper & button repair', 'Suit & dress resizing', 'Custom fitting'],
  },
  {
    imageIds: ['hungClothesImage', 'woolImage', 'silkImage'],
    name: 'Pressing',
    desc: 'Crisp, professional pressing so everything you pick up looks ready to wear.',
    items: ['Pressing with dry cleaning', 'Pressing alone'],
  },
]

function ServiceCard({ service, images }) {
  const [slide, setSlide] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    timer.current = setInterval(() => {
      setSlide((currentSlide) => (currentSlide + 1) % service.imageIds.length)
    }, 5000)
    return () => clearInterval(timer.current)
  }, [service.imageIds.length])

  const goTo = (index) => {
    clearInterval(timer.current)
    setSlide(index)
  }

  return (
    <article className="service-card">
      <div className="service-card-image service-carousel">
        {service.imageIds.map((imageId, index) => (
          <img
            key={`${service.name}-${imageId}-${index}`}
            src={images[imageId]}
            alt={`${service.name} example ${index + 1}`}
            className={index === slide ? 'is-active' : ''}
          />
        ))}
        <div className="service-carousel-dots">
          {service.imageIds.map((imageId, index) => (
            <button
              key={`${imageId}-dot-${index}`}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show ${service.name} image ${index + 1}`}
              className={index === slide ? 'is-active' : ''}
            />
          ))}
        </div>
      </div>
      <div className="service-card-content">
        <h4>{service.name}</h4>
        <p>{service.desc}</p>
        <ul className="service-card-list">
          {service.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </article>
  )
}

function DryCleaningServiceCard({ items, images }) {
  const [slide, setSlide] = useState(0)
  const timer = useRef(null)

  const imageIds = items.map((item) => item.imageIds[0])

  useEffect(() => {
    timer.current = setInterval(() => {
      setSlide((currentSlide) => (currentSlide + 1) % imageIds.length)
    }, 5000)
    return () => clearInterval(timer.current)
  }, [imageIds.length])

  const goTo = (index) => {
    clearInterval(timer.current)
    setSlide(index)
  }

  return (
    <article className="service-card">
      <div className="service-card-image service-carousel">
        {imageIds.map((imageId, index) => (
          <img
            key={`${imageId}-${index}`}
            src={images[imageId]}
            alt={`Dry cleaning service example ${index + 1}`}
            className={index === slide ? 'is-active' : ''}
          />
        ))}
        <div className="service-carousel-dots">
          {items.map((item, index) => (
            <button
              key={`${item.label}-${index}-dot`}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show dry cleaning image ${index + 1}`}
              className={index === slide ? 'is-active' : ''}
            />
          ))}
        </div>
        <div className="service-carousel-caption">{items[slide].label}</div>
      </div>
      <div className="service-card-content">
        <h4>Dry Cleaning</h4>
        <p>Expert, careful cleaning for every kind of garment — from delicate silks to bulky sportswear. Select an item to see our work.</p>
        <ul className="service-card-list dry-cleaning-items">
          {items.map((item, index) => (
            <li key={item.label}>
              <button
                type="button"
                onClick={() => goTo(index)}
                className={index === slide ? 'is-active' : ''}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function DryCleaningGrid({ items, images }) {
  return (
    <div className="dry-cleaning-grid">
      {items.map((item) => (
        <article className="dry-cleaning-card" key={item.label}>
          <div className="dry-cleaning-card-image">
            <img src={images[item.imageIds[0]]} alt={item.label} />
          </div>
          <div className="dry-cleaning-card-label">{item.label}</div>
        </article>
      ))}
    </div>
  )
}

export default function Services({ images }) {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <p className="section-label">WHAT WE DO</p>
        <h2>Our Services</h2>
        <div className="header-line" aria-hidden="true"></div>
      </div>

      <DryCleaningGrid items={dryCleaningItems} images={images} />

      <div className="services-grid dry-cleaning-service-grid">
        <DryCleaningServiceCard items={dryCleaningItems} images={images} />
      </div>

      <div className="services-grid">
        {services.map((service) => <ServiceCard key={service.name} service={service} images={images} />)}
      </div>

      <p className="services-note">Expedited service available on any of the above — just ask at drop-off.</p>
    </section>
  )
}
