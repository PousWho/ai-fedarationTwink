import React from 'react';

interface IconProps {
  name: 'chevron-down' | 'menu' | 'close' | 'arrow-up' | 'globe';
  className?: string;
  'aria-hidden'?: boolean;
}

const iconPaths = {
  'chevron-down': 'M19 9l-7 7-7-7',
  'menu': 'M4 6h16M4 12h16M4 18h16',
  'close': 'M6 18L18 6M6 6l12 12',
  'arrow-up': 'M5 10l7-7m0 0l7 7m-7-7v18',
  'globe': 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
};

export default function Icon({ name, className, 'aria-hidden': ariaHidden = true }: IconProps) {
  return (
    <svg
      className={className || 'w-6 h-6'}
      fill="none"
      stroke="currentColor" 
      viewBox="0 0 24 24"
      aria-hidden={ariaHidden}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d={iconPaths[name]} 
      />
    </svg>
  );
}
