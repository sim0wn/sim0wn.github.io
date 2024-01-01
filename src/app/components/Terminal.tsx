import Link from 'next/link'
import { HTMLAttributes, LiHTMLAttributes, MenuHTMLAttributes } from 'react'

interface TerminalProps extends HTMLAttributes<HTMLDivElement> {
  title: string
}

function Navbar({ children }: MenuHTMLAttributes<HTMLMenuElement>) {
  return (
    <nav className="w-full text-center">
      <menu className="flex list-none justify-center bg-zinc-500 p-1">
        {children}
      </menu>
    </nav>
  )
}

function Tab({ children }: LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li className="mx-6 w-full border-b-2 border-purple-300 text-purple-100">
      <Link href="#">{children}</Link>
    </li>
  )
}

function TabContent({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <section className="flex flex-col gap-1 rounded-xl pb-2 pt-1">
      {children}
    </section>
  )
}

function Terminal({ children, title }: TerminalProps) {
  return (
    <div className="rounded-xl bg-zinc-700">
      <h3 className="mt-auto p-2 text-center">{title}</h3>
      {children}
    </div>
  )
}

Terminal.Navbar = Navbar
Terminal.Tab = Tab
Terminal.TabContent = TabContent

export default Terminal
