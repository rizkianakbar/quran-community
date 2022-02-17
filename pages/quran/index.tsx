import { Search } from '@/components';
import { PageContent, PageSection } from '@/components/layout/pages';
import { PageHeader } from '@/components/layout/pages/page-header';
import { SurahList } from '@/components/quran/quran-surah-list';
import { ButtonBack } from '@/components/ui/button-back';
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
    <PageSection>
      <PageHeader
        backButton={<ButtonBack href="/" />}
        breadcrumbs={breadcrumbs}
        description={description}
        title="Al-Quran"
      />
      <PageContent>
        <Search autoSearch fnCallback={fnCallback} />
        <SurahList dataFiltered={callback} />
      </PageContent>
    </PageSection>
  );
}
