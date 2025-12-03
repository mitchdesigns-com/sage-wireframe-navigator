'use client'

import { motion, useAnimation } from 'framer-motion'
import { Mail, MinusIcon, Phone, PlusIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FooterData } from '../../types/footer'
import LanguageSwitchButton from '../Header/LanguageSwitchButton'

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
  const t = useTranslations()

  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openIndex, setOpenIndex] = useState(-1)
  const [error, setError] = useState('')
  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(value)
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setError(t('Footer.emailRequired'))
      return
    }

    if (!validateEmail(email)) {
      setError(t('Footer.invalidEmail'))
      return
    }

    setError('')
    setIsSubmitting(true)

    const payload = { data: { email } }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/subscribe-to-updates`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      )

      if (!res.ok) throw new Error('Failed to submit form')

      await res.json()
      setEmail('')
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation setup
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }
  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="bg-gradient-to-t from-[#013530] to-[#025850]"
    >
      <div className="flex justify-center md:justify-between items-center pb-5 pt-11 md:pt-25 md:pb-8 max-w-[1392px] mx-auto px-4  flex-col md:flex-row">
        {logo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-[269px] md:w-[373px] h-[128px] md:h-[178px] relative"
          >
            <Image
              fill
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${logo.url}`}
              alt={logo.alternativeText || 'Sage Logo'}
              className="object-contain"
              unoptimized
            />
          </motion.div>
        )}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#CAF48E] max-w-[707px] rounded-3xl mt-8 md:mt-0"
        >
          <div className="px-4 py-8 md:px-8 md:py-[20px]">
            <h2 className="text-[#000404] font-bold text-base md:text-lg">
              {t('Footer.Subscribe')}
            </h2>
            <p className="text-[#000404] text-sm leading-[1.5]">
              {t('Footer.stayInformed')}
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex gap-4 items-center flex-col md:flex-row mt-2"
            >
              <div className="w-full md:w-[479px] flex flex-col">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (error) setError('')
                  }}
                  placeholder={t('Form.email')}
                  className={`bg-white rounded-[6px] px-3 py-2 h-12 w-full text-base text-[#626262] 
        ${error ? 'border border-red-500' : 'border border-transparent'}`}
                />

                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#025850] text-white w-full md:w-fit px-15 py-3 h-12 rounded-full font-medium text-base hover:bg-[#024440] transition-colors cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? t('Footer.Joining') : t('Footer.Join')}
              </button>
            </form>

            <p className="text-Primary-Black text-xs leading-[1.5] mt-2">
              {t('Footer.respectPrivacy')}
              <Link href="/privacy" className="text-[#025850] underline">
                {t('Footer.privacy')} .
              </Link>
            </p>
          </div>
        </motion.section>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        className="flex justify-between px-4 "
      >
        <motion.div
          className="hidden md:grid grid-cols-6 gap-8 flex-1 max-w-[1392px] mx-auto bg-white py-8 px-4 md:p-8 rounded-4xl"
          variants={variants}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
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

            <LanguageSwitchButton className="text-Secondary-Text font-medium text-xs text-end" />
          </div>
        </motion.div>
      </motion.div>
      <div className="px-4">
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
                  {isOpen ? <MinusIcon /> : <PlusIcon />}
                  {/* <ChevronDown
                    className={`w-5 h-5 text-Primary-Black transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  /> */}
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

            <LanguageSwitchButton className="text-Secondary-Text font-medium text-xs text-end" />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-between px-4 "
      >
        <div className="gap-4 items-center justify-center relative hidden md:grid grid-cols-3 md:grid-cols-6 w-full py-5 md:py-8 max-w-[1392px] mx-auto">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className={`bg-no-repeat aspect-[104/42] md:aspect-[218/88] rounded-[4px] md:rounded-xl bg-white bg-center bg-contain`}
              style={{ backgroundImage: `url('${award.img}')` }}
            />
          ))}
        </div>
      </motion.div>
      <div className="md:hidden w-full py-6 px-4">
        <Swiper
          spaceBetween={16}
          slidesPerView={2.2}
          loop={true}
          className="w-full"
        >
          {awards.map((award, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="bg-no-repeat aspect-[104/42] rounded-[6px] bg-white bg-center bg-contain"
                style={{ backgroundImage: `url('${award.img}')` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="px-4 md:px-[60px] pt-3 pb-6"
      >
        <div className="max-w-[1392px] mx-auto px-0 md:px-15">
          <div className="flex items-center justify-between flex-col md:flex-row text-white text-sm">
            <div>© 2025 Sage. All rights reserved.</div>
            <a
              href="https://www.mitchdesigns.com/"
              target="_blank"
              className="text-white text-sm"
            >
              Design & Development by Mitchdesigns
            </a>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  )
}
