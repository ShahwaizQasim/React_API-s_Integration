import React, { useState } from "react";

import Sidebar from "../../components/SellerDashboard/SideBar";
import TopBar from "../../components/SellerDashboard/TopBar";
import { Outlet } from "react-router-dom";
import { navItems } from "../../utils/dummyData";

// ---- Dashboard Page ----
const SellerDashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeNav, setActiveNav] = useState(0);
  const [dark, setDark] = useState(true);

  const toggleDark = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  // Apply dark class on mount
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-950 text-gray-100">
      <Sidebar
        collapsed={collapsed}
        activeNav={activeNav}
        onNavChange={setActiveNav}
        navItems={navItems}
      />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <TopBar
          onToggleSidebar={() => setCollapsed((c) => !c)}
          onToggleDark={toggleDark}
          dark={dark}
        />

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto bg-gray-950 p-5 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SellerDashboard;
