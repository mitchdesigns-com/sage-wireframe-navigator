import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import Services from '@/components/sections/Services'
import ComprehensiveServices from '@/components/sections/ComprehensiveServices'
import VisitSaudi from '@/components/sections/VisitSaudi'
import Awards from '@/components/sections/Awards'
import Resources from '@/components/sections/Resources'
import ClientExperiences from '@/components/sections/ClientExperiences'
import NewsEvents from '@/components/sections/NewsEvents'
import JoinNetwork from '@/components/sections/JoinNetwork'
import StartJourney from '@/components/sections/StartJourney'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <Services />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Visit Saudi Section */}
      <VisitSaudi />

      {/* Awards & Recognition */}
      <Awards />

      {/* Client Experiences */}
      <ClientExperiences />

      {/* Comprehensive Services */}
      <ComprehensiveServices />

      {/* Resources Section */}
      <Resources />

      {/* Join Our Network */}
      <JoinNetwork />

      {/* News & Events */}
      <NewsEvents />

      {/* Start Your Journey CTA */}
      <StartJourney />
    </div>
  )
}
