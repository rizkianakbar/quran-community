import { Page, PageContent } from '@/components/layout/pages';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { paths } from '@/lib/surah/surah-list';
import { PageHeader } from '@/components/layout/pages/page-header';
import { BackButton } from '@/components/layout/back-button';
import { QuranDetails } from '@/components/quran-details';

export default function QuranDetail({ surah }: any) {
  const router = useRouter();
  const { id } = router.query;
  const data = JSON.parse(surah)[`${id}`];
  console.log(data);
  return (
    <Page>
      <PageHeader
        backButton={<BackButton href="/quran" />}
        breadcrumbs={[
          {
            name: 'Quran',
            href: '/quran',
          },
          {
            name: `${data.name_latin}`,
            href: `/quran/${id}`,
            current: true,
          },
        ]}
        description={data.name}
        title={data.name_latin}
      />
      <PageContent>
        <QuranDetails data={data} />
      </PageContent>
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const surah = await import(`../../../lib/surah/${id}.json`);

  return {
    props: {
      surah: JSON.stringify(surah),
    },
  };
};