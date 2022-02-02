import { BackButton } from '@/components/layout/back-button';
import { PageContent } from '@/components/layout/pages';
import { Page } from '@/components/layout/pages/page';
import { PageHeader } from '@/components/layout/pages/page-header';
import { Search } from '@/components/search';
import { SurahList } from '@/components/surah-list';

export default function quran() {
  const breadcrumbs = [
    {
      name: 'Al-Quran',
      href: '/quran',
      current: true,
    },
  ];

  const description =
    'Rasulullah shallallahu ‘alaihi wasallam pernah bersabda, ‘Bacalah Al-Qur’an. Sebab, ia akan datang memberikan syafaat pada hari Kiamat kepada pemilik (pembaca, pengamal)-nya,” (HR. Ahmad).';
  return (
    <Page>
      <PageHeader
        backButton={<BackButton href="/" />}
        breadcrumbs={breadcrumbs}
        description={description}
        title="Al-Quran"
      />
      <PageContent>
        <Search autoSearch />
        <SurahList />
      </PageContent>
    </Page>
  );
}
