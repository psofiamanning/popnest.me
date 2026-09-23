import { Link, useParams, useSearchParams } from 'react-router-dom'
import { ROOM_TYPES } from '../data/workspaces'
import WorkspaceFooter from '../components/workspace/WorkspaceFooter'
import { bgBrandGradient } from '../styles/gradients'
import { useLanguage } from '../context/LanguageContext'

const baseRowClass = 'flex h-[37px] items-center justify-between rounded-[10px] px-[23px]'

function rowColorClass(isSelected) {
  return isSelected ? 'border-[0.5px] border-pink-highlight bg-pink-highlight/40' : 'border-[0.5px] border-white/30 bg-white/10'
}

export default function MobileRoomType() {
  const { id } = useParams()
  const [params] = useSearchParams()
  const { t } = useLanguage()
  const selected = params.get('room') || 'day-pass'

  function checkoutUrl(roomId) {
    const next = new URLSearchParams(params)
    next.set('room', roomId)
    return `/espacios/${id}/reservar?${next.toString()}`
  }

  return (
    <div className={`flex min-h-[100dvh] flex-col ${bgBrandGradient} px-[8px] pt-[calc(env(safe-area-inset-top)+16px)]`}>
      <Link
        to={`/espacios/${id}/reservar?${params.toString()}`}
        className="flex items-center gap-1.5 px-2 pb-6 text-[16px] font-medium text-white"
      >
        <span className="text-[28px] leading-none">‹</span>
        {t('checkout.backToSpaceDetails')}
      </Link>

      <p className="mb-2 px-2 text-[14px] font-medium text-white">{t('roomTypePage.soloWorkspaces')}</p>
      <div className="flex flex-col gap-2">
        {ROOM_TYPES.solo.map((room) => (
          <Link
            key={room.id}
            to={checkoutUrl(room.id)}
            className={`${baseRowClass} ${rowColorClass(room.id === selected)}`}
          >
            <span className="text-[14px] font-normal text-white">{t(room.labelKey)}</span>
          </Link>
        ))}
      </div>

      <p className="mb-2 mt-6 px-2 text-[14px] font-medium text-white">{t('roomTypePage.teamRooms')}</p>
      <div className="flex flex-col gap-2">
        {ROOM_TYPES.team.map((room) => (
          <Link
            key={room.id}
            to={checkoutUrl(room.id)}
            className={`${baseRowClass} ${rowColorClass(room.id === selected)}`}
          >
            <span className="text-[16px] font-normal text-white">{t(room.labelKey)}</span>
            <span className="text-[14px] font-normal text-white/70">{t(room.capacityKey)}</span>
          </Link>
        ))}
      </div>

      <WorkspaceFooter compact className="mt-auto px-4" />
    </div>
  )
}
