import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import Services from '@/components/sections/Services'
import ComprehensiveServices from '@/components/sections/ComprehensiveServices'
import VisitSaudi from '@/components/sections/VisitSaudi'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Services Overview */}
      <Services />
      
      {/* Comprehensive Services */}
      <ComprehensiveServices />
      
      {/* Visit Saudi Section */}
      <VisitSaudi />
    </div>
  )
}
