import { Meta, StoryFn } from '@storybook/react';

import { Loader } from './Loader';

export default {
  title: 'shared/Loader',
  component: Loader,
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = args => <Loader {...args} />;

export const Loading = Template.bind({});
