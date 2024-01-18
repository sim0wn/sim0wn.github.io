import { HTMLAttributes } from 'react'

export default function Main({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <main className="flex flex-1 flex-col gap-4 bg-neutral-100 px-2 pb-2 pt-4 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-100">
      {children}
    </main>
  )
}
