'use client'

import { ChevronDown, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'

// Social media links
const socialLinks = [
  { icon: Mail, href: 'https://facebook.com/sage', label: 'Facebook' },
  { icon: Mail, href: 'https://instagram.com/sage', label: 'Instagram' },
  { icon: Mail, href: 'https://youtube.com/sage', label: 'YouTube' },
  {
    icon: Mail,
    href: 'https://linkedin.com/company/sage',
    label: 'LinkedIn',
  },
]

// Footer navigation links
// const footerLinks = {
//   quickLinks: [
//     { label: 'About Us', href: '/about' },
//     { label: 'Contact Us', href: '/contact' },
//     { label: 'Visit Saudi', href: '/visit-saudi' },
//     { label: 'News & Events', href: '/news' },
//     { label: 'Careers', href: '/careers' },
//   ],
//   services: [
//     { label: 'For Individuals', href: '/services/individuals' },
//     { label: 'For Businesses', href: '/services/businesses' },
//     { label: 'For Organizations', href: '/services/organizations' },
//   ],
//   resources: [
//     { label: 'Guides', href: '/resources/guides' },
//     { label: 'Case Studies', href: '/resources/case-studies' },
//     { label: 'Webinars', href: '/resources/webinars' },
//     { label: 'Certifications', href: '/resources/certifications' },
//     { label: 'FAQs', href: '/resources/faqs' },
//   ],
//   exploreMore: [
//     { label: 'CSR Initiatives', href: '/csr' },
//     { label: 'Access Referral', href: '/referral' },
//     { label: 'Blog', href: '/blog' },
//     { label: 'Careers', href: '/careers' },
//     { label: 'Our Network', href: '/our-network' },
//   ],
//   legalLinks: [
//     { label: 'Privacy Policy', href: '/privacy' },
//     { label: 'Terms and Conditions', href: '/terms' },
//     { label: 'Cookie Policy', href: '/cookies' },
//   ],
// }
const awards = [
  {
    name: 'image 10',
    img: '/images/awards/01.png',
    className: 'bg-size-[77.34%_35.57%,auto] bg-white',
    style: {},
    nodeId: '8381:108897',
  },
  {
    name: 'image 11',
    img: '/images/awards/02.png',
    className: 'bg-center bg-cover bg-no-repeat',
    style: {},
    nodeId: '8381:108899',
  },
  {
    name: 'image 7',
    img: '/images/awards/03.png',
    className: 'bg-[50%_49.44%] bg-no-repeat bg-size-[122.28%_111.03%]',
    style: {},
    nodeId: '8381:108901',
  },
  {
    name: 'image 12',
    img: '/images/awards/04.png',
    className: 'bg-[50%_47.11%] bg-no-repeat bg-size-[110.49%_111.16%]',
    style: {},
    nodeId: '8381:108903',
  },
  {
    name: 'image 13',
    img: '/images/awards/05.png',
    className: 'bg-center bg-cover bg-no-repeat',
    style: {},
    nodeId: '8381:108905',
  },
  {
    name: 'image 14',
    img: '/images/awards/06.png',
    className:
      'bg-white content-stretch flex flex-col gap-2.5 items-center justify-center relative',
    style: {},
    nodeId: '8493:5656',
    inner: {
      className: 'bg-[0%_44.12%] bg-no-repeat bg-size-[100%_121.78%]',
      style: {},
      nodeId: '8493:5657',
    },
  },
]
// const socialLinks = [
//   { name: "Facebook", url: "https://facebook.com", icon: <FaFacebookF /> },
//   { name: "Twitter", url: "https://twitter.com", icon: <FaTwitter /> },
//   { name: "Instagram", url: "https://instagram.com", icon: <FaInstagram /> },
//   { name: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedinIn /> },
// ];
export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openIndex, setOpenIndex] = useState(0) // First accordion open by default
  console.log(isSubmitting)
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setEmail('')
    setIsSubmitting(false)

    // You can add toast notification here
    alert('Successfully subscribed to updates!')
  }
  const sections = [
    {
      title: 'Quick Links',
      links: [
        'About Us',
        'Contact Us',
        'Visit Saudi',
        'News & Events',
        'Careers',
      ],
    },
    {
      title: 'Services',
      links: ['For Individuals', 'For Businesses', 'For Organizations'],
    },
    {
      title: 'Resources',
      links: ['Guides', 'Case Studies', 'Webinars', 'Certifications', 'FAQs'],
    },
    {
      title: 'Explore More',
      links: [
        'CSR Initiatives',
        'Access Referral',
        'Blog',
        'Careers',
        'Our Network',
      ],
    },
    {
      title: 'Legal Links',
      links: ['Privacy Policy', 'Terms and Conditions', 'Cookie Policy'],
    },
  ]

  return (
    <>
      {/* Newsletter Section */}

      {/* Footer */}
      <footer className="bg-gradient-to-t from-[#013530] to-[#025850]">
        <div className="flex justify-center md:justify-between items-center pb-5 pt-11 md:pt-25 md:pb-11 max-w-[1392px] mx-auto px-4 md:px-0 flex-col md:flex-row">
          {' '}
          <div className="w-[269px] md:w-[373px] h-[128px] md:h-[178px] relative ">
            <Image
              fill
              src="/images/footer-logo.png"
              alt="Sage Logo"
              className="object-contain"
              unoptimized
            />
          </div>
          <section className="bg-[#CAF48E] max-w-[707px] rounded-3xl mt-8 md:mt-0">
            <div className="px-4 py-8 md:px-8 md:py-[20px]">
              <div className="">
                <div>
                  <h2 className="text-[#000404] font-bold text-base md:text-p">
                    Subscribe to Updates
                  </h2>
                  <p className="text-[#000404] text-sm leading-[1.5]">
                    Stay informed about our services and healthcare insights.
                  </p>

                  <div className="space-y-3 pt-2">
                    <form
                      onSubmit={handleNewsletterSubmit}
                      className="flex gap-4 items-center flex-col md:flex-row"
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email"
                        className="bg-white  rounded-[6px] px-3 py-2 h-12 w-full md:w-[479px] text-base text-[#626262] "
                      />
                      <button
                        type="submit"
                        className="bg-[#025850] text-white w-full md:w-fit px-15 py-3 h-12 rounded-full font-medium text-base hover:bg-[#024440] transition-colors cursor-pointer"
                      >
                        Join
                      </button>
                    </form>
                    <p className="text-Primary-Black text-xs leading-[1.5]">
                      We respect your privacy. Read our{' '}
                      <span className="text-[#025850] underline cursor-pointer">
                        Privacy Policy.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex justify-between px-4 md:px-0">
          {/* Logo */}

          {/* Footer Links */}
          <div className="hidden md:grid grid-cols-6 gap-8 flex-1 max-w-[1392px] mx-auto bg-Secondary-Light-Scrub py-8 px-4 md:p-16 rounded-4xl ">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-Primary-Black font-bold text-base">
                Quick Links
              </h3>
              <div className="">
                {[
                  'About Us',
                  'Contact Us',
                  'Visit Saudi',
                  'News & Events',
                  'Careers',
                ].map((link) => (
                  <div key={link} className="py-2">
                    <a href="#" className="text-Primary-Black text-sm ">
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-Primary-Black font-bold text-base">
                Services
              </h3>
              <div className="space-y-2">
                {['For Individuals', 'For Businesses', 'For Organizations'].map(
                  (link) => (
                    <div key={link} className="py-2">
                      <a href="#" className="text-Primary-Black text-sm ">
                        {link}
                      </a>
                    </div>
                  )
                )}
              </div>
            </div>
            {/* Resources */}
            <div className="space-y-4">
              <h3 className="text-Primary-Black font-bold text-base">
                Resources
              </h3>
              <div className="space-y-2">
                {[
                  'Guides',
                  'Case Studies',
                  'Webinars',
                  'Certifications',
                  'FAQs',
                ].map((link) => (
                  <div key={link} className="py-2">
                    <a href="#" className="text-Primary-Black text-sm ">
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* Explore More */}
            <div className="space-y-4">
              <h3 className="text-Primary-Black font-bold text-base">
                Explore More
              </h3>
              <div className="space-y-2">
                {[
                  'CSR Initiatives',
                  'Access Referral',
                  'Blog',
                  'Careers',
                  'Our Network',
                ].map((link) => (
                  <div key={link} className="py-2">
                    <a href="#" className="text-Primary-Black text-sm ">
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* Legal Links */}
            <div className="space-y-4">
              <h3 className="text-Primary-Black font-bold text-base">
                Legal Links
              </h3>
              <div className="space-y-2">
                {[
                  'Privacy Policy',
                  'Terms and Conditions',
                  'Cookie Policy',
                ].map((link) => (
                  <div key={link} className="py-2">
                    <a href="#" className="text-Primary-Black text-sm ">
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="gap-1 flex text-sm items-center">
                {' '}
                <Phone className="text-Primary-Palm" />{' '}
                <a href={`tel:+966 55 123 4567`}>+966 55 123 4567</a>
              </div>
              <div className="gap-1 flex text-sm  items-center">
                <Mail className="text-Primary-Palm" />
                <a href={`mailto:Info@sage.com`}>Info@sage.com</a>
              </div>
              <div className="flex">
                {socialLinks.map((link) => (
                  <div key={link.label} className="gap-4 flex w-full">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-Primary-Black text-sm flex items-center gap-2 hover:text-blue-500"
                    >
                      <Mail className="text-Primary-Palm" />
                    </a>
                  </div>
                ))}
              </div>
              <p className="text-Secondary-Text font-medium text-xs">
                تصفح بالعربية
              </p>
            </div>
          </div>
          <div className="md:hidden flex flex-col w-full bg-Secondary-Light-Scrub py-8 px-4 md:p-16 rounded-4xl ">
            {sections.map((section, index) => {
              const isOpen = openIndex === index
              return (
                <div key={section.title} className="py-3">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-Primary-Black font-bold text-sm">
                      {section.title}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-Primary-Black transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 mt-2' : 'max-h-0'
                    }`}
                  >
                    <div className="space-y-2 ">
                      {section.links.map((link) => (
                        <div key={link} className="py-1">
                          <a href="#" className="text-Primary-Black text-xs">
                            {link}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Contact Section */}
            <div className="pt-4 space-y-3">
              <div className="gap-2 flex text-xs items-center">
                <Phone className="text-Primary-Palm" />
                <a href="tel:+966551234567" className="text-Primary-Black">
                  +966 55 123 4567
                </a>
              </div>
              <div className="gap-2 flex text-xs items-center">
                <Mail className="text-Primary-Palm" />
                <a href="mailto:Info@sage.com" className="text-Primary-Black">
                  Info@sage.com
                </a>
              </div>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-Primary-Black text-xs hover:text-Primary-Palm"
                  >
                    <Mail className="text-Primary-Palm" />
                  </a>
                ))}
              </div>
              <p className="text-Secondary-Text font-medium text-xs pt-1">
                تصفح بالعربية
              </p>
            </div>
          </div>
        </div>
        {/* <div className="block md:hidden gap-4 items-center justify-center relative  w-full py-5 md:py-[44px] max-w-[1392px] mx-auto ">
          <Swiper
            spaceBetween={8}
            slidesPerView={3.5}
            className="!overflow-visible px-4" // adds space before & after slides
          >
            {awards.map((award, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={`bg-no-repeat aspect-[104/42] rounded-[4px] bg-white bg-center bg-contain ${
                    idx === 0 ? 'ms-4' : idx === awards.length - 1 ? 'me-4' : ''
                  }`}
                  style={{ backgroundImage: `url('${award.img}')` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
        <div className="gap-4 items-center justify-center relative hidden md:grid grid-cols-3 md:grid-cols-6 w-full py-5 md:py-[44px] max-w-[1392px] mx-auto px-4 md:px-0">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className={`bg-no-repeat aspect-[104/42] md:aspect-[218/88] rounded-[4px] md:rounded-xl bg-white bg-center bg-contain`}
              style={{ backgroundImage: `url('${award.img}')` }}
            />
          ))}
        </div>
        <div className="px-4 md:px-[60px] pb-6">
          <div className="max-w-[1392px] mx-auto px-0 md:px-15">
            <div className="flex items-center justify-between flex-col md:flex-row">
              <div className="text-white text-sm">
                © 2025 Sage. All rights reserved.
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.mitchdesigns.com/"
                  target="_blank"
                  className="text-white text-sm"
                >
                  Design & Development by Mitchdesigns{' '}
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
    </>
  )
}
