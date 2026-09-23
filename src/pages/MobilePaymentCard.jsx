import { useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import WorkspaceFooter from '../components/workspace/WorkspaceFooter'
import { bgBrandGradient, bgCtaGradient } from '../styles/gradients'
import { useLanguage } from '../context/LanguageContext'

const DEFAULT_CARDS = [
  { id: 'card-1', last4: '1234', name: 'Ray Evans', gradient: 'linear-gradient(135deg, #C89AB0 0%, #6E4B6E 100%)' },
  { id: 'card-2', last4: '1234', name: 'Ray Evans', gradient: 'linear-gradient(135deg, #A7A6E0 0%, #5C4A82 100%)' },
  { id: 'card-3', last4: '1234', name: 'Ray Evans', gradient: 'linear-gradient(135deg, #C9A85A 0%, #7C6328 100%)' },
]

function CardFace({ card, selected, t }) {
  return (
    <div className="relative flex h-full flex-col justify-between">
      <div className="flex items-start justify-between">
        <span className="font-serif text-[26px] italic text-white/90">VISA</span>
        {selected && (
          <span className="flex h-[32px] items-center rounded-[12px] border border-white bg-pink-highlight px-4 text-[13px] font-medium text-white">
            {t('paymentCard.selected')}
          </span>
        )}
      </div>
      <div>
        <p className="text-[20px] tracking-[0.15em] text-white/70">•••• •••• •••• {card.last4}</p>
        <p className="mt-3 text-[12px] uppercase tracking-wide text-white/50">{t('paymentCard.cardholderName')}</p>
        <p className="text-[15px] font-medium text-white">{card.name}</p>
      </div>
    </div>
  )
}

export default function MobilePaymentCard() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const { t } = useLanguage()

  const newCardName = params.get('cardName')
  const newCardLast4 = params.get('cardLast4')

  const [cards] = useState(() =>
    newCardLast4
      ? [
          {
            id: 'new-card',
            last4: newCardLast4,
            name: newCardName || 'Cardholder',
            gradient: 'linear-gradient(135deg, #C89AB0 0%, #6E4B6E 100%)',
          },
          ...DEFAULT_CARDS,
        ]
      : DEFAULT_CARDS
  )
  const [selectedId, setSelectedId] = useState(cards[0].id)
  const selectedCard = cards.find((card) => card.id === selectedId) ?? cards[0]
  const restCards = cards.filter((card) => card.id !== selectedId)

  const cleanParams = new URLSearchParams(params)
  cleanParams.delete('cardName')
  cleanParams.delete('cardLast4')

  const backUrl = `/espacios/${id}/reservar?${cleanParams.toString()}`

  function handleContinue() {
    const next = new URLSearchParams(cleanParams)
    next.set('payment', `Visa •••• ${selectedCard.last4}`)
    navigate(`/espacios/${id}/reservar?${next.toString()}`)
  }

  return (
    <div className={`flex flex-col overflow-x-hidden ${bgBrandGradient} px-[9px]`}>
      <div className="flex min-h-[100dvh] flex-col pt-[calc(env(safe-area-inset-top)+16px)]">
        <Link to={backUrl} className="flex items-center gap-1.5 px-2 text-[16px] font-medium text-white">
          <span className="text-[28px] leading-none">‹</span>
          {t('paymentCard.backToReservationDetails')}
        </Link>

        <div className="mt-10 flex items-start justify-between gap-3 px-2">
          <h1 className="max-w-[260px] text-[36px] font-medium leading-[42px] text-white">
            {t('paymentCard.chooseYourCard')}
          </h1>
          <Link
            to={`/espacios/${id}/reservar/payment/new?${cleanParams.toString()}`}
            className="mt-2 flex h-[52px] shrink-0 items-center gap-2 rounded-[24px] border-[2px] border-white px-5 text-[16px] font-medium text-white-warm"
          >
            <span className="text-[26px] leading-none">+</span>
            {t('paymentCard.newCard')}
          </Link>
        </div>

        <p className="mt-6 px-2 text-[16px] leading-[24px] text-white-warm">{t('paymentCard.pickACard')}</p>

        <div className="relative mx-2 mt-10 h-[220px] overflow-hidden rounded-[16px] p-6" style={{ background: selectedCard.gradient }}>
          <CardFace card={selectedCard} selected t={t} />
        </div>

        {restCards.length > 0 && (
          <div className="mt-8 flex -ml-[140px]">
            {restCards.map((card, i) => (
              <button
                key={card.id}
                type="button"
                onClick={() => setSelectedId(card.id)}
                style={{ background: card.gradient }}
                className={`relative flex h-[150px] w-[260px] shrink-0 flex-col justify-between rounded-[16px] p-5 text-left shadow-[0_8px_20px_rgba(0,0,0,0.3)] ${
                  i === 0 ? '' : '-ml-[90px]'
                }`}
              >
                <span className="font-serif text-[20px] italic text-white/80">VISA</span>
                <div>
                  <p className="text-[16px] tracking-[0.1em] text-white/60">•••• •••• •••• {card.last4}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wide text-white/40">{t('paymentCard.cardholderName')}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={handleContinue}
          className={`mx-2 mt-12 h-[50px] rounded-[10px] ${bgCtaGradient} text-[18px] font-bold text-white`}
        >
          {t('paymentCard.continue')}
        </button>
      </div>

      <WorkspaceFooter compact className="px-4" />
    </div>
  )
}
