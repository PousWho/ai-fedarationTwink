import { cn } from '@/lib/utils';

interface SectionDividerProps {
  label: string;
  className?: string;
}

export default function SectionDivider({ label, className }: SectionDividerProps) {
  return (
    <div className={cn('flex items-center mb-8', className)}>
      <span className="text-aimy-accent text-subheading font-normal mr-4 font-guidy min-w-0">{label}</span>
      <div className="flex-1 min-w-8 h-px bg-aimy-accent" aria-hidden="true" />
    </div>
  );
}
