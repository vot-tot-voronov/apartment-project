import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { IStateSchema, StoreProvider } from '@/app/providers/storeProvider';

interface IComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<IStateSchema>;
}

export const componentRender = (component: ReactNode, options: IComponentRenderOptions = {}) => {
  const { route = '/', initialState } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider inititalState={initialState}>{component}</StoreProvider>
    </MemoryRouter>,
  );
};
