import { Variant } from '@/types/variant'
import classNames from 'classnames'
import { HTMLAttributes } from 'react'

const variants = {
  default:
    'shadow border-neutral-400 dark:border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700 border-0 border-b-2 rounded-t-md',
  destructive:
    'border-transparent text-destructive-foreground shadow hover:bg-destructive/80',
  outline: 'border border-neutral-400 dark:border-neutral-600 rounded',
  secondary:
    'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
}

function Badge({
  className,
  variant = 'default',
  ...props
}: HTMLAttributes<HTMLDivElement> & { variant?: Variant }) {
  return (
    <div
      className={classNames(
        'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
