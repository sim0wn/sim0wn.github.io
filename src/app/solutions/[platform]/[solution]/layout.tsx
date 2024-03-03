import Container from '@/components/container'
import { ReactNode } from 'react'

export default function Layout({
  children,
  params,
}: {
  children: ReactNode
  params: { solution: string }
}) {
  return (
    <Container>
      <Container.Header>
        <h1>{params.solution}</h1>
      </Container.Header>
      {children}
    </Container>
  )
}
