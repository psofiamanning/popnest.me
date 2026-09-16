// Datos de ejemplo (mock) — este proyecto es un demo de portafolio, no un
// producto real. No hay backend: todo vive en el cliente.

export const CATEGORIES = [
  'Salón de eventos',
  'Oficina privada',
  'Sala de juntas',
  'Estudio creativo',
  'Rooftop',
]

export const CITIES = ['Ciudad de México', 'Guadalajara', 'Monterrey', 'Querétaro']

function img(seed, w = 900, h = 600) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`
}

export const SPACES = [
  {
    id: 'lumen-loft',
    name: 'Lumen Loft',
    category: 'Salón de eventos',
    city: 'Ciudad de México',
    neighborhood: 'Roma Norte',
    capacity: 80,
    pricePerHour: 1200,
    rating: 4.94,
    reviewsCount: 132,
    images: [img('lumen-1'), img('lumen-2'), img('lumen-3'), img('lumen-4')],
    amenities: ['Sistema de sonido', 'Proyector 4K', 'Cocina de servicio', 'Terraza', 'WiFi de alta velocidad', 'Estacionamiento'],
    description:
      'Loft industrial con luz natural y techos de doble altura, ideal para lanzamientos de producto, pop-ups y celebraciones privadas. Incluye montaje básico de mobiliario.',
    host: { name: 'Camila R.', memberSince: 2021, avatarSeed: 'camila' },
  },
  {
    id: 'nube-rooftop',
    name: 'Nube Rooftop',
    category: 'Rooftop',
    city: 'Ciudad de México',
    neighborhood: 'Condesa',
    capacity: 60,
    pricePerHour: 1500,
    rating: 4.88,
    reviewsCount: 97,
    images: [img('nube-1'), img('nube-2'), img('nube-3')],
    amenities: ['Vista panorámica', 'Barra', 'Calentadores exteriores', 'Sistema de sonido', 'Baños privados'],
    description:
      'Rooftop con vista a la ciudad, perfecto para after-offices, brindis de fin de año y sesiones de fotografía al atardecer.',
    host: { name: 'Diego M.', memberSince: 2020, avatarSeed: 'diego' },
  },
  {
    id: 'sala-alba',
    name: 'Sala Alba',
    category: 'Sala de juntas',
    city: 'Ciudad de México',
    neighborhood: 'Polanco',
    capacity: 10,
    pricePerHour: 350,
    rating: 4.97,
    reviewsCount: 210,
    images: [img('alba-1'), img('alba-2')],
    amenities: ['Pantalla para videollamadas', 'Pizarrón', 'Café y agua', 'WiFi de alta velocidad'],
    description:
      'Sala ejecutiva con mesa para 10 personas, ideal para consejos, entrevistas y sesiones de trabajo que requieren privacidad.',
    host: { name: 'Estudio Popnest', memberSince: 2019, avatarSeed: 'popnest' },
  },
  {
    id: 'estudio-cobalto',
    name: 'Estudio Cobalto',
    category: 'Estudio creativo',
    city: 'Guadalajara',
    neighborhood: 'Americana',
    capacity: 25,
    pricePerHour: 600,
    rating: 4.9,
    reviewsCount: 64,
    images: [img('cobalto-1'), img('cobalto-2'), img('cobalto-3')],
    amenities: ['Iluminación de estudio', 'Fondo infinito', 'Espejo de cuerpo completo', 'Vestidor'],
    description:
      'Estudio fotográfico y de video con fondo infinito e iluminación profesional, usado por creadores de contenido y marcas.',
    host: { name: 'Renata V.', memberSince: 2022, avatarSeed: 'renata' },
  },
  {
    id: 'oficina-once',
    name: 'Oficina Privada 11',
    category: 'Oficina privada',
    city: 'Guadalajara',
    neighborhood: 'Providencia',
    capacity: 6,
    pricePerHour: 250,
    rating: 4.85,
    reviewsCount: 41,
    images: [img('oficina-1'), img('oficina-2')],
    amenities: ['Escritorios ajustables', 'Impresora', 'Café y agua', 'WiFi de alta velocidad'],
    description:
      'Oficina cerrada y silenciosa para equipos pequeños, freelancers o entrevistas de trabajo.',
    host: { name: 'Jorge L.', memberSince: 2023, avatarSeed: 'jorge' },
  },
  {
    id: 'jardin-marfil',
    name: 'Jardín Marfil',
    category: 'Salón de eventos',
    city: 'Monterrey',
    neighborhood: 'San Pedro',
    capacity: 150,
    pricePerHour: 2200,
    rating: 4.92,
    reviewsCount: 88,
    images: [img('marfil-1'), img('marfil-2'), img('marfil-3')],
    amenities: ['Jardín exterior', 'Carpa disponible', 'Cocina de servicio', 'Estacionamiento', 'Sistema de sonido'],
    description:
      'Jardín privado con áreas techadas y al aire libre, usado para bodas, posadas corporativas y eventos grandes.',
    host: { name: 'Fernanda G.', memberSince: 2018, avatarSeed: 'fernanda' },
  },
  {
    id: 'sala-vector',
    name: 'Sala Vector',
    category: 'Sala de juntas',
    city: 'Monterrey',
    neighborhood: 'Valle Oriente',
    capacity: 14,
    pricePerHour: 400,
    rating: 4.8,
    reviewsCount: 53,
    images: [img('vector-1'), img('vector-2')],
    amenities: ['Pantalla para videollamadas', 'Pizarrón digital', 'Café y agua', 'Estacionamiento'],
    description:
      'Sala de juntas moderna con mesa modular, útil tanto para juntas directivas como para talleres cortos.',
    host: { name: 'Estudio Popnest', memberSince: 2019, avatarSeed: 'popnest' },
  },
  {
    id: 'estudio-arena',
    name: 'Estudio Arena',
    category: 'Estudio creativo',
    city: 'Querétaro',
    neighborhood: 'Centro',
    capacity: 20,
    pricePerHour: 500,
    rating: 4.87,
    reviewsCount: 36,
    images: [img('arena-1'), img('arena-2'), img('arena-3')],
    amenities: ['Iluminación de estudio', 'Piso de madera', 'Espejo de cuerpo completo', 'WiFi de alta velocidad'],
    description:
      'Espacio versátil para clases de baile, talleres creativos y grabación de contenido con luz natural.',
    host: { name: 'Paola S.', memberSince: 2022, avatarSeed: 'paola' },
  },
  {
    id: 'terraza-cielo',
    name: 'Terraza Cielo',
    category: 'Rooftop',
    city: 'Querétaro',
    neighborhood: 'Juriquilla',
    capacity: 45,
    pricePerHour: 900,
    rating: 4.91,
    reviewsCount: 29,
    images: [img('cielo-1'), img('cielo-2')],
    amenities: ['Vista panorámica', 'Barra', 'Sistema de sonido', 'Baños privados', 'Estacionamiento'],
    description:
      'Terraza con vista al valle, ideal para celebraciones al aire libre y eventos corporativos pequeños.',
    host: { name: 'Héctor N.', memberSince: 2021, avatarSeed: 'hector' },
  },
]

export function getSpaceById(id) {
  return SPACES.find((s) => s.id === id) || null
}
