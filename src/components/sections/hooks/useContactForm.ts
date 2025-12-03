import { useTranslations } from 'next-intl'
import { useState } from 'react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  acceptTerms: boolean
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
  acceptTerms?: string
}

const useContactForm = () => {
  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    acceptTerms: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const handleInputChange = (
    eOrName: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
    value?: string
  ) => {
    if (typeof eOrName === 'string') {
      setForm((prev) => ({ ...prev, [eOrName]: value || '' }))
      setErrors((prev) => ({ ...prev, [eOrName]: '' }))
    } else {
      const { name, value } = eOrName.target
      setForm((prev) => ({ ...prev, [name]: value }))
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleInputCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: checked }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }
  const t = useTranslations()

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!form.firstName.trim() || form.firstName.length < 3) {
      newErrors.firstName = t('Form.errorFirstName')
    }
    if (!form.lastName.trim() || form.lastName.length < 3) {
      newErrors.lastName = t('Form.errorLastName')
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t('Form.errorEmail')
    }
    if (!form.phone.trim()) {
      newErrors.phone = t('Form.errorPhone')
    }
    // if (!form.message.trim() || form.message.length < 5) {
    //   newErrors.message = 'Message must be at least 5 characters.'
    // }
    if (!form.acceptTerms) {
      newErrors.acceptTerms = t('Form.errorAcceptTerms')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const resetForm = () => {
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      acceptTerms: false,
    })
    setErrors({})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('idle')

    if (!validate()) return

    setIsSubmitting(true)

    const payload = {
      data: { ...form },
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/general-inquiry-forms`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      )

      if (!res.ok) throw new Error('Failed to submit form')

      await res.json()
      setSubmitStatus('success')
      resetForm()
    } catch (err) {
      console.error(err)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    form,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleInputCheckChange,
    handleSubmit,
    resetForm,
  }
}

export default useContactForm
