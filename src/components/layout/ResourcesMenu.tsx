'use client'

/**
 * Resources Menu component matching Figma design
 *
 * This component implements the exact resources dropdown design from Figma
 * organized in three columns with icons and descriptions
 */

import Link from 'next/link'
import { motion } from 'framer-motion'

// Icon components matching Figma design
function DocumentScannerIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 21 23"
    >
      <path
        d="M0 3.70275V1.70325C0 1.23492 0.166833 0.834001 0.5005 0.5005C0.834 0.166834 1.23492 0 1.70325 0H3.70875C3.94108 0 4.13517 0.0782504 4.291 0.23475C4.44667 0.391417 4.5245 0.586583 4.5245 0.82025C4.5245 1.05392 4.44667 1.2485 4.291 1.404C4.13517 1.55967 3.94108 1.6375 3.70875 1.6375H1.6375V3.70875C1.6375 3.94108 1.55925 4.13517 1.40275 4.291C1.24608 4.44667 1.05092 4.5245 0.81725 4.5245C0.583583 4.5245 0.389 4.44567 0.2335 4.288C0.0778332 4.13017 0 3.93508 0 3.70275Z"
        fill="var(--fill-0, #9EBB80)"
      />
    </svg>
  )
}

function PersonCheckIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 22 17"
    >
      <path
        d="M16.8608 5.27725L20.3765 1.7615C20.5447 1.59167 20.7432 1.50775 20.972 1.50975C21.2007 1.51158 21.4 1.59758 21.57 1.76775C21.74 1.93775 21.825 2.14017 21.825 2.375C21.825 2.60967 21.74 2.81133 21.57 2.98L17.4635 7.0985C17.2882 7.2685 17.086 7.3535 16.857 7.3535C16.628 7.3535 16.4283 7.2685 16.258 7.0985L14.2227 5.06325C14.0527 4.89058 13.9687 4.68683 13.9707 4.452C13.9727 4.217 14.0587 4.01458 14.2287 3.84475C14.3986 3.67475 14.5975 3.58975 14.8255 3.58975C15.0533 3.58975 15.2543 3.67475 15.4283 3.84475L16.8608 5.27725Z"
        fill="var(--fill-0, #9EBB80)"
      />
    </svg>
  )
}

function VideoLibraryIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 21 21"
    >
      <path
        d="M14.632 9.19625C14.8392 9.06608 14.9427 8.88542 14.9427 8.65425C14.9427 8.42308 14.8392 8.24125 14.632 8.10875L9.8635 5.04225C9.65233 4.89308 9.43375 4.88033 9.20775 5.004C8.98192 5.12783 8.869 5.32083 8.869 5.583V11.7218C8.869 11.9839 8.98192 12.1769 9.20775 12.3008C9.43375 12.4244 9.65233 12.4117 9.8635 12.2625L14.632 9.19625Z"
        fill="var(--fill-0, #9EBB80)"
      />
    </svg>
  )
}

function EditDocumentIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 20 21"
    >
      <path
        d="M10.1318 19.4533V17.4462C10.1318 17.3416 10.1513 17.2402 10.1905 17.142C10.2298 17.044 10.2952 16.9485 10.3865 16.8555L15.6768 11.5862C15.8374 11.4256 16.0158 11.3087 16.212 11.2355C16.4082 11.1622 16.6032 11.1255 16.797 11.1255C17.0087 11.1255 17.2112 11.166 17.4045 11.247C17.598 11.328 17.7755 11.4475 17.937 11.6055L18.862 12.5305C19.0195 12.689 19.1338 12.8652 19.2048 13.059C19.2756 13.2528 19.311 13.4467 19.311 13.6405C19.311 13.8397 19.2714 14.0396 19.1923 14.2402C19.1133 14.4411 18.9942 14.6224 18.835 14.7843L13.587 20.056C13.4948 20.1473 13.3997 20.2117 13.3015 20.249C13.2035 20.2863 13.0997 20.305 12.9902 20.305H10.9833C10.7429 20.305 10.5409 20.2232 10.3773 20.0595C10.2136 19.8958 10.1318 19.6938 10.1318 19.4533Z"
        fill="var(--fill-0, #9EBB80)"
      />
    </svg>
  )
}

function LiveHelpIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 19 22"
    >
      <path
        d="M6.08975 18.305H1.70325C1.24325 18.305 0.844417 18.1319 0.50675 17.7858C0.168917 17.4398 0 17.0451 0 16.6018V1.70925C0 1.24758 0.168917 0.847333 0.50675 0.508499C0.844417 0.169499 1.24325 0 1.70325 0H16.5957C17.0407 0 17.4368 0.169499 17.784 0.508499C18.1313 0.847333 18.305 1.24758 18.305 1.70925V16.6018C18.305 17.0451 18.1313 17.4398 17.784 17.7858C17.4368 18.1319 17.0407 18.305 16.5957 18.305H12.2153L9.75225 20.768C9.58092 20.938 9.37967 21.023 9.1485 21.023C8.91733 21.023 8.71675 20.938 8.54675 20.768L6.08975 18.305Z"
        fill="var(--fill-0, #9EBB80)"
      />
    </svg>
  )
}

function PartnerExchangeIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 23 19"
    >
      <path
        d="M10.5765 5.53475L8.56125 3.4945C8.39142 3.3245 8.3065 3.12458 8.3065 2.89475C8.3065 2.66492 8.39142 2.465 8.56125 2.295L10.5765 0.25475C10.7465 0.0849167 10.9464 0 11.1762 0C11.4061 0 11.606 0.0849167 11.776 0.25475L13.8162 2.295C13.9861 2.465 14.071 2.66492 14.071 2.89475C14.071 3.12458 13.9861 3.3245 13.8162 3.4945L11.776 5.53475C11.606 5.70458 11.4061 5.7895 11.1762 5.7895C10.9464 5.7895 10.7465 5.70458 10.5765 5.53475Z"
        fill="var(--fill-0, #9EBB80)"
      />
    </svg>
  )
}

function VerifiedIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 22 21"
    >
      <path
        d="M9.8615 11.5867L8.0665 9.71044C7.9075 9.53594 7.71492 9.44869 7.48875 9.44869C7.26258 9.44869 7.06217 9.52561 6.8875 9.67944C6.713 9.85611 6.62575 10.0573 6.62575 10.2829C6.62575 10.5086 6.713 10.7088 6.8875 10.8834L9.25875 13.2294C9.43008 13.4034 9.63133 13.4904 9.8625 13.4904C10.0937 13.4904 10.2942 13.4034 10.4642 13.2294L14.9855 8.73344C15.1433 8.57944 15.2223 8.38811 15.2223 8.15944C15.2223 7.93078 15.135 7.73744 14.9605 7.57944C14.8025 7.44228 14.6143 7.37786 14.396 7.38619C14.1777 7.39453 13.9998 7.46928 13.8625 7.61044L9.8615 11.5867Z"
        fill="var(--fill-0, #9EBB80)"
      />
    </svg>
  )
}

function BreakingNewsIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 21 19"
    >
      <path
        d="M5.3795 13.8755H8.3795C8.588 13.8755 8.76508 13.8032 8.91075 13.6587C9.05658 13.5141 9.1295 13.3349 9.1295 13.1212C9.1295 12.9114 9.05658 12.7347 8.91075 12.591C8.76508 12.4473 8.588 12.3755 8.3795 12.3755H5.3795C5.167 12.3755 4.98883 12.4488 4.845 12.5955C4.70133 12.742 4.6295 12.9212 4.6295 13.133C4.6295 13.3447 4.70133 13.5213 4.845 13.663C4.98883 13.8047 5.167 13.8755 5.3795 13.8755Z"
        fill="var(--fill-0, #9EBB80)"
      />
    </svg>
  )
}

function ArticlePersonIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 20 19"
    >
      <path
        d="M1.70325 16.6017V1.70925V6.9925V6.23925V16.6017ZM4.8545 9.9055H9.7045C9.917 9.9055 10.0951 9.83317 10.2388 9.6885C10.3826 9.544 10.4545 9.36483 10.4545 9.151C10.4545 8.93733 10.3826 8.75967 10.2388 8.618C10.0951 8.47633 9.917 8.4055 9.7045 8.4055H4.8545C4.642 8.4055 4.46383 8.47783 4.32 8.6225C4.17633 8.767 4.1045 8.94617 4.1045 9.16C4.1045 9.37367 4.17633 9.55133 4.32 9.693C4.46383 9.83467 4.642 9.9055 4.8545 9.9055Z"
        fill="var(--fill-0, #9EBB80)"
      />
    </svg>
  )
}

function PhoneInTalkIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 19 19"
    >
      <path
        d="M17.3895 8.87473C17.1978 8.87473 17.0278 8.80606 16.8795 8.66873C16.7312 8.53139 16.6384 8.35673 16.6012 8.14473C16.3679 6.44006 15.6417 4.97823 14.4225 3.75923C13.2035 2.54023 11.7417 1.81206 10.037 1.57473C9.825 1.54139 9.65033 1.44981 9.513 1.29998C9.37567 1.15031 9.307 0.969477 9.307 0.757477C9.307 0.529643 9.385 0.339642 9.541 0.187476C9.697 0.0351423 9.88733 -0.0243566 10.112 0.00897676C12.2365 0.252143 14.0493 1.12548 15.5503 2.62898C17.0513 4.13231 17.9254 5.94589 18.1727 8.06973C18.2061 8.29439 18.1432 8.48473 17.984 8.64073C17.8247 8.79673 17.6265 8.87473 17.3895 8.87473Z"
        fill="var(--fill-0, #9EBB80)"
      />
    </svg>
  )
}

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
        <div className="flex gap-8 items-start justify-start">
          {/* Column 1 */}
          <div className="flex-1 flex flex-col gap-2 h-[358px]">
            {resourceItems.column1.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={onClose}
                className="flex gap-2 items-start px-3 py-4 rounded-[10px] hover:bg-white/50 transition-colors duration-200 w-80"
              >
                <div className="relative shrink-0 size-6 text-primary-light-sage">
                  {item.icon}
                </div>
                <div className="flex flex-col items-start justify-start flex-1">
                  <div className="font-aeonik-bold text-primary-black text-base leading-[1.5]">
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
                className="flex gap-2 items-start px-3 py-4 rounded-[10px] hover:bg-white/50 transition-colors duration-200 w-80"
              >
                <div className="relative shrink-0 size-6 text-primary-light-sage">
                  {item.icon}
                </div>
                <div className="flex flex-col items-start justify-start flex-1">
                  <div className="font-aeonik-bold text-primary-black text-base leading-[1.5]">
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
                className="flex gap-2 items-start px-3 py-4 rounded-[10px] hover:bg-white/50 transition-colors duration-200 w-80"
              >
                <div className="relative shrink-0 size-6 text-primary-light-sage">
                  {item.icon}
                </div>
                <div className="flex flex-col items-start justify-start flex-1">
                  <div className="font-aeonik-bold text-primary-black text-base leading-[1.5]">
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
          <div className="bg-gray-300 rounded-[24px] w-[314px] h-[386px] flex-shrink-0">
            {/* Placeholder for healthcare image */}
            <div className="w-full h-full rounded-[24px] bg-gradient-to-br from-primary-scrub/20 to-primary-palm/20 flex items-center justify-center">
              <div className="text-primary-palm/50 text-lg">
                Healthcare Resources
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
