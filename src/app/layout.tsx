import type { Metadata } from 'next'
import { Glegoo } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const glegoo = Glegoo({ weight: '700', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'sim0wn',
  description: 'See my work',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${glegoo.className} bg-purple-600 gap-4 w-screen h-screen flex flex-col text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
