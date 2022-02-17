import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { homepageMenus } from '@/lib/home-data';
import Modal from '../ui/modal';
import { Option, OptionSwitch } from '..';
import Ziyadah from '@/pages/ziyadah';

export function HomeMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [bottomSheetTitle, setBottomSheetTitle] = useState('');
  const [bottomSheetContent, setBottomSheetContent] = useState('') as any;
  const isLogin = false;

  const openModal = () => {
    setIsOpen(true);
  };

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  const dataModal = {
    title: 'Access to this page is restricted',
    description: 'You need to login to access this page.',
    button: 'Got it, thanks!',
  };

  const [open, setOpen] = useState(false);

  const [option, setOption] = useState<Option>(Option.ReactSpringBottomSheet);

  const onReady = () => setOpen(true);

  const onDismiss = () => setOpen(false);

  return (
    <>
      <ul className="grid grid-cols-3 gap-3 sm:gap-6 sm:grid-cols-3">
        {homepageMenus.map((item) => (
          <li
            key={item.name}
            className="inline-flex flex-col items-center justify-center text-center relative shadow-md rounded-lg py-3 px-2"
          >
            <div
              aria-hidden
              className="flex items-center justify-center h-10 w-10 bg-[#5EEAD3] rounded-full"
            >
              {React.createElement(item.icon, {
                className: 'h-6 w-6 text-brand-500',
              })}
            </div>
            {/* if already login using link, if not open popup Modal */}
            {isLogin || !item.needLogin ? (
              <Link href={item.href}>
                <a className="text-gray-900 font-semibold text-xs mt-3 helper-link-cover">
                  {item.name}
                </a>
              </Link>
            ) : item.name === 'Ziyadah' ? (
              <button
                onClick={() => {
                  setBottomSheetTitle('Ziyadah');
                  setBottomSheetContent(<Ziyadah />);
                  onReady();
                }}
                className="text-gray-900 font-semibold text-xs mt-3 helper-link-cover"
              >
                {item.name}
              </button>
            ) : (
              <button
                type="button"
                className="text-gray-900 font-semibold text-xs mt-3 helper-link-cover"
                onClick={openModal}
              >
                {item.name}
              </button>
            )}
          </li>
        ))}
      </ul>
      <Modal
        isOpen={isOpen}
        onToggle={handleToogle}
        title={dataModal.title}
        description={dataModal.description}
        button={dataModal.button}
      />
      <OptionSwitch
        option={option}
        open={open}
        onReady={onReady}
        onDismiss={onDismiss}
        title={bottomSheetTitle}
        content={bottomSheetContent}
      />
    </>
  );
}
