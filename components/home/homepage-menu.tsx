import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { homepageMenus } from '@/lib/home/homepage-menus';
import Modal from '../modal';

export function HomePageMenu() {
  const [isOpen, setIsOpen] = useState(false);
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
    </>
  );
}
