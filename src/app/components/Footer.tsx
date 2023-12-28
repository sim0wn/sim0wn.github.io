import Image from 'next/image'
import Link from 'next/link'
import { Icon, IconProps, IconifyIcon } from '@iconify/react'
import { LinkHTMLAttributes } from 'react'
import { Url } from 'url'
import SocialIcon from './SocialIcon'

export default function Footer() {
  return (
    <footer className="bg-purple-700 flex flex-row px-4 py-6 h-16 justify-center align-middle gap-3">
      <SocialIcon
        href="http://lattes.cnpq.br/4781391320784524"
        icon={'academicons:lattes'}
      />
      <SocialIcon
        href="https://github.com/sim0wn/"
        icon={'fa-brands:github'}
      />
      <SocialIcon
        href="https://www.linkedin.com/in/halissoncruz/"
        icon={'fa6-brands:linkedin-in'}
      />
    </footer>
  )
}
