import { useRouter } from 'next/router';
import { paths } from '@/lib/surah/surah-list';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Page, PageContent } from '@/components/layout/pages';
import { PageHeader } from '@/components/layout/pages/page-header';
import { BackButton } from '@/components/layout/back-button';

export default function ZiyadahDetail({ surah }: any) {
  const router = useRouter();
  const { id, firstAyat, secondAyat } = router.query;

  let ayat;
  const data = JSON.parse(surah)[`${id}`];
  if (data && firstAyat && secondAyat) {
    const first: number = +firstAyat;
    const second: number = +secondAyat;
    console.log(first, second);

    const ayatt = Object.entries(data.text)
      .slice(first - 1, second)
      .map((entry) => entry[1]);

    ayat = ayatt;
  }
  console.log(ayat);

  const renderAyat = ayat?.map((ayat: any, index) => {
    return (
      <div key={index}>
        <p>{ayat}</p>
      </div>
    );
  });

  return (
    <Page>
      <PageHeader
        backButton={<BackButton href="/quran" />}
        breadcrumbs={[
          {
            name: 'Ziyadah',
            href: '/ziyadah',
          },
          {
            name: `${data.name_latin}`,
            href: `/ziyadah/${id}`,
            current: true,
          },
        ]}
        description=""
        title=""
      />
      <PageContent>
        {/* <div className="bg-white rounded shadow-md">{renderAyat}</div> */}

        <div className="bg-white shadow overflow-hidden rounded-md">
          <div className="divide-y divide-dashed divide-gray-300">
            {renderAyat}
          </div>
        </div>
      </PageContent>
    </Page>
  );
}

export const getStaticPaths = async () => {
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const surah = await import(`../../../lib/surah/${id}.json`);

  // console.log(JSON.stringify(surah));

  return {
    props: {
      surah: JSON.stringify(surah),
    },
  };
};
