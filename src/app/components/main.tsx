'use client'

import { glegoo } from '@/fonts/glegoo'
import classNames from 'classnames'
import { HTMLAttributes, forwardRef } from 'react'
import { ScrollArea, ScrollBar } from '../../components/scroll-area'
import Sidebar from './sidebar'

export const Main = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children }, outerRef) => {
    return (
      <main
        className={classNames(
          'h-full flex-1 gap-4 p-2' /* layout */,
          'my-16 md:ml-96' /* positioning */,
          glegoo.className /* font */
        )}
        ref={outerRef}
      >
        <Sidebar />
        <ScrollArea
          className={classNames(
            'flex h-screen w-full flex-col pb-20' /* layout */
          )}
        >
          {children}
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </main>
    )
  }
)

Main.displayName = 'Main'

export default Main
