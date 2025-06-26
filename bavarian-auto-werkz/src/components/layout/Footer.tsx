import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Wrench, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'BMW Maintenance', href: '/services/maintenance' },
    { name: 'Performance Tuning', href: '/services/performance' },
    { name: 'Exotic Car Service', href: '/services/exotic' },
    { name: 'Code Diagnostics', href: '/code-checker' },
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Book Service', href: '/booking' },
    { name: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
  ]

  return (
    <footer className="bg-bmw-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-bmw flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bavarian Auto Werkz</h3>
                <p className="text-bmw-gray-400 text-sm">BMW • Performance • Exotic</p>
              </div>
            </div>
            <p className="text-bmw-gray-300 mb-6">
              Your premier BMW specialist and exotic car service center. From routine maintenance 
              to high-performance modifications, we deliver excellence in automotive care.
            </p>
            
            {/* Owner's Credibility */}
            <div className="bg-bmw-gray-800 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-bmw-blue-400 mb-2">Owner&apos;s Fleet</h4>
              <ul className="text-sm text-bmw-gray-300 space-y-1">
                <li>• Twin Turbo Lamborghini</li>
                <li>• Twin Turbo Lamborghini</li>
                <li>• Bentley Continental</li>
                <li>• Multiple BMW Projects</li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-bmw-gray-800 rounded-full flex items-center justify-center hover:bg-bmw-blue-600 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-bmw-gray-300 hover:text-bmw-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-bmw-gray-300 hover:text-bmw-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-bmw-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-bmw-gray-300">123 Performance Drive</p>
                  <p className="text-bmw-gray-300">Automotive City, AC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-bmw-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="text-bmw-gray-300 hover:text-bmw-blue-400 transition-colors"
                >
                  (123) 456-7890
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-bmw-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:info@bavarianautoweekz.com" 
                  className="text-bmw-gray-300 hover:text-bmw-blue-400 transition-colors"
                >
                  info@bavarianautoweekz.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-bmw-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-bmw-gray-300">
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bmw-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-bmw-gray-400 text-sm">
              © {currentYear} Bavarian Auto Werkz. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-bmw-gray-400 hover:text-bmw-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-bmw-gray-400 hover:text-bmw-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-bmw-gray-400 hover:text-bmw-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer