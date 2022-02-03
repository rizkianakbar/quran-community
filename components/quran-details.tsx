export function QuranDetails({ data }: any) {
  const { text, translations } = data;
  console.log(text[1]);
  console.log(translations.id.text[1]);
  const surahList = Object.keys(text).map((ayat: string, i: number) => {
    return (
      <div className="p-5" key={i}>
        {/* make the span in right */}
        <p className="text-3xl font-sans text-[#0d4643] text-right mb-4">
          {text[ayat]}
        </p>
        <p className="text-gray-500 text-sm">
          <span>( {i + 1} ) </span>
          {translations.id.text[i + 1]}
        </p>
      </div>
    );
  });
  return (
    <div className="bg-white shadow overflow-hidden rounded-md">
      <div className="divide-y divide-dashed divide-gray-300">{surahList}</div>
    </div>
  );
}
