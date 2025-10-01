import AccordionJobs from '@/components/sections/AccordionJobs'
import FeatureSection from '@/components/sections/FeatureSection'
import HeroPages from '@/components/sections/HeroPages'

export default function CareersPage({
  data,
  singles,
}: {
  data: any
  singles: any
}) {
  return (
    <div className="min-h-screen">
      <HeroPages {...data.HeroPages} />
      {data.FeatureSection.map((section: any, index: any) => (
        <FeatureSection key={index} {...section} />
      ))}
      <section className="bg-Secondary-Light-Scrub">
        <div className=" mx-auto max-w-[1392px] py-25">
          <h3 className="heading-lg pb-6">{data.jobOpenings.title}</h3>
          <p className="text-Secondary-Text text-lg max-w-[768px]">
            {data.jobOpenings.description}
          </p>
          <div className="pt-15">
            <AccordionJobs data={singles} />
          </div>
        </div>
      </section>
    </div>
  )
}
