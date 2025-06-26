'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, User, Mail, Phone, MessageSquare, Car, AlertCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  vehicle: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  className?: string
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          vehicle: data.vehicle,
          subject: data.subject,
          message: data.message,
          _replyto: data.email,
          _subject: `Contact Form: ${data.subject}`,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setSubmitError('Failed to send message. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={`card-premium p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-performance-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-performance-green" />
        </div>
        <h3 className="text-2xl font-bold text-bmw-gray-900 mb-4">Message Sent!</h3>
        <p className="text-bmw-gray-600 mb-6">
          Thank you for contacting us. We'll get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="min-w-[150px]"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div className={`card-premium p-8 ${className}`}>
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-bmw-gray-900 mb-4">
          Get In Touch
        </h3>
        <p className="text-bmw-gray-600">
          Ready to experience the difference? Send us a message and we'll get back to you promptly.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <div>
            <label className="block text-sm font-medium text-bmw-gray-700 mb-2">
              Vehicle (Optional)
            </label>
            <Input
              {...register('vehicle')}
              placeholder="2023 BMW M4"
              icon={<Car className="w-4 h-4" />}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-bmw-gray-700 mb-2">
            Subject *
          </label>
          <Input
            {...register('subject')}
            placeholder="Service inquiry, quote request, etc."
            error={errors.subject?.message}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-bmw-gray-700 mb-2">
            Message *
          </label>
          <textarea
            {...register('message')}
            rows={5}
            className="input-premium w-full resize-none"
            placeholder="Tell us about your vehicle and what service you need..."
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" />
              {errors.message.message}
            </p>
          )}
        </div>

        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" />
              {submitError}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-4">
          <p className="text-sm text-bmw-gray-600">
            * Required fields
          </p>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="btn-premium min-w-[150px]"
            icon={<Send className="w-4 h-4" />}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm