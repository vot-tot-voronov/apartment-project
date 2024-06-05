import { Meta, StoryFn } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import { Tabs } from './Tabs';

import { getRouteNewRentApartment } from '@/shared/config/routeConfig/routeConfig';

const tabsList = [
  {
    label: 'Общая информация',
    path: getRouteNewRentApartment('ABOUT'),
  },
  {
    label: 'Условия',
    path: '#',
    isDisabled: true,
  },
  {
    label: 'Удобства',
    path: '#',
  },
];

export default {
  title: 'shared/Tabs',
  component: Tabs,
  args: {
    tabsList,
  },
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: getRouteNewRentApartment('ABOUT') },
    }),
  },
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = args => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {};
