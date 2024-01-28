'use client'

import { rowdies } from '@/fonts/rowdies'
import { useSidebarStore } from '@/lib/store'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import MenuIcon from '/public/menu.svg'
import MoonIcon from '/public/moon.svg'
import SunIcon from '/public/sun.svg'

export default function Header() {
  const { setTheme, theme } = useTheme()
  const { toggle: toggleSidebar } = useSidebarStore()
  return (
    <header
      className={classNames(
        'fixed left-0 top-0 z-20' /* positioning */,
        'flex h-16 w-full flex-row items-center justify-center p-3 px-2 text-center text-4xl' /* layout */,
        'border-b border-neutral-300 font-bold dark:border-neutral-700' /* styling */,
        rowdies.className /* font */
      )}
    >
      <button className="flex-1 md:invisible" onClick={toggleSidebar}>
        <MenuIcon />
      </button>
      <h1 className="mx-auto">sim0wn</h1>
      <div className="flex flex-1 place-content-end">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Alternar tema escuro e claro"
          className={classNames(
            'h-full w-fit rounded-full p-0.5 *:rounded-full' /* layout */,
            'text-4xl hover:bg-neutral-300 dark:hover:text-neutral-700' /* styling */
          )}
        >
          {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </header>
  )
}
