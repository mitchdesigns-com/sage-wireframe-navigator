'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import DocumentScannerIcon from '../svg/DocumentScannerIcon'
import PersonCheckIcon from '../svg/PersonCheckIcon'
import VideoLibraryIcon from '../svg/VideoLibraryIcon'
import EditDocumentIcon from '../svg/EditDocumentIcon'
import LiveHelpIcon from '../svg/LiveHelpIcon'
import PartnerExchangeIcon from '../svg/PartnerExchangeIcon'
import VerifiedIcon from '../svg/VerifiedIcon'
import BreakingNewsIcon from '../svg/BreakingNewsIcon'
import ArticlePersonIcon from '../svg/ArticlePersonIcon'
import PhoneInTalkIcon from '../svg/PhoneInTalkIcon'
import Image from 'next/image'

interface ResourcesMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResourcesMenu({ isOpen, onClose }: ResourcesMenuProps) {
  if (!isOpen) return null

  const resourceItems = {
    column1: [
      {
        icon: <DocumentScannerIcon />,
        title: 'Guides',
        description: 'Healthcare resources and insights',
        href: '/resources/guides',
      },
      {
        icon: <PersonCheckIcon />,
        title: 'Case Studies',
        description: 'Real-life success stories from our clients',
        href: '/resources/case-studies',
      },
      {
        icon: <VideoLibraryIcon />,
        title: 'Webinars',
        description: 'Interactive sessions with industry experts',
        href: '/resources/webinars',
      },
      {
        icon: <EditDocumentIcon />,
        title: 'Blog',
        description: 'Latest trends and tips in healthcare',
        href: '/resources/blog',
      },
    ],
    column2: [
      {
        icon: <LiveHelpIcon />,
        title: 'FAQs',
        description: 'Our frequently asked questions',
        href: '/resources/faqs',
      },
      {
        icon: <PartnerExchangeIcon />,
        title: 'CSR Initiatives',
        description: 'Support our community projects',
        href: '/resources/csr',
      },
      {
        icon: <VerifiedIcon />,
        title: 'Certifications',
        description: 'Verified Trust and Compliance',
        href: '/resources/certifications',
      },
      {
        icon: <BreakingNewsIcon />,
        title: 'News & Events',
        description: 'Stay Informed with Sage',
        href: '/resources/news',
      },
    ],
    column3: [
      {
        icon: <ArticlePersonIcon />,
        title: 'Careers',
        description: 'Join our dedicated team',
        href: '/careers',
      },
      {
        icon: <PhoneInTalkIcon />,
        title: 'Contact Us',
        description: "Let's get in touch",
        href: '/contact',
      },
    ],
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-screen bg-white shadow-xl border-t border-gray-200 z-50"
    >
      {/* Menu content */}
      <div className="bg-[#e6eeed] px-[60px] py-8">
        <div className="max-w-[1392px] w-full mx-auto">
          <div className="flex gap-8 items-start justify-start">
            {/* Column 1 */}
            <div className="flex-1 flex flex-col gap-2 h-[358px]">
              {resourceItems.column1.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={onClose}
                  className="group flex gap-2 items-start px-3 py-4 rounded-[10px] hover:bg-Secondary-Light-Scrub transition-colors duration-200 w-80"
                >
                  <div className="relative shrink-0 size-6 text-primary-light-sage group-hover:text-Primary-Scrub">
                    {item.icon}
                  </div>
                  <div className="flex flex-col items-start justify-start flex-1">
                    <div className="font-aeonik-bold text-Neutral-Darkest text-base leading-[1.5]">
                      {item.title}
                    </div>
                    <div className="font-aeonik-regular text-[#626262] text-sm leading-[1.5]">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex-1 flex flex-col gap-2 h-[358px]">
              {resourceItems.column2.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={onClose}
                  className="group flex gap-2 items-start px-3 py-4 rounded-[10px] hover:bg-Secondary-Light-Scrub transition-colors duration-200 w-80"
                >
                  <div className="relative shrink-0 size-6 text-primary-light-sage group-hover:text-Primary-Scrub">
                    {item.icon}
                  </div>
                  <div className="flex flex-col items-start justify-start flex-1">
                    <div className="font-aeonik-bold text-Neutral-Darkest text-base leading-[1.5]">
                      {item.title}
                    </div>
                    <div className="font-aeonik-regular text-[#626262] text-sm leading-[1.5]">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex-1 flex flex-col gap-2 h-[358px]">
              {resourceItems.column3.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={onClose}
                  className="group flex gap-2 items-start px-3 py-4 rounded-[10px] hover:bg-Secondary-Light-Scrub transition-colors duration-200 w-80"
                >
                  <div className="relative shrink-0 size-6 text-primary-light-sage group-hover:text-Primary-Scrub">
                    {item.icon}
                  </div>
                  <div className="flex flex-col items-start justify-start flex-1">
                    <div className="font-aeonik-bold text-Neutral-Darkest text-base leading-[1.5]">
                      {item.title}
                    </div>
                    <div className="font-aeonik-regular text-[#626262] text-sm leading-[1.5]">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Image placeholder */}
            <div className="flex-shrink-0">
              <div className="relative  w-[314px] h-[386px] ">
                <Image
                  src="/images/generalImages/PlaceholderResources.png"
                  alt="Doctor"
                  fill
                  className="rounded-[24px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>{' '}
      </div>
    </motion.div>
  )
}
