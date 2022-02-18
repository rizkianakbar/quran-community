import { BackspaceIcon } from '@heroicons/react/solid';
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
        <Button className="w-full">Baca Al-Kahfi Sekarang</Button>
      </div>
      <div>
        <p className="mt-6 mb-2">{secondText}</p>
        <Button className="w-full">Hafalkan 10 Ayat awal</Button>
        <Button className="w-full mt-2 mb-6">Hafalkan 10 Ayat akhir</Button>
      </div>
    </>
  );
}
