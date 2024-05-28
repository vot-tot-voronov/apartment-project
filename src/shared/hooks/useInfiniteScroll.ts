import { RefObject, useEffect, useRef } from 'react';

export interface IUseInfiniteScrollOptions<T extends HTMLElement, K extends HTMLElement> {
  callback?: () => void;
  triggerRef: RefObject<T>;
  wrapperRef?: RefObject<K>;
}

export function useInfiniteScroll<T extends HTMLElement, K extends HTMLElement>({
  callback,
  wrapperRef,
  triggerRef,
}: IUseInfiniteScrollOptions<T, K>) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const wrapperElement = wrapperRef?.current;
    const triggerElement = triggerRef.current;

    if (callback && triggerElement) {
      const options = {
        root: wrapperElement || null,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.current.observe(triggerElement);
    }

    return () => {
      if (observer.current && triggerElement) {
        observer.current.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}
