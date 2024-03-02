import { rowdies } from '@/fonts/rowdies'
import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import { Anchor } from '../../components/anchor'
import ThemeToggle from './theme-toogle'

export default function Header({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <header
      className={classNames(
        'grid grid-cols-3' /* layout */,
        'px-2 py-3 text-4xl' /* styling */,
        ['font-bold', rowdies.className] /* font */,
        'w-full' /* sizing */,
        className
      )}
    >
      <Anchor href="/" className="col-start-2 justify-self-center">
        sim0wn
      </Anchor>
      <ThemeToggle className="justify-self-end" />
    </header>
  )
}
