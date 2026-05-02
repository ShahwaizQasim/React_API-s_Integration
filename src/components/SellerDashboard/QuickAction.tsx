// ===== src/components/QuickActions.tsx =====

import React from "react";

interface Action {
  label: string;
  icon: React.ReactNode;
  variant: "primary" | "secondary";
  description: string;
}

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const BoxIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const InventoryIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="2" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="13" y2="16" />
  </svg>
);

const ExportIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const CouponIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const BroadcastIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14" />
  </svg>
);

const actions: Action[] = [
  {
    label: "Add New Product",
    icon: <PlusIcon />,
    variant: "primary",
    description: "List a new item",
  },
  {
    label: "View All Orders",
    icon: <BoxIcon />,
    variant: "secondary",
    description: "Manage orders",
  },
  {
    label: "Manage Inventory",
    icon: <InventoryIcon />,
    variant: "secondary",
    description: "Stock control",
  },
  {
    label: "Export Report",
    icon: <ExportIcon />,
    variant: "secondary",
    description: "Download CSV",
  },
  {
    label: "Create Coupon",
    icon: <CouponIcon />,
    variant: "secondary",
    description: "Promo codes",
  },
  {
    label: "Broadcast",
    icon: <BroadcastIcon />,
    variant: "secondary",
    description: "Notify customers",
  },
];

const QuickActions: React.FC = () => {
  return (
    <div className="bg-gray-900 dark:bg-gray-950 border border-gray-800 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-white">Quick Actions</h2>
        <span className="text-[10px] bg-violet-500/15 text-violet-400 border border-violet-500/20 px-2 py-0.5 rounded-full font-semibold">
          {actions.length} actions
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {actions.map((action) => (
          <button
            key={action.label}
            className={`
              flex flex-col items-start gap-2 p-3.5 rounded-xl text-left
              transition-all duration-150 group border
              ${
                action.variant === "primary"
                  ? "bg-gradient-to-br from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white border-transparent shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:-translate-y-0.5"
                  : "bg-gray-800/60 hover:bg-gray-800 text-gray-400 hover:text-gray-200 border-gray-700/60 hover:border-gray-600 hover:-translate-y-0.5"
              }
            `}
          >
            <span
              className={`${action.variant === "primary" ? "text-white/90" : "text-gray-400 group-hover:text-violet-400"} transition-colors`}
            >
              {action.icon}
            </span>
            <div>
              <p
                className={`text-xs font-semibold leading-none ${action.variant === "primary" ? "text-white" : "text-gray-300"}`}
              >
                {action.label}
              </p>
              <p
                className={`text-[10px] mt-1 ${action.variant === "primary" ? "text-white/60" : "text-gray-600"}`}
              >
                {action.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
