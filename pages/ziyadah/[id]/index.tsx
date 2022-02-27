import { useRouter } from 'next/router';
import { paths } from '@/lib/surah/surah-list';
import { GetStaticProps } from 'next';
import { PageSection } from '@/components/layout/pages';
import Memorization from '@/components/memorization';

export default function ZiyadahDetail({ surah }: any) {
  const router = useRouter();
  const { id, firstAyat, secondAyat } = router.query;

  let ayat;
  const data = JSON.parse(surah)[`${id}`];
  if (data && firstAyat && secondAyat) {
    const first: number = +firstAyat;
    const second: number = +secondAyat;

    const ayatt = Object.entries(data.text)
      .slice(first - 1, second)
      .map((entry) => entry[1]);

    ayat = ayatt;
  }

  return (
    <PageSection>
      <div className="flex flex-col flex-1 pb-12">
        <div className="w-full sm:max-w-xl mx-auto">
          <Memorization ayat={ayat} data={data} />
        </div>
      </div>
    </PageSection>
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

  return {
    props: {
      surah: JSON.stringify(surah),
    },
  };
};
