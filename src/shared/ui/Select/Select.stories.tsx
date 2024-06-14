import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { SelectComponent } from './Select';

export default {
  title: 'shared/Select',
  component: SelectComponent,
  args: {
    name: 'select',
    options: [
      { value: '1', label: 'Test 1' },
      { value: '2', label: 'Test 2' },
    ],
    labelText: 'Label',
    placeholder: 'Select a value',
  },
} as Meta<typeof SelectComponent>;

const Template: StoryFn<typeof SelectComponent> = args => {
  const { control } = useForm();

  return <SelectComponent {...args} control={control} />;
};

export const Default = Template.bind({});
Default.args = {};
