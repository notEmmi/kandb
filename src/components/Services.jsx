import { useEffect, useRef, useState } from 'react'
import styles from './Services.module.css'

const dryCleaningItems = [
  { imageIds: ['leatherImage', 'woolImage', 'cashmereImage'], label: 'Leather & Suede' },
  { imageIds: ['weddingDressImage', 'silkImage', 'accessoriesImage'], label: 'Wedding Dresses (Boxed & Preserved)' },
  { imageIds: ['uggsImage', 'sportswearImage', 'customImage'], label: 'Shoes & Uggs' },
  { imageIds: ['beddingImage', 'woolImage', 'cashmereImage'], label: 'Bedding' },
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
    <article className={styles.serviceCard}>
      <div className={`${styles.serviceCardImage} ${styles.serviceCarousel}`}>
        {service.imageIds.map((imageId, index) => (
          <img
            key={`${service.name}-${imageId}-${index}`}
            src={images[imageId]}
            alt={`${service.name} example ${index + 1}`}
            className={index === slide ? styles.isActive : ''}
          />
        ))}
        <div className={styles.serviceCarouselDots}>
          {service.imageIds.map((imageId, index) => (
            <button
              key={`${imageId}-dot-${index}`}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show ${service.name} image ${index + 1}`}
              className={index === slide ? styles.isActive : ''}
            />
          ))}
        </div>
      </div>
      <div className={styles.serviceCardContent}>
        <h4>{service.name}</h4>
        <p>{service.desc}</p>
        <ul className={styles.serviceCardList}>
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
    <article className={styles.serviceCard}>
      <div className={`${styles.serviceCardImage} ${styles.serviceCarousel}`}>
        {imageIds.map((imageId, index) => (
          <img
            key={`${imageId}-${index}`}
            src={images[imageId]}
            alt={`Dry cleaning service example ${index + 1}`}
            className={index === slide ? styles.isActive : ''}
          />
        ))}
        <div className={styles.serviceCarouselDots}>
          {items.map((item, index) => (
            <button
              key={`${item.label}-${index}-dot`}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show dry cleaning image ${index + 1}`}
              className={index === slide ? styles.isActive : ''}
            />
          ))}
        </div>
      </div>
      <div className={styles.serviceCardContent}>
        <h4>Dry Cleaning</h4>
        <p>Expert, careful cleaning for every kind of garment, from delicate fabrics to everyday wear.</p>
        <ul className={styles.serviceCardList}>
          {items.map((item) => <li key={item.label}>{item.label}</li>)}
        </ul>
      </div>
    </article>
  )
}

function DryCleaningGrid({ items, images }) {
  return (
    <div className="dry-cleaning-grid">
      {items.map((item) => (
        <article className={styles.dryCleaningCard} key={item.label}>
          <div className={styles.dryCleaningCardImage}>
            <img src={images[item.imageIds[0]]} alt={item.label} />
          </div>
          <div className={styles.dryCleaningCardLabel}>{item.label}</div>
        </article>
      ))}
    </div>
  )
}

export default function Services({ images }) {
  return (
    <section className={styles.services} id="services">
      <div className={styles.servicesHeader}>
        <p className="section-label">WHAT WE DO</p>
        <h2>Our Services</h2>
        <div className={styles.headerLine} aria-hidden="true"></div>
      </div>

      <div className={styles.servicesIntro}>
        <h3>Dry Cleaning — Our Main Service</h3>
        <p>Expert, careful cleaning for every kind of garment — from delicate silks to bulky sportswear.</p>
      </div>

      <DryCleaningGrid items={dryCleaningItems} images={images} />

      <div className={`${styles.servicesGrid} ${styles.dryCleaningServiceGrid}`}>
        <DryCleaningServiceCard items={dryCleaningItems} images={images} />
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service) => <ServiceCard key={service.name} service={service} images={images} />)}
      </div>

      <p className={styles.servicesNote}>Expedited service available on any of the above — just ask at drop-off.</p>
    </section>
  )
}
