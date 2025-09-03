export const runtime = 'edge'

export default function CSRPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          CSR Initiatives
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Learn about our corporate social responsibility projects and community
          support programs.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600">
            Discover our community-focused projects and how we're making a
            positive impact in healthcare accessibility.
          </p>
        </div>
      </div>
    </div>
  )
}
