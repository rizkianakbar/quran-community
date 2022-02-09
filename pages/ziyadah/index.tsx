import { BackButton } from '@/components/layout/back-button';
import { Page, PageContent } from '@/components/layout/pages';
import { PageHeader } from '@/components/layout/pages/page-header';
import { QuranSelect } from '@/components/quran-select';
import { Search } from '@/components/search';

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
    <Page>
      <PageHeader
        backButton={<BackButton href="/" />}
        breadcrumbs={breadcrumbs}
        description={description}
        title="Ziyadah"
      />
      <PageContent>
        <QuranSelect />
      </PageContent>
    </Page>
  );
}
