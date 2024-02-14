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
          'grid grid-cols-[max-content_1fr] grid-rows-[max-content_1fr]' /* layout */,
          'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-50' /* styling */,
          'w-screen lg:h-screen' /* sizing */,
          'lg:overflow-hidden' /* other */,
          ['antialiased', glegoo.className] /* font */
        )}
      >
        <Providers>
          <Header className="col-span-full row-span-1" />
          <Sidebar
            className={classNames(
              'col-span-full lg:col-span-1 lg:row-span-full' /* layout */,
              'transition-width duration-200 ease-in-out' /* animation */,
              'lg:w-80 xl:w-96' /* sizing */,
              'lg:row-start-2' /* position */
            )}
          />
          <ScrollArea
            className={classNames(
              'col-span-full row-span-full' /* layout */,
              'row-start-3 lg:col-start-2 lg:row-start-2' /* position */,
              'p-2' /* styling */
            )}
          >
            {children}
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </Providers>
      </body>
    </html>
  )
}
