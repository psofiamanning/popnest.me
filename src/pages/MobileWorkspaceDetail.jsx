import { Link } from 'react-router-dom'
import { bgCtaGradient } from '../styles/gradients'
import MobileTopBar from '../components/workspace/MobileTopBar'
import MobilePhotoCarousel from '../components/detail/MobilePhotoCarousel'
import BrandMap from '../components/workspace/BrandMap'
import WorkspaceFooter from '../components/workspace/WorkspaceFooter'
import AmenitiesCard from '../components/detail/AmenitiesCard'
import RatingCard from '../components/detail/RatingCard'
import NeedToKnowCard from '../components/detail/NeedToKnowCard'
import KeepInMindCard from '../components/detail/KeepInMindCard'
import { bgBrandGradient } from '../styles/gradients'
import { useLanguage } from '../context/LanguageContext'

export default function MobileWorkspaceDetail({ workspace }) {
  const { name, gallery, tagKey, bookersLikedPct, ratingsCount, address, price, id } = workspace
  const { t } = useLanguage()

  return (
    <div className="flex min-h-[100dvh] flex-col bg-white pb-16">
      <MobileTopBar sticky />

      <MobilePhotoCarousel photos={gallery} />

      <div className={`mx-1 mt-[11px] rounded-[10px] ${bgBrandGradient} p-4`}>
        <span className="inline-block bg-tag-lavender px-2 py-0.5 text-[12px] font-bold leading-[28px] text-black">
          {t(tagKey)}
        </span>
        <h1 className="mt-2 text-[20px] font-bold leading-[22px] text-white">{name}</h1>
        <p className="mt-2 flex items-center gap-1.5 text-[14px] font-medium text-white">
          <svg viewBox="0 0 20 20" className="h-[15px] w-[15px]" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
            <path d="m10 2 2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.3l-4.8 2.6.9-5.4-3.9-3.8 5.4-.8Z" />
          </svg>
          {bookersLikedPct}% &nbsp;| {t('detail.ratings', { count: ratingsCount })}
        </p>
        <p className="mt-3 text-[14px] font-medium leading-[20px] text-white">{address}</p>
      </div>

      <div className="mx-1 mt-[11px] h-[220px] overflow-hidden rounded-[10px]">
        <BrandMap workspaces={[workspace]} focusId={id} interactive={false} showZoomControl={false} />
      </div>

      {/* Orden pensado para decidir sobre la marcha en móvil: qué incluye,
          qué dicen otros huéspedes, y las reglas antes de reservar. */}
      <AmenitiesCard className="mx-1 mt-[11px]" />
      <RatingCard workspace={workspace} className="mx-1 mt-[11px]" />
      <NeedToKnowCard workspace={workspace} className="mx-1 mt-[11px]" />
      <KeepInMindCard className="mx-1 mt-[11px]" />

      <WorkspaceFooter compact className="mt-[11px] px-4" />

      <Link
        to={`/espacios/${id}/reservar`}
        className={`fixed inset-x-0 bottom-0 z-[1000] ${bgCtaGradient} py-[10px] text-center text-[18px] font-semibold leading-[22px] text-white`}
      >
        {t('detail.bookNow')} &nbsp;| {price} MXN
      </Link>
    </div>
  )
}
