import { useState, useEffect } from 'react'
import './App.css'
import ServicesSection from './components/ServicesSection'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Nav from './components/Nav'
import AnnouncementBar from './components/AnnouncementBar'
import Perks from './components/Perks'
import Footer from './components/Footer'


// PUBLIC URL
const publicUrl = import.meta.env.BASE_URL || '/kandb/'

const imageAssets = {
  everydayImage: `${publicUrl}casualwear.jpg`,
  leatherImage: `${publicUrl}leather.jpg`,
  uggsImage: `${publicUrl}uggs.jpg`,
  weddingDressImage: `${publicUrl}weddingdress.jpg`,
  beddingImage: `${publicUrl}bedding.jpg`,
  materialImage: `${publicUrl}material.jpg`,
  sportswearImage: `${publicUrl}sportswear.jpg`,
  costumesImage: `${publicUrl}costumes.jpg`,
  accessoriesImage: `${publicUrl}accessories.jpg`,
  alterationsImage: `${publicUrl}alterations2.jpg`,

  pressImage: `${publicUrl}pressing.jpg`,
}

const arrowRightSVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
)

const phoneSVG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
)

// -----------------------------------------------------------------------------
// TIME / HOLIDAY HELPERS
// These are static or pure helpers and can live at module scope.
// -----------------------------------------------------------------------------
const getNthWeekdayOfMonth = (year, month, weekday, n) => {
  const d = new Date(Date.UTC(year, month - 1, 1))
  let count = 0
  while (true) {
    if (d.getUTCDay() === weekday) {
      count += 1
      if (count === n) return d.getUTCDate()
    }
    d.setUTCDate(d.getUTCDate() + 1)
  }
}

console.log(getNthWeekdayOfMonth(new Date().getFullYear(), 9, 1, 1))

const getLastWeekdayOfMonth = (year, month, weekday) => {
  const d = new Date(Date.UTC(year, month, 0))
  while (d.getUTCDay() !== weekday) d.setUTCDate(d.getUTCDate() - 1)
  return d.getUTCDate()
}

const getHolidaysForYear = (year) => [
  { name: "New Year's Day", month: 1, day: 1 },
  { name: 'Memorial Day', month: 5, day: getLastWeekdayOfMonth(year, 5, 1) },
  { name: 'Independence Day', month: 7, day: 4 },
  { name: 'Labor Day', month: 9, day: getNthWeekdayOfMonth(year, 9, 1, 1) },
  { name: 'Christmas Day', month: 12, day: 25 },
]

const hoursSchedule = [
  { day: 'Mon', open: true, start: 9 * 60, end: 17 * 60 }, // 9:00 AM - 5:00 PM
  { day: 'Tue', open: true, start: 9 * 60, end: 17 * 60 },
  { day: 'Wed', open: false },
  { day: 'Thu', open: true, start: 9 * 60, end: 17 * 60 },
  { day: 'Fri', open: true, start: 9 * 60, end: 17 * 60 },
  { day: 'Sat', open: true, start: 9 * 60, end: 15 * 60 }, // 9:00 AM - 3:00 PM
  { day: 'Sun', open: false }, // Closed
]

const getNYTime = () => {
  const now = new Date()
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now)

  const getPart = (type) => parts.find((p) => p.type === type)?.value || ''
  const weekday = getPart('weekday')
  const hour = parseInt(getPart('hour') || '0', 10)
  const minute = parseInt(getPart('minute') || '0', 10)

  return {
    weekday,
    minutes: hour * 60 + minute,
    year: parseInt(getPart('year') || '0', 10),
    month: parseInt(getPart('month') || '0', 10),
    day: parseInt(getPart('day') || '0', 10),
  }
}

const formatTime = (minutes) => {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  const ampm = h >= 12 ? 'PM' : 'AM'
  const hr12 = ((h + 11) % 12) + 1
  return `${hr12}:${m.toString().padStart(2, '0')} ${ampm}`
}

// -----------------------------------------------------------------------------
// APP STATE / LIVE STATUS
// These values depend on current time and UI state, so they belong in App.
// -----------------------------------------------------------------------------
function App() {

  
  const [nowNY, setNowNY] = useState(getNYTime())

  useEffect(() => {
    const id = setInterval(() => setNowNY(getNYTime()), 30 * 1000)
    return () => clearInterval(id)
  }, [])

  const todaysHoliday = getHolidaysForYear(nowNY.year).find(
    (h) => h.month === nowNY.month && h.day === nowNY.day
  )

  const todaySchedule = hoursSchedule.find((h) => h.day === nowNY.weekday)
  const isCurrentlyOpen = Boolean(
    !todaysHoliday &&
      todaySchedule?.open &&
      nowNY.minutes >= todaySchedule.start &&
      nowNY.minutes < todaySchedule.end
  )

  const statusLabel = todaysHoliday
    ? `Closed — ${todaysHoliday.name}`
    : isCurrentlyOpen
    ? 'Open now'
    : 'Closed'

  const statusClass = todaysHoliday ? 'is-holiday' : isCurrentlyOpen ? 'is-open' : 'is-closed'

  return (
    <div className="app">
      <AnnouncementBar />
      <Nav
        publicUrl={publicUrl}
        phoneSVG={phoneSVG}
      />

      <main className="main">
        <HeroSection
          publicUrl={publicUrl}
          arrowRightSVG={arrowRightSVG}
          statusLabel={statusLabel}
          statusClass={statusClass}
        />
        <ServicesSection images={imageAssets} />

        <Perks publicUrl={publicUrl} />
        <AboutSection publicUrl={publicUrl} />

        <ContactSection
          nowNY={nowNY}
          todaysHoliday={todaysHoliday}
          hoursSchedule={hoursSchedule}
          formatTime={formatTime}
        />
      </main>

      <Footer publicUrl={publicUrl} />
    </div>
  )
}

export default App
