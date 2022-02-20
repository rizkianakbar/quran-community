import { ExclamationCircleIcon } from '@heroicons/react/solid';
import React from 'react';

export function QuranHeader({ title }: any) {
  return (
    <>
      <div className="bg-quranmemo-soft p-5 text-center text-quranmemo-primary rounded-lg shadow font-bold">
        <h1 className="mb-5">{title}</h1>
        {/* when hover bounce */}
        <button className="mb-5 bg-quranmemo-primary px-3 py-1 text-white rounded mx-5">
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
