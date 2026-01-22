import React from 'react';
import { cn } from '@/lib/utils';

interface BubbleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Bubble({ children, className }: BubbleProps) {
  return (
    <div className={cn(
      'bg-transparent border border-aimy-text-white rounded-[12px] p-6 flex items-center justify-center',
      !className?.includes('w-') && 'w-full',
      className
    )}>
      {children}
    </div>
  );
}
