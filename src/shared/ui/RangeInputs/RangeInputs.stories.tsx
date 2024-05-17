import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { RangeInputs } from './RangeInputs';

export default {
  title: 'shared/RangeInputs',
  component: RangeInputs,
  args: {
    labelsText: { from: 'Label from', to: 'Label to' },
    isRequired: { from: true },
    placeholders: { from: 'От', to: 'До' },
    names: { from: 'priceFrom', to: 'priceTo' },
  },
} as Meta<typeof RangeInputs>;

const Template: StoryFn<typeof RangeInputs> = args => {
  const { control } = useForm();

  return <RangeInputs {...args} control={control} />;
};

export const RangeInput = Template.bind({});
