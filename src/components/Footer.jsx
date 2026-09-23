import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="mt-16 border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-500 sm:px-6">
        <p>
          <strong className="text-neutral-700">popnest.me</strong> {t('footer.disclaimer')}
        </p>
      </div>
    </footer>
  )
}
