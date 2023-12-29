import Link, { LinkProps } from 'next/link'
import React, { ReactElement, ReactNode } from 'react'

interface SocialProps extends LinkProps {
  icon: ReactElement
}

export function Social({ href, icon, ...props }: SocialProps) {
  const styledIcon = React.cloneElement(icon, {
    className:
      'text-white hover:text-purple-900 hover:bg-white rounded-md p-1 w-full h-14',
  })
  return (
    <Link href={href} className="flex items-center h-full" {...props}>
      {styledIcon}
    </Link>
  )
}
