import { Meta, StoryFn } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import { Navbar } from './Navbar';

import { getRouteBuyList } from '@/shared/config/routeConfig/routeConfig';
import { StoreDecorator } from '@/shared/config/storybook/storeDecorator/StoreDecorator';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: getRouteBuyList() },
    }),
  },
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = () => <Navbar />;

export const NavbarLogin = Template.bind({});
NavbarLogin.decorators = [StoreDecorator({})];

export const NavbarLogout = Template.bind({});
NavbarLogout.decorators = [StoreDecorator({ user: { authData: { id: '1', username: 'user' } } })];
