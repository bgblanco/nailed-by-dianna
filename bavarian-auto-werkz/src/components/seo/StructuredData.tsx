import React from 'react'

interface StructuredDataProps {
  type: 'LocalBusiness' | 'AutoRepair' | 'Service' | 'Organization'
  data?: any
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
    }

    switch (type) {
      case 'LocalBusiness':
      case 'AutoRepair':
        return {
          ...baseData,
          '@type': 'AutoRepair',
          name: 'Bavarian Auto Werkz',
          description: 'Premier BMW specialist and exotic car service center. Expert maintenance, performance tuning, and repairs for BMW and exotic vehicles.',
          image: 'https://bavarianautoweekz.com/logo.png',
          url: 'https://bavarianautoweekz.com',
          telephone: '(123) 456-7890',
          email: 'info@bavarianautoweekz.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Performance Drive',
            addressLocality: 'Automotive City',
            addressRegion: 'AC',
            postalCode: '12345',
            addressCountry: 'US'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '40.7128',
            longitude: '-74.0060'
          },
          openingHours: [
            'Mo-Fr 08:00-18:00',
            'Sa 09:00-16:00'
          ],
          priceRange: '$$',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '150'
          },
          areaServed: {
            '@type': 'City',
            name: 'Automotive City'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'BMW and Exotic Car Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'BMW Maintenance',
                  description: 'Complete BMW maintenance services using genuine parts'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Performance Tuning',
                  description: 'ECU tuning and performance modifications'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Exotic Car Service',
                  description: 'Specialized service for Lamborghini, Ferrari, and other exotic vehicles'
                }
              }
            ]
          },
          ...data
        }

      case 'Organization':
        return {
          ...baseData,
          name: 'Bavarian Auto Werkz',
          url: 'https://bavarianautoweekz.com',
          logo: 'https://bavarianautoweekz.com/logo.png',
          description: 'Premier BMW specialist and exotic car service center',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '(123) 456-7890',
            contactType: 'customer service',
            email: 'info@bavarianautoweekz.com'
          },
          sameAs: [
            'https://facebook.com/bavarianautoweekz',
            'https://instagram.com/bavarianautoweekz',
            'https://twitter.com/bavarianautoweekz'
          ],
          ...data
        }

      case 'Service':
        return {
          ...baseData,
          provider: {
            '@type': 'AutoRepair',
            name: 'Bavarian Auto Werkz'
          },
          areaServed: {
            '@type': 'City',
            name: 'Automotive City'
          },
          ...data
        }

      default:
        return { ...baseData, ...data }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
    />
  )
}

export default StructuredData