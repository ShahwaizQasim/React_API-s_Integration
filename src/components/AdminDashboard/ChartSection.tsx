import React, { useState } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { salesData, ordersData } from "../../utils/dummyData";

// ─── Custom Tooltip ────────────────────────────────────────────────────────

interface TooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 shadow-2xl">
      <p className="text-[11px] font-semibold text-gray-400 mb-2">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} style={{ color: entry.color }} className="text-xs font-semibold">
          {entry.name}:{" "}
          <span className="text-white">
            {entry.name === "Revenue"
              ? "$" + entry.value.toLocaleString()
              : entry.value.toLocaleString()}
          </span>
        </p>
      ))}
    </div>
  );
};

// ─── Filter Toggle ─────────────────────────────────────────────────────────

type Filter = "7D" | "1M" | "1Y";

const FilterGroup: React.FC<{
  value: Filter;
  onChange: (f: Filter) => void;
}> = ({ value, onChange }) => (
  <div className="flex bg-gray-950 border border-gray-800 rounded-[10px] p-0.5 gap-0.5">
    {(["7D", "1M", "1Y"] as Filter[]).map((f) => (
      <button
        key={f}
        onClick={() => onChange(f)}
        className={`text-[11px] font-semibold px-2.5 py-1 rounded-[8px] transition-all cursor-pointer
          ${value === f
            ? "bg-gray-800 text-white border border-gray-700"
            : "text-gray-500 hover:text-gray-300 bg-transparent border-none"
          }`}
      >
        {f}
      </button>
    ))}
  </div>
);

// ─── ChartSection ──────────────────────────────────────────────────────────

const ChartSection: React.FC = () => {
  const [filter, setFilter] = useState<Filter>("1M");

  // Slice data based on filter (visual demo)
  const chartData =
    filter === "7D"
      ? salesData.slice(-3)
      : filter === "1M"
      ? salesData.slice(-6)
      : salesData;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 gap-3 mb-3">
      {/* Area Chart — Revenue + Users */}
      <div className="xl:col-span-3 bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-colors">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-sm font-bold text-white">Revenue & Users Growth</h2>
            <p className="text-xs text-gray-500 mt-0.5">Monthly performance — 2025–2026</p>
          </div>
          <FilterGroup value={filter} onChange={setFilter} />
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-violet-400 rounded-full" />
            <span className="text-[11px] text-gray-500">Revenue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-cyan-400 rounded-full" />
            <span className="text-[11px] text-gray-500">Users</span>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={210}>
          <AreaChart data={chartData} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7c6df4" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#7c6df4" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="userGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
            <XAxis
              dataKey="m"
              tick={{ fill: "#4b5563", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#4b5563", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => "$" + Math.round(v / 1000) + "k"}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="rev"
              name="Revenue"
              stroke="#7c6df4"
              strokeWidth={2.5}
              fill="url(#revGrad)"
              dot={false}
              activeDot={{ r: 4, fill: "#a593ff", strokeWidth: 0 }}
            />
            <Area
              type="monotone"
              dataKey="users"
              name="Users"
              stroke="#38bdf8"
              strokeWidth={2}
              fill="url(#userGrad)"
              dot={false}
              activeDot={{ r: 4, fill: "#7dd3fc", strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart — Orders by Month */}
      <div className="xl:col-span-2 bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-colors">
        <h2 className="text-sm font-bold text-white">Orders by Month</h2>
        <p className="text-xs text-gray-500 mt-0.5 mb-4">H2 2025 volume</p>

        <ResponsiveContainer width="100%" height={210}>
          <BarChart data={ordersData} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4f8ef7" stopOpacity={1} />
                <stop offset="100%" stopColor="#7c6df4" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
            <XAxis
              dataKey="m"
              tick={{ fill: "#4b5563", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#4b5563", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="orders"
              name="Orders"
              radius={[6, 6, 0, 0]}
              fill="url(#barGrad)"
              maxBarSize={36}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;
