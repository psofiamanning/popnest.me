export default function MobilePhotoCarousel({ photos }) {
  return (
    <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto px-2 pt-2 [scrollbar-width:none]">
      {photos.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="aspect-[310/284] w-[79%] max-w-[310px] shrink-0 snap-start rounded-[16px] object-cover"
        />
      ))}
    </div>
  )
}
