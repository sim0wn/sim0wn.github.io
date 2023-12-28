'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

export default function SocialIcon({
  href,
  icon,
}: {
  href: string
  icon: string
}) {
  return (
    <Link href={href} className="flex items-center">
      <Icon
        icon={icon}
        width={50}
        height={50}
        className="text-white hover:text-purple-900 hover:bg-white rounded-md p-1"
      />
    </Link>
  )
}
