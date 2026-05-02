export interface StatCard {
  id: string;
  label: string;
  value: string;
  change: string;
  changeType: "up" | "down";
  changeLabel: string;
  icon: string;
  color: "violet" | "cyan" | "emerald" | "rose";
  sparkData: number[];
}

export interface SalesDataPoint {
  m: string;
  rev: number;
  users: number;
}

export interface OrdersDataPoint {
  m: string;
  orders: number;
}

export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: "Completed" | "Pending" | "Cancelled" | "Processing";
}

export interface Product {
  name: string;
  revenue: string;
  sales: number;
  growth: string;
  growthType: "up" | "down";
  percent: number;
  color: string;
}

export interface User {
  initials: string;
  name: string;
  email: string;
  plan: string;
  status: "Active" | "Pending" | "Suspended";
  color: string;
}

export interface TimelineEvent {
  icon: string;
  title: string;
  highlight: string;
  time: string;
  by: string;
  color: string;
}

export interface QuickAction {
  icon: string;
  label: string;
  color: string;
  bg: string;
}

export interface NavItem {
  icon: string;
  label: string;
  badge?: number;
  active?: boolean;
  path: string;
}

