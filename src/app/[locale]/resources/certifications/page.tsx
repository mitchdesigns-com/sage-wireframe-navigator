export const runtime = 'edge'

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Certifications
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Verified trust and compliance certifications that demonstrate our
          commitment to quality healthcare.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600">
            View our official certifications and accreditations that ensure the
            highest standards of care.
          </p>
        </div>
      </div>
    </div>
  )
}
