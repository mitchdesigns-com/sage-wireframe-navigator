import SectionHeader from '../ui/SectionHeader'
import ArrowOutWard from '../svg/ArrowOutWard'

const resources = [
  {
    title: 'Explore Our Case Studies',
    description: 'Proven outcomes from real stories.',
    href: '/resources/case-studies',
  },
  {
    title: 'Informative Blog Posts',
    description: 'Expert views, updates, and tips.',
    href: '/resources/blog',
  },
  {
    title: 'Guide Library',
    description: 'Step-by-step help and direction.',
    href: '/resources/guides',
  },
  {
    title: 'Our Certification Highlights',
    description: 'Trusted standards and achievements.',
    href: '/resources/certifications',
  },
  {
    title: 'Upcoming Webinars & Replays',
    description: 'Learn live or on demand.',
    href: '/resources/webinars',
  },
]

export default function Resources() {
  return (
    <section className="py-25 bg-sage-gradient">
      <div className="max-w-[1392px] px-4 mx-auto">
        <SectionHeader
          heading={'Explore Our Featured Resources for You'}
          color="light"
          tagline="Resources"
          description="Discover valuable insights and information tailored to your healthcare journey. Our resources are designed to empower you with knowledge and support."
          home
        />

        {/* Content Grid */}
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          {/* Left Content - Large Image */}
          <div className="order-2 lg:order-1">
            <div
              className="aspect-[600/650] rounded-[40px] bg-cover bg-center w-full"
              style={{
                backgroundImage: `url('/images/generalImages/Resources.png')`,
              }}
            />
          </div>

          {/* Right Content - Resources List */}
          <div className="order-1 space-y-8 lg:order-2">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="border-b border-[#4B4B4B] pb-8 last:border-b-0"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {resource.title}
                    </h3>
                    <p className=" leading-relaxed text-white">
                      {resource.description}
                    </p>
                  </div>
                  <ArrowOutWard />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
