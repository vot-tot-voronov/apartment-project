import { ReactNode, useRef } from 'react';
import clsx from 'clsx';

import { useInfiniteScroll } from '@/shared/hooks';

interface IPagePaginateProps {
  className?: string;
  children: ReactNode;
  onScrollBottom?: () => void;
}

export const PagePaginate = ({ className, children, onScrollBottom }: IPagePaginateProps) => {
  const triggerRef = useRef<HTMLDivElement>(null);

  useInfiniteScroll({
    triggerRef,
    callback: onScrollBottom,
  });

  return (
    <div className={clsx(className)}>
      {children}
      <div ref={triggerRef} />
    </div>
  );
};
