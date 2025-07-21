// src/components/ui/FullWidthDropdown.tsx
'use client'

import Link from 'next/link'
import {
  Search,
  FileText,
  Monitor,
  UserCheck,
  HelpCircle,
  Shield,
  BookOpen,
  Newspaper,
  Heart,
  MessageCircle,
  Building,
  Users,
  ChevronRight,
} from 'lucide-react'
import Button from './Button'

interface DropdownItem {
  label: string
  href?: string
  description?: string
  icon?: React.ReactNode
  children?: DropdownItem[]
}

interface FullWidthDropdownProps {
  items: DropdownItem[]
  type: 'services' | 'resources'
  onItemClick: () => void
}

export default function FullWidthDropdown({
  items,
  type,
  onItemClick,
}: FullWidthDropdownProps) {
  if (type === 'services') {
    return <ServicesFullWidthDropdown items={items} onItemClick={onItemClick} />
  }

  return <ResourcesFullWidthDropdown items={items} onItemClick={onItemClick} />
}

// Services Full Width Dropdown
function ServicesFullWidthDropdown({
  onItemClick,
}: {
  items: DropdownItem[]
  onItemClick: () => void
}) {
  return (
    <div className="bg-white">
      <div className="container-custom mx-auto">
        <div className="flex justify-center overflow-hidden">
          <div className="w-full">
            <div className="flex justify-end">
              <div className="flex gap-8 items-start justify-end pl-16 pr-8 py-8 w-full">
                {/* For Individuals */}
                <div className="flex-1 flex flex-col gap-4 h-[296px] items-start justify-start min-h-px min-w-px">
                  <div className="font-bold text-[#000404] text-sm leading-[1.5] text-left">
                    For Individuals
                  </div>
                  <div className="flex flex-col gap-[22px] items-start justify-start">
                    <div className="flex gap-3 h-[61px] items-start justify-start py-2 w-80">
                      <div className="size-6 shrink-0">
                        <Heart size={24} className="text-[#000404]" />
                      </div>
                      <div className="flex-1 flex flex-col grow items-start justify-start text-[#000404] text-left min-h-px min-w-px">
                        <div className="font-bold text-base leading-[1.5] w-full">
                          <p>Healthcare For Your Needs</p>
                        </div>
                        <div className="font-normal text-sm leading-[1.5] w-full">
                          <p>
                            Discover tailored treatments in top Saudi hospitals.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 h-[61px] items-start justify-start py-2 w-80">
                      <div className="size-6 shrink-0">
                        <FileText size={24} className="text-[#000404]" />
                      </div>
                      <div className="flex-1 flex flex-col grow items-start justify-start text-[#000404] text-left min-h-px min-w-px">
                        <div className="font-bold text-base leading-[1.5] w-full">
                          <p>Concierge Services</p>
                        </div>
                        <div className="font-normal text-sm leading-[1.5] w-full">
                          <p>
                            We handle everything from airport transfers to
                            dietary needs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* For Businesses */}
                <div className="flex-1 flex flex-col gap-4 h-[296px] items-start justify-start min-h-px min-w-px">
                  <div className="font-bold text-[#000404] text-sm leading-[1.5] text-left">
                    For Businesses
                  </div>
                  <div className="flex flex-col gap-[22px] items-start justify-start">
                    <div className="flex gap-3 h-[61px] items-start justify-start py-2 w-80">
                      <div className="size-6 shrink-0">
                        <Users size={24} className="text-[#000404]" />
                      </div>
                      <div className="flex-1 flex flex-col grow items-start justify-start text-[#000404] text-left min-h-px min-w-px">
                        <div className="font-bold text-base leading-[1.5] w-full">
                          <p>Healthcare for Your Team</p>
                        </div>
                        <div className="font-normal text-sm leading-[1.5] w-full">
                          <p>
                            We offer customized corporate healthcare and VIP
                            medical access for your employee.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 h-[61px] items-start justify-start py-2 w-80">
                      <div className="size-6 shrink-0">
                        <Building size={24} className="text-[#000404]" />
                      </div>
                      <div className="flex-1 flex flex-col grow items-start justify-start text-[#000404] text-left min-h-px min-w-px">
                        <div className="font-bold text-base leading-[1.5] w-full">
                          <p>Concierge Services</p>
                        </div>
                        <div className="font-normal text-sm leading-[1.5] w-full">
                          <p>
                            We offer concierge services for executives,
                            featuring corporate rates.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 h-[61px] items-start justify-start py-2 w-80">
                      <div className="size-6 shrink-0">
                        <MessageCircle size={24} className="text-[#000404]" />
                      </div>
                      <div className="flex-1 flex flex-col grow items-start justify-start text-[#000404] text-left min-h-px min-w-px">
                        <div className="font-bold text-base leading-[1.5] w-full">
                          <p>Consultation & Training</p>
                        </div>
                        <div className="font-normal text-sm leading-[1.5] w-full">
                          <p>
                            We offer guidance in wellness, medical travel, and
                            healthcare team training.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* For Organizations */}
                <div className="flex-1 flex flex-col gap-4 h-[296px] items-start justify-start min-h-px min-w-px">
                  <div className="font-bold text-[#000404] text-sm leading-[1.5] text-left">
                    For Organizations
                  </div>
                  <div className="flex flex-col gap-[22px] items-start justify-start">
                    <div className="flex gap-3 h-[61px] items-start justify-start py-2 w-80">
                      <div className="size-6 shrink-0">
                        <Shield size={24} className="text-[#000404]" />
                      </div>
                      <div className="flex-1 flex flex-col grow items-start justify-start text-[#000404] text-left min-h-px min-w-px">
                        <div className="font-bold text-base leading-[1.5] w-full">
                          <p>Healthcare Services</p>
                        </div>
                        <div className="font-normal text-sm leading-[1.5] w-full">
                          <p>
                            We streamline cross-border care with
                            institutional-level coordination.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 h-[61px] items-start justify-start py-2 w-80">
                      <div className="size-6 shrink-0">
                        <UserCheck size={24} className="text-[#000404]" />
                      </div>
                      <div className="flex-1 flex flex-col grow items-start justify-start text-[#000404] text-left min-h-px min-w-px">
                        <div className="font-bold text-base leading-[1.5] w-full">
                          <p>Concierge Services</p>
                        </div>
                        <div className="font-normal text-sm leading-[1.5] w-full">
                          <p>
                            We manage group concierge services with compliance
                            and care.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 h-[61px] items-start justify-start py-2 w-80">
                      <div className="size-6 shrink-0">
                        <HelpCircle size={24} className="text-[#000404]" />
                      </div>
                      <div className="flex-1 flex flex-col grow items-start justify-start text-[#000404] text-left min-h-px min-w-px">
                        <div className="font-bold text-base leading-[1.5] w-full">
                          <p>Consultation & Training</p>
                        </div>
                        <div className="font-normal text-sm leading-[1.5] w-full">
                          <p>
                            We consult on public health programs, medical
                            tourism, and system optimization.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col gap-2.5 items-center justify-center py-[30px] w-full">
          <div className="flex gap-4 items-start justify-start">
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="bg-[rgba(0,4,4,0.05)] border-none hover:bg-gray-100 flex items-center gap-3"
              onClick={onItemClick}
            >
              Explore All Services
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Resources Full Width Dropdown
function ResourcesFullWidthDropdown({
  onItemClick,
}: {
  items: DropdownItem[]
  onItemClick: () => void
}) {
  // Resource items as shown in the Figma design
  const resourceColumns = [
    // Column 1
    [
      {
        icon: <Search size={24} className="text-[#000404]" />,
        title: 'Guides',
        description: 'Comprehensive healthcare resources and insights',
        href: '/resources/guides',
      },
      {
        icon: <FileText size={24} className="text-[#000404]" />,
        title: 'Case Studies',
        description: 'Real-life success stories from our clients',
        href: '/resources/case-studies',
      },
      {
        icon: <Monitor size={24} className="text-[#000404]" />,
        title: 'Webinars',
        description: 'Interactive sessions with industry experts',
        href: '/resources/webinars',
      },
      {
        icon: <UserCheck size={24} className="text-[#000404]" />,
        title: 'Blog',
        description: 'Latest trends and tips in healthcare',
        href: '/resources/blog',
      },
    ],
    // Column 2
    [
      {
        icon: <HelpCircle size={24} className="text-[#000404]" />,
        title: 'FAQs',
        description: 'Frequently asked questions about our services',
        href: '/resources/faqs',
      },
      {
        icon: <Shield size={24} className="text-[#000404]" />,
        title: 'CSR Initiatives',
        description: 'Support our community-focused projects',
        href: '/resources/csr',
      },
      {
        icon: <BookOpen size={24} className="text-[#000404]" />,
        title: 'Certifications',
        description: 'Verified Trust and Compliance',
        href: '/resources/certifications',
      },
      {
        icon: <Newspaper size={24} className="text-[#000404]" />,
        title: 'News & Events',
        description: 'Stay Informed with Sage',
        href: '/resources/news',
      },
    ],
    // Column 3
    [
      {
        icon: <Users size={24} className="text-[#000404]" />,
        title: 'Careers',
        description: 'Join our dedicated team of professionals',
        href: '/careers',
      },
      {
        icon: <MessageCircle size={24} className="text-[#000404]" />,
        title: 'Contact Us',
        description: 'Reach out for personalized assistance',
        href: '/contact',
      },
    ],
  ]

  return (
    <div className="bg-white relative">
      <div className="container-custom mx-auto">
        <div className="flex justify-center overflow-hidden">
          <div className="flex-1">
            <div className="flex justify-end">
              <div className="flex gap-8 items-start justify-end pl-16 pr-8 py-8 w-full">
                {/* Column 1 */}
                <div className="flex-1 flex flex-col gap-4 h-[358px] items-start justify-start min-h-px min-w-px">
                  <div className="flex flex-col gap-[22px] items-start justify-start">
                    {resourceColumns[0].map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={onItemClick}
                        className="flex gap-3 h-[61px] items-start justify-start py-2 w-80 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                      >
                        <div className="size-6 shrink-0">{item.icon}</div>
                        <div className="flex-1 flex flex-col grow items-start justify-start text-[#000404] text-left min-h-px min-w-px">
                          <div className="font-['Aeonik'] font-bold text-base leading-[1.5] w-full">
                            <p>{item.title}</p>
                          </div>
                          <div className="font-['Aeonik'] font-normal text-sm leading-[1.5] w-full">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex-1 flex flex-col gap-4 h-[358px] items-start justify-start min-h-px min-w-px">
                  <div className="flex flex-col gap-[22px] items-start justify-start">
                    {resourceColumns[1].map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={onItemClick}
                        className="flex gap-3 h-[61px] items-start justify-start py-2 w-80 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                      >
                        <div className="size-6 shrink-0">{item.icon}</div>
                        <div className="flex-1 flex flex-col grow items-start justify-start text-[#000404] text-left min-h-px min-w-px">
                          <div className="font-['Aeonik'] font-bold text-base leading-[1.5] w-full">
                            <p>{item.title}</p>
                          </div>
                          <div className="font-['Aeonik'] font-normal text-sm leading-[1.5] w-full">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3 */}
                <div className="flex-1 flex flex-col gap-4 h-[358px] items-start justify-start min-h-px min-w-px">
                  <div className="flex flex-col gap-[22px] items-start justify-start">
                    {resourceColumns[2].map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={onItemClick}
                        className="flex gap-3 h-[61px] items-start justify-start py-2 w-80 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                      >
                        <div className="size-6 shrink-0">{item.icon}</div>
                        <div className="flex-1 flex flex-col grow items-start justify-start text-[#000404] text-left min-h-px min-w-px">
                          <div className="font-['Aeonik'] font-bold text-base leading-[1.5] w-full">
                            <p>{item.title}</p>
                          </div>
                          <div className="font-['Aeonik'] font-normal text-sm leading-[1.5] w-full">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
