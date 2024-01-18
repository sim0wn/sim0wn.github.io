import Main from '../components/Main'
import Icon from './icon.png'
import Image from 'next/image'
import { Social } from '../components/Social'
import LattesIcon from '/public/lattes.svg'
import HackTheBoxIcon from '/public/hackthebox.svg'
import GithubIcon from '/public/github.svg'
import TryHackMeIcon from '/public/tryhackme.svg'
import LinkedInIcon from '/public/linkedin.svg'
import EmailIcon from '/public/email.svg'
import WorkSection from '@/components/WorkSection'
import BackToTop from '@/components/BackToTop'

export default async function Page() {
  return (
    <Main>
      {/* Greeting */}
      <section className="mx-auto my-4 flex flex-col gap-8 text-center md:my-12">
        <section className="flex flex-col gap-4">
          <div className="z-10 mx-auto grid place-content-center rounded-full bg-gradient-to-bl from-purple-900 from-20% via-purple-700 to-purple-600 p-1 text-center">
            <Image
              src={Icon}
              alt="Imagem do autor"
              width={Icon.width}
              height={Icon.height}
              className="h-72 w-72 rounded-full object-cover"
            />
          </div>
          <section className="mx-auto flex gap-1.5">
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
          </section>
        </section>
        <h3 className="text-balance font-sans text-lg">
          Olá, amigo. Seja bem vindo!
        </h3>
        <p className="self-center text-center font-sans text-lg lg:w-3/6">
          Sou um entusiasta em cibersegurança e desenvolvedor por hobby. Já
          deve ter se dado conta de que sou péssimo com front-end, porém tenho
          algumas outras habilidades que você pode conferir mais abaixo.
        </p>
      </section>
      {/*  */}
      <section className="flex max-h-[700px] w-full">
        <WorkSection />
      </section>
      <BackToTop />
    </Main>
  )
}
