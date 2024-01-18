'use client'

import { useEffect, useState } from 'react'
import Up from '/public/up.svg'

export default function BackToTop() {
  const [visibility, setVisibility] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight / 50) {
        console.log(window.scrollY)
        setVisibility(true)
      } else {
        setVisibility(false)
      }
    })
  }, [])
  return (
    <button
      className={[
        'fixed bottom-0 right-0 m-3 rounded-full bg-purple-500 p-1.5 text-5xl dark:bg-purple-800',
        visibility === true ? 'visible' : 'hidden',
      ].join(' ')}
      onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
    >
      <Up />
    </button>
  )
}
