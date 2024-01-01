import { Social } from './Social'
import LattesIcon from '/public/lattes.svg'
import HackTheBoxIcon from '/public/hackthebox.svg'
import GithubIcon from '/public/github.svg'
import TryHackMeIcon from '/public/tryhackme.svg'
import LinkedInIcon from '/public/linkedin.svg'
import EmailIcon from '/public/email.svg'

export default function Footer() {
  return (
    <footer className="flex h-16 flex-row justify-center gap-3 bg-purple-900 px-4 py-6 align-middle">
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
      <Social href="mailto:root@sim0wn.com" icon={<EmailIcon />} />
    </footer>
  )
}
