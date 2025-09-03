'use client'
export const runtime = 'edge'

import Button from '@/components/ui/Button'
import {
  ChevronRight,
  Plane,
  UserCheck,
  MapPin,
  Users,
  Headphones,
  Shield,
} from 'lucide-react'
import Image from 'next/image'

// Service features data
const conciergeFeatures = [
  {
    title: 'Travel',
    description: 'Arrangements',
  },
  {
    title: 'Visa',
    description: 'Assistance',
  },
  {
    title: 'Airport',
    description: 'Pickup & Drop-off',
  },
  {
    title: 'Translation',
    description: 'Services',
  },
]

const travelFeatures = [
  {
    icon: Plane,
    title: 'Comprehensive Planning',
    description: 'From flights to local transport, we handle everything.',
  },
  {
    icon: UserCheck,
    title: 'Personalized Service',
    description: 'We ensure your arrival is smooth and welcoming.',
  },
]

const accommodationFeatures = [
  {
    icon: MapPin,
    title: 'Ideal Locations',
    description:
      'Stay close to your treatment while enjoying a peaceful environment.',
  },
  {
    icon: Users,
    title: 'Family Options',
    description:
      "Accommodations for family members ensure you're never alone during recovery.",
  },
]

const supportFeatures = [
  {
    icon: Headphones,
    title: 'Personal Assistance',
    description:
      'Expert help for translations, check-ups, and any unexpected requests during your stay.',
  },
  {
    icon: Shield,
    title: 'Reliable Support',
    description:
      'Your comfort is our priority, ensuring smooth experiences throughout your treatment journey.',
  },
]

