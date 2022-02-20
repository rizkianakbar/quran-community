import { PageContent, PageSection } from '@/components/layout/pages';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { paths } from '@/lib/surah/surah-list';
import { PageHeader } from '@/components/layout/pages/page-header';
import { QuranDetails } from '@/components/quran/quran-details';
import { ButtonBack } from '@/components/ui/button/button-back';
import { QuranForm } from '@/components/quran/quran-form';
import { QuranHeader } from '@/components/quran/quran-header';

export default function QuranDetail({ surah }: any) {
  const router = useRouter();
  const { id } = router.query;
  const data = JSON.parse(surah)[`${id}`];
  const title = `${id}. Surah ${data.name_latin}`;

  return (
    <PageSection>
      <PageHeader
        backButton={<ButtonBack href="/quran" />}
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
        description=""
        title=""
      />
      <PageContent>
        <QuranHeader title={title} />
        <QuranForm data={data} />
        <QuranDetails data={data} />
        <QuranForm data={data} />
      </PageContent>
    </PageSection>
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
