'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Wrench, 
  CheckCircle, 
  Calendar,
  Phone,
  ArrowRight,
  Shield,
  Clock,
  Star,
  Car
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default function BMWMaintenancePage() {
  const services = [
    {
      name: 'Oil Service',
      description: 'Complete oil change with BMW-approved synthetic oil and genuine BMW filter',
      price: '$149',
      duration: '45 min',
      includes: [
        'BMW-approved synthetic oil',
        'Genuine BMW oil filter',
        'Multi-point inspection',
        'Fluid level checks',
        'Battery test'
      ]
    },
    {
      name: 'Brake Service',
      description: 'Comprehensive brake system service and inspection',
      price: '$450',
      duration: '2 hours',
      includes: [
        'Brake pad replacement',
        'Rotor inspection/replacement',
        'Brake fluid flush',
        'BMW brake system reset',
        'Performance testing'
      ]
    },
    {
      name: 'Transmission Service',
      description: 'Complete transmission fluid service and inspection',
      price: '$299',
      duration: '1.5 hours',
      includes: [
        'Transmission fluid replacement',
        'Filter replacement',
        'Pan gasket replacement',
        'Diagnostic scan',
        'Test drive verification'
      ]
    },
    {
      name: 'Cooling System Service',
      description: 'Complete cooling system flush and inspection',
      price: '$249',
      duration: '2 hours',
      includes: [
        'Coolant system flush',
        'Thermostat inspection',
        'Water pump inspection',
        'Pressure test',
        'Leak detection'
      ]
    }
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'BMW Certified Technicians',
      description: 'Our technicians are factory-trained and BMW certified for authentic service.'
    },
    {
      icon: CheckCircle,
      title: 'Genuine BMW Parts',
      description: 'We use only genuine BMW parts and BMW-approved aftermarket components.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most maintenance services completed same day with advance scheduling.'
    },
    {
      icon: Star,
      title: 'Warranty Protection',
      description: '12 months/12,000 miles warranty on all maintenance work performed.'
    }
  ]

  const maintenanceSchedule = [
    {
      interval: '10,000 Miles',
      services: ['Oil Service', 'Multi-point Inspection', 'Fluid Checks']
    },
    {
      interval: '20,000 Miles',
      services: ['Oil Service', 'Cabin Filter', 'Brake Inspection', 'Tire Rotation']
    },
    {
      interval: '30,000 Miles',
      services: ['Oil Service', 'Brake Service', 'Transmission Service', 'Cooling System Check']
    },
    {
      interval: '50,000 Miles',
      services: ['Major Service', 'Spark Plugs', 'Air Filter', 'Fuel Filter']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-bmw-blue-600 via-bmw-blue-700 to-bmw-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="bmw" size="lg" className="mb-6 bg-white/20 text-white border-white/30">
                <Wrench className="w-4 h-4 mr-2" />
                BMW Maintenance
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Factory-Level 
                <span className="block text-gradient-performance">BMW Service</span>
              </h1>
              
              <p className="text-xl text-bmw-blue-100 mb-8 leading-relaxed">
                Keep your BMW running at peak performance with genuine parts, 
                BMW-approved procedures, and expert technicians who understand your vehicle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" variant="primary" className="bg-white text-bmw-blue-700 hover:bg-bmw-gray-100 min-w-[200px]">
                    Schedule Service
                    <Calendar className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-bmw-blue-700 min-w-[200px]">
                  Call (123) 456-7890
                  <Phone className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-bmw-blue-700 to-bmw-blue-900 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="h-full bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Car className="w-32 h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              Why Choose Our BMW Service?
            </h2>
            <p className="text-xl text-bmw-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with BMW specialists who treat your vehicle with the care it deserves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div key={index} className="card-premium p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-bmw-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-bmw-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-bmw-gray-900 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-bmw-gray-600">
                    {reason.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-bmw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              Our BMW Maintenance Services
            </h2>
            <p className="text-xl text-bmw-gray-600 max-w-3xl mx-auto">
              Comprehensive maintenance services to keep your BMW performing at its best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-premium p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-bmw-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-bmw-gray-600">
                      {service.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-bmw-blue-600">{service.price}</div>
                    <div className="text-sm text-bmw-gray-500">{service.duration}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-bmw-gray-900 mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {service.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-bmw-gray-700">
                        <CheckCircle className="w-4 h-4 text-performance-green mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 pt-6 border-t border-bmw-gray-200">
                  <Link href="/booking">
                    <Button variant="outline" className="w-full group">
                      Book This Service
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              BMW Maintenance Schedule
            </h2>
            <p className="text-xl text-bmw-gray-600 max-w-3xl mx-auto">
              Follow BMW's recommended maintenance schedule to keep your vehicle in optimal condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenanceSchedule.map((schedule, index) => (
              <div key={index} className="card-premium p-6 text-center">
                <div className="w-16 h-16 bg-gradient-bmw rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-bmw-gray-900 mb-4">
                  {schedule.interval}
                </h3>
                <ul className="space-y-2">
                  {schedule.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-bmw-gray-600 text-sm">
                      • {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-bmw-blue-50 border border-bmw-blue-200 rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-bmw-blue-900 mb-4">
                Not Sure What Your BMW Needs?
              </h3>
              <p className="text-bmw-blue-700 mb-6">
                Our technicians can perform a comprehensive inspection and recommend the right services 
                based on your vehicle's current condition and mileage.
              </p>
              <Link href="/booking">
                <Button variant="primary" size="lg">
                  Schedule Inspection
                  <Calendar className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-bmw-blue-600 to-bmw-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Service Your BMW?
          </h2>
          <p className="text-xl text-bmw-blue-100 mb-8 max-w-2xl mx-auto">
            Trust your BMW to the experts. Schedule your maintenance service today and experience 
            the difference of professional BMW care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" variant="primary" className="bg-white text-bmw-blue-700 hover:bg-bmw-gray-100 min-w-[200px]">
                Book Now
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
      </section>
    </div>
  )
}