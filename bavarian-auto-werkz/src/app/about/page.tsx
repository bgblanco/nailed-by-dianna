'use client'

import React from 'react'
import Link from 'next/link'
import { 
  User, 
  Trophy, 
  Zap, 
  Shield, 
  CheckCircle, 
  Calendar,
  Phone,
  ArrowRight,
  Star,
  Target,
  Heart,
  Clock,
  Award,
  Car,
  Wrench
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default function AboutPage() {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'BMWs Serviced' },
    { number: '1000+', label: 'HP Builds' },
    { number: '5★', label: 'Google Rating' }
  ]

  const certifications = [
    'BMW Certified Technician',
    'ASE Master Certification',
    'Bosch Automotive Training',
    'Factory Diagnostic Certification',
    'Performance Tuning Certification'
  ]

  const ownerVehicles = [
    {
      title: 'Twin Turbo Lamborghini Huracán',
      specs: '1000+ HP Daily Driver',
      modifications: [
        'Underground Racing Stage 3',
        'Full Carbon Fiber Aero Package',
        'Custom ECU Calibration',
        'Upgraded Cooling System'
      ]
    },
    {
      title: 'Twin Turbo Lamborghini Gallardo',
      specs: 'Track Weapon Build',
      modifications: [
        'Heffner Performance Twin Turbo',
        'Sequential Transmission',
        'Roll Cage & Safety Equipment',
        'Track-Focused Suspension'
      ]
    },
    {
      title: 'Bentley Continental GT',
      specs: 'Luxury Performance Build',
      modifications: [
        'ECU & TCU Tuning',
        'Lowering Module',
        'Akrapovic Exhaust System',
        'Performance Wheels & Tires'
      ]
    }
  ]

  const milestones = [
    {
      year: '2009',
      title: 'Founded Bavarian Auto Werkz',
      description: 'Started with a passion for BMW performance and precision engineering.'
    },
    {
      year: '2012',
      title: 'First 500HP BMW Build',
      description: 'Completed our first major performance build, establishing our reputation.'
    },
    {
      year: '2015',
      title: 'Exotic Car Specialization',
      description: 'Expanded into exotic car service with owner\'s first Lamborghini acquisition.'
    },
    {
      year: '2018',
      title: '1000HP Milestone',
      description: 'Achieved our first 1000HP build, pushing the boundaries of performance.'
    },
    {
      year: '2021',
      title: 'Facility Expansion',
      description: 'Moved to larger facility with advanced diagnostic and dyno equipment.'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Recognized as premier BMW specialist with 5-star customer satisfaction.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-bmw-gray-900 via-bmw-gray-800 to-bmw-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="performance" size="lg" className="mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Passion Meets 
                <span className="block text-gradient-performance">Precision</span>
              </h1>
              
              <p className="text-xl text-bmw-gray-300 mb-8 leading-relaxed">
                Founded by an automotive enthusiast who doesn't just work on high-performance vehicles — 
                he builds and races them. This isn't just business; it's a lifestyle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" variant="primary" className="min-w-[200px]">
                    Work With Us
                    <Calendar className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-bmw-gray-900 min-w-[200px]">
                    Get In Touch
                    <Phone className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-bmw-blue-600 to-performance-red rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="h-full bg-bmw-gray-800 rounded-2xl flex items-center justify-center">
                  <Car className="w-32 h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-bmw-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-bmw-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-bmw-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner's Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="bmw" size="lg" className="mb-6">
                <User className="w-4 h-4 mr-2" />
                Meet the Owner
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
                Experience You Can Trust
              </h2>
              
              <div className="space-y-6 text-bmw-gray-700 leading-relaxed">
                <p className="text-lg">
                  What started as a passion for BMW performance has evolved into one of the region's most 
                  trusted automotive service centers. Our owner isn't just someone who learned about cars 
                  from textbooks — he's someone who lives and breathes high-performance automotive culture.
                </p>
                
                <p>
                  With over 15 years of hands-on experience, our owner has worked on everything from 
                  daily-driven BMWs to million-dollar exotic supercars. His personal fleet includes 
                  twin-turbo Lamborghinis pushing over 1000 horsepower, giving him real-world experience 
                  with the extreme performance modifications our customers demand.
                </p>
                
                <p>
                  This personal investment in high-performance vehicles means when you bring your car to us, 
                  you're not just getting a service — you're getting advice from someone who has faced 
                  the same challenges, made the same modifications, and solved the same problems you're experiencing.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-bmw-gray-900 mb-4">Certifications & Training</h3>
                <div className="grid grid-cols-1 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-performance-green mr-3" />
                      <span className="text-bmw-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-bmw-gray-100 to-bmw-gray-200 rounded-3xl overflow-hidden">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <Trophy className="w-24 h-24 text-bmw-blue-500 mx-auto mb-4" />
                    <p className="text-bmw-gray-600 font-medium">Professional Photo Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner's Fleet */}
      <section className="py-24 bg-bmw-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="performance" size="lg" className="mb-6 bg-white/20 text-white border-white/30">
              <Zap className="w-4 h-4 mr-2" />
              Owner's Personal Fleet
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              We Don't Just Work On Them
              <span className="block text-3xl md:text-4xl mt-2 text-bmw-gray-400">We Build & Race Them</span>
            </h2>
            <p className="text-xl text-bmw-gray-300 max-w-3xl mx-auto">
              Our owner's personal collection showcases the level of performance and precision we bring to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ownerVehicles.map((vehicle, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-performance-red to-performance-orange rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                <div className="relative card-premium bg-bmw-gray-800 border-bmw-gray-700 p-8">
                  <div className="aspect-video bg-gradient-to-br from-bmw-gray-700 to-bmw-gray-800 rounded-xl mb-6 img-overlay-premium">
                    <div className="flex items-center justify-center h-full">
                      <Car className="w-16 h-16 text-performance-red" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{vehicle.title}</h3>
                  <p className="text-performance-red font-semibold mb-4">{vehicle.specs}</p>
                  <div className="space-y-2">
                    {vehicle.modifications.map((mod, modIndex) => (
                      <div key={modIndex} className="flex items-center text-bmw-gray-400">
                        <CheckCircle className="w-4 h-4 mr-2 text-performance-green" />
                        <span className="text-sm">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="bmw" size="lg" className="mb-6">
              <Clock className="w-4 h-4 mr-2" />
              Our Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              15 Years of Excellence
            </h2>
            <p className="text-xl text-bmw-gray-600 max-w-3xl mx-auto">
              From a small garage to a premier automotive service center, here's how we've grown.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-bmw-blue-200 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="card-premium p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-bmw rounded-full flex items-center justify-center mr-4">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-bmw-blue-600">{milestone.year}</div>
                      </div>
                      <h3 className="text-xl font-bold text-bmw-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-bmw-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block w-4 h-4 bg-bmw-blue-500 rounded-full relative z-10 flex-shrink-0 my-8 lg:my-0"></div>
                  
                  <div className="w-full lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-bmw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-bmw-gray-600 max-w-3xl mx-auto">
              The principles that guide every interaction and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Precision',
                description: 'Every job is completed with meticulous attention to detail, using the right tools and procedures.'
              },
              {
                icon: Shield,
                title: 'Integrity',
                description: 'Honest recommendations, transparent pricing, and standing behind our work with confidence.'
              },
              {
                icon: Heart,
                title: 'Passion',
                description: 'Genuine enthusiasm for automotive excellence drives everything we do, every single day.'
              }
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="card-premium p-8 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-bmw-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-bmw-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-bmw-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-bmw-gray-600">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-bmw-blue-600 to-bmw-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-bmw-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to work with someone who truly understands high-performance vehicles? 
            Let's discuss your automotive needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" variant="primary" className="bg-white text-bmw-blue-700 hover:bg-bmw-gray-100 min-w-[200px]">
                Schedule Service
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-bmw-blue-700 min-w-[200px]">
                Get In Touch
                <Phone className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}