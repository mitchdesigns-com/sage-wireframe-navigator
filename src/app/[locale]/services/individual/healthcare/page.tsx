'use client'
export const runtime = 'edge'

import Button from '@/components/ui/Button'
import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  Heart,
  Info,
  Users,
} from 'lucide-react'
import Image from 'next/image'

// Placeholder image URLs matching the Figma design
const heroImage =
  'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80'
const serviceImage =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=640&q=80'
const commitmentImage =
  'https://images.unsplash.com/photo-1559757175-0eb15c5ceae8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=640&q=80'
const timelineImages = [
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=448&h=448&q=80',
  'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=448&h=448&q=80',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=448&h=448&q=80',
  'https://images.unsplash.com/photo-1559757175-0eb15c5ceae8?ixlib=rb-4.0.3&auto=format&fit=crop&w=448&h=448&q=80',
]

const whySaudiReasons = [
  {
    title: 'Accreditation',
    value: 'Quality Care',
  },
  {
    title: 'Affordability',
    value: 'Cost Effective',
  },
  {
    title: 'Hospitality',
    value: 'Cultural Warmth',
  },
  {
    title: 'Safety',
    value: 'Patient Trust',
  },
]

const healthcareFeatures = [
  {
    icon: CheckCircle2,
    title: 'Case matching with top hospitals for optimal care.',
  },
  {
    icon: Calendar,
    title: 'Efficient appointment scheduling for your convenience.',
  },
  {
    icon: Info,
    title: 'Expert second opinions to ensure informed decisions.',
  },
]

const commitmentFeatures = [
  {
    icon: Users,
    title: 'Dedicated Manager',
    description:
      'Experience one-on-one support from a dedicated care manager focused on your needs.',
  },
  {
    icon: Heart,
    title: 'Multilingual Support',
    description:
      'Our team speaks your language to ensure clear communication and understanding.',
  },
]

const timelineSteps = [
  {
    number: 'Step 1',
    title: 'Submit Your Request',
    description:
      "Reach out to us with your medical needs. We'll begin the process immediately.",
    image: timelineImages[0],
  },
  {
    number: 'Step 2',
    title: 'Get Matched',
    description:
      'We connect you with the best hospitals suited for your needs. Expect personalized care tailored to you.',
    image: timelineImages[1],
  },
  {
    number: 'Step 3',
    title: 'Receive Your Plan',
    description:
      "Once matched, you'll receive a comprehensive treatment plan. We ensure clarity and understanding.",
    image: timelineImages[2],
  },
  {
    number: 'Step 4',
    title: 'Travel & Treat',
    description:
      "Travel with confidence knowing we've arranged everything. Focus on your recovery while we handle the rest.",
    image: timelineImages[3],
  },
]

