import {LineChart,Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'
import type { DataPoint } from "../data/GraphData"

// helper function for the cursor
function CustomCursor({ points }: any) {
  if (!points || !points.length) return null;

  const { x } = points[0];
  return (
    <line
      x1={x}
      y1="0"
      x2={x}
      y2="100%"
      stroke="#C9FF3B"
      strokeWidth={2}
      opacity={0.5}
    />
  );
}

// graphchart component
export default function GraphChart({data}:{data: DataPoint[]}) {

  return (
    <div className="w-[800px] h-[460px] bg-[#222324] border border-[#424242] rounded p-4 shadow-[0_0_4px_rgba(0,0,0,0.25)]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 0, right: 16, left: 0, bottom: 0 }}
        >
          {/* only vertical grid lines */}
          <CartesianGrid vertical horizontal={false} stroke="#424242" />

          {/* Y axis formatted as $XX0K */}
          <YAxis
            tickFormatter={(v) => `$${v}0K`}
            axisLine={false}
            tickLine={false}
            fontSize={12}
            stroke="#AAAAAA"
          />

          {/* X axis with month labels */}
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            fontSize={12}
            stroke="#AAAAAA"
            padding={{ left: 12, right: 12 }}
          />

          {/* Tooltip + hover cursor line */}
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F1F1F',
              border: '1px solid #333',
              borderRadius: 4,
            }}
            labelStyle={{ color: '#AAA', fontSize: 12 }}
            itemStyle={{ color: '#FFF' }}
            formatter={(val: number) => [`$${val}0K`, '']}
            cursor={<CustomCursor />}
          />

          {/* The neon line + dots */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#C9FF3B"
            strokeWidth={2}
            dot={{ r: 4, fill: '#C9FF3B', stroke: 'none' }}
            activeDot={{ r: 6, fill: '#FFF', stroke: '#C9FF3B', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
