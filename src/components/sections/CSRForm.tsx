'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

type FormData = {
  fullName: string
  dateOfBirth: string
  nationality: string
  countryOfResidence: string
  email: string
  phoneNumber: string
  medicalCondition: string
  medicalHistory: string
  supportReason: string
  medicalReports: string
  preferredLanguage: string
  hearAbout: string
  confirmation: boolean
}

const initialData: FormData = {
  fullName: '',
  dateOfBirth: '',
  nationality: '',
  countryOfResidence: '',
  email: '',
  phoneNumber: '',
  medicalCondition: '',
  medicalHistory: '',
  supportReason: '',
  medicalReports: '',
  preferredLanguage: '',
  hearAbout: '',
  confirmation: false,
}

export default function MultiStepForm() {
  const [formData, setFormData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [step, setStep] = useState(1)
  const totalSteps = 3
  const steps = [
    { number: 1, label: 'Personal Information' },
    { number: 2, label: 'Medical Details' },
    { number: 3, label: 'Support' },
  ]
  // Validation rules
  const rules: Record<
    string,
    {
      required?: boolean
      pattern?: RegExp
      minLength?: number
      message: string
      validate?: (v: string) => boolean
    }
  > = {
    fullName: {
      required: true,
      minLength: 2,
      pattern: /^[a-zA-Z\s]+$/,
      message: 'Please enter a valid full name',
    },
    dateOfBirth: {
      required: true,
      message: 'Please enter a valid date of birth',
      validate: (v) => {
        const d = new Date(v)
        const age = new Date().getFullYear() - d.getFullYear()
        return age >= 0 && age <= 120
      },
    },
    nationality: {
      required: true,
      pattern: /^[a-zA-Z\s]+$/,
      message: 'Please enter a valid nationality',
    },
    countryOfResidence: {
      required: true,
      pattern: /^[a-zA-Z\s]+$/,
      message: 'Please enter a valid country',
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email',
    },
    phoneNumber: {
      required: true,
      pattern: /^[\+]?[0-9\s\-\(\)]{10,}$/,
      message: 'Please enter a valid phone number',
    },
    medicalCondition: {
      required: true,
      minLength: 10,
      message: 'Please provide a detailed medical condition',
    },
    medicalHistory: {
      required: true,
      minLength: 20,
      message: 'Please provide a detailed medical history',
    },
    supportReason: {
      required: true,
      minLength: 20,
      message: 'Please explain why you are seeking support',
    },
    medicalReports: {
      required: true,
      message: 'Please select if you can provide reports',
    },
    preferredLanguage: { required: true, message: 'Please select a language' },
    hearAbout: {
      required: true,
      message: 'Please select how you heard about us',
    },
    confirmation: { required: true, message: 'You must confirm to submit' },
  }

  const stepFields: Record<number, (keyof FormData)[]> = {
    1: [
      'fullName',
      'dateOfBirth',
      'nationality',
      'countryOfResidence',
      'email',
      'phoneNumber',
    ],
    2: [
      'medicalCondition',
      'medicalHistory',
      'supportReason',
      'medicalReports',
    ],
    3: ['preferredLanguage', 'hearAbout', 'confirmation'],
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.currentTarget
    const { name, value, type } = target

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' && target instanceof HTMLInputElement
          ? target.checked
          : value,
    }))

    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validateFields = (fields: (keyof FormData)[]) => {
    let valid = true
    const newErrors: Record<string, string> = {}

    fields.forEach((field) => {
      const val = formData[field]
      const rule = rules[field]

      if (rule) {
        if (rule.required && (val === '' || val === false)) {
          valid = false
          newErrors[field] = rule.message
        }
        if (typeof val === 'string' && val.trim()) {
          if (rule.pattern && !rule.pattern.test(val)) {
            valid = false
            newErrors[field] = rule.message
          }
          if (rule.minLength && val.trim().length < rule.minLength) {
            valid = false
            newErrors[field] = rule.message
          }
          if (rule.validate && !rule.validate(val)) {
            valid = false
            newErrors[field] = rule.message
          }
        }
      }
    })

    setErrors((prev) => ({ ...prev, ...newErrors }))
    return valid
  }

  const nextStep = () => {
    const fields = stepFields[step]
    if (validateFields(fields)) setStep((s) => s + 1)
  }

  const prevStep = () => setStep((s) => s - 1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateFields(stepFields[step])) {
      console.log('Submitted:', formData)
      alert('Form submitted successfully!')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto p-5 md:p-10 space-y-6 bg-Primary-Palm rounded-4xl max-w-[796px]"
    >
      <div className="border-b border-[#9ABCB9] text-white">
        <h5 className="pb-2 text-2xl md:text-[32px] font-bold">
          Submit a Case for Review
        </h5>
        <p className="text-base md:text-p pb-5">
          Please provide the following information to help us understand your
          needs
        </p>
      </div>
      <div className="grid grid-cols-3 max-w-[450px] w-full mx-auto mb-5">
        {steps.map(({ number, label }) => (
          <div key={number} className="flex items-center flex-col">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border 
          ${
            number === step
              ? 'bg-Primary-Spring text-Primary-Palm border-Primary-Spring'
              : number < step
                ? 'bg-transparent text-Dark-Scrub border-Dark-Scrub'
                : 'bg-transparent text-Dark-Scrub border-Dark-Scrub'
          }`}
            >
              {number}
            </div>
            <span
              className={`text-xs md:text-sm ${
                number === step
                  ? 'text-Primary-Spring font-bold'
                  : number < step
                    ? 'text-Dark-Scrub'
                    : 'text-Dark-Scrub'
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="form-step space-y-4">
          {[
            [
              { name: 'fullName', label: "Applicant's full name" },
              { name: 'dateOfBirth', label: 'Date of birth', type: 'date' },
            ],
            [
              {
                name: 'nationality',
                label: 'Nationality',
                type: 'select',
                options: ['Egyptian', 'American', 'French', 'Other'],
              },
              {
                name: 'countryOfResidence',
                label: 'Country of residence',
                type: 'select',
                options: ['Egypt', 'USA', 'France', 'Other'],
              },
            ],
            [
              { name: 'email', label: 'Email address', type: 'email' },
              { name: 'phoneNumber', label: 'Phone number' },
            ],
          ].map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-4 flex-col md:flex-row">
              {row.map((field) => (
                <div
                  key={field.name}
                  className="form-group flex flex-col gap-1 flex-1"
                >
                  <label
                    htmlFor={field.name}
                    className="text-white text-lg font-medium  leading-[1.5] block"
                  >
                    {field.label}
                  </label>

                  {field.type === 'select' ? (
                    <select
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof FormData] as string}
                      onChange={handleChange}
                      className="w-full h-12 px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
                    >
                      <option value="">Select {field.label}</option>
                      {'options' in field &&
                        field.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                    </select>
                  ) : (
                    <input
                      id={field.name}
                      type={field.type || 'text'}
                      name={field.name}
                      value={formData[field.name as keyof FormData] as string}
                      onChange={handleChange}
                      max={
                        field.type === 'date'
                          ? new Date().toISOString().split('T')[0]
                          : undefined
                      }
                      className="w-full h-12 px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
                    />
                  )}

                  {errors[field.name] && (
                    <p className="error-message text-red-500 text-sm">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      {/* STEP 2 */}
      {step === 2 && (
        <div className="form-step space-y-5">
          <div className="form-group">
            <label
              htmlFor="medicalCondition"
              className="text-white text-lg font-medium  leading-[1.5] block pb-2"
            >
              Primary medical condition / diagnosis
            </label>
            <textarea
              id="medicalCondition"
              name="medicalCondition"
              value={formData.medicalCondition}
              onChange={handleChange}
              rows={3}
              className="w-full  px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
            />
            {errors.medicalCondition && (
              <p className="text-red-500 text-sm">{errors.medicalCondition}</p>
            )}
          </div>

          <div className="form-group">
            <label
              htmlFor="medicalHistory"
              className="text-white text-lg font-medium  leading-[1.5] block pb-2"
            >
              Brief Description of medical history & current symptoms
              <p className="pt-1 text-xs font-regular">
                Please provide as much detail as possible including duration and
                previous treatment
              </p>
            </label>
            <textarea
              id="medicalHistory"
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
              rows={3}
              className="w-full  px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
            />
            {errors.medicalHistory && (
              <p className="text-red-500 text-sm">{errors.medicalHistory}</p>
            )}
          </div>

          <div className="form-group">
            <label
              htmlFor="supportReason"
              className="text-white text-lg font-medium  leading-[1.5] block pb-2"
            >
              Why are you seeking support from SAGE's CSR Initiative?
              <p className="pt-1 text-xs font-regular">
                Explain your specific need for medical tourism or why your case
                is considered rare/complex
              </p>
            </label>
            <textarea
              id="supportReason"
              name="supportReason"
              value={formData.supportReason}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
            />
            {errors.supportReason && (
              <p className="text-red-500 text-sm">{errors.supportReason}</p>
            )}
          </div>

          <div className="form-group">
            <p className="text-white text-lg font-medium  leading-[1.5] block">
              Are you able to provide medical reports and diagnostic images?
            </p>
            <div className="flex gap-4">
              {['Yes', 'No'].map((val) => (
                <label
                  key={val}
                  className="flex items-center gap-2 text-white radio"
                >
                  <input
                    type="radio"
                    name="medicalReports"
                    value={val}
                    checked={formData.medicalReports === val}
                    onChange={handleChange}
                    //       className="peer appearance-none w-[18px] h-[18px] border border-Secondary-Scrub
                    //       rounded bg-white checked:bg-Primary-Spring checked:border-Primary-Spring
                    //  relative before:content-[''] before:absolute before:top-[2px] before:left-[5px]
                    //   before:w-[5px] before:h-[10px] before:border-r-[2px] before:border-b-[2px]
                    //    before:border-[#025850] before:rotate-45 before:opacity-0 checked:before:opacity-100"
                  />
                  <span className="radio-label"> {val}</span>
                </label>
              ))}
            </div>
            {errors.medicalReports && (
              <p className="text-red-500 text-sm">{errors.medicalReports}</p>
            )}
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="form-step space-y-4">
          <div>
            <p className="mb-1 text-white text-lg font-medium  leading-[1.5] block">
              Choose preferred language for communication
            </p>
            <div className="flex gap-4 text-white">
              {['Arabic', 'English', 'French'].map((lang) => (
                <label
                  key={lang}
                  className="flex items-center gap-2 cursor-pointer radio"
                >
                  <input
                    type="radio"
                    name="preferredLanguage"
                    value={lang}
                    checked={formData.preferredLanguage === lang}
                    onChange={handleChange}
                    //             className="peer appearance-none w-[18px] h-[18px] border border-Secondary-Scrub rounded-full bg-white checked:bg-Primary-Spring checked:border-Primary-Spring
                    // relative before:content-[''] before:absolute before:top-[2px] before:left-[5px] before:w-[5px] before:h-[10px] before:border-r-[2px] before:border-b-[2px] before:border-[#025850] before:rotate-45 before:opacity-0 checked:before:opacity-100"
                  />
                  <span className="text-white radio-label">{lang}</span>
                </label>
              ))}
            </div>
            {errors.preferredLanguage && (
              <p className="text-red-500 text-sm">{errors.preferredLanguage}</p>
            )}
          </div>

          <div className="form-group">
            <label
              htmlFor="hearAbout"
              className="block mb-1 font-medium text-white"
            >
              How did you hear about our CSR?
            </label>
            <select
              id="hearAbout"
              name="hearAbout"
              value={formData.hearAbout}
              onChange={handleChange}
              className="w-full h-12 px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
            >
              <option value="">Select an option</option>
              <option value="social media">Social Media</option>
              <option value="website">Website</option>
              <option value="friend">Friend/Referral</option>
              <option value="other">Other</option>
            </select>
            {errors.hearAbout && (
              <p className="text-red-500 text-sm">{errors.hearAbout}</p>
            )}
          </div>

          <label className="flex items-start gap-2 text-white text-sm">
            <input
              type="checkbox"
              name="confirmation"
              checked={formData.confirmation}
              onChange={handleChange}
              className="peer appearance-none w-[28px] h-[18px] border border-Secondary-Scrub
                         rounded bg-white checked:bg-Primary-Spring checked:border-Primary-Spring
                    relative before:content-[''] before:absolute before:top-[2px] before:left-[5px]
                     before:w-[5px] before:h-[10px] before:border-r-[2px] before:border-b-[2px]
                      before:border-[#025850] before:rotate-45 before:opacity-0 checked:before:opacity-100"
            />
            By submitting this form, I confirm that the information provided is
            accurate to the best of my knowledge and I understand that this
            application does not guarantee acceptance into the SAGE CSR program.
          </label>
          {errors.confirmation && (
            <p className="text-red-500 text-sm">{errors.confirmation}</p>
          )}
        </div>
      )}

      {/* Navigation Buttons */}
      <div
        className={`flex ${
          step > 1 && step < totalSteps
            ? 'justify-between'
            : step === totalSteps
              ? 'justify-between'
              : 'justify-end'
        }`}
      >
        {step > 1 && (
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 text-[#9ABCB9] font-bold rounded-full cursor-pointer flex items-center gap-3 hover:gap-4 hover:transition-all hover:duration-200 hover:bg-white"
            >
              <ChevronLeft /> Back
            </button>
          </div>
        )}

        {step < totalSteps && (
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={nextStep}
              className="px-8 md:px-28 py-3 md:py-[17px] bg-Primary-Spring text-Primary-Palm rounded-full font-bold cursor-pointer flex items-center gap-3 hover:gap-4 hover:transition-all hover:duration-200 hover:bg-white"
            >
              <ChevronRight /> Next
            </button>
          </div>
        )}

        {step === totalSteps && (
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="px-8 md:px-28 py-3 md:py-[17px] bg-Primary-Spring text-Primary-Palm rounded-full font-bold cursor-pointer flex items-center gap-3 hover:gap-4 hover:transition-all hover:duration-200 hover:bg-white"
            >
              <ChevronRight /> Submit
            </button>{' '}
          </div>
        )}
      </div>
    </form>
  )
}
