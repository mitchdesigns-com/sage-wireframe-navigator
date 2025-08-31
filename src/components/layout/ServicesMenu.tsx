'use client'

/**
 * Services Menu component matching Figma design
 *
 * This component implements the exact services dropdown design from Figma
 * with three service categories and a CTA section
 */

import { motion } from 'framer-motion'
import Link from 'next/link'

// Icon components matching Figma design
function PersonPinIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 19 22"
    >
      <path
        d="M6.05875 18.305H1.70325C1.24325 18.305 0.844417 18.1355 0.50675 17.7965C0.168917 17.4577 0 17.0574 0 16.5958V1.70325C0 1.23508 0.168917 0.834167 0.50675 0.500501C0.844417 0.166834 1.24325 0 1.70325 0H16.5957C17.0574 0 17.4577 0.166834 17.7965 0.500501C18.1355 0.834167 18.305 1.23508 18.305 1.70325V16.5958C18.305 17.0574 18.1355 17.4577 17.7965 17.7965C17.4577 18.1355 17.0574 18.305 16.5957 18.305H12.2283L9.74025 20.787C9.64925 20.878 9.5535 20.9443 9.453 20.9858C9.3525 21.0273 9.24825 21.048 9.14025 21.048C9.02642 21.048 8.92067 21.0273 8.823 20.9858C8.72533 20.9443 8.63125 20.878 8.54075 20.787L6.05875 18.305Z"
        fill="var(--fill-0, #9EBB80)"
      />
    </svg>
  )
}

function HotelIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 23 15"
    >
      <path
        d="M0.81725 14.93C0.583583 14.93 0.389 14.8512 0.2335 14.6935C0.0778333 14.5358 0 14.3408 0 14.1083V0.816C0 0.582 0.07925 0.3875 0.23775 0.2325C0.39625 0.0774997 0.592333 0 0.826 0C1.05983 0 1.2535 0.0774997 1.407 0.2325C1.56067 0.3875 1.6375 0.582 1.6375 0.816V9.95175H10.5283V3.8285C10.5283 3.36017 10.6946 2.95917 11.0273 2.6255C11.3599 2.29183 11.7633 2.125 12.2375 2.125H18.5125C19.5472 2.125 20.4329 2.49342 21.1697 3.23025C21.9066 3.96708 22.275 4.85283 22.275 5.8875V14.1143C22.275 14.3483 22.1971 14.5427 22.0413 14.6975C21.8854 14.8525 21.6899 14.93 21.4548 14.93C21.2211 14.93 21.0265 14.8512 20.871 14.6935C20.7153 14.5358 20.6375 14.3408 20.6375 14.1083V11.655H1.6375V14.1143C1.6375 14.3483 1.55958 14.5427 1.40375 14.6975C1.24792 14.8525 1.05242 14.93 0.81725 14.93Z"
        fill="var(--fill-0, #9EBB80)"
      />
    </svg>
  )
}

function GroupsIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 25 13"
    >
      <path
        d="M0.85175 12.281C0.61125 12.281 0.409167 12.1992 0.2455 12.0355C0.0818333 11.8718 0 11.6697 0 11.4292V10.8843C0 10.2166 0.352833 9.67525 1.0585 9.26025C1.764 8.84508 2.68825 8.6375 3.83125 8.6375C4.01192 8.6375 4.18342 8.64067 4.34575 8.647C4.50808 8.65333 4.67092 8.66825 4.83425 8.69175C4.69292 8.99292 4.58692 9.29892 4.51625 9.60975C4.44558 9.92075 4.41025 10.2452 4.41025 10.5832V12.281H0.85175Z"
        fill="var(--fill-0, #9EBB80)"
      />
    </svg>
  )
}

function ConciergeIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 23 21"
    >
      <path
        d="M9.92925 20.1213C9.69725 20.1213 9.50133 20.0408 9.3415 19.8798C9.1815 19.7189 9.1015 19.5218 9.1015 19.2885C9.1015 19.0552 9.1815 18.8587 9.3415 18.699C9.50133 18.5395 9.69725 18.4598 9.92925 18.4598H21.4292C21.6629 18.4598 21.8602 18.5406 22.0212 18.7023C22.1824 18.8639 22.263 19.062 22.263 19.2965C22.263 19.531 22.1824 19.7271 22.0212 19.8848C21.8602 20.0424 21.6629 20.1213 21.4292 20.1213H9.92925Z"
        fill="var(--fill-0, #9EBB80)"
      />
    </svg>
  )
}

function PersonRaisedHandIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 21 23"
    >
      <path
        d="M0.82775 22.4173C0.59575 22.4173 0.399833 22.337 0.24 22.1765C0.0800002 22.016 0 21.8179 0 21.5823C0 21.3466 0.0800002 21.1499 0.24 20.9923C0.399833 20.8348 0.59575 20.756 0.82775 20.756H19.4712C19.7049 20.756 19.9022 20.8363 20.0632 20.997C20.2244 21.1578 20.305 21.3548 20.305 21.588C20.305 21.8257 20.2244 22.0233 20.0632 22.181C19.9022 22.3385 19.7049 22.4173 19.4712 22.4173H0.82775Z"
        fill="var(--fill-0, #9EBB80)"
      />
    </svg>
  )
}

function CorporateFareIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 21 19"
    >
      <path
        d="M1.70325 18.269C1.23492 18.269 0.834 18.1033 0.5005 17.7718C0.166833 17.4403 0 17.0383 0 16.5658V1.70325C0 1.23492 0.166833 0.834001 0.5005 0.5005C0.834 0.166834 1.23492 0 1.70325 0H8.32175C8.79008 0 9.191 0.166834 9.5245 0.5005C9.85817 0.834001 10.025 1.23492 10.025 1.70325V4.125H18.5718C19.0401 4.125 19.441 4.29183 19.7745 4.6255C20.1082 4.959 20.275 5.35992 20.275 5.82825V16.5658C20.275 17.0383 20.1082 17.4403 19.7745 17.7718C19.441 18.1033 19.0401 18.269 18.5718 18.269H1.70325Z"
        fill="var(--fill-0, #9EBB80)"
      />
    </svg>
  )
}

function FlightsAndHotelsIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 17 23"
    >
      <path
        d="M3.0245 15.6453C3.0245 15.1119 3.20367 14.6661 3.562 14.3078C3.92033 13.9494 4.36617 13.7703 4.8995 13.7703C5.43283 13.7703 5.87867 13.9494 6.237 14.3078C6.59533 14.6661 6.7745 15.1119 6.7745 15.6453C6.7745 16.1786 6.59533 16.6244 6.237 16.9828C5.87867 17.3411 5.43283 17.5203 4.8995 17.5203C4.36617 17.5203 3.92033 17.3411 3.562 16.9828C3.20367 16.6244 3.0245 16.1786 3.0245 15.6453Z"
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

function KeyboardArrowRight() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 5 9"
    >
      <path
        d="M0.621094 0.0253906C0.781564 0.0253906 0.919357 0.0824942 1.03516 0.198242L4.53711 3.7002C4.59987 3.76295 4.64505 3.82782 4.67285 3.89453C4.70078 3.96154 4.71482 4.03327 4.71484 4.10938C4.71484 4.18552 4.70078 4.25717 4.67285 4.32422C4.64506 4.39101 4.59993 4.45573 4.53711 4.51855L1.01758 8.03809C0.901773 8.15389 0.767305 8.20876 0.613281 8.20312C0.458692 8.19742 0.324161 8.13664 0.208008 8.02051C0.0922939 7.90479 0.0342877 7.76775 0.0341797 7.60742C0.0341797 7.4469 0.0921849 7.30918 0.208008 7.19336L3.27344 4.12695L3.29102 4.10938L3.27344 4.0918L0.189453 1.00879C0.0737119 0.893048 0.0198263 0.758409 0.0253906 0.604492C0.0310491 0.449789 0.0917884 0.314462 0.208008 0.198242C0.323694 0.0826703 0.460838 0.0254744 0.621094 0.0253906Z"
        fill="var(--fill-0, #1E1E1E)"
        stroke="var(--stroke-0, #1E1E1E)"
        strokeWidth="0.05"
      />
    </svg>
  )
}

interface ServicesMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function ServicesMenu({ isOpen, onClose }: ServicesMenuProps) {
  if (!isOpen) return null

