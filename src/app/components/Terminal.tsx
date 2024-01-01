import Link from 'next/link'
import { HTMLAttributes, LiHTMLAttributes, MenuHTMLAttributes } from 'react'

interface TerminalProps extends HTMLAttributes<HTMLDivElement> {
  title: string
}

function Navbar({ children }: MenuHTMLAttributes<HTMLMenuElement>) {
  return (
    <nav className="text-center w-full">
      <menu className="list-none flex bg-zinc-500 p-1 justify-center">
        {children}
      </menu>
    </nav>
  )
}

function Tab({ children }: LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li className="border-b-2 border-purple-300 mx-6 text-purple-100 w-full">
      <Link href="#">{children}</Link>
    </li>
  )
}

function TabContent({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <section className="rounded-xl pt-1 pb-2 flex flex-col gap-1">
      {children}
    </section>
  )
}

function Terminal({ title, children }: TerminalProps) {
  return (
    <div className="bg-zinc-700 rounded-xl">
      <h3 className="text-center mt-auto p-2">{title}</h3>
      {children}
    </div>
  )
}

Terminal.Navbar = Navbar
Terminal.Tab = Tab
Terminal.TabContent = TabContent

export default Terminal
