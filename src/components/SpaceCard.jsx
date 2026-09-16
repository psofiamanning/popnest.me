import { Link } from 'react-router-dom'

export default function SpaceCard({ space }) {
  return (
    <Link to={`/espacios/${space.id}`} className="group block">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100">
        <img
          src={space.images[0]}
          alt={space.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-2 flex items-start justify-between gap-2">
        <div>
          <p className="font-medium text-neutral-900">{space.name}</p>
          <p className="text-sm text-neutral-500">
            {space.neighborhood}, {space.city}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1 pt-0.5 text-sm text-neutral-900">
          <span aria-hidden>★</span>
          <span>{space.rating.toFixed(2)}</span>
        </div>
      </div>
      <p className="mt-1 text-sm text-neutral-500">Hasta {space.capacity} personas</p>
      <p className="mt-1 text-sm">
        <span className="font-semibold text-neutral-900">${space.pricePerHour.toLocaleString('es-MX')} MXN</span>
        <span className="text-neutral-500"> / hora</span>
      </p>
    </Link>
  )
}
