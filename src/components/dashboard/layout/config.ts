import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Visão geral', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Clientes', href: paths.dashboard.customers, icon: 'users' },
  { key: 'account', title: 'Conta', href: paths.dashboard.account, icon: 'user' },
] satisfies NavItemConfig[];
