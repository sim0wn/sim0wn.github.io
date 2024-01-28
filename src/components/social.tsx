import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, forwardRef } from 'react'

const Social = forwardRef<
  HTMLAnchorElement,
  LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
>(({ children, href, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      href={new URL(href || '#')}
      className={classNames(
        'flex h-full items-center rounded-md' /* layout */,
        'bg-gradient-to-bl from-purple-800 from-20% via-purple-700 to-purple-600' /* styling */,
        [
          '*:duration-125 *:transition *:ease-out *:hover:-translate-y-1 *:hover:scale-105 *:hover:bg-gradient-to-t *:hover:dark:text-purple-900' /* animation */,
          '*:h-fit *:w-11 *:rounded-md' /* layout */,
          '*:from-neutral-700 *:to-neutral-500 *:p-1 *:text-white  *:dark:from-gray-400 *:dark:to-white' /* styling */,
        ] /* children styling */
      )}
      {...props}
    >
      {children}
    </Link>
  )
})

Social.displayName = 'Social'

export { Social }
