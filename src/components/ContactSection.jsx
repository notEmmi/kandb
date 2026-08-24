import styles from './ContactSection.module.css'

export default function ContactSection({ nowNY, todaysHoliday, hoursSchedule, formatTime, phoneSVG, emailSVG, locationSVG, clockSVG }) {
  return (
    <section className={styles.contact} id="contact">
      <span className="section-label">Contact Us</span>
      <h2>Call, Visit, or Find Us</h2>

      <div className={styles.content}>
        <div className={styles.layout}>
          <div className={styles.details}>
            <div className={styles.info}>
              <div className={styles.item}>
                <div className={styles.infoHeader}>{phoneSVG}<strong>Phone</strong></div>
                <p><a className="phone-link" href="tel:+17166683088">(716) 668-3088</a></p>
              </div>
              <div className={styles.item}>
                <div className={styles.infoHeader}>{emailSVG}<strong>Email</strong></div>
                <p><a className="phone-link" href="mailto:kandbcleaners3451@gmail.com">kandbcleaners3451@gmail.com</a></p>
              </div>
              <div className={styles.item}>
                <div className={styles.infoHeader}>{locationSVG}<strong>Location</strong></div>
                <p>3451 Clinton St,<br />West Seneca,<br /> NY 14224</p>
              </div>
              <div className={styles.item}>
                <div className={styles.infoHeader}>{clockSVG}<strong>Hours</strong></div>
                <table className={styles.hours} aria-label="Business hours">
                  <tbody>
                    {hoursSchedule.map((schedule) => {
                      const isToday = nowNY.weekday === schedule.day
                      const isOpen = !todaysHoliday && schedule.open && nowNY.minutes >= schedule.start && nowNY.minutes < schedule.end
                      const timeText = schedule.open ? `${formatTime(schedule.start)} – ${formatTime(schedule.end)}` : 'Closed'
                      return (
                        <tr key={schedule.day} className={isToday ? styles.today : ''}>
                          <td>{schedule.day}</td>
                          <td>{timeText}{isToday && isOpen ? <span className={styles.openNow}>Open now</span> : null}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <p className={styles.note}>Reach out for drop-off questions, pickup timing, and custom garment care.</p>
            <a href="tel:(716) 668-3088" className="btn btn-primary">{phoneSVG}<span>Call Now</span></a>
          </div>
        </div>
        <div className="map-container">
          <iframe
            className={styles.map}
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
