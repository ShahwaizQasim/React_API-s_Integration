import type {
  NavItem,
  OrdersDataPoint,
  QuickAction,
  TimelineEvent,
  User,
} from "../types/dashboard";

export const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Pro Headphones",
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 2341,
    image: "🎧",
    category: "Electronics",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    price: 89.99,
    originalPrice: 149.99,
    rating: 4.6,
    reviews: 876,
    image: "⌚",
    category: "Fashion",
    badge: "New",
  },
  {
    id: 3,
    name: "Smart Fitness Tracker",
    price: 59.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 1543,
    image: "📱",
    category: "Electronics",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Organic Skincare Set",
    price: 45.99,
    originalPrice: 79.99,
    rating: 4.9,
    reviews: 3210,
    image: "🧴",
    category: "Beauty",
    badge: "Top Rated",
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    price: 249.99,
    originalPrice: 399.99,
    rating: 4.5,
    reviews: 654,
    image: "🪑",
    category: "Home",
    badge: "Premium",
  },
  {
    id: 6,
    name: "Portable Coffee Maker",
    price: 34.99,
    originalPrice: 59.99,
    rating: 4.4,
    reviews: 987,
    image: "☕",
    category: "Kitchen",
    badge: "Popular",
  },
  {
    id: 7,
    name: "Running Sneakers X",
    price: 74.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviews: 1876,
    image: "👟",
    category: "Fashion",
    badge: "Hot",
  },
  {
    id: 8,
    name: "4K Webcam Studio",
    price: 109.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviews: 432,
    image: "📷",
    category: "Electronics",
    badge: "New",
  },
];

export const CATEGORIES = [
  {
    name: "Electronics",
    icon: "💻",
    count: "12,400+ items",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Fashion",
    icon: "👗",
    count: "28,000+ items",
    color: "from-pink-500 to-rose-400",
  },
  {
    name: "Home & Living",
    icon: "🏠",
    count: "9,300+ items",
    color: "from-amber-500 to-orange-400",
  },
  {
    name: "Beauty",
    icon: "✨",
    count: "7,800+ items",
    color: "from-purple-500 to-violet-400",
  },
  {
    name: "Sports",
    icon: "⚽",
    count: "5,200+ items",
    color: "from-green-500 to-emerald-400",
  },
  {
    name: "Books",
    icon: "📚",
    count: "3,100+ items",
    color: "from-slate-500 to-gray-400",
  },
];

export const STEPS = [
  {
    step: "01",
    title: "Browse & Discover",
    desc: "Explore thousands of curated products from trusted sellers worldwide. Use smart filters to find exactly what you need.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Add to Cart",
    desc: "Save your favorites, compare options, and add items to your cart with a single click — anytime, anywhere.",
    icon: "🛒",
  },
  {
    step: "03",
    title: "Secure Checkout",
    desc: "Pay safely with multiple payment methods — cards, wallets, or installments. SSL-encrypted for your peace of mind.",
    icon: "🔒",
  },
  {
    step: "04",
    title: "Fast Delivery",
    desc: "Sit back while your order is packed and delivered to your door. Track in real-time every step of the way.",
    icon: "🚀",
  },
];

export const BENEFITS = [
  {
    icon: "🛡️",
    title: "Buyer Protection",
    desc: "100% money-back guarantee on all purchases. Shop with complete confidence.",
  },
  {
    icon: "⚡",
    title: "Lightning Delivery",
    desc: "Same-day delivery in major cities. Express and standard options available.",
  },
  {
    icon: "🔄",
    title: "Easy Returns",
    desc: "30-day hassle-free returns. No questions asked, no forms to fill.",
  },
  {
    icon: "🏆",
    title: "Quality Assured",
    desc: "Every seller is vetted. Every product meets our quality standards.",
  },
  {
    icon: "💬",
    title: "24/7 Support",
    desc: "Real humans, not bots. Our team is always here when you need help.",
  },
  {
    icon: "💳",
    title: "Secure Payments",
    desc: "Bank-grade encryption protects every transaction you make.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Aisha Malik",
    role: "Verified Buyer",
    avatar: "👩‍💼",
    rating: 5,
    text: "Absolutely love this platform! Found exactly what I needed at half the price. The delivery was faster than expected and packaging was pristine.",
    location: "Karachi",
    date: "2 days ago",
  },
  {
    name: "Omar Farooq",
    role: "Premium Member",
    avatar: "👨‍💻",
    rating: 5,
    text: "Best online shopping experience I've had. The product quality matched perfectly with the descriptions and the return process was seamless.",
    location: "Lahore",
    date: "1 week ago",
  },
  {
    name: "Sara Khan",
    role: "Verified Buyer",
    avatar: "👩‍🎨",
    rating: 5,
    text: "I've tried many platforms but this one stands out. The seller ratings are accurate, checkout is smooth, and customer support is actually helpful!",
    location: "Islamabad",
    date: "3 days ago",
  },
];

export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: "Pending" | "Shipped" | "Delivered";
  date: string;
  avatar: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  sales: number;
  maxSales: number;
  emoji: string;
  category: string;
}

