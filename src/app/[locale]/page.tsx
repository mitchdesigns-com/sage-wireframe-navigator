// import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import Services from '@/components/sections/Services'
import ComprehensiveServices from '@/components/sections/ComprehensiveServices'
// import ContentWithImage from '@/components/sections/ContentWithImage'
import Awards from '@/components/sections/Awards'
import Resources from '@/components/sections/Resources'
import ClientExperiences from '@/components/sections/ClientExperiences'
// import NewsEvents from '@/components/sections/NewsEvents'
// import JoinNetwork from '@/components/sections/JoinNetwork'
// import StartJourney from '@/components/sections/StartJourney'
// import SageIcon from '../../components/icons/SageIcon'
import DirectionScrollSection from '../../components/ui/DirectionScrollSection'
import HeroWithVideo from '../../components/sections/HeroWithVideo'
import FeatureSection from '../../components/sections/FeatureSection'
import VectorIcon from '../../components/svg/VectorIcon'
import GetInTouch from '../../components/sections/GetInTouch'
import BlogSection from '../../components/sections/BlogSection'
import CentersSection from '../../components/sections/CentersSection'

export default function HomePage() {
  // const benefits = [
  //   {
  //     icon: <SageIcon />,
  //     text: 'World-class hospitals and healthcare professionals await you.',
  //   },
  //   {
  //     icon: <SageIcon />,
  //     text: 'Easy access to major airports and transport links.',
  //   },
  //   {
  //     icon: <SageIcon />,
  //     text: "Immerse yourself in Saudi Arabia's vibrant culture.",
  //   },
  // ]
  const featureSections = [
    {
      tagline: 'Visit Saudi',
      title: 'Discover the Excellence of Saudi Healthcare',
      description:
        'Saudi Arabia boasts state-of-the-art medical facilities, ensuring top-tier care for all patients. Experience seamless travel accessibility and rich cultural experiences that enhance your healthcare journey.',
      features: [
        {
          icon: <VectorIcon color="#025850" />,
          text: 'World-class hospitals and healthcare professionals await you.',
        },
        {
          icon: <VectorIcon color="#025850" />,
          text: 'Easy access to major airports and transport links.',
        },
        {
          icon: <VectorIcon color="#025850" />,
          text: "Immerse yourself in Saudi Arabia's vibrant culture.",
        },
      ],
      image: '/images/generalImages/sageHome.png',
      backgroundColor: '#DAF7AF',
      textColor: '#1E1E1E',
      reverse: false,
      ctaText: 'Learn More ',
      href: '/visit-saudi',
    },
  ]
  const blogs = [
    {
      slug: '1',
      title: 'Sage Partners with Local Clinics',
      category: 'news',
      image: '/images/generalImages/blog1.png',
      author: 'John Doe',
      date: '15 Mar 2023',
      readTime: '3 min read',
    },
    {
      slug: '2',
      title: 'Sage Wins Healthcare Innovation Global Award',
      category: 'news',
      image: '/images/generalImages/blog2.png',
      author: 'John Doe',
      date: '15 Mar 2023',
      readTime: '3 min read',
    },
    {
      slug: '3',
      title: 'Sage Attends Global Health Conference at UAE',
      category: 'news',
      image: '/images/generalImages/blog3.png',
      author: 'John Doe',
      date: '15 Mar 2023',
      readTime: '3 min read',
    },
  ]
  const centersSectionMock = [
    {
      description:
        'Become part of our mission to enhance healthcare and support communities through collaboration and innovation.',
      title: 'Join Our Impact Network',
      list: [
        {
          image: '/images/generalImages/center1.png',
        },
        {
          image: '/images/generalImages/center2.png',
        },
        {
          image: '/images/generalImages/center3.png',
        },
        {
          image: '/images/generalImages/center4.png',
        },
        {
          image: '/images/generalImages/center5.png',
        },
        {
          image: '/images/generalImages/center6.png',
        },
      ],
      ctaText: 'Join',
      href: '/our-network',
      backgroundColor: '#F0F8F8',
      textColor: '#1E1E1E',
      reverse: false,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroWithVideo
        title="Your Trusted Gateway to Saudi’s Medical Care"
        description="Experience the perfect blend of healthcare expertise, cultural hospitality, and personalized service with Sage. We are dedicated to guiding you through every step of your medical journey."
        ctaText="Speak With Our Team"
        href="/contact"
      />
      {/* Services Overview */}
      <Services />

      <div className="overflow-hidden ">
        {/* <ContentWithImage
          title={'Discover the Excellence of Saudi Healthcare'}
          description={
            'Saudi Arabia boasts state-of-the-art medical facilities, ensuring top-tier care for all patients. Experience seamless travel accessibility and rich cultural experiences that enhance your healthcare journey.'
          }
          benefits={benefits}
          cta={{ label: 'Learn More', href: '/visit-saudi' }}
          color="spring"
        /> */}

        {featureSections.map((section, index) => (
          <FeatureSection
            key={index}
            tagline={section.tagline}
            title={section.title}
            description={section.description}
            features={section.features}
            image={section.image}
            backgroundColor={section.backgroundColor}
            textColor={section.textColor}
            reverse={section.reverse}
            ctaText={section.ctaText}
            href={section.href}
          />
        ))}
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
      {/* <JoinNetwork /> */}
      {centersSectionMock.map((section, index) => (
        <CentersSection
          key={index}
          description={section.description}
          title={section.title}
          list={section.list}
          backgroundColor={section.backgroundColor}
          textColor={section.textColor}
          reverse={section.reverse}
          ctaText={section.ctaText}
          href={section.href}
          secondaryButton={true}
        />
      ))}
      {/* News & Events */}
      <BlogSection
        heading="Stay Updated on Our News"
        subheading="Discover the latest news and events at Sage. We are committed to keeping you informed about advancements in healthcare and our services."
        blogs={blogs}
      />

      {/* Start Your Journey CTA */}
      <GetInTouch
        tagline="Let’s Talks"
        title="Start Your Journey Today"
        description="Book your free consultation and discover personalized care tailored just for you."
        image="/images/generalImages/Vector.png"
      />
      {/* <StartJourney /> */}
    </div>
  )
}
