// Custom line icons (white) — keyed by the stable amenity id (see data/workspaces.js),
// not the display label, so the icon lookup survives translation. Anything missing
// falls back to a generic check icon.
const PATHS = {
  wifi: 'M2 8.5a14 14 0 0 1 20 0M5.5 12a9 9 0 0 1 13 0M9 15.5a4 4 0 0 1 6 0M12 19h.01',
  coffee: 'M4 8h13a3 3 0 0 1 0 6h-1M4 8v7a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-1M4 8V5h9v3',
  presentation: 'M3 5h18v11H3zM8 20h8M12 16v4',
  ac: 'M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
  quiet: 'M12 2a4 4 0 0 1 4 4v6a4 4 0 1 1-8 0V6a4 4 0 0 1 4-4Z M5 11a7 7 0 0 0 14 0M12 18v4M9 22h6',
  access: 'M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  wellness: 'M12 21s-7.5-4.6-9.5-9C1 7.4 3 3 7 3c2 0 3.8 1.2 5 3 1.2-1.8 3-3 5-3 4 0 6 4.4 4.5 9-2 4.4-9.5 9-9.5 9Z',
  water: 'M12 2s6 6.6 6 11.5A6 6 0 0 1 6 13.5C6 8.6 12 2 12 2Z',
  events: 'M8 21v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 21v-1a3 3 0 0 1 3-3M21 21v-1a3 3 0 0 0-3-3M6 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  furniture: 'M5 12V6a2 2 0 0 1 2-2h3v8M5 12h14M5 12l-1 8M19 12l1 8M9 12V9h3v3',
  printing: 'M6 9V3h12v6M6 18H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2M6 14h12v7H6z',
  kitchenette: 'M4 3h16M6 3v18M18 3v18M4 21h16M9 8h2M9 12h2',
  phoneBooths: 'M6 3h12v18H6zM10 18h4',
  lockers: 'M4 3h7v18H4zM13 3h7v18h-7zM7 8v0M16 8v0',
  mail: 'M3 6h18v13H3zM3 6l9 7 9-7',
  networking: 'M17 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM17.5 20v-1a4 4 0 0 0-2.5-3.7M14.5 4.1a3.5 3.5 0 0 1 0 6.8',
  bikeStorage: 'M6 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM9 17l3-8h2l3 8M12 9l-2-3H8',
  access247: 'M12 8v4l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z',
}

const FALLBACK = 'm4 12 5 5L20 6'

export default function AmenityIcon({ id, className = 'h-[23px] w-[23px]' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[id] || FALLBACK} />
    </svg>
  )
}
