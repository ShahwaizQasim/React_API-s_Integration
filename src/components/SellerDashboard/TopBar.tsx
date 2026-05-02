// ===== src/components/Navbar.tsx =====

import React, { useState } from "react";

interface NavbarProps {
  onToggleSidebar: () => void;
  onToggleDark: () => void;
  dark: boolean;
}

const TopBar: React.FC<NavbarProps> = ({
  onToggleSidebar,
  onToggleDark,
  dark,
}) => {
  const [showProfile, setShowProfile] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <header className="h-[72px] flex-shrink-0 bg-gray-900 dark:bg-gray-950 border-b border-gray-800 flex items-center px-5 gap-4 z-10">
      {/* Toggle */}
      <button
        onClick={onToggleSidebar}
        className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-violet-500/20 hover:border-violet-500/30 border border-gray-700 flex items-center justify-center transition-all duration-150 flex-shrink-0"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search orders, products, customers…"
          className="w-full bg-gray-800 border border-gray-700 focus:border-violet-500/60 text-gray-300 placeholder-gray-500 text-sm rounded-xl pl-9 pr-4 py-2 outline-none transition-colors duration-150"
        />
      </div>

      {/* Right */}
      <div className="ml-auto flex items-center gap-2">
        {/* Dark mode toggle */}
        <button
          onClick={onToggleDark}
          className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-violet-500/15 border border-gray-700 hover:border-violet-500/30 flex items-center justify-center transition-all duration-150"
          title={dark ? "Light mode" : "Dark mode"}
        >
          {dark ? (
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>

        {/* Notification */}
        <button className="relative w-9 h-9 rounded-xl bg-gray-800 hover:bg-violet-500/15 border border-gray-700 hover:border-violet-500/30 flex items-center justify-center transition-all duration-150">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-gray-900" />
        </button>

        {/* Divider */}
        <div className="w-px h-7 bg-gray-800 mx-1" />

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setShowProfile((v) => !v)}
            className="flex items-center gap-2.5 hover:bg-gray-800 px-2 py-1.5 rounded-xl transition-all duration-150"
          >
            <div className="text-right hidden sm:block">
              <p className="text-xs font-semibold text-gray-200 leading-none">
                Ahmed Raza
              </p>
              <p className="text-[10px] text-gray-500 mt-0.5">Pro Seller</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white border-2 border-violet-500/40">
              AR
            </div>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6b7280"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {showProfile && (
            <div className="absolute right-0 top-full mt-2 w-52 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl shadow-black/50 py-1.5 z-50">
              <div className="px-4 py-3 border-b border-gray-800">
                <p className="text-sm font-semibold text-gray-200">
                  Ahmed Raza
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  ahmed@bazzario.com
                </p>
              </div>
              {[
                { label: "Your Profile", icon: "👤" },
                { label: "Store Settings", icon: "🏪" },
                { label: "Billing", icon: "💳" },
                { label: "Help Center", icon: "❓" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => setShowProfile(false)}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-400 hover:bg-gray-800 hover:text-gray-200 transition-colors"
                >
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </button>
              ))}
              <div className="border-t border-gray-800 mt-1">
                <button
                  onClick={() => setShowProfile(false)}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  <span className="text-base">🚪</span>
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopBar;
