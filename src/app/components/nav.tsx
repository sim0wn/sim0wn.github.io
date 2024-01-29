'use client'

import { Anchor } from '@/components/anchor'
import classNames from 'classnames'
import { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { AnchorHTMLAttributes, LiHTMLAttributes, forwardRef } from 'react'

export const NavItem = forwardRef<
  HTMLLIElement,
  LiHTMLAttributes<HTMLLIElement>
>(function NavItem({ children, className, ...props }, ref) {
  return (
    <li
      className={classNames(
        'flex items-center gap-2 rounded-sm hover:bg-neutral-300 hover:dark:bg-neutral-600',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </li>
  )
})

export const NavLink = forwardRef<
  HTMLAnchorElement,
  LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
>(function NavLink({ children, className, href, ...props }, ref) {
  const pathname = usePathname()
  return (
    <Anchor
      className={classNames(
        'flex-1 p-2',
        {
          'border-b-2 border-neutral-400 dark:border-neutral-300':
            pathname === href,
        },
        className
      )}
      href={href}
      ref={ref}
      {...props}
    >
      {children}
    </Anchor>
  )
})
