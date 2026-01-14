import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="bg-white lg:py-28 py-14">
      <div className="container-custom mx-auto text-center">
        {/* Main Heading */}
        <h1 className="heading-xl mb-6 [&>span]:block">
          <span className="font-normal">Your Trusted Gateway to</span>
          Saudi&apos;s Medical Care
        </h1>

        {/* Subtitle */}
        <p className="text-body mx-auto mb-8 max-w-5xl">
          Experience the perfect blend of healthcare expertise, cultural
          hospitality, and personalized service with Sage. We are dedicated to
          guiding you through every step of your medical journey.
        </p>

        {/* CTA Button */}
        <Button href="/contact" size="large" variant="primary">
          Inquire Now{' '}
        </Button>

        {/* Hero Image Placeholder */}
        <div className="mt-12">
          <div className="mx-auto flex aspect-video items-center justify-center rounded-2xl bg-gray-200">
            <div className="text-center text-gray-400">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-lg bg-gray-300">
                <svg
                  className="h-12 w-12 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm">Hero Video/Image Placeholder</p>
              <p className="mt-1 text-xs">Healthcare facilities showcase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
