import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import LanguageToggle from '../LanguageToggle'

export default function DetailHeader() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-20 border-b border-brand-indigo/15 bg-white-warm/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1130px] items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="shrink-0">
          <img src="/images/logo-popnest.png" alt="Popnest" className="h-8 w-auto" />
        </Link>
        <div className="flex items-center gap-3">
          <LanguageToggle className="text-brand-navy" />
          <span className="text-sm font-medium text-brand-navy">{t('common.signUpSignIn')}</span>
        </div>
      </div>
    </header>
  )
}
