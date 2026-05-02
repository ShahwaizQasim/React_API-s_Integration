// ===== src/components/Sidebar.tsx =====

import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  collapsed: boolean;
  activeNav: number;
  onNavChange: (index: number) => void;
  navItems?:any[];
}

interface NavItemProps {
  item: any;
  active: boolean;
  collapsed: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}

type IconName =
  | "grid"
  | "package"
  | "tag"
  | "users"
  | "bar-chart"
  | "star"
  | "settings";

const icons: Record<IconName, React.ReactNode> = {
  grid: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  package: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  tag: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  ),
  users: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  "bar-chart": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  star: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  settings: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
};

const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  activeNav,
  onNavChange,
  navItems
}) => {
  const mainNav = navItems?.slice(0, 5);
  const accountNav = navItems?.slice(5);

  return (
    <aside
      className={`
        flex flex-col h-screen bg-gray-900 dark:bg-gray-950 border-r border-gray-800
        transition-all duration-300 ease-in-out flex-shrink-0 z-20
        ${collapsed ? "w-16" : "w-60"}
      `}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-gray-800 flex-shrink-0">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg shadow-violet-500/25">
          B
        </div>
        <span
          className={`font-bold text-white text-base tracking-tight whitespace-nowrap transition-all duration-200 ${
            collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
          }`}
        >
          Bazzario
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 scrollbar-none flex flex-col gap-3">
        {navItems?.map((item, i) => (
          <NavItem
            key={item.label}
            item={item}
            active={activeNav === i}
            collapsed={collapsed}
            onClick={() => onNavChange(i)}
            icon={icons[item.icon as IconName]}
          />
        ))}

        {collapsed && <div className="my-2 border-t border-gray-800 mx-2" />}
        {accountNav?.map((item, i) => (
          <NavItem
            key={item.label}
            item={item}
            active={activeNav === i + 5}
            collapsed={collapsed}
            onClick={() => onNavChange(i + 5)}
            icon={icons[item.icon as IconName]}
          />
        ))}
      </nav>

      {/* Footer */}
      <div className="px-2 py-3 border-t border-gray-800 flex-shrink-0">
        <div
          className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          {!collapsed && (
            <span className="text-xs font-medium text-emerald-400 whitespace-nowrap">
              All Systems Live
            </span>
          )}
        </div>
      </div>
    </aside>
  );
};

const NavItem: React.FC<NavItemProps> = ({ item, collapsed, icon }) => (
  <NavLink
    to={item.path}
    end
    title={collapsed ? item.label : undefined}
    className={({ isActive }) => `
    w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150 group relative
    ${
      isActive
        ? "bg-gradient-to-r from-violet-500/20 to-blue-500/10 border border-violet-500/30 text-violet-400"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-transparent"
    }
    ${collapsed ? "justify-center" : ""}
  `}
  >
    <span className="flex-shrink-0">{icon}</span>

    {!collapsed && (
      <span className="text-sm font-medium whitespace-nowrap flex-1">
        {item.label}
      </span>
    )}

    {!collapsed && item.badge && (
      <span className="ml-auto bg-violet-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
        {item.badge}
      </span>
    )}

    {collapsed && item.badge && (
      <span className="absolute top-1 right-1 w-2 h-2 bg-violet-500 rounded-full" />
    )}
  </NavLink>
);

export default Sidebar;
