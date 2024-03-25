import { Meta, StoryFn } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = args => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Main = Template.bind({});
Main.args = {
  size: 'main',
};

export const Middle = Template.bind({});
Middle.args = {
  size: 'middle',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};
