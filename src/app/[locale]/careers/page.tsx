import AccordionJobs from '../../../components/sections/AccordionJobs'
import FeatureSection from '../../../components/sections/FeatureSection'
import HeroPages from '../../../components/sections/HeroPages'
import CalendarClock from '../../../components/svg/CalendarClock'
import MedicalInformation from '../../../components/svg/MedicalInformation'

export const runtime = 'edge'
const featureSections = [
  {
    title: 'Why Joining Sage',
    description:
      'At Sage, we believe in the power of compassionate care and global collaboration. Join us to transform lives and redefine healthcare experiences.',
    list: [
      {
        title: 'Global Network',
        description:
          'Connect with a vast network of healthcare professionals across the globe.',
        icon: <MedicalInformation />,
        theme: 'light',
      },
      {
        title: 'Patient Impact',
        description:
          'Be part of transformative journeys that enhance patient well-being and access to care.',
        icon: <CalendarClock />,
        theme: 'light',
      },
    ],

    image: '/images/generalImages/JoiningSage.png',
    backgroundColor: '#013530',
    textColor: 'white',
    reverse: false,
  },
]
export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <HeroPages
        title="Work With Purpose"
        description="Join our mission to make world-class healthcare accessible to those who need it most. Together, we can transform lives and create a healthier future for all."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
        ]}
      />
      {featureSections.map((section, index) => (
        <FeatureSection
          key={index}
          title={section.title}
          description={section.description}
          list={section.list}
          image={section.image}
          backgroundColor={section.backgroundColor}
          textColor={section.textColor}
          reverse={section.reverse}
        />
      ))}
      <section className="bg-Secondary-Light-Scrub">
        <div className=" mx-auto max-w-[1392px] py-25">
          <h3 className="heading-lg pb-6">Job Openings</h3>
          <p className="text-Secondary-Text text-lg max-w-[768px]">
            Explore exciting opportunities to join our dedicated team in
            transforming healthcare experiences.
          </p>
          <div className="pt-15">
            <AccordionJobs />
          </div>
        </div>
      </section>
    </div>
  )
}
