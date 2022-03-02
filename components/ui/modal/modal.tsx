import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Button } from '../button/button';

export default function Modal({
  isOpen,
  onToggle,
  title,
  content,
  button,
  wfull,
}: any) {
  console.log(wfull);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10" onClose={onToggle}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="overflow-auto inline-block w-full h-full max-h-[30rem] max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{content}</p>
                </div>

                <div className="mt-4">
                  {/* <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium bg-[#E0EFEE] text-[#20b2aa] border border-transparent rounded-md hover:bg-[#5EEAD3] hover:text-whites"
                    onClick={onToggle}
                  >
                    {button}
                  </button> */}

                  <Button
                    onClick={onToggle}
                    primary
                    className={`${wfull ? 'w-full' : ''} px-4`}
                  >
                    {button}
                  </Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
