import {
  BookmarkIcon,
  PlayIcon,
  PlusIcon,
  ShareIcon,
} from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export function QuranDetails({ data }: any) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const { text, translations } = data;
  const router = useRouter();
  const { id } = router.query;

  const onClickPlay = (index: any) => {
    console.log(isAudioPlaying);
    if (isAudioPlaying) {
      return;
    } else {
      setIsAudioPlaying(true);
      const audioPath = `https://quranmemo.com/public/sound/Al_Afasy/00${id}00${index}.mp3`;
      const audio = new Audio(audioPath);
      audio.play();
      audio.onended = () => {
        setIsAudioPlaying(false);
      };
    }
  };

  const buttonData = [
    {
      text: 'Play',
      icon: PlayIcon,
      onclick: true,
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

  // const buttonAyat = buttonData.map((item, index) => {
  //   return (

  //   );
  // });

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
          {buttonData.map((item, index) => {
            return (
              <span key={item.text}>
                <button
                  className="px-2 hover:bg-[#5EEAD3] hover:text-white"
                  // check if onclick is true and then add onclick event
                  // and give parameter onclickplay

                  {...(item.onclick
                    ? {
                        onClick: () => {
                          onClickPlay(i + 1);
                        },
                      }
                    : {})}
                  // onClick={item.onclick ? onClickPlay : }
                >
                  {React.createElement(item.icon, {
                    className: 'h-5 inline-block mr-1',
                  })}
                  {item.text}
                </button>
              </span>
            );
          })}
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
