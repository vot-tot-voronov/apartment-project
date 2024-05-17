import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { TextInput } from './TextInput';

export default {
  title: 'shared/TextInput',
  component: TextInput,
  args: {
    name: 'test',
  },
} as Meta<typeof TextInput>;

const Template: StoryFn<typeof TextInput> = args => {
  const { name } = args;
  const { control } = useForm({
    defaultValues: {
      [name]: '',
    },
  });

  return <TextInput {...args} control={control} />;
};

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

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Placeholder',
  isDisabled: true,
};

export const Required = Template.bind({});
Required.args = {
  placeholder: 'Placeholder',
  labelText: 'Label',
  isRequired: true,
};

export const Error = Template.bind({});
Error.args = {
  placeholder: 'Placeholder',
  labelText: 'Label',
  isRequired: true,
  error: 'Error message',
};
