import { fetcher } from '@/utils/fetcher';
import { Prisma } from '@prisma/client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button/button';

export function QuranSelect({ surahList }: any) {
  const [selectedSurah, setSelectedSurah] = useState(1);
  const [firstAyat, setFirstAyat] = useState(0);
  const [secondAyat, setSecondAyat] = useState(0);
  const { data: session } = useSession();

  const option = surahList.map((item: any) => {
    return (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    );
  });

  const onChangeSurah = (e: any) => {
    setSelectedSurah(e.target.value);
  };

  const onChangeFirstAyat = (e: any) => {
    setFirstAyat(e.target.value);
  };

  const onChangeLastAyat = (e: any) => {
    setSecondAyat(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <select
        name="id"
        id="id"
        className="w-full h-10 px-4 py-2 bg-white border border-quranmemo-primary rounded-lg border-quranmemo-primary text-gray-400"
        onChange={onChangeSurah}
      >
        {option}
      </select>
      <div className="flex justify-between md:justify-center xs:justify-start text-center mt-2 border rounded-lg border-quranmemo-primary">
        <input
          className="rounded-l-lg w-full text-center"
          type="text"
          placeholder="Ayat"
          onChange={onChangeFirstAyat}
        />
        <span className="text-white bg-quranmemo-primary w-full text-sm py-3">
          Sampai Ayat
        </span>
        <input
          className="rounded-r-lg w-full text-center"
          type="text"
          placeholder="Ayat"
          onChange={onChangeLastAyat}
        />
      </div>
      <Link
        href={{
          pathname: `/ziyadah/${selectedSurah}`,
          query: {
            id: selectedSurah,
            firstAyat,
            secondAyat,
          },
        }}
        passHref
      >
        <Button
          className="w-full mt-2"
          primary
          onClick={async () => {
            const body = {
              email: session?.user?.email as string,
              surahId: Number(selectedSurah),
              startAyatId: Number(firstAyat),
              endAyatId: Number(secondAyat),
              status: Number(0),
            };
            await fetcher('/api/set-hafalan', { user: body });
          }}
        >
          Hafalkan
        </Button>
      </Link>
    </>
  );
}
