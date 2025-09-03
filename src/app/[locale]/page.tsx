import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import Services from '@/components/sections/Services'
import ComprehensiveServices from '@/components/sections/ComprehensiveServices'
import ContentWithImage from '@/components/sections/ContentWithImage'
import Awards from '@/components/sections/Awards'
import Resources from '@/components/sections/Resources'
import ClientExperiences from '@/components/sections/ClientExperiences'
import NewsEvents from '@/components/sections/NewsEvents'
import JoinNetwork from '@/components/sections/JoinNetwork'
import StartJourney from '@/components/sections/StartJourney'
import SageIcon from '../../components/icons/SageIcon'
import DirectionScrollSection from '../../components/ui/DirectionScrollSection'

export default function HomePage() {
  const benefits = [
    {
      icon: <SageIcon />,
      text: 'World-class hospitals and healthcare professionals await you.',
    },
    {
      icon: <SageIcon />,
      text: 'Easy access to major airports and transport links.',
    },
    {
      icon: <SageIcon />,
      text: "Immerse yourself in Saudi Arabia's vibrant culture.",
    },
  ]
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <Services />

      <div className="overflow-hidden">
        <ContentWithImage
          title={'Discover the Excellence of Saudi Healthcare'}
          description={
            'Saudi Arabia boasts state-of-the-art medical facilities, ensuring top-tier care for all patients. Experience seamless travel accessibility and rich cultural experiences that enhance your healthcare journey.'
          }
          benefits={benefits}
          image={{
            alt: 'Saudi Healthcare Image',
            src: 'images/ContentWithImage/01.png',
          }}
          cta={{ label: 'Learn More', href: '/visit-saudi' }}
          color="spring"
        />
        <DirectionScrollSection />
        <ComprehensiveServices />
      </div>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Awards & Recognition */}
      <Awards />

      {/* Resources Section */}
      <Resources />

      {/* Client Experiences */}
      <ClientExperiences />

      {/* Join Our Network */}
      <JoinNetwork />

      {/* News & Events */}
      <NewsEvents />

      {/* Start Your Journey CTA */}
      <StartJourney />
    </div>
  )
}
