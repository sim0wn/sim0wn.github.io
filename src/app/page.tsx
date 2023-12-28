export default function Page() {
  return (
    <main className="flex-1 flex flex-col gap-4 px-2">
      <section className="text-center">
        <h1>Hello, friend.</h1>
        <p>I{"'"}m a developer and cybersecurity enthusiast.</p>
      </section>
      <section className="bg-zinc-700 rounded-xl">
        <h3 className="text-center mt-auto p-1">My Work</h3>
        <nav>
          <menu className="list-none grid grid-cols-2 grid-flow-col bg-zinc-500 p-1 divide-x text-center">
            <li>Projects</li>
            <li>Write-Ups</li>
          </menu>
        </nav>
        <div className="p-1.5 text-center">Work in progress...</div>
      </section>
    </main>
  )
}
