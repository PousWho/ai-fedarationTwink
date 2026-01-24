import React from 'react';
import { cn } from '@/lib/utils';

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  dark?: boolean;
}

export default function Field({ 
  label, 
  error, 
  dark = false,
  className,
  id,
  ...props 
}: FieldProps) {
  const fieldId = id || `field-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={fieldId}
          className={cn(
            'block text-small mb-2 font-guidy',
            dark ? 'text-aimy-text-white' : 'text-aimy-text-black'
          )}
        >
          {label}
        </label>
      )}
      <input
        id={fieldId}
        className={cn(
          'w-full px-4 py-3 border rounded text-small font-guidy focus:outline-none focus:border-aimy-accent',
          dark 
            ? 'border-aimy-text-white text-aimy-text-white bg-transparent placeholder:text-aimy-text-white placeholder:opacity-50'
            : 'border-[#dbdbdb] text-aimy-text-black bg-white placeholder:text-aimy-text-black placeholder:opacity-50',
          error && 'border-aimy-error',
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        {...props}
      />
      {error && (
        <p 
          id={`${fieldId}-error`}
          className="mt-1 text-small text-aimy-error font-guidy"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
