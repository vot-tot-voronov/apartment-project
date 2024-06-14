import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { FieldWithLabel } from './FieldWithLabel';
import { TextInput } from '../TextInput/TextInput';

export default {
  title: 'shared/FieldWithLabel',
  component: FieldWithLabel,
  args: {
    label: 'Label',
  },
} as Meta<typeof FieldWithLabel>;

const Template: StoryFn<typeof FieldWithLabel> = args => {
  const { control } = useForm();

  return (
    <FieldWithLabel {...args}>
      <TextInput name="test" control={control} placeholder="Type here" />
    </FieldWithLabel>
  );
};

export const FieldWithlabel = Template.bind({});
