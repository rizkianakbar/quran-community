import Link from 'next/link';
import { createElement, useRef } from 'react';
import { Container } from '../ui/container';
import { Popover } from '@headlessui/react';
import { NavigationMenuPopover, navMenuButtonIcon } from './navigation-menu';

export const GlobalHeader = () => {
  const popoverButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="flex items-center justify-center fixed w-full h-16 z-40 bg-teal-300 shadow-md">
      <Container className="flex items-center justify-between h-full px-4">
        <Link href="/">
          <a className="align-middle">
            <h1 className="font-bold text-xl text-white">QuranMemo</h1>
          </a>
        </Link>
        {/* <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className="flex items-center justify-center rounded-md h-10 w-10 ml-4 hover:bg-gray-100 hover:bg-opacity-10 focus:bg-gray-100 focus:bg-opacity-10"
                ref={popoverButtonRef}
              >
                {createElement(navMenuButtonIcon(open), {
                  'aria-hidden': true,
                  className: 'text-white h-6 w-6',
                })}
                <span className="sr-only">Menu</span>
              </Popover.Button>
              <NavigationMenuPopover
                open={open}
                popoverButtonRef={popoverButtonRef}
              />
            </>
          )}
        </Popover> */}
      </Container>
    </header>
  );
};
