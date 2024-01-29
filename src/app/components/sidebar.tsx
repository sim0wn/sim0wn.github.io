'use client'

import { Separator } from '@/components/separator'
import { useSidebarStore } from '@/lib/store'
import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes, forwardRef } from 'react'
import { Social } from '../../components/social'
import { NavItem, NavLink } from './nav'
import EmailIcon from '/public/icons/email.svg'
import FingerPrintIcon from '/public/icons/fingerprint.svg'
import GithubIcon from '/public/icons/github.svg'
import HackTheBoxIcon from '/public/icons/hackthebox.svg'
import LattesIcon from '/public/icons/lattes.svg'
import LinkedInIcon from '/public/icons/linkedin.svg'
import RepositoryIcon from '/public/icons/repository.svg'
import TryHackMeIcon from '/public/icons/tryhackme.svg'
import Icon from '/public/img/icon.png'

const Sidebar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, outerRef) => {
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
          'max-md:fixed max-md:left-0 max-md:top-16 max-md:z-10 md:translate-x-0' /* position */,
          'flex h-screen w-96 flex-col gap-2 p-2' /* layout */,
          'transition-transform ease-in-out' /* animation */,
          'border-r border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800' /* styling */,
          className
        )}
        {...props}
      >
        <header className="flex flex-col gap-4">
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
        </header>
        <Separator orientation="horizontal" />
        <nav>
          <menu>
            <NavItem>
              <NavLink href="/">
                <FingerPrintIcon />
                Sobre mim
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/repositories">
                <RepositoryIcon />
                Repositórios
              </NavLink>
            </NavItem>
          </menu>
        </nav>
      </aside>
    )
  }
)

Sidebar.displayName = 'Sidebar'
export default Sidebar
