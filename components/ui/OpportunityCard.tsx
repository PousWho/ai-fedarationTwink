import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface OpportunityCardProps {
  icon?: string | React.ReactNode;
  title: string;
  description?: string;
  items?: readonly string[] | string[];
  className?: string;
}

export default function OpportunityCard({ 
  icon, 
  title, 
  description,
  items,
  className 
}: OpportunityCardProps) {
  const displayItems = items || (description ? [description] : []);

  return (
    <article className={cn('bg-transparent p-6', className)}>
      <div className="flex items-start gap-4 mb-3">
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
        <h3 className="text-subheading text-aimy-purple font-bounded font-normal flex-1">
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
