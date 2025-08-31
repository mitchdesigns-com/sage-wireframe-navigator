import Button from '@/components/ui/Button'

const steps = [
  {
    number: '1',
    title: 'Initial Consultation',
    description:
      "Connect with our team to discuss your healthcare needs. We'll provide personalized options tailored to you.",
  },
  {
    number: '2',
    title: 'Treatment Planning',
    description:
      'Receive a detailed treatment plan outlining your options. Our team coordinates every detail for your comfort.',
  },
  {
    number: '3',
    title: 'Undergoing Treatment',
    description:
      'Experience world-class medical care in a supportive environment. Our team is available to assist you throughout your treatment.',
  },
  {
    number: '4',
    title: 'Post-Treatment Care',
    description:
      'Receive ongoing support and follow-up consultations. We ensure your recovery is as smooth as possible.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding bg-Secondary-Light-Scrub overflow-visible">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 items-start gap-20 md:grid-cols-2">
          {/* Left Content */}
          <div className="md:sticky md:top-24">
            <div className="mb-4 text-sm font-medium text-gray-600">
              How It Works
            </div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Your Path to Exceptional Healthcare Awaits
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Experience a seamless journey from your first inquiry to
              post-treatment care. Our dedicated team is here to guide you every
              step of the way.
            </p>
          </div>

          {/* Right Content - Timeline Steps */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute bottom-0 left-3 top-0 -z-10 w-px bg-gray-900"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.number + index}
                  className="relative flex items-start"
                >
                  {/* Timeline Dot */}
                  <div className="-ml-px h-6 w-6 flex-shrink-0 rounded-full bg-gray-900"></div>

                  {/* Step Content */}
                  <div className="ml-8 pb-8">
                    <div className="mb-3">
                      <span className="heading-3 font-bold">
                        Step {step.number}
                      </span>
                    </div>
                    <h3 className="mb-8 heading-4">{step.title}</h3>
                    <p className="max-w-md text-medium">{step.description}</p>

                    {index === steps.length - 1 && (
                      <div className="mt-5">
                        <Button href="/contact">
                          Request Free Consultation
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
