import { Rowdies } from 'next/font/google'

const rowdies = Rowdies({
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
  weight: '400',
})

export default function Header() {
  return (
    <header
      className={`bg-purple-950 px-2 py-4 text-center text-4xl font-bold ${rowdies.className} text-white`}
    >
      <h1>sim0wn</h1>
    </header>
  )
}
