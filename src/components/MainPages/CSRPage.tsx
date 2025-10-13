import CSRForm from '@/components/sections/CSRForm'
import FeatureSection from '@/components/sections/FeatureSection'
import HeroPages from '@/components/sections/HeroPages'
import { CSRPageData } from '../../types/csr'

export default function CSRPage({ data }: { data: CSRPageData }) {
  return (
    <div className="min-h-screen">
      <HeroPages {...data.HeroPages} />

      {data.FeatureSection.map((section, index) => (
        <FeatureSection key={index} {...section} />
      ))}

      <section className="bg-Secondary-Dark-Palm">
        <div className="max-w-[1392px] mx-auto py-8 md:py-42 px-4 md:px-0">
          <h2
            className="text-white text-2xl md:text-[32px] font-aeonik-light text-center w-full"
            dangerouslySetInnerHTML={{
              __html: data.sageSponsors.title.replace(
                /<span>/g,
                '<span class="text-Primary-Spring font-bold">'
              ),
            }}
          />
        </div>
      </section>

      {data.FeatureSectionLast.map((section, index) => (
        <FeatureSection key={index} {...section} />
      ))}

      <section className="bg-Secondary-Scrub">
        <div className="py-8 md:py-28">
          <div className="max-w-[1392px] mx-auto px-4 md:px-0">
            <div className="text-Neutral-Darkest text-center max-w-[970px] mx-auto pb-8 md:pb-15">
              <span className="text-base font-medium pb-4">
                {data.CSRRegistration.subTitle}
              </span>
              <h6 className="heading-lg pb-4">{data.CSRRegistration.title}</h6>
              <p className="text-base md:text-p">
                {data.CSRRegistration.description}
              </p>
            </div>
            <CSRForm />
          </div>
        </div>
      </section>
    </div>
  )
}
