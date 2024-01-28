import classNames from 'classnames'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Header from './components/header'
import Main from './components/main'
import './globals.css'
import Providers from './providers'

export const metadata: Metadata = {
  description: 'Meu portfólio',
  title: 'sim0wn',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <Providers>
        <body
          className={classNames(
            'flex min-h-screen w-screen flex-col overflow-hidden' /* layout */,
            'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-50' /* styling */,
            'font-sans antialiased' /* styling */
          )}
        >
          <Header />
          <Main>{children}</Main>
        </body>
      </Providers>
    </html>
  )
}
