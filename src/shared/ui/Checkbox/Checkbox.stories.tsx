import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Checkbox } from './Checkbox';

export default {
  title: 'shared/Checkbox',
  component: Checkbox,
  args: {
    labelText: 'Label',
    name: 'test',
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = args => {
  const { name } = args;
  const { control } = useForm({
    defaultValues: {
      [name]: false,
    },
  });

  return <Checkbox control={control} {...args} />;
};

export const CheckBox = Template.bind({});
