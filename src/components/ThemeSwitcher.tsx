'use client'

import { useTheme } from 'next-themes'
import SunIcon from '/public/sun.svg'
import MoonIcon from '/public/moon.svg'
import { ButtonHTMLAttributes, useState } from 'react'

export default function ThemeSwitcher({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  // eslint-disable-next-line perfectionist/sort-objects
  const { theme, setTheme } = useTheme()
  const [icon, setIcon] = useState(theme === 'dark' ? 'moon' : 'sun')
  return (
    <button
      {...props}
      onClick={() => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        setIcon(newTheme === 'dark' ? 'moon' : 'sun')
      }}
      onMouseEnter={() => setIcon(theme === 'light' ? 'moon' : 'sun')}
      onMouseLeave={() => setIcon(theme === 'light' ? 'sun' : 'moon')}
      className="h-full w-fit rounded-full p-1 text-4xl *:rounded-full hover:bg-neutral-300 dark:hover:bg-white"
    >
      {icon === 'moon' ? (
        <MoonIcon className="bg-sky-800 p-1 text-white" />
      ) : (
        <SunIcon className="bg-yellow-500 p-1 text-orange-700" />
      )}
    </button>
  )
}
