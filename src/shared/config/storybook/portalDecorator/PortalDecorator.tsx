import { StoryFn } from '@storybook/react';

export const PortalDecorator = (StoryComponent: StoryFn) => (
  <div id="modalPortal">
    <StoryComponent />
  </div>
);
