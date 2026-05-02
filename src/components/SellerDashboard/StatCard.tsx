// ===== src/components/StatCard.tsx =====

import React from "react";
import type { StatCard as StatCardType } from "../../utils/dummyData";

interface StatCardProps {
  card: StatCardType;
}

const colorMap: Record<StatCardType["color"], {
  bar: string;
  iconBg: string;
  glow: string;
}> = {
  purple: {
    bar: "from-violet-500 to-violet-400",
    iconBg: "bg-violet-500/15",
    glow: "hover:shadow-violet-500/10",
  },
  blue: {
    bar: "from-blue-500 to-blue-400",
    iconBg: "bg-blue-500/15",
    glow: "hover:shadow-blue-500/10",
  },
  green: {
    bar: "from-emerald-500 to-emerald-400",
    iconBg: "bg-emerald-500/15",
    glow: "hover:shadow-emerald-500/10",
  },
  amber: {
    bar: "from-amber-500 to-amber-400",
    iconBg: "bg-amber-500/15",
    glow: "hover:shadow-amber-500/10",
  },
};

const StatCard: React.FC<StatCardProps> = ({ card }) => {
  const colors = colorMap[card.color];
  const isUp = card.trend >= 0;

  return (
    <div
      className={`
        relative bg-gray-900 dark:bg-gray-950 border border-gray-800
        rounded-2xl p-5 overflow-hidden
        hover:border-gray-700 hover:-translate-y-0.5
        hover:shadow-xl ${colors.glow}
        transition-all duration-200 cursor-default
      `}
    >
      {/* Top gradient bar */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${colors.bar} rounded-t-2xl`} />

      {/* Icon */}
      <div className={`w-11 h-11 rounded-2xl ${colors.iconBg} flex items-center justify-center text-xl mb-4`}>
        {card.icon}
      </div>

      {/* Label */}
      <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
        {card.label}
      </p>

      {/* Value */}
      <p className="text-2xl font-bold text-white mb-3 tracking-tight">
        {card.value}
      </p>

      {/* Trend */}
      <div className="flex items-center gap-1.5">
        <span
          className={`flex items-center gap-1 text-xs font-semibold ${
            isUp ? "text-emerald-400" : "text-red-400"
          }`}
        >
          <svg
            width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            className={isUp ? "" : "rotate-180"}
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          {Math.abs(card.trend)}%
        </span>
        <span className="text-xs text-gray-600">vs last month</span>
      </div>

      {/* Decorative circle */}
      <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${colors.bar} opacity-5`} />
    </div>
  );
};

export default StatCard;