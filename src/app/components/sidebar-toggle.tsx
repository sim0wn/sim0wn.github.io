'use client'

import { useSidebarStore } from '@/lib/store'
import MenuIcon from '/public/icons/menu.svg'

export default function SidebarToggle() {
  const { toggle: toggleSidebar } = useSidebarStore()
  return (
    <button
      className="flex-1 md:invisible"
      aria-label="Abrir barra lateral de navegação"
      onClick={toggleSidebar}
    >
      <MenuIcon />
    </button>
  )
}
