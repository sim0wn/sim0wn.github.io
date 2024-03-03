import { Anchor } from '@/components/anchor'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card'
import Container from '@/components/container'
import { getPlatformDescription } from '@/lib/getPlatformDescription'
import { getPlatforms } from '@/lib/getPlatforms'

export default async function Page() {
  const platforms = await getPlatforms()
  return (
    <Container title="Soluções de Problemas">
      {platforms.map(async ({ name, sha }: { sha: string; name: string }) => {
        const platform = await getPlatformDescription(name)
        return (
          <Anchor href={`solutions/${platform.name}`} key={sha}>
            <Card>
              <CardHeader>
                <CardTitle>{platform.name}</CardTitle>
              </CardHeader>
              <CardContent>{platform.description}</CardContent>
            </Card>
          </Anchor>
        )
      })}
    </Container>
  )
}
