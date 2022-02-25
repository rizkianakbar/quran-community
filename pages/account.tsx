import { Container } from '@/components/layout/container';
import { PageSection } from '@/components/layout/pages';
import {
  AcademicCapIcon,
  BookOpenIcon,
  ChevronRightIcon,
  GlobeAltIcon,
  InboxInIcon,
  InformationCircleIcon,
  LightBulbIcon,
  PhoneIcon,
  UserGroupIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { createElement } from 'react';
import profile from '../public/kian.jpeg';

const Account = () => {
  const menuData = [
    {
      name: 'Menghafal',
      icon: AcademicCapIcon,
      href: '#',
    },
    {
      name: 'Baca Al-Quran',
      icon: BookOpenIcon,
      href: '/quran',
    },
    {
      name: 'Berlangganan',
      icon: LightBulbIcon,
      href: '#',
    },
  ];
  const supportData = [
    {
      name: 'FAQ',
      icon: InformationCircleIcon,
      href: '#',
    },
    {
      name: 'Kontak',
      icon: PhoneIcon,
      href: '#',
    },
    {
      name: 'Partner',
      icon: UserGroupIcon,
      href: '#',
    },
    {
      name: 'Language',
      icon: GlobeAltIcon,
      href: '#',
    },
  ];

  const renderMenu = menuData.map((menu, index) => {
    return (
      // add border-b except last item
      <Link href={menu.href} key={index} passHref prefetch as={menu.href}>
        <a>
          <div
            className={`{border-t first:border-t-0 first py-3 ${
              index === menuData.length - 1 ? '' : 'border-b'
            }`}
            key={index}
          >
            {createElement(menu.icon, {
              className: 'ml-2 h-6 w-6 text-gray-400 inline-block align-middle',
            })}
            <span className="text-sm ml-4 text-gray-700 inline-block align-middle">
              {menu.name}
            </span>
            {createElement(ChevronRightIcon, {
              className:
                'h-5 w-5 text-gray-400 inline-block align-middle float-right mt-1',
            })}
          </div>
        </a>
      </Link>
    );
  });

  const renderSupport = supportData.map((support, index) => {
    return (
      <Link href={support.href} key={index} passHref prefetch as={support.href}>
        <a>
          <div
            className={`{border-t first:border-t-0 first py-3 ${
              index === supportData.length - 1 ? '' : 'border-b'
            }`}
            key={index}
          >
            {createElement(support.icon, {
              className: 'ml-2 h-6 w-6 text-gray-400 inline-block align-middle',
            })}
            <span className="text-sm ml-4 text-gray-700 inline-block align-middle">
              {support.name}
            </span>
            {createElement(ChevronRightIcon, {
              className:
                'h-5 w-5 text-gray-400 inline-block align-middle float-right mt-1',
            })}
          </div>
        </a>
      </Link>
    );
  });

  return (
    <PageSection>
      <Container className="">
        <div className="pt-4 pb-4 bg-white px-4">
          <Image
            src={profile}
            className="rounded-full object-cover object-top"
            alt="Profile"
            width={60}
            height={60}
          />
          <p className="text-sm text-gray-700">Welcome!</p>
          <Link href="#" passHref>
            <a>
              <div>
                <span className="text-xs text-gray-400 align-middle cursor-pointer">
                  Create your account or log in here
                </span>
                {createElement(ChevronRightIcon, {
                  className:
                    'h-5 w-5 text-gray-400 inline-block align-middle float-right mt-1',
                })}
              </div>
            </a>
          </Link>
        </div>
        <div className="bg-white mt-2 px-4">
          <p className="text-sm text-gray-700 font-bold pt-2">Menu</p>
          {renderMenu}
        </div>
        <div className="bg-white mt-2 px-4">
          <p className="text-sm text-gray-700 font-bold pt-2">Support</p>
          {renderSupport}
        </div>
        <div className="bg-white mt-2 px-4 mb-4">
          <div className="py-3">
            {createElement(InboxInIcon, {
              className: 'ml-2 h-6 w-6 text-gray-400 inline-block align-middle',
            })}
            <span className="text-sm ml-4 text-gray-700 inline-block align-middle">
              Version
            </span>
            <span className="text-xs h-5 w-5 text-gray-400 inline-block align-middle float-right mt-1 mr-7">
              v0.0.1
            </span>
          </div>
          {/* verical center */}
        </div>
      </Container>
    </PageSection>
  );
};

export default Account;
