import { ScrollArea, ScrollBar } from '@/components/scroll-area'
import { glegoo } from '@/fonts/glegoo'
import classNames from 'classnames'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Providers from './providers'
import './styles.css'

export const metadata: Metadata = {
  description: 'Meu portfólio',
  title: {
    default: 'sim0wn',
    template: '%s | sim0wn',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={classNames(
          'flex h-screen w-screen flex-col overflow-hidden' /* layout */,
          'bg-neutral-100 text-neutral-800 antialiased dark:bg-neutral-800 dark:text-neutral-50' /* styling */,
          glegoo.className /* font */
        )}
      >
        <Providers>
          <Header />
          <section className={classNames('flex h-screen pb-16')}>
            <Sidebar />
            <ScrollArea className={classNames('flex-1 p-2' /* layout */)}>
              {children}
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </section>
        </Providers>
      </body>
    </html>
  )
}
