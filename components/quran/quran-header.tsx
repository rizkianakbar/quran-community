import { ExclamationCircleIcon } from '@heroicons/react/solid';
import React from 'react';

export function QuranHeader({ title }: any) {
  return (
    <>
      <div className="bg-[#E0EFEE] p-5 text-center text-[#20b2aa] rounded font-bold">
        <h1 className="mb-5">{title}</h1>
        {/* when hover bounce */}
        <button className="mb-5 bg-[#5EEAD3] px-3 py-1 text-white rounded mx-5 shadow-lg">
          {React.createElement(ExclamationCircleIcon, {
            className: 'h-5 inline-block mr-1',
          })}
          Muqodimah
        </button>
        <p className="block quran text-2xl">
          بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
      </div>
    </>
  );
}
