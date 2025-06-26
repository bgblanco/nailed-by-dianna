'use client'

import React from 'react'
import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  MessageSquare,
  Navigation,
  Send,
  Star,
  CheckCircle
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ContactForm from '@/components/forms/ContactForm'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our service advisors',
      value: '(123) 456-7890',
      href: 'tel:+1234567890',
      available: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message',
      value: 'info@bavarianautoweekz.com',
      href: 'mailto:info@bavarianautoweekz.com',
      available: 'Response within 2-4 hours'
    },
    {
      icon: MessageSquare,
      title: 'Text Us',
      description: 'Quick questions and updates',
      value: '(123) 456-7890',
      href: 'sms:+1234567890',
      available: 'Mon-Sat: 8AM-8PM'
    }
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  const emergencyServices = [
    'Roadside assistance coordination',
    'Towing service recommendations',
    'Emergency diagnostic services',
    'After-hours consultation (by appointment)'
  ]

  const faqs = [
    {
      question: 'Do you work on vehicles other than BMW?',
      answer: 'Yes! While we specialize in BMW, we also service exotic vehicles like Lamborghini, Ferrari, McLaren, and other high-performance cars. Our owner personally owns and modifies these vehicles.'
    },
    {
      question: 'How far in advance should I book?',
      answer: 'For routine maintenance, we can usually accommodate same-week appointments. For performance work or complex repairs, we recommend booking 1-2 weeks in advance.'
    },
    {
      question: 'Do you offer warranties on your work?',
      answer: 'Absolutely. All our work comes with a comprehensive warranty. Parts are covered by manufacturer warranty, and our labor is guaranteed for 12 months or 12,000 miles.'
    },
    {
      question: 'Can you work on warranty vehicles?',
      answer: 'Yes, we can perform maintenance and repairs on warranty vehicles without voiding your warranty. We use genuine BMW parts and follow manufacturer procedures.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-bmw-blue-600 via-bmw-blue-700 to-bmw-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="bmw" size="lg" className="mb-6 bg-white/20 text-white border-white/30">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Let's Talk About Your Vehicle
            </h1>
            
            <p className="text-xl md:text-2xl text-bmw-blue-100 mb-8 max-w-3xl mx-auto">
              Whether you need routine maintenance, performance upgrades, or have questions about your BMW or exotic car, we're here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" variant="primary" className="bg-white text-bmw-blue-700 hover:bg-bmw-gray-100 min-w-[200px]">
                  Book Service Now
                  <Calendar className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-bmw-blue-700 min-w-[200px]">
                Call (123) 456-7890
                <Phone className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-bmw-gray-600 max-w-3xl mx-auto">
              Choose the communication method that works best for you. We're committed to responding quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <div key={index} className="card-premium p-8 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-bmw-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-bmw-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-bmw-gray-900 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-bmw-gray-600 mb-4">
                    {method.description}
                  </p>
                  <a 
                    href={method.href}
                    className="text-xl font-bold text-bmw-blue-600 hover:text-bmw-blue-700 transition-colors block mb-2"
                  >
                    {method.value}
                  </a>
                  <p className="text-sm text-bmw-gray-500">
                    {method.available}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-bmw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Business Info */}
            <div className="space-y-8">
              {/* Location */}
              <div className="card-premium p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="w-6 h-6 text-bmw-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-bmw-gray-900">Visit Our Shop</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-bmw-gray-900 mb-2">Address</h4>
                    <p className="text-bmw-gray-600">
                      123 Performance Drive<br />
                      Automotive City, AC 12345
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>

              {/* Business Hours */}
              <div className="card-premium p-8">
                <div className="flex items-center mb-6">
                  <Clock className="w-6 h-6 text-bmw-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-bmw-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-bmw-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-bmw-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-bmw-blue-50 border border-bmw-blue-200 rounded-lg">
                  <p className="text-bmw-blue-700 text-sm">
                    <strong>After Hours:</strong> Emergency services available by appointment. 
                    Call for urgent matters.
                  </p>
                </div>
              </div>

              {/* Emergency Services */}
              <div className="card-premium p-8">
                <div className="flex items-center mb-6">
                  <Phone className="w-6 h-6 text-performance-red mr-3" />
                  <h3 className="text-2xl font-bold text-bmw-gray-900">Emergency Services</h3>
                </div>
                <div className="space-y-3">
                  {emergencyServices.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-performance-green mr-3 flex-shrink-0" />
                      <span className="text-bmw-gray-700 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-bmw-gray-600">
              Quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-premium p-8">
                <h3 className="text-xl font-bold text-bmw-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-bmw-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-bmw-gray-600 mb-6">
              Don't see your question answered?
            </p>
            <Link href="/booking">
              <Button variant="primary" size="lg" className="min-w-[200px]">
                Ask Us Directly
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-bmw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              Find Us Easily
            </h2>
            <p className="text-xl text-bmw-gray-600">
              Located in the heart of the automotive district with easy access and ample parking.
            </p>
          </div>

          <div className="card-premium p-8">
            <div className="aspect-video bg-bmw-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-bmw-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-bmw-gray-900 mb-2">Interactive Map</h3>
                <p className="text-bmw-gray-600 mb-4">
                  123 Performance Drive, Automotive City, AC 12345
                </p>
                <Button variant="primary">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-bmw-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-bmw-blue-600" />
              </div>
              <h3 className="font-bold text-bmw-gray-900 mb-2">Easy to Find</h3>
              <p className="text-bmw-gray-600 text-sm">
                Just off the main highway with clear signage and landmarks.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-bmw-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Car className="w-6 h-6 text-bmw-blue-600" />
              </div>
              <h3 className="font-bold text-bmw-gray-900 mb-2">Ample Parking</h3>
              <p className="text-bmw-gray-600 text-sm">
                Secure parking for customer vehicles and easy drop-off access.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-bmw-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-bmw-blue-600" />
              </div>
              <h3 className="font-bold text-bmw-gray-900 mb-2">Convenient Hours</h3>
              <p className="text-bmw-gray-600 text-sm">
                Open 6 days a week with extended Saturday hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-bmw-blue-600 to-bmw-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-bmw-blue-100 mb-8 max-w-2xl mx-auto">
            Don't let vehicle issues slow you down. Contact us today and experience the Bavarian Auto Werkz difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" variant="primary" className="bg-white text-bmw-blue-700 hover:bg-bmw-gray-100 min-w-[200px]">
                Book Your Service
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-bmw-blue-700 min-w-[200px]">
              Call Now
              <Phone className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}