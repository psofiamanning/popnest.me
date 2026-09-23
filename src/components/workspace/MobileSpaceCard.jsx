import { Link } from 'react-router-dom'
import { bgBrandGradient } from '../../styles/gradients'
import { useLanguage } from '../../context/LanguageContext'

export default function MobileSpaceCard({ workspace }) {
  const { id, name, photo, rating, price } = workspace
  const { t } = useLanguage()

  return (
    <Link to={`/espacios/${id}`} className={`block overflow-hidden rounded-[6px] ${bgBrandGradient}`}>
      <img src={photo} alt="" className="aspect-[383/163] w-full object-cover" />
      <div className="flex items-start justify-between gap-3 px-[10px] py-3">
        <p className="min-w-0 flex-1 text-[16px] font-bold leading-[20px] text-white">{name}</p>
        <p className="shrink-0 text-[20px] font-semibold leading-[28px] text-white">MXN {price}</p>
      </div>
      <div className="flex items-center justify-between gap-3 px-[10px] pb-3">
        <p className="flex items-center gap-1.5 text-[14px] leading-[28px] text-caption">
          <svg viewBox="0 0 20 20" className="h-[17px] w-[17px]" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
            <path d="m10 2 2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.3l-4.8 2.6.9-5.4-3.9-3.8 5.4-.8Z" />
          </svg>
          {rating}%&nbsp;&nbsp;CDMX
        </p>
        <p className="shrink-0 text-[14px] leading-[28px] text-caption">{t('common.includesFees')}</p>
      </div>
    </Link>
  )
}
