import { closeModal, useModalStore } from '@/store/useModalStore';
import { Dialog, VisuallyHidden } from 'radix-ui';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import styles from './Modal.module.scss';
import { DesktopContent } from './DesktopContent/DesktopContent';
// import { useMediaQuery } from 'react-responsive';

export default function Modal() {
  const isOpen = useModalStore((state) => state.isOpen);
  const content = useModalStore((state) => state.content);

  // const isTablet = useMediaQuery({ query: '(max-width: 838px)' });

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleCloseModal}>
      <AnimatePresence mode='wait'>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay className={styles.overlay}>
              <Dialog.Content forceMount>
                <VisuallyHidden.Root>
                  <Dialog.Title />
                  <Dialog.Description />
                </VisuallyHidden.Root>
                <DesktopContent>{content}</DesktopContent>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
