export const runtime = 'edge'
export default function BusinessConciergePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Concierge Services for Businesses
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Premium concierge services for executives, featuring competitive
          corporate rates.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600">
            Exclusive executive concierge services with corporate pricing are
            being prepared for your team.
          </p>
        </div>
      </div>
    </div>
  )
}
