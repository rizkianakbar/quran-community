import {
  BookmarkIcon,
  PlayIcon,
  PlusIcon,
  ShareIcon,
} from '@heroicons/react/solid';
import React from 'react';

export function QuranDetails({ data }: any) {
  const { text, translations } = data;

  const buttonData = [
    {
      text: 'Play',
      icon: PlayIcon,
    },
    {
      text: 'Share',
      icon: ShareIcon,
    },
    {
      text: 'Memorize',
      icon: PlusIcon,
    },
    {
      text: 'Tafsir',
      icon: BookmarkIcon,
    },
  ];

  const buttonAyat = buttonData.map((item) => {
    return (
      <span key={item.text}>
        <button className="px-2 hover:bg-[#5EEAD3] hover:text-white">
          {React.createElement(item.icon, {
            className: 'h-5 inline-block mr-1',
          })}
          {item.text}
        </button>
      </span>
    );
  });

  const surahList = Object.keys(text).map((ayat: string, i: number) => {
    return (
      <>
        <div className="p-5" key={ayat}>
          <p className="quran text-2xl text-[#0d4643] text-right mb-4">
            {text[ayat]}
          </p>
          <p className="text-gray-500 text-sm">
            <span>( {i + 1} ) </span>
            {translations.id.text[i + 1]}
          </p>
        </div>
        <div className="bg-gray-100 text-center text-gray-400 text-sm divide-x divide-dashed divide-gray-300">
          {buttonAyat}
        </div>
      </>
    );
  });
  return (
    <div className="bg-white shadow overflow-hidden rounded-md">
      <div className="divide-y divide-dashed divide-gray-300">{surahList}</div>
    </div>
  );
}
