import { createContext, useContext, useMemo, useState } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'popnest_language'

function loadSavedLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export function LanguageProvider({ children }) {
  const [savedLanguage, setSavedLanguage] = useState(loadSavedLanguage)

  const language = savedLanguage || 'en'

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
