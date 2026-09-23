import AmenityIcon from './AmenityIcon'
import { AMENITIES } from '../../data/workspaces'
import { bgBrandGradientLight } from '../../styles/gradients'
import { useLanguage } from '../../context/LanguageContext'

function List({ items, t }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((id) => (
        <li key={id} className="flex items-center gap-3 text-[14px] font-medium leading-[1.3] text-white">
          <AmenityIcon id={id} className="h-[18px] w-[18px] shrink-0" />
          {t(`amenity.${id}`)}
        </li>
      ))}
    </ul>
  )
}

export default function AmenitiesCard({ className = '' }) {
  const { t } = useLanguage()
  const [col1, col2] = AMENITIES.columns

  return (
    <section className={`relative overflow-hidden rounded-[10px] ${bgBrandGradientLight} text-white ${className}`}>
      {/* See RatingCard.jsx — same gradient, same contrast fix. */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative p-6">
        <h2 className="text-[16px] font-semibold leading-[19px]">{t('detail.amenities')}</h2>
        <p className="mt-1 text-[15px] font-medium leading-[18px]">{t('detail.coworkingSpace')}</p>

        <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <List items={col1} t={t} />
          <div className="flex flex-col gap-6">
            <List items={col2} t={t} />
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-wide text-white/80">{t('detail.addOns')}</p>
              <div className="mt-2">
                <List items={AMENITIES.addOns} t={t} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
