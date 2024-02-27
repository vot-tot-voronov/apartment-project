import { withRouter } from 'storybook-addon-react-router-v6';

import { StyleDecorator } from '@/shared/config/storybook/styleDecorator/StyleDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [StyleDecorator, withRouter];