  const serviceCategories = {
    individuals: {
      title: 'For Individuals',
      items: [
        {
          icon: <PersonPinIcon />,
          title: 'Healthcare Services',
          description: (
            <>
              Access premium healthcare <strong>packages</strong> and expert
              care across Saudi hospitals.
            </>
          ),
          href: '/services/individual/healthcare',
        },
        {
          icon: <HotelIcon />,
          title: 'Concierge Services',
          description:
            'We handle everything from airport transfers to dietary needs.',
          href: '/services/individual/concierge',
        },
      ],
    },
    businesses: {
      title: 'For Businesses',
      items: [
        {
          icon: <GroupsIcon />,
          title: 'Healthcare Services',
          description:
            'We offer customized corporate healthcare and VIP medical access for your employee.',
          href: '/services/businesses/healthcare',
        },
        {
          icon: <ConciergeIcon />,
          title: 'Concierge Services',
          description:
            'We offer concierge services for executives, featuring corporate rates.',
          href: '/services/businesses/concierge',
        },
        {
          icon: <PersonRaisedHandIcon />,
          title: 'Consultation & Training',
          description: 'We provide wellness and medical travel guidance.',
          href: '/services/businesses/consultation',
        },
      ],
    },
    organizations: {
      title: 'For Organizations',
      items: [
        {
          icon: <CorporateFareIcon />,
          title: 'Healthcare Services',
          description:
            'We streamline cross-border care with institutional-level coordination.',
          href: '/services/organizations/healthcare',
        },
        {
          icon: <FlightsAndHotelsIcon />,
          title: 'Concierge Services',
          description:
            'We manage group concierge services with compliance and care.',
          href: '/services/organizations/concierge',
        },
        {
          icon: <EditDocumentIcon />,
          title: 'Consultation & Training Services',
          description: 'We advise on health programs and medical tourism.',
          href: '/services/organizations/consultation',
        },
      ],
    },
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
        <div className="flex gap-8 items-start justify-end">
          <div className="flex-1 flex flex-col gap-8">
            {/* Service Categories */}
            <div className="flex gap-8 items-start justify-start w-full">
              {/* For Individuals */}
              <div className="flex-1 flex flex-col gap-4 h-[296px]">
                <div className="flex gap-1.5 items-center">
                  <div className="font-aeonik-bold text-primary-black text-sm leading-[1.5]">
                    {serviceCategories.individuals.title}
                  </div>
                  <div className="relative shrink-0 size-[17px] text-primary-black">
                    <KeyboardArrowRight />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {serviceCategories.individuals.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={onClose}
                      className="flex gap-2 h-[116px] items-start px-3 py-4 rounded-[10px] hover:bg-white/50 transition-colors duration-200 w-80"
                    >
                      <div className="relative shrink-0 size-6 text-primary-light-sage">
                        {item.icon}
                      </div>
                      <div className="flex flex-col items-start justify-start flex-1">
                        <div className="font-aeonik-bold text-primary-black text-base leading-[1.5]">
                          {item.title}
                        </div>
                        <div className="font-aeonik-regular text-[#626262] text-sm leading-[1.5] w-[236px]">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* For Businesses */}
              <div className="flex-1 flex flex-col gap-4 h-[296px]">
                <div className="flex gap-1.5 items-center">
                  <div className="font-aeonik-bold text-primary-black text-sm leading-[1.5]">
                    {serviceCategories.businesses.title}
                  </div>
                  <div className="relative shrink-0 size-[17px] text-primary-black">
                    <KeyboardArrowRight />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {serviceCategories.businesses.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={onClose}
                      className="flex gap-2 h-[116px] items-start px-3 py-4 rounded-[10px] hover:bg-white/50 transition-colors duration-200 w-80"
                    >
                      <div className="relative shrink-0 size-6 text-primary-light-sage">
                        {item.icon}
                      </div>
                      <div className="flex flex-col items-start justify-start flex-1">
                        <div className="font-aeonik-bold text-primary-black text-base leading-[1.5]">
                          {item.title}
                        </div>
                        <div className="font-aeonik-regular text-[#626262] text-sm leading-[1.5] w-[236px]">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* For Organizations */}
              <div className="flex-1 flex flex-col gap-4 h-[296px]">
                <div className="flex gap-1.5 items-center justify-center">
                  <div className="font-aeonik-bold text-primary-black text-sm leading-[1.5]">
                    {serviceCategories.organizations.title}
                  </div>
                  <div className="relative shrink-0 size-[17px] text-primary-black">
                    <KeyboardArrowRight />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {serviceCategories.organizations.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={onClose}
                      className="flex gap-2 h-[116px] items-start px-3 py-4 rounded-[10px] hover:bg-white/50 transition-colors duration-200 w-80"
                    >
                      <div className="relative shrink-0 size-6 text-primary-light-sage">
                        {item.icon}
                      </div>
                      <div className="flex flex-col items-start justify-start flex-1">
                        <div className="font-aeonik-bold text-primary-black text-base leading-[1.5]">
                          {item.title}
                        </div>
                        <div className="font-aeonik-regular text-[#626262] text-sm leading-[1.5] w-[236px]">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex gap-1.5 items-center justify-center rounded-[100px]">
              <div className="font-aeonik-bold text-primary-palm text-lg leading-[1.5]">
                Explore All Services
              </div>
              <div className="bg-primary-palm rounded-full p-[6px] size-7 flex items-center justify-center">
                <div className="relative shrink-0 size-6">
                  <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                    <div className="flex-none rotate-[315deg]">
                      <svg
                        className="overflow-clip relative size-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                          className="text-white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="bg-gray-300 rounded-[24px] w-[314px] h-[386px] flex-shrink-0">
            {/* Placeholder for doctor image */}
            <div className="w-full h-full rounded-[24px] bg-gradient-to-br from-primary-scrub/20 to-primary-palm/20 flex items-center justify-center">
              <div className="text-primary-palm/50 text-lg">
                Healthcare Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
