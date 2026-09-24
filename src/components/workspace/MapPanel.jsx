import BrandMap from './BrandMap'

export default function MapPanel() {
  return (
    <aside className="h-[420px] overflow-hidden rounded-[10px] bg-map-surface lg:sticky lg:top-[89px] lg:h-[736px] lg:max-h-[calc(100vh-103px)] lg:self-start">
      <BrandMap />
    </aside>
  )
}
