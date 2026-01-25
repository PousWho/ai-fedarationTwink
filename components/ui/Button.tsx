import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'medium',
  children, 
  className,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'font-normal rounded-[26px] transition-all font-guidy',
        variant === 'primary' && [
          'backdrop-blur-xl backdrop-saturate-150',
          'bg-aimy-button-primary/80 text-aimy-text-white',
          'hover:bg-aimy-button-primary/90 active:bg-aimy-button-primary/70',
          'shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'
        ],
        variant === 'secondary' && [
          'backdrop-blur-xl backdrop-saturate-150',
          'bg-white/10 border border-white/30 text-aimy-text-white',
          'hover:bg-white/15 hover:text-aimy-text-white',
          'shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'
        ],
        size === 'small' && 'px-6 py-3 text-small',
        size === 'medium' && 'px-8 py-4 text-text',
        size === 'large' && 'px-8 py-4 text-body',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
