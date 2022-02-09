export function QuranSelect({ surahList }: any) {
  const option = surahList.map((item: any) => {
    return (
      <option key={item.id} value={item.name}>
        {item.name}
      </option>
    );
  });

  return (
    <>
      <select
        name="id"
        id="id"
        className="w-full h-10 px-4 py-2 bg-white border border-gray-300 rounded-lg border-teal-300 text-gray-400"
      >
        {option}
      </select>
      <div className="flex justify-between md:justify-center xs:justify-start text-center mt-2 border rounded-lg border-teal-300">
        <input
          className="rounded-l-lg w-full text-center"
          type="text"
          placeholder="Ayat"
        />
        <span className="text-white bg-teal-400 w-full text-sm py-3">
          Sampai Ayat
        </span>
        <input
          className="rounded-r-lg w-full text-center"
          type="text"
          placeholder="Ayat"
        />
      </div>
      <button className="w-full mt-2 h-10 px-4 py-2 bg-teal-400 text-white rounded-lg border-teal-400 text-sm">
        Hafalkan
      </button>
    </>
  );
}
