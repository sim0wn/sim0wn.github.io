import { Social } from './Social'
import LattesIcon from '/public/lattes.svg'
import HackTheBoxIcon from '/public/hackthebox.svg'
import GithubIcon from '/public/github.svg'
import TryHackMeIcon from '/public/tryhackme.svg'
import LinkedInIcon from '/public/linkedin.svg'

export default function Footer() {
  return (
    <footer className="bg-purple-900 flex flex-row px-4 py-6 h-16 justify-center align-middle gap-3">
      <Social
        href="http://lattes.cnpq.br/4781391320784524/"
        icon={<LattesIcon />}
      />
      <Social
        href="https://app.hackthebox.com/profile/143157/"
        icon={<HackTheBoxIcon />}
      />
      <Social href="https://github.com/sim0wn/" icon={<GithubIcon />} />
      <Social
        href="https://tryhackme.com/p/sim0wn/"
        icon={<TryHackMeIcon />}
      />
      <Social
        href="https://www.linkedin.com/in/halissoncruz/"
        icon={<LinkedInIcon />}
      />
    </footer>
  )
}
