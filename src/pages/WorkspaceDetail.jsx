import { Link, useParams } from 'react-router-dom'
import { getWorkspaceById } from '../data/workspaces'
import RatingCard from '../components/detail/RatingCard'
import WhyCard from '../components/detail/WhyCard'
import ReservationCard from '../components/detail/ReservationCard'
import GalleryCard from '../components/detail/GalleryCard'
import AmenitiesCard from '../components/detail/AmenitiesCard'
import NeedToKnowCard from '../components/detail/NeedToKnowCard'
import KeepInMindCard from '../components/detail/KeepInMindCard'
import BrandMap from '../components/workspace/BrandMap'
import WorkspaceFooter from '../components/workspace/WorkspaceFooter'
import DetailHeader from '../components/detail/DetailHeader'
import MobileWorkspaceDetail from './MobileWorkspaceDetail'
import useMediaQuery from '../hooks/useMediaQuery'
import NotFound from './NotFound'
import { useLanguage } from '../context/LanguageContext'

export default function WorkspaceDetail() {
  const { id } = useParams()
  const workspace = getWorkspaceById(id)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { t } = useLanguage()

  if (!workspace) return <NotFound />
  if (!isDesktop) return <MobileWorkspaceDetail workspace={workspace} />

  return (
    <div className="min-h-screen bg-white-warm">
      <DetailHeader />
      <div className="mx-auto max-w-[1130px] px-4 py-6 sm:px-6">
        <Link to="/workspace-map" className="text-sm font-medium text-brand-indigo hover:underline">
          {t('common.backToSearch')}
        </Link>

        <h1 className="mt-2 text-2xl font-bold text-brand-navy">{workspace.name}</h1>
        <p className="mt-1 text-sm text-neutral-500">
          {workspace.area}, {t('common.mexicoCity')} ·{' '}
          {t('common.minutesAwayFrom', { minutes: workspace.minutes, place: workspace.near })}
        </p>

        {/* Grid with explicit rows so the repeated "Your Reservation" card lines up with its
            matching left-column section, instead of one card staying sticky the whole page. */}
        <div className="mt-6 grid grid-cols-1 items-start gap-[10px] lg:grid-cols-[746fr_373fr]">
          <img
            src={workspace.photo}
            alt={workspace.name}
            className="h-[300px] w-full rounded-[15px] object-cover sm:h-[448px] lg:col-start-1 lg:row-start-1"
          />
          <RatingCard workspace={workspace} className="lg:col-start-2 lg:row-start-1" />

          <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:col-start-1 lg:row-start-2">
            <WhyCard />
            <div className="h-[220px] overflow-hidden rounded-[10px] sm:h-[254px]">
              <BrandMap workspaces={[workspace]} focusId={workspace.id} interactive={false} showZoomControl={false} />
            </div>
          </div>
          <div className="lg:col-start-2 lg:row-start-2 lg:row-span-2">
            <ReservationCard workspace={workspace} />
          </div>

          <GalleryCard photos={workspace.gallery} className="lg:col-start-1 lg:row-start-3" />

          <AmenitiesCard className="lg:col-start-1 lg:row-start-4" />
          <div className="lg:col-start-2 lg:row-start-4">
            <ReservationCard workspace={workspace} />
          </div>

          <NeedToKnowCard workspace={workspace} className="lg:col-start-1 lg:row-start-5" />
          <div className="lg:col-start-2 lg:row-start-5 lg:row-span-2 lg:pt-[359px]">
            <ReservationCard workspace={workspace} />
          </div>

          <KeepInMindCard className="lg:col-start-1 lg:row-start-6" />
        </div>
      </div>

      <WorkspaceFooter className="mt-12 px-4 sm:px-6" contentClassName="mx-auto max-w-[1130px]" />
    </div>
  )
}
