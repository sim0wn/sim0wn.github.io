import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { ScrollArea } from './ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Badge } from './ui/badge'
import { getRepositories } from '@/lib/getRepositories'

export default async function WorkSection() {
  const repositories = (await getRepositories()).data
  return (
    <Tabs defaultValue="repos" className="flex w-full flex-col">
      <TabsList className="flex gap-2 bg-neutral-400 *:bg-neutral-300 *:dark:bg-neutral-500 *:dark:text-neutral-200">
        <TabsTrigger value="write-ups">Write-Ups</TabsTrigger>
        <TabsTrigger value="repos">Repositórios</TabsTrigger>
      </TabsList>
      <ScrollArea>
        <TabsContent value="repos" className="flex flex-col gap-2">
          {repositories.map((repository) => {
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
              <Card
                key={`${id}`}
                className="bg-neutral-200 dark:bg-neutral-700"
              >
                <CardHeader>
                  <CardTitle>
                    <Link
                      href={homepage ? homepage : isPrivate ? '#' : html_url}
                    >
                      {full_name}
                    </Link>
                  </CardTitle>
                  {language && (
                    <CardDescription className="flex gap-2">
                      <Badge>{language}</Badge>
                      {pushed_at && (
                        <Badge>
                          {new Date(pushed_at ?? '').toLocaleDateString(
                            'pt-br'
                          )}
                        </Badge>
                      )}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>{description}</CardContent>
                {topics && (
                  <CardFooter className="flex flex-wrap gap-1">
                    {topics.map((topic, index) => (
                      <Badge
                        variant="outline"
                        className="bg-neutral-300 dark:bg-neutral-700"
                        key={`${id}-topic-${index}`}
                      >
                        {topic}
                      </Badge>
                    ))}
                  </CardFooter>
                )}
              </Card>
            )
          })}
        </TabsContent>
      </ScrollArea>
    </Tabs>
  )
}
