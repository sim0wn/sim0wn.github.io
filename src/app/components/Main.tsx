import { HTMLAttributes } from 'react'

export default function Main({ children }: HTMLAttributes<HTMLDivElement>) {
  return <main className="flex flex-1 flex-col gap-4 px-2">{children}</main>
}
