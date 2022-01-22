import { HomePageContent } from '@/components/home/homepage-content';
import { HomepageHeader } from '@/components/home/homepage-header';
import { HomePageStart } from '@/components/home/homepage-start';
import { Page } from '@/components/layout/pages/page';
import { Container } from '@/components/ui/container';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Page>
      <HomepageHeader />
      <HomePageContent>
        <Container className="space-y-3">
          <HomePageStart />
        </Container>
      </HomePageContent>
    </Page>
  );
};

export default Home;
