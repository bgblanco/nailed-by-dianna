import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { BMWCode } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date)
}

export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  
  if (hours === 0) {
    return `${mins} mins`
  }
  
  if (mins === 0) {
    return `${hours} hour${hours > 1 ? 's' : ''}`
  }
  
  return `${hours}h ${mins}m`
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
}

export function searchBMWCodes(query: string, codes: BMWCode[]): BMWCode[] {
  const searchTerm = query.toLowerCase().trim()
  
  return codes.filter(code => 
    code.code.toLowerCase().includes(searchTerm) ||
    code.description.toLowerCase().includes(searchTerm) ||
    code.system.toLowerCase().includes(searchTerm) ||
    code.causes.some((cause: string) => cause.toLowerCase().includes(searchTerm)) ||
    code.solutions.some((solution: string) => solution.toLowerCase().includes(searchTerm))
  )
}

export function getSeverityColor(severity: string): string {
  switch (severity) {
    case 'critical':
      return 'bg-red-100 text-red-800 border-red-200'
    case 'moderate':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    case 'minor':
      return 'bg-green-100 text-green-800 border-green-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

export function getSystemIcon(system: string): string {
  const icons: Record<string, string> = {
    engine: '🔧',
    transmission: '⚙️',
    brake: '🛑',
    abs: '🔒',
    airbag: '🛡️',
    emissions: '🌱',
    cooling: '❄️',
    turbo: '💨',
    electrical: '⚡',
    fuel: '⛽',
    exhaust: '💨',
    default: '🔍'
  }
  
  return icons[system] || icons.default
}