import { fetcher } from '@/utils/fetcher';
import {
  BookOpenIcon,
  ExternalLinkIcon,
  MicrophoneIcon,
  StarIcon,
  TrashIcon,
} from '@heroicons/react/solid';
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
  const [reload, setReload] = React.useState(0);
  React.useEffect(() => {
    const getDataHafalan = async () => {
      await fetcher('/api/get-hafalan').then((data: any) => {
        setData(data);
      });
    };
    getDataHafalan();
  }, [reload]);

  data.forEach((item: any, index: number) => {
    const newData = surahList.find((surah: any) => surah.id === item.id);
    if (newData) {
      data[index] = Object.assign(newData, item);
    }
  });
  const belumHafal = data.filter((item: any) => item.status === 0);

  const sudahHafal = data.filter((item: any) => item.status === 1);
  console.log(sudahHafal);

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

  return (
    <div className="w-full mx-auto">
      <div className="flex justify-center fixed w-full bg-white">
        {renderParentTab}
      </div>
      {isSelectedParent === 'Ziyadah' && (
        <>
          {belumHafal.length > 0 ? (
            <div className="text-gray-500 divide-y divide-gray-300 divide-dashed pt-12">
              {belumHafal.map((item: any) => {
                return (
                  <>
                    <div key={item.id} className="flex py-6 mx-4">
                      <span className="mr-auto text-sm ml-5">2</span>
                      <span className="text-sm text-center m-auto">
                        {item.name} : {item.startAyatId}-{item.endAyatId}
                      </span>
                      <button
                        onClick={async () => {
                          const body = {
                            id: item.id,
                            status: 1,
                          };
                          await fetcher('/api/set-sudah-hafal', {
                            user: body,
                          });
                          setReload(reload + 1);
                        }}
                        className="text-sm ml-auto border-2 border-quranmemo-primary cursor-pointer rounded-full w-5 h-5 mr-5 hover:bg-quranmemo-primary"
                      ></button>
                    </div>
                    <div>
                      <div className="flex text-center text-gray-400 text-sm bg-gray-100 p-2 text-xs">
                        <span className="mr-auto ml-8 cursor-pointer">
                          {React.createElement(ExternalLinkIcon, {
                            className: 'w-5 h-5 inline-block mr-1 mb-1',
                          })}
                          EDIT
                        </span>
                        <button
                          onClick={async () => {
                            const body = {
                              id: item.id,
                            };
                            await fetcher('/api/delete-hafalan', {
                              user: body,
                            });
                            setReload(reload + 1);
                          }}
                          className="m-auto cursor-pointer"
                        >
                          {React.createElement(TrashIcon, {
                            className: 'w-5 h-5 inline-block mr-1 mb-1',
                          })}
                          HAPUS
                        </button>
                        <span className="ml-auto mr-8 cursor-pointer">
                          {React.createElement(StarIcon, {
                            className: 'w-5 h-5 inline-block mr-1 mb-1',
                          })}
                          IN PROGRESS
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center text-gray-500 pt-14">
              <p>Belum ada data!</p>
            </div>
          )}
        </>
      )}
      {isSelectedParent === 'Dikoreksi' && (
        <div className="flex justify-center text-gray-500 pt-14">
          <p>Belum ada data!</p>
        </div>
      )}
      {isSelectedParent === 'Sudah Hafal' && (
        <>
          {sudahHafal.length > 0 ? (
            <div className="text-gray-500 divide-y divide-gray-300 divide-dashed pt-12">
              {sudahHafal.map((item: any) => {
                return (
                  <>
                    <div key={item.id} className="flex py-6 mx-4">
                      <span className="mr-auto text-sm ml-5">2</span>
                      <span className="text-sm text-center m-auto">
                        {item.name} : {item.startAyatId}-{item.endAyatId}
                      </span>
                      <a
                        onClick={async () => {
                          const body = {
                            id: item.id,
                            status: 0,
                          };
                          await fetcher('/api/set-sudah-hafal', {
                            user: body,
                          });
                          setReload(reload + 1);
                        }}
                        className="text-sm ml-auto border-2 border-quranmemo-primary cursor-pointer rounded-full w-5 h-5 mr-5 hover:bg-quranmemo-primary"
                      ></a>
                    </div>
                    <div>
                      <div className="flex text-center text-gray-400 text-sm bg-gray-100 p-2 text-xs">
                        <span className="mr-auto ml-8 cursor-pointer">
                          {React.createElement(ExternalLinkIcon, {
                            className: 'w-5 h-5 inline-block mr-1 mb-1',
                          })}
                          EDIT
                        </span>
                        <span className="m-auto cursor-pointer">
                          {React.createElement(TrashIcon, {
                            className: 'w-5 h-5 inline-block mr-1 mb-1',
                          })}
                          HAPUS
                        </span>
                        <span className="ml-auto mr-8 cursor-pointer">
                          {React.createElement(MicrophoneIcon, {
                            className: 'w-5 h-5 inline-block mr-1 mb-1',
                          })}
                          REKAM
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center text-gray-500 pt-14">
              <p>Belum ada data!</p>
            </div>
          )}
        </>
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
