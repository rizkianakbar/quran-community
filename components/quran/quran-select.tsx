import Link from 'next/link';
import { useState } from 'react';

export function QuranSelect({ surahList }: any) {
  const [selectedSurah, setSelectedSurah] = useState(1);
  const [firstAyat, setFirstAyat] = useState(null);
  const [secondAyat, setSecondAyat] = useState(null);

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
        className="w-full h-10 px-4 py-2 bg-white border border-gray-300 rounded-lg border-teal-300 text-gray-400"
        onChange={onChangeSurah}
      >
        {option}
      </select>
      <div className="flex justify-between md:justify-center xs:justify-start text-center mt-2 border rounded-lg border-teal-300">
        <input
          className="rounded-l-lg w-full text-center"
          type="text"
          placeholder="Ayat"
          onChange={onChangeFirstAyat}
        />
        <span className="text-white bg-teal-300 w-full text-sm py-3">
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
      >
        <a>
          <div className="bg-teal-300 mt-2 rounded-lg py-2 text-center text-white">
            Hafalkan
          </div>
        </a>
      </Link>
    </>
  );
}
