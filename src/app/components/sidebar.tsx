'use client'

import { Separator } from '@/components/separator'
import { useSidebarStore } from '@/lib/store'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { HTMLAttributes, forwardRef } from 'react'
import { Social } from '../../components/social'
import Icon from '../icon.png'
import EmailIcon from '/public/email.svg'
import GithubIcon from '/public/github.svg'
import HackTheBoxIcon from '/public/hackthebox.svg'
import LattesIcon from '/public/lattes.svg'
import LinkedInIcon from '/public/linkedin.svg'
import RepositoryIcon from '/public/repository.svg'
import TryHackMeIcon from '/public/tryhackme.svg'

const Sidebar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ ...props }, outerRef) => {
    const { state } = useSidebarStore()
    return (
      <aside
        ref={outerRef}
        id="sidebar"
        aria-label="Sidebar"
        className={classNames(
          {
            '-translate-x-full': state === 'collapsed',
          },
          'fixed left-0 top-16 z-10 md:translate-x-0' /* position */,
          'flex h-screen w-96 flex-col gap-2 p-2' /* layout */,
          'transition-transform ease-in-out' /* animation */,
          'border-r border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800' /* styling */
        )}
        {...props}
      >
        <Image
          src={Icon}
          alt="Imagem do autor"
          width={Icon.width}
          height={Icon.height}
          className={classNames(
            'h-72 w-72' /* sizing */,
            'mx-auto' /* positioning */,
            'rounded-full object-cover p-0.5' /* layout */,
            'bg-gradient-to-bl from-purple-900 from-20% via-purple-700 to-purple-600' /* styling */
          )}
        />
        <ul
          className={classNames(
            'mx-auto' /* positioning */,
            'flex items-center justify-center justify-items-center gap-1.5' /* layout */
          )}
        >
          <li>
            <Social
              href="http://lattes.cnpq.br/4781391320784524/"
              aria-label="Acesse meu Lattes"
            >
              <LattesIcon />
            </Social>
          </li>
          <li>
            <Social
              href="https://app.hackthebox.com/profile/143157/"
              aria-label="Acesse meu perfil do Hack The Box"
            >
              <HackTheBoxIcon />
            </Social>
          </li>
          <li>
            <Social
              href="https://github.com/sim0wn/"
              aria-label="Acesse meu github"
            >
              <GithubIcon />
            </Social>
          </li>
          <li>
            <Social
              href="https://tryhackme.com/p/sim0wn/"
              aria-label="Acesse meu perfil do Try Hack Me"
            >
              <TryHackMeIcon />
            </Social>
          </li>
          <li>
            <Social
              href="https://www.linkedin.com/in/halissoncruz/"
              aria-label="Acesse meu perfil do LinkedIn"
            >
              <LinkedInIcon />
            </Social>
          </li>
          <li>
            <Social
              href="mailto:root@sim0wn.com"
              aria-label="Entre em contato comigo pelo email"
            >
              <EmailIcon />
            </Social>
          </li>
        </ul>
        <p className="text-wrap text-center">
          Olá, amigo. Seja bem vindo! <br /> Sou um entusiasta em
          cibersegurança e desenvolvedor por hobby. Aqui, você pode conferir
          algumas de minhas habilidades.
        </p>
        <Separator orientation="horizontal" />
        <nav>
          <menu>
            <li className="flex items-center justify-items-start gap-2 p-2">
              <RepositoryIcon />
              <Link href="repositories">Repositórios</Link>
            </li>
          </menu>
        </nav>
      </aside>
    )
  }
)

Sidebar.displayName = 'Sidebar'
export default Sidebar
