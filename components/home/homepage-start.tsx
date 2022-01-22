import React from 'react';
import { HomePageSection } from './homepage-section';
import { HomePageEmergencyContactCTA } from './homepage-emergency-cta';

export function HomePageStart() {
  return (
    <HomePageSection>
      <div className="px-4 py-6">
        <HomePageEmergencyContactCTA />
      </div>
      {/* <div className="px-4 py-6">
        <HomePageMenu />
      </div> */}
    </HomePageSection>
  );
}
