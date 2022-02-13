import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';

const tabClasses = (isActive?: boolean) => {
  return [
    'text-sm font-bold w-full text-gray-400 p-3',
    isActive
      ? 'border-b-2 border-teal-500 text-teal-400'
      : 'border-b-2 border-white',
    'hover:border-b-2 hover:border-teal-500 hover:text-teal-400',
  ];
};

const tabChildClasses = (isActive?: boolean) => {
  return [
    // give line right after the
    //     article:after {
    //     content: '';
    //     position: absolute;
    //     width: 100%;
    //     height: 1px; // suit your need
    //     background: black; // suit your need
    //     top: 100%;
    //     left: 0;
    // }
    'text-sm font-bold w-[30px] h-[30px] rounded-full mr-10 last:mr-0 relative after:article:after after:content[""] after:absolute after:w-[43px] after:h-[2px] after:bg-teal-500 after:top-1/2 after:left-full last:after:content[""] last:after:absolute last:after:w-full last:after:h-[0px] last:after:bg-white last:after:top-1/2 last:after:left-full',
    isActive
      ? 'border-2 border-teal-500 text-white bg-teal-400'
      : 'border-2 border-teal-500 text-teal-400',
    'hover:border-2 hover:border-teal-500',
  ];
};

export default function Tabs({ ayat, data }: any) {
  const router = useRouter();
  const { id, firstAyat, secondAyat } = router.query;
  const [isSelectedParent, setIsSelectedParent] = useState('Linier');
  const [isSelectedChild, setIsSelectedChild] = useState('#1');
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
        setIsSelectedParent('Rekam');
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

  return (
    <div className="w-full mx-auto">
      <div className="flex justify-center bg-white">{renderParentTab}</div>
      {isSelectedParent === 'Linier' && (
        <>
          <div className="flex justify-center bg-teal-100/40 p-2">
            <p className="text-sm text-teal-500">
              Menghafal Surah {data.name_latin} : {firstAyat}-{secondAyat}
            </p>
          </div>
          <div className="flex justify-center bg-white p-2">
            {renderChildTab}
          </div>
          {isSelectedChild === '#1' && (
            <div className="flex justify-center bg-teal-100/40 p-2">
              <p className="text-sm text-teal-500 text-center">
                Hafalkan dengan teliti target hafalan arabic dan terjemahannya,
                ulangi muratal sebanyak-banyaknya sampai hafal
              </p>
            </div>
          )}
          {isSelectedChild === '#2' && <div>Dua</div>}
          {isSelectedChild === '#3' && <div>Tiga</div>}
        </>
      )}
      {isSelectedParent === 'Puzzle' && (
        <div className="flex justify-center bg-white">Puzzle</div>
      )}
    </div>
  );
}
