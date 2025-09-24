import FeatureSection from '../../../../components/sections/FeatureSection'
import HeroPages from '../../../../components/sections/HeroPages'
import WebinarHighlights from '../../../../components/sections/WebinarHighlights'
import WebinarList from '../../../../components/sections/WebinarList'
import VectorIcon from '../../../../components/svg/VectorIcon'

export const runtime = 'edge'
const featureSections = [
  {
    tagline: 'Upcoming Webinar',
    title: 'From Referral to Recovery Building Seamless Patient Journeys',
    description:
      'Gain insights into designing end-to-end healthcare pathways that ensure quality care and a smooth patient experience.',
    features: [
      {
        text: 'Expert insights on medical travel protocols and strategies.',
        icon: <VectorIcon />,
      },
      {
        text: 'Learn from leading healthcare professionals and decision-makers.',
        icon: <VectorIcon />,
      },
      {
        text: 'Register now to secure your spot today!',
        icon: <VectorIcon />,
      },
    ],
    ctaText: 'Watch Webinar',
    href: '',
    image: '/images/generalImages/blog2.png',
    backgroundColor: '#013530',
    textColor: 'white',
    reverse: false,
  },
]
const webinarHighlights = [
  {
    title: 'Coordinating Cross-Border Patient Journeys',
    description:
      'Understand the steps involved in managing care across countries—from referrals to discharge—with smooth logistics and cultural sensitivity.',
    bgColor: 'bg-Primary-Palm',
    textColor: 'text-Primary-Spring',
    descColor: 'text-Secondary-Scrub',
  },
  {
    title: 'Tools That Power Seamless Communication',
    description:
      'Explore the digital platforms and tech solutions that help streamline scheduling, updates, and real-time case tracking between stakeholders.',
    bgColor: 'bg-Primary-Spring',
    textColor: 'text-Primary-Palm',
    descColor: 'text-Secondary-Text',
  },
  {
    title: 'Reducing Costs Without Sacrificing Quality',
    description:
      'Learn how to design cost-effective care plans that balance budget constraints with exceptional patient outcomes.',
    bgColor: 'bg-Primary-Scrub',
    textColor: 'text-Primary-Spring',
    descColor: 'text-Secondary-Scrub',
  },
  {
    title: 'Best Practices from Real-World Cases',
    description:
      'Gain insights from actual case studies where organizations successfully managed complex international medical scenarios.',
    bgColor: 'bg-Primary-Palm',
    textColor: 'text-Primary-Spring',
    descColor: 'text-Secondary-Scrub',
  },
]
const webinars = [
  {
    slug: 'event1',
    title: 'Optimizing Medical Travel',
    description:
      'Learn how to streamline patient journeys across borders with smart coordination tools and proven logistical frameworks.',
    day: 'Fri',
    dayNumbers: '09',
    year: 'Feb 2026',
  },
  {
    slug: 'event2',
    title: 'The Future of Corporate Wellness in a Globalized World',
    description:
      'Discover emerging trends and strategies for building scalable, employee-first wellness programs in multinational settings.',
    day: 'Fri',
    dayNumbers: '09',
    year: 'Feb 2026',
  },
  {
    slug: 'event3',
    title: 'Cross-Border Care: Legal, Logistical & Ethical Considerations',
    description:
      'Explore the complexities of international healthcare delivery, including compliance, patient rights, and operational challenges.',
    day: 'Fri',
    dayNumbers: '09',
    year: 'Feb 2026',
  },
]

export default function WebinarsPage() {
  return (
    <div className="min-h-screen ">
      <HeroPages
        title="Webinars"
        description="Welcome to our blog, your trusted resource for navigating the complexities of healthcare. Explore insights on medical tourism, case management, and the latest trends shaping Saudi Arabia's healthcare landscape."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Webinars', href: '/resources/webinars' },
        ]}
      />
      {featureSections.map((section, index) => (
        <FeatureSection
          key={index}
          tagline={section.tagline}
          title={section.title}
          description={section.description}
          features={section.features}
          ctaText={section.ctaText}
          href={section.href}
          image={section.image}
          backgroundColor={section.backgroundColor}
          textColor={section.textColor}
          reverse={section.reverse}
        />
      ))}
      <WebinarHighlights highlights={webinarHighlights} />
      <WebinarList webinars={webinars} news={false} />
    </div>
  )
}
