import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { IStateSchema } from './IStateSchema';

import { userReducer } from '@/entities/User';

export const rootReducer = combineSlices({
  user: userReducer,
});

export const createReduxStore = (initalState?: IStateSchema) => {
  return configureStore<IStateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initalState,
  });
};

const store = createReduxStore();

export type AppDispatch = typeof store.dispatch;
