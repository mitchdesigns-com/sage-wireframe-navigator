'use client'
import HeroPages from '@/components/sections/HeroPages'
import FeatureSection from '@/components/sections/FeatureSection'
import CentersSection from '@/components/sections/CentersSection'
import Tagline from '@/components/sections/Tagline'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { NetworkData } from '../../types/ourNetworkPage'
import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function OurNetworkPage({ data }: { data: NetworkData }) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const payload = { data: { email } }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/trusted-partner-forms`,
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
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation setup
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen">
      <HeroPages {...data.HeroPages} />
      <FeatureSection {...data.FeatureSection[0]} />

      {/* Single Center Section */}
      <section ref={ref} className="bg-Secondary-Scrub">
        <div className="px-4 mx-auto max-w-[1392px] py-8 md:py-28">
          <div className="flex items-center gap-8 md:gap-15 md:flex-row-reverse flex-col">
            <div className="flex-1">
              <motion.div
                // initial="hidden"
                // animate={controls}
                // variants={containerVariants}
                className="mb-8"
              >
                <motion.div variants={itemVariants}>
                  <Tagline text={data.SingleCenter.tagline} />
                </motion.div>
                <motion.div variants={itemVariants} className="mb-8">
                  <h2 className="text-3xl md:text-[48px] font-bold leading-[1.2] tracking-[-0.48px] mb-2 whitespace-pre-line text-Primary-Black">
                    {data.SingleCenter.title}
                  </h2>
                  <span className="text-Primary-Palm text-base font-medium mb-2">
                    {data.SingleCenter.category}
                  </span>
                  <p className="text-base md:text-lg text-Secondary-Text whitespace-pre-line">
                    {data.SingleCenter.description}
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Image */}
            <div className="flex-1 w-full">
              <motion.div
                variants={itemVariants}
                // initial="hidden"
                animate={controls}
                className="grid grid-cols-1 gap-4 w-full"
              >
                <div className="flex items-start flex-col bg-white w-full h-[332px] rounded-[8px] relative overflow-hidden">
                  <Image
                    fill
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.SingleCenter.image.url}`}
                    alt="center"
                    className="object-contain p-5"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Centers Section */}
      {data.CentersSection.map((section, index) => (
        <CentersSection key={index} {...section} />
      ))}

      {/* Trusted Partner Section */}
      <section ref={ref} className="bg-Primary-Scrub">
        <div className="mx-auto max-w-[1392px] py-8 md:py-28 w-full px-4">
          <div className="flex items-center gap-8 md:gap-20 flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <motion.div
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="gap-4 md:mb-8"
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-[48px] font-bold leading-[1.2] tracking-[-0.48px] mb-3 md:mb-6 whitespace-pre-line text-white"
                >
                  {data.TrustedPartner.title}
                </motion.h2>
                <motion.span
                  variants={itemVariants}
                  className="text-white text-base md:text-[18px] mb-8"
                >
                  {data.TrustedPartner.shortDescription}
                </motion.span>
                <motion.form
                  onSubmit={handleNewsletterSubmit}
                  variants={itemVariants}
                  className="flex gap-4 items-center flex-col md:flex-row pt-8 max-w-[513px]"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    className="bg-white rounded-[6px] px-3 py-2 h-12 w-full md:w-[479px] text-base text-[#626262]"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#025850] text-white w-full md:w-fit px-7 py-3 text-nowrap rounded-full font-medium text-base hover:bg-[#024440] transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                  </button>
                </motion.form>
                <motion.p
                  variants={itemVariants}
                  className="text-xs text-Secondary-Dark-Palm pt-4"
                >
                  {data.TrustedPartner.description}
                </motion.p>
              </motion.div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={controls}
                className="grid grid-cols-1 gap-4"
              >
                <div className="flex items-start flex-col w-full h-[270px] md:h-[400px] rounded-[8px] relative overflow-hidden">
                  <Image
                    fill
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.TrustedPartner.image.url}`}
                    alt="center"
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section ref={ref} className="bg-Secondary-Scrub">
        <div className="px-4 mx-auto max-w-[1392px] py-8 md:py-28">
          <div className="flex items-start gap-8 md:gap-15 flex-col md:flex-row">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-[48px] font-bold leading-[1.2] tracking-[-0.48px] whitespace-pre-line text-Primary-Black">
                {data.LoginSection.title}
              </h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              className="flex-1"
            >
              <p className="text-base md:text-lg text-Secondary-Text whitespace-pre-line pb-4 md:pb-8">
                {data.LoginSection.description}
              </p>
              <Link href={data.LoginSection.cta.url} className="inline-block">
                <Button variant={'primary'} righticon={false} fullwidth>
                  {data.LoginSection.cta.label}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
