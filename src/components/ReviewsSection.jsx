import { useState } from 'react'
import './ReviewsSection.css'

const reviews = [
  { id: 'review-1', initial: 'A', name: 'Andrew C.', location: 'Buffalo, NY', quote: 'K&B took care of approximately 28 suits (coat & slacks), and I think 35+ dress shirts. I am finishing up putting away all the material they had graciously dry-cleaned and laundered for us. I wanted to convey my sincerest gratitude—everything looks incredible! The wash-and-fold items have such a wonderful aroma, and K&B got the stains out of my students’ white dress shirts with incredible diligence and attention to detail. I take care of many outfits and uniform items for students. The diligence and attention to detail that K&B were able to get the stains out of the dress shirts, which are white, is simply amazing. I thought for sure I’d have two or three coming back and becoming needed rags; however, K&B were able to make the white shirts look like new again. Simply: wow! Thank you, I will certainly be back another day.' },
  { id: 'review-2', initial: 'J', name: 'Jubair A.', location: 'Google reviewer', quote: 'I had a great experience with K & B Dry Cleaning and Alteration. The service was excellent, the quality of work was impressive, and they paid great attention to detail. My clothes were handled with care, and the alteration was done perfectly. The staff was friendly, professional, and very helpful. I went there about one year ago with my lovely wife. I highly recommend K & B Dry Cleaning to anyone looking for reliable, high-quality service. I will definitely come back again!' },
  { id: 'review-3', initial: 'H', name: 'Halie R.', location: 'Google reviewer', quote: "This place is newly redone and it's amazing. Nicest dry cleaner I've ever been too. My clothes were perfect and smelled amazing. Would recommend to anyone!" },
]

const QUOTE_LIMIT = 220

function truncateQuote(quote) {
  if (quote.length <= QUOTE_LIMIT) return quote
  const trimmed = quote.slice(0, QUOTE_LIMIT)
  return trimmed.slice(0, trimmed.lastIndexOf(' ')) + '…'
}

export default function ReviewsSection() {
  const [expandedIds, setExpandedIds] = useState(() => new Set())

  const toggleExpanded = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

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
        {reviews.map((review) => {
          const isLong = review.quote.length > QUOTE_LIMIT
          const isExpanded = expandedIds.has(review.id)
          const displayQuote = isLong && !isExpanded ? truncateQuote(review.quote) : review.quote

          return (
            <article className="review-card" key={review.id}>
              <div className="review-header">
                <div className="review-avatar" aria-hidden="true">{review.initial}</div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-location">{review.location}</div>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-quote">&ldquo;{displayQuote}&rdquo;</p>
              {isLong && (
                <button
                  type="button"
                  className="review-toggle"
                  onClick={() => toggleExpanded(review.id)}
                >
                  {isExpanded ? 'Read less' : 'Read more'}
                </button>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
