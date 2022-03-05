import React from 'react';
import Link from 'next/link';
import { homepageMenus } from '@/lib/home-data';
import Modal from '../ui/modal/modal';
import { Option, OptionSwitch } from '..';
import Ziyadah from '@/pages/ziyadah';
import { Reminder } from '../ui/reminder';
import { Hafalan } from '../hafalan';
import { useSession } from 'next-auth/react';
import { ModalNotLogin } from '../ui/modal/modal-not-login';

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
  const [option] = React.useState<Option>(Option.ReactSpringBottomSheet);
  const [dataModal, setDataModal] = React.useState<IModal>({
    title: '',
    content: '',
    button: '',
  });

  const { data: session } = useSession();

  const isLogin = session ? true : false;

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

  const openModal = (name: string) => {
    if (name === "Muraja'ah") {
      setIsOpen(true);
      setDataModal({
        title: "Muraja'ah",
        content: 'Hafalan belum ada.',
        button: 'Tutup!',
      });
    } else {
      setIsOpen(true);
      <ModalNotLogin isOpen={isOpen} handleToogle={handleToogle} />;
    }
  };

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  const onReady = () => setOpen(true);

  const onDismiss = () => setOpen(false);

  const callback = () => {
    setBottomSheetTitle('Ziyadah');
    setBottomSheetContent(<Ziyadah />);
    onReady();
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
              className="flex items-center justify-center h-10 w-10 bg-[#5EEAD3] rounded-full shadow-md"
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
                onClick={() => {
                  openModal(item.name);
                }}
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
                  setBottomSheetContent(<Hafalan callback={callback} />);
                  onReady();
                }}
                className="text-gray-900 font-semibold text-xs mt-3 helper-link-cover"
              >
                {item.name}
              </button>
            ) : item.name === "Muraja'ah" ? (
              <button
                type="button"
                className="text-gray-900 font-semibold text-xs mt-3 helper-link-cover"
                onClick={() => {
                  openModal(item.name);
                }}
              >
                {item.name}
              </button>
            ) : (
              <Link href={item.href} passHref>
                <button className="text-gray-900 font-semibold text-xs mt-3 helper-link-cover">
                  {item.name}
                </button>
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
