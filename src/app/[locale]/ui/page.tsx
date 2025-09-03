import React from 'react'
import Button from '../../components/ui/Button'
import VerticalSlider from '../../components/ui/VerticalSlider'

export default function page() {
  return (
    <div>
      <Button variant="primary" rightIcon={true} size="large">
        Get Started
      </Button>
      <Button variant="light" rightIcon={true}>
        Schedule Call
      </Button>

      <Button variant="dark" leftIcon={true}>
        Add New
      </Button>
      <Button variant="primary" size="small">
        Save
      </Button>

      <Button variant="dark-link" rightIcon={true} href="/learn-more">
        Learn More
      </Button>
      <Button variant="light-link" leftIcon={true}>
        Contact Us
      </Button>

      <Button variant="primary" loading>
        Processing...
      </Button>
      <Button variant="light" disabled>
        Unavailable
      </Button>
      <VerticalSlider />
    </div>
  )
}
