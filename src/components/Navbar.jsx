import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-rose-500 text-sm font-bold text-white">
            P
          </span>
          <span className="text-lg font-semibold tracking-tight text-neutral-900">popnest.me</span>
        </Link>
        <span className="hidden rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500 sm:inline">
          Demo de portafolio
        </span>
      </div>
    </header>
  )
}
