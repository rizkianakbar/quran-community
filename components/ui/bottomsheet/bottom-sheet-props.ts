export type BottomSheetProps = {
  open: boolean;
  onDismiss: () => void;
  onReady: () => void;
  title: string;
  content: string;
  footer: string;
};
