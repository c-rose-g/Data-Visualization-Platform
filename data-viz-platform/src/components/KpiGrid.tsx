import { useVariablesStore } from "../store/useVariableStore"
import type { KpiCard } from "../store/useVariableStore"

export default function KpiGrid() {
  const kpis = useVariablesStore((card) => card.kpis)

  return (
  <div className="grid grid-cols-2 gap-7">
      {kpis.map((card: KpiCard) => (
        <div key={card.id} className="w-[241px] h-[215px] bg-[#222324] border border-[#424242] rounded-[5px] shadow-[0_0_4px_rgba(0,0,0,0.25)] flex flex-col justify-between">
          <div>
            <h4 className="font-semibold text-white">{card.title}</h4>
            <p className="text-sm text-[#AAA] mt-1">{card.description}</p>
            <div className="mt-3 text-2xl font-bold text-white">{card.value}</div>
            </div>
        </div>
      ))}
    </div>
  )
}
