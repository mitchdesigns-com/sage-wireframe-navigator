'use client'

import Button from '@/components/ui/Button'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import useBusinessInquiryForm from '../hooks/useBusinessInquiryForm'

export default function BusinessInquiryForm() {
  const {
    form,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleInputCheckChange,
    handleSubmit,
  } = useBusinessInquiryForm()

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name fields */}
      <div className="flex gap-4 flex-col md:flex-row">
        {/* First name */}
        <div className="space-y-1 w-full">
          <label className="text-Primary-Black text-base md:text-lg font-medium">
            First name*
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
            Last name*
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
      <div className="flex gap-4 flex-col md:flex-row">
        {/* First name */}
        <div className="space-y-1 w-full">
          <label className="text-Primary-Black text-base md:text-lg font-medium">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleInputChange}
            className={`w-full h-12 px-3 py-2 bg-white border rounded-[6px] 
              focus:outline-none focus:ring-2 focus:ring-[#025850] 
              ${errors.companyName ? 'border-red-500' : 'border-[#D2D2D2]'}`}
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm">{errors.companyName}</p>
          )}
        </div>

        {/* Last name */}
        <div className="space-y-1 w-full">
          <label className="text-Primary-Black text-base md:text-lg font-medium">
            Position
          </label>
          <input
            type="text"
            name="position"
            value={form.position}
            onChange={handleInputChange}
            className={`w-full h-12 px-3 py-2 bg-white border rounded-[6px] 
              focus:outline-none focus:ring-2 focus:ring-[#025850]
              ${errors.position ? 'border-red-500' : 'border-[#D2D2D2]'}`}
          />
          {errors.position && (
            <p className="text-red-500 text-sm">{errors.position}</p>
          )}
        </div>
      </div>
      {/* Email */}
      <div className="space-y-1">
        <label className="text-Primary-Black text-base md:text-lg font-medium">
          Email*
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
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div className="space-y-1">
        <label
          htmlFor="phone"
          className="text-Primary-Black text-base md:text-lg font-medium"
        >
          Phone number*
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
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label className="text-Primary-Black text-base md:text-lg font-medium">
          What kind of partnership{' '}
        </label>
        <textarea
          name="partnership"
          value={form.partnership}
          onChange={handleInputChange}
          rows={3}
          className={`w-full px-3 py-2 bg-white border rounded-[6px] resize-none
            focus:outline-none focus:ring-2 focus:ring-[#025850]
            ${errors.partnership ? 'border-red-500' : 'border-[#D2D2D2]'}`}
        />
        {errors.partnership && (
          <p className="text-red-500 text-sm">{errors.partnership}</p>
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
          I accept the Terms
        </label>
      </div>
      {errors.acceptTerms && (
        <p className="text-red-500 text-sm">{errors.acceptTerms}</p>
      )}

      {/* Submit button */}
      <Button
        variant="primary"
        rightIcon={true}
        fullWidth
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </Button>

      {/* Submission status feedback */}

      {submitStatus === 'error' && (
        <p className="text-red-600 text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
