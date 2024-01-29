import { rowdies } from '@/fonts/rowdies'
import classNames from 'classnames'
import { Anchor } from '../../components/anchor'
import SidebarToggle from './sidebar-toggle'
import ThemeToggle from './theme-toogle'

export default function Header() {
  return (
    <header
      className={classNames(
        'flex h-16 w-full flex-row items-center justify-center p-3 px-2 text-center text-4xl' /* layout */,
        'border-b border-neutral-300 font-bold dark:border-neutral-700' /* styling */,
        rowdies.className /* font */
      )}
    >
      <SidebarToggle />
      <Anchor href="/" className="mx-auto">
        sim0wn
      </Anchor>
      <div className="flex flex-1 place-content-end">
        <ThemeToggle />
      </div>
    </header>
  )
}
