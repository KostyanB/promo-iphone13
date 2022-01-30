import { useState } from 'react';

const useOpenModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  const onToggle = () => setIsOpen(!isOpen);

  return { onOpen, onClose, isOpen, onToggle };
};
export default useOpenModal;
