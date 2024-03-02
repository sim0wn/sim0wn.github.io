import { Badge } from '@/components/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/card'
import Container from '@/components/container'
import { getRepositories } from '@/lib/getRepositories'
import { Metadata } from 'next'
import { Anchor } from '../../components/anchor'
import PrivateRepositoryIcon from '/public/icons/private_repository.svg'

export const metadata: Metadata = {
  title: 'Repositórios',
}

export default async function Page() {
  return (
    <Container title="Repositórios">
      <section className="flex flex-col gap-1">
        {(await getRepositories()).data.map((repository) => {
          const {
            description,
            full_name,
            homepage,
            html_url,
            id,
            language,
            private: isPrivate,
            pushed_at,
            topics,
          } = repository
          return (
            <Card key={id}>
              <CardHeader>
                <CardTitle>
                  <Anchor
                    href={homepage ? homepage : isPrivate ? '#' : html_url}
                  >
                    {isPrivate && <PrivateRepositoryIcon />}
                    {full_name}
                  </Anchor>
                </CardTitle>
                {language && (
                  <CardDescription className="flex gap-2">
                    <Badge>{language}</Badge>
                    {pushed_at && (
                      <Badge>{new Date(pushed_at ?? '').toDateString()}</Badge>
                    )}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>{description}</CardContent>
              {topics && (
                <CardFooter className="flex flex-wrap gap-1">
                  {topics.map((topic, index) => (
                    <Badge variant="outline" key={`${id}-topic-${index}`}>
                      {topic}
                    </Badge>
                  ))}
                </CardFooter>
              )}
            </Card>
          )
        })}
      </section>
    </Container>
  )
}
