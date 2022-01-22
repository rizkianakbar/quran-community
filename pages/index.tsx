import { HomepageHeader } from '@/components/home/homepage-header';
import { Page } from '@/components/layout/pages/page';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Page>
      <HomepageHeader />
    </Page>
  );
};

export default Home;
