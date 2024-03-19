import { PropsWithChildren, useEffect, useState, MouseEvent, Suspense } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

import classes from './Modal.module.scss';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';

import CrossIcon from '@/shared/assets/icons/cross.svg';

interface IModalProps {
  onBack: () => void;
  className?: string;
  hasCloseButton?: boolean;
  title?: string;
  asyncContent?: boolean;
}

export const Modal = ({
  children,
  onBack,
  className,
  hasCloseButton = true,
  title,
  asyncContent = false,
}: PropsWithChildren<IModalProps>) => {
  const [element, setElement] = useState<HTMLElement | null>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setElement(document.getElementById('modalPortal'));

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const ModalLayout = () => {
    return (
      <>
        {hasCloseButton && (
          <div className={classes.header}>
            <Button onClick={() => onBack()} className={classes.icon}>
              <CrossIcon />
            </Button>
          </div>
        )}
        {title && <h2 className={classes.title}>{title}</h2>}
        {children}
      </>
    );
  };

  return (
    element &&
    createPortal(
      <div onClick={() => onBack()} className={clsx(classes.modal, className, isOpen && classes.open)}>
        <div onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()} className={classes.modalContent}>
          {asyncContent ? (
            <Suspense
              fallback={
                <div className={classes.loaderContainer}>
                  <Loader />
                </div>
              }
            >
              <ModalLayout />
            </Suspense>
          ) : (
            <ModalLayout />
          )}
        </div>
      </div>,
      element,
    )
  );
};
