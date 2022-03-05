import { fetcher } from '@/utils/fetcher';
import { BookOpenIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import React from 'react';
import { Button } from './ui/button/button';
import { surahList } from '../lib/surah/surah-list';
const tabClasses = (isActive?: boolean) => {
  return [
    'text-sm font-bold w-full text-gray-400 p-3',
    isActive
      ? 'border-b-2 border-quranmemo-primary text-quranmemo-primary'
      : 'border-b-2 border-gray-300',
    'hover:border-b-2 hover:border-quranmemo-primary hover:text-quranmemo-primary',
  ];
};

export function Hafalan({ callback }: { callback: any }) {
  const [isSelectedParent, setIsSelectedParent] = React.useState('Ziyadah');
  const [data, setData] = React.useState<any>([]);
  const [hafalan, setHafalan] = React.useState([]);
  React.useEffect(() => {
    const getDataHafalan = async () => {
      await fetcher('/api/get-hafalan').then((data: any) => {
        setData(data);
      });
    };
    getDataHafalan();
  }, []);

  data.forEach((item: any, index: number) => {
    const newData = surahList.find((surah: any) => surah.id === item.id);
    const assignNewData: any = Object.assign(newData, item);
    data[index] = assignNewData;
  });

  const [parenTab] = React.useState([
    {
      id: 1,
      title: 'Ziyadah',
      onclick: () => {
        setIsSelectedParent('Ziyadah');
      },
    },
    {
      id: 2,
      title: 'Dikoreksi',
      onclick: () => {
        setIsSelectedParent('Dikoreksi');
      },
    },
    {
      id: 3,
      title: 'Sudah Hafal',
      onclick: () => {
        setIsSelectedParent('Sudah Hafal');
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
  // console.log(data);
  // console.log(surahList);

  return (
    <div className="w-full mx-auto">
      <div className="flex justify-center fixed w-full bg-white">
        {renderParentTab}
      </div>
      {isSelectedParent === 'Ziyadah' && (
        <>
          {data.length > 0 ? (
            <div className="text-gray-500 divide-y divide-gray-300 divide-dashed pt-10">
              {data.map((item: any) => {
                return (
                  <div key={item.id} className="flex justify-center py-6 mx-4">
                    <span className="text-sm">
                      {item.name} : {item.startAyatId}-{item.endAyatId}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center mt-3 text-gray-500">
              <p>Belum ada data!</p>
            </div>
          )}
        </>
      )}
      {isSelectedParent === 'Dikoreksi' && (
        <div className="flex justify-center mt-3 text-gray-500 ">
          <p>Belum ada data!</p>
        </div>
      )}
      {isSelectedParent === 'Sudah Hafal' && (
        <div className="flex justify-center mt-3 text-gray-500">
          <p>Belum ada data!</p>
        </div>
      )}
      <div className="fixed bottom-0 w-full h-16">
        <div className="flex justify-center">
          <Button
            secondary
            className="px-4"
            onClick={() => {
              callback();
            }}
            icon={BookOpenIcon}
          >
            Hafalan Baru
          </Button>
        </div>
      </div>
    </div>
  );
}
