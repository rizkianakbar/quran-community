import { PageContent, PageSection } from '@/components/layout/pages';
import { Button } from '@/components/ui/button/button';
import { BookOpenIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import React from 'react';

const tabClasses = (isActive?: boolean) => {
  return [
    'text-sm font-bold w-full text-gray-400 p-3',
    isActive
      ? 'border-b-2 border-quranmemo-primary text-quranmemo-primary'
      : 'border-b-2 border-gray-300',
    'hover:border-b-2 hover:border-quranmemo-primary hover:text-quranmemo-primary',
  ];
};

function Notifications({ callback }: { callback: any }) {
  const [isSelectedParent, setIsSelectedParent] = React.useState('Koreksi');
  const [parenTab] = React.useState([
    {
      id: 1,
      title: 'Koreksi',
      onclick: () => {
        setIsSelectedParent('Koreksi');
      },
    },
    {
      id: 2,
      title: 'Updates',
      onclick: () => {
        setIsSelectedParent('Updates');
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
    <PageSection>
      <div className="bg-white">
        <PageContent>
          <div className="w-full mx-auto h-[83vh]">
            <div className="flex justify-center">{renderParentTab}</div>
            <div className="flex justify-center mt-[250px]">
              Belum ada update!
            </div>

            {/* make a div that stick to the bottom of the screen*/}
            <div className="fixed bottom-0 w-full h-16">
              {/* make a button in the right position */}
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
        </PageContent>
      </div>
    </PageSection>
  );
}
export default Notifications;
