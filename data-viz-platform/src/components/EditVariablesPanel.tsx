import {useState, useMemo} from 'react'
import {useVariablesStore} from '../store/useVariableStore'
import type { Variable } from "../store/useVariableStore"
import XIcon from "../components/XIcon"
import SearchIcon from "./SearchIcon"

type Props =  {
  isOpen: boolean
  onClose(): void
}


export default function EditVariablesPanel({isOpen, onClose}: Props) {

  const itemsVariables = useVariablesStore(s => s.items)
  const toggle = useVariablesStore(s => s.toggle)
  const [search, setSearch] = useState('')
  const [selectedVariable, setSelectedVariable] = useState<Variable | null>(null)

  // category
  const categories = useMemo(() => {
    const map: Record<string, Variable[]> = {}
    itemsVariables.forEach(x => {
      if (!map[x.category]) map[x.category] = []
      map[x.category].push(x)
    })
    return map
  }, [itemsVariables])

  // filtering for search
  const filtered = useMemo(() => {
    if (!search) return categories
    const out: Record<string, Variable[]> = {}
    Object.entries(categories).forEach(([cat, vars]) => {
      const m = vars.filter(v =>
        v.name.toLowerCase().includes(search.toLowerCase())
      )
      if (m.length) out[cat] = m
    })
    return out
  }, [search, categories])

  return (
    <div className={`fixed inset-0 z-50 pointer-events-none`} aria-hidden={!isOpen}>
      <div
        onClick={onClose}
        className={`
          absolute inset-0 bg-black bg-opacity-60 transition-opacity
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}
        `}
      />

      {/* slide-over */}
      <aside
        onClick={e => e.stopPropagation()}
        className={`
          absolute top-0 right-0 h-full w-[440px]
          bg-[#0E0D0D] border-l border-[#5A5A5A] shadow-xl
          transform transition-transform duration-300 ease-in-out
          pointer-events-auto overflow-hidden flex flex-col
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-[#5A5A5A]">
          <h2 className="text-white text-xl font-semibold">Edit Variables</h2>
          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-gray-700"
            aria-label="Close panel"
          >
            <XIcon className="h-5 w-5 text-white" />
          </button>
        </header>

        {/* search + actions */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-[#5A5A5A]">
          <div className="relative ">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full pl-10 pr-3 py-2 bg-[#1A191A] border border-[#424242] rounded focus:outline-none focus:ring-2 focus:ring-lime-500 text-white text-sm placeholder-gray-500"
            />
          </div>
          <button
          type="button"
          className="flex items-center gap-1 px-3 py-2 bg-[#272627] text-white text-sm rounded hover:bg-[#323132]">Autofill
          </button>
          <button
          type="button" className="flex items-center gap-1 px-3 py-2 bg-lime-600 text-black text-sm rounded hover:bg-lime-500">Rerun
          </button>
        </div>

        {/* body */}
        <div className="flex-1 overflow-auto px-6 py-4 space-y-6">
          {Object.entries(filtered).map(([cat, vars]) => (
            <section key={cat}>
              <h3 className="text-gray-300 font-medium mb-2">{cat}</h3>
              <ul className="flex flex-wrap gap-2">
                {vars.map(v => (<li key={v.id}>
                  <button type="button" onClick={() => { toggle(v.id); setSelectedVariable(v) }}
                      className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-full border transition
                        ${v.active ? 'bg-lime-600 border-lime-600 text-black': 'bg-transparent border-[#424242] text-gray-400 hover:border-lime-500 hover:text-white'}`}
                    >
                      {v.name}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* detail box for selected variable */}
          {selectedVariable && (
            <div className="bg-[#1A191A] border border-[#424242] rounded p-4 text-sm text-gray-300">
              <h4 className="text-white font-semibold mb-1">{selectedVariable.name}</h4>
              <p>{selectedVariable.description || 'No description available.'}</p>
            </div>
          )}

          {/* accordions */}
          <details className="group border-t border-[#5A5A5A] pt-4">
            <summary className="flex justify-between items-center cursor-pointer text-white text-md font-medium">
              Primary Variables
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <div className="mt-3 space-y-2">
              {/* map over primary vars here */}
              {itemsVariables
                .filter(v => v.isPrimary)
                .map(v => (
                  <label key={v.id} className="flex items-center gap-2 text-gray-400">
                    <input
                      type="checkbox"
                      checked={v.active}
                      onChange={() => toggle(v.id)}
                      className="accent-lime-500"
                    />
                    {v.name}
                  </label>
                ))}
            </div>
          </details>

          <details className="group border-t border-[#5A5A5A] pt-4">
            <summary className="flex justify-between items-center cursor-pointer text-white text-md font-medium">
              Secondary Variables
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <div className="mt-3 space-y-2">
              {itemsVariables
                .filter(v => !v.isPrimary)
                .map(v => (
                  <label key={v.id} className="flex items-center gap-2 text-gray-400">
                    <input
                      type="checkbox"
                      checked={v.active}
                      onChange={() => toggle(v.id)}
                      className="accent-lime-500"
                    />
                    {v.name}
                  </label>
                ))}
            </div>
          </details>
        </div>
      </aside>
    </div>
  )
}
