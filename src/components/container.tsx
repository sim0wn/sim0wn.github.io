import { HTMLAttributes } from 'react'

interface MainProps extends HTMLAttributes<HTMLDivElement> {
  title: string
}

export default function Container({ children, title }: MainProps) {
  return (
    <main>
      <section className="mb-1.5 border-b border-neutral-300 px-1 dark:border-neutral-700">
        <h1 className="text-lg">{title}</h1>
      </section>
      {children}
    </main>
  )
}
