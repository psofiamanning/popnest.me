import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Confirmation from './pages/Confirmation'
import NotFound from './pages/NotFound'
import WorkspaceMap from './pages/WorkspaceMap'
import WorkspaceDetail from './pages/WorkspaceDetail'
import MobileCheckout from './pages/MobileCheckout'
import MobileRoomType from './pages/MobileRoomType'
import MobileDatePicker from './pages/MobileDatePicker'
import MobileTimePicker from './pages/MobileTimePicker'
import MobilePaymentCard from './pages/MobilePaymentCard'
import MobileNewCard from './pages/MobileNewCard'

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const hasOwnChrome =
    pathname === '/' ||
    pathname === '/workspace-map' ||
    pathname.startsWith('/espacios/') ||
    pathname.startsWith('/confirmacion/')

  return (
    <div className="flex min-h-screen flex-col">
      {!hasOwnChrome && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workspace-map" element={<WorkspaceMap />} />
          <Route path="/espacios/:id" element={<WorkspaceDetail />} />
          <Route path="/espacios/:id/reservar" element={<MobileCheckout />} />
          <Route path="/espacios/:id/reservar/room-type" element={<MobileRoomType />} />
          <Route path="/espacios/:id/reservar/date" element={<MobileDatePicker />} />
          <Route path="/espacios/:id/reservar/time" element={<MobileTimePicker />} />
          <Route path="/espacios/:id/reservar/payment" element={<MobilePaymentCard />} />
          <Route path="/espacios/:id/reservar/payment/new" element={<MobileNewCard />} />
          <Route path="/confirmacion/:id" element={<Confirmation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!hasOwnChrome && <Footer />}
    </div>
  )
}

export default App
