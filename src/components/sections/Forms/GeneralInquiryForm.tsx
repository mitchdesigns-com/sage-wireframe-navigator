'use client'

import Button from '@/components/ui/Button'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import useContactForm from '../hooks/useContactForm'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'

export default function GeneralInquiryForm() {
  const {
    form,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleInputCheckChange,
    handleSubmit,
  } = useContactForm()
  const locale = useLocale()
  const t = useTranslations()

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name fields */}
      {submitStatus === 'success' && (
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex justify-center w-full pb-11">
            <Image
              src={`/images/generalImages/success.png`}
              alt={'success Image'}
              width={181}
              height={181}
              className={` `}
            />
          </div>
          <h5
            className={`text-2xl md:text-[32px] font-bold pb-4 text-[#1E1E1E]`}
          >
            {t('CSR.Thank')}
          </h5>
          <p
            className={`text-sm md:text-lg leading-[1.5] flex-1 text-Secondary-Text font-medium`}
          >
            {t('CSR.received')}
          </p>
          <p
            className={`text-sm md:text-[18px] leading-[1.5] flex-1 pt-2 text-Secondary-Text max-w-[384px]`}
          >
            {t('CSR.dedicated')}
          </p>
        </div>
      )}
      {submitStatus === 'error' ||
        (submitStatus === 'idle' && (
          <>
            <div className="flex gap-4 flex-col md:flex-row">
              {/* First name */}
              <div className="space-y-1 w-full">
                <label className="text-Primary-Black text-base md:text-lg font-medium">
                  {t('Form.firstName')} *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleInputChange}
                  className={`w-full h-12 px-3 py-2 bg-white border rounded-[6px] 
              focus:outline-none focus:ring-2 focus:ring-[#025850] 
              ${errors.firstName ? 'border-red-500' : 'border-[#D2D2D2]'}`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>

              {/* Last name */}
              <div className="space-y-1 w-full">
                <label className="text-Primary-Black text-base md:text-lg font-medium">
                  {t('Form.lastName')} *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleInputChange}
                  className={`w-full h-12 px-3 py-2 bg-white border rounded-[6px] 
              focus:outline-none focus:ring-2 focus:ring-[#025850]
              ${errors.lastName ? 'border-red-500' : 'border-[#D2D2D2]'}`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-Primary-Black text-base md:text-lg font-medium">
                {t('Form.email')} *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className={`w-full h-12 px-3 py-2 bg-white border rounded-[6px] 
            focus:outline-none focus:ring-2 focus:ring-[#025850]
            ${errors.email ? 'border-red-500' : 'border-[#D2D2D2]'}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label
                htmlFor="phone"
                className="text-Primary-Black text-base md:text-lg font-medium"
              >
                {t('Form.phone')} *
              </label>
              <PhoneInput
                id="phone"
                international
                defaultCountry="EG"
                value={form.phone}
                onChange={(value) => handleInputChange('phone', value || '')}
                className={`w-full h-12 px-3 py-2 bg-white border rounded-[6px]
            focus:outline-none focus:ring-2 focus:ring-[#025850]
            ${errors.phone ? 'border-red-500' : 'border-[#D2D2D2]'}`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="text-Primary-Black text-base md:text-lg font-medium">
                {t('Form.inquiry')} *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleInputChange}
                rows={3}
                className={`w-full px-3 py-2 bg-white border rounded-[6px] resize-none
            focus:outline-none focus:ring-2 focus:ring-[#025850]
            ${errors.message ? 'border-red-500' : 'border-[#D2D2D2]'}`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 pb-4">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={form.acceptTerms}
                onChange={handleInputCheckChange}
                className="peer appearance-none w-[18px] h-[18px] border border-Secondary-Scrub rounded bg-white 
            checked:bg-Primary-Spring checked:border-Primary-Spring relative 
            before:content-[''] before:absolute before:top-[2px] before:left-[5px] 
            before:w-[5px] before:h-[10px] before:border-r-[2px] before:border-b-[2px] 
            before:border-[#025850] before:rotate-45 before:opacity-0 checked:before:opacity-100"
              />
              <label
                htmlFor="acceptTerms"
                className="text-black text-[14px] leading-[1.5]"
              >
                {t('Form.acceptTerms')}
              </label>
            </div>
            {errors.acceptTerms && (
              <p className="text-red-500 text-sm">{errors.acceptTerms}</p>
            )}

            {/* Submit button */}
            <Button
              variant="primary"
              righticon={true}
              fullwidth
              disabled={isSubmitting}
              locale={locale as 'en' | 'ar'}
            >
              {isSubmitting ? t('Form.Submitting') : t('Form.Submit')}
            </Button>

            {/* Submission status feedback */}

            {/* {submitStatus === 'error' && (
        <p className="text-red-600 text-center">
          Something went wrong. Please try again.
        </p>
      )} */}
          </>
        ))}
    </form>
  )
}
