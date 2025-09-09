'use client'
export const runtime = 'edge'

import Image from 'next/image'
import HeroWithImage from '@/components/sections/HeroWithImage'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import VectorIcon from '@/components/svg/VectorIcon'
import FeatureSection from '@/components/sections/FeatureSection'
import ManageAccounts from '@/components/svg/ManageAccounts'
import Language from '@/components/svg/Language'
import Tagline from '@/components/sections/Tagline'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import GetInTouch from '@/components/sections/GetInTouch'
import MedicalServices from '@/components/svg/MedicalServices'
import DownloadIcon from '@/components/svg/DownloadIcon'

const timelineSteps = [
  {
    number: '01.',
    title: 'Submit Your Request',
    description:
      "Reach out to us with your medical needs. We'll begin the process immediately.",
    image: '/images/generalImages/Timeline.png',
  },
  {
    number: '02.',
    title: 'Get Matched',
    description:
      'We connect you with the best hospitals suited for your needs. Expect personalized care tailored to you.',
    image: '/images/generalImages/Timeline2.png',
  },
  {
    number: '03.',
    title: 'Receive Your Plan',
    description:
      "Once matched, you'll receive a comprehensive treatment plan. We ensure clarity and understanding.",
    image: '/images/generalImages/Timeline3.png',
  },
  {
    number: '04.',
    title: 'Travel & Treat',
    description:
      "Travel with confidence knowing we've arranged everything. Focus on your recovery while we handle the rest.",
    image: '/images/generalImages/Timeline4.png',
    button: 'Request Free Consultation',
  },
]
const paragraphs = [
  'Saudi Arabia is rapidly becoming a leading destination for medical tourism, attracting international patients with its state-of-the-art healthcare facilities and highly skilled professionals. The country boasts advanced hospitals that are internationally accredited, ensuring that patients receive top-notch medical care. With a commitment to innovation and excellence, Saudi Arabia is aligned with Vision 2030, which aims to enhance the quality of life and elevate the healthcare sector.',
  'In addition to world-class medical services, Saudi Arabia offers affordability that appeals to international patients. The cost of treatment is often significantly lower than in many Western countries, making it a viable option for those seeking specialized care without breaking the bank. This combination of quality and cost-effectiveness positions Saudi Arabia as a smart choice for medical travelers.',
  'Cultural hospitality is another hallmark of the Saudi healthcare experience. Patients and their families are welcomed with warmth and respect, ensuring a comfortable environment during their medical journey. The healthcare system prioritizes patient satisfaction, making every effort to address individual needs and concerns.',
  'For those considering medical treatment abroad, Saudi Arabia stands out for its commitment to patient safety and care. The rigorous standards maintained by healthcare facilities ensure that patients can trust the services they receive, fostering peace of mind during what can be a stressful time.',
  'Choosing Saudi Arabia means choosing a future of health and wellness, supported by a healthcare system that values compassion, expertise, and innovation.',
]

