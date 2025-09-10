import HeroPages from '@/components/sections/HeroPages'
import FeatureSection from '@/components/sections/FeatureSection'
import CentersSection from '../../../components/sections/CentersSection'
import Tagline from '../../../components/sections/Tagline'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../../../components/ui/Button'
export const runtime = 'edge'

const featureSections = {
  tagline: 'Connections',
  title: 'Empowering Medical Journeys Through Trusted Partnerships',
  description:
    'At Sage, we leverage a meticulously curated network of partners to provide unparalleled medical travel experiences. Our commitment to global standards and patient-first outcomes ensures that every journey is seamless and stress-free.',
  list: [
    {
      title: 'Global Compliance',
      description:
        'Adhering to the highest standards for patient safety and care.',
      theme: 'light',
    },
    {
      title: 'Multilingual Support',
      description:
        'Your health and comfort are our top priorities throughout your medical journey.',
      theme: 'light',
    },
  ],
  ctaText: 'Contact Us',
  href: '/contact',
  image: '/images/generalImages/network.png',
  backgroundColor: '#013530',
  textColor: 'white',
  reverse: false,
}
const centersSectionMock = [
  {
    tagline: 'Healthcare Institutions',
    title: 'Trusted by Saudi Arabia’s premier healthcare institutions',
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

    backgroundColor: '#F0F8F8',
    textColor: '#1E1E1E',
    reverse: false,
  },
  {
    tagline: 'Medical Facilities',
    title: 'Trusted by top medical facilities worldwide',
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

    backgroundColor: '#E2F2F1',
    textColor: '#1E1E1E',
    reverse: true,
  },
  {
    tagline: 'Medical Facilities',
    title: 'Trusted by top medical facilities worldwide',
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

    backgroundColor: '#DAF7AF',
    textColor: '#1E1E1E',
    reverse: false,
  },
  {
    tagline: 'Medical Travel',
    title: 'Trusted by top medical travel professionals worldwide',
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

    backgroundColor: '#F0F8F8',
    textColor: '#1E1E1E',
    reverse: false,
  },
  {
    tagline: 'Medical Travel',
    title: 'Trusted by top medical travel facilitators',
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

    backgroundColor: '#E2F2F1',
    textColor: '#1E1E1E',
    reverse: true,
  },
  {
    tagline: 'Insurance Providers',
    title: 'Trusted by top insurance providers worldwide',
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

    backgroundColor: '#DAF7AF',
    textColor: '#1E1E1E',
    reverse: false,
  },
  {
    tagline: 'Medical Travel',
    title: 'Trusted by top insurance providers worldwide',
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

    backgroundColor: '#F0F8F8',
    textColor: '#1E1E1E',
    reverse: false,
  },
  {
    tagline: 'Quality Organizations',
    title: 'Trusted by top healthcare quality organizations',
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

    backgroundColor: '#E2F2F1',
    textColor: '#1E1E1E',
    reverse: true,
  },
  {
    tagline: 'Healthcare Leaders',
    title: 'Trusted by global healthcare leaders and governments',
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

    backgroundColor: '#DAF7AF',
    textColor: '#1E1E1E',
    reverse: false,
  },
]
export default function OurNetworkPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroPages
        title="Our Network"
        description="Empowering seamless medical travel through a robust network of accredited partners worldwide."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Our Network', href: '/our-network' },
        ]}
      />
      <FeatureSection
        tagline={featureSections.tagline}
        title={featureSections.title}
        description={featureSections.description}
        list={featureSections.list}
        ctaText={featureSections.ctaText}
        href={featureSections.href}
        image={featureSections.image}
        backgroundColor={featureSections.backgroundColor}
        textColor={featureSections.textColor}
        reverse={featureSections.reverse}
      />
      <section className="bg-Secondary-Scrub">
        <div className="container-custom mx-auto max-w-[1392px] py-28">
          <div className={`flex items-center gap-15 flex-row-reverse `}>
            {/* Content */}
            <div className="flex-1">
              <div className="mb-8">
                <div>
                  <Tagline text={'Featured Networks'} />
                </div>
                <div className="mb-8">
                  <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.48px] mb-2 whitespace-pre-line text-Primary-Black">
                    King Fahad Medical City
                  </h2>
                  <span className="text-Primary-Palm text-base font-medium mb-2">
                    Medical Facilitator
                  </span>
                  <p
                    className={`text-p text-Secondary-Text whitespace-pre-line`}
                  >
                    One of the largest and most trusted healthcare providers in
                    the region, offering specialized medical services and
                    seamless coordination for international patients.{' '}
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-4 ">
                <div className="flex items-start  flex-col bg-white w-full h-[332px] rounded-[8px] relative overflow-hidden">
                  <Image
                    fill
                    src={'/images/generalImages/center2.png'}
                    alt="center"
                    className="object-contain p-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {centersSectionMock.map((section, index) => (
        <CentersSection
          key={index}
          tagline={section.tagline}
          title={section.title}
          list={section.list}
          backgroundColor={section.backgroundColor}
          textColor={section.textColor}
          reverse={section.reverse}
        />
      ))}
      <section className="bg-Primary-Scrub">
        <div className=" mx-auto max-w-[1392px] py-28 w-full">
          <div className={`flex items-center gap-20 flex-row `}>
            {/* Content */}
            <div className="w-1/2">
              <div className="mb-8">
                <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.48px] mb-6 whitespace-pre-line text-white">
                  Become a Trusted Partner
                </h2>
                <span className="text-white text-[18px] mb-8">
                  Join our network of esteemed providers and enhance patient
                  care through collaboration and trust.
                </span>
                <p
                  className={`text-p text-Secondary-Dark-Palm text-xs whitespace-pre-line pt-4`}
                >
                  By clicking Sign Up, you confirm your agreement with our Terms
                  and Conditions.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="w-1/2">
              <div className="grid grid-cols-1 gap-4 ">
                <div className="flex items-start  flex-col w-full h-[400px] rounded-[8px] relative overflow-hidden">
                  <Image
                    fill
                    src={'/images/generalImages/Partner.png'}
                    alt="center"
                    className="object-contain "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-Secondary-Scrub">
        <div className="container-custom mx-auto max-w-[1392px] py-28">
          <div className={`flex items-start gap-15 flex-row`}>
            {/* Content */}
            <div className="flex-1 ">
              <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.48px] whitespace-pre-line text-Primary-Black">
                Access Your <br /> Referral Platform
              </h2>
            </div>

            <div className="flex-1">
              <p
                className={`text-p text-Secondary-Text whitespace-pre-line pb-8`}
              >
                Log in to our referral management system to streamline your
                partnership with Sage. Experience seamless collaboration and
                enhanced patient care through our trusted network.
              </p>
              <Link
                href={'/contact'}
                className="inline-block  bg-primary text-white rounded-lg font-medium group cursor-pointer"
              >
                <Button variant={'primary'} rightIcon={false} fullWidth>
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
