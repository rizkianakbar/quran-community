import { UrlObject } from 'url';
import React from 'react';
import {
  AmbulanceIcon,
  ContributionIcon,
  DonationIcon,
  DonorIcon,
  EducationIcon,
  HospitalIcon,
  OxygenIcon,
} from '@/components/ui/icons';

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
    icon: HospitalIcon,
    needLogin: false,
  },
  {
    name: 'Hafalan',
    href: '/',
    icon: AmbulanceIcon,
    needLogin: true,
  },
  {
    name: "Muraja'ah",
    href: '/',
    icon: OxygenIcon,
    needLogin: true,
  },
  {
    name: 'Quiz',
    href: '/',
    icon: DonorIcon,
    needLogin: true,
  },
  {
    name: 'Al-Quran',
    href: '/quran',
    icon: EducationIcon,
    needLogin: false,
  },
  {
    name: 'E-Learning',
    href: '/',
    icon: DonationIcon,
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
    icon: DonationIcon,
    needLogin: true,
  },
  {
    name: 'Amalam Yaumi',
    href: '/',
    icon: DonationIcon,
    needLogin: true,
  },
  // {
  //   name: 'Quran Mapping',
  //   href: '/',
  //   icon: DonationIcon,
  // },
];
