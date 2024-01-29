import { Card, CardContent, CardHeader, CardTitle } from '@/components/card'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre mim',
}

export default function Page() {
  return (
    <main className="flex flex-col gap-2">
      <h1>Sobre mim</h1>
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Interesses</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Segurança da Informação</li>
              <li>Redes de Computadores</li>
              <li>Linux</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
