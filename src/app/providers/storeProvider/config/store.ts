import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { ILazyLoadedSlicesSchema, ISyncSliсesSchema, IThunkExtraArg } from './storeConfigSchema';

import { userReducer } from '@/entities/User';
import { $serviceApi } from '@/shared/lib';

export const rootReducer = combineSlices({
  user: userReducer,
}).withLazyLoadedSlices<ILazyLoadedSlicesSchema>();

export const createReduxStore = (initalState?: ISyncSliсesSchema) => {
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
export type RootStateType = ReturnType<typeof rootReducer>;
export type KeysOfStateSchemaType = keyof RootStateType;
