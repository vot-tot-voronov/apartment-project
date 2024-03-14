import { StoryFn } from '@storybook/react';

import { IStateSchema, StoreProvider } from '@/app/providers/storeProvider';

export const StoreDecorator = (state: DeepPartial<IStateSchema>) =>
  function Decorator(StoryComponent: StoryFn) {
    return (
      <StoreProvider inititalState={state}>
        <StoryComponent />
      </StoreProvider>
    );
  };
