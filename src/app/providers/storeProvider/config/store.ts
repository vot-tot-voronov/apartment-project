import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { IStateSchema } from './IStateSchema';

import { userReducer } from '@/entities/User';

export const createReduxStore = (initalState?: IStateSchema) => {
  const rootReducer: ReducersMapObject<IStateSchema> = {
    user: userReducer,
  };

  return configureStore<IStateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initalState,
  });
};
