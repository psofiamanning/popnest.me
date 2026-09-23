import { useLanguage } from '../../context/LanguageContext'

const TESTIMONIALS = [
  {
    photo: '/images/testimonial-man-suit.png',
    top: 'bottom-3',
    quoteKey: 'testimonials.quote4',
    objectPosition: 'object-top sm:object-center',
  },
  { photo: '/images/testimonial-woman-laptop.png', top: 'bottom-3', quoteKey: 'testimonials.quote2' },
  { photo: '/images/testimonial-woman-blazer.png', top: 'top-[60%]', quoteKey: 'testimonials.quote3' },
  { photo: '/images/testimonial-omar-haddad.png', top: 'top-[58%]', quoteKey: 'testimonials.quote1' },
]

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="grid grid-cols-1 sm:grid-cols-4">
      {TESTIMONIALS.map((item, i) => (
        <div key={i} className="relative aspect-[4/3] sm:aspect-auto sm:h-[420px]">
          <img
            src={item.photo}
            alt=""
            className={`h-full w-full object-cover ${item.objectPosition || 'object-center'}`}
          />
          <div className="absolute inset-0 bg-overlay/60" />
          <div className={`absolute inset-x-3 ${item.top} rounded-lg bg-pink-highlight/30 p-3 text-xs leading-snug text-white`}>
            {t(item.quoteKey)}
          </div>
        </div>
      ))}
    </section>
  )
}