export interface SalesDataPoint {
  month: string;
  sales: number;
  orders: number;
  revenue: number;
}

export interface StatCard {
  id: string;
  label: string;
  value: string;
  trend: number;
  icon: string;
  color: "purple" | "blue" | "green" | "amber";
}

export const salesData: SalesDataPoint[] = [
  { month: "Jan", sales: 4200, orders: 320, revenue: 42000 },
  { month: "Feb", sales: 3800, orders: 290, revenue: 38000 },
  { month: "Mar", sales: 5500, orders: 410, revenue: 55000 },
  { month: "Apr", sales: 4800, orders: 360, revenue: 48000 },
  { month: "May", sales: 6300, orders: 480, revenue: 63000 },
  { month: "Jun", sales: 7100, orders: 530, revenue: 71000 },
  { month: "Jul", sales: 6800, orders: 510, revenue: 68000 },
  { month: "Aug", sales: 8200, orders: 620, revenue: 82000 },
  { month: "Sep", sales: 7500, orders: 570, revenue: 75000 },
  { month: "Oct", sales: 9100, orders: 690, revenue: 91000 },
  { month: "Nov", sales: 8800, orders: 660, revenue: 88000 },
  { month: "Dec", sales: 10500, orders: 790, revenue: 105000 },
];

export const recentOrders: Order[] = [
  {
    id: "#4821",
    customer: "Ayesha Khan",
    product: "Smart Watch Pro",
    amount: "$299",
    status: "Delivered",
    date: "Apr 30",
    avatar: "AK",
  },
  {
    id: "#4820",
    customer: "Carlos Rivera",
    product: "Wireless Buds X",
    amount: "$149",
    status: "Shipped",
    date: "Apr 29",
    avatar: "CR",
  },
  {
    id: "#4819",
    customer: "Priya Sharma",
    product: "Fitness Tracker",
    amount: "$89",
    status: "Pending",
    date: "Apr 29",
    avatar: "PS",
  },
  {
    id: "#4818",
    customer: "Marco Bianchi",
    product: "Laptop Stand",
    amount: "$59",
    status: "Delivered",
    date: "Apr 28",
    avatar: "MB",
  },
  {
    id: "#4817",
    customer: "Sarah Lin",
    product: "USB-C Hub",
    amount: "$79",
    status: "Shipped",
    date: "Apr 28",
    avatar: "SL",
  },
  {
    id: "#4816",
    customer: "Omar Farooq",
    product: "Mech Keyboard",
    amount: "$189",
    status: "Delivered",
    date: "Apr 27",
    avatar: "OF",
  },
  {
    id: "#4815",
    customer: "Yuki Tanaka",
    product: "Webcam HD Pro",
    amount: "$119",
    status: "Pending",
    date: "Apr 27",
    avatar: "YT",
  },
];

export const topProducts: Product[] = [
  {
    id: "1",
    name: "Smart Watch Pro",
    price: "$299",
    sales: 1420,
    maxSales: 1420,
    emoji: "⌚",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Wireless Buds X",
    price: "$149",
    sales: 1180,
    maxSales: 1420,
    emoji: "🎧",
    category: "Electronics",
  },
  {
    id: "3",
    name: "Laptop Stand",
    price: "$59",
    sales: 980,
    maxSales: 1420,
    emoji: "💻",
    category: "Accessories",
  },
  {
    id: "4",
    name: "Mech Keyboard",
    price: "$189",
    sales: 760,
    maxSales: 1420,
    emoji: "⌨️",
    category: "Electronics",
  },
  {
    id: "5",
    name: "Phone Case Set",
    price: "$29",
    sales: 640,
    maxSales: 1420,
    emoji: "📱",
    category: "Accessories",
  },
];

export const statCards: StatCard[] = [
  {
    id: "1",
    label: "Total Revenue",
    value: "$105,840",
    trend: 18.2,
    icon: "💰",
    color: "purple",
  },
  {
    id: "2",
    label: "Total Orders",
    value: "7,290",
    trend: 12.5,
    icon: "🛒",
    color: "blue",
  },
  {
    id: "3",
    label: "Avg Order Value",
    value: "$145.18",
    trend: 4.1,
    icon: "📈",
    color: "green",
  },
  {
    id: "4",
    label: "Conversion Rate",
    value: "3.86%",
    trend: -0.3,
    icon: "🎯",
    color: "amber",
  },
];

export const navItems = [
  { label: "Dashboard", icon: "grid", badge: null, path: "/seller" },
  { label: "Products", icon: "tag", badge: null, path: "/seller/products" },
  {
    label: "Add Products",
    icon: "bar-chart",
    badge: null,
    path: "/seller/add-products",
  },
  { label: "Orders", icon: "package", badge: "12", path: "/seller/orders" },
  { label: "Customers", icon: "users", badge: null, path: "/seller/customers" },
];

export const ordersData: OrdersDataPoint[] = [
  { m: "Jul", orders: 820 },
  { m: "Aug", orders: 940 },
  { m: "Sep", orders: 880 },
  { m: "Oct", orders: 1120 },
  { m: "Nov", orders: 1060 },
  { m: "Dec", orders: 1280 },
];

