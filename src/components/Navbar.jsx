import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-30 bg-brand-indigo">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="shrink-0">
          <img src="/images/logo-popnest-white.png" alt="Popnest" className="h-10 w-auto" />
        </Link>
        <div className="flex items-center gap-3">
          <LanguageToggle className="text-white" />
          <span className="hidden rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white sm:inline">
            {t('common.demoTag')}
          </span>
        </div>
      </div>
    </header>
  )
}
