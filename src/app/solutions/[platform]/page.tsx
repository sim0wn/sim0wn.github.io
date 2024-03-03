import { Anchor } from '@/components/anchor'
import { Card, CardHeader, CardTitle } from '@/components/card'
import { getSolutions } from '@/lib/getSolutions'

export default async function Page({
  params,
}: {
  params: { platform: string }
}) {
  const solutions = (await getSolutions(params.platform)) as Array<{
    sha: string
    name: string
  }>
  return solutions.map(({ name, sha }) => (
    <Anchor href={`/solutions/${params.platform}/${name}`} key={sha}>
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
      </Card>
    </Anchor>
  ))
}
