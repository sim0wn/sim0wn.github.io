import { getRepositories } from '@/libs/getRepositories'
import { Language } from '@/types/Language'
import Link from 'next/link'
import LanguageBadge from './components/LanguageBadge'
import Main from './components/Main'
import Terminal from './components/Terminal'

export default async function Page() {
  const repositories = (await getRepositories()).data
  return (
    <Main>
      {/* Greeting */}
      <section className="text-center">
        <h1>Hello, friend.</h1>
        <p>I{"'"}m a developer and cybersecurity enthusiast.</p>
      </section>
      {/* Terminal */}
      <Terminal title="My Work">
        <Terminal.Navbar>
          <Terminal.Tab>Projects</Terminal.Tab>
          <Terminal.Tab>Write-Ups</Terminal.Tab>
        </Terminal.Navbar>
        <Terminal.TabContent>
          {repositories.map((repository) => {
            console.log(repository)
            const {
              full_name,
              homepage,
              html_url,
              id,
              language,
              pushed_at,
              topics,
            } = repository
            return (
              <div className="bg-zinc-500 even:bg-zinc-600" key={id}>
                <article className="px-1 py-1 text-lg">
                  <header className="flex items-center gap-2">
                    <Link
                      href={repository.private ? homepage || '#' : html_url}
                      className="p-0 underline underline-offset-4 hover:text-purple-300 active:text-purple-300"
                    >
                      {full_name}
                    </Link>
                    <section className="flex flex-1 justify-end gap-2">
                      {language && (
                        <LanguageBadge language={language as Language} />
                      )}
                      {pushed_at && new Date(pushed_at).toLocaleDateString()}
                    </section>
                  </header>
                  <section>
                    <p>{repository.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {topics?.map((topic, index) => (
                        <span
                          key={`${id}-${index}`}
                          className="border-b-4 border-purple-800 bg-purple-500 px-1 pt-0.5"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  </section>
                </article>
              </div>
            )
          })}
        </Terminal.TabContent>
      </Terminal>
    </Main>
  )
}
