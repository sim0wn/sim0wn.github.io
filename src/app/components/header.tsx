import { rowdies } from '@/fonts/rowdies'
import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import { Anchor } from '../../components/anchor'
import ThemeToggle from './theme-toogle'

export default function Header({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <header
      className={classNames(
        'flex flex-row items-center justify-center text-center' /* layout */,
        'px-2 py-3 text-4xl' /* styling */,
        ['font-bold', rowdies.className] /* font */,
        'w-full' /* sizing */,
        className
      )}
    >
      <Anchor href="/" className="mx-auto flex-1 justify-center">
        sim0wn
      </Anchor>
      <div className="flex place-content-end">
        <ThemeToggle />
      </div>
    </header>
  )
}
