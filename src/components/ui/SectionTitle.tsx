import { cn } from '@/lib/utils'

interface SectionTitleProps {
  subtitle?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-16 max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {subtitle && (
        <p
          className={cn(
            'mb-4 text-[11px] font-medium uppercase tracking-[0.3em]',
            light ? 'text-gold' : 'text-gold'
          )}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          'heading-lg mb-6',
          light ? 'text-white' : 'text-obsidian'
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          'gold-line mx-auto mb-6',
          align === 'left' && 'mx-0'
        )}
      />
      {description && (
        <p
          className={cn(
            'body-md',
            light ? 'text-white/70' : 'text-warm-gray'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}