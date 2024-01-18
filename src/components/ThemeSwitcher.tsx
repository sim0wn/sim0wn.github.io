'use client'

import { useTheme } from 'next-themes'
import SunIcon from '/public/sun.svg'
import MoonIcon from '/public/moon.svg'
import { ButtonHTMLAttributes } from 'react'

export default function ThemeSwitcher({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  // eslint-disable-next-line perfectionist/sort-objects
  const { theme, setTheme } = useTheme()
  return (
    <button
      {...props}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <SunIcon className="rounded-full bg-yellow-500 p-1 text-orange-700" />
      ) : (
        <MoonIcon className="rounded-full bg-sky-800 p-1 text-white" />
      )}
    </button>
  )
}
