import { rowdies } from '@/fonts/rowdies'
import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import { Anchor } from '../../components/anchor'
import ThemeToggle from './theme-toogle'

export default function Header({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <header
      className={classNames(
        'flex w-full flex-row items-center justify-center p-3 px-2 text-center text-4xl' /* layout */,
        'border-b border-neutral-300 font-bold dark:border-neutral-700' /* styling */,
        rowdies.className /* font */,
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
