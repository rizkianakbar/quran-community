export const Tafsir = ({ data }: any) => {
  const haha = JSON.stringify(data);

  const result = haha
    ? haha
        .replace(/\\n/g, '<br />')
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "'")
        .replace(/\./g, '. ')
        .replace(/^"/, '')
        .replace(/"$/, '')
    : '';

  return (
    <div
      dangerouslySetInnerHTML={{ __html: result }}
      className="text-gray-500 text-sm px-4 py-2"
    />
  );
};
