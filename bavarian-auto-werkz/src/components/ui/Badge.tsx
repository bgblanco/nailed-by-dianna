import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'critical' | 'moderate' | 'minor' | 'bmw' | 'performance'
  size?: 'sm' | 'md' | 'lg'
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center rounded-full font-medium'
    
    const variants = {
      default: 'bg-bmw-gray-100 text-bmw-gray-800',
      critical: 'bg-status-critical/10 text-status-critical border border-status-critical/20',
      moderate: 'bg-status-moderate/10 text-status-moderate border border-status-moderate/20',
      minor: 'bg-status-minor/10 text-status-minor border border-status-minor/20',
      bmw: 'bg-bmw-blue-100 text-bmw-blue-800 border border-bmw-blue-200',
      performance: 'bg-performance-red/10 text-performance-red border border-performance-red/20'
    }
    
    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base'
    }
    
    return (
      <div
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'

export default Badge