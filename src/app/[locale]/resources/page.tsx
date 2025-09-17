import Link from 'next/link'
export const runtime = 'edge'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive collection of healthcare resources,
            insights, and tools to support your healthcare journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            href="/resources/guides"
            className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Guides</h3>
            <p className="text-gray-600">Healthcare resources and insights</p>
          </Link>

          <Link
            href="/resources/case-studies"
            className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Case Studies
            </h3>
            <p className="text-gray-600">
              Real-life success stories from our clients
            </p>
          </Link>

          <Link
            href="/resources/webinars"
            className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Webinars
            </h3>
            <p className="text-gray-600">
              Interactive sessions with industry experts
            </p>
          </Link>

          <Link
            href="/resources/blog"
            className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Blog</h3>
            <p className="text-gray-600">
              Latest trends and tips in healthcare
            </p>
          </Link>

          <Link
            href="/resources/faqs"
            className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">FAQs</h3>
            <p className="text-gray-600">Our frequently asked questions</p>
          </Link>

          <Link
            href="/resources/csr"
            className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              CSR Initiatives
            </h3>
            <p className="text-gray-600">Support our community projects</p>
          </Link>

          <Link
            href="/resources/certifications"
            className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Certifications
            </h3>
            <p className="text-gray-600">Verified Trust and Compliance</p>
          </Link>

          <Link
            href="/resources/news-events"
            className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              News & Events
            </h3>
            <p className="text-gray-600">Stay Informed with Sage</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
