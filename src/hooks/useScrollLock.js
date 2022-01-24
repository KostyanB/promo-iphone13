import React, { useCallback, useLayoutEffect } from 'react';

export const useScrollLock = () => {

  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = 'var(--scrollbar-compensation)';
    document.body.dataset.scrollLock = 'true';

    if (isiOS) {
      scrollOffset.current = window.pageYOffset;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollOffset.current}px`;
      document.body.style.width = '100%';
    }
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    delete document.body.dataset.scrollLock;

    if (isiOS) {
      document.body.style.position = '';
      document.body.style.top = ``;
      document.body.style.width = '';
      window.scrollTo(0, scrollOffset.current);
    }
  }, []);

  useLayoutEffect(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    document.body.style.setProperty('--scrollbar-compensation', `${scrollBarCompensation}px`);
  }, [])

  return {
    lockScroll,
    unlockScroll
  };
}

//use this hook
const SomeComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const displayModal = (productId) => {
    lockScroll();
    setShowModal(true);
  };

  const hideModal = () => {
    unlockScroll();
    setShowModal(false);
  };

  return (
    <>
      {/* Quickview modal */}
    </>
  );
};

// style for component with fixed position
.fixed--component {
  position: fixed;
  right: 10px;
  top: 90vh;
  /* ... */
}
[data-scroll-lock] .fixed--component {
  margin-right: var(--scrollbar-compensation);
}