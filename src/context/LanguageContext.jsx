import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'popnest_language'

// ISO 3166-1 alpha-2 codes for Spanish-speaking countries — used to map an
// IP-geolocated country to a starting language.
const SPANISH_SPEAKING_COUNTRIES = new Set([
  'ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC', 'GT', 'CU', 'BO', 'DO',
  'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'GQ', 'PR',
])

function loadSavedLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

// Calls a free IP-geolocation API to guess the visitor's country, then maps
// that to 'es' or 'en'. Falls back to 'en' on any failure/timeout — there's
// no browser-language fallback layer here by design (see DESIGN_SYSTEM.md).
//
// Uses geojs.io rather than ipapi.co: ipapi.co's free tier doesn't send
// Access-Control-Allow-Origin, so browser fetches are blocked by CORS
// outright (confirmed in testing — every request failed, always landing on
// the 'en' fallback). geojs.io sends `access-control-allow-origin: *` and is
// built specifically for this client-side use case.
async function detectLanguageFromIP() {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 4000)
  try {
    const res = await fetch('https://get.geojs.io/v1/ip/geo.json', { signal: controller.signal })
    if (!res.ok) throw new Error('IP geolocation request failed')
    const data = await res.json()
    return SPANISH_SPEAKING_COUNTRIES.has(data.country_code) ? 'es' : 'en'
  } catch {
    return 'en'
  } finally {
    clearTimeout(timeout)
  }
}

export function LanguageProvider({ children }) {
  const [savedLanguage, setSavedLanguage] = useState(loadSavedLanguage)
  const [detectedLanguage, setDetectedLanguage] = useState(null)

  useEffect(() => {
    if (savedLanguage) return // a manual choice already exists — skip IP lookup entirely
    let cancelled = false
    detectLanguageFromIP().then((lang) => {
      if (!cancelled) setDetectedLanguage(lang)
    })
    return () => {
      cancelled = true
    }
  }, [savedLanguage])

  const language = savedLanguage || detectedLanguage || 'en'

  function setLanguage(lang) {
    setSavedLanguage(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // localStorage can fail in private browsing — the choice just won't persist across visits.
    }
  }

  const t = useMemo(() => {
    const dict = translations[language]
    return (key, vars) => {
      let str = dict[key] ?? translations.en[key] ?? key
      if (vars) {
        for (const [name, value] of Object.entries(vars)) {
          str = str.replaceAll(`{{${name}}}`, value)
        }
      }
      return str
    }
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
