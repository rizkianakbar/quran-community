export function QuranSelect() {
  return (
    <div>
      <select
        name="id"
        id="id"
        className="w-full h-10 px-4 py-2 bg-white border border-gray-300 rounded-lg border-teal-300"
      >
        <option value="1">1</option>
        <option value="2">2</option>
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
    </div>
  );
}
