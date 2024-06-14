import { Meta, StoryFn } from '@storybook/react';

import { AppLink } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    children: 'Link',
    to: '/',
  },
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = args => <AppLink {...args} />;

export const Link = Template.bind({});
