import { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'

// Barra blanca con hamburguesa + logo centrado, compartida por las pantallas móviles
// (mapa y detalle). Absoluta por defecto para flotar sobre contenido (ej. el mapa);
// pasa `sticky` para que se comporte como header normal en una página que hace scroll.
export default function MobileTopBar({ sticky = false }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div
        className={`${sticky ? 'sticky' : 'absolute inset-x-0'} top-0 z-[1000] flex items-center justify-between bg-white px-4 pb-2 pt-[calc(env(safe-area-inset-top)+10px)]`}
      >
        <button type="button" aria-label="Menu" className="text-brand-navy-muted" onClick={() => setMenuOpen(true)}>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <Link to="/">
          <img src="/images/logo-popnest.png" alt="Popnest" className="h-7 w-auto" />
        </Link>
        <span className="w-6" />
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
