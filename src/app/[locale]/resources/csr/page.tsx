import HeroPages from '@/components/sections/HeroPages'
import FeatureSection from '@/components/sections/FeatureSection'
import TravelIcon from '@/components/svg/TravelIcon'
import WheelChairPickUp from '@/components/svg/WheelChairPickUp'
import CSRForm from '../../../../components/sections/CSRForm'

export const runtime = 'edge'
const featureSections = [
  {
    title: 'Our Commitment to Social Responsibility',
    description:
      'At SAGE Healthcare Concierge Services, our mission extends beyond delivering world-class medical tourism; we are deeply committed to making a tangible difference in global healthcare accessibility. Our Corporate Social Responsibility (CSR) initiative is dedicated to supporting individuals facing unique medical challenges or those with limited access to specialized care.',

    image: '/images/generalImages/csr.png',
    backgroundColor: '#F0F8F8',
    textColor: '#1E1E1E',
    reverse: false,
  },
]
const supportSections = [
  {
    tagline: 'How We Support',
    title: 'Two Ways We Help, One Global Mission',
    description:
      'We offer life-changing support by helping those with serious medical needs access top care, Our efforts focus on two core areas where we can make the greatest impact',
    list: [
      {
        title: 'Consultation Services',
        description:
          'We help institutions build efficient, compliant healthcare travel frameworks from the ground up.',
        icon: <TravelIcon className="w-12 h-12" />,
        theme: 'light',
      },
      {
        title: 'Training Programs',
        description:
          'Up skill your teams with real-world, practical training to enhance patient support.',
        icon: <WheelChairPickUp />,
        theme: 'light',
      },
    ],

    image: '/images/generalImages/support.png',
    backgroundColor: '#025850',
    textColor: 'white',
    reverse: true,
  },
]
export default function CSRPage() {
  return (
    <div className="min-h-screen ">
      <HeroPages
        title="SAGE CSR Initiative"
        description="Join our mission to transform lives through compassionate medical support, global care access, and social responsibility."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'CSR Initiative', href: '/resources/csr' },
        ]}
        button="Register Now"
        href=""
        bgImage="/images/generalImages/CSRHeader.png"
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
        />
      ))}
      <section className="bg-Secondary-Dark-Palm">
        <div className="max-w-[1392px] mx-auto py-42">
          <h2 className="text-white text-[32px] font-aeonik-light text-center w-full">
            SAGE sponsors medical tourism for select individuals with rare or
            complex conditions, connecting them to{' '}
            <span className="text-Primary-Spring font-bold">
              life-changing treatments
            </span>{' '}
            in Saudi Arabia. This initiative reflects our commitment to
            equitable healthcare and lasting global impact.
          </h2>
        </div>
      </section>
      {supportSections.map((section, index) => (
        <FeatureSection
          key={index}
          tagline={section.tagline}
          title={section.title}
          description={section.description}
          list={section.list}
          image={section.image}
          backgroundColor={section.backgroundColor}
          textColor={section.textColor}
          reverse={section.reverse}
        />
      ))}
      <section className="bg-Secondary-Scrub">
        <div className="py-28">
          <div className="max-w-[1392px] mx-auto ">
            <div className="text-Neutral-Darkest text-center max-w-[970px] mx-auto pb-15">
              <span className="text-base font-medium pb-4">
                CSR Registration
              </span>
              <h6 className="heading-lg pb-4">Eligibility & Application</h6>
              <p className="text-p">
                We welcome applications from patients worldwide who need
                treatment unavailable locally, especially rare or complex
                medical conditions. Each case is reviewed with empathy, focusing
                on the potential to create a life-changing impact.
              </p>
            </div>
            <CSRForm />
          </div>
        </div>
      </section>
    </div>
  )
}
