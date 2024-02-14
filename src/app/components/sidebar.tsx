import { Anchor } from '@/components/anchor'
import { Separator } from '@/components/separator'
import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes, forwardRef } from 'react'
import { NavItem, NavLink } from './nav'
import FingerPrintIcon from '/public/icons/fingerprint.svg'
import RepositoryIcon from '/public/icons/repository.svg'
import EmailIcon from '/public/icons/socials/email.svg'
import GithubIcon from '/public/icons/socials/github.svg'
import HackTheBoxIcon from '/public/icons/socials/hackthebox.svg'
import LattesIcon from '/public/icons/socials/lattes.svg'
import LinkedInIcon from '/public/icons/socials/linkedin.svg'
import TryHackMeIcon from '/public/icons/socials/tryhackme.svg'

const Sidebar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, outerRef) => {
    return (
      <aside
        ref={outerRef}
        id="sidebar"
        aria-label="Sidebar"
        className={classNames(
          'flex flex-col gap-2 p-2' /* layout */,
          'transition-transform ease-in-out' /* animation */,
          'border-r border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800' /* styling */,
          className
        )}
        {...props}
      >
        <header className="flex flex-col gap-4">
          <Image
            src={'/img/icon.jpg'}
            alt="Logo com um S preenchido por degradê em tons de roxo produzido por inteligência artificial"
            width={300}
            height={300}
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
              'flex flex-wrap items-center justify-center justify-items-center gap-1.5' /* layout */,
              'text-4xl' /* styling */
            )}
          >
            <li>
              <Anchor
                href="http://lattes.cnpq.br/4781391320784524/"
                aria-label="Acesse meu Lattes"
              >
                <LattesIcon />
              </Anchor>
            </li>
            <li>
              <Anchor
                href="https://app.hackthebox.com/profile/143157/"
                aria-label="Acesse meu perfil do Hack The Box"
              >
                <HackTheBoxIcon />
              </Anchor>
            </li>
            <li>
              <Anchor
                href="https://github.com/sim0wn/"
                aria-label="Acesse meu github"
              >
                <GithubIcon />
              </Anchor>
            </li>
            <li>
              <Anchor
                href="https://tryhackme.com/p/sim0wn/"
                aria-label="Acesse meu perfil do Try Hack Me"
              >
                <TryHackMeIcon />
              </Anchor>
            </li>
            <li>
              <Anchor
                href="https://www.linkedin.com/in/halissoncruz/"
                aria-label="Acesse meu perfil do LinkedIn"
              >
                <LinkedInIcon />
              </Anchor>
            </li>
            <li>
              <Anchor
                href="mailto:root@sim0wn.com"
                aria-label="Entre em contato comigo pelo email"
              >
                <EmailIcon />
              </Anchor>
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
