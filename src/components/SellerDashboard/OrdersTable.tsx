// ===== src/components/OrdersTable.tsx =====

import React, { useState } from "react";
import type { Order } from "../../utils/dummyData";

interface OrdersTableProps {
  orders: Order[];
}

const statusConfig: Record<Order["status"], { label: string; classes: string; dot: string }> = {
  Delivered: {
    label: "Delivered",
    classes: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    dot: "bg-emerald-400",
  },
  Shipped: {
    label: "Shipped",
    classes: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    dot: "bg-blue-400",
  },
  Pending: {
    label: "Pending",
    classes: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    dot: "bg-amber-400",
  },
};

const avatarColors = [
  "from-violet-500 to-blue-500",
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-pink-500 to-rose-500",
  "from-purple-500 to-pink-500",
  "from-indigo-500 to-violet-500",
];

const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => {
  const [sortField, setSortField] = useState<keyof Order | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const handleSort = (field: keyof Order) => {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  const sorted = [...orders].sort((a, b) => {
    if (!sortField) return 0;
    const av = a[sortField];
    const bv = b[sortField];
    const cmp = String(av).localeCompare(String(bv));
    return sortDir === "asc" ? cmp : -cmp;
  });

  const SortIcon = ({ field }: { field: keyof Order }) => (
    <svg
      width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round"
      className={`inline ml-1 transition-colors ${sortField === field ? "text-violet-400" : "text-gray-600"}`}
    >
      {sortField === field && sortDir === "desc"
        ? <polyline points="18 15 12 9 6 15" />
        : <polyline points="6 9 12 15 18 9" />}
    </svg>
  );

  return (
    <div className="bg-gray-900 dark:bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div>
          <h2 className="text-sm font-semibold text-white">Recent Orders</h2>
          <p className="text-xs text-gray-500 mt-0.5">{orders.length} orders this period</p>
        </div>
        <button className="text-xs font-semibold text-violet-400 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/20 px-3 py-1.5 rounded-full transition-colors">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              {(["id", "customer", "product", "amount", "status", "date"] as (keyof Order)[]).map((col) => (
                <th
                  key={col}
                  onClick={() => handleSort(col)}
                  className="text-left px-6 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-widest cursor-pointer hover:text-gray-300 transition-colors select-none whitespace-nowrap"
                >
                  {col === "id" ? "Order ID" : col.charAt(0).toUpperCase() + col.slice(1)}
                  <SortIcon field={col} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((order, i) => {
              const status = statusConfig[order.status];
              return (
                <tr
                  key={order.id}
                  className="border-b border-gray-800/60 hover:bg-gray-800/40 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-violet-400 font-mono">{order.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0`}
                      >
                        {order.avatar}
                      </div>
                      <span className="text-sm text-gray-200 whitespace-nowrap">{order.customer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-400 whitespace-nowrap">{order.product}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-white">{order.amount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${status.classes}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                      {status.label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-gray-500">{order.date}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;