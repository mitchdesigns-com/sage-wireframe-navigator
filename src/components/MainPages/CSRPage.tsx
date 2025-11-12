'use client'

import CSRForm from '@/components/sections/CSRForm'
import FeatureSection from '@/components/sections/FeatureSection'
import HeroPages from '@/components/sections/HeroPages'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { CSRPageData } from '../../types/csr'

export default function CSRPage({ data }: { data: CSRPageData }) {
  const [elements, setElements] = useState<React.ReactNode[]>([])
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { amount: 0.5 }) // trigger when 50% in view
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView, controls])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  }
  const childVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 15 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' },
      },
    }),
    []
  )

  useEffect(() => {
    if (!data?.sageSponsors?.title) return

    const htmlString = data.sageSponsors.title.replace(
      /<span>/g,
      '<span class="text-Primary-Spring font-bold">'
    )

    const container = document.createElement('div')
    container.innerHTML = htmlString

    const out: React.ReactNode[] = []

    function walk(node: ChildNode) {
      if (node.nodeType === Node.TEXT_NODE) {
        const words = node.textContent?.split(/\s+/).filter(Boolean) || []
        words.forEach((w) => {
          out.push(
            <motion.span
              key={out.length}
              className="inline-block mr-2"
              variants={childVariants}
            >
              {w}
            </motion.span>
          )
        })
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement
        const cls = el.className
        const innerWords: React.ReactNode[] = []
        el.childNodes.forEach((child) => {
          if (child.nodeType === Node.TEXT_NODE) {
            const words = child.textContent?.split(/\s+/).filter(Boolean) || []
            words.forEach((w) => {
              innerWords.push(
                <motion.span
                  key={out.length + '-' + w}
                  className="inline-block mr-2"
                  variants={childVariants}
                >
                  {w}
                </motion.span>
              )
            })
          }
        })
        out.push(
          <span key={out.length} className={cls}>
            {innerWords}
          </span>
        )
      }
    }

    container.childNodes.forEach((node) => walk(node))
    setElements(out)
  }, [data, childVariants]) // ✅ add childVariants to satisfy the linter

  return (
    <div className="min-h-screen">
      <HeroPages {...data.HeroPages} />

      {data.FeatureSection.map((section, index) => (
        <FeatureSection key={index} {...section} />
      ))}

      {/* SAGE SPONSORS SECTION */}
      <section className="bg-Secondary-Dark-Palm" ref={ref}>
        <div className="max-w-[1392px] mx-auto py-8 md:py-42 px-4">
          <motion.h2
            className="text-white text-2xl md:text-[32px] font-aeonik-light text-center flex flex-wrap justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {elements}
          </motion.h2>
        </div>
      </section>

      {data.FeatureSectionLast.map((section, index) => (
        <FeatureSection key={index} {...section} />
      ))}

      <section className="bg-Secondary-Scrub">
        <div className="py-8 md:py-28">
          <div className="max-w-[1392px] mx-auto px-4">
            <div className="text-Neutral-Darkest text-center max-w-[970px] mx-auto pb-8 md:pb-15">
              <span className="text-base font-medium pb-4 block">
                {data.CSRRegistration.subTitle}
              </span>
              <h6 className="heading-lg pb-4">{data.CSRRegistration.title}</h6>
              <p className="text-base md:text-lg">
                {data.CSRRegistration.description}
              </p>
            </div>
            <CSRForm />
          </div>
        </div>
      </section>
    </div>
  )
}
