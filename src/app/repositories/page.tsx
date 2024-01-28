import { Badge } from '@/components/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/card'
import { getRepositories } from '@/lib/getRepositories'
import Link from 'next/link'
import PrivateRepositoryIcon from '/public/private_repository.svg'

export default async function Page() {
  return (await getRepositories()).data.map((repository) => {
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
            <Link
              href={homepage ? homepage : isPrivate ? '#' : html_url}
              className="flex gap-2"
            >
              {isPrivate && <PrivateRepositoryIcon />}
              {full_name}
            </Link>
          </CardTitle>
          {language && (
            <CardDescription className="flex gap-2">
              <Badge>{language}</Badge>
              {pushed_at && (
                <Badge>
                  {new Date(pushed_at ?? '').toLocaleDateString('pt-br')}
                </Badge>
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
  })
}
