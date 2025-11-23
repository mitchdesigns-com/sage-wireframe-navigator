import Button from '@/components/ui/Button'
import { Image as ImageIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function StartJourney() {
  const t = useTranslations()

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Start Your Journey Today
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Book your free consultation and discover personalized care
              tailored just for you.
            </p>

            {/* CTA Button */}
            <Button href="/contact">
              {' '}
              {t('GeneralContracting.requestFreeConsultation')}
            </Button>
          </div>

          {/* Right Content - Large Image */}
          <div>
            <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-gray-200 transition-colors duration-200 hover:bg-gray-300">
              <div className="text-center text-gray-400">
                <div className="mx-auto mb-4 flex h-14 w-20 items-center justify-center rounded-lg bg-gray-400">
                  <ImageIcon className="h-10 w-10 text-gray-500" />
                </div>
                <p className="text-sm font-medium">
                  Start Your Healthcare Journey
                </p>
                <p className="mt-1 text-xs">Personalized consultation & care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
