'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Wrench, 
  Zap, 
  ChevronRight, 
  Calendar, 
  Phone, 
  Shield, 
  Star, 
  ArrowRight,
  CheckCircle,
  Gauge,
  Trophy,
  Clock,
  MapPin,
  Mail
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default function HomePage() {

  return (
    <div className="overflow-x-hidden">
      {/* BMW M-Stripe */}
      <div className="bmw-m-stripe"></div>

      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 grid-pattern opacity-[0.02]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-bmw-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-performance-red/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-bmw-blue-200 shadow-lg">
              <div className="w-2 h-2 bg-bmw-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-bmw-gray-700">Enthusiast Owned & Operated Since 2009</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-heading font-bold">
              <span className="block text-bmw-gray-900">The Ultimate</span>
              <span className="block mt-2">
                <span className="text-gradient-bmw">BMW</span> & <span className="text-gradient-performance">Exotic</span>
              </span>
              <span className="block text-bmw-gray-900 mt-2">Performance Center</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-bmw-gray-600 max-w-3xl mx-auto leading-relaxed">
              Where passion meets precision. From routine maintenance to 1000HP builds, 
              we bring track-proven expertise to every service.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/code-checker">
                <Button 
                  size="lg" 
                  variant="primary" 
                  className="btn-premium min-w-[200px] group"
                  icon={<Gauge className="w-5 h-5" />}
                >
                  Check BMW Codes
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/booking">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="min-w-[200px] border-2 hover:bg-bmw-gray-900 hover:text-white group"
                  icon={<Calendar className="w-5 h-5" />}
                >
                  Schedule Service
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="stat-card hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-bmw-blue-600">500+</div>
                <div className="text-sm text-bmw-gray-600 mt-1">BMWs Serviced</div>
              </div>
              <div className="stat-card hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-bmw-blue-600">15+</div>
                <div className="text-sm text-bmw-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="stat-card hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-bmw-blue-600">1000+</div>
                <div className="text-sm text-bmw-gray-600 mt-1">HP Builds</div>
              </div>
              <div className="stat-card hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-bmw-blue-600">5★</div>
                <div className="text-sm text-bmw-gray-600 mt-1">Google Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-bmw-gray-400 rotate-90" />
        </div>
      </section>

      {/* Owner's Credibility Section - Ultra Premium */}
      <section className="py-24 bg-bmw-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="performance" size="lg" className="mb-6">
              <Trophy className="w-4 h-4 mr-2" />
              Owner&apos;s Personal Fleet
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              We Don&apos;t Just Work On Them
              <span className="block text-3xl md:text-4xl mt-2 text-bmw-gray-400">We Build & Race Them</span>
            </h2>
            <p className="text-xl text-bmw-gray-300 max-w-3xl mx-auto">
              Our owner&apos;s personal collection includes twin-turbo Lamborghinis pushing over 1000HP. 
              This isn&apos;t just a business—it&apos;s a lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vehicle Cards */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-performance-red to-performance-orange rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative card-premium bg-bmw-gray-800 border-bmw-gray-700 p-8">
                <div className="aspect-video bg-gradient-to-br from-bmw-gray-700 to-bmw-gray-800 rounded-xl mb-6 img-overlay-premium">
                  <div className="flex items-center justify-center h-full">
                    <Zap className="w-16 h-16 text-performance-red" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Twin Turbo Huracán</h3>
                <p className="text-performance-red font-semibold mb-4">1000+ HP Daily Driver</p>
                <div className="space-y-2">
                  <div className="flex items-center text-bmw-gray-400">
                    <CheckCircle className="w-4 h-4 mr-2 text-performance-green" />
                    <span className="text-sm">Underground Racing Stage 3</span>
                  </div>
                  <div className="flex items-center text-bmw-gray-400">
                    <CheckCircle className="w-4 h-4 mr-2 text-performance-green" />
                    <span className="text-sm">Full Carbon Aero Package</span>
                  </div>
                  <div className="flex items-center text-bmw-gray-400">
                    <CheckCircle className="w-4 h-4 mr-2 text-performance-green" />
                    <span className="text-sm">Custom ECU Calibration</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-performance-orange to-performance-red rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative card-premium bg-bmw-gray-800 border-bmw-gray-700 p-8">
                <div className="aspect-video bg-gradient-to-br from-bmw-gray-700 to-bmw-gray-800 rounded-xl mb-6 img-overlay-premium">
                  <div className="flex items-center justify-center h-full">
                    <Gauge className="w-16 h-16 text-performance-orange" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Twin Turbo Gallardo</h3>
                <p className="text-performance-orange font-semibold mb-4">Track Weapon</p>
                <div className="space-y-2">
                  <div className="flex items-center text-bmw-gray-400">
                    <CheckCircle className="w-4 h-4 mr-2 text-performance-green" />
                    <span className="text-sm">Heffner Performance Build</span>
                  </div>
                  <div className="flex items-center text-bmw-gray-400">
                    <CheckCircle className="w-4 h-4 mr-2 text-performance-green" />
                    <span className="text-sm">Roll Cage & Safety Equipment</span>
                  </div>
                  <div className="flex items-center text-bmw-gray-400">
                    <CheckCircle className="w-4 h-4 mr-2 text-performance-green" />
                    <span className="text-sm">Sequential Transmission</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-bmw-blue-500 to-bmw-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative card-premium bg-bmw-gray-800 border-bmw-gray-700 p-8">
                <div className="aspect-video bg-gradient-to-br from-bmw-gray-700 to-bmw-gray-800 rounded-xl mb-6 img-overlay-premium">
                  <div className="flex items-center justify-center h-full">
                    <Shield className="w-16 h-16 text-bmw-blue-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Bentley Continental GT</h3>
                <p className="text-bmw-blue-400 font-semibold mb-4">Luxury Performance</p>
                <div className="space-y-2">
                  <div className="flex items-center text-bmw-gray-400">
                    <CheckCircle className="w-4 h-4 mr-2 text-performance-green" />
                    <span className="text-sm">ECU & TCU Tuning</span>
                  </div>
                  <div className="flex items-center text-bmw-gray-400">
                    <CheckCircle className="w-4 h-4 mr-2 text-performance-green" />
                    <span className="text-sm">Lowering Module</span>
                  </div>
                  <div className="flex items-center text-bmw-gray-400">
                    <CheckCircle className="w-4 h-4 mr-2 text-performance-green" />
                    <span className="text-sm">Akrapovic Exhaust</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Premium Grid */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 section-pattern"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="bmw" size="lg" className="mb-6 badge-glow">
              <Wrench className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              Complete Automotive Excellence
            </h2>
            <p className="text-xl text-bmw-gray-600 max-w-3xl mx-auto">
              From scheduled maintenance to extreme performance builds, we deliver uncompromising quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="service-card-premium group">
              <div className="p-8">
                <div className="w-16 h-16 bg-bmw-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Wrench className="w-8 h-8 text-bmw-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-bmw-gray-900 mb-4">BMW Maintenance</h3>
                <p className="text-bmw-gray-600 mb-6">
                  Factory-level service for all BMW models. Oil services, brake work, 
                  electrical diagnostics, and comprehensive inspections.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-bmw-gray-700">
                    <CheckCircle className="w-4 h-4 mr-2 text-bmw-blue-500" />
                    OEM & Performance Parts
                  </li>
                  <li className="flex items-center text-sm text-bmw-gray-700">
                    <CheckCircle className="w-4 h-4 mr-2 text-bmw-blue-500" />
                    BMW Certified Technicians
                  </li>
                  <li className="flex items-center text-sm text-bmw-gray-700">
                    <CheckCircle className="w-4 h-4 mr-2 text-bmw-blue-500" />
                    Warranty Protection
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-bmw-gray-200">
                  <span className="text-2xl font-bold text-bmw-blue-600">From $149</span>
                  <Link href="/services/maintenance">
                    <Button variant="outline" size="sm" className="group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="service-card-premium group">
              <div className="p-8">
                <div className="w-16 h-16 bg-performance-red/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-performance-red" />
                </div>
                <h3 className="text-2xl font-bold text-bmw-gray-900 mb-4">Performance Tuning</h3>
                <p className="text-bmw-gray-600 mb-6">
                  Unlock your vehicle&apos;s true potential. ECU tuning, forced induction, 
                  exhaust systems, and complete engine builds.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-bmw-gray-700">
                    <CheckCircle className="w-4 h-4 mr-2 text-performance-red" />
                    Dyno Testing & Tuning
                  </li>
                  <li className="flex items-center text-sm text-bmw-gray-700">
                    <CheckCircle className="w-4 h-4 mr-2 text-performance-red" />
                    Turbo & Supercharger Kits
                  </li>
                  <li className="flex items-center text-sm text-bmw-gray-700">
                    <CheckCircle className="w-4 h-4 mr-2 text-performance-red" />
                    Track Support Available
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-bmw-gray-200">
                  <span className="text-2xl font-bold text-performance-red">From $899</span>
                  <Link href="/services/performance">
                    <Button variant="outline" size="sm" className="group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="service-card-premium group">
              <div className="p-8">
                <div className="w-16 h-16 bg-bmw-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Trophy className="w-8 h-8 text-bmw-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-bmw-gray-900 mb-4">Exotic Car Service</h3>
                <p className="text-bmw-gray-600 mb-6">
                  Specialized care for Lamborghini, Ferrari, McLaren, and more. 
                  We speak fluent exotic.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-bmw-gray-700">
                    <CheckCircle className="w-4 h-4 mr-2 text-bmw-blue-500" />
                    Factory Diagnostic Tools
                  </li>
                  <li className="flex items-center text-sm text-bmw-gray-700">
                    <CheckCircle className="w-4 h-4 mr-2 text-bmw-blue-500" />
                    Exotic Car Experience
                  </li>
                  <li className="flex items-center text-sm text-bmw-gray-700">
                    <CheckCircle className="w-4 h-4 mr-2 text-bmw-blue-500" />
                    Concierge Service
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-bmw-gray-200">
                  <span className="text-2xl font-bold text-bmw-blue-600">From $299</span>
                  <Link href="/services/exotic">
                    <Button variant="outline" size="sm" className="group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BMW Code Checker CTA - Premium */}
      <section className="py-24 bg-gradient-to-br from-bmw-blue-600 via-bmw-blue-700 to-bmw-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-premium rounded-3xl p-12">
            <Badge variant="bmw" size="lg" className="mb-6 bg-white/20 text-white border-white/30">
              <Gauge className="w-4 h-4 mr-2" />
              Free Diagnostic Tool
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              BMW Throwing Codes?
            </h2>
            <p className="text-xl text-bmw-blue-100 mb-8 max-w-2xl mx-auto">
              Get instant explanations and repair recommendations for any BMW error code. 
              Built by BMW specialists who actually understand these vehicles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/code-checker">
                <Button size="lg" variant="primary" className="bg-white text-bmw-blue-700 hover:bg-bmw-gray-100 min-w-[200px]">
                  Check Codes Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-bmw-blue-700 min-w-[200px]">
                  Schedule Diagnostic
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Premium */}
      <section className="py-24 bg-bmw-gray-50 relative">
        <div className="absolute inset-0 section-pattern"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="bmw" size="lg" className="mb-6">
              <Star className="w-4 h-4 mr-2" />
              Customer Reviews
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-bmw-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what BMW and exotic car owners are saying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-premium hover:scale-105 transition-transform">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-bmw-gray-700 mb-6 italic leading-relaxed">
                &ldquo;The only shop I trust with my M4. They diagnosed and fixed an issue three other shops couldn&apos;t figure out. 
                Real BMW expertise here.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bmw-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-bmw-blue-600 font-bold">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-bmw-gray-900">Mike Johnson</div>
                  <div className="text-sm text-bmw-gray-600">2023 BMW M4 Competition</div>
                </div>
              </div>
            </div>

            <div className="testimonial-premium hover:scale-105 transition-transform">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-bmw-gray-700 mb-6 italic leading-relaxed">
                &ldquo;They built my 335i into a 700HP monster. Professional work, fair pricing, and they actually answer the phone. 
                Highly recommend!&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-performance-red/10 rounded-full flex items-center justify-center">
                  <span className="text-performance-red font-bold">SC</span>
                </div>
                <div>
                  <div className="font-semibold text-bmw-gray-900">Sarah Chen</div>
                  <div className="text-sm text-bmw-gray-600">2019 BMW 335i (700HP Build)</div>
                </div>
              </div>
            </div>

            <div className="testimonial-premium hover:scale-105 transition-transform">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-bmw-gray-700 mb-6 italic leading-relaxed">
                &ldquo;Brought my Huracán here for service. Owner knows Lambos inside out. Way better than the dealer and half the price.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bmw-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-bmw-blue-600 font-bold">DW</span>
                </div>
                <div>
                  <div className="font-semibold text-bmw-gray-900">David Williams</div>
                  <div className="text-sm text-bmw-gray-600">Lamborghini Huracán</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Premium */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.02]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-premium p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bmw-gray-900 mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-bmw-gray-600 mb-12 max-w-3xl mx-auto">
              Join hundreds of BMW and exotic car owners who trust us with their prized vehicles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-bmw-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-bmw-blue-600" />
                </div>
                <h3 className="font-semibold text-bmw-gray-900 mb-2">Call Us</h3>
                <a href="tel:+1234567890" className="text-bmw-blue-600 hover:text-bmw-blue-700 font-medium">
                  (123) 456-7890
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-bmw-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-bmw-blue-600" />
                </div>
                <h3 className="font-semibold text-bmw-gray-900 mb-2">Hours</h3>
                <p className="text-bmw-gray-600">
                  Mon-Fri: 8AM-6PM<br />
                  Sat: 9AM-4PM
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-bmw-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-bmw-blue-600" />
                </div>
                <h3 className="font-semibold text-bmw-gray-900 mb-2">Location</h3>
                <p className="text-bmw-gray-600">
                  123 Performance Dr<br />
                  Auto City, AC 12345
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" variant="primary" className="btn-premium min-w-[200px]">
                  Book Appointment
                  <Calendar className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="min-w-[200px]">
                  Contact Us
                  <Mail className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}