export default function ConciergePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative aspect-[1512/631] max-h-[640px] w-full">
        {/* Hero Background Image */}
        <div className="absolute inset-0 bg-center bg-cover bg-no-repeat">
          <Image
            fill
            src="https://placehold.co/1440x1024/f3f4f6/9ca3af?text=Hero+Background"
            alt="Hero Background"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="py-28 bg-white">
        {/* Hero Content */}
        <div className="relative">
          <div className="px-16">
            <div className="max-w-[1280px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-20">
                <div className="space-y-2">
                  <div className="text-black text-base font-normal leading-[1.5]">
                    Concierge Services for Individuals
                  </div>
                  <h1 className="text-black font-bold text-[56px] leading-[1.2] tracking-[-0.56px] w-[600px]">
                    <span className="font-normal">Tailored Premium </span>
                    <span className="font-bold">Healthcare Concierge </span>
                  </h1>
                </div>
                <div className="space-y-8">
                  <p className="text-black text-[18px] leading-[1.5]">
                    Experience seamless healthcare with our dedicated concierge
                    services, designed to provide you peace of mind throughout
                    your journey. From travel arrangements to personalized
                    assistance, we ensure every detail is taken care of for your
                    comfort.
                  </p>
                  <Button size="large">
                    Request Free Consultation
                    <ChevronRight size={24} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What Concierge Services Mean Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div className="w-[464px]  lg:sticky lg:top-24">
                <h2 className="text-black font-bold text-[40px] leading-[1.2] tracking-[-0.4px]">
                  What Concierge Services Mean at Sage?
                </h2>
              </div>
              <div className="space-y-20">
                <div className="space-y-4">
                  <div className="text-black text-base leading-[1.5] space-y-4">
                    <p>
                      At Sage, our concierge services extend far beyond
                      traditional hospitality. We understand that traveling for
                      medical treatment can be overwhelming, which is why we
                      provide comprehensive non-medical support tailored to your
                      unique needs. From seamless travel arrangements to
                      personalized accommodation, we ensure every detail is
                      managed with care and precision.
                    </p>
                    <p>
                      Our dedicated team assists with visa applications, airport
                      pickups, and drop-offs, ensuring a smooth transition upon
                      your arrival. We also offer translation services to bridge
                      any language barriers, making communication effortless
                      during your stay.
                    </p>
                    <p>
                      Accommodation is another vital aspect of our service. We
                      prioritize booking healing-friendly spaces that are not
                      only close to medical facilities but also designed for
                      comfort and recovery. Family members accompanying you will
                      find suitable options that cater to their needs as well.
                    </p>
                    <p>
                      Whether you require dietary considerations or personal
                      guides to navigate local customs, our concierge service is
                      equipped to handle all requests. We aim to create a
                      worry-free experience that allows you to focus on your
                      health and well-being.
                    </p>
                    <p>
                      At Sage, we recognize the importance of companionship,
                      especially for elderly patients. Our team is here to
                      provide support, ensuring that no one feels alone during
                      their journey.
                    </p>
                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-0 border-b border-[rgba(0,4,4,0.02)]">
                  {conciergeFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-5 border-t border-[rgba(0,4,4,0.02)]"
                    >
                      <h3 className="text-black font-bold text-[20px] leading-[1.4] tracking-[-0.2px]">
                        {feature.title}
                      </h3>
                      <div className="text-black text-base leading-[1.5] text-right">
                        {feature.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Door-to-Door Travel Coordination Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-black font-medium text-base leading-[1.5]">
                    Every Step, Handled
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px] w-[640px]">
                      Door-to-Door Travel Coordination for Your Journey
                    </h2>
                    <p className="text-black text-[18px] leading-[1.5]">
                      At Sage, we manage every detail of your travel experience,
                      ensuring a smooth transition from your home to your
                      treatment destination. Our dedicated team takes care of
                      all logistics, allowing you to focus on your health and
                      well-being.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                  {travelFeatures.map((feature, index) => (
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

                <Button size="large">
                  Request Free Consultation
                  <ChevronRight size={24} />
                </Button>
              </div>

              <div className="aspect-[600/640] bg-center bg-cover bg-no-repeat rounded-[40px] relative">
                <Image
                  fill
                  src="https://placehold.co/600x640/f3f4f6/9ca3af?text=Travel+Coordination"
                  alt="Travel Coordination"
                  className="rounded-[40px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Healing Starts with the Right Stay Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="aspect-[600/640] bg-center bg-cover bg-no-repeat rounded-[40px] relative">
                <Image
                  fill
                  src="https://placehold.co/600x640/f3f4f6/9ca3af?text=Accommodation"
                  alt="Accommodation Services"
                  className="rounded-[40px] object-cover"
                />
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-black font-medium text-base leading-[1.5]">
                    Stay Well, Heal Better
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                      Your Healing Starts with the Right Stay
                    </h2>
                    <p className="text-black text-[18px] leading-[1.5]">
                      At Sage, we prioritize your recovery by securing
                      accommodations that are not only close to medical
                      facilities but also designed for tranquility. Our spaces
                      are sanitized, quiet, and tailored for your healing
                      journey.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                  {accommodationFeatures.map((feature, index) => (
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
          </div>
        </div>
      </section>

      {/* Always Here for Your Daily Needs Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-black font-medium text-base leading-[1.5]">
                    Support
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px] w-[517px]">
                      Always Here for Your Daily Needs
                    </h2>
                    <p className="text-black text-[18px] leading-[1.5]">
                      With Sage, you have a dedicated assistant available at all
                      times. Whether in person or via WhatsApp, we ensure your
                      needs are met promptly.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                  {supportFeatures.map((feature, index) => (
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

                <div className="flex gap-6 items-center">
                  <Button size="large">Request Free Consultation</Button>
                </div>
              </div>

              <div className="aspect-[600/640] bg-center bg-cover bg-no-repeat rounded-[40px] relative">
                <Image
                  fill
                  src="https://placehold.co/600x640/f3f4f6/9ca3af?text=Daily+Support"
                  alt="Daily Support Services"
                  className="rounded-[40px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culturally Sensitive Care Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-black font-bold text-[40px] leading-[1.2] tracking-[-0.4px]">
                  Culturally Sensitive Care Tailored to Your Unique Needs
                </h2>
              </div>
              <div>
                <p className="text-black text-[18px] leading-[1.5]">
                  At Sage, we recognize the importance of cultural, dietary, and
                  religious considerations in healthcare. Our team is dedicated
                  to honoring these values, ensuring that your experience is
                  respectful and aligned with your beliefs. Whether you're from
                  the Middle East, Africa, or Asia, we provide personalized
                  support that makes you feel at home.
                </p>
              </div>
            </div>

            <div className="aspect-[1280/738] bg-center bg-cover bg-no-repeat rounded-[40px] relative">
              <Image
                fill
                src="https://placehold.co/1280x738/f3f4f6/9ca3af?text=Cultural+Care"
                alt="Culturally Sensitive Care"
                className="rounded-[40px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Start Your Journey Today CTA Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                    Start Your Journey Today
                  </h2>
                  <p className="text-black text-[18px] leading-[1.5]">
                    Book your free consultation and discover personalized care
                    tailored just for you.
                  </p>
                </div>
                <Button size="large">
                  Request Free Consultation
                  <ChevronRight size={24} />
                </Button>
              </div>

              <div className="aspect-[600/400] bg-center bg-cover bg-no-repeat rounded-[40px] relative">
                <Image
                  fill
                  src="https://placehold.co/600x400/f3f4f6/9ca3af?text=Start+Journey"
                  alt="Start Your Journey"
                  className="rounded-[40px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
