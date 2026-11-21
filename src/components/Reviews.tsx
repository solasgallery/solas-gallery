import { reviews, reviewsUrl } from '@/data/reviews'

/** Real Google reviews, read from src/data/reviews.ts. Renders nothing when empty. */
export default function Reviews() {
  if (reviews.length === 0) return null
  return (
    <section className="sg-section sg-reviews" id="reviews" aria-labelledby="reviews-heading">
      <header className="sg-section-head">
        <p className="sg-eyebrow">In their words</p>
        <h2 id="reviews-heading">From Google reviews</h2>
      </header>
      <div className="sg-review-list">
        {reviews.map((review, i) => (
          <figure className="sg-review" key={`${review.firstName}-${i}`}>
            <blockquote>{review.text}</blockquote>
            <figcaption>
              {review.firstName} · Google review
            </figcaption>
          </figure>
        ))}
      </div>
      {reviewsUrl ? (
        <a className="sg-link" href={reviewsUrl} rel="noopener noreferrer">
          Read more on Google
        </a>
      ) : null}
    </section>
  )
}
