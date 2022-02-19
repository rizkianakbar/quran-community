import { BookOpenIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import React from 'react';
import { Button } from './ui/button/button';

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
      <div className="flex justify-center">{renderParentTab}</div>
      <div className="flex justify-center mt-3">
        <p>Belum ada data!</p>
      </div>

      {/* make a div that stick to the bottom of the screen*/}
      <div className="fixed bottom-0 w-full h-16">
        {/* make a button in the right position */}
        <div className="flex justify-center">
          <Button
            className=""
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
