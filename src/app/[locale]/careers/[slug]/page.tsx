'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'
import Button from '@/components/ui/Button'
export const runtime = 'edge'

const jobData = [
  {
    slug: 1,
    category: 'Healthcare Admin',
    title: 'Patient Coordinator',
    tags: ['Riyadh', 'Full-time', 'Hybrid'],
    description:
      'As a Patient Coordinator, you will facilitate patient journeys, ensuring seamless access to our services. Your role is crucial in enhancing patient satisfaction and experience. Join us in making a difference in healthcare delivery.',
  },
  {
    slug: 2,
    category: 'Customer Service',
    title: 'Patient Coordinator',
    tags: ['Riyadh', 'Full-time', 'Hybrid'],
    description:
      'As a Patient Coordinator, you will facilitate patient journeys, ensuring seamless access to our services. Your role is crucial in enhancing patient satisfaction and experience. Join us in making a difference in healthcare delivery.',
  },
  {
    slug: 3,
    category: 'Administrative Support',
    title: 'Patient Coordinator',
    tags: ['Riyadh', 'Full-time', 'Hybrid'],
    description:
      'As a Patient Coordinator, you will facilitate patient journeys, ensuring seamless access to our services. Your role is crucial in enhancing patient satisfaction and experience. Join us in making a difference in healthcare delivery.',
  },
]

export default function JobDetailsPage() {
  const params = useParams()
  const jobId = Number(params.slug)
  const job = jobData.find((j) => j.slug === jobId)

  if (!job) {
    return <div className="p-8">Job not found.</div>
  }

  return (
    <section>
      <div className="h-[387px] relative">
        <Image
          src={'/images/generalImages/singleCareer.jpg'}
          fill
          alt={'imageAlt'}
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-black/70 text-white px-2 py-3"></div>
        <div className="flex justify-center items-center w-full h-full flex-col absolute">
          <div className="flex ">
            {' '}
            <ChevronLeft className="text-white" />{' '}
            <Link
              href="/careers"
              className="text-[#F2F2F2] font-medium text-base ps-2"
            >
              All Jobs
            </Link>
          </div>
          <h1 className="heading-1 font-bold mt-6 text-white">{job.title}</h1>
          <div className="flex gap-4 mt-6 text-[#F2F2F2] font-medium text-base ">
            {job.tags.map((tag, i) => (
              <span key={i} className="flex items-center gap-4 ">
                {tag}
                {i < job.tags.length - 1 && <span>•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>{' '}
      <div className="max-w-[768px] mx-auto py-15">
        {' '}
        <h3 className="text-[32px] font-bold text-[#000404]">About the Role</h3>
        <p className="mt-4 text-[#000404] text-p leading-relaxed">
          {job.description}
        </p>
        <Link
          href={'/contact'}
          className="inline-block bg-primary text-white rounded-lg font-medium group cursor-pointer pt-6"
        >
          <Button variant={'primary'} rightIcon={true} fullWidth>
            Apply On This Job
          </Button>
        </Link>
      </div>
    </section>
  )
}
