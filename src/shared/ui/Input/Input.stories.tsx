import { Meta, StoryFn } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  args: {
    children: 'Input',
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  labelText: 'Label',
  placeholder: 'Enter your data',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  value: 'Default value',
};
