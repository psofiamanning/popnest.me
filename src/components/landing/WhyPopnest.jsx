import { useLanguage } from '../../context/LanguageContext'

const REASONS = [
  {
    titleKey: 'whyPopnest.reason1Title',
    descKey: 'whyPopnest.reason1Desc',
    icon: (
      <>
        <rect x="7" y="10" width="34" height="26" rx="3" />
        <path d="M7 18h34" />
        <circle cx="16" cy="14" r="0.5" />
        <circle cx="22" cy="14" r="0.5" />
        <circle cx="34" cy="30" r="9" />
        <path d="M34 25v5l3 3" />
      </>
    ),
  },
  {
    titleKey: 'whyPopnest.reason2Title',
    descKey: 'whyPopnest.reason2Desc',
    icon: (
      <>
        <path d="M10 40V16l12-8 12 8v24" />
        <path d="M10 24h24" />
        <path d="M16 40V24" />
        <path d="M28 40V24" />
        <circle cx="34" cy="8" r="4" />
        <path d="M34 4V1M31 6l-2-2M37 6l2-2" />
      </>
    ),
  },
  {
    titleKey: 'whyPopnest.reason3Title',
    descKey: 'whyPopnest.reason3Desc',
    icon: (
      <>
        <rect x="8" y="18" width="28" height="20" rx="2" />
        <path d="M8 26h28" />
        <path d="M22 18v20" />
        <path d="M22 18c-3-6-11-6-11 0 0 0 5 0 11 0" />
        <path d="M22 18c3-6 11-6 11 0 0 0-5 0-11 0" />
        <circle cx="37" cy="8" r="4" />
        <path d="M37 5v6M34 8h6" />
      </>
    ),
  },
]

export default function WhyPopnest() {
  const { t } = useLanguage()

  return (
    <section className="bg-brand-indigo px-4 py-16 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">{t('whyPopnest.heading')}</h2>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {REASONS.map((reason) => (
            <div key={reason.titleKey} className="flex flex-col items-center text-center">
              <svg
                viewBox="0 0 48 48"
                className="mb-4 h-14 w-14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {reason.icon}
              </svg>
              <h3 className="font-semibold">{t(reason.titleKey)}</h3>
              <p className="mt-1 max-w-[220px] text-sm text-indigo-100">{t(reason.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
