import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { IStateSchema } from './IStateSchema';

import { userReducer } from '@/entities/User';
import { loginFormReducer } from '@/features/loginByUsername';

export const createReduxStore = (initalState?: IStateSchema) => {
  const rootReducer: ReducersMapObject<IStateSchema> = {
    user: userReducer,
    loginForm: loginFormReducer,
  };

  return configureStore<IStateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initalState,
  });
};

const store = createReduxStore();

export type AppDispatch = typeof store.dispatch;