export const timelineEvents: TimelineEvent[] = [
  {
    icon: "+",
    title: "New product added:",
    highlight: "Analytics Pro",
    time: "2 min ago",
    by: "Ahmed K.",
    color: "rgba(124,109,244,0.2)",
  },
  {
    icon: "⊗",
    title: "User",
    highlight: "Chen Wei",
    time: "14 min ago",
    by: "Ahmed K.",
    color: "rgba(247,89,107,0.2)",
  },
  {
    icon: "✓",
    title: "Order",
    highlight: "#ORD-8821",
    time: "31 min ago",
    by: "System",
    color: "rgba(34,211,160,0.2)",
  },
  {
    icon: "!",
    title: "Revenue alert: monthly goal 94% reached",
    highlight: "",
    time: "1 hr ago",
    by: "System",
    color: "rgba(245,166,35,0.2)",
  },
  {
    icon: "⊕",
    title: "Seller",
    highlight: "Zara Co.",
    time: "2 hr ago",
    by: "Ahmed K.",
    color: "rgba(79,142,247,0.2)",
  },
];

// ─── Quick Actions ─────────────────────────────────────────────────────────

export const quickActions: QuickAction[] = [
  {
    icon: "+",
    label: "Add Product",
    color: "#7c6df4",
    bg: "rgba(124,109,244,0.15)",
  },
  {
    icon: "⊕",
    label: "Add User",
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.15)",
  },
  {
    icon: "◫",
    label: "View Reports",
    color: "#22d3a0",
    bg: "rgba(34,211,160,0.15)",
  },
  {
    icon: "⊟",
    label: "Manage Orders",
    color: "#f5a623",
    bg: "rgba(245,166,35,0.15)",
  },
  {
    icon: "⚙",
    label: "Settings",
    color: "#f7596b",
    bg: "rgba(247,89,107,0.15)",
  },
  {
    icon: "⊜",
    label: "Audit Log",
    color: "#4f8ef7",
    bg: "rgba(79,142,247,0.15)",
  },
];

// ─── Nav Items ─────────────────────────────────────────────────────────────

export const navMain: NavItem[] = [
  { icon: "⊡", label: "Dashboard", active: true, path: "/admin/dashboard" },
  { icon: "⊞", label: "Products", path: "/admin/dashboard/get-products" },
  { icon: "⊕", label: "Users", badge: 3, path: "/admin/dashboard/get-users" },
  { icon: "⊗", label: "Sellers", path: "/admin/dashboard/get-sellers" },
  { icon: "⊟", label: "Orders", badge: 12, path: "/admin/dashboard/orders" },
];

export const recentUsers: User[] = [
  {
    initials: "SM",
    name: "Sara Martinez",
    email: "sara@acme.co",
    plan: "Enterprise",
    status: "Active",
    color: "rgba(124,109,244,0.2)",
  },
  {
    initials: "JT",
    name: "James Tran",
    email: "j.tran@startup.io",
    plan: "Pro",
    status: "Pending",
    color: "rgba(56,189,248,0.2)",
  },
  {
    initials: "LK",
    name: "Laila Khan",
    email: "laila@design.io",
    plan: "Starter",
    status: "Active",
    color: "rgba(34,211,160,0.2)",
  },
  {
    initials: "MR",
    name: "Mark Rodriguez",
    email: "mark@corp.net",
    plan: "Enterprise",
    status: "Active",
    color: "rgba(245,166,35,0.2)",
  },
  {
    initials: "CW",
    name: "Chen Wei",
    email: "c.wei@techlab.cn",
    plan: "Pro",
    status: "Suspended",
    color: "rgba(247,89,107,0.2)",
  },
];

export const statCards2 = [
  {
    id: "revenue",
    label: "Total Revenue",
    value: "$284.5k",
    change: "▲ 14.2%",
    changeType: "up",
    changeLabel: "vs last month",
    icon: "$",
    color: "violet",
    sparkData: [42, 55, 48, 70, 65, 80, 78, 90, 85, 99, 94, 100],
  },
  {
    id: "orders",
    label: "Total Orders",
    value: "12,847",
    change: "▲ 9.8%",
    changeType: "up",
    changeLabel: "vs last month",
    icon: "⊟",
    color: "cyan",
    sparkData: [60, 70, 65, 80, 72, 88, 84, 90, 82, 95, 91, 100],
  },
  {
    id: "users",
    label: "Active Users",
    value: "3,291",
    change: "▲ 22.1%",
    changeType: "up",
    changeLabel: "vs last month",
    icon: "⊕",
    color: "emerald",
    sparkData: [30, 40, 55, 48, 60, 58, 72, 80, 78, 88, 92, 100],
  },
  {
    id: "churn",
    label: "Churn Rate",
    value: "2.4%",
    change: "▼ 0.8%",
    changeType: "down",
    changeLabel: "vs last month",
    icon: "⊗",
    color: "rose",
    sparkData: [100, 95, 90, 88, 85, 80, 82, 78, 72, 70, 65, 60],
  },
];
