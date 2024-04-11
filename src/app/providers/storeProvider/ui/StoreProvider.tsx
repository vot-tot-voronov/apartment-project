import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { RootStateType, createReduxStore } from '../config/store';

interface IStoreProviderProps {
  inititalState?: DeepPartial<RootStateType>;
}

export const StoreProvider = (props: PropsWithChildren<IStoreProviderProps>) => {
  const { children, inititalState } = props;

  return <Provider store={createReduxStore(inititalState as RootStateType)}>{children}</Provider>;
};
