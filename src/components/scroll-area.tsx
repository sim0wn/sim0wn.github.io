'use client'

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import classNames from 'classnames'

import { ElementRef, HTMLAttributes, forwardRef } from 'react'

const ScrollArea = forwardRef<
  ElementRef<typeof ScrollAreaPrimitive.Root>,
  HTMLAttributes<HTMLDivElement> &
    React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ children, className, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={classNames('relative overflow-hidden', className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit] pr-3">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  {
    orientation?: 'vertical' | 'horizontal'
  } & HTMLAttributes<HTMLDivElement> &
    React.ComponentPropsWithoutRef<
      typeof ScrollAreaPrimitive.ScrollAreaScrollbar
    >
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={classNames(
      'flex touch-none select-none transition-colors',
      {
        'h-2.5 flex-col border-t border-t-transparent p-[1px]':
          orientation === 'horizontal',
        'h-full w-2.5 border-l border-l-transparent p-[1px]':
          orientation === 'vertical',
      },
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-neutral-400 dark:bg-neutral-600" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
