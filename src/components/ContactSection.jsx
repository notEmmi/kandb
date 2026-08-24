import './ContactSection.css'

export default function ContactSection({ nowNY, todaysHoliday, hoursSchedule, formatTime, phoneSVG, emailSVG, locationSVG, clockSVG }) {
  return (
    <section className="contact" id="contact">
      <span className="section-label">Contact Us</span>
      <h2>Call, Visit, or Find Us</h2>

      <div className="contact-content">
        <div className="contact-layout">
          <div className="contact-details">
            <div className="contact-info">
              <div className="info-item">
                <div className="info-header">{phoneSVG}<strong>Phone</strong></div>
                <p><a className="phone-link" href="tel:+17166683088">(716) 668-3088</a></p>
              </div>
              <div className="info-item">
                <div className="info-header">{emailSVG}<strong>Email</strong></div>
                <p><a className="phone-link" href="mailto:kandbcleaners3451@gmail.com">kandbcleaners3451@gmail.com</a></p>
              </div>
              <div className="info-item">
                <div className="info-header">{locationSVG}<strong>Location</strong></div>
                <p>3451 Clinton St,<br />West Seneca,<br /> NY 14224</p>
              </div>
              <div className="info-item">
                <div className="info-header">{clockSVG}<strong>Hours</strong></div>
                <table className="hours-table" aria-label="Business hours">
                  <tbody>
                    {hoursSchedule.map((schedule) => {
                      const isToday = nowNY.weekday === schedule.day
                      const isOpen = !todaysHoliday && schedule.open && nowNY.minutes >= schedule.start && nowNY.minutes < schedule.end
                      const timeText = schedule.open ? `${formatTime(schedule.start)} – ${formatTime(schedule.end)}` : 'Closed'
                      return (
                        <tr key={schedule.day} className={isToday ? 'today' : ''}>
                          <td>{schedule.day}</td>
                          <td>{timeText}{isToday && isOpen ? <span className="open-now">Open now</span> : null}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="contact-note">Reach out for drop-off questions, pickup timing, and custom garment care.</p>
            <a href="tel:(716) 668-3088" className="btn btn-primary">{phoneSVG}<span>Call Now</span></a>
          </div>
        </div>
        <div className="map-container">
          <iframe
            className="google-map"
            title="K & B Dry Cleaning location"
            src="https://www.google.com/maps?q=3451+Clinton+St,+West+Seneca,+NY+14224&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
