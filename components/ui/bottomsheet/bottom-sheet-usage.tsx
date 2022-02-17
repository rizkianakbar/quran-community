import { RSBS } from '@/components';
import React, { useEffect } from 'react';

import { BottomSheetProps } from './bottom-sheet-props';

// eslint-disable-next-line react/display-name
export const ReactSpringBottomSheetUsage = React.forwardRef(
  (
    { open, onReady, onDismiss, ...props }: BottomSheetProps,
    ref: RSBS.ForwardedRef
  ) => {
    // animate out on unmount
    console.log(props);

    useEffect(() => onDismiss, []);

    return (
      <RSBS.BottomSheet
        {...props}
        ref={ref}
        open={open}
        onDismiss={onDismiss}
        defaultSnap={({ snapPoints, lastSnap }) => lastSnap ?? snapPoints[1]}
        snapPoints={({ height, minHeight, maxHeight }) => [
          maxHeight - maxHeight / 5,
          Math.min(Math.max(height, minHeight), maxHeight * 0.525),
        ]}
        expandOnContentDrag
        header={props.title}
        footer={props.footer}
        style={{
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          '--rsbs-bg': '#fafafa',
          '--rsbs-max-w': '500px',
        }}
      >
        {props.content}
      </RSBS.BottomSheet>
    );
  }
);
