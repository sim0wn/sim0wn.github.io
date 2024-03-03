import Container from '@/components/container'
import { getPlatforms } from '@/lib/getPlatforms'
import { ReactNode } from 'react'

export async function generateStaticParams() {
  const platforms = await getPlatforms()
  return platforms.map(({ name }: { name: string }) => ({
    platform: name,
  }))
}

export default async function Layout({
  children,
  params,
}: {
  params: { platform: string }
  children: ReactNode
}) {
  return <Container title={params.platform}>{children}</Container>
}
