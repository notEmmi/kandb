import './ReviewsSection.css'

const reviews = [
  { id: 'review-1', initial: 'M', name: 'Marie T.', location: 'West Seneca, NY', quote: "They treat every garment like it's their own. My wedding dress came back better than new." },
  { id: 'review-2', initial: 'D', name: 'David R.', location: 'Buffalo, NY', quote: 'Fast, friendly, and the alterations are flawless. This is the only cleaners I trust with suits.' },
  { id: 'review-3', initial: 'L', name: 'Linda S.', location: 'West Seneca, NY', quote: "Same great care since they took over. I've been a customer for over a decade." },
]

export default function ReviewsSection() {
  return (
    <section className="reviews" id="reviews">
      <div className="reviews-header">
        <p className="section-label">CUSTOMER REVIEWS</p>
        <h2>Trusted by our neighbors</h2>
        <div className="reviews-rating">
          <span className="reviews-stars">★★★★★</span>
          <strong>4.9</strong>
          <span>· based on Google reviews</span>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.id}>
            <div className="review-header">
              <div className="review-avatar" aria-hidden="true">{review.initial}</div>
              <div>
                <div className="review-name">{review.name}</div>
                <div className="review-location">{review.location}</div>
              </div>
            </div>
            <div className="review-stars">★★★★★</div>
            <p className="review-quote">&ldquo;{review.quote}&rdquo;</p>
          </article>
        ))}
      </div>
    </section>
  )
}
