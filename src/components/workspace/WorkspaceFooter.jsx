import { useLanguage } from '../../context/LanguageContext'

const GROUPS = [
  { titleKey: 'footer.explore', links: ['landingFooter.link.neighborhoods', 'landingFooter.link.partnerships'] },
  { titleKey: 'footer.company', links: ['landingFooter.link.about', 'landingFooter.link.careers', 'landingFooter.link.hotelPartners'] },
  { titleKey: 'footer.help', links: ['landingFooter.link.support', 'landingFooter.link.faq'] },
]

const LEGAL_KEYS = ['footer.terms', 'footer.privacy', 'footer.privacyChoices']

export default function WorkspaceFooter({ className = 'px-[10px] lg:pr-[17px]', contentClassName = '', compact = false }) {
  const { t } = useLanguage()

  return (
    <footer className={`bg-brand-indigo text-white ${compact ? 'pt-6' : 'pt-12'} ${className}`}>
      <div
        className={`grid ${compact ? 'gap-6 pb-6' : 'gap-10 pb-10'} sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] ${contentClassName}`}
      >
        <div>
          <img src="/images/logo-popnest-white.png" alt="Popnest" className={compact ? 'h-9 w-auto' : 'h-14 w-auto'} />
          {!compact && <p className="mt-3 text-lg font-semibold">{t('landingFooter.tagline')}</p>}
          <div className={`flex gap-3 ${compact ? 'mt-3' : 'mt-5'}`}>
            <span className={`grid place-items-center rounded-full border border-white/40 ${compact ? 'h-8 w-8' : 'h-10 w-10'}`}>
              <svg viewBox="0 0 24 24" className={compact ? 'h-4 w-4 fill-white' : 'h-5 w-5 fill-white'} role="img" aria-label="TikTok">
                <path d="M16.5 2h-3v13.5a2.5 2.5 0 1 1-2.5-2.5c.17 0 .34.01.5.04V9.9a5.5 5.5 0 1 0 5 5.48V8.83a7 7 0 0 0 4 1.25V7.08a4 4 0 0 1-4-4z" />
              </svg>
            </span>
            <span className={`grid place-items-center rounded-full border border-white/40 ${compact ? 'h-8 w-8' : 'h-10 w-10'}`}>
              <svg viewBox="0 0 24 24" className={compact ? 'h-4 w-4 fill-white' : 'h-5 w-5 fill-white'} role="img" aria-label="LinkedIn">
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21h-4z" />
              </svg>
            </span>
          </div>
        </div>

        {!compact &&
          GROUPS.map(({ titleKey, links }) => (
            <nav key={titleKey} aria-label={t(titleKey)}>
              <h2 className="text-sm font-semibold uppercase tracking-wide">{t(titleKey)}</h2>
              <ul className="mt-3 space-y-1">
                {links.map((linkKey) => (
                  <li key={linkKey} className="py-1 text-sm">
                    {t(linkKey)}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
      </div>

      <div
        className={`flex flex-col items-start justify-between gap-3 border-t border-white/30 text-[13px] sm:flex-row sm:items-center ${compact ? 'py-3' : 'py-5'} ${contentClassName}`}
      >
        <nav aria-label="Legal">
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {LEGAL_KEYS.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </nav>
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  )
}
