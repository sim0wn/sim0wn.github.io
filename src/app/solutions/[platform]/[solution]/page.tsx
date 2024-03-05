import { getSolution } from '@/lib/getSolution'
import { getSolutions } from '@/lib/getSolutions'
import { parseMarkdown } from '@/lib/parseMarkdown'
import { useRemarkSync } from 'react-remark'

export async function generateStaticParams({
  params,
}: {
  params: { platform: string }
}) {
  const solutions = (await getSolutions(params.platform)) as Array<{
    name: string
  }>
  return solutions.map(({ name }: { name: string }) => ({
    solution: name,
  }))
}

export default async function Page({
  params,
}: {
  params: { platform: string; solution: string }
}) {
  const markdown = parseMarkdown(
    await getSolution(params.platform, params.solution),
    `https://github.com/sim0wn/solutions/blob/main/${params.platform}/${params.solution}`
  )
  return (
    <article className="prose prose-neutral w-full dark:prose-invert">
      {useRemarkSync(markdown)}
    </article>
  )
}