export default function HealthcareServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[1024px] bg-white">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />

        {/* Hero Content */}
        <div className="relative h-full flex items-end">
          <div className="w-full px-16 py-20">
            <div className="max-w-[1280px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="space-y-2">
                  <div className="text-[#000000] text-base font-normal leading-[1.5]">
                    Healthcare Services for Individuals
                  </div>
                  <h1 className="text-black font-bold text-[56px] leading-[1.2] tracking-[-0.56px] w-[498px]">
                    <span className="font-normal">
                      Your Trusted Partner for{' '}
                    </span>
                    <span className="font-bold">Healthcare</span>
                  </h1>
                </div>
                <div className="space-y-8">
                  <p className="text-black text-[18px] leading-[1.5]">
                    At Sage, we understand that navigating healthcare can be
                    overwhelming. Our dedicated team is here to guide you
                    through every step of your medical journey in Saudi Arabia.
                  </p>
                  <Button
                    //  variant="outline"
                    size="large"
                    className="bg-[rgba(0,4,4,0.05)] border-transparent hover:bg-gray-100 flex items-center gap-3 px-6 py-2.5 rounded-full"
                  >
                    <span className="text-black text-base font-medium">
                      Request Free Consultation
                    </span>
                    <ChevronRight size={24} className="text-black" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Saudi Arabia Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div className="w-[464px] flex items-center lg:sticky lg:top-24">
                <h2 className="text-black font-bold text-[40px] leading-[1.2] tracking-[-0.4px]">
                  Why Choose Saudi Arabia for Medical Care?
                </h2>
              </div>

              <div className="space-y-20">
                <div className="space-y-4">
                  <p className="text-black text-base leading-[1.5]">
                    Saudi Arabia is rapidly becoming a leading destination for
                    medical tourism, attracting international patients with its
                    state-of-the-art healthcare facilities and highly skilled
                    professionals. The country boasts advanced hospitals that
                    are internationally accredited, ensuring that patients
                    receive top-notch medical care. With a commitment to
                    innovation and excellence, Saudi Arabia is aligned with
                    Vision 2030, which aims to enhance the quality of life and
                    elevate the healthcare sector.
                  </p>
                  <p className="text-black text-base leading-[1.5]">
                    In addition to world-class medical services, Saudi Arabia
                    offers affordability that appeals to international patients.
                    The cost of treatment is often significantly lower than in
                    many Western countries, making it a viable option for those
                    seeking specialized care without breaking the bank. This
                    combination of quality and cost-effectiveness positions
                    Saudi Arabia as a smart choice for medical travelers.
                  </p>
                  <p className="text-black text-base leading-[1.5]">
                    Cultural hospitality is another hallmark of the Saudi
                    healthcare experience. Patients and their families are
                    welcomed with warmth and respect, ensuring a comfortable
                    environment during their medical journey. The healthcare
                    system prioritizes patient satisfaction, making every effort
                    to address individual needs and concerns.
                  </p>
                  <p className="text-black text-base leading-[1.5]">
                    For those considering medical treatment abroad, Saudi Arabia
                    stands out for its commitment to patient safety and care.
                    The rigorous standards maintained by healthcare facilities
                    ensure that patients can trust the services they receive,
                    fostering peace of mind during what can be a stressful time.
                  </p>
                  <p className="text-black text-base leading-[1.5]">
                    Choosing Saudi Arabia means choosing a future of health and
                    wellness, supported by a healthcare system that values
                    compassion, expertise, and innovation.
                  </p>
                </div>

                <div className="border-0 border-b border-[rgba(0,4,4,0.02)]">
                  {whySaudiReasons.map((reason, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-5 border-t border-[rgba(0,4,4,0.02)]"
                    >
                      <h3 className="text-black font-bold text-[20px] leading-[1.4] tracking-[-0.2px]">
                        {reason.title}
                      </h3>
                      <span className="text-black text-base leading-[1.5]">
                        {reason.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Healthcare Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                      Comprehensive Healthcare Tailored for You
                    </h2>
                    <p className="text-black text-[18px] leading-[1.5]">
                      At Sage, we provide a range of specialized medical
                      services designed to meet your unique healthcare needs.
                      Trust us to facilitate your journey to health with
                      personalized care and expert guidance.
                    </p>
                  </div>

                  <div className="space-y-4 py-2">
                    {healthcareFeatures.map((feature, index) => (
                      <div key={index} className="flex gap-4 items-center">
                        <feature.icon
                          size={16}
                          className="text-black shrink-0"
                        />
                        <p className="text-black text-base leading-[1.5]">
                          {feature.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  //  variant="outline"
                  size="large"
                  className="bg-[rgba(0,4,4,0.05)] border-transparent hover:bg-gray-100 flex items-center gap-3 px-6 py-2.5 rounded-full"
                >
                  <span className="text-black text-base font-medium">
                    Request Free Consultation
                  </span>
                  <ChevronRight size={24} className="text-black" />
                </Button>
              </div>

              <div className="aspect-[600/640] relative rounded-[40px] overflow-hidden">
                <Image
                  fill
                  src={serviceImage}
                  alt="Comprehensive Healthcare Services"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Health, Our Commitment Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="aspect-[600/640] relative rounded-[40px] overflow-hidden">
                <Image
                  fill
                  src={commitmentImage}
                  alt="Your Health, Our Commitment"
                  className="object-cover"
                />
              </div>

              <div className="space-y-8">
                <div className="space-y-1">
                  <div className="space-y-6">
                    <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                      Your Health, Our Commitment to You
                    </h2>
                    <p className="text-black text-[18px] leading-[1.5]">
                      At Sage, we prioritize your well-being with personalized
                      support throughout your medical journey. Our dedicated
                      team is here to ensure you receive the best care tailored
                      to your needs.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                      {commitmentFeatures.map((feature, index) => (
                        <div key={index} className="space-y-4">
                          <feature.icon size={48} className="text-black" />
                          <h3 className="text-black font-bold text-[20px] leading-[1.4] tracking-[-0.2px]">
                            {feature.title}
                          </h3>
                          <p className="text-black text-base leading-[1.5]">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  //  variant="outline"
                  size="large"
                  className="bg-[rgba(0,4,4,0.05)] border-transparent hover:bg-gray-100 flex items-center gap-3 px-6 py-2.5 rounded-full"
                >
                  <span className="text-black text-base font-medium">
                    Request Free Consultation
                  </span>
                  <ChevronRight size={24} className="text-black" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Timeline Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[768px] mx-auto space-y-20 text-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-black font-medium text-base leading-[1.5]">
                    How It Works
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px] w-[630px] mx-auto">
                      Your Path to Exceptional Healthcare
                    </h2>
                    <p className="text-black text-[18px] leading-[1.5]">
                      Navigating healthcare can be overwhelming. Our patient
                      journey simplifies every step.
                    </p>
                  </div>
                </div>

                <Button
                  //  variant="outline"
                  size="large"
                  className="bg-[rgba(0,4,4,0.05)] border-transparent hover:bg-gray-100 flex items-center gap-3 px-6 py-2.5 rounded-full"
                >
                  <span className="text-black text-base font-medium">
                    Request Free Consultation
                  </span>
                  <ChevronRight size={24} className="text-black" />
                </Button>
              </div>
            </div>

            {/* Timeline Steps */}
            <div className="space-y-0 mt-20">
              {timelineSteps.map((step, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                >
                  {/* Content - Left or Right based on index */}
                  {index % 2 === 0 ? (
                    <>
                      {/* Image on Left */}
                      <div className="lg:col-span-5 pb-12">
                        <div className="aspect-square relative rounded-[40px] overflow-hidden w-[448px] ml-auto">
                          <Image
                            fill
                            src={step.image}
                            alt={step.title}
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Timeline Line */}
                      <div className="lg:col-span-2 flex justify-center">
                        <div className="flex flex-col items-center h-full min-h-[400px]">
                          <div className="bg-black h-6 w-[3px]" />
                          <div className="w-[15px] h-[15px] bg-black rounded-full my-2" />
                          <div className="bg-black flex-1 w-[3px]" />
                        </div>
                      </div>

                      {/* Content on Right */}
                      <div className="lg:col-span-5 pt-4 space-y-8">
                        <div className="space-y-6">
                          <h3 className="text-black font-bold text-[40px] leading-[1.2] tracking-[-0.4px]">
                            {step.number}
                          </h3>
                          <h4 className="text-black font-bold text-[32px] leading-[1.3] tracking-[-0.32px]">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-black text-[18px] leading-[1.5]">
                          {step.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Content on Left */}
                      <div className="lg:col-span-5 pt-4 space-y-8 text-right">
                        <div className="space-y-6">
                          <h3 className="text-black font-bold text-[40px] leading-[1.2] tracking-[-0.4px]">
                            {step.number}
                          </h3>
                          <h4 className="text-black font-bold text-[32px] leading-[1.3] tracking-[-0.32px]">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-black text-[18px] leading-[1.5]">
                          {step.description}
                        </p>
                      </div>

                      {/* Timeline Line */}
                      <div className="lg:col-span-2 flex justify-center">
                        <div className="flex flex-col items-center h-full min-h-[400px]">
                          <div className="bg-black h-8 w-[3px]" />
                          <div className="w-[15px] h-[15px] bg-black rounded-full my-2" />
                          <div className="bg-black flex-1 w-[3px]" />
                        </div>
                      </div>

                      {/* Image on Right */}
                      <div className="lg:col-span-5 pb-8">
                        <div className="aspect-square relative rounded-[40px] overflow-hidden w-[448px]">
                          <Image
                            fill
                            src={step.image}
                            alt={step.title}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
