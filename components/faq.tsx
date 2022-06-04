import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

export const FAQ = () => {
  const dataSubscription = [
    {
      name: 'Sudah bayar lewat pulsa tapi belum aktif?',
      text: 'Konfirmasi manual terlebih dahulu, sistem kami belum bisa mengaktifasi secara otomatis',
      defaultOpen: true,
    },
    {
      name: 'Bagaimana cara untuk konformasi?',
      text: '- Ketika app terbuka pertama kali muncul popup atau',
      text2:
        '- Buka Menu terus klik "Berlangganan" akan muncul popup di popup itu klik "Klik disini" akan di arahkan kehalaman tagihan, dan lakukan konfirmasi jika sudah membayar atau potong pulsa, jangan lupa untuk kirimkan bukti transfer',
      defaultOpen: false,
    },
    {
      name: 'Sudah bayar konfirmasi tapi kok lama ya aktifnya?',
      text: 'Tunggu 1x24 jam, atau jika ingin cepat kontak lewat WA',
      defaultOpen: false,
    },
    {
      name: 'Aplikasi Al-Quran kok berbayar?',
      text: 'Hasil dari yang berlangganan akan dipergunakan untuk biaya operasional tiap bulan dan infak untuk dakwah menghafal Al-Quran',
      defaultOpen: false,
    },
    {
      name: 'Kok tidak bisa merekam?',
      text: 'Pastikan menggunakan aplikasi "QuranMemo Community" jangan menggunakan aplikasi "Quranmemo", cari di playstore.',
      defaultOpen: false,
    },
    {
      name: 'Sudah pakai aplikasi "Quranmemo Community" kok masih tidak bisa merekam?',
      text: 'Dibeberapa HP memang ada masalah terutama di HP vivo, karena recorder app nya beda dengan kebanyakan recorder app yang HP android kebanyakan',
      defaultOpen: false,
    },
    {
      name: 'Apakah aplikasi QuranMemo harus terus terkoneksi ke internet?',
      text: 'Iya betul, kami menggunakan sistem streaming dan harus terkoneksi internet.',
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
                  <span className="max-w-xs">{item.name}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } min-w-5 min-h-5 h-5 w-5 text-quranmemo-dark`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                  <div className="text-sm">
                    <p className="py-2">{item.text}</p>
                    <p>{item?.text2}</p>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};
