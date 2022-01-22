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
}

export const homepageMenus: HomepageMenuItem[] = [
  {
    name: 'Ziyadah',
    href: '/',
    icon: HospitalIcon,
  },
  {
    name: 'Hafalan',
    href: '/',
    icon: AmbulanceIcon,
  },
  {
    name: "Muraja'ah",
    href: '/',
    icon: OxygenIcon,
  },
  {
    name: 'Quiz',
    href: '/',
    icon: DonorIcon,
  },
  {
    name: 'Al-Quran',
    href: '/',
    icon: EducationIcon,
  },
  {
    name: 'E-Learning',
    href: '/',
    icon: DonationIcon,
  },
  {
    name: 'Top Santri',
    href: '/',
    icon: ContributionIcon,
    external: true,
  },
  {
    name: 'Pencapaian',
    href: '/',
    icon: DonationIcon,
  },
  {
    name: 'Amalam Yaumi',
    href: '/',
    icon: DonationIcon,
  },
  {
    name: 'Quran Mapping',
    href: '/',
    icon: DonationIcon,
  },
];
