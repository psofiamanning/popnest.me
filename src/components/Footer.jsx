import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="mt-16 bg-brand-navy">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/80 sm:px-6">
        <p>
          <strong className="text-white">popnest.me</strong> {t('footer.disclaimer')}
        </p>
      </div>
    </footer>
  )
}
