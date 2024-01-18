import Link, { LinkProps } from 'next/link'
import React, { ReactElement } from 'react'

interface SocialProps extends LinkProps {
  icon: ReactElement
}

export function Social({ href, icon, ...props }: SocialProps) {
  const styledIcon = React.cloneElement(icon, {
    className:
      'transition text-white hover:dark:text-purple-900 hover:scale-105 hover:-translate-y-1 duration-125 ease-out dark:from-gray-400 dark:to-white from-neutral-700 to-neutral-500 hover:bg-gradient-to-t rounded-md p-1 w-11 h-full',
  })
  return (
    <Link
      href={href}
      className="flex h-full items-center rounded-md bg-gradient-to-bl from-purple-800 from-20% via-purple-700 to-purple-600"
      {...props}
    >
      {styledIcon}
    </Link>
  )
}
