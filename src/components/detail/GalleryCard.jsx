import { bgBrandGradient } from '../../styles/gradients'

export default function GalleryCard({ photos, className = '' }) {
  return (
    <section className={`rounded-[10px] ${bgBrandGradient} p-6 ${className}`}>
      <div className="grid grid-cols-2 gap-[10px] sm:grid-cols-4">
        {photos.map((src, i) => (
          <img key={i} src={src} alt="" className="aspect-[177/264] w-full rounded-[8px] object-cover" />
        ))}
      </div>
    </section>
  )
}
