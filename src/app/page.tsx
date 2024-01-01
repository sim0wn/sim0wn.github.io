import { getRepositories } from '@/libs/getRepositories'
import { octokit } from '@/utils/octokit'
import Link from 'next/link'
import Badge from './components/LanguageBadge'
import Image from 'next/image'
import LanguageBadge from './components/LanguageBadge'
import { Language } from '@/types/Language'
import Terminal from './components/Terminal'
import Main from './components/Main'

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
              id,
              homepage,
              language,
              html_url,
              pushed_at,
              topics,
            } = repository
            return (
              <div className="bg-zinc-500 even:bg-zinc-600" key={id}>
                <article className="px-1 py-1 text-lg">
                  <header className="flex items-center gap-2">
                    <Link
                      href={repository.private ? homepage || '#' : html_url}
                      className="underline underline-offset-4 hover:text-purple-300 active:text-purple-300 p-0"
                    >
                      {full_name}
                    </Link>
                    <section className="flex justify-end flex-1 gap-2">
                      {language && (
                        <LanguageBadge language={language as Language} />
                      )}
                      {pushed_at && new Date(pushed_at).toLocaleDateString()}
                    </section>
                  </header>
                  <section>
                    <p>{repository.description}</p>
                    <div className="flex gap-1 flex-wrap">
                      {topics?.map((topic) => (
                        <span className="border-b-4 bg-purple-500 border-purple-800 px-1 pt-0.5">
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
