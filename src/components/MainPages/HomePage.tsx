import HowItWorks from '@/components/sections/HowItWorks'
import Services from '@/components/sections/Services'
import ComprehensiveServices from '@/components/sections/ComprehensiveServices'
import Awards from '@/components/sections/Awards'
import Resources from '@/components/sections/Resources'
import ClientExperiences from '@/components/sections/ClientExperiences'
import DirectionScrollSection from '../../components/ui/DirectionScrollSection'
import HeroWithVideo from '../../components/sections/HeroWithVideo'
import FeatureSection from '../../components/sections/FeatureSection'
import GetInTouch from '../../components/sections/GetInTouch'
import BlogSection from '../../components/sections/BlogSection'
import CentersSection from '../../components/sections/CentersSection'
import { ServicesPageData } from '../../types/homePage'
import { BlogItem } from '../../types/blogs'

export default function HomePage({
  data,
  singles,
}: {
  data: ServicesPageData
  singles: BlogItem[]
}) {
  return (
    <div className="min-h-screen">
      <HeroWithVideo {...data.HeroWithVideo[0]} />
      <Services {...data.SectionHeader} />

      <div className="overflow-hidden ">
        {data.featureSection.map((section, index) => (
          <FeatureSection key={index} {...section} />
        ))}
        <DirectionScrollSection />
        <ComprehensiveServices />
      </div>

      <HowItWorks {...data.HowItWorks} />

      <Awards {...data.Awards} />

      <Resources Resources={data.Resources} />

      {/* Client Experiences */}
      <ClientExperiences {...data.ClientExperiences} />

      {data.CentersSection.map((section, index) => (
        <CentersSection key={index} {...section} secondaryButton={true} />
      ))}
      <BlogSection
        heading={data.BlogSection.heading}
        subheading={data.BlogSection.subheading}
        blogs={singles}
        homePage
      />

      <GetInTouch {...data.GetInTouch} />
    </div>
  )
}
