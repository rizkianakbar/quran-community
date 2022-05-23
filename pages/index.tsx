import { HomeContent } from '@/components/home/home-content';
import { HomeHeader } from '@/components/home/home-header';
import { HomePageStart } from '@/components/home/home-start';
import { PageSection } from '@/components/layout/pages';
import { Container } from '@/components/layout/container';
import type { NextPage } from 'next';
import { Button } from '@/components/ui/button/button';
import { fetcher } from '@/utils/fetcher';
import React from 'react';

const Home: NextPage = () => {
  React.useEffect(() => {
    const getDataHafalan = async () => {
      await fetcher('/api/get-comment').then((data: any) => {
        console.log(data);
      });
    };
    getDataHafalan();
  }, []);
  return (
    <PageSection>
      <Button
        secondary
        onClick={() => {
          const data = {
            name: 'ini terbaru',
            comment: 'asdasdas',
          };

          fetcher('/api/set-comment', { user: data });
        }}
      >
        comment
      </Button>

      <Button
        secondary
        onClick={() => {
          const data = fetcher('/api/get-comment');
          console.log(data);
        }}
      >
        Show comment
      </Button>
      <HomeHeader />
      <HomeContent>
        <Container className="space-y-3">
          <HomePageStart />
        </Container>
      </HomeContent>
    </PageSection>
  );
};

export default Home;
