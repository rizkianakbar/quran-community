import { ArrowRightIcon } from '@heroicons/react/outline';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export function QuranForm({ data }: any) {
  const { id } = useRouter().query;
  const route = parseInt(id as string);
  const prev = `/quran/${route - 1}?id=${route - 1}`;
  const next = `/quran/${route + 1}?id=${route + 1}`;

  const btnData = [
    {
      id: 1,
      name: 'prev',
      icon: ArrowLeftIcon,
    },
    {
      id: 2,
      name: `${data.name_latin}`,
      icon: null,
    },
    {
      id: 3,
      name: 'next',
      icon: ArrowRightIcon,
    },
  ];
  const dataRendered = btnData.map((item) => {
    return (
      <Link key={item.id} href={item.name === 'next' ? next : prev}>
        <a
          key={item.id}
          className="border-2 py-1 px-5 border-gray-200 hover:bg-[#5EEAD3] hover:text-white hover:border-[#5EEAD3]"
        >
          {/* if icon exist then render icon else render text */}
          {item.icon
            ? React.createElement(item.icon, {
                className: 'h-4 inline-block mr-1',
              })
            : item.name}
        </a>
      </Link>
    );
  });

  return <div className="text-center p-2 text-gray-400">{dataRendered}</div>;
}
