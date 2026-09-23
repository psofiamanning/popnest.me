// Datos de ejemplo (mock) para la vista /workspace-map.

// Fotos grandes (>=768px) — únicas aptas para la foto hero de la vista de detalle (746x448).
const HERO_PHOTOS = ['space-mural-orange-table', 'space-blue-table-floral', 'space-blue-table-discs', 'space-mural-orange-table-2'].map(
  (name) => `/images/workspaces/${name}.jpg`,
)

// Todas las fotos, incluidas las más chicas (360x480 / 390x360) — sirven para la galería,
// que las muestra a menor tamaño, pero no como foto hero (se verían pixeladas).
const WORKSPACE_PHOTOS = [...HERO_PHOTOS, '/images/workspaces/space-corridor-lockers.jpg', '/images/workspaces/space-corridor-blue.jpg']

export const STRIP_PHOTOS = [
  { src: '/images/strip/strip-blue-discs-table.jpg', position: '50% 40%' },
  { src: '/images/strip/strip-blue-oval-table.jpg', position: '50% 45%' },
  { src: '/images/strip/strip-mural-orange.jpg', position: '50% 50%' },
  { src: '/images/strip/strip-floral-mural.jpg', position: '50% 45%' },
]

const REVIEWS = [
  { name: 'Jackson Reed', stars: 4, bodyKey: 'review.jackson' },
  { name: 'Avery Morgan', stars: 3, bodyKey: 'review.avery' },
]

export const WORKSPACES = [
  { id: 'estudio-popnest-coyoacan', lat: 19.3467, lng: -99.1617, name: 'Estudio Popnest Coyoacán', rating: 92, kms: '6.1', area: 'Coyoacán', price: 300, near: 'Centro de Coyoacán', minutes: 5, tagKey: 'tag.elegant' },
  { id: 'coworking-condesa', lat: 19.4066, lng: -99.1717, name: 'Coworking Condesa', rating: 92, kms: '6.1', area: 'Hipódromo Condesa', price: 300, near: 'Hipódromo Condesa', minutes: 4, tagKey: 'tag.modern' },
  { id: 'loom-house-roma-norte', lat: 19.4194, lng: -99.162, name: 'Loom House Roma Norte', rating: 94, kms: '3.2', area: 'Roma Norte', price: 320, near: 'Fuente de Cibeles', minutes: 6, tagKey: 'tag.bright' },
  { id: 'jungle-desk-polanco', lat: 19.4335, lng: -99.195, name: 'Jungle Desk Polanco', rating: 95, kms: '5.8', area: 'Polanco', price: 340, near: 'Antara Fashion Hall', minutes: 4, tagKey: 'tag.creative' },
  { id: 'casa-aurea-juarez', lat: 19.4255, lng: -99.1615, name: 'Casa Áurea Juárez', rating: 93, kms: '2.9', area: 'Juárez', price: 310, near: 'Paseo de la Reforma', minutes: 3, tagKey: 'tag.cozy' },
  { id: 'terra-loft-condesa', lat: 19.413, lng: -99.1735, name: 'Terra Loft Condesa', rating: 96, kms: '4.5', area: 'Condesa', price: 330, near: 'Parque México', minutes: 5, tagKey: 'tag.elegant' },
  { id: 'nomad-hub-santa-fe', lat: 19.3596, lng: -99.2596, name: 'Nomad Hub Santa Fe', rating: 91, kms: '12', area: 'Santa Fe', price: 350, near: 'Parque La Mexicana', minutes: 4, tagKey: 'tag.corporate' },
  { id: 'atelier-cibeles', lat: 19.4215, lng: -99.163, name: 'Atelier Cibeles', rating: 94, kms: '3.6', area: 'Roma/Condesa border', price: 325, near: 'Glorieta Cibeles', minutes: 2, tagKey: 'tag.artsy' },
  { id: 'distrito-zen-san-angel', lat: 19.3467, lng: -99.19, name: 'Distrito Zen San Ángel', rating: 92, kms: '8.5', area: 'San Ángel', price: 300, near: 'Plaza San Jacinto', minutes: 5, tagKey: 'tag.quiet' },
  { id: 'skyline-workspaces-reforma', lat: 19.429, lng: -99.169, name: 'Skyline Workspaces Reforma', rating: 97, kms: '1.5', area: 'Paseo de la Reforma', price: 360, near: 'Ángel de la Independencia', minutes: 2, tagKey: 'tag.premium' },
].map((w, i) => ({
  ...w,
  photo: HERO_PHOTOS[i % HERO_PHOTOS.length],
  gallery: [0, 1, 2, 3].map((j) => WORKSPACE_PHOTOS[(i + j) % WORKSPACE_PHOTOS.length]),
  bookersLikedPct: 90 + (i % 8),
  ratingsCount: 2 + (i % 5),
  reviews: REVIEWS,
  address: `Londres 105 col. Del Carmen, ${w.area}, CDMX`,
}))

export function getWorkspaceById(id) {
  return WORKSPACES.find((w) => w.id === id) || null
}

export const ROOM_TYPES = {
  solo: [{ id: 'day-pass', labelKey: 'roomType.dayPass' }],
  team: [
    { id: 'small', labelKey: 'roomType.small', capacityKey: 'roomType.capacity.small' },
    { id: 'medium', labelKey: 'roomType.medium', capacityKey: 'roomType.capacity.medium' },
    { id: 'large', labelKey: 'roomType.large', capacityKey: 'roomType.capacity.large' },
  ],
}

export function getRoomTypeById(id) {
  return [...ROOM_TYPES.solo, ...ROOM_TYPES.team].find((r) => r.id === id) || ROOM_TYPES.solo[0]
}

export const AMENITIES = {
  columns: [
    ['wifi', 'coffee', 'presentation', 'ac', 'quiet', 'access', 'wellness', 'water', 'events', 'furniture'],
    ['printing', 'kitchenette', 'phoneBooths', 'lockers', 'mail', 'networking', 'bikeStorage'],
  ],
  addOns: ['access247', 'mail', 'conferenceRooms'],
}

export const NEED_TO_KNOW = [
  'needToKnow.hours',
  'needToKnow.id',
  'needToKnow.wifi',
  'needToKnow.refreshments',
  'needToKnow.commonAreas',
  'needToKnow.lockers',
  'needToKnow.quietZones',
  'needToKnow.age',
]

export const KEEP_IN_MIND = [
  'keepInMind.sharedOnly',
  'keepInMind.availability',
  'keepInMind.outsideFood',
  'keepInMind.accessibility',
  'keepInMind.groups',
]

