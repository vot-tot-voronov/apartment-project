import { Meta, StoryFn } from '@storybook/react';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  args: {
    children: 'Pop-up modal window',
    onBack: () => {},
  },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = args => <Modal {...args} />;

export const PopupMain = Template.bind({});

export const PopupWithoutCloseButton = Template.bind({});
PopupWithoutCloseButton.args = {
  hasCloseButton: false,
};
