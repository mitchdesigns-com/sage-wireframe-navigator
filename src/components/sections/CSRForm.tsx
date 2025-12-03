'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { use, useState } from 'react'

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
  medicalReports: boolean
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
  medicalReports: false,
  preferredLanguage: '',
  hearAbout: '',
  confirmation: false,
}

export default function MultiStepForm() {
  const locale = useLocale()
  const t = useTranslations()

  const [formData, setFormData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [step, setStep] = useState(1)
  const totalSteps = 3
  const steps = [
    { number: 1, label: t('CSR.PersonalInformation') },
    { number: 2, label: t('CSR.MedicalDetails') },
    { number: 3, label: t('CSR.Support') },
  ]
  const [isSubmitting, setIsSubmitting] = useState(false)
  console.log(isSubmitting)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')
  const resetForm = () => {
    setFormData(initialData)
    setErrors({})
  }
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
      message: t('CSR.errorFullName'),
    },
    dateOfBirth: {
      required: true,
      message: t('CSR.errorDate'),
      validate: (v) => {
        const d = new Date(v)
        const age = new Date().getFullYear() - d.getFullYear()
        return age >= 0 && age <= 120
      },
    },
    nationality: {
      required: true,
      pattern: /^[a-zA-Z\s]+$/,
      message: t('CSR.errorNationality'),
    },
    countryOfResidence: {
      required: true,
      pattern: /^[a-zA-Z\s]+$/,
      message: t('CSR.errorCountry'),
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: t('CSR.errorEmail'),
    },
    phoneNumber: {
      required: true,
      pattern: /^[\+]?[0-9\s\-\(\)]{10,}$/,
      message: t('CSR.errorPhone'),
    },
    medicalCondition: {
      required: true,
      minLength: 10,
      message: t('CSR.errorPrimaryCondition'),
    },
    medicalHistory: {
      required: true,
      minLength: 20,
      message: t('CSR.errorPrimaryCondition'),
    },
    supportReason: {
      required: true,
      minLength: 20,
      message: t('CSR.errorPrimaryCondition'),
    },
    medicalReports: {
      required: true,
      message: t('CSR.errorMedicalReports'),
    },
    preferredLanguage: { required: true, message: t('CSR.errorLanguage') },
    hearAbout: {
      required: true,
      message: t('CSR.errorHearAbout'),
    },
    confirmation: { required: true, message: t('CSR.errorAcceptTerms') },
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('idle')

    setIsSubmitting(true)

    const payload = {
      data: { ...formData },
    }

    if (validateFields(stepFields[step])) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/csr-forms`,
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
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto  space-y-6 bg-Primary-Palm rounded-4xl max-w-[796px] ${submitStatus === 'success' ? 'py-8 md:py-28 px-4' : 'p-5 md:p-10'}`}
    >
      {submitStatus === 'error' ||
        (submitStatus === 'idle' && (
          <div className="border-b border-[#9ABCB9] text-white">
            <h5 className="pb-2 text-2xl md:text-[32px] font-bold">
              {t('CSR.title')}
            </h5>
            <p className="text-base md:text-lg pb-5">{t('CSR.description')}</p>
          </div>
        ))}
      {submitStatus === 'error' ||
        (submitStatus === 'idle' && (
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
                  className={`text-xs md:text-sm text-nowrap ${
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
        ))}
      {submitStatus === 'error' ||
        (submitStatus === 'idle' && (
          <>
            {/* STEP 1 */}
            {step === 1 && (
              <div className="form-step space-y-4">
                {[
                  [
                    { name: 'fullName', label: t('CSR.fullName') },
                    {
                      name: 'dateOfBirth',
                      label: t('CSR.date'),
                      type: 'date',
                    },
                  ],
                  [
                    {
                      name: 'nationality',
                      label: t('CSR.Nationality'),
                      type: 'select',
                      options: ['Egyptian', 'American', 'French', 'Other'],
                    },
                    {
                      name: 'countryOfResidence',
                      label: t('CSR.Country'),
                      type: 'select',
                      options: ['Egypt', 'USA', 'France', 'Other'],
                    },
                  ],
                  [
                    { name: 'email', label: t('CSR.email'), type: 'email' },
                    { name: 'phoneNumber', label: t('CSR.phone') },
                  ],
                ].map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex gap-4 flex-col md:flex-row"
                  >
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
                          <div className="relative w-full">
                            <select
                              id={field.name}
                              name={field.name}
                              value={
                                formData[field.name as keyof FormData] as string
                              }
                              onChange={handleChange}
                              className="w-full h-12 px-3 pr-10 py-2 bg-white border border-[#D2D2D2] rounded-[6px] 
               focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent 
               appearance-none"
                            >
                              <option value="">
                                {t('CSR.Select')} {field.label}
                              </option>
                              {'options' in field &&
                                field.options?.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                            </select>

                            {/* Custom Chevron icon */}
                            <ChevronRight
                              className="rotate-90 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                              size={20}
                            />
                          </div>
                        ) : (
                          <input
                            id={field.name}
                            type={field.type || 'text'}
                            name={field.name}
                            value={
                              formData[field.name as keyof FormData] as string
                            }
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
                    {t('CSR.primaryCondition')}
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
                    <p className="text-red-500 text-sm">
                      {errors.medicalCondition}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label
                    htmlFor="medicalHistory"
                    className="text-white text-lg font-medium  leading-[1.5] block pb-2"
                  >
                    {t('CSR.briefDescription')}
                    <p className="pt-1 text-xs font-regular">
                      {t('CSR.provideDetail')}
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
                    <p className="text-red-500 text-sm">
                      {errors.medicalHistory}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label
                    htmlFor="supportReason"
                    className="text-white text-lg font-medium  leading-[1.5] block pb-2"
                  >
                    {t('CSR.Initiative')}

                    <p className="pt-1 text-xs font-regular">
                      {t('CSR.specificTourism')}
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
                    <p className="text-red-500 text-sm">
                      {errors.supportReason}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <p className="text-white text-lg font-medium  leading-[1.5] block">
                    {t('CSR.medicalReports')}
                  </p>
                  <div className="flex gap-4">
                    {[t('CSR.Yes'), t('CSR.No')].map((val) => (
                      <label
                        key={val}
                        className="flex items-center gap-2 text-white radio"
                      >
                        <input
                          type="radio"
                          name="medicalReports"
                          value={val === 'Yes' ? 'true' : 'false'}
                          checked={formData.medicalReports === (val === 'Yes')}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              medicalReports: e.target.value === 'true',
                            })
                          }
                        />
                        <span className="radio-label">{val}</span>
                      </label>
                    ))}
                  </div>
                  {errors.medicalReports && (
                    <p className="text-red-500 text-sm">
                      {errors.medicalReports}
                    </p>
                  )}
                </div>
              </div>
            )}
            {/* STEP 3 */}
            {step === 3 && (
              <div className="form-step space-y-4">
                <div>
                  <p className="mb-1 text-white text-lg font-medium  leading-[1.5] block">
                    {t('CSR.language')}
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
                    <p className="text-red-500 text-sm">
                      {errors.preferredLanguage}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label
                    htmlFor="hearAbout"
                    className="block mb-1 font-medium text-white"
                  >
                    {t('CSR.hearAbout')}
                  </label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    className="w-full h-12 px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
                  >
                    <option value=""> {t('CSR.SelectOption')}</option>
                    <option value="social media">
                      {' '}
                      {t('CSR.SocialMedia')}
                    </option>
                    <option value="website"> {t('CSR.Website')}</option>
                    <option value="friend"> {t('CSR.FriendReferral')}</option>
                    <option value="other"> {t('CSR.Other')}</option>
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
                  {t('CSR.Approve')}
                </label>
                {errors.confirmation && (
                  <p className="text-red-500 text-sm">{errors.confirmation}</p>
                )}
              </div>
            )}{' '}
          </>
        ))}
      {submitStatus === 'success' && (
        <div className="flex flex-col justify-center items-center text-white text-center">
          <div className="flex justify-center w-full pb-11">
            <Image
              src={`/images/generalImages/success.png`}
              alt={'success Image'}
              width={181}
              height={181}
              className={` `}
            />
          </div>
          <h5 className={`text-2xl md:text-[32px] font-bold pb-4`}>
            {t('CSR.Thank')}
          </h5>
          <p className={`text-sm md:text-[16px] leading-[1.5] flex-1 `}>
            {t('CSR.received')}
          </p>
          <p className={`text-sm md:text-[16px] leading-[1.5] flex-1 `}>
            {t('CSR.dedicated')}
          </p>
        </div>
      )}
      {/* Navigation Buttons */}
      {submitStatus === 'error' ||
        (submitStatus === 'idle' && (
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
                  {locale === 'en' ? <ChevronLeft /> : <ChevronRight />}
                  {t('CSR.Back')}
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
                  {locale === 'ar' ? <ChevronLeft /> : <ChevronRight />}{' '}
                  {t('CSR.Next')}
                </button>
              </div>
            )}

            {step === totalSteps && (
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="px-8 md:px-28 py-3 md:py-[17px] bg-Primary-Spring text-Primary-Palm rounded-full font-bold cursor-pointer flex items-center gap-3 hover:gap-4 hover:transition-all hover:duration-200 hover:bg-white"
                >
                  {locale === 'ar' ? <ChevronLeft /> : <ChevronRight />}{' '}
                  {t('CSR.Submit')}
                </button>{' '}
              </div>
            )}
          </div>
        ))}
    </form>
  )
}
