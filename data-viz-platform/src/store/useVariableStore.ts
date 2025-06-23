import { create } from 'zustand'

export type Variable = {
  id: string
  name: string
  active: boolean
}

interface VariablesState {
  items: Variable[]
  toggle: (id: string) => void
  setAll: (vars: Variable[]) => void
}

export const useVariablesStore = create<VariablesState>((set) => ({

  items: [
    { id: 'zones', name: 'Zones',       active: true  },
    { id: 'poles', name: 'Poles',       active: true  },
    { id: 'demand',name: 'Demand',      active: false },
    { id: 'profit',name: 'Profit',      active: false },
  ],

  // flip the active flag
  toggle: (id) =>
    set((state) => ({
      items: state.items.map((v) =>
        v.id === id ? { ...v, active: !v.active } : v
      ),
    })),

  // replaces entire list
  setAll: (vars) => set({ items: vars }),
}))
