import { Meta, StoryFn } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import { Navbar } from './Navbar';

import { MainRoutePaths, MainRoutesEnum } from '@/shared/config/routeConfig/routeConfig';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: MainRoutePaths[MainRoutesEnum.BUY] },
    }),
  },
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = () => <Navbar />;

export const NavbarWithActiveLink = Template.bind({});
