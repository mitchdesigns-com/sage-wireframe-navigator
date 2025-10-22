import Button from '@/components/ui/Button'
import VerticalSlider from '@/components/ui/VerticalSlider'
export const runtime = 'edge'

export default function page() {
  return (
    <div>
      <Button variant="dark" leftIcon={true}>
        Add New
      </Button>
      <Button variant="primary" size="small">
        Save
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
