'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Calendar, User, Mail, Phone, Car, Wrench, Clock, Send, AlertCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  vehicle: z.string().min(3, 'Please specify your vehicle'),
  year: z.string().min(4, 'Please enter the year'),
  mileage: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
  description: z.string().min(10, 'Please describe the issue or service needed'),
  urgency: z.enum(['low', 'medium', 'high']),
})

type BookingFormData = z.infer<typeof bookingSchema>

interface BookingFormProps {
  className?: string
}

const services = [
  'Oil Change & Maintenance',
  'Brake Service',
  'Performance Tuning',
  'Diagnostic Scan',
  'Transmission Service',
  'Suspension Work',
  'Engine Repair',
  'Turbo Upgrade',
  'Exhaust System',
  'Electrical Diagnosis',
  'Track Preparation',
  'Exotic Car Service',
  'Other - Specify in Description'
]

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
]

const BookingForm: React.FC<BookingFormProps> = ({ className = '' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      urgency: 'medium'
    }
  })

  const urgency = watch('urgency')

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('https://formspree.io/f/YOUR_BOOKING_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _replyto: data.email,
          _subject: `Service Booking: ${data.service} - ${data.vehicle}`,
          submissionType: 'Service Booking',
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
      } else {
        throw new Error('Failed to submit booking')
      }
    } catch (error) {
      setSubmitError('Failed to submit booking. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={`card-premium p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-performance-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Calendar className="w-8 h-8 text-performance-green" />
        </div>
        <h3 className="text-2xl font-bold text-bmw-gray-900 mb-4">Booking Submitted!</h3>
        <p className="text-bmw-gray-600 mb-6">
          Thank you for your service request. We'll contact you within 2 hours to confirm your appointment.
        </p>
        <div className="bg-bmw-blue-50 border border-bmw-blue-200 rounded-lg p-4 mb-6">
          <p className="text-bmw-blue-700 text-sm">
            <strong>Next Steps:</strong> Our service advisor will call you to confirm availability and discuss any specific requirements for your vehicle.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="min-w-[150px]"
        >
          Book Another Service
        </Button>
      </div>
    )
  }

  return (
    <div className={`card-premium p-8 ${className}`}>
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-bmw-gray-900 mb-4">
          Schedule Your Service
        </h3>
        <p className="text-bmw-gray-600">
          Book your appointment and our BMW specialists will take care of the rest.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-bmw-gray-700 mb-2">
              Full Name *
            </label>
            <Input
              {...register('name')}
              placeholder="John Smith"
              icon={<User className="w-4 h-4" />}
              error={errors.name?.message}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-bmw-gray-700 mb-2">
              Email Address *
            </label>
            <Input
              {...register('email')}
              type="email"
              placeholder="john@example.com"
              icon={<Mail className="w-4 h-4" />}
              error={errors.email?.message}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-bmw-gray-700 mb-2">
            Phone Number *
          </label>
          <Input
            {...register('phone')}
            type="tel"
            placeholder="(555) 123-4567"
            icon={<Phone className="w-4 h-4" />}
            error={errors.phone?.message}
          />
        </div>

        {/* Vehicle Information */}
        <div className="border-t border-bmw-gray-200 pt-6">
          <h4 className="text-lg font-semibold text-bmw-gray-900 mb-4">Vehicle Information</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-bmw-gray-700 mb-2">
                Vehicle Make & Model *
              </label>
              <Input
                {...register('vehicle')}
                placeholder="BMW M4 Competition"
                icon={<Car className="w-4 h-4" />}
                error={errors.vehicle?.message}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-bmw-gray-700 mb-2">
                Year *
              </label>
              <Input
                {...register('year')}
                placeholder="2023"
                error={errors.year?.message}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-bmw-gray-700 mb-2">
              Mileage (Optional)
            </label>
            <Input
              {...register('mileage')}
              placeholder="25,000"
              type="number"
            />
          </div>
        </div>

        {/* Service Details */}
        <div className="border-t border-bmw-gray-200 pt-6">
          <h4 className="text-lg font-semibold text-bmw-gray-900 mb-4">Service Details</h4>
          
          <div>
            <label className="block text-sm font-medium text-bmw-gray-700 mb-2">
              Type of Service *
            </label>
            <select
              {...register('service')}
              className="input-premium w-full"
            >
              <option value="">Select a service...</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                {errors.service.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-bmw-gray-700 mb-2">
                Preferred Date *
              </label>
              <Input
                {...register('preferredDate')}
                type="date"
                min={new Date().toISOString().split('T')[0]}
                icon={<Calendar className="w-4 h-4" />}
                error={errors.preferredDate?.message}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-bmw-gray-700 mb-2">
                Preferred Time *
              </label>
              <select
                {...register('preferredTime')}
                className="input-premium w-full"
              >
                <option value="">Select time...</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.preferredTime && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  {errors.preferredTime.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-bmw-gray-700 mb-2">
              Urgency Level
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  {...register('urgency')}
                  type="radio"
                  value="low"
                  className="mr-2 text-bmw-blue-500"
                />
                <span className="text-sm">Low - Within a week</span>
              </label>
              <label className="flex items-center">
                <input
                  {...register('urgency')}
                  type="radio"
                  value="medium"
                  className="mr-2 text-bmw-blue-500"
                />
                <span className="text-sm">Medium - Within 2-3 days</span>
              </label>
              <label className="flex items-center">
                <input
                  {...register('urgency')}
                  type="radio"
                  value="high"
                  className="mr-2 text-bmw-blue-500"
                />
                <span className="text-sm">High - ASAP</span>
              </label>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-bmw-gray-700 mb-2">
              Description of Issue/Service Needed *
            </label>
            <textarea
              {...register('description')}
              rows={4}
              className="input-premium w-full resize-none"
              placeholder="Please describe the symptoms, issues, or specific service requirements..."
            />
            {errors.description && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                {errors.description.message}
              </p>
            )}
          </div>
        </div>

        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" />
              {submitError}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6 border-t border-bmw-gray-200">
          <div className="text-sm text-bmw-gray-600">
            <p>* Required fields</p>
            <p className="mt-1">We'll confirm your appointment within 2 hours.</p>
          </div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="btn-premium min-w-[180px]"
            icon={<Send className="w-4 h-4" />}
          >
            {isSubmitting ? 'Submitting...' : 'Book Appointment'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BookingForm