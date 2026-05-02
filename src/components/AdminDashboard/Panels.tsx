import React from "react";
import type { Order, Product, User, TimelineEvent, QuickAction } from "../../types/dashboard";

// ─── Status Badge ──────────────────────────────────────────────────────────

const badgeMap: Record<string, string> = {
  Completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Cancelled: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  Processing: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => (
  <span
    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${
      badgeMap[status] ?? "bg-gray-800 text-gray-400 border-gray-700"
    }`}
  >
    {status}
  </span>
);

// ─── Orders Table ──────────────────────────────────────────────────────────

export const OrdersTable: React.FC<{ orders: Order[] }> = ({ orders }: { orders: Order[] }) => (
  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-colors h-full">
    <div className="flex items-center justify-between mb-4">
      <div>
        <h2 className="text-sm font-bold text-white">Recent Orders</h2>
        <p className="text-xs text-gray-500 mt-0.5">Latest transactions</p>
      </div>
      <button className="text-xs text-gray-400 hover:text-white bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
        View all →
      </button>
    </div>
    <div className="overflow-x-auto -mx-1">
      <table className="w-full">
        <thead>
          <tr>
            {["Order ID", "Customer", "Product", "Amount", "Status"].map((h) => (
              <th
                key={h}
                className="text-left text-[11px] font-semibold text-gray-500 pb-3 pr-4 border-b border-gray-800 whitespace-nowrap px-1"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
              <td className="py-2.5 pr-4 px-1 font-mono text-[11px] text-gray-500 whitespace-nowrap">
                {order.id}
              </td>
              <td className="py-2.5 pr-4 px-1 text-[13px] text-gray-200 whitespace-nowrap">
                {order.customer}
              </td>
              <td className="py-2.5 pr-4 px-1 text-[13px] text-gray-400 whitespace-nowrap">
                {order.product}
              </td>
              <td className="py-2.5 pr-4 px-1 text-[13px] font-semibold text-white whitespace-nowrap">
                {order.amount}
              </td>
              <td className="py-2.5 px-1">
                <StatusBadge status={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// ─── Top Products ──────────────────────────────────────────────────────────

export const TopProducts: React.FC<{ products: Product[] }> = ({ products }: { products: Product[] }) => (
  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-colors h-full">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm font-bold text-white">Top Products</h2>
      <span className="text-xs text-gray-500">by revenue</span>
    </div>
    <div className="flex flex-col gap-4">
      {products.map((p, i) => (
        <div key={i}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[13px] font-medium text-gray-200">{p.name}</span>
            <span className="text-[13px] font-bold text-white">{p.revenue}</span>
          </div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] text-gray-500">{p.sales} sales</span>
            <span
              className={`text-[11px] font-semibold ${
                p.growthType === "up" ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {p.growth}
            </span>
          </div>
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${p.percent}%`, background: p.color }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Recent Users ──────────────────────────────────────────────────────────

const userBadgeMap: Record<string, string> = {
  Active: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Suspended: "bg-rose-500/10 text-rose-400 border-rose-500/20",
};

export const RecentUsers: React.FC<{ users: User[] }> = ({ users }) => (
  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-colors">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm font-bold text-white">Recent Users</h2>
      <span className="text-[11px] font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
        3 new today
      </span>
    </div>
    <div>
      {users.map((u, i) => (
        <div
          key={i}
          className={`flex items-center gap-2.5 py-2 ${
            i < users.length - 1 ? "border-b border-gray-800/60" : ""
          }`}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
            style={{ background: u.color }}
          >
            {u.initials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-medium text-gray-200 truncate">
              {u.name}
            </div>
            <div className="text-[11px] text-gray-500 truncate">
              {u.email} · {u.plan}
            </div>
          </div>
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border flex-shrink-0 ${
              userBadgeMap[u.status] ?? "bg-gray-800 text-gray-400 border-gray-700"
            }`}
          >
            {u.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

// ─── Activity Timeline ─────────────────────────────────────────────────────

export const ActivityTimeline: React.FC<{ events: TimelineEvent[] }> = ({
  events,
}) => (
  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-colors">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm font-bold text-white">Activity Timeline</h2>
      <span className="text-xs text-gray-500">recent admin actions</span>
    </div>
    <div>
      {events.map((ev, i) => (
        <div key={i} className="relative flex gap-3 pb-4">
          {/* Connector line */}
          {i < events.length - 1 && (
            <div className="absolute left-3.5 top-7 w-px bottom-0 bg-gray-800" />
          )}
          {/* Dot */}
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 relative z-10"
            style={{ background: ev.color }}
          >
            {ev.icon}
          </div>
          {/* Content */}
          <div className="flex-1 min-w-0 pt-0.5">
            <div className="text-[13px] text-gray-300 leading-snug">
              {ev.title}{" "}
              {ev.highlight && (
                <strong className="text-white font-semibold">{ev.highlight}</strong>
              )}
            </div>
            <div className="text-[11px] text-gray-600 mt-1">
              {ev.time} · {ev.by}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Quick Actions ─────────────────────────────────────────────────────────

export const QuickActionsPanel: React.FC<{ actions: QuickAction[] }> = ({
  actions,
}) => (
  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-colors mb-3">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm font-bold text-white">Quick Actions</h2>
      <span className="text-[10px] font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/25 px-2 py-0.5 rounded-full">
        Admin Panel
      </span>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
      {actions.map((action, i) => (
        <button
          key={i}
          className="flex flex-col items-center gap-2 p-3.5 bg-gray-900 border border-gray-800 rounded-xl cursor-pointer transition-all hover:border-violet-500/50 hover:bg-violet-500/5 hover:-translate-y-0.5 active:translate-y-0 group"
        >
          <div
            className="w-9 h-9 rounded-[10px] flex items-center justify-center text-base transition-transform group-hover:scale-110"
            style={{ background: action.bg, color: action.color }}
          >
            {action.icon}
          </div>
          <span className="text-[12px] font-semibold text-gray-400 group-hover:text-gray-200 transition-colors text-center leading-tight">
            {action.label}
          </span>
        </button>
      ))}
    </div>
  </div>
);
