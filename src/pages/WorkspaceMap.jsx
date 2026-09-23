import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import WorkspaceHeader, { PAGE_GRADIENT } from '../components/workspace/WorkspaceHeader'
import WorkspaceCard from '../components/workspace/WorkspaceCard'
import MapPanel from '../components/workspace/MapPanel'
import MobileMapView from '../components/workspace/MobileMapView'
import WorkspaceFooter from '../components/workspace/WorkspaceFooter'
import useMediaQuery from '../hooks/useMediaQuery'
import { STRIP_PHOTOS, WORKSPACES } from '../data/workspaces'
import { useLanguage } from '../context/LanguageContext'

export default function WorkspaceMap() {
  const { t } = useLanguage()
  const [params] = useSearchParams()
  const [filters, setFilters] = useState({
    where: params.get('where') || 'Mexico City',
    when: params.get('when') || 'Today',
    filter: params.get('filter') || 'Day Pass',
  })
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  if (!isDesktop) return <MobileMapView filters={filters} />

  return (
    <div className={`min-h-screen ${PAGE_GRADIENT}`}>
      <WorkspaceHeader filters={filters} onChange={setFilters} />
      <div className="grid gap-[11px] px-[10px] pb-6 lg:grid-cols-[870fr_604fr] lg:pr-[17px]">
        <div className="flex min-w-0 flex-col">
          <div className="mt-[40px] grid grid-cols-2 gap-[10px] sm:grid-cols-4">
            {STRIP_PHOTOS.map(({ src, position }) => (
              <img
                key={src}
                src={src}
                alt=""
                style={{ objectPosition: position }}
                className="aspect-[210/144] w-full rounded-[15px] object-cover"
              />
            ))}
          </div>

          <section className="relative mt-[12px] h-[186px] overflow-hidden rounded-[15px] bg-brand-indigo/90 shadow-[0_4px_4px_rgba(0,0,0,0.25),0_4px_4px_rgba(0,0,0,0.25)]">
            <h2 className="flex h-full items-center justify-center px-4 text-center text-[28px] font-semibold leading-[1.2] text-white">
              {t('map.unlockOffer')}
            </h2>
          </section>

          <div className="mt-[10px] flex flex-col gap-[10px]">
            {WORKSPACES.map((workspace) => (
              <WorkspaceCard key={workspace.id} workspace={workspace} />
            ))}
          </div>
        </div>

        <MapPanel />
      </div>
      <WorkspaceFooter />
    </div>
  )
}
