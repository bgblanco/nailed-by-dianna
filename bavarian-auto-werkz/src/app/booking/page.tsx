'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  Phone, 
  Mail,
  MapPin,
  Star,
  Shield,
  Wrench,
  Zap,
  Trophy
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import BookingForm from '@/components/forms/BookingForm'

export default function BookingPage() {
  const benefits = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most services completed same day or next day'
    },
    {
      icon: Shield,
      title: 'Warranty Included',
      description: '12 months / 12,000 miles on all work performed'
    },
    {
      icon: Star,
      title: '5-Star Service',
      description: 'Consistently rated 5 stars by our customers'
    },
    {
      icon: CheckCircle,
      title: 'BMW Certified',
      description: 'Factory-trained technicians and genuine parts'
    }
  ]

  const serviceTypes = [
    {
      icon: Wrench,
      title: 'Maintenance Services',
      services: ['Oil Changes', 'Brake Service', 'Transmission Service', 'Cooling System'],
      duration: '1-3 hours',
      price: 'From $149'
    },
    {
      icon: Zap,
      title: 'Performance Tuning',
      services: ['ECU Tuning', 'Turbo Upgrades', 'Exhaust Systems', 'Intake Modifications'],
      duration: '2-8 hours',
      price: 'From $899'
    },
    {
      icon: Trophy,
      title: 'Exotic Car Service',
      services: ['Lamborghini Service', 'Ferrari Maintenance', 'McLaren Repairs', 'Diagnostic'],
      duration: '1-4 hours',
      price: 'From $299'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Book Online',
      description: 'Fill out our booking form with your vehicle details and preferred time.'
    },
    {
      step: '2',
      title: 'Confirmation Call',
      description: 'We\'ll call within 2 hours to confirm your appointment and discuss specifics.'
    },
    {
      step: '3',
      title: 'Service Day',
      description: 'Bring your vehicle in at the scheduled time for expert service.'
    },
    {
      step: '4',
      title: 'Quality Check',
      description: 'Thorough inspection and road test before returning your vehicle.'
    }
  ]

  const testimonials = [
    {
      name: 'Robert Martinez',
      vehicle: '2022 BMW M5',
      text: 'Booking was easy and they confirmed everything promptly. Service was exceptional.',
      rating: 5
    },
    {
      name: 'Jennifer Lee',
      vehicle: 'Lamborghini Huracán',
      text: 'They understood my exotic car needs perfectly. Professional from start to finish.',
      rating: 5
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
              <Calendar className="w-4 h-4 mr-2" />
              Easy Booking
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Schedule Your Service
              <span className="block text-3xl md:text-4xl mt-2 text-bmw-blue-200">In Minutes</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-bmw-blue-100 mb-8 max-w-3xl mx-auto">
              Book your BMW or exotic car service appointment online. Our team will confirm 
              your appointment and ensure your vehicle gets the expert care it deserves.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" className="bg-white text-bmw-blue-700 hover:bg-bmw-gray-100 min-w-[200px]">
                <a href="#booking-form">Book Now</a>
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-bmw-blue-700 min-w-[200px]">
                Call (123) 456-7890
                <Phone className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white border-b border-bmw-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-bmw-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-bmw-blue-600" />
                  </div>
                  <h3 className="font-bold text-bmw-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-bmw-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-24 bg-bmw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              What Can We Service Today?
            </h2>
            <p className="text-xl text-bmw-gray-600 max-w-3xl mx-auto">
              From routine maintenance to performance modifications, we handle all your automotive needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {serviceTypes.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="card-premium p-8 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-bmw-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-bmw-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-bmw-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <ul className="text-bmw-gray-600 mb-6 space-y-2">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-performance-green mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-bmw-gray-200 pt-4">
                    <div className="text-lg font-bold text-bmw-blue-600 mb-1">
                      {service.price}
                    </div>
                    <div className="text-sm text-bmw-gray-500">
                      {service.duration}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              Book Your Appointment
            </h2>
            <p className="text-xl text-bmw-gray-600 max-w-3xl mx-auto">
              Fill out the form below and we'll contact you within 2 hours to confirm your appointment.
            </p>
          </div>

          <BookingForm />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-bmw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-bmw-gray-600 max-w-3xl mx-auto">
              Our streamlined booking process makes it easy to get your vehicle serviced.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-bmw rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-bmw-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-bmw-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Hours */}
            <div className="card-premium p-8 text-center">
              <Clock className="w-12 h-12 text-bmw-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-bmw-gray-900 mb-6">Business Hours</h3>
              <div className="space-y-3 text-bmw-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-bmw-blue-50 rounded-lg">
                <p className="text-bmw-blue-700 text-sm">
                  Emergency services available by appointment
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="card-premium p-8 text-center">
              <Phone className="w-12 h-12 text-bmw-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-bmw-gray-900 mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div>
                  <a 
                    href="tel:+1234567890" 
                    className="text-xl font-bold text-bmw-blue-600 hover:text-bmw-blue-700 block"
                  >
                    (123) 456-7890
                  </a>
                  <p className="text-bmw-gray-600 text-sm">Call for immediate assistance</p>
                </div>
                <div>
                  <a 
                    href="mailto:info@bavarianautoweekz.com" 
                    className="text-bmw-blue-600 hover:text-bmw-blue-700 block"
                  >
                    info@bavarianautoweekz.com
                  </a>
                  <p className="text-bmw-gray-600 text-sm">Email for detailed inquiries</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="card-premium p-8 text-center">
              <MapPin className="w-12 h-12 text-bmw-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-bmw-gray-900 mb-6">Location</h3>
              <div className="space-y-3 text-bmw-gray-700">
                <p>
                  123 Performance Drive<br />
                  Automotive City, AC 12345
                </p>
                <p className="text-sm text-bmw-gray-600">
                  Easy access with ample parking
                </p>
              </div>
              <Button variant="outline" size="sm" className="mt-4 w-full">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-bmw-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Customer Experience
            </h2>
            <p className="text-xl text-bmw-gray-300 max-w-3xl mx-auto">
              See what our customers say about booking and experiencing our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-bmw-gray-800 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-bmw-gray-300 mb-6 italic text-lg">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                  <div className="text-bmw-gray-400">{testimonial.vehicle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-bmw-blue-600 to-bmw-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-bmw-blue-100 mb-8 max-w-2xl mx-auto">
            Prefer to speak with someone directly? Give us a call and we'll help you 
            schedule the perfect service appointment for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary" className="bg-white text-bmw-blue-700 hover:bg-bmw-gray-100 min-w-[200px]">
              Call (123) 456-7890
              <Phone className="w-5 h-5 ml-2" />
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-bmw-blue-700 min-w-[200px]">
                Send Message
                <Mail className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}