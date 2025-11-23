'use client'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  CareerItem,
  RichTextChild,
  RichTextElement,
} from '../../types/jobDetailsPage'
import Dot from '../svg/Dot'
import { useLocale, useTranslations } from 'next-intl'

function extractText(node: RichTextChild | RichTextElement): string {
  if ('text' in node) return node.text
  if ('children' in node) return node.children.map(extractText).join('')
  return ''
}

export default function JobDetailsPage({ data }: { data: CareerItem }) {
  const tagsArray = data.tags
    ? data.tags
        .replace(/'/g, '')
        .split(',')
        .map((tag) => tag.trim())
    : []

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }
  const t = useTranslations()
  const locale = useLocale()

  return (
    <section>
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="h-[387px] relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.image.url}`}
            fill
            alt={data.image.alternativeText}
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-black/70 text-white px-2 py-3"></div>
          <motion.div
            className="flex justify-center items-center w-full h-full flex-col absolute"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.div className="flex items-center gap-2" variants={fadeUp}>
              <ChevronLeft
                className={`${locale === 'ar' ? 'rotate-180' : ''} text-white`}
              />
              <Link
                href="/careers"
                className="text-[#F2F2F2] font-medium text-sm md:text-base"
              >
                {t('GeneralContracting.AllJobs')}
              </Link>
            </motion.div>
            <motion.h1
              className="heading-1 font-bold mt-6 text-white"
              variants={fadeUp}
            >
              {data.title}
            </motion.h1>
            <motion.div
              className="flex gap-4 mt-6 text-[#F2F2F2] font-medium text-sm md:text-base"
              variants={fadeUp}
            >
              {tagsArray.map((tag, i) => (
                <span key={i} className="flex items-center gap-4">
                  {tag}
                  {i < tagsArray.length - 1 && <Dot color="#ffffff" />}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="max-w-[768px] mx-auto py-8 md:py-15 px-4 space-y-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        {data.content.map((block, index) => {
          switch (block.type) {
            case 'heading':
              if (block.level === 4) {
                return (
                  <motion.h4
                    key={index}
                    className="text-2xl md:text-[32px] font-bold text-[#000404] py-2"
                    variants={fadeUp}
                  >
                    {block.children.map(extractText).join('')}
                  </motion.h4>
                )
              }
              if (block.level === 6) {
                return (
                  <motion.h6
                    key={index}
                    className="mt-4 text-[#000404] text-lg leading-relaxed"
                    variants={fadeUp}
                  >
                    {block.children.map(extractText).join('')}
                  </motion.h6>
                )
              }
              return null

            case 'paragraph':
              if (
                !block.children.some(
                  (c) => 'text' in c && c.text?.trim()?.length > 0
                )
              )
                return null
              return (
                <motion.p
                  key={index}
                  className="text-[#000404] text-base md:text-lg leading-relaxed pb-2"
                  variants={fadeUp}
                >
                  {block.children.map(extractText).join('')}
                </motion.p>
              )

            case 'list':
              return (
                <motion.ul
                  key={index}
                  className="list-disc ps-6 space-y-2"
                  variants={fadeUp}
                >
                  {block.children.map((li, liIndex) => {
                    if ('children' in li) {
                      return (
                        <li key={liIndex} className="text-[#000404] text-lg">
                          {li.children.map(extractText).join('')}
                        </li>
                      )
                    }
                    return null
                  })}
                </motion.ul>
              )

            default:
              return null
          }
        })}

        {/* Apply Button */}
        <motion.div variants={fadeUp}>
          <Link href={'/contact'} className="inline-block">
            <Button variant={'primary'} righticon={true} fullwidth>
              {t('GeneralContracting.Apply')}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
