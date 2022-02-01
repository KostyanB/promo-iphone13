import { useState } from 'react';

const useOpenModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  return {
    onOpen,
    onClose,
    isOpen,
  };
};
export default useOpenModal;
