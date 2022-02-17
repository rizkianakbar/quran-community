import React, { useState } from 'react';
import { Option, OptionSwitch } from '..';
import Tabs from '../ui/tabs';
import { HomeAdds } from './home-adds';
import { HomeMenu } from './home-menu';
import { HomeSection } from './home-section';

export function HomePageStart() {
  const [open, setOpen] = useState(false);

  const [option, setOption] = useState<Option>(Option.ReactSpringBottomSheet);

  const onReady = () => setOpen(true);

  const onDismiss = () => setOpen(false);
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
        <button onClick={() => (open ? onDismiss : onReady)()}>
          {open ? 'Close' : 'Open'}
        </button>
        <OptionSwitch
          option={option}
          open={open}
          onReady={onReady}
          onDismiss={onDismiss}
          title="title"
          content="content"
          footer="footer"
        />
      </div>
    </HomeSection>
  );
}
