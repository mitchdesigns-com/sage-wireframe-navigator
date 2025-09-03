export const runtime = 'edge'

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Healthcare Guides
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Comprehensive healthcare resources and insights to help you make
          informed decisions.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600">
            Our comprehensive healthcare guides are being prepared. Check back
            soon for detailed insights and resources.
          </p>
        </div>
      </div>
    </div>
  )
}
