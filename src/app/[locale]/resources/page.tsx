import Link from 'next/link'
export const runtime = 'edge'

export default function ResourcesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto px-4 py-16 container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-gray-900 text-4xl">Resources</h1>
          <p className="mx-auto max-w-2xl text-gray-600 text-xl">
            Explore our comprehensive collection of healthcare resources,
            insights, and tools to support your healthcare journey.
          </p>
        </div>

        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/resources/guides"
            className="bg-gray-50 hover:shadow-md p-6 rounded-lg transition-shadow"
          >
            <h3 className="mb-2 font-semibold text-gray-900 text-xl">Guides</h3>
            <p className="text-gray-600">Healthcare resources and insights</p>
          </Link>

          <Link
            href="/resources/case-studies"
            className="bg-gray-50 hover:shadow-md p-6 rounded-lg transition-shadow"
          >
            <h3 className="mb-2 font-semibold text-gray-900 text-xl">
              Case Studies
            </h3>
            <p className="text-gray-600">
              Real-life success stories from our clients
            </p>
          </Link>

          <Link
            href="/resources/webinars"
            className="bg-gray-50 hover:shadow-md p-6 rounded-lg transition-shadow"
          >
            <h3 className="mb-2 font-semibold text-gray-900 text-xl">
              Webinars
            </h3>
            <p className="text-gray-600">
              Interactive sessions with industry experts
            </p>
          </Link>

          <Link
            href="/resources/blog"
            className="bg-gray-50 hover:shadow-md p-6 rounded-lg transition-shadow"
          >
            <h3 className="mb-2 font-semibold text-gray-900 text-xl">Blog</h3>
            <p className="text-gray-600">
              Latest trends and tips in healthcare
            </p>
          </Link>

          <Link
            href="/resources/faqs"
            className="bg-gray-50 hover:shadow-md p-6 rounded-lg transition-shadow"
          >
            <h3 className="mb-2 font-semibold text-gray-900 text-xl">FAQs</h3>
            <p className="text-gray-600">Our frequently asked questions</p>
          </Link>

          <Link
            href="/resources/csr"
            className="bg-gray-50 hover:shadow-md p-6 rounded-lg transition-shadow"
          >
            <h3 className="mb-2 font-semibold text-gray-900 text-xl">
              CSR Initiatives
            </h3>
            <p className="text-gray-600">Support our community projects</p>
          </Link>

          <Link
            href="/resources/certifications"
            className="bg-gray-50 hover:shadow-md p-6 rounded-lg transition-shadow"
          >
            <h3 className="mb-2 font-semibold text-gray-900 text-xl">
              Certifications
            </h3>
            <p className="text-gray-600">Verified Trust and Compliance</p>
          </Link>

          <Link
            href="/resources/news-events"
            className="bg-gray-50 hover:shadow-md p-6 rounded-lg transition-shadow"
          >
            <h3 className="mb-2 font-semibold text-gray-900 text-xl">
              News & Events
            </h3>
            <p className="text-gray-600">Stay Informed with Sage</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
