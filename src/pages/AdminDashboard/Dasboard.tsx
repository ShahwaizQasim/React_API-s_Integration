import ChartSection from "../../components/AdminDashboard/ChartSection";
import {
  OrdersTable,
  TopProducts,
  RecentUsers,
  ActivityTimeline,
  QuickActionsPanel,
} from "../../components/AdminDashboard/Panels";
import {
  recentOrders,
  topProducts,
  recentUsers,
  timelineEvents,
  quickActions,
  statCards2,
} from "../../utils/dummyData";
import StatCard from "../../components/AdminDashboard/StatCard";

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-950 p-5 lg:p-6">
      {/* Page header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            Good morning, Ahmed 👋
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Here's your platform overview — everything looks healthy.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </div>
          <div className="text-xs text-gray-500 bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-full">
            Apr 30, 2026
          </div>
        </div>
      </div>

      {/* ── Stat Cards ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-3">
        {statCards2.map((card) => (
          <StatCard key={card.id} card={card} />
        ))}
      </div>

      {/* ── Charts ─────────────────────────────────────────────────── */}
      <ChartSection />

      {/* ── Quick Actions ───────────────────────────────────────────── */}
      <QuickActionsPanel actions={quickActions} />

      {/* ── Orders + Products ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-3 mb-3">
        <div className="xl:col-span-3">
          <OrdersTable orders={recentOrders as any} />
        </div>
        <div className="xl:col-span-2">
          <TopProducts products={topProducts as any} />
        </div>
      </div>

      {/* ── Users + Timeline ────────────────────────────────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 pb-2">
        <RecentUsers users={recentUsers} />
        <ActivityTimeline events={timelineEvents} />
      </div>
    </div>
  );
};

export default Dashboard;
