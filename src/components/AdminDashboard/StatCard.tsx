import React from "react";

// ─── Color maps ────────────────────────────────────────────────────────────

const colorMap: Record<string, { icon: string; bar: string; spark: string }> = {
  violet: {
    icon: "bg-violet-500/15 text-violet-400",
    bar: "from-violet-500 to-blue-500",
    spark: "#7c6df4",
  },
  cyan: {
    icon: "bg-cyan-500/15 text-cyan-400",
    bar: "from-cyan-400 to-blue-500",
    spark: "#38bdf8",
  },
  emerald: {
    icon: "bg-emerald-500/15 text-emerald-400",
    bar: "from-emerald-400 to-cyan-400",
    spark: "#22d3a0",
  },
  rose: {
    icon: "bg-rose-500/15 text-rose-400",
    bar: "from-rose-500 to-amber-400",
    spark: "#f7596b",
  },
};

// ─── Sparkline ─────────────────────────────────────────────────────────────

const Sparkline: React.FC<{ data: number[]; color: string }> = ({
  data,
  color,
}) => {
  const id = `spark-${Math.random().toString(36).slice(2)}`;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const w = 120;
  const h = 32;

  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / (max - min)) * (h - 4) - 2;
      return `${x},${y}`;
    })
    .join(" ");

  const polyPoints = `0,${h} ${points} ${w},${h}`;

  return (
    <svg
      width="100%"
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className="mt-2"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.3} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon points={polyPoints} fill={`url(#${id})`} />
    </svg>
  );
};

// ─── StatCard ──────────────────────────────────────────────────────────────

const StatCard: React.FC<{ card: any }> = ({ card }) => {
  const colors = colorMap[card.color] ?? colorMap.violet;

  return (
    <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-4 overflow-hidden hover:border-gray-700 transition-colors">
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="text-xs font-medium text-gray-400">{card.label}</div>
          <div className="text-2xl font-bold tracking-tight mt-1 text-white">
            {card.value}
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold">
            <span className={card.changeType === "up" ? "text-emerald-400" : "text-rose-400"}>
              {card.change}
            </span>
            <span className="text-gray-500 font-normal">{card.changeLabel}</span>
          </div>
        </div>
        <div
          className={`w-9 h-9 rounded-[10px] flex items-center justify-center text-base flex-shrink-0 ${colors.icon}`}
        >
          {card.icon}
        </div>
      </div>

      {/* Sparkline */}
      <Sparkline data={card.sparkData} color={colors.spark} />

      {/* Bottom gradient bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.bar}`}
      />
    </div>
  );
};

export default StatCard;
