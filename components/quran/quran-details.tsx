import {
  BookmarkIcon,
  PlayIcon,
  PlusIcon,
  ShareIcon,
} from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Modal from '../ui/modal';

const calc = (input: any) => {
  let result = '';
  let num = input;
  for (let i = 0; i < 3; i++) {
    result = result + (num % 10);
    num = Math.floor(num / 10);
  }
  return result.split('').reverse().join('');
};

export function QuranDetails({ data }: any) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [indexAyah, setIndexAyah] = useState(0);
  const router = useRouter();
  const { text, translations } = data;
  const { id } = router.query;

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  const onClickPlay = (index: any) => {
    if (isAudioPlaying) {
      return;
    } else {
      setIsAudioPlaying(true);
      const verse = document.getElementsByClassName('p-5')[index];
      if (verse) {
        verse.classList.add('border-4');
        verse.classList.add('bg-[#E0EFEE]');
      }
      const surah = calc(id);
      const ayat = calc(index);
      const audioPath = `https://quranmemo.com/public/sound/Al_Afasy/${surah}${ayat}.mp3`;

      const audio = new Audio(audioPath);
      audio.play();
      audio.onended = () => {
        setIsAudioPlaying(false);
        if (verse) {
          verse.classList.remove('border-4');
          verse.classList.remove('bg-[#E0EFEE]');
        }
      };
    }
  };

  const onClickTafsir = (index: any) => {
    setIsOpen(true);
    setIndexAyah(index);
  };

  const buttonData = [
    {
      text: 'Play',
      icon: PlayIcon,
      onclick: 'play',
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
      onclick: 'tafsir',
    },
  ];

  const surahList = Object.keys(text).map((ayat: string, i: number) => {
    return (
      <>
        <div className="p-5" id={`verse-${id}`} key={ayat}>
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
                  {...(item.onclick === 'play'
                    ? {
                        onClick: () => {
                          onClickPlay(i + 1);
                        },
                      }
                    : item.onclick === 'tafsir'
                    ? {
                        onClick: () => {
                          onClickTafsir(i + 1);
                        },
                      }
                    : {})}
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
      <Modal
        isOpen={isOpen}
        onToggle={handleToogle}
        title={`Tafsir ${data.name_latin} : ${indexAyah}`}
        description={data.tafsir.id.kemenag.text[indexAyah]}
        button="Close"
      />
    </div>
  );
}