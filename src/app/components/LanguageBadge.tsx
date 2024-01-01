import { Language } from '@/types/Language'
import Image from 'next/image'

interface LanguageBadgeProps {
  language: Language
}

function getSrc(language: Language) {
  switch (language) {
    case 'HTML':
      return 'https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white'
    case 'JavaScript':
      return 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white'
    case 'Python':
      return 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white'
    case 'TypeScript':
      return 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'
  }
}

export default function LanguageBadge({ language }: LanguageBadgeProps) {
  return <Image src={getSrc(language)} alt={language} className="h-fit" />
}
