import { BookmarkIcon, PlayIcon, ShareIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Modal from './ui/modal/modal';

const tabClasses = (isActive?: boolean) => {
  return [
    'text-sm font-bold w-full text-gray-400 p-3',
    isActive
      ? 'border-b-2 border-quranmemo-primary text-quranmemo-primary'
      : 'border-b-2 border-white',
    'hover:border-b-2 hover:border-quranmemo-primary hover:text-quranmemo-primary',
  ];
};

const tabChildClasses = (isActive?: boolean) => {
  return [
    'text-sm font-bold w-[30px] h-[30px] rounded-full mr-10 last:mr-0 relative after:article:after after:content[""] after:absolute after:w-[42px] after:h-[2px] after:bg-quranmemo-primary after:top-1/2 after:left-full last:after:content[""] last:after:absolute last:after:w-full last:after:h-[0px] last:after:bg-white last:after:top-1/2 last:after:left-full',
    isActive
      ? 'border border-quranmemo-primary text-white bg-quranmemo-primary'
      : 'border border-quranmemo-primary text-quranmemo-primary',
    'hover:border-2 hover:border-quranmemo-primary',
  ];
};

const btnClasses = (isActive?: boolean) => {
  return [
    'text-[9px] font-bold w-full mx-1 rounded py-1',
    isActive
      ? 'border border-quranmemo-primary bg-quranmemo-primary teal-white text-white'
      : 'border border-quranmemo-primary bg-white text-quranmemo-primary',
    'hover:bg-quranmemo-primary hover:text-white',
  ];
};

export default function Memorization({ ayat, data }: any) {
  const router = useRouter();
  const { id, firstAyat, secondAyat } = router.query;
  const [isSelectedParent, setIsSelectedParent] = useState('Linier');
  const [isSelectedChild, setIsSelectedChild] = useState('#1');
  const [isSelectedBtn, setIsSelectedBtn] = useState('');
  const [bluredAwal, setBluredAwal] = useState(false);
  const [bluredTengah, setBluredTengah] = useState(false);
  const [bluredAkhir, setBluredAkhir] = useState(false);
  const [bluredAwalAkhir, setBluredAwalAkhir] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [bluredAcak, setBluredAcak] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');
  const [indexWhatever, setIndexWhatever] = useState(1);

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };
  const [parenTab] = useState([
    {
      id: 1,
      title: 'Linier',
      onclick: () => {
        setIsSelectedParent('Linier');
      },
    },
    {
      id: 2,
      title: 'Rekam',
      onclick: () => {
        setIsOpen(true);
        setModalTitle('Rekam');
        setModalDesc('TODO: make this function work');
      },
    },
    {
      id: 3,
      title: 'Puzzle',
      onclick: () => {
        setIsSelectedParent('Puzzle');
      },
    },
  ]);

  const [childTab] = useState([
    {
      id: 1,
      title: '#1',
      onclick: () => {
        setIsSelectedChild('#1');
      },
    },
    {
      id: 2,
      title: '#2',
      onclick: () => {
        setIsSelectedChild('#2');
      },
    },
    {
      id: 3,
      title: '#3',
      onclick: () => {
        setIsSelectedChild('#3');
      },
    },
  ]);

  const btnData = [
    {
      id: 1,
      title: 'Awal',
      onclick: () => {
        setIsSelectedBtn('Awal');
        setBluredAwal(true);
        setBluredTengah(false);
        setBluredAkhir(false);
        setBluredAwalAkhir(false);
        setBluredAcak(false);
        if (isSelectedBtn === 'Awal') {
          setIsSelectedBtn('');
          setBluredAwal(false);
        }
      },
    },
    {
      id: 2,
      title: 'Tengah',
      onclick: () => {
        setIsSelectedBtn('Tengah');
        setBluredAwal(false);
        setBluredTengah(true);
        setBluredAkhir(false);
        setBluredAwalAkhir(false);
        setBluredAcak(false);
        if (isSelectedBtn === 'Tengah') {
          setIsSelectedBtn('');
          setBluredTengah(false);
        }
      },
    },
    {
      id: 3,
      title: 'Akhir',
      onclick: () => {
        setIsSelectedBtn('Akhir');
        setBluredAwal(false);
        setBluredTengah(false);
        setBluredAkhir(true);
        setBluredAwalAkhir(false);
        setBluredAcak(false);
        if (isSelectedBtn === 'Akhir') {
          setIsSelectedBtn('');
          setBluredAkhir(false);
        }
      },
    },
    {
      id: 4,
      title: 'Awal + Akhir',
      onclick: () => {
        setIsSelectedBtn('Awal + Akhir');
        setBluredAwal(false);
        setBluredTengah(false);
        setBluredAkhir(false);
        setBluredAwalAkhir(true);
        setBluredAcak(false);
        if (isSelectedBtn === 'Awal + Akhir') {
          setIsSelectedBtn('');
          setBluredAwalAkhir(false);
        }
      },
    },
    {
      id: 5,
      title: 'Acak',
      onclick: () => {
        setIsSelectedBtn('Acak');
        setBluredAwal(false);
        setBluredTengah(false);
        setBluredAkhir(false);
        setBluredAwalAkhir(false);
        setBluredAcak(true);
        if (isSelectedBtn === 'Acak') {
          setIsSelectedBtn('');
          setBluredAcak(false);
        }
      },
    },
  ];

  const buttonData = [
    {
      text: 'Putar 0x',
      icon: PlayIcon,
      onclick: 'play',
    },
    {
      text: 'Baca 0x',
      icon: ShareIcon,
    },
    {
      text: 'Tafsir',
      icon: BookmarkIcon,
      onclick: 'tafsir',
    },
  ];

  const renderParentTab = parenTab.map((tab, index) => {
    return (
      <button
        key={index}
        className={clsx(...tabClasses(isSelectedParent === tab.title))}
        onClick={tab.onclick}
      >
        {tab.title}
      </button>
    );
  });

  const renderChildTab = childTab.map((tab, index) => {
    return (
      <button
        key={index}
        className={clsx(...tabChildClasses(isSelectedChild === tab.title))}
        onClick={tab.onclick}
      >
        {tab.title}
      </button>
    );
  });

  const renderButton = btnData.map((btn, index) => {
    return (
      <button
        key={btn.id}
        onClick={btn.onclick}
        className={clsx(...btnClasses(isSelectedBtn === btn.title))}
      >
        {btn.title}
      </button>
    );
  });

  const renderAyat = ayat?.map((ayat: any, index: number) => {
    const idx = ayat.split(' ').length;

    return (
      <>
        <div className="p-1" key={index}>
          {isSelectedChild === '#1' || isSelectedChild === '#2' ? (
            <div className="quran text-2xl text-[#0d4643] text-right mt-5 mb-5 mr-3">
              <div className="flex flex-wrap flex-row-reverse">
                {ayat.split(' ').map((ayat: any, index: number) => {
                  return (
                    <div key={index} className=" my-1">
                      {bluredAwal && index !== 0 ? (
                        <span className="blur">{ayat}</span>
                      ) : bluredTengah && index !== 1 && index !== 2 ? (
                        <span className="blur">{ayat}</span>
                      ) : bluredAkhir && index !== idx - 1 ? (
                        <span className="blur">{ayat}</span>
                      ) : bluredAwalAkhir &&
                        index !== 0 &&
                        index !== idx - 1 ? (
                        <span className="blur">{ayat}</span>
                      ) : bluredAcak &&
                        index !== idx % 2 &&
                        index !== idx % 2 ? (
                        <span className="blur">{ayat}</span>
                      ) : (
                        ayat
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ''
          )}
          {isSelectedChild === '#1' || isSelectedChild === '#3' ? (
            <p className="text-gray-500 text-sm ml-2 my-2">
              <span>( {Number(firstAyat) + index} ) </span>
              {data.translations.id.text[index + 1]}
            </p>
          ) : (
            ''
          )}
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
                          // console.log('play');
                        },
                      }
                    : item.onclick === 'tafsir'
                    ? {
                        onClick: () => {
                          // console.log('tafsir');
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

  const renderPuzzle = ayat?.map((ayat: any, indexParent: number) => {
    const lengthAyat = ayat.split(' ').length;
    return (
      <>
        <div className="p-1" key={indexParent}>
          <div className="quran text-2xl text-[#0d4643] text-right   mt-5 mb-5 mr-3">
            <div className="flex flex-wrap flex-row-reverse">
              {ayat.split(' ').map((ayat: any, index: number) => {
                return (
                  <div
                    key={index}
                    className=" my-1 hidden"
                    id={`${indexParent}-${index.toString()}`}
                  >
                    {ayat}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          id={`${indexParent}`}
          className="bg-gray-100 text-center text-gray-400 text-sm divide-x divide-dashed divide-gray-300 p-3"
        >
          <span>
            {ayat.split(' ').map((ayat: any, index: number) => {
              return (
                <button
                  key={index}
                  className="px-2 mx-2 my-2 text-lg border-dashed border-quranmemo-primary border"
                  id={`choice-${indexParent.toString()}-${index.toString()}`}
                  onClick={() => {
                    console.log('length', lengthAyat);
                    console.log('indexWhatever', indexWhatever);
                    console.log(index + 1);

                    if (indexWhatever === index + 1) {
                      setIndexWhatever(indexWhatever + 1);
                      const classAyatHidden = document.getElementById(
                        `${indexParent?.toString()}-${index.toString()}`
                      )?.classList;
                      classAyatHidden?.remove('hidden');

                      const classChoiceHidden = document.getElementById(
                        `choice-${indexParent.toString()}-${index.toString()}`
                      )?.classList;
                      classChoiceHidden?.add('hidden');
                    } else {
                      setIsOpen(true);
                      setModalTitle('Salah');
                      setModalDesc('Pikir2 lagi cuyyyy');
                    }

                    if (indexWhatever === lengthAyat) {
                      console.log('done');
                      setIndexWhatever(1);
                      const classChoiceSection = document.getElementById(
                        `${indexParent?.toString()}`
                      )?.classList;
                      classChoiceSection?.add('hidden');
                    }
                  }}
                >
                  {ayat}
                </button>
              );
            })}
          </span>
        </div>
      </>
    );
  });

  const PageDescription = ({ desc }: any) => {
    return (
      <>
        <div className="flex justify-center bg-quranmemo-soft p-2">
          <p className="text-sm text-quranmemo-dark text-center">
            Menghafal Surah {data.name_latin} : {firstAyat}-{secondAyat} <br />
            <br />
            {desc}
            {/* Hafalkan dengan teliti target hafalan arabic dan terjemahannya,
            ulangi muratal sebanyak-banyaknya sampai hafal */}
          </p>
        </div>
      </>
    );
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex justify-center bg-white">{renderParentTab}</div>
      {isSelectedParent === 'Linier' ? (
        <>
          {isSelectedChild === '#1' ? (
            <PageDescription
              desc="Hafalkan dengan teliti target hafalan arabic dan terjemahannya,
              ulangi muratal sebanyak-banyaknya sampai hafal"
            />
          ) : isSelectedChild === '#2' ? (
            <PageDescription desc="Hafalkan dengan teliti target hafalan arabic" />
          ) : isSelectedChild === '#3' ? (
            <PageDescription desc="Fokuskan hafalan terjemahannya dan pelajari tafsir ayatnya" />
          ) : (
            ''
          )}
          <div className="flex justify-center bg-white p-2">
            {renderChildTab}
          </div>
          {isSelectedChild === '#1' && (
            <>
              <div className="flex justify-center bg-white p-2">
                {renderButton}
              </div>
              <div className="bg-white border-b-2 overflow-hidden rounded-b-md">
                <div className="divide-y divide-dashed divide-gray-300">
                  {renderAyat}
                </div>
              </div>
            </>
          )}
          {isSelectedChild === '#2' && (
            <>
              <div className="flex justify-center bg-white p-2">
                {renderButton}
              </div>
              <div className="bg-white border-b-2 overflow-hidden rounded-b-md">
                <div className="divide-y divide-dashed divide-gray-300">
                  {renderAyat}
                </div>
              </div>
            </>
          )}
          {isSelectedChild === '#3' && (
            <div className="bg-white border-b-2 overflow-hidden rounded-b-md">
              <div className="divide-y divide-dashed divide-gray-300">
                {renderAyat}
              </div>
            </div>
          )}
        </>
      ) : isSelectedParent === 'Puzzle' ? (
        <>
          <PageDescription desc="PUZZLE...!! Cocokan kata yang hilang secara berurutan" />
          <div className="bg-white border-b-2 overflow-hidden rounded-b-md">
            <div className="divide-y divide-dashed divide-gray-300">
              {renderPuzzle}
            </div>
          </div>
        </>
      ) : (
        ''
      )}
      <Modal
        isOpen={isOpen}
        onToggle={handleToogle}
        title={modalTitle}
        content={modalDesc}
        button="Close"
      />
    </div>
  );
}
