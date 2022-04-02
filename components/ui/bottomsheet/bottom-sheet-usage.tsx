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
    useEffect(() => onDismiss, []);

    return (
      <RSBS.BottomSheet
        {...props}
        ref={ref}
        open={open}
        onDismiss={onDismiss}
        defaultSnap={({ maxHeight }) =>
          props.fullScreen ? maxHeight : maxHeight / 2
        }
        snapPoints={({ maxHeight }) => [
          maxHeight / 1.1,
          maxHeight / 2,
          // maxHeight - maxHeight / 10,
          // maxHeight / 4,
          // maxHeight * 0.6,
        ]}
        expandOnContentDrag
        header={props.title}
        footer={props.footer}
        style={{
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          '--rsbs-bg': '#fff',
          '--rsbs-max-w': '500px',
        }}
      >
        {props.content}
      </RSBS.BottomSheet>
    );
  }
);
