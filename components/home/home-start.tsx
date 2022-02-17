import Ziyadah from '@/pages/ziyadah';
import React, { useState } from 'react';
import { Option, OptionSwitch } from '..';
import Tabs from '../ui/tabs';
import { HomeAdds } from './home-adds';
import { HomeMenu } from './home-menu';
import { HomeSection } from './home-section';

export function HomePageStart() {
  return (
    <HomeSection>
      <div className="px-4 py-4">
        <HomeAdds />
      </div>
      <div className="px-4">
        <HomeMenu />
      </div>
      <div>
        <Tabs />
      </div>
    </HomeSection>
  );
}
