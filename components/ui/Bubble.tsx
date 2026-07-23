import React from 'react';
import { cn } from '@/lib/utils';

interface BubbleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Bubble({ children, className }: BubbleProps) {
  // Проверяем, есть ли кастомные классы для фона и границы
  const hasCustomBg = className?.match(/\bbg-\[|bg-\w+/);
  const hasCustomBorder = className?.match(/\bborder-\w+/);
  
  return (
    <div className={cn(
      'rounded-[12px] p-6 flex items-center justify-center',
      // Эффект жидкого стекла - всегда применяем backdrop-blur и shadow
      'backdrop-blur-xl backdrop-saturate-150',
      'shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]',
      'hover:bg-white/15 transition-all duration-300',
      // Фон и граница по умолчанию, если не указаны кастомные
      !hasCustomBg && 'bg-white/10',
      !hasCustomBorder && 'border border-white/30',
      !className?.includes('w-') && 'w-full',
      className
    )}>
      {children}
    </div>
  );
}
