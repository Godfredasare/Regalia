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
        'group relative inline-flex items-center justify-center font-body tracking-[0.15em] uppercase transition-all duration-500 ease-out',
        variant === 'primary' &&
          'bg-obsidian text-white hover:bg-obsidian-light',
        variant === 'secondary' &&
          'bg-gold text-white hover:bg-gold-dark',
        variant === 'outline' &&
          'border border-obsidian text-obsidian hover:bg-obsidian hover:text-white',
        variant === 'ghost' &&
          'text-obsidian hover:text-gold',
        variant === 'gold' &&
          'bg-gold text-white hover:bg-gold-dark',
        size === 'sm' && 'px-6 py-2.5 text-[11px]',
        size === 'md' && 'px-8 py-3.5 text-xs',
        size === 'lg' && 'px-10 py-4.5 text-xs',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}