import { MENU_GRADIENT } from '../../styles/gradients'
import { useLanguage } from '../../context/LanguageContext'
import LanguageToggle from '../LanguageToggle'

const MAIN_LINK_KEYS = ['menu.profile', 'menu.myBookings', 'menu.savedSpaces', 'menu.popularCoworkings']
const BOTTOM_LINK_KEYS = ['menu.helpFaq', 'menu.termsPrivacy']

export default function MobileMenu({ open, onClose }) {
  const { t } = useLanguage()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[2000]">
      <button type="button" aria-label="Close menu" className="absolute inset-0" onClick={onClose} />

      <div
        className="relative flex h-full w-[274px] flex-col px-[19px] pt-[calc(env(safe-area-inset-top)+9px)] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        style={{ background: MENU_GRADIENT }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Back"
          className="self-start text-[32px] leading-[28px] text-white"
        >
          ‹
        </button>

        <p className="mt-6 text-[20px] font-bold leading-[28px] text-white">{t('menu.title')}</p>

        <nav className="mt-9 flex flex-col text-[15px] font-medium leading-[40px] text-white">
          {MAIN_LINK_KEYS.map((key) => (
            <p key={key}>{t(key)}</p>
          ))}
          <p className="mt-10">{t('menu.paymentsBilling')}</p>
          <div className="mt-10 flex items-center justify-between">
            <span>🌍 {t('menu.language')}</span>
            <LanguageToggle />
          </div>
          <p>💱 {t('menu.currency')}</p>
        </nav>

        <div className="mt-auto flex flex-col pb-8 text-[12px] font-semibold leading-[32px] text-white">
          {BOTTOM_LINK_KEYS.map((key) => (
            <p key={key}>{t(key)}</p>
          ))}
          <p>{t('menu.logout')}</p>
        </div>
      </div>
    </div>
  )
}
