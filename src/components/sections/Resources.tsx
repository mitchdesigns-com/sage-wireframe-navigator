import Button from '@/components/ui/Button'
import { ArrowRight, Image as ImageIcon } from 'lucide-react'

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
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-medium text-gray-600">
            Resources
          </div>
          <h2 className="mx-auto mb-6 max-w-5xl text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Explore Our Featured Resources for You
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            Discover valuable insights and information tailored to your
            healthcare journey. Our resources are designed to empower you with
            knowledge and support.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Left Content - Large Image */}
          <div className="order-2 lg:order-1">
            <div className="flex aspect-[4/5] items-center justify-center rounded-3xl bg-gray-200">
              <div className="text-center text-gray-400">
                <div className="mx-auto mb-4 flex h-16 w-24 items-center justify-center rounded-lg bg-gray-400">
                  <ImageIcon className="h-12 w-12 text-gray-500" />
                </div>
                <p className="text-sm font-medium">Featured Resources</p>
                <p className="mt-1 text-xs">Healthcare guidance & insights</p>
              </div>
            </div>
          </div>

          {/* Right Content - Resources List */}
          <div className="order-1 space-y-8 lg:order-2">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="border-b border-gray-100 pb-8 last:border-b-0"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {resource.title}
                </h3>
                <p className="mb-4 leading-relaxed text-gray-600">
                  {resource.description}
                </p>
                <Button
                  href={resource.href}
                  variant="ghost"
                  rightIcon={<ArrowRight size={16} />}
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
