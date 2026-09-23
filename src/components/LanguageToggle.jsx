import { useLanguage } from '../context/LanguageContext'

// Manual EN/ES switcher. Selecting a language here persists it (see
// LanguageContext) and turns off IP-based auto-detection for this browser
// going forward — a manual choice always wins over the next visit's lookup.
export default function LanguageToggle({ className = '' }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div className={`inline-flex items-center gap-0.5 rounded-full border border-current/30 p-0.5 text-[11px] font-bold ${className}`}>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        aria-label="English"
        className={`rounded-full px-2 py-0.5 transition-colors ${language === 'en' ? 'bg-current/20' : 'opacity-50'}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('es')}
        aria-pressed={language === 'es'}
        aria-label="Español"
        className={`rounded-full px-2 py-0.5 transition-colors ${language === 'es' ? 'bg-current/20' : 'opacity-50'}`}
      >
        ES
      </button>
    </div>
  )
}
