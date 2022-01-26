import React from 'react';
import { HomePageSection } from './homepage-section';
import { HomePageEmergencyContactCTA } from './homepage-emergency-cta';
import { HomePageMenu } from './homepage-menu';
import Example from '../example';

export function HomePageStart() {
  return (
    <HomePageSection>
      <div className="px-4 py-4">
        <HomePageEmergencyContactCTA />
      </div>
      <div className="px-4">
        <HomePageMenu />
      </div>
      <div>
        <Example />
      </div>
    </HomePageSection>
  );
}
