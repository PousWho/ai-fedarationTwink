import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface OpportunityCardProps {
  icon?: string | React.ReactNode;
  title: string;
  description?: string;
  items?: readonly string[] | string[];
  className?: string;
  style?: React.CSSProperties;
}

export default function OpportunityCard({
  icon,
  title,
  description,
  items,
  className,
  style
}: OpportunityCardProps) {
  const displayItems = items || (description ? [description] : []);

  return (
    <article className={cn('bg-transparent p-4 sm:p-6 w-full min-w-0', className)} style={style}>
      <div className="flex items-start gap-3 sm:gap-4 mb-3 min-w-0">
        {icon && (
          <div className="flex-shrink-0">
            <div className="w-11 h-11 bg-aimy-purple rounded flex items-center justify-center">
              {typeof icon === 'string' ? (
                <Image
                  src={icon}
                  alt=""
                  width={24}
                  height={24}
                  className="object-contain"
                />
              ) : (
                icon
              )}
            </div>
          </div>
        )}
        <h3 className="text-[clamp(19px,0.6vw+15px,24px)] leading-[1.3] text-aimy-accent font-bounded font-normal flex-1 min-w-0">
          {title}
        </h3>
      </div>
      {displayItems.length > 0 && (
        <ul className="space-y-2 list-disc list-outside pl-6 marker:text-aimy-text-white">
          {displayItems.map((item, index) => (
            <li key={index} className="text-text text-aimy-text-white font-guidy">
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
