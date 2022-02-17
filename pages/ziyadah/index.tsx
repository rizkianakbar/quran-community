import { PageContent } from '@/components/layout/pages';
import { QuranSelect } from '@/components/quran/quran-select';
import { surahList } from '../../lib/surah/surah-list';

export default function Ziyadah() {
  return (
    <section className="flex flex-col flex-1 py-4">
      <PageContent>
        <QuranSelect surahList={surahList} />
      </PageContent>
    </section>
  );
}
