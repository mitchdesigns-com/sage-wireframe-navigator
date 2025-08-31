'use client'
import React, { useState } from 'react'

const slides = [
  {
    title: 'Leading with purpose.',
    description:
      'We design and build people-focused neighborhoods and genuine experiences that celebrate and stimulate connections amongst the community and nature. We ultimately masterplan and design for these values.',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Building trust.',
    description:
      'We foster relationships grounded in transparency and reliability, ensuring every project upholds the highest standards.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Sustainability first.',
    description:
      'Our designs prioritize environmental stewardship, promoting sustainable living to protect future generations.',
    image:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Community centric.',
    description:
      'We engage with local communities to create spaces that support cultural diversity and social interaction.',
    image:
      'https://images.unsplash.com/photo-1486308510493-cb463da13475?auto=format&fit=crop&w=800&q=80',
  },
]

export default function VerticalSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="max-w-xl mx-auto px-5 py-10 select-none">
      {/* Title */}
      <h1 className="text-4xl font-light text-center mb-2">
        Rooted in our values.
      </h1>

      {/* Slide Counter */}
      <p className="text-center text-sm mb-6">
        {currentIndex + 1} of {slides.length}
      </p>

      {/* Slider Container */}
      <div className="relative bg-white shadow-lg rounded-md overflow-hidden">
        {/* Image */}
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="w-full h-64 object-cover"
        />

        {/* Caption */}
        <div className="p-5 bg-white">
          <h2 className="font-semibold text-lg">
            {slides[currentIndex].title}
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            {slides[currentIndex].description}
          </p>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded border border-gray-200 hover:bg-gray-100"
          aria-label="Previous Slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded border border-gray-200 hover:bg-gray-100"
          aria-label="Next Slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </button>
      </div>
    </div>
  )
}
