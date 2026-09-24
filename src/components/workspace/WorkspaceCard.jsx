import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

export default function WorkspaceCard({ workspace }) {
  const { id, name, rating, kms, area, price, near, minutes, photo } = workspace
  const { t } = useLanguage()

  return (
    <Link
      to={`/espacios/${id}`}
      className="ml-[4px] flex h-[184px] overflow-hidden rounded-[15px] bg-brand-navy-muted text-white transition-opacity hover:opacity-90"
    >
      <img src={photo} alt="" className="h-full w-[120px] shrink-0 object-cover sm:w-[34%] sm:max-w-[300px]" />
      <div className="flex min-w-0 flex-1 flex-col justify-between py-[18px] pl-4 pr-3 sm:pb-[20px] sm:pl-[27px] sm:pr-[27px] sm:pt-[46px]">
        <div className="flex justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-[22px] font-semibold leading-[1.2] max-sm:text-[17px]">{name}</h3>
            <p className="mt-1 flex items-center gap-1 text-[13px] font-medium leading-[1.3]">
              <svg viewBox="0 0 24 24" className="h-[14px] w-[14px] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
                <path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6-5.4-3-5.4 3 1.1-6L3.2 9.4l6.1-.8z" />
              </svg>
              {rating}% | {kms} kms - {area}
            </p>
          </div>
          <div className="shrink-0 text-right sm:-mt-[2px]">
            <p className="text-[26px] font-semibold leading-[1.1] max-sm:text-[20px]">${price}</p>
            <p className="mt-1 text-[12px] font-medium leading-[1.3]">
              {t('common.perDay')}
              <br />
              {t('common.includesFees')}
            </p>
          </div>
        </div>
        <p className="text-[13px] font-normal leading-[1.3]">{t('common.minutesAwayFrom', { minutes, place: near })}</p>
      </div>
    </Link>
  )
}
