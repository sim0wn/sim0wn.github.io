import { Card, CardContent, CardHeader, CardTitle } from '@/components/card'
import Container from '@/components/container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre mim',
}

export default function Page() {
  return (
    <Container className="flex flex-col gap-2">
      <Container.Header>
        <h1>Sobre mim</h1>
      </Container.Header>
      <section className="grid grid-flow-row gap-1 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Interesses</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Segurança da Informação</li>
              <li>Testes de Invasão</li>
              <li>FOSS</li>
              <li>Redes de Computadores</li>
              <li>Linux</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Linguagens de Programação</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Python</li>
              <li>TypeScript</li>
              <li>Rust</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </Container>
  )
}
