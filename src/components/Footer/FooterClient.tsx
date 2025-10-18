'use client'

import { ChevronDown, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FooterData } from '../../types/footer'

const awards = [
  { name: 'image 10', img: '/images/awards/01.png' },
  { name: 'image 11', img: '/images/awards/02.png' },
  { name: 'image 7', img: '/images/awards/03.png' },
  { name: 'image 12', img: '/images/awards/04.png' },
  { name: 'image 13', img: '/images/awards/05.png' },
  { name: 'image 14', img: '/images/awards/06.png' },
]

interface FooterClientProps {
  footerData: FooterData
}

export default function FooterClient({ footerData }: FooterClientProps) {
  const { menu, socialMedia, logo, phone, email: contactEmail } = footerData

  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openIndex, setOpenIndex] = useState(-1)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setEmail('')
    setIsSubmitting(false)
    alert('Successfully subscribed to updates!')
  }

  return (
    <footer className="bg-gradient-to-t from-[#013530] to-[#025850]">
      <div className="flex justify-center md:justify-between items-center pb-5 pt-11 md:pt-25 md:pb-11 max-w-[1392px] mx-auto px-4 md:px-0 flex-col md:flex-row">
        {logo && (
          <div className="w-[269px] md:w-[373px] h-[128px] md:h-[178px] relative">
            <Image
              fill
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${logo.url}`}
              alt={logo.alternativeText || 'Sage Logo'}
              className="object-contain"
              unoptimized
            />
          </div>
        )}
        <section className="bg-[#CAF48E] max-w-[707px] rounded-3xl mt-8 md:mt-0">
          <div className="px-4 py-8 md:px-8 md:py-[20px]">
            <div className="">
              <div>
                <h2 className="text-[#000404] font-bold text-base md:text-lg">
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
                      disabled={isSubmitting}
                      className="bg-[#025850] text-white w-full md:w-fit px-15 py-3 h-12 rounded-full font-medium text-base hover:bg-[#024440] transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? 'Joining...' : 'Join'}
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
        <div className="hidden md:grid grid-cols-6 gap-8 flex-1 max-w-[1392px] mx-auto bg-white py-8 px-4 md:p-16 rounded-4xl">
          {menu.map((section) => (
            <div key={section.id} className="space-y-4">
              <h3 className="text-Primary-Black font-bold text-base">
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.SingleLink.map((link) => (
                  <div key={link.id} className="py-2">
                    <Link
                      href={link.href}
                      className="text-Primary-Black text-sm"
                    >
                      {link.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="space-y-4">
            {phone && (
              <div className="gap-1 flex text-sm items-center">
                <Phone className="text-Primary-Palm" />
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
            )}
            {contactEmail && (
              <div className="gap-1 flex text-sm items-center">
                <Mail className="text-Primary-Palm" />
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </div>
            )}
            <div className="flex space-x-3">
              {socialMedia.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${social.icon.url}`}
                    alt={social.icon.alternativeText || ''}
                    width={20}
                    height={20}
                  />
                </a>
              ))}
            </div>
            <p className="text-Secondary-Text font-medium text-xs">
              تصفح بالعربية
            </p>
          </div>
        </div>

        {/* Mobile Accordion Menu */}
        <div className="md:hidden flex flex-col w-full bg-white py-8 px-4 rounded-4xl">
          {menu.map((section, index) => {
            const isOpen = openIndex === index
            return (
              <div key={section.id} className="py-3">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-Primary-Black font-bold text-sm">
                    {section.title}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-Primary-Black transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-2' : 'max-h-0'}`}
                >
                  <div className="space-y-2">
                    {section.SingleLink.map((link) => (
                      <div key={link.id} className="py-1">
                        <Link
                          href={link.href}
                          className="text-Primary-Black text-xs"
                        >
                          {link.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="gap-4 items-center justify-center relative hidden md:grid grid-cols-3 md:grid-cols-6 w-full py-5 md:py-[44px] max-w-[1392px] mx-auto px-4 md:px-0">
        {awards.map((award, idx) => (
          <div
            key={idx}
            className={`bg-no-repeat aspect-[104/42] md:aspect-[218/88] rounded-[4px] md:rounded-xl bg-white bg-center bg-contain`}
            style={{ backgroundImage: `url('${award.img}')` }}
          />
        ))}
      </div>
      <div className="px-4 md:px-[60px] pt-3 pb-6">
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
  )
}
