'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'

import { useTranslations } from 'next-intl'
import HeroCarousel from '@/components/sections/HeroCarousel'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import Link from 'next/link'
import ButtonIcon from '@/components/svg/ButtonIcon'
import CaseStudyCard from '@/components/sections/CaseStudyCard'
import Image from 'next/image'
import GalleryPopup, {
  singleImage,
} from '../../../../../components/sections/GalleryPopup'
export const runtime = 'edge'

const caseStudyData = [
  {
    slug: '1',
    title: 'Oncology Case',
    description:
      'Urgent care for a patient from Jordan, resolved in record time.',
    image: '/images/generalImages/caseStudy.png',

    category: 'individuals',
  },
  {
    slug: '2',
    title: 'Corporate Wellness',
    description: 'Enhanced employee health programs for a leading corporation.',

    image: '/images/generalImages/Preparing2.png',
    category: 'businesses',
  },
  {
    slug: '3',
    title: 'Sage Attends Global Health Conference at UAE',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',

    image: '/images/generalImages/Preparing3.png',
    category: 'organizations',
  },
  {
    slug: '4',
    title: 'Sage Partners with Local Clinics',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',

    image: '/images/generalImages/Preparing.png',
    category: 'organizations',
  },
  {
    slug: '5',
    title: 'Sage Wins Healthcare Innovation Global Award',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',

    image: '/images/generalImages/Preparing2.png',
    category: 'businesses',
  },
  {
    slug: '6',
    title: 'Sage Attends Global Health Conference at UAE',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',

    image: '/images/generalImages/Preparing3.png',
    category: 'individuals',
  },
]
const featureSections = [
  {
    title:
      'Navigating Complex Cardiac Care: A Patients Journey from Kenya to Riyadh',
    description:
      'This case study highlights the journey of a 58-year-old patient from Kenya facing serious cardiac issues. With Sage`s support, the patient received timely medical attention and comprehensive care.',
    list: [
      {
        title: 'Client Overview',
        description:
          'A 58-year-old patient from Kenya with complex cardiac needs.',
        theme: 'light',
      },
      {
        title: 'Key Details',
        description:
          'Urgent medical attention required due to severe cardiac complications.',
        theme: 'light',
      },
    ],

    image: '/images/generalImages/singleCase.png',
    backgroundColor: '#013530',
    textColor: 'white',
    reverse: false,
  },
]
const images = [
  '/images/generalImages/Aligning.png',
  '/images/generalImages/Guidance.png',
  '/images/generalImages/Responsible.png',
  '/images/generalImages/service.png',
  '/images/generalImages/Travel.png',
  '/images/generalImages/Timeline.png',
  '/images/generalImages/Timeline3.png',
  // ... more images
]
export default function SingleCaseStudyPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  console.log(photoIndex)
  const openLightbox = (index: number) => {
    setPhotoIndex(index)
    setIsOpen(true)
  }

  // Convert plain strings → singleImage[]
  const galleryImages: singleImage[] = images.map((url, index) => ({
    id: index,
    attributes: {
      alternativeText: `Gallery image ${index + 1}`,
      url, // already relative to public folder
    },
  }))

  const params = useParams()
  const newsId = params.slug
  const events = caseStudyData.find((j) => j.slug === newsId)
  const t = useTranslations()

  if (!events) {
    return <div className="p-8">Event not found.</div>
  }

  return (
    <>
      <section>
        <HeroCarousel
          title={events.title}
          breadcrumbItems={[
            { label: 'Home', href: '/' },
            { label: 'Case Studies', href: '/resources/case-studies' },
            {
              label: events.title,
              href: `/resources/case-studies/${events.slug}`,
            },
          ]}
          category={events.category}
          description={events.description}
        />

        {featureSections.map((section, index) => (
          <FeatureSection
            key={index}
            title={section.title}
            description={section.description}
            image={section.image}
            backgroundColor={section.backgroundColor}
            textColor={section.textColor}
            reverse={section.reverse}
            list={section.list}
          />
        ))}
      </section>{' '}
      <section className=" bg-[#E6EEED] flex items-start py-28 flex-col">
        <div className="max-w-[1280px] mx-auto w-full gap-20 flex items-center">
          <div>
            <p className="text-base text-Primary-Palm font-medium mb-1">
              Challenge
            </p>
            <h1 className="text-[46px] font-bold text-Primary-Black leading-[1.2] tracking-[-0.48px]">
              Understanding the Initial Obstacles Faced
            </h1>
          </div>

          <div>
            <h4 className="text-[20px] font-bold text-Primary-Palm">
              Urgent Needs
            </h4>
            <p className="text-base text-Primary-Black mt-4">
              Immediate medical attention was critical due to the patient's
              complex condition.
            </p>
          </div>

          <div>
            <h4 className="text-[20px] font-bold text-Primary-Palm">
              Logistical Hurdles
            </h4>
            <p className="text-base text-Primary-Black mt-4">
              Documentation issues and language barriers delayed the patient's
              journey to recovery.
            </p>
          </div>
        </div>

        <div className="mt-28 flex justify-center max-w-[768px] mx-auto w-full">
          <div className="w-full  bg-white shadow-sm border border-transparent relative">
            <div className="absolute -top-1 left-0 right-0 mx-auto h-1 bg-Primary-Palm" />

            <div className="px-10 py-15">
              <h3 className="text-[32px] font-bold text-[#000404] mb-4">
                Our Approach
              </h3>
              <p className="text-p text-[#000404] leading-relaxed ">
                Sage provided a tailored solution by integrating our
                full-service concierge and medical coordination offerings into
                the NGO's operations. We assigned a dedicated case manager for
                each region and delivered:
              </p>

              <ul className="list-disc pl-5 text-p text-[#000404] space-y-2 mb-6">
                <li>
                  Pre-approved hospital networks with fast-track admission
                  protocols
                </li>
                <li>
                  Visa facilitation and invitation letters for humanitarian
                  staff and patients
                </li>
                <li>
                  24/7 on-ground support including airport transfers,
                  translation, and post-care check-ins
                </li>
                <li>
                  Real-time case tracking, treatment summaries, and financial
                  reporting dashboards
                </li>
              </ul>

              <h4 className="text-[32px] font-bold text-[#000404] my-4">
                The Results
              </h4>
              <p className="text-p text-[#000404] mb-4">
                Within 3 months, the NGO reported a 42% reduction in treatment
                approval times and a 60% improvement in patient satisfaction
                scores. Sage handled over 130+ cases across 6 countries with
                zero disruption to the NGO's core operations.
              </p>

              <h4 className="text-[32px] font-bold text-[#000404] my-4">
                Key Outcomes
              </h4>
              <ul className="list-disc pl-5 text-p text-[#000404] space-y-2">
                <li>
                  130+ cases managed with full medical and logistical support
                </li>
                <li>
                  42% faster case approvals, cutting patient wait times
                  significantly
                </li>
                <li>
                  Multi-country coordination, across Jordan, Egypt, KSA, and
                  Sudan
                </li>
                <li>
                  Standardized reporting, improving organizational
                  accountability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-Secondary-Dark-Palm text-white">
        <div className="py-25 max-w-[1392px] mx-auto ">
          <div className="text-center pb-20">
            <h3 className=" font-bold text-[48px] leading-[1.2] tracking-[-0.48px] pb-4">
              Image Gallery
            </h3>
            <p className="text-p">
              Visuals showcasing the journey and services provided.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-1 row-span-2">
              <div className="relative w-full aspect-square">
                <Image
                  src={images[0]}
                  fill
                  alt="Gallery"
                  className="object-cover cursor-pointer rounded-4xl"
                  onClick={() => openLightbox(0)}
                />
              </div>
            </div>

            <div className="grid grid-rows-2 grid-cols-2 gap-8">
              {images.slice(1, 5).map((img, i) => (
                <div
                  className="relative w-full aspect-square"
                  key={i}
                  onClick={() => openLightbox(i + 1)}
                >
                  <Image
                    fill
                    src={img}
                    alt="Gallery"
                    className="w-full h-full object-cover cursor-pointer rounded-4xl"
                  />

                  {i === images.slice(1, 5).length - 1 && (
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-white text-xl font-medium rounded-4xl flex-col cursor-pointer">
                      <span className="font-bold text-[32px]">
                        +{images.length - 5}
                      </span>{' '}
                      <p>more</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {isOpen && (
              <GalleryPopup
                onClickHandle={() => setIsOpen(false)}
                Images={galleryImages}
              />
            )}
          </div>
        </div>
      </div>
      <section className="bg-Secondary-Light-Scrub">
        <div className="py-20 max-w-[1390px] mx-auto w-full">
          <div className="flex justify-between items-end w-full">
            <h4 className="text-[32px] font-bold text-[#000404] ">
              {' '}
              {t('News.caseStudy')}
            </h4>
            <div className="flex ">
              <Link href={'/resources/case-studies'}>
                {' '}
                <div className="group flex gap-1.5 items-center justify-start rounded-[100px] pt-8 cursor-pointer">
                  {' '}
                  <div className="font-aeonik-bold text-primary-palm group-hover:text-Secondary-Dark-Palm text-lg leading-[1.5]">
                    {t('Blog.viewAll')}
                  </div>
                  <div className="bg-primary-palm rounded-full p-[6px] size-7 flex items-center justify-center">
                    <div className="relative shrink-0 size-6">
                      <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                        <div className="flex-none group-hover:rotate-[45deg] text-Primary-Palm group-hover:text-Secondary-Dark-Palm transition-all duration-300">
                          <ButtonIcon strokeColor="white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{' '}
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 pt-15">
            {caseStudyData.slice(0, 2).map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-Secondary-Scrub">
        <GetInTouch
          tagline="Let’s Talks"
          title="Start Your Journey Today"
          description="Book your free consultation and discover personalized care tailored just for you."
          image="/images/generalImages/Vector.png"
        />
      </section>
    </>
  )
}
