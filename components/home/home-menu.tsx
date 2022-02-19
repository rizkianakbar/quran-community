import React from 'react';
import Link from 'next/link';
import { homepageMenus } from '@/lib/home-data';
import Modal from '../ui/modal/modal';
import { Option, OptionSwitch } from '..';
import Ziyadah from '@/pages/ziyadah';
import { Reminder } from '../ui/reminder';
import { Hafalan } from '../hafalan';

interface IModal {
  title: string;
  content: JSX.Element | string;
  button: string;
}

export function HomeMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [bottomSheetTitle, setBottomSheetTitle] = React.useState('');
  const [bottomSheetContent, setBottomSheetContent] = React.useState('') as any;
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState<Option>(
    Option.ReactSpringBottomSheet
  );
  const [dataModal, setDataModal] = React.useState<IModal>({
    title: '',
    content: '',
    button: '',
  });
  const isLogin = false;

  React.useEffect(() => {
    const today = new Date();
    const day = today.getDay();
    if (day === 5) {
      setIsOpen(true);
      setDataModal({
        title: 'Baca Al-Kahfi',
        content: <Reminder />,
        button: 'Got it, thanks!',
      });
    }
  }, []);

  const openModal = () => {
    setIsOpen(true);
    setDataModal({
      title: 'Access to this page is restricted',
      content: 'You need to login to access this page.',
      button: 'Got it, thanks!',
    });
  };

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  // const dataModal = {
  //   title: 'Access to this page is restricted',
  //   content: 'You need to login to access this page.',
  //   button: 'Got it, thanks!',
  // };

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
                className: 'h-6 w-6 text-white',
              })}
            </div>
            {/* if already login using link, if not open popup Modal */}
            {!isLogin && item.needLogin ? (
              <button
                type="button"
                className="text-gray-900 font-semibold text-xs mt-3 helper-link-cover"
                onClick={openModal}
              >
                {item.name}
              </button>
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
            ) : item.name === 'Hafalan' ? (
              <button
                onClick={() => {
                  setBottomSheetTitle('Hafalan');
                  setBottomSheetContent(<Hafalan />);
                  onReady();
                }}
                className="text-gray-900 font-semibold text-xs mt-3 helper-link-cover"
              >
                {item.name}
              </button>
            ) : (
              <Link href={item.href}>
                <a className="text-gray-900 font-semibold text-xs mt-3 helper-link-cover">
                  {item.name}
                </a>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <Modal
        isOpen={isOpen}
        onToggle={handleToogle}
        title={dataModal.title}
        content={dataModal.content}
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
