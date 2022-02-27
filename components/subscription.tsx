import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, ShieldCheckIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React, { createElement } from 'react';

export const Subscription = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dataSubscription = [
    {
      name: 'Gratis',
      text: [
        '1x Simpan rekaman',
        '3x Simpan hafalan',
        'Tafsir hanya juz 30 saja',
        'Menghafal hanya juz 30 dan Al-fatihah',
        'Muratal hanya Syeh Al-Afasy',
      ],
      defaultOpen: true,
    },
    {
      name: 'Paket Islam (Infak Rp. 10.000/bulan) *',
      text: [
        'Simpan hafalan tak terbatas',
        'Akses Quiz tak terbatas',
        'Semua muratal kecuali Warsh',
        'Tafsir semua juz',
        'Menghafal semua juz',
        'Gratis akses Konten Belajar Al-Quran (Makroj) **',
        '10x simpan rekaman',
      ],
      defaultOpen: false,
    },
    {
      name: 'Paket Iman (Infak Rp. 20.000/bulan) *',
      text: [
        'Simpan hafalan tak terbatas',
        'Akses Quiz tak terbatas',
        'Semua muratal termasuk Warsh',
        'Tafsir semua juz',
        'Menghafal semua juz',
        'Gratis akses Konten Belajar Al-Quran (Makroj dan Muratal MurQ) **',
        'Simpan rekaman tak terbatas',
      ],
      defaultOpen: false,
    },
    {
      name: 'Paket Ihsan (Infak Rp. 50.000/bulan) *',
      text: [
        'INTENSIF koreksi hafalan/tahsin/tajwid oleh ustad pilihan QuranMemo',
        'Simpan hafalan tak terbatas',
        'Akses Quiz tak terbatas',
        'Semua muratal termasuk Warsh',
        'Tafsir semua juz',
        'Menghafal semua juz',
        'Gratis akses Konten Belajar Al-Quran (Makroj dan Tahsin) **',
        'Simpan rekaman tak terbatas',
      ],
      defaultOpen: false,
    },
  ];
  return (
    <div className="w-full pt-2">
      <div className="w-full max-w-md p-2 mx-auto bg-[#fafafa] rounded-2xl">
        {dataSubscription.map((item, index) => (
          <Disclosure key={index} defaultOpen={item.defaultOpen}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 mb-2 text-sm font-medium text-left text-quranmemo-dark bg-quranmemo-secondary rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{item.name}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-quranmemo-dark`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                  {dataSubscription[index].text.map((text: any, index) => (
                    <div className="flex py-1" key={index}>
                      <div className="flex-none">
                        {createElement(ShieldCheckIcon, {
                          className: 'w-5 h-5',
                          'aria-hidden': true,
                        })}
                      </div>
                      <div className="flex-auto">
                        <p className="ml-2 text-xs">{text}</p>
                      </div>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};
