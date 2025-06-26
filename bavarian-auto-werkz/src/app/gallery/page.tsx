'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Camera, 
  Filter, 
  Zap, 
  Trophy, 
  Car,
  Calendar,
  Phone,
  Star,
  ArrowRight,
  Play
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Work', count: 24 },
    { id: 'bmw', label: 'BMW Projects', count: 15 },
    { id: 'exotic', label: 'Exotic Cars', count: 6 },
    { id: 'performance', label: 'Performance Builds', count: 8 },
    { id: 'owner-fleet', label: 'Owner\'s Fleet', count: 3 }
  ]

  const galleryItems = [
    {
      id: 1,
      title: 'BMW M4 Competition Turbo Upgrade',
      category: 'bmw',
      tags: ['Performance', 'Turbo', 'Track'],
      description: '600HP build with custom turbo kit and ECU tuning',
      specs: ['Custom Turbo Kit', 'ECU Tune', 'Exhaust System', 'Intake Upgrade'],
      type: 'image',
      featured: true
    },
    {
      id: 2,
      title: 'Owner\'s Twin Turbo Huracán',
      category: 'owner-fleet',
      tags: ['Exotic', '1000HP', 'Daily Driver'],
      description: '1000+ HP Underground Racing build',
      specs: ['Underground Racing Stage 3', 'Full Carbon Aero', 'Custom Calibration'],
      type: 'image',
      featured: true
    },
    {
      id: 3,
      title: 'Ferrari 488 Performance Package',
      category: 'exotic',
      tags: ['Ferrari', 'Performance', 'Track'],
      description: 'Complete performance package with exhaust and tune',
      specs: ['Akrapovic Exhaust', 'ECU Tune', 'Lowering Springs'],
      type: 'image'
    },
    {
      id: 4,
      title: 'BMW X5M Track Preparation',
      category: 'bmw',
      tags: ['Track Prep', 'Safety', 'Performance'],
      description: 'Full track preparation including safety equipment',
      specs: ['Brake Upgrade', 'Suspension Tuning', 'Safety Equipment'],
      type: 'image'
    },
    {
      id: 5,
      title: '1000HP Gallardo Build Process',
      category: 'owner-fleet',
      tags: ['Time-lapse', 'Build Process', '1000HP'],
      description: 'Time-lapse of complete twin turbo installation',
      specs: ['Heffner Performance Kit', 'Sequential Transmission', 'Roll Cage'],
      type: 'video'
    },
    {
      id: 6,
      title: 'BMW M2 CS Track Build',
      category: 'performance',
      tags: ['Track Build', 'Lightweight', 'Aero'],
      description: 'Complete track-focused build with aero package',
      specs: ['Carbon Fiber Body Kit', 'Coilover Suspension', 'Roll Bar'],
      type: 'image'
    },
    {
      id: 7,
      title: 'McLaren 720S Service',
      category: 'exotic',
      tags: ['McLaren', 'Service', 'Maintenance'],
      description: 'Comprehensive service and diagnostic work',
      specs: ['Full Service', 'Diagnostic Scan', 'Fluid Changes'],
      type: 'image'
    },
    {
      id: 8,
      title: 'Bentley Continental GT Upgrade',
      category: 'owner-fleet',
      tags: ['Luxury', 'Performance', 'ECU Tune'],
      description: 'Owner\'s personal Bentley with performance upgrades',
      specs: ['ECU & TCU Tune', 'Lowering Module', 'Akrapovic Exhaust'],
      type: 'image'
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  const testimonials = [
    {
      name: 'Marcus Chen',
      vehicle: '2023 BMW M5 CS',
      text: 'The quality of their work is evident in every detail. My M5 has never performed better.',
      rating: 5
    },
    {
      name: 'Sarah Rodriguez',
      vehicle: 'Lamborghini Huracán',
      text: 'They understand exotic cars like no one else. Professional service from start to finish.',
      rating: 5
    },
    {
      name: 'David Thompson',
      vehicle: '2022 BMW M4',
      text: 'Incredible transformation on my M4. The performance gains are exactly what they promised.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-bmw-gray-900 via-bmw-gray-800 to-bmw-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="performance" size="lg" className="mb-6 bg-white/20 text-white border-white/30">
              <Camera className="w-4 h-4 mr-2" />
              Project Gallery
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Our Work 
              <span className="block text-gradient-performance">Speaks for Itself</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-bmw-gray-300 mb-8 max-w-3xl mx-auto">
              From routine maintenance to extreme performance builds, see the quality and precision 
              that goes into every project at Bavarian Auto Werkz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" variant="primary" className="min-w-[200px]">
                  Start Your Project
                  <Calendar className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-bmw-gray-900 min-w-[200px]">
                  Discuss Your Build
                  <Phone className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-bmw-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <Filter className="w-5 h-5 text-bmw-gray-600 mr-3" />
              <h2 className="text-xl font-bold text-bmw-gray-900">Filter Projects</h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeFilter === filter.id
                      ? 'bg-bmw-blue-600 text-white'
                      : 'bg-bmw-gray-100 text-bmw-gray-700 hover:bg-bmw-gray-200'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className={`group relative ${item.featured ? 'md:col-span-2' : ''}`}>
                <div className="card-premium overflow-hidden">
                  {/* Image/Video Container */}
                  <div className="aspect-video bg-gradient-to-br from-bmw-gray-200 to-bmw-gray-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-bmw-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Placeholder for actual images */}
                    <div className="h-full flex items-center justify-center">
                      {item.type === 'video' ? (
                        <div className="text-center">
                          <Play className="w-16 h-16 text-bmw-blue-500 mx-auto mb-2" />
                          <p className="text-bmw-gray-600 font-medium">Video Content</p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Car className="w-16 h-16 text-bmw-blue-500 mx-auto mb-2" />
                          <p className="text-bmw-gray-600 font-medium">Project Photo</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.tags.map((tag, index) => (
                          <Badge key={index} variant="bmw" size="sm" className="bg-white/90 text-bmw-gray-800">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="primary" size="sm" className="w-full">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                    
                    {item.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="performance" size="sm">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-bmw-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-bmw-gray-600 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-bmw-gray-900">Key Modifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.specs.map((spec, index) => (
                          <span key={index} className="text-xs bg-bmw-gray-100 text-bmw-gray-700 px-2 py-1 rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <Car className="w-16 h-16 text-bmw-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-bmw-gray-900 mb-2">No projects found</h3>
              <p className="text-bmw-gray-600">Try selecting a different filter to see more projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-bmw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              Behind Every Project
            </h2>
            <p className="text-xl text-bmw-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures every build meets our exacting standards and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your goals, budget, and timeline to create the perfect build plan.',
                icon: Trophy
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed project planning with parts sourcing and timeline coordination.',
                icon: Calendar
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Precision installation and modification by our expert technicians.',
                icon: Zap
              },
              {
                step: '04',
                title: 'Testing',
                description: 'Comprehensive testing and tuning to ensure optimal performance.',
                icon: Trophy
              }
            ].map((process, index) => {
              const Icon = process.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-bmw rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-bmw-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-bmw-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-bmw-gray-900 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-bmw-gray-600">
                    {process.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              Customer Satisfaction
            </h2>
            <p className="text-xl text-bmw-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our customers say about their experience with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-premium hover:scale-105 transition-transform">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-bmw-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-bmw-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-bmw-gray-600">{testimonial.vehicle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Your Photos CTA */}
      <section className="py-24 bg-bmw-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-gradient-performance rounded-full flex items-center justify-center mx-auto mb-8">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Share Your Build
          </h2>
          <p className="text-xl text-bmw-gray-300 mb-8 max-w-2xl mx-auto">
            Had work done with us? We'd love to feature your project in our gallery. 
            Send us your photos and join our showcase of automotive excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="min-w-[200px]">
                Submit Photos
                <Camera className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-bmw-gray-900 min-w-[200px]">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-bmw-blue-600 to-bmw-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready for Your Build?
          </h2>
          <p className="text-xl text-bmw-blue-100 mb-8 max-w-2xl mx-auto">
            Join the ranks of satisfied customers who trust us with their automotive dreams. 
            Let's discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" variant="primary" className="bg-white text-bmw-blue-700 hover:bg-bmw-gray-100 min-w-[200px]">
                Book Consultation
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