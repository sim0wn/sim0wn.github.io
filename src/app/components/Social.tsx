import Link, { LinkProps } from 'next/link'
import React, { ReactElement } from 'react'

interface SocialProps extends LinkProps {
  icon: ReactElement
}

export function Social({ href, icon, ...props }: SocialProps) {
  const styledIcon = React.cloneElement(icon, {
    className:
      'transition text-white hover:text-purple-900 hover:scale-105 hover:-translate-y-1 duration-125 ease-out hover:bg-white rounded-md p-1 w-full h-14',
  })
  return (
    <Link href={href} className="flex h-full items-center" {...props}>
      {styledIcon}
    </Link>
  )
}
