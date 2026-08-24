import styles from './ReviewsSection.module.css'

const reviews = [
  { id: 'review-1', initial: 'M', name: 'Marie T.', location: 'West Seneca, NY', quote: "They treat every garment like it's their own. My wedding dress came back better than new." },
  { id: 'review-2', initial: 'D', name: 'David R.', location: 'Buffalo, NY', quote: 'Fast, friendly, and the alterations are flawless. This is the only cleaners I trust with suits.' },
  { id: 'review-3', initial: 'L', name: 'Linda S.', location: 'West Seneca, NY', quote: "Same great care since they took over. I've been a customer for over a decade." },
]

export default function ReviewsSection() {
  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.header}>
        <p className="section-label">CUSTOMER REVIEWS</p>
        <h2>Trusted by our neighbors</h2>
        <div className={styles.rating}>
          <span className={styles.stars}>★★★★★</span>
          <strong>4.9</strong>
          <span>· based on Google reviews</span>
        </div>
      </div>

      <div className={styles.grid}>
        {reviews.map((review) => (
          <article className={styles.card} key={review.id}>
            <div className={styles.reviewHeader}>
              <div className={styles.avatar} aria-hidden="true">{review.initial}</div>
              <div>
                <div className={styles.name}>{review.name}</div>
                <div className={styles.location}>{review.location}</div>
              </div>
            </div>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>&ldquo;{review.quote}&rdquo;</p>
          </article>
        ))}
      </div>
    </section>
  )
}
