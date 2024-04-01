import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { SelectStatic } from './Select';

export default {
  title: 'shared/Select',
  component: SelectStatic,
  args: {
    name: 'select',
    options: [
      { value: '1', label: 'Test 1' },
      { value: '2', label: 'Test 2' },
    ],
    labelText: 'Label',
    placeholder: 'Select a value',
  },
} as Meta<typeof SelectStatic>;

const Template: StoryFn<typeof SelectStatic> = args => {
  const { control } = useForm();

  return <SelectStatic control={control} {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
