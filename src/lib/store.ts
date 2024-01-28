import { SidebarState } from '@/types/sidebarState'
import { create } from 'zustand'

type SidebarStore = {
  state: SidebarState
  toggle: () => void
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  state: 'collapsed',
  toggle: () =>
    set((state) => ({
      state: state.state === 'collapsed' ? 'open' : 'collapsed',
    })),
}))
