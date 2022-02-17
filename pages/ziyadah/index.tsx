import { PageContent, PageSection } from '@/components/layout/pages';
import { PageHeader } from '@/components/layout/pages/page-header';
import { QuranSelect } from '@/components/quran/quran-select';
import { ButtonBack } from '@/components/ui/button-back';
import { surahList } from '../../lib/surah/surah-list';

export default function Ziyadah() {
  const breadcrumbs = [
    {
      name: 'Ziyadah',
      href: '/ziyadah',
      current: true,
    },
  ];
  const description =
    'Tentukan surah dan ayat yang Anda ingin hafal, di sarankan target hafalan jangan terlalu panjang, perkirakan sesuai kemampuan hafalan Anda.';

  return (
    <PageSection>
      <PageHeader
        backButton={<ButtonBack href="/" />}
        breadcrumbs={breadcrumbs}
        description={description}
        title="Ziyadah"
      />
      <PageContent>
        <QuranSelect surahList={surahList} />
      </PageContent>
    </PageSection>
  );
}
