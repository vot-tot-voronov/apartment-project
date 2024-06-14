import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { TextArea } from './TextArea';

export default {
  title: 'shared/TextArea',
  component: TextArea,
  args: {
    name: 'test',
    placeholder: 'Placeholder',
  },
} as Meta<typeof TextArea>;

const Template: StoryFn<typeof TextArea> = args => {
  const { name } = args;
  const { control } = useForm({
    defaultValues: {
      [name]: '',
    },
  });

  return <TextArea {...args} control={control} />;
};

export const Default = Template.bind({});
Default.args = {};
