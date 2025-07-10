import { Award } from 'lucide-react'

const awards = [
  { id: 1, name: 'Healthcare Excellence Award 2024' },
  { id: 2, name: 'Best Medical Tourism Provider' },
  { id: 3, name: 'Saudi Healthcare Innovation' },
  { id: 4, name: 'International Quality Certification' },
  { id: 5, name: 'Patient Satisfaction Excellence' },
  { id: 6, name: 'Global Healthcare Recognition' },
]

export default function Awards() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Awards & Recognition
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-gray-200 rounded-2xl h-32 flex items-center justify-center p-6 hover:bg-gray-300 transition-colors duration-200"
            >
              <div className="text-center">
                <div className="w-16 h-12 mx-auto mb-2 bg-gray-400 rounded-lg flex items-center justify-center">
                  <Award className="w-8 h-8 text-gray-500" />
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  {award.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}