const reasons = [
  { title: 'Accredited Hospitals', value: 'International Standards' },
  { title: 'Affordable Care', value: 'Cost-effective' },
  { title: 'Cultural Hospitality', value: 'Warm & Respectful' },
  { title: 'Patient Safety', value: 'Rigorous Standards' },
]
const featureSections = [
  {
    title: 'Comprehensive Healthcare Tailored for You',
    description:
      'At Sage, we provide a range of specialized medical services designed to meet your unique healthcare needs. Trust us to facilitate your journey to health with personalized care and expert guidance.',
    features: [
      {
        text: 'Case matching with top hospitals for optimal care.',
        icon: <VectorIcon />,
      },
      {
        text: 'Efficient appointment scheduling for your convenience.',
        icon: <VectorIcon />,
      },
      {
        text: 'Expert second opinions to ensure informed decisions.',
        icon: <VectorIcon />,
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/HealthCare.png',
    backgroundColor: '#025850',
    textColor: 'white',
    reverse: false,
  },
  {
    title: 'Your Well-being, \n Our Commitment to You',
    description:
      'At Sage, we prioritize your well-being with personalized support throughout your medical journey. Our dedicated team is here to ensure you receive the best care tailored to your needs.',
    list: [
      {
        title: 'Dedicated Manager',
        description: 'Get personalized support from a dedicated care manager.',
        icon: <ManageAccounts />,
        theme: 'dark',
      },
      {
        title: 'Multilingual Support',
        description:
          'Our team speaks your language to ensure clear communication and understanding.',
        icon: <Language />,
        theme: 'dark',
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/Commitment.png',
    backgroundColor: '#DAF7AF',
    textColor: '#1E1E1E',
    reverse: true,
  },
]
const cards = [
  {
    icon: <MedicalServices />,
    type: 'Medical',
    title: 'Executive Wellness Checkup',
    description:
      'Comprehensive medical services tailored for executives traveling for care.',
    provider: 'By Sage Healthcare Global',
    details: [
      '5 Days',
      'Travel Tickets Included',
      'Full Accommodation Included',
    ],
    buttonText: 'Download PDF',
  },
  {
    icon: <MedicalServices />,
    type: 'Medical',
    title: 'Cardiology Package',
    description:
      'Advanced cardiac screening and wellness program for international patients.',
    provider: 'By Sage Healthcare Global',
    details: [
      '5 Days',
      'Travel Tickets Included',
      'Full Accommodation Included',
    ],
    buttonText: 'Download PDF',
    Tagline: 'Promoted',
  },
  {
    icon: <MedicalServices />,
    type: 'Surgical',
    title: 'Orthopedic Surgery Plan',
    description:
      'Tailored surgical and recovery services for orthopedic care abroad.',
    provider: 'By Sage Healthcare Global',
    details: [
      '5 Days',
      'Travel Tickets Included',
      'Full Accommodation Included',
    ],
    buttonText: 'Download PDF',
    Tagline: 'Promoted',
  },
  {
    icon: <MedicalServices />,
    type: 'Medical',
    title: 'Cancer Care Program',
    description:
      'Comprehensive oncology program with international expert doctors.',
    provider: 'By Sage Healthcare Global',
    details: [
      '5 Days',
      'Travel Tickets Included',
      'Full Accommodation Included',
    ],
    buttonText: 'Download PDF',
  },
  {
    icon: <MedicalServices />,
    type: 'Wellness',
    title: 'Full Body Screening',
    description:
      'In-depth body checkup to ensure holistic health and preventive care.',
    provider: 'By Sage Healthcare Global',
    details: [
      '5 Days',
      'Travel Tickets Included',
      'Full Accommodation Included',
    ],
    buttonText: 'Download PDF',
  },
  {
    icon: <MedicalServices />,
    type: 'Medical',
    title: 'Diabetes Management Program',
    description:
      'Specialized diabetes treatment and lifestyle management abroad.',
    provider: 'By Sage Healthcare Global',
    details: [
      '5 Days',
      'Travel Tickets Included',
      'Full Accommodation Included',
    ],
    buttonText: 'Download PDF',
  },
]
export default function HealthcareServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroWithImage
        image="/images/generalImages/PlaceholderImage.png"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Individuals Services', href: '/services/individual' },
          {
            label: 'Healthcare Services',
            href: '/services/individual/healthcare',
          },
        ]}
        tagline="Healthcare Services for Individuals"
        title={
          <>
            <span className="font-normal">Your Trusted Partner for </span>
            <span className="font-bold text-Primary-Scrub">Healthcare</span>
          </>
        }
        description="At Sage, we understand that navigating healthcare can be overwhelming. Our dedicated team is here to guide you through every step of your medical journey in Saudi Arabia."
        primaryButton={{
          label: 'Request Free Consultation',
          href: '/contact',
          variant: 'primary',
          rightIcon: true,
        }}
        secondaryButton={{
          label: 'Explore Packages',
          href: '/contact',
          variant: 'light',
        }}
      />

      {/* Why Choose Saudi Arabia Section */}
      <WhyChooseSection
        title="Why Choose Saudi Arabia for Medical Care?"
        paragraphs={paragraphs}
        reasons={reasons}
      />
      {featureSections.map((section, index) => (
        <FeatureSection
          key={index}
          title={section.title}
          description={section.description}
          features={section.features}
          list={section.list}
          ctaText={section.ctaText}
          href={section.href}
          image={section.image}
          backgroundColor={section.backgroundColor}
          textColor={section.textColor}
          reverse={section.reverse}
        />
      ))}

      {/* How It Works Timeline Section */}
      <section className="py-28 bg-Secondary-Light-Scrub">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className=" mx-auto  text-center">
              <Tagline text="How It Works" className="items-center" />

              <div className="space-y-4">
                <h2 className="text-[#000404] heading-lg">
                  Your Path to Exceptional Healthcare
                </h2>
                <p className="text-[#000404] text-p">
                  Navigating healthcare can be overwhelming. Our patient journey
                  simplifies every step.
                </p>
              </div>
            </div>

            {/* Timeline Steps */}
            <div className="space-y-0 mt-20">
              {timelineSteps.map((step, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-11 items-start gap-3"
                >
                  {/* Content - Left or Right based on index */}
                  {index % 2 === 0 ? (
                    <>
                      {/* Image on Left */}
                      <div className="lg:col-span-5 pb-12">
                        <div className="aspect-square relative rounded-[40px] overflow-hidden w-[448px] ml-auto">
                          <Image
                            fill
                            src={step.image}
                            alt={step.title}
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Timeline Line */}
                      <div className="lg:col-span-1 flex justify-center">
                        <div className="flex flex-col items-center h-full min-h-[500px]">
                          <div className="bg-Primary-Palm h-6 w-[3px]" />
                          <div className="w-[15px] h-[15px] bg-Primary-Scrub rounded-full my-2" />
                          <div className="bg-Primary-Palm flex-1 w-[3px]" />
                        </div>
                      </div>

                      {/* Content on Right */}
                      <div className="lg:col-span-5 pt-4 space-y-4">
                        <div className="space-y-4">
                          <h3 className="text-[#9ABCB9] heading-1">
                            {step.number}
                          </h3>
                          <h4 className="text-Primary-Black heading-4">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-Secondary-Text text-p">
                          {step.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Content on Left */}
                      <div className="lg:col-span-5 pt-4 space-y-4 text-right">
                        <div className="space-y-4">
                          <h3 className="text-[#9ABCB9] heading-1">
                            {step.number}
                          </h3>
                          <h4 className="text-Primary-Black heading-4">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-Secondary-Text text-p">
                          {step.description}
                        </p>
                        {step.button && (
                          <Link
                            href={'/contact'}
                            className="inline-block group"
                          >
                            <Button
                              variant="primary"
                              rightIcon={true}
                              fullWidth
                            >
                              {step.button}
                            </Button>
                          </Link>
                        )}
                      </div>
                      {/* Timeline Line */}
                      <div className="lg:col-span-1 flex justify-center">
                        <div className="flex flex-col items-center h-full min-h-[500px]">
                          <div className="bg-Primary-Palm h-6 w-[3px]" />
                          <div className="w-[15px] h-[15px] bg-Primary-Scrub rounded-full my-2" />
                          <div className="bg-Primary-Palm flex-1 w-[3px]" />
                        </div>
                      </div>

                      {/* Image on Right */}
                      <div className="lg:col-span-5 pb-8">
                        <div className="aspect-square relative rounded-[40px] overflow-hidden w-[448px]">
                          <Image
                            fill
                            src={step.image}
                            alt={step.title}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-Secondary-Scrub py-25">
        <div className="max-w-[1392px] mx-auto w-full">
          <h2 className="text-Primary-Black heading-lg pb-20 text-center">
            Explore Our Healthcare Packages{' '}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-5 flex flex-col relative"
              >
                <div className="absolute -top-3 right-5">
                  <Tagline text={card.Tagline} />
                </div>
                <div className="bg-Secondary-Scrub rounded-full p-2 w-fit">
                  {card.icon}
                </div>
                <div className="type bg-Primary-Scrub px-[6px] text-sm font-medium w-fit rounded-[4px] text-white mt-4">
                  {card.type}
                </div>
                <h6 className="text-Primary-Black font-bold text-[20px] mt-1">
                  {card.title}
                </h6>
                <p className="text-Secondary-Text text-base pb-4">
                  {card.description}
                </p>
                <div className="border-t border-[#D2D2D2] text-Dark-Scrub text-xs font-medium flex justify-between pt-4 pb-5">
                  <p>{card.provider}</p>
                  <div className="flex gap-2">
                    {' '}
                    {card.details.map((detail, i) => (
                      <div key={i} className="flex flex-row items-center gap-2">
                        <span>{detail}</span>
                        {i < card.details.length - 1 && (
                          <div className="w-[5px] h-[5px] bg-Primary-Scrub rounded-full " />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-fit">
                  <Button variant="primary">
                    <div className="flex items-center gap-2">
                      <DownloadIcon />
                      <span>{card.buttonText}</span>
                    </div>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-Secondary-Scrub">
        <GetInTouch
          tagline="Let’s Talks"
          title="Begin Your Healthcare Journey"
          description="Contact Sage to explore tailored solutions for your healthcare needs and seamless travel experience."
          image="/images/generalImages/Vector.png"
        />
      </section>
    </div>
  )
}
