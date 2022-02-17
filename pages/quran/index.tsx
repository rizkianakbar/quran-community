import { BackButton } from '@/components/layout/back-button';
import { PageContent } from '@/components/layout/pages';
import { Page } from '@/components/layout/pages/page';
import { PageHeader } from '@/components/layout/pages/page-header';
import { Search } from '@/components/search';
import { SurahList } from '@/components/surah-list';
import { useState } from 'react';

export default function Quran() {
  const [callback, setCallback] = useState<string>('');
  const breadcrumbs = [
    {
      name: 'Al-Quran',
      href: '/quran',
      current: true,
    },
  ];

  const fnCallback = (data: any) => {
    setCallback(data);
  };

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
        <Search autoSearch fnCallback={fnCallback} />
        <SurahList dataFiltered={callback} />
      </PageContent>
    </Page>
  );
}
