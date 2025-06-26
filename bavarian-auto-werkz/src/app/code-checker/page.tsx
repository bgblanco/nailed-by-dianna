'use client'

import React, { useState } from 'react'
import { Search, AlertCircle, CheckCircle, ArrowRight, Book, Calendar, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { searchBMWCodes, getSystemIcon } from '@/lib/utils'
import { BMWCode } from '@/types'
import bmwCodesData from '@/data/bmw-codes.json'
import Link from 'next/link'

export default function CodeChecker() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<BMWCode[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) return

    setIsSearching(true)
    setHasSearched(true)

    // Simulate API delay for better UX
    setTimeout(() => {
      const results = searchBMWCodes(searchTerm, bmwCodesData as BMWCode[])
      setSearchResults(results)
      setIsSearching(false)
    }, 800)
  }

  const popularCodes = [
    { code: 'P0171', description: 'System Too Lean' },
    { code: 'P0300', description: 'Random Misfire' },
    { code: 'P0015', description: 'VANOS Issue' },
    { code: 'P0420', description: 'Catalyst Efficiency' },
    { code: 'P0299', description: 'Turbo Underboost' },
    { code: 'P1545', description: 'Throttle Position' },
  ]

  const quickSearchCode = (code: string) => {
    setSearchTerm(code)
    const results = searchBMWCodes(code, bmwCodesData as BMWCode[])
    setSearchResults(results)
    setHasSearched(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bmw-blue-50 via-white to-bmw-gray-50">
      {/* Header Section */}
      <section className="py-16 bg-gradient-bmw text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Badge variant="bmw" size="lg" className="bg-white/20 text-white border-white/30">
              🔍 BMW Diagnostic Tool
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">
              BMW Code Checker
            </h1>
            <p className="text-xl text-bmw-blue-100">
              Get instant explanations and repair suggestions for any BMW error code. 
              Built by BMW enthusiasts who actually drive and modify these vehicles.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card variant="bmw" className="shadow-bmw-lg">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center space-x-2">
                <Search className="w-6 h-6 text-bmw-blue-600" />
                <span>Enter Your BMW Error Code</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-6">
                <Input
                  placeholder="Enter code (e.g., P0171, P0300, P2015)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
                  icon={<Search className="w-5 h-5" />}
                  className="text-lg py-4"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  variant="primary" 
                  className="w-full"
                  loading={isSearching}
                >
                  {isSearching ? 'Searching Database...' : 'Check Code'}
                </Button>
              </form>

              {/* Popular Codes */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-bmw-gray-700 mb-4">Popular BMW Codes:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {popularCodes.map((code) => (
                    <button
                      key={code.code}
                      onClick={() => quickSearchCode(code.code)}
                      className="text-left p-3 rounded-lg border border-bmw-gray-200 hover:border-bmw-blue-300 hover:bg-bmw-blue-50 transition-colors"
                    >
                      <div className="font-mono text-sm font-semibold text-bmw-blue-600">
                        {code.code}
                      </div>
                      <div className="text-xs text-bmw-gray-600 mt-1">
                        {code.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Results */}
        {hasSearched && (
          <div className="space-y-8">
            {searchResults.length > 0 ? (
              <>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-bmw-gray-900 mb-2">
                    Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for &ldquo;{searchTerm}&rdquo;
                  </h2>
                  <p className="text-bmw-gray-600">
                    Professional diagnostic information from our BMW database
                  </p>
                </div>

                <div className="grid gap-8">
                  {searchResults.map((code, index) => (
                    <Card key={index} variant="default" className="shadow-lg">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="text-4xl">
                              {getSystemIcon(code.system)}
                            </div>
                            <div>
                              <div className="flex items-center space-x-3 mb-2">
                                <span className="font-mono text-2xl font-bold text-bmw-blue-600">
                                  {code.code}
                                </span>
                                <Badge 
                                  variant={code.severity === 'critical' ? 'critical' : 
                                          code.severity === 'moderate' ? 'moderate' : 'minor'}
                                >
                                  {code.severity}
                                </Badge>
                              </div>
                              <h3 className="text-xl font-semibold text-bmw-gray-900">
                                {code.description}
                              </h3>
                              <p className="text-sm text-bmw-gray-600 capitalize">
                                {code.system} System
                              </p>
                            </div>
                          </div>
                          {code.estimatedCost && (
                            <div className="text-right">
                              <div className="text-sm text-bmw-gray-600">Estimated Cost</div>
                              <div className="text-lg font-semibold text-bmw-blue-600">
                                {code.estimatedCost}
                              </div>
                            </div>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        {/* Potential Causes */}
                        <div>
                          <h4 className="font-semibold text-bmw-gray-900 mb-3 flex items-center">
                            <AlertCircle className="w-5 h-5 text-performance-orange mr-2" />
                            Potential Causes
                          </h4>
                          <ul className="space-y-2">
                            {code.causes.map((cause, causeIndex) => (
                              <li key={causeIndex} className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-performance-orange rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-bmw-gray-700">{cause}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Recommended Solutions */}
                        <div>
                          <h4 className="font-semibold text-bmw-gray-900 mb-3 flex items-center">
                            <CheckCircle className="w-5 h-5 text-status-minor mr-2" />
                            Recommended Solutions
                          </h4>
                          <ul className="space-y-2">
                            {code.solutions.map((solution, solutionIndex) => (
                              <li key={solutionIndex} className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-status-minor rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-bmw-gray-700">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-bmw-gray-200">
                          <Link href="/booking" className="flex-1">
                            <Button variant="primary" className="w-full" icon={<Calendar className="w-4 h-4" />}>
                              Schedule Diagnostic
                            </Button>
                          </Link>
                          <Link href="/contact" className="flex-1">
                            <Button variant="outline" className="w-full" icon={<Phone className="w-4 h-4" />}>
                              Ask Expert
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              /* No Results */
              <Card variant="default" className="text-center py-12">
                <CardContent>
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-bmw-gray-100 rounded-full flex items-center justify-center mx-auto">
                      <Search className="w-8 h-8 text-bmw-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-bmw-gray-900 mb-2">
                        Code Not Found in Database
                      </h3>
                      <p className="text-bmw-gray-600 mb-6">
                        We couldn&apos;t find &ldquo;{searchTerm}&rdquo; in our current database. Our BMW experts can help identify this code.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                      <Link href="/contact">
                        <Button variant="primary" icon={<Phone className="w-4 h-4" />}>
                          Contact Expert
                        </Button>
                      </Link>
                      <Link href="/booking">
                        <Button variant="outline" icon={<Calendar className="w-4 h-4" />}>
                          Schedule Diagnostic
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Information Section */}
        {!hasSearched && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            <Card hover className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-bmw-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="w-8 h-8 text-bmw-blue-600" />
                </div>
                <CardTitle>Comprehensive Database</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-bmw-gray-600">
                  Our database includes thousands of BMW-specific error codes with detailed explanations 
                  and repair procedures from real-world experience.
                </p>
              </CardContent>
            </Card>

            <Card hover className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-performance-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-performance-red" />
                </div>
                <CardTitle>Expert Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-bmw-gray-600">
                  Every code explanation is written by BMW specialists who work on these vehicles daily 
                  and understand the common failure patterns.
                </p>
              </CardContent>
            </Card>

            <Card hover className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-status-minor/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-status-minor" />
                </div>
                <CardTitle>Proven Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-bmw-gray-600">
                  Get multiple repair options with cost estimates based on actual repair experience 
                  from our shop and industry data.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-20 bg-gradient-elegant rounded-3xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">
              Need Professional BMW Diagnosis?
            </h2>
            <p className="text-xl text-bmw-gray-300">
              Our BMW specialists use factory-level diagnostic tools to identify issues 
              that generic scanners miss. Get the complete picture of your BMW&apos;s health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" variant="primary" icon={<Calendar className="w-5 h-5" />}>
                  Schedule Diagnostic
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bmw-gray-900">
                  View Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}