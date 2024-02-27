import { Meta, StoryFn } from '@storybook/react';

import { UnexpectedError } from './UnexpectedError';

export default {
  title: 'widgets/UnexpectedError',
  component: UnexpectedError,
} as Meta<typeof UnexpectedError>;

const Template: StoryFn<typeof UnexpectedError> = () => <UnexpectedError />;

export const Unexpectederror = Template.bind({});
