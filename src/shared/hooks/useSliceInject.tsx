import { useMemo } from 'react';
import { Slice } from '@reduxjs/toolkit';

import { rootReducer } from '@/app/providers/storeProvider';

export const useSliceInject = (asyncSlice: Slice) => {
  const injected = useMemo(() => rootReducer.inject(asyncSlice), [asyncSlice]);

  return injected;
};
