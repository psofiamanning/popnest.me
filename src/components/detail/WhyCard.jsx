import { bgBrandGradient } from '../../styles/gradients'
import { useLanguage } from '../../context/LanguageContext'

export default function WhyCard() {
  const { t } = useLanguage()

  return (
    <section className={`flex h-full flex-col justify-center gap-5 rounded-[10px] ${bgBrandGradient} p-6 text-white`}>
      <div>
        <h2 className="text-[15px] font-semibold leading-[18px]">{t('detail.whyWeLikeIt')}</h2>
        <p className="mt-2 text-[13px] leading-[1.6] text-white/90">{t('detail.whyWeLikeItBody')}</p>
      </div>
      <div>
        <h2 className="text-[15px] font-semibold leading-[18px]">{t('detail.whyBookWithUs')}</h2>
        <p className="mt-2 text-[13px] leading-[1.6] text-white/90">{t('detail.whyBookWithUsBody')}</p>
      </div>
    </section>
  )
}
