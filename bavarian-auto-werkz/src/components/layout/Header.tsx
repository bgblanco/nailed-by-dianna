'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Wrench, Car, Calendar, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/', icon: Car },
    { name: 'Services', href: '/services', icon: Wrench },
    { name: 'Code Checker', href: '/code-checker', icon: Car },
    { name: 'Gallery', href: '/gallery', icon: Car },
    { name: 'About', href: '/about', icon: Car },
    { name: 'Contact', href: '/contact', icon: Phone },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-bmw-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-bmw flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-bmw-blue-500 animate-pulse opacity-50"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-bmw-gray-900">
                Bavarian Auto Werkz
              </span>
              <span className="text-xs text-bmw-gray-600 -mt-1">
                BMW • Performance • Exotic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  isActive(item.href)
                    ? 'text-bmw-blue-600 bg-bmw-blue-50'
                    : 'text-bmw-gray-700 hover:text-bmw-blue-600 hover:bg-bmw-gray-50'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/booking">
              <Button variant="primary" icon={<Calendar className="w-4 h-4" />}>
                Book Service
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-bmw-gray-700 hover:text-bmw-blue-600 hover:bg-bmw-gray-50"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-bmw-gray-200 py-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-colors',
                    isActive(item.href)
                      ? 'text-bmw-blue-600 bg-bmw-blue-50'
                      : 'text-bmw-gray-700 hover:text-bmw-blue-600 hover:bg-bmw-gray-50'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
            <div className="pt-4 border-t border-bmw-gray-200">
              <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                <Button variant="primary" className="w-full" icon={<Calendar className="w-4 h-4" />}>
                  Book Service
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header