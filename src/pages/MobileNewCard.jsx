import { useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import WorkspaceFooter from '../components/workspace/WorkspaceFooter'
import { bgBrandGradient, bgCtaGradient } from '../styles/gradients'
import { useLanguage } from '../context/LanguageContext'

const fieldClass =
  'flex h-[63px] flex-col justify-center rounded-[20px] border border-white-warm px-4'

export default function MobileNewCard() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const { t } = useLanguage()

  const [name, setName] = useState('Juan Pablo Rodriguez')
  const [cardNumber, setCardNumber] = useState('1234 5678 9101 1121')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [defaultMethod, setDefaultMethod] = useState(false)
  const [email, setEmail] = useState('')

  const backUrl = `/espacios/${id}/reservar/payment?${params.toString()}`

  function handleSave() {
    const digits = cardNumber.replace(/\D/g, '')
    const last4 = digits.slice(-4) || '1121'
    const next = new URLSearchParams(params)
    next.set('cardName', name || 'Cardholder')
    next.set('cardLast4', last4)
    navigate(`/espacios/${id}/reservar/payment?${next.toString()}`)
  }

  return (
    <div className={`flex flex-col ${bgBrandGradient} px-[9px]`}>
      <div className="flex min-h-[100dvh] flex-col pt-[calc(env(safe-area-inset-top)+16px)]">
        <Link to={backUrl} className="flex items-center gap-1 px-2 text-[11px] font-medium text-white">
          <span className="text-[32px] leading-[28px]">‹</span>
          {t('newCard.back')}
        </Link>

        <h1 className="mt-8 max-w-[227px] px-2 text-[30px] font-medium leading-[35px] text-white">
          {t('newCard.title')}
        </h1>
        <p className="mt-3 max-w-[227px] px-2 text-[14px] font-medium leading-[20px] text-white-warm">
          {t('newCard.subtitle')}
        </p>

        <div className="mt-8 flex flex-col gap-3 px-2">
          <div className={fieldClass}>
            <span className="text-[14px] font-medium text-label">{t('newCard.nameOnCard')}</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent text-[14px] font-semibold text-white outline-none"
            />
          </div>

          <div className={`${fieldClass} flex-row items-center justify-between`}>
            <div className="flex flex-1 flex-col justify-center">
              <span className="text-[14px] font-medium text-label">{t('newCard.cardNumber')}</span>
              <input
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="bg-transparent text-[14px] font-semibold text-white outline-none"
              />
            </div>
            <span className="ml-3 flex h-[24px] w-[38px] shrink-0 items-center justify-center rounded-[4px] bg-white text-[11px] font-bold italic text-[#1A1F71]">
              VISA
            </span>
          </div>

          <div className="flex gap-3">
            <div className={`${fieldClass} min-w-0 flex-1`}>
              <span className="text-[14px] font-medium text-label">{t('newCard.expiredDate')}</span>
              <input
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="00 / 00"
                className="w-full min-w-0 bg-transparent text-[14px] font-semibold text-white outline-none placeholder:font-medium placeholder:text-placeholder"
              />
            </div>
            <div className={`${fieldClass} min-w-0 flex-1`}>
              <span className="text-[14px] font-medium text-label">{t('newCard.securityCode')}</span>
              <input
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="CVC"
                className="w-full min-w-0 bg-transparent text-[14px] font-semibold text-white outline-none placeholder:font-medium placeholder:text-placeholder"
              />
            </div>
          </div>

          <label className="flex items-center gap-2 px-1 py-1 text-[14px] font-medium text-white">
            <input
              type="checkbox"
              checked={defaultMethod}
              onChange={(e) => setDefaultMethod(e.target.checked)}
              className="h-4 w-4 rounded-[4px] border border-white/60 accent-pink-highlight"
            />
            {t('newCard.setAsDefault')}
          </label>

          <div className="border-t border-white/20" />

          <div className={`${fieldClass} h-auto py-2.5`}>
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-medium text-label">{t('newCard.billingContact')}</span>
              <span className="text-[12px] font-medium text-label">{t('newCard.optional')}</span>
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@email.com"
              type="email"
              className="bg-transparent text-[14px] font-semibold text-white outline-none placeholder:font-medium placeholder:text-placeholder"
            />
          </div>

          <button
            type="button"
            onClick={handleSave}
            className={`mt-4 h-[43px] rounded-[10px] ${bgCtaGradient} text-[16px] font-bold text-white`}
          >
            {t('newCard.saveCard')}
          </button>
        </div>
      </div>

      <WorkspaceFooter compact className="px-4" />
    </div>
  )
}
