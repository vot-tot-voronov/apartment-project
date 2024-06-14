import { RefObject, useEffect, useLayoutEffect, useState } from 'react';

export function useWidth<T extends HTMLElement>(ref: RefObject<T>) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (ref.current !== null) setWidth(ref.current.clientWidth);
  }, [ref]);

  useEffect(() => {
    function handleWindowResize() {
      if (ref.current !== null) setWidth(ref.current.clientWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [ref]);

  return width;
}
