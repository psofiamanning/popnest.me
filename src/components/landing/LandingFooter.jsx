import { useLanguage } from '../../context/LanguageContext'

const LINK_KEYS = [
  'landingFooter.link.neighborhoods',
  'landingFooter.link.partnerships',
  'landingFooter.link.about',
  'landingFooter.link.careers',
  'landingFooter.link.hotelPartners',
  'landingFooter.link.support',
  'landingFooter.link.faq',
]

export default function LandingFooter() {
  const { t } = useLanguage()

  return (
    <footer>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col justify-center gap-4 bg-brand-indigo px-6 py-16 text-white sm:px-12">
          <img src="/images/logo-popnest-white.png" alt="Popnest" className="h-20 w-auto self-start" />
          <p className="text-2xl font-semibold">{t('landingFooter.tagline')}</p>
        </div>
        <div className="flex flex-col gap-3 bg-white px-6 py-16 text-sm text-gray-muted sm:px-12">
          {LINK_KEYS.map((key) => (
            <span key={key}>{t(key)}</span>
          ))}
          <p className="mt-6 font-semibold text-neutral-700">{t('landingFooter.social')}</p>
          <div className="flex gap-4">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-neutral-500" aria-label="TikTok">
              <path d="M16.5 2h-3v13.5a2.5 2.5 0 1 1-2.5-2.5c.17 0 .34.01.5.04V9.9a5.5 5.5 0 1 0 5 5.48V8.83a7 7 0 0 0 4 1.25V7.08a4 4 0 0 1-4-4z" />
            </svg>
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-neutral-500" aria-label="LinkedIn">
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21h-4z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-3 border-t border-neutral-200 px-6 py-4 text-xs text-neutral-400 sm:flex-row sm:px-12">
        <p>
          <img src="/images/logo-popnest.png" alt="Popnest" className="mr-2 inline-block h-7 w-auto align-middle" />
          {t('landingFooter.legal')}
        </p>
        <p>{t('landingFooter.copyright')}</p>
      </div>
    </footer>
  )
}
