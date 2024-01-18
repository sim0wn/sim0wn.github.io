import type { Metadata } from 'next'
import { Glegoo as FontSans } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import { cn } from '@/lib/utils'
import Providers from './providers'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: '700',
})

export const metadata: Metadata = {
  description: 'Meu portfólio',
  title: 'sim0wn',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <Providers>
        <body
          className={cn(
            'flex min-h-screen w-screen flex-col overflow-y-auto overflow-x-hidden bg-neutral-100 font-sans text-neutral-900 antialiased dark:bg-neutral-900 dark:text-white',
            fontSans.variable
          )}
        >
          <Header />
          {children}
          {/* <Footer /> */}
        </body>
      </Providers>
    </html>
  )
}
