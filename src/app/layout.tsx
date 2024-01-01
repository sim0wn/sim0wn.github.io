import type { Metadata } from 'next'
import { Glegoo } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const glegoo = Glegoo({ subsets: ['latin'], weight: '700' })

export const metadata: Metadata = {
  description: 'See my work',
  title: 'sim0wn',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${glegoo.className} flex h-screen w-screen flex-col gap-4 scroll-smooth bg-gradient-to-bl from-purple-900 from-20% via-purple-700 to-purple-600 text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
