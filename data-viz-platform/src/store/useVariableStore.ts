import { create } from 'zustand'

export type Variable = {
  id: string
  name: string
  description: string
  category: string
  active: boolean
  isPrimary: boolean
}

interface VariablesState {
  items: Variable[]
  toggle: (id: string) => void
  setAll: (vars: Variable[]) => void
}

export const useVariablesStore = create<VariablesState>((set) => ({

  items: [
     // --- Category 1 ---
    {
      id: 'cat1-var1',
      name: 'Carbon 1',
      description:
        'How carbon distribution affects total emissions over time.',
      category: 'Variable Category 1',
      active: false,
      isPrimary: true,
    },
    {
      id: 'cat1-var2',
      name: 'CO2 Distribution',
      description:
        'Breakdown of CO₂ output by source and region.',
      category: 'Variable Category 1',
      active: true,
      isPrimary: true,
    },
    {
      id: 'cat1-var3',
      name: 'Fleet Sizing',
      description:
        'Number of vehicles required to meet demand curves.',
      category: 'Variable Category 1',
      active: false,
      isPrimary: false,
    },

    // --- Category 2 ---
    {
      id: 'cat2-var1',
      name: 'Parking Rate',
      description:
        'Cost per hour of parking in each zone.',
      category: 'Variable Category 2',
      active: false,
      isPrimary: false,
    },
    {
      id: 'cat2-var2',
      name: 'Border Rate',
      description:
        'Rate of cross-zone utilization by fleet vehicles.',
      category: 'Variable Category 2',
      active: true,
      isPrimary: false,
    },
    {
      id: 'cat2-var3',
      name: 'Request Rate',
      description:
        'Average ride/hail request rate per hour.',
      category: 'Variable Category 2',
      active: false,
      isPrimary: false,
    },

    // --- Category 3 ---
    {
      id: 'cat3-var1',
      name: 'Variable 1',
      description:
        'Placeholder description for Variable 1.',
      category: 'Variable Category 3',
      active: false,
      isPrimary: false,
    },
    {
      id: 'cat3-var2',
      name: 'Variable 2',
      description:
        'Placeholder description for Variable 2.',
      category: 'Variable Category 3',
      active: false,
      isPrimary: false,
    },
    {
      id: 'cat3-var3',
      name: 'Variable 3',
      description:
        'Placeholder description for Variable 3.',
      category: 'Variable Category 3',
      active: true,
      isPrimary: false,
    },
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
