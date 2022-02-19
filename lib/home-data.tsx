import { UrlObject } from 'url';
import React from 'react';
import {
  ContributionIcon,
  DonationIcon,
  EducationIcon,
} from '@/components/ui/icons';
import { BookOpenIcon, StarIcon } from '@heroicons/react/solid';

export interface HomepageMenuItem {
  name: string;
  href: UrlObject | string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
  external?: boolean;
  needLogin: boolean;
}

export const homepageMenus: HomepageMenuItem[] = [
  {
    name: 'Ziyadah',
    href: '/ziyadah',
    icon: EducationIcon,
    needLogin: false,
  },
  {
    name: 'Hafalan',
    href: '/',
    icon: EducationIcon,
    needLogin: false,
  },
  {
    name: "Muraja'ah",
    href: '/',
    icon: DonationIcon,
    needLogin: false,
  },
  {
    name: 'Quiz',
    href: '/',
    icon: EducationIcon,
    needLogin: true,
  },
  {
    name: 'Al-Quran',
    href: '/quran',
    icon: BookOpenIcon,
    needLogin: false,
  },
  {
    name: 'E-Learning',
    href: '/',
    icon: EducationIcon,
    needLogin: true,
  },
  {
    name: 'Top Santri',
    href: '/',
    icon: ContributionIcon,
    external: true,
    needLogin: true,
  },
  {
    name: 'Pencapaian',
    href: '/',
    icon: StarIcon,
    needLogin: true,
  },
  {
    name: 'Amalam Yaumi',
    href: '/',
    icon: EducationIcon,
    needLogin: true,
  },
];
