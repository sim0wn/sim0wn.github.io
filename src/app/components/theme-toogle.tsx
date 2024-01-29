'use client'

import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import MoonIcon from '/public/icons/moon.svg'
import SunIcon from '/public/icons/sun.svg'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Alternar tema escuro e claro"
      className={classNames(
        'h-full w-fit rounded-full p-0.5 *:rounded-full' /* layout */,
        'text-4xl hover:bg-neutral-300 dark:hover:text-neutral-700' /* styling */
      )}
    >
      {resolvedTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
