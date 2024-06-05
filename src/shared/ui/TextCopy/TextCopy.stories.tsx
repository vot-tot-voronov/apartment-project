import { Meta, StoryFn } from '@storybook/react';

import { TextCopy } from './TextCopy';

import { ToastifyDecorator } from '@/shared/config/storybook/toastifyDecorator/ToastifyDecorator';

export default {
  title: 'shared/TextCopy',
  component: TextCopy,
  args: {
    text: 'Copy text',
  },
} as Meta<typeof TextCopy>;

const Template: StoryFn<typeof TextCopy> = args => <TextCopy {...args} />;
export const CopyText = Template.bind({});
CopyText.decorators = [ToastifyDecorator];
