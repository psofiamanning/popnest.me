import { useEffect, useRef } from 'react'

const ROW_HEIGHT = 40
const VISIBLE_ROWS = 7
const PAD_ROWS = (VISIBLE_ROWS - 1) / 2

// Estilo por distancia al centro, tomado literal de los tokens de Figma
// (las filas se van oscureciendo/encogiendo hacia los bordes, no aclarando),
// escalado más grande a pedido del usuario.
const TIER_STYLE = [
  'text-[26px] font-bold text-white',
  'text-[20px] font-medium text-[#E7E7E7]',
  'text-[18px] font-medium text-[rgba(35,44,69,0.77)]',
  'text-[16px] font-medium text-[rgba(35,44,69,0.58)]',
]

export default function WheelColumn({ items, index, onChange }) {
  const ref = useRef(null)
  const isProgrammatic = useRef(true)

  useEffect(() => {
    if (!ref.current) return
    ref.current.scrollTop = index * ROW_HEIGHT
    const t = setTimeout(() => {
      isProgrammatic.current = false
    }, 50)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleScroll() {
    if (isProgrammatic.current || !ref.current) return
    const nearest = Math.round(ref.current.scrollTop / ROW_HEIGHT)
    const clamped = Math.max(0, Math.min(items.length - 1, nearest))
    if (clamped !== index) onChange(clamped)
  }

  return (
    <div
      ref={ref}
      onScroll={handleScroll}
      className="h-[280px] flex-1 snap-y snap-mandatory overflow-y-auto [scrollbar-width:none]"
    >
      <div style={{ height: PAD_ROWS * ROW_HEIGHT }} />
      {items.map((item, i) => (
        <div
          key={item}
          className={`flex h-[40px] snap-center items-center justify-center ${TIER_STYLE[Math.min(3, Math.abs(i - index))]}`}
        >
          {item}
        </div>
      ))}
      <div style={{ height: PAD_ROWS * ROW_HEIGHT }} />
    </div>
  )
}
