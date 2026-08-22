import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'group relative inline-flex min-h-[44px] cursor-pointer items-center justify-center overflow-hidden font-body tracking-[0.18em] uppercase transition-all duration-500 ease-lux',
        // Gentle press feedback — matters on touch where there is no hover
        'active:scale-[0.97]',
        variant === 'primary' &&
          'bg-obsidian text-white hover:bg-navy-light',
        variant === 'secondary' &&
          'bg-gold text-white hover:bg-gold-dark',
        variant === 'outline' &&
          'border border-obsidian/70 text-obsidian hover:border-obsidian hover:bg-obsidian hover:text-white',
        variant === 'ghost' &&
          'text-obsidian hover:text-gold',
        variant === 'gold' &&
          'bg-gold text-white hover:bg-gold-dark',
        size === 'sm' && 'px-6 py-2.5 text-[11px]',
        size === 'md' && 'px-8 py-3 text-xs',
        size === 'lg' && 'px-10 py-4 text-xs',
        className
      )}
      {...props}
    >
      {/* Gold sweep on hover — a quiet flash of the house accent */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 ease-lux group-hover:translate-x-full"
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </button>
  )
}
