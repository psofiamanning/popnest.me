import PromoBar from '../components/landing/PromoBar'
import HeroSection from '../components/landing/HeroSection'
import PerkBanner from '../components/landing/PerkBanner'
import WhyPopnest from '../components/landing/WhyPopnest'
import Testimonials from '../components/landing/Testimonials'
import LandingFooter from '../components/landing/LandingFooter'

export default function Home() {
  return (
    <div>
      <PromoBar />
      <HeroSection />
      <PerkBanner />
      <WhyPopnest />
      <Testimonials />
      <LandingFooter />
    </div>
  )
}
