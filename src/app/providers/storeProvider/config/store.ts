import { configureStore } from '@reduxjs/toolkit';

import { IStateSchema } from './IStateSchema';

export const createReduxStore = (initalState?: IStateSchema) =>
  configureStore({
    reducer: {},
    devTools: __IS_DEV__,
    preloadedState: initalState,
  });
