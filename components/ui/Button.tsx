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
        'font-normal rounded-[26px] transition-colors font-guidy',
        variant === 'primary' && 'bg-aimy-button-primary text-aimy-text-white hover:bg-aimy-button-primary-hover active:bg-aimy-button-primary-pressed',
        variant === 'secondary' && 'bg-transparent border border-aimy-text-white text-aimy-text-white hover:bg-aimy-text-white/10 hover:text-aimy-text-white',
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
