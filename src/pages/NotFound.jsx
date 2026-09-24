import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="text-lg font-semibold text-neutral-900">{t('notFound.message')}</p>
      <Link to="/" className="mt-3 inline-block text-brand-indigo underline">
        {t('notFound.backHome')}
      </Link>
    </div>
  )
}
