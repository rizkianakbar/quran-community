import Modal from './modal';

export const ModalNotLogin = ({ isOpen, handleToogle }: any) => {
  return (
    <Modal
      isOpen={isOpen}
      onToggle={handleToogle}
      title="Access to this page is restricted"
      content="You need to login to access this page."
      button="Got it, thanks!"
    />
  );
};
