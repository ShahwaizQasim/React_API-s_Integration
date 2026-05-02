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
import {
  salesData,
  recentOrders,
  topProducts,
  statCards,
} from "../../utils/dummyData";
import StatCard from "../../components/SellerDashboard/StatCard";
import OrdersTable from "../../components/SellerDashboard/OrdersTable";
import QuickActions from "../../components/SellerDashboard/QuickAction";
import TopProducts from "../../components/SellerDashboard/TopProducts";

const ChartSection: React.FC = () => (
  <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 mb-4">
    {/* Area Chart */}
    <div className="xl:col-span-3 bg-gray-900 dark:bg-gray-950 border border-gray-800 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h2 className="text-sm font-semibold text-white">
            Revenue Over Time
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Monthly revenue performance — 2024
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-gray-800 rounded-lg p-1">
          {["6M", "1Y", "All"].map((t, i) => (
            <button
              key={t}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-md transition-colors ${
                i === 1
                  ? "bg-violet-500 text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart
            data={salesData}
            margin={{ top: 5, right: 5, bottom: 0, left: 0 }}
          >
            <defs>
              <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7c6df4" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#7c6df4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1f2937"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tick={{ fill: "#6b7280", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#6b7280", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => "$" + Math.round(v / 1000) + "k"}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="#7c6df4"
              strokeWidth={2.5}
              fill="url(#revenueGrad)"
              dot={false}
              activeDot={{ r: 5, fill: "#a593ff", strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* Bar Chart */}
    <div className="xl:col-span-2 bg-gray-900 dark:bg-gray-950 border border-gray-800 rounded-2xl p-5">
      <h2 className="text-sm font-semibold text-white">Orders by Month</h2>
      <p className="text-xs text-gray-500 mt-0.5 mb-4">
        Order volume distribution
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={salesData.slice(6)}
          margin={{ top: 5, right: 5, bottom: 0, left: 0 }}
        >
          <defs>
            <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4f8ef7" stopOpacity={1} />
              <stop offset="100%" stopColor="#7c6df4" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1f2937"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={{ fill: "#6b7280", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#6b7280", fontSize: 11 }}
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


// ---- Custom Tooltip ----
interface TooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 shadow-2xl">
      <p className="text-xs font-semibold text-gray-400 mb-2">{label}</p>
      {payload.map((entry, i) => (
        <p
          key={i}
          style={{ color: entry.color }}
          className="text-xs font-semibold"
        >
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

const Dashboard: React.FC = () => {
    return (    
        <div className="flex-1 overflow-y-auto bg-gray-950 p-5 lg:p-6">

           {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">
                Good morning, Ahmed 👋
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Here's what's happening with your store today.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
              <button className="text-xs font-semibold text-gray-400 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-3 py-1.5 rounded-full transition-colors">
                Apr 30, 2026
              </button>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
            {statCards.map((card) => (
              <StatCard key={card.id} card={card} />
            ))}
          </div>

          {/* Charts */}
          <ChartSection />

          {/* Quick Actions */}
          <div className="mb-4">
            <QuickActions />
          </div>

          {/* Bottom: Orders + Products */}
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 pb-2">
            <div className="xl:col-span-3">
              <OrdersTable orders={recentOrders} />
            </div>
            <div className="xl:col-span-2">
              <TopProducts products={topProducts} />
            </div>
          </div>
        </div>
    )
}

export default Dashboard;