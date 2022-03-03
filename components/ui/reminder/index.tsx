import { BackspaceIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';
import { Button } from '../button/button';

export function Reminder() {
  const [isOpen, setIsOpen] = React.useState(false);

  const firstText =
    'Sudahkan baca Al-Kahfi di hari Jumat ini? jika belum yuk kita baca';

  const secondText =
    'Atau sudahkah hafal 10 ayat awal atau 10 ayat terakhri Al-Kahfi untuk terhindar Fitnah Dajjal??? yuk kita hafalin!';

  return (
    <>
      <div>
        <p className="mb-2">{firstText}</p>
        <Link
          href={{
            pathname: '/quran/18',
            query: {
              id: 18,
            },
          }}
          passHref
        >
          <Button secondary className="w-full">
            Baca Al-Kahfi Sekarang
          </Button>
        </Link>
      </div>
      <div>
        <p className="mt-6 mb-2">{secondText}</p>
        <Link
          href={{
            pathname: '/ziyadah/18',
            query: {
              id: 18,
              firstAyat: 1,
              secondAyat: 10,
            },
          }}
          passHref
        >
          <Button secondary className="w-full">
            Hafalkan 10 Ayat awal
          </Button>
        </Link>
        <Link
          href={{
            pathname: '/ziyadah/18',
            query: {
              id: 18,
              firstAyat: '100',
              secondAyat: '110',
            },
          }}
          passHref
        >
          <Button className="w-full mt-2 mb-6" secondary>
            Hafalkan 10 Ayat akhir
          </Button>
        </Link>
      </div>
    </>
  );
}
