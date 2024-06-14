import { Meta, StoryFn } from '@storybook/react';

import { Container } from './Container';

export default {
  title: 'shared/Container',
  component: Container,
  args: {
    children: 'Container',
  },
} as Meta<typeof Container>;

const Template: StoryFn<typeof Container> = args => <Container {...args} />;

export const MainContainer = Template.bind({});

export const Title = Template.bind({});
Title.args = {
  title: 'Title',
};
