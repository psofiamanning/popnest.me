import BrandMap from './BrandMap'

export default function MapPanel() {
  return (
    <aside className="h-[420px] overflow-hidden rounded-[10px] bg-map-surface lg:sticky lg:top-[69px] lg:h-[736px] lg:max-h-[calc(100vh-83px)] lg:self-start">
      <BrandMap />
    </aside>
  )
}
