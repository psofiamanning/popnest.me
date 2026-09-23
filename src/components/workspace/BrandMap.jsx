import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { WORKSPACES } from '../../data/workspaces'

export default function BrandMap({
  workspaces = WORKSPACES,
  focusId,
  highlightId,
  alwaysShowPrice = false,
  interactive = true,
  showZoomControl = interactive,
  className = 'h-full w-full',
}) {
  const mapEl = useRef(null)

  useEffect(() => {
    const map = L.map(mapEl.current, {
      scrollWheelZoom: false,
      zoomControl: false,
      dragging: interactive,
      touchZoom: interactive,
      doubleClickZoom: interactive,
      boxZoom: interactive,
      keyboard: interactive,
    })
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors',
    }).addTo(map)
    if (showZoomControl) L.control.zoom({ position: 'bottomright' }).addTo(map)

    const pinIcon = (price, zoomedIn, isHighlight) => {
      if (!zoomedIn) {
        return L.divIcon({ className: '', html: '<span class="map-dot"></span>', iconSize: [18, 18], iconAnchor: [9, 9] })
      }
      if (alwaysShowPrice) {
        // Mobile map-view pins: pill + pointer tail, bottom-anchored so the tail tip sits on the coordinate.
        const w = isHighlight ? 80 : 60
        const h = isHighlight ? 29 : 25
        const variant = isHighlight ? 'map-pin--highlight' : 'map-pin--dark'
        return L.divIcon({
          className: '',
          html: `<span class="map-pin ${variant}" style="width:${w}px;height:${h}px">$${price}<i class="map-pin__tail"></i></span>`,
          iconSize: [w, h + 7],
          iconAnchor: [w / 2, h + 7],
        })
      }
      return L.divIcon({
        className: '',
        html: `<span class="map-pin">$${price}</span>`,
        iconSize: [52, 28],
        iconAnchor: [26, 14],
      })
    }

    const markers = workspaces.map(({ id, name, lat, lng, price }) => {
      const isHighlight = id === highlightId
      const marker = L.marker([lat, lng], { icon: pinIcon(price, alwaysShowPrice, isHighlight), riseOnHover: true }).addTo(map)
      if (interactive) marker.bindTooltip(`${name} · $${price}`, { direction: 'top', offset: [0, -10] })
      return { marker, price, isHighlight }
    })

    if (focusId) {
      const focus = workspaces.find((w) => w.id === focusId)
      map.setView([focus.lat, focus.lng], 15)
    } else {
      map.fitBounds(workspaces.map(({ lat, lng }) => [lat, lng]), { padding: [60, 60], maxZoom: 13 })
    }

    const syncPins = () => {
      const zoomedIn = alwaysShowPrice || map.getZoom() >= 13
      markers.forEach(({ marker, price, isHighlight }) => marker.setIcon(pinIcon(price, zoomedIn, isHighlight)))
    }
    map.on('zoomend', syncPins)
    syncPins()

    // El contenedor puede seguir creciendo después de montar (ej. flex-1 en una
    // columna flex), así que Leaflet necesita volver a medirlo cuando cambia de tamaño.
    const resizeObserver = new ResizeObserver(() => map.invalidateSize())
    resizeObserver.observe(mapEl.current)

    return () => {
      resizeObserver.disconnect()
      map.remove()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={mapEl} className={`brand-map ${className}`} />
}
