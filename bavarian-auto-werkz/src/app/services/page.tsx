'use client'

import React from 'react'

import Link from 'next/link'
import { 
  Wrench, 
  Zap, 
  Shield, 
  Gauge, 
  Trophy, 
  CheckCircle, 
  ArrowRight,
  Car,
  Settings,
  Target,
  Clock,
  Star,
  Phone,
  Calendar
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default function ServicesPage() {
  const mainServices = [
    {
      id: 'bmw-maintenance',
      title: 'BMW Maintenance',
      icon: Wrench,
      description: 'Factory-level maintenance for all BMW models using genuine parts and BMW-approved procedures.',
      features: [
        'Oil service with BMW-approved synthetic oil',
        'Brake service and inspection',
        'Transmission service',
        'Cooling system maintenance',
        'Electrical system diagnostics',
        'Pre-purchase inspections'
      ],
      startingPrice: '$149',
      duration: '1-3 hours',
      category: 'maintenance',
      gradient: 'from-bmw-blue-500 to-bmw-blue-700'
    },
    {
      id: 'performance-tuning',
      title: 'Performance Tuning',
      icon: Zap,
      description: 'Unlock your BMW\'s true potential with professional ECU tuning and performance modifications.',
      features: [
        'ECU tuning and remapping',
        'Dyno testing and optimization',
        'Turbo and supercharger upgrades',
        'Exhaust system upgrades',
        'Intake system modifications',
        'Suspension tuning'
      ],
      startingPrice: '$899',
      duration: '2-8 hours',
      category: 'performance',
      gradient: 'from-performance-red to-performance-orange'
    },
    {
      id: 'exotic-service',
      title: 'Exotic Car Service',
      icon: Trophy,
      description: 'Specialized service for Lamborghini, Ferrari, McLaren, and other exotic vehicles.',
      features: [
        'Factory diagnostic tools',
        'Exotic car expertise',
        'Performance maintenance',
        'Concierge service available',
        'Track preparation',
        'Collector car storage'
      ],
      startingPrice: '$299',
      duration: '1-4 hours',
      category: 'exotic',
      gradient: 'from-bmw-blue-600 to-bmw-blue-800'
    }
  ]

  const specialtyServices = [
    {
      title: 'Diagnostic Services',
      icon: Gauge,
      description: 'Comprehensive diagnostic scans using factory-level BMW diagnostic tools.',
      price: '$150'
    },
    {
      title: 'Engine Builds',
      icon: Settings,
      description: 'Custom engine builds from stock refresh to 1000+ HP race motors.',
      price: 'Custom Quote'
    },
    {
      title: 'Track Preparation',
      icon: Target,
      description: 'Complete track day preparation including safety inspection and setup.',
      price: '$500'
    },
    {
      title: 'Emergency Service',
      icon: Clock,
      description: 'Priority service for urgent repairs and breakdowns.',
      price: '$200/hr'
    }
  ]

  const testimonials = [
    {
      name: 'Michael R.',
      vehicle: '2022 BMW M5 CS',
      rating: 5,
      text: 'The only shop I trust with my M5. Their expertise is unmatched and they always deliver on time.'
    },
    {
      name: 'Sarah L.',
      vehicle: 'Lamborghini Huracán',
      rating: 5,
      text: 'Brought my Huracán here after a bad experience at the dealer. These guys know exotics!'
    },
    {
      name: 'David K.',
      vehicle: '2021 BMW X5M',
      rating: 5,
      text: 'Professional service and fair pricing. They explain everything clearly and never oversell.'
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
              <Wrench className="w-4 h-4 mr-2" />
              Professional Services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Complete Automotive Excellence
            </h1>
            
            <p className="text-xl md:text-2xl text-bmw-blue-100 mb-8 max-w-3xl mx-auto">
              From routine maintenance to extreme performance builds, we deliver uncompromising quality for BMW and exotic vehicles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" variant="primary" className="bg-white text-bmw-blue-700 hover:bg-bmw-gray-100 min-w-[200px]">
                  Book Service Now
                  <Calendar className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-bmw-blue-700 min-w-[200px]">
                  Get Quote
                  <Phone className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-bmw-gray-600 max-w-3xl mx-auto">
              Comprehensive automotive services backed by years of experience and a passion for excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.id} className="service-card-premium group relative">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl`}></div>
                  
                  <div className="relative p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient} text-white`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <Badge variant={service.category as any} size="sm">
                        {service.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-bmw-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-bmw-gray-600 mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-bmw-gray-700">
                          <CheckCircle className="w-4 h-4 mr-3 text-performance-green flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-bmw-gray-200">
                      <div>
                        <div className="text-2xl font-bold text-bmw-blue-600">
                          {service.startingPrice}
                        </div>
                        <div className="text-sm text-bmw-gray-500">
                          {service.duration}
                        </div>
                      </div>
                      <Link href={`/services/${service.id}`}>
                        <Button variant="outline" size="sm" className="group">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-24 bg-bmw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              Specialty Services
            </h2>
            <p className="text-xl text-bmw-gray-600 max-w-3xl mx-auto">
              Additional services for every automotive need, from diagnostics to custom builds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="card-premium p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-bmw-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-bmw-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-bmw-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-bmw-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="text-lg font-bold text-bmw-blue-600">
                    {service.price}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              Our Service Process
            </h2>
            <p className="text-xl text-bmw-gray-600 max-w-3xl mx-auto">
              A streamlined approach to deliver exceptional results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your needs and inspect your vehicle to provide accurate recommendations.'
              },
              {
                step: '02',
                title: 'Diagnosis',
                description: 'Comprehensive diagnostic scan using factory-level tools to identify all issues.'
              },
              {
                step: '03',
                title: 'Service',
                description: 'Expert technicians perform the work using genuine parts and proven procedures.'
              },
              {
                step: '04',
                title: 'Quality Check',
                description: 'Thorough inspection and road test to ensure everything meets our high standards.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-bmw rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-bmw-gray-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-bmw-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-bmw-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-bmw-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what BMW and exotic car owners are saying about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-bmw-gray-800 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-bmw-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-bmw-gray-400">{testimonial.vehicle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-bmw-blue-600 to-bmw-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-bmw-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied BMW and exotic car owners who trust us with their prized vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" variant="primary" className="bg-white text-bmw-blue-700 hover:bg-bmw-gray-100 min-w-[200px]">
                Book Your Service
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-bmw-blue-700 min-w-[200px]">
                Get Free Quote
                <Phone className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}