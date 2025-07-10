import Button from '@/components/ui/Button'
import { Image as ImageIcon, User } from 'lucide-react'

const newsArticles = [
  {
    id: 1,
    category: 'News',
    title: 'Sage Partners with Local Clinics',
    description:
      'Sage enhances healthcare access through strategic partnerships with local clinics across Saudi Arabia.',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
    href: '/news/sage-partners-local-clinics',
  },
  {
    id: 2,
    category: 'News',
    title: 'Sage Wins Healthcare Innovation Award',
    description:
      'Recognized for excellence in healthcare services and innovative patient care solutions.',
    author: 'Jane Smith',
    date: '22 Feb 2023',
    readTime: '4 min read',
    href: '/news/healthcare-innovation-award',
  },
  {
    id: 3,
    category: 'News',
    title: 'Sage Attends Global Health Conference',
    description:
      'Engaging with international leaders to shape the future of healthcare delivery.',
    author: 'Alex Johnson',
    date: '10 Jan 2023',
    readTime: '5 min read',
    href: '/news/global-health-conference',
  },
]

export default function NewsEvents() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-4 text-sm font-medium text-gray-600">
            News & Events
          </div>
          <h2 className="mb-6 max-w-3xl text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Stay Informed About Our Latest Developments
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
            Discover the latest news and events at Sage. We are committed to
            keeping you informed about advancements in healthcare and our
            services.
          </p>
        </div>

        {/* News Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <article key={article.id} className="group">
              {/* Article Image */}
              <div className="mb-6 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gray-200">
                <div className="text-center text-gray-400">
                  <div className="mx-auto mb-2 flex h-12 w-16 items-center justify-center rounded-lg bg-gray-400">
                    <ImageIcon className="h-8 w-8 text-gray-500" />
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="space-y-4">
                {/* Category */}
                <div className="text-sm font-medium text-gray-600">
                  {article.category}
                </div>

                {/* Title */}
                <h3 className="group-hover:text-sage-600 text-xl font-bold text-gray-900 transition-colors duration-200">
                  <a href={article.href}>{article.title}</a>
                </h3>

                {/* Description */}
                <p className="leading-relaxed text-gray-600">
                  {article.description}
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                    <User className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-900">
                      {article.author}
                    </span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-500">{article.date}</span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-500">{article.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-left">
          <Button href="/news">Learn More</Button>
        </div>
      </div>
    </section>
  )
}
