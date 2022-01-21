import * as React from 'react';

import {
  HomeIcon,
  SearchIcon,
  BellIcon,
  UserCircleIcon,
} from '@heroicons/react/outline';

export interface NavigationItem {
  name: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
  href: string;
  exact?: boolean;
  external?: boolean;
}

export type NavMenuItem = Omit<NavigationItem, 'icon'>;

export const bottomNavigation: NavigationItem[] = [
  {
    name: 'Beranda',
    icon: HomeIcon,
    href: '/',
    exact: true,
  },
  {
    name: 'Search',
    icon: SearchIcon,
    href: '/provinces',
  },
  {
    name: 'Notifications',
    icon: BellIcon,
    href: '/notifications',
  },
  {
    name: 'Account',
    icon: UserCircleIcon,
    href: '/notifications',
  },
];

export const navMenu: NavMenuItem[] = [
  {
    name: 'Dashboard',
    href: '/',
    exact: true,
  },
  {
    name: 'Menghafal',
    href: '/menghafal',
    exact: true,
  },
  {
    name: "Baca Al-Qur'an",
    href: '/baca-al-quran',
  },
  {
    name: 'Berlangganan',
    href: '/berlangganan',
    exact: true,
  },
  {
    name: 'FAQ',
    href: '/faq',
    exact: true,
  },
  {
    name: 'Kontak',
    href: '/kontak',
    exact: true,
  },
  {
    name: 'Partner',
    href: '/partner',
    exact: true,
  },
];
