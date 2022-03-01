import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from '../ui/button/button';
import { surahList } from '../../lib/surah/surah-list';
import Link from 'next/link';

export function QuranForm({ data }: any) {
  const { id } = useRouter().query;
  const route = parseInt(id as string);
  const prev =
    route !== 1
      ? `/quran/${route - 1}?id=${route - 1}`
      : `/quran/${114}?id=${114}`;
  const next =
    route !== 114
      ? `/quran/${route + 1}?id=${route + 1}`
      : `/quran/${1}?id=${1}`;

  return (
    <div className="text-center py-4 text-gray-400 flex justify-between">
      <Link href={prev} as={prev} passHref prefetch={false} replace>
        <Button
          secondary
          className="w-full rounded-none rounded-l-lg text-xs h-8"
        >
          {React.createElement(ArrowLeftIcon, {
            className: 'h-4 mr-1',
          })}
          {route !== 1 ? surahList[route - 2].name : surahList[113].name}
        </Button>
      </Link>
      <Button secondary className="w-full rounded-none text-xs h-8">
        {data.name_latin}
      </Button>

      <Link href={next} as={next} passHref prefetch={false} replace>
        <Button
          secondary
          className="w-full rounded-none rounded-r-lg text-xs h-8"
        >
          {route !== 114 ? surahList[route].name : surahList[0].name}
          {React.createElement(ArrowRightIcon, {
            className: 'h-4 ml-1',
          })}
        </Button>
      </Link>
    </div>
  );
}
