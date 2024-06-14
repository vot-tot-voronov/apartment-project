import { Meta, StoryFn } from '@storybook/react';

import { DottedList } from './DottedList';

export default {
  title: 'shared/DottedList',
  component: DottedList,
  args: {
    list: [
      {
        label: 'Label 1',
        value: 1,
      },
      {
        label: 'Label 2',
        value: 'String',
      },
    ],
  },
} as Meta<typeof DottedList>;

const Template: StoryFn<typeof DottedList> = args => <DottedList {...args} />;

export const List = Template.bind({});
