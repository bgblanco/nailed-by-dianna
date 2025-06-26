export interface BMWCode {
  code: string
  description: string
  severity: 'critical' | 'moderate' | 'minor'
  system: string
  causes: string[]
  solutions: string[]
  estimatedCost?: string
}

export interface Service {
  id: string
  name: string
  category: 'maintenance' | 'performance' | 'exotic'
  description: string
  basePrice: number
  duration: number
  features?: string[]
  isActive?: boolean
}

export interface Customer {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  createdAt: Date
  updatedAt: Date
}

export interface Vehicle {
  id: string
  make: string
  model: string
  year: number
  vin?: string
  color?: string
  mileage?: number
  notes?: string
  customerId: string
}

export interface Appointment {
  id: string
  date: Date
  duration: number
  status: AppointmentStatus
  notes?: string
  totalAmount: number
  paidAmount: number
  customerId: string
  vehicleId?: string
  serviceId: string
  customer?: Customer
  vehicle?: Vehicle
  service?: Service
}

export enum AppointmentStatus {
  SCHEDULED = 'SCHEDULED',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export interface BookingForm {
  customerInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  vehicleInfo: {
    make: string
    model: string
    year: number
    vin?: string
    mileage?: number
  }
  serviceInfo: {
    serviceId: string
    preferredDate: Date
    notes?: string
  }
  paymentInfo?: {
    amount: number
    paymentMethod: 'card' | 'deposit'
  }
}

export interface CodeSearchResult {
  found: boolean
  code?: BMWCode
  suggestions?: BMWCode[]
  searchTerm: string
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  vehicleInfo?: {
    make: string
    model: string
    year: number
  }
}

export interface NewsletterForm {
  email: string
  interests?: string[]
}

export interface TestimonialData {
  id: string
  customerName: string
  vehicleInfo: string
  rating: number
  comment: string
  date: Date
  serviceCategory: string
  imageUrl?: string
}

export interface GalleryItem {
  id: string
  title: string
  description: string
  beforeImage?: string
  afterImage?: string
  category: 'performance' | 'restoration' | 'maintenance' | 'exotic'
  vehicleInfo: string
  completionDate: Date
  featured: boolean
}

export interface OwnerVehicle {
  id: string
  make: string
  model: string
  year: number
  description: string
  modifications: string[]
  imageUrl: string
  category: 'daily' | 'track' | 'show'
  featured: boolean
}