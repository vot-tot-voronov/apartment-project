import { Meta, StoryFn } from '@storybook/react';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  args: {
    children: 'Modal content',
    onBack: () => {},
  },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = args => <Modal {...args} />;

export const ModalMain = Template.bind({});

export const ModalWithoutCloseButton = Template.bind({});
ModalWithoutCloseButton.args = {
  hasCloseButton: false,
};

export const ModalWithTitle = Template.bind({});
ModalWithTitle.args = {
  hasCloseButton: true,
  title: 'Title',
};
