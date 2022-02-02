import { Page } from '@/components/layout/pages';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { paths } from '@/lib/surah/surah-list';

export default function QuranDetail({ surah }: any) {
  const router = useRouter();
  const { id } = router.query;
  const data = JSON.parse(surah)[`${id}`];
  console.log(data);
  return (
    <Page>
      <h1>SURAT KE {data.name_latin}</h1>
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
