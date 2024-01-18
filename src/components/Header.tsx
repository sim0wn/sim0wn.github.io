import { Rowdies } from 'next/font/google'
import ThemeSwitcher from './ThemeSwitcher'

const rowdies = Rowdies({
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
  weight: '400',
})

export default function Header() {
  return (
    <header
      className={`flex flex-row items-center justify-center bg-purple-950 p-4 px-2 text-center text-4xl font-bold ${rowdies.className} text-white`}
    >
      <span className="flex-1"></span>
      <h1 className="mx-auto">sim0wn</h1>
      <div className="flex flex-1 place-content-end">
        <ThemeSwitcher />
      </div>
    </header>
  )
}
