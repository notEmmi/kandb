import { useState } from 'react'
import './ContactSection.css'

// Get a free key at https://web3forms.com (enter the shop Gmail, they email you the key).
// Safe in front-end code — it can only SEND to the inbox, not read it.
const ACCESS_KEY = 'b953ca24-d839-4f9f-a72d-b480cd4a6831'

const ADDRESS = '3451 Clinton St, West Seneca, NY 14224'
const MAP_EMBED = 'https://www.google.com/maps?q=3451+Clinton+St,+West+Seneca,+NY+14224&output=embed'
const DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=3451+Clinton+St,+West+Seneca,+NY+14224'

export default function ContactSection({ nowNY, todaysHoliday, hoursSchedule, formatTime }) {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = Object.fromEntries(new FormData(form))
    if (data.botcheck) return // honeypot: bots fill it, people don't

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          from_name: 'K&B Website',
          subject: `Website message: ${data.subject}`,
          name: data.name,
          email: data.email,
          replyto: data.email, // so hitting "Reply" in Gmail goes to the customer
          message: data.message,
        }),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      {/* Header */}
      <div className="contact-header">
        <p className="section-label">CONTACT US</p>
        <h2 id="contact-title">Call, Visit, or Find Us</h2>
        <p className="contact-intro">
          Reach out for drop-off questions, pickup timing, and custom garment care.
        </p>
      </div>

      {/* Details | Form */}
      <div className="contact-grid">
        <div className="contact-details">
          <div>
            <p className="contact-label">Phone</p>
            <a className="contact-value" href="tel:+17166683088">(716) 668-3088</a>
          </div>
          <div>
            <p className="contact-label">Email</p>
            <a className="contact-value contact-email" href="mailto:kandbcleaners3451@gmail.com">
              kandbcleaners3451@gmail.com
            </a>
          </div>
          <div>
            <p className="contact-label">Location</p>
            <address className="contact-value">
              3451 Clinton St<br />West Seneca, NY 14224
            </address>
          </div>
          <div>
            <p className="contact-label">Hours</p>
            <dl className="contact-hours">
              {hoursSchedule.map((schedule) => {
                const isToday = nowNY.weekday === schedule.day
                const isOpen =
                  isToday &&
                  !todaysHoliday &&
                  schedule.open &&
                  nowNY.minutes >= schedule.start &&
                  nowNY.minutes < schedule.end
                const timeText = schedule.open
                  ? `${formatTime(schedule.start)} – ${formatTime(schedule.end)}`
                  : 'Closed'
                return (
                  <div key={schedule.day} className={`contact-hours-row${isToday ? ' is-today' : ''}`}>
                    <dt>
                      {schedule.day}
                      {isToday && <span className="contact-today">{isOpen ? 'Open now' : 'Today'}</span>}
                    </dt>
                    <dd className={schedule.open ? '' : 'is-closed'}>{timeText}</dd>
                  </div>
                )
              })}
            </dl>
            <p className="contact-note">
              {todaysHoliday ? `Closed today for ${todaysHoliday.name}` : 'Holiday hours may vary'}
            </p>
          </div>
        </div>

        <div className="contact-form-wrap">
          <p className="contact-label">Or send a message</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="checkbox" name="botcheck" className="contact-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div className="contact-pair">
              <label className="contact-field">
                <span className="sr-only">Name</span>
                <input type="text" name="name" placeholder="Name" required autoComplete="name" />
              </label>
              <label className="contact-field">
                <span className="sr-only">Email</span>
                <input type="email" name="email" placeholder="Email" required autoComplete="email" />
              </label>
            </div>
            <label className="contact-field">
              <span className="sr-only">Subject</span>
              <input type="text" name="subject" placeholder="Subject" required />
            </label>
            <label className="contact-field">
              <span className="sr-only">Message</span>
              <textarea name="message" rows={6} placeholder="Message" required />
            </label>

            <div className="contact-actions">
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              <p className="contact-status" role="status" aria-live="polite">
                {status === 'sent' && <span className="is-sent">Thanks! We'll get back to you soon.</span>}
                {status === 'error' && (
                  <span className="is-error">
                    Couldn't send. Please call <a href="tel:+17166683088">(716) 668-3088</a>.
                  </span>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Map strip */}
      <div className="contact-map">
        <iframe
          title={`Map to K & B Dry Cleaners, ${ADDRESS}`}
          src={MAP_EMBED}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a className="btn contact-directions" href={DIRECTIONS} target="_blank" rel="noopener noreferrer">
          Get directions →
        </a>
      </div>
    </section>
  )
}
