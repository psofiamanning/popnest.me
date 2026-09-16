import { createContext, useContext, useEffect, useState } from 'react'

const BookingContext = createContext(null)

const STORAGE_KEY = 'popnest_demo_bookings'

function loadBookings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function makeConfirmationCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase()
}

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState(loadBookings)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings))
    } catch {
      // localStorage puede fallar en modo privado; el demo sigue funcionando en memoria.
    }
  }, [bookings])

  function createBooking(details) {
    const booking = {
      id: makeConfirmationCode(),
      createdAt: new Date().toISOString(),
      ...details,
    }
    setBookings((prev) => [booking, ...prev])
    return booking
  }

  function getBooking(id) {
    return bookings.find((b) => b.id === id) || null
  }

  return (
    <BookingContext.Provider value={{ bookings, createBooking, getBooking }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBookings() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBookings debe usarse dentro de <BookingProvider>')
  return ctx
}
