import { ChangeEvent, useState } from 'react';

export function Search({ autoSearch, fnCallback }: any) {
  const [keywords, setKeywords] = useState<string>('Al-Fatihah');
  const handleKeywordsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newKeywords = event.target.value;
    setKeywords(newKeywords);
    // console.log('newKeywords', newKeywords);
    fnCallback(newKeywords);
  };

  return (
    <div>
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Cari Surah:
      </label>
      <div className="flex rounded-md shadow-sm w-full">
        <input
          className="focus:z-10 shadow-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-sm border-gray-300 p-2"
          type="text"
          id="search"
          onChange={handleKeywordsChange}
          placeholder="Cari surah"
          // value={keywords}
        />
      </div>
    </div>
  );
}
