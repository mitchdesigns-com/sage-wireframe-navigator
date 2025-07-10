import Button from '@/components/ui/Button'
import { ArrowRight, Image as ImageIcon } from 'lucide-react'

const networkImages = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
]

export default function JoinNetwork() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Join Our Network and Make a Difference
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Become part of our mission to enhance healthcare and support
              communities through collaboration and innovation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/join">Join</Button>
              <Button
                href="/our-network"
                variant="ghost"
                rightIcon={<ArrowRight size={16} />}
              >
                Explore Our Network
              </Button>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {networkImages.map((image) => (
              <div
                key={image.id}
                className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gray-200 transition-colors duration-200 hover:bg-gray-300"
              >
                <div className="text-center text-gray-400">
                  <div className="mx-auto flex h-8 w-12 items-center justify-center rounded-lg bg-gray-400">
                    <ImageIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
