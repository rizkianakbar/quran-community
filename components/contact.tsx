import { MailIcon } from '@heroicons/react/solid';
import React from 'react';
import { Button } from './ui/button/button';
import { WhatsAppIcon } from './ui/icons';

export function Contact() {
  const firstText =
    'Jika ada masukan dan ide untuk dakwah, ada potongan ayat atau muratal yang salah ataupun bug bisa kontak kami di';

  const secondText =
    "Kami mengharapkan ide terbaik dari antum semua untuk berjuang bersama-sama meraih kebaikan dan ridho Allah Ta'ala untuk membuat aplikasi ini menjadi lebih baik, Allah Ta'ala pasti akan membalas kebaikan meski sebesar dzarah. Mari bersama-sama berlomba-lomba dalam kebaikan.";

  return (
    <>
      <div>
        <p className="mb-2">{firstText}</p>
        <Button secondary className="w-full mb-3" icon={MailIcon}>
          <a href="mailto:quranmemo.id@gmail.com">quranmemo.id@gmail.com</a>
        </Button>

        <Button secondary className="w-full" icon={WhatsAppIcon}>
          <a href="https://api.whatsapp.com/send?phone=6285956331813">
            085956331813
          </a>
        </Button>
        <p className="mt-4 mb-2">{secondText}</p>
      </div>
    </>
  );
}
