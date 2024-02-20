import { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import classes from './Navbar.module.scss';

import { MainRoutePaths, MainRoutesEnum } from '@/shared/config/routeConfig/routeConfig';
import { AppLink } from '@/shared/ui';

interface ILinkArray {
  path: string;
  element: ReactNode;
}

const linksArray: Array<ILinkArray> = [
  {
    path: MainRoutePaths[MainRoutesEnum.BUY],
    element: 'Купить',
  },
  {
    path: MainRoutePaths[MainRoutesEnum.SELL],
    element: 'Продать',
  },
  {
    path: MainRoutePaths[MainRoutesEnum.RENT],
    element: 'Арендовать',
  },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <p className={classes.text} data-text="APARTMENT.COM">
            APARTMENT.COM
          </p>
        </div>
        <div className={classes.links}>
          {linksArray.map(({ path, element }) => (
            <AppLink
              key={uuidv4()}
              to={path}
              className={clsx(classes.link, location.pathname === path && classes.active)}
            >
              {element}
            </AppLink>
          ))}
        </div>
        <div className="authorization">Авторизация</div>
      </div>
    </div>
  );
};
