import { bgBrandGradientLight } from '../../styles/gradients'
import { useLanguage } from '../../context/LanguageContext'

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 text-pink-highlight" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill={i < count ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.2">
          <path d="m10 2 2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.3l-4.8 2.6.9-5.4-3.9-3.8 5.4-.8Z" />
        </svg>
      ))}
    </div>
  )
}

export default function RatingCard({ workspace, className = '' }) {
  const { t } = useLanguage()
  const { bookersLikedPct, ratingsCount, reviews } = workspace

  return (
    <section className={`relative flex h-full flex-col overflow-hidden rounded-[10px] ${bgBrandGradientLight} text-white ${className}`}>
      {/* The gradient's lighter stop (#7A9AC9) fails WCAG contrast for white
          text even at full opacity — this scrim darkens it enough to pass
          without recoloring the gradient itself. See DESIGN_SYSTEM.md
          ("Contrast floor"). */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative p-6">
        <h2 className="text-[15px] font-semibold leading-[1.2]">{t('detail.bookersLiked', { pct: bookersLikedPct })}</h2>
        <p className="mt-0.5 text-xs text-white/80">{t('detail.ratings', { count: ratingsCount })}</p>

        <div className="mt-4 flex flex-col divide-y divide-white/20">
          {reviews.map((r) => (
            <div key={r.name} className="flex gap-3 py-4 first:pt-0 last:pb-0">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/25 text-xs font-semibold">
                {r.name.split(' ').map((n) => n[0]).join('')}
              </span>
              <div className="min-w-0">
                <Stars count={r.stars} />
                <p className="mt-1 text-[13px] font-medium">{r.name}</p>
                <p className="mt-1 text-[13px] leading-[1.5] text-white/85">{t(r.bodyKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
