import Button from '@/components/ui/Button'
import Tagline from './Tagline'

const steps = [
  {
    number: '01.',
    title: 'Initial Consultation',
    description:
      "Connect with our team to discuss your healthcare needs. We'll provide personalized options tailored to you.",
  },
  {
    number: '02.',
    title: 'Treatment Planning',
    description:
      'Receive a detailed treatment plan outlining your options. Our team coordinates every detail for your comfort.',
  },
  {
    number: '03.',
    title: 'Undergoing Treatment',
    description:
      'Experience world-class medical care in a supportive environment. Our team is available to assist you throughout your treatment.',
  },
  {
    number: '04.',
    title: 'Post-Treatment Care',
    description:
      'Receive ongoing support and follow-up consultations. We ensure your recovery is as smooth as possible.',
  },
]

export default function HowItWorks() {
  return (
    <section className="p-25 bg-Secondary-Light-Scrub overflow-visible">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 items-start gap-20 md:grid-cols-2">
          {/* Left Content */}
          <div className="md:sticky md:top-24 bg-Primary-Palm rounded-3xl">
            <div className="p-10">
              <Tagline text="How It Works" />
              {/* <div className="mb-4 text-sm font-medium text-gray-600">
              
            </div> */}
              <h2 className="mb-6 text-4xl font-bold leading-tight text-Primary-Spring md:text-[40px]">
                Your Path to Exceptional Healthcare Awaits
              </h2>
              <p className="text-lg leading-relaxed text-white">
                Experience a seamless journey from your first inquiry to
                post-treatment care. Our dedicated team is here to guide you
                every step of the way.
              </p>
            </div>
          </div>

          {/* Right Content - Timeline Steps */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute bottom-0 left-3 top-0 -z-10 w-px bg-gray-900"></div>

            <div className="">
              {steps.map((step, index) => (
                <div
                  key={step.number + index}
                  className="relative flex items-start space-x-4"
                >
                  {/* Timeline Dot */}
                  <div className="lg:col-span-1 flex justify-center">
                    <div className="flex flex-col items-center h-full min-h-[200px]">
                      <div className="bg-Primary-Palm h-6 w-[3px]" />
                      <div className="w-[15px] h-[15px] bg-Primary-Scrub rounded-full my-2" />
                      <div className="bg-Primary-Palm flex-1 w-[3px]" />
                    </div>
                  </div>
                  {/* Step Content */}
                  <div className="ml-8 pb-0">
                    <div className="mb-4">
                      <h4 className="text-[#9ABCB9] heading-1">
                        {step.number}
                      </h4>
                    </div>
                    <h3 className="mb-2 heading-4">{step.title}</h3>
                    <p className="max-w-md text-p text-Secondary-Text">
                      {step.description}
                    </p>

                    {index === steps.length - 1 && (
                      <div className="mt-5">
                        <Button href="/contact" rightIcon={true}>
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
