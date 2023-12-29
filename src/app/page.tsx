export default function Page() {
  return (
    <main className="flex-1 flex flex-col gap-4 px-2">
      <section className="text-center">
        <h1>Hello, friend.</h1>
        <p>I{"'"}m a developer and cybersecurity enthusiast.</p>
      </section>
      <section className="bg-zinc-700 rounded-xl">
        <h3 className="text-center mt-auto p-2">My Work</h3>
        <nav>
          <menu className="list-none grid grid-cols-2 grid-flow-col bg-zinc-500 p-1 divide-x text-center">
            <li className="border-b-2 border-purple-300 mx-6 text-purple-100">
              Projects
            </li>
            <li>Write-Ups</li>
          </menu>
        </nav>
        <section className="rounded-xl pt-1 pb-2 flex flex-col gap-1">
          <div className="bg-zinc-600 p-1">
            <article>
              <h1 className="border-b">API do Portal do Estudante</h1>
              <p>
                Projeto Final de Curso desenvolvido para o curso Técnico em
                Informática do IFPR Jacarezinho
              </p>
            </article>
          </div>
          <div className="bg-zinc-600 p-1">
            <article>
              <h1 className="border-b">Event4You</h1>
              <p>
                Desenvolvimento de aplicação mobile para realização de check-in
                dos participantes dos eventos GeniusCon e Ficafé
              </p>
            </article>
          </div>
        </section>
      </section>
    </main>
  )
}
