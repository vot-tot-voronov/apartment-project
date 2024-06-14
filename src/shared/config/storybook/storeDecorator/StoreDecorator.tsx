import { StoryFn } from '@storybook/react';

import { RootStateType, StoreProvider } from '@/app/providers/storeProvider';

export const StoreDecorator = (state: DeepPartial<RootStateType>) =>
  function Decorator(StoryComponent: StoryFn) {
    return (
      <StoreProvider inititalState={state}>
        <StoryComponent />
      </StoreProvider>
    );
  };
