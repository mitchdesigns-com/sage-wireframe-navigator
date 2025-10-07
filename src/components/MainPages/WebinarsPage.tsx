import FeatureSection from '@/components/sections/FeatureSection'
import HeroPages from '@/components/sections/HeroPages'
import WebinarHighlights from '@/components/sections/WebinarHighlights'
import WebinarList from '@/components/sections/WebinarList'
import { EventData } from '../../types/newsEvents'
import { WebinarsPageData } from '../../types/webinarsPage'

interface WebinarsPageProps {
  data: {
    webinar: WebinarsPageData
    events: EventData[]
  }
}
export default function WebinarsPage({ data }: WebinarsPageProps) {
  const { webinar, events } = data
  return (
    <div className="min-h-screen ">
      <HeroPages {...webinar.HeroPages} />
      {webinar.FeatureSection.map((section, index) => (
        <FeatureSection key={index} {...section} />
      ))}
      <WebinarHighlights
        title={webinar.WebinarHighlights.title}
        highlights={webinar.WebinarHighlights.highlights}
      />
      <WebinarList webinars={webinar.WebinarList} events={events} />
    </div>
  )
}
