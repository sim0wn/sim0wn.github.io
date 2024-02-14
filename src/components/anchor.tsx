import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, forwardRef } from 'react'

export const Anchor = forwardRef<
  HTMLAnchorElement,
  LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
>(function Anchor({ children, className, href, ...props }, ref) {
  return (
    <Link
      className={classNames(
        'flex w-fit items-center gap-2' /* layout */,
        'transition-all duration-200 hover:-translate-y-1 hover:text-neutral-600 dark:hover:text-neutral-300' /* styling */,
        className
      )}
      href={href}
      ref={ref}
      {...props}
    >
      {children}
    </Link>
  )
})
