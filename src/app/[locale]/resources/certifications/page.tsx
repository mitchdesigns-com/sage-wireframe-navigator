'use client'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import CentersSection from '../../../../components/sections/CentersSection'
import CertificateCard from '../../../../components/sections/CertificateCard'
export const runtime = 'edge'
const CertificationsData = [
  {
    id: '1',
    title: 'Recognized by Leading Regulatory Bodies in Saudi Arabia and Beyond',
    description:
      'Our case studies showcase the profound impact of personalized healthcare solutions.',
    image: '/images/generalImages/cert1.png',
  },
  {
    id: '2',
    title:
      'CBAHI Accreditation – Saudi Central Board for Accreditation of Healthcare Institutions',
    description:
      'We cater to diverse needs, ensuring exceptional care and support.',

    image: '/images/generalImages/cert2.png',
  },
  {
    id: '3',
    title: 'ISO 9001:2015 – Quality Management Certification',
    description:
      'This certification demonstrates our commitment to quality management and continuous improvement.',

    image: '/images/generalImages/cert3.png',
  },
  {
    id: '4',
    title: 'ISO 9001:2015 – Quality Management Certification',
    description:
      'This certification demonstrates our commitment to quality management and continuous improvement.',

    image: '/images/generalImages/cert1.png',
  },
  {
    id: '5',
    title:
      'CBAHI Accreditation – Saudi Central Board for Accreditation of Healthcare Institutions',
    description:
      'We cater to diverse needs, ensuring exceptional care and support.',

    image: '/images/generalImages/cert2.png',
  },
  {
    id: '6',
    title: 'Recognized by Leading Regulatory Bodies in Saudi Arabia and Beyond',
    description:
      'Our case studies showcase the profound impact of personalized healthcare solutions.',
    image: '/images/generalImages/cert1.png',
  },
  {
    id: '7',
    title: 'ISO 9001:2015 – Quality Management Certification',
    description:
      'This certification demonstrates our commitment to quality management and continuous improvement.',
    image: '/images/generalImages/cert3.png',
  },
  {
    id: '8',
    title:
      'CBAHI Accreditation – Saudi Central Board for Accreditation of Healthcare Institutions',
    description:
      'We cater to diverse needs, ensuring exceptional care and support.',
    image: '/images/generalImages/cert2.png',
  },
  {
    id: '9',
    title: 'Recognized by Leading Regulatory Bodies in Saudi Arabia and Beyond',
    description:
      'Our case studies showcase the profound impact of personalized healthcare solutions.',
    image: '/images/generalImages/cert1.png',
  },
]
const centersSectionMock = {
  title: 'Trusted by top healthcare institutions worldwide',
  description:
    'Sage is proud to be the trusted partner of leading healthcare institutions across the globe. Our proven expertise, consistent quality, and commitment to excellence make us the preferred choice for organizations seeking reliable and tailored medical concierge solutions.',
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
  ctaText: 'Request Free Consultation',
  href: '/contact',
  backgroundColor: '#E2F2F1',
  textColor: '#1E1E1E',
  reverse: false,
}
export default function CertificationsPage() {
  return (
    <div className="min-h-screen ">
      <HeroPages
        title="Certifications"
        description="At Sage, we uphold the highest standards of integrity and professionalism, ensuring our services meet both Saudi and international regulatory requirements. Our certifications reflect our dedication to operational excellence in healthcare."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Certifications', href: '/resources/certifications' },
        ]}
      />
      <section className="py-20 bg-Secondary-Light-Scrub">
        <div className="max-w-[1392px] mx-auto space-y-20">
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-20">
            {CertificationsData.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </div>
      </section>
      <CentersSection
        title={centersSectionMock.title}
        description={centersSectionMock.description}
        list={centersSectionMock.list}
        ctaText={centersSectionMock.ctaText}
        href={centersSectionMock.href}
        backgroundColor={centersSectionMock.backgroundColor}
        textColor={centersSectionMock.textColor}
        reverse={centersSectionMock.reverse}
      />
      <section className="bg-Secondary-Scrub">
        <GetInTouch
          tagline="Let’s Talks"
          title="Start Your Medical Journey Today"
          description="Contact Sage to plan your treatment visit and explore the best of Saudi Arabia's healthcare."
          image="/images/generalImages/Vector.png"
        />
      </section>
    </div>
  )
}
