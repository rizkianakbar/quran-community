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
  return (
    <PageSection>
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
