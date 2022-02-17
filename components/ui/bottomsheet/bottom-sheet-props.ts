import { ReactElement } from 'react';

export type BottomSheetProps = {
  open: boolean;
  onDismiss: () => void;
  onReady: () => void;
  title: string;
  content: ReactElement | null;
  footer?: string;
};
