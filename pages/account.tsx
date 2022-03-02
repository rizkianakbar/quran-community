import { Option, OptionSwitch } from '@/components';
import { Contact } from '@/components/contact';
import { FAQ } from '@/components/faq';
import { Container } from '@/components/layout/container';
import { PageSection } from '@/components/layout/pages';
import { Subscription } from '@/components/subscription';
import { Button } from '@/components/ui/button/button';
import Modal from '@/components/ui/modal/modal';
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
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { createElement } from 'react';
import profile from '../public/default.png';
import Ziyadah from './ziyadah';
interface IModal {
  title: string;
  content: JSX.Element | string;
  button: string;
  wfull?: boolean;
}
const Account = () => {
  const [bottomSheetTitle, setBottomSheetTitle] = React.useState('');
  const [bottomSheetContent, setBottomSheetContent] = React.useState('') as any;
  const [open, setOpen] = React.useState(false);
  const [fullScreen, setFullScreen] = React.useState(false);
  const [option, setOption] = React.useState<Option>(
    Option.ReactSpringBottomSheet
  );
  const { data: session } = useSession();

  const onReady = () => setOpen(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToogle = () => {
    setIsOpen(!isOpen);
  };
  const [dataModal, setDataModal] = React.useState<IModal>({
    title: '',
    content: '',
    button: '',
    wfull: false,
  });

  const onDismiss = () => setOpen(false);
  const menuData = [
    {
      name: 'Menghafal',
      icon: AcademicCapIcon,
      onclick: () => {
        setBottomSheetTitle('Ziyadah');
        setBottomSheetContent(<Ziyadah />);
        setFullScreen(false);
        onReady();
      },
    },
    {
      name: 'Baca Al-Quran',
      icon: BookOpenIcon,
      href: '/quran',
    },
    {
      name: 'Berlangganan',
      icon: LightBulbIcon,
      onclick: () => {
        setBottomSheetTitle('Subscription');
        setBottomSheetContent(<Subscription />);
        onReady();
        setFullScreen(true);
      },
    },
  ];
  const supportData = [
    {
      name: 'FAQ',
      icon: InformationCircleIcon,
      href: '#',
      onclick: () => {
        setBottomSheetTitle('FAQ');
        setBottomSheetContent(<FAQ />);
        onReady();
        setFullScreen(true);
      },
    },
    {
      name: 'Kontak',
      icon: PhoneIcon,
      href: '#',
      onclick: () => {
        setIsOpen(true);
        setDataModal({
          title: 'Hubungi Kami',
          content: <Contact />,
          button: 'Got it, thanks!',
        });
      },
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
      <>
        {menu.href ? (
          <Link href={menu.href} key={index} passHref as={menu.href}>
            <a>
              <div
                className={`{border-t first:border-t-0 first py-3 ${
                  index === menuData.length - 1 ? '' : 'border-b'
                }`}
                key={index}
              >
                {createElement(menu.icon, {
                  className:
                    'ml-2 h-6 w-6 text-gray-400 inline-block align-middle',
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
        ) : (
          <a onClick={menu.onclick} key={index} className="cursor-pointer">
            <div
              className={`{border-t first:border-t-0 first py-3 ${
                index === menuData.length - 1 ? '' : 'border-b'
              }`}
              key={index}
            >
              {createElement(menu.icon, {
                className:
                  'ml-2 h-6 w-6 text-gray-400 inline-block align-middle',
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
        )}
      </>
    );
  });

  const renderSupport = supportData.map((support, index) => {
    return (
      <>
        {support.name !== 'FAQ' && support.name != 'Kontak' ? (
          <Link href={support.href} key={index} passHref as={support.href}>
            <a>
              <div
                className={`{border-t first:border-t-0 first py-3 ${
                  index === supportData.length - 1 ? '' : 'border-b'
                }`}
                key={index}
              >
                {createElement(support.icon, {
                  className:
                    'ml-2 h-6 w-6 text-gray-400 inline-block align-middle',
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
        ) : support.name === 'Kontak' ? (
          <a onClick={support.onclick} key={index} className="cursor-pointer">
            <div
              className={`{border-t first:border-t-0 first py-3 ${
                index === supportData.length - 1 ? '' : 'border-b'
              }`}
            >
              {createElement(support.icon, {
                className:
                  'ml-2 h-6 w-6 text-gray-400 inline-block align-middle',
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
        ) : (
          <a onClick={support.onclick} key={index} className="cursor-pointer">
            <div
              className={`{border-t first:border-t-0 first py-3 ${
                index === supportData.length - 1 ? '' : 'border-b'
              }`}
            >
              {createElement(support.icon, {
                className:
                  'ml-2 h-6 w-6 text-gray-400 inline-block align-middle',
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
        )}
      </>
    );
  });
  return (
    <>
      <PageSection>
        <Container className="">
          <div className="pt-4 pb-4 bg-white px-4">
            {!session && (
              <>
                <Image
                  src={profile}
                  className="rounded-full object-cover object-top"
                  alt="Profile"
                  width={60}
                  height={60}
                />
                <p className="text-sm text-gray-700">Welcome!</p>
              </>
            )}
            {session && (
              <>
                <Image
                  loader={() => session?.user?.image as string}
                  unoptimized={true}
                  src={session?.user?.image as string}
                  className="rounded-full object-cover object-top"
                  alt="Profile"
                  width={60}
                  height={60}
                />
                <p className="text-sm text-gray-700">{session?.user?.name}</p>
              </>
            )}
            {!session && (
              <Link href="/auth" passHref>
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
            )}
            {session && (
              <a
                onClick={() => {
                  setIsOpen(true);
                  setDataModal({
                    title: 'Logout',
                    content: (
                      <>
                        <p>Are you sure you want to logout?</p>
                        <Button
                          onClick={() => signOut()}
                          className="w-full mt-4"
                          primary
                        >
                          <span className="text-sm">Ok</span>
                        </Button>
                      </>
                    ),
                    button: 'Cancel',
                    wfull: true,
                  });
                  // signOut();
                }}
                className="cursor-pointer"
              >
                <div>
                  <span className="text-xs text-gray-400 align-middle cursor-pointer">
                    {session?.user?.email}
                  </span>
                  {createElement(ChevronRightIcon, {
                    className:
                      'h-5 w-5 text-gray-400 inline-block align-middle float-right mt-1',
                  })}
                </div>
              </a>
            )}
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
                className:
                  'ml-2 h-6 w-6 text-gray-400 inline-block align-middle',
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
      <OptionSwitch
        option={option}
        open={open}
        onReady={onReady}
        onDismiss={onDismiss}
        title={bottomSheetTitle}
        content={bottomSheetContent}
        fullScreen={fullScreen}
      />
      <Modal
        isOpen={isOpen}
        onToggle={handleToogle}
        title={dataModal.title}
        content={dataModal.content}
        button={dataModal.button}
        wfull={dataModal.wfull}
      />
    </>
  );
};

export default Account;
