import React from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, icon, ...props }, ref) => {
    const baseStyles = 'flex h-10 w-full rounded-lg border border-bmw-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-bmw-gray-500 focus:outline-none focus:ring-2 focus:ring-bmw-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
    
    const errorStyles = error ? 'border-status-critical focus:ring-status-critical' : ''
    
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-bmw-gray-900">
            {label}
            {props.required && <span className="text-status-critical ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bmw-gray-400">
              {icon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              baseStyles,
              errorStyles,
              icon && 'pl-10',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="text-sm text-status-critical">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input