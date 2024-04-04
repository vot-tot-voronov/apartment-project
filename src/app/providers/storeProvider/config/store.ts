import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { IStateSchema, IThunkExtraArg } from './IStateSchema';

import { userReducer } from '@/entities/User';
import { $serviceApi } from '@/shared/lib';

export const rootReducer = combineSlices({
  user: userReducer,
});

export const createReduxStore = (initalState?: IStateSchema) => {
  const extraArg: IThunkExtraArg = {
    api: $serviceApi,
  };

  return configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initalState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });
};

export type AppDispatchType = ReturnType<typeof createReduxStore>['dispatch'];
