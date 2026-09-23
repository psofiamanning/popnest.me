import { Link } from 'react-router-dom'
import BrandMap from './BrandMap'
import MobileSpaceCard from './MobileSpaceCard'
import MobileTopBar from './MobileTopBar'
import { WORKSPACES } from '../../data/workspaces'
import { useLanguage } from '../../context/LanguageContext'

const cheapest = WORKSPACES.reduce((min, w) => (w.price < min.price ? w : min), WORKSPACES[0])

export default function MobileMapView({ filters }) {
  const { t } = useLanguage()

  return (
    <div className="bg-white">
      {/* Map hero — fills the first viewport on open, matches the earlier reference. */}
      <div className="relative h-[100dvh] overflow-hidden">
        <BrandMap alwaysShowPrice highlightId={cheapest.id} className="absolute inset-0 h-full w-full" />

        <MobileTopBar />

        {/* Frosted filter panel floating over the map, per Figma "Header" group */}
        <div className="absolute inset-x-3 top-[52px] z-[1000] rounded-[12px] bg-tag-lavender/20 p-3 shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[30px]">
          <div className="flex gap-2">
            <div className="flex-1 rounded-[10px] bg-brand-indigo/60 px-4 py-2.5 text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[2px]">
              <p className="text-[14px] font-semibold text-white/70">{t('map.where')}</p>
              <p className="truncate text-[13px] font-medium leading-[17px] text-white">{filters.where}</p>
            </div>
            <div className="flex-1 rounded-[12px] bg-brand-indigo/60 px-4 py-2.5 text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[2px]">
              <p className="text-[14px] font-semibold text-white/70">{t('map.when')}</p>
              <p className="truncate text-[13px] font-medium leading-[17px] text-white-warm">{filters.when}</p>
            </div>
          </div>

          <div className="relative mt-2 flex items-center justify-center rounded-[10px] bg-brand-indigo py-1 shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[2px]">
            <span className="text-[11px] font-semibold leading-[28px] text-white">{t('mobileMap.dayPass')}</span>
            <svg viewBox="0 0 24 24" className="absolute right-3 h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 8h6M14 8h6M4 16h10M18 16h2M8 5v6M16 13v6" />
            </svg>
          </div>
        </div>

        {/* Bottom card carousel — photo with "Elegant"/"DEAL" badges, then a tinted info panel
            (not plain white) with name, rating row, and a bigger price. One card prominent,
            next one peeking in (per Figma "Secondary Image" / "Main Image" / "Rectangle 3570"). */}
        <div className="absolute inset-x-0 bottom-0 z-[1000] pb-[calc(env(safe-area-inset-bottom)+16px)] pt-10">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 [scrollbar-width:none]">
            {WORKSPACES.map((w) => (
              <Link
                key={w.id}
                to={`/espacios/${w.id}`}
                className="w-[78%] max-w-[300px] shrink-0 snap-start overflow-hidden rounded-[10px] shadow-lg"
              >
                <div className="relative">
                  <img src={w.photo} alt="" className="aspect-[300/195] w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-[6px] bg-white px-3 py-1.5 text-[13px] font-semibold text-brand-navy">
                    {t(w.tagKey)}
                  </span>
                  {w.id === cheapest.id && (
                    <span className="absolute right-3 top-3 rounded-[6px] bg-pink-interactive px-3 py-1.5 text-[13px] font-bold text-white">
                      {t('mobileMap.deal')}
                    </span>
                  )}
                </div>
                <div className="bg-brand-indigo/70 px-4 py-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="min-w-0 truncate text-[17px] font-semibold leading-tight text-white">{w.name}</p>
                    <p className="shrink-0 text-[20px] font-bold leading-tight text-white">USD {w.price}</p>
                  </div>
                  <div className="mt-1.5 flex items-end justify-between gap-2">
                    <p className="flex items-center gap-1 text-[13px] text-white/90">
                      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d="m10 2 2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.3l-4.8 2.6.9-5.4-3.9-3.8 5.4-.8Z" />
                      </svg>
                      {w.rating}% &nbsp;|&nbsp; {w.area}
                    </p>
                    <p className="shrink-0 text-right text-[11px] leading-[1.4] text-white/70">
                      {t('common.perDay')}
                      <br />
                      {t('common.includesFees')}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Full list below the map hero — mobile only, matches the desktop card list content. */}
      <div className="flex flex-col gap-4 px-4 py-6">
        {WORKSPACES.map((w) => (
          <MobileSpaceCard key={w.id} workspace={w} />
        ))}
      </div>
    </div>
  )
}
