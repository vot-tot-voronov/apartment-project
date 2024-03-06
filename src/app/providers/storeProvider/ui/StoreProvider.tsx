import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';
import { IStateSchema } from '../config/IStateSchema';

interface IStoreProviderProps {
  inititalState?: DeepPartial<IStateSchema>;
}

export const StoreProvider = (props: PropsWithChildren<IStoreProviderProps>) => {
  const { children, inititalState } = props;

  return <Provider store={createReduxStore(inititalState as IStateSchema)}>{children}</Provider>;
};
