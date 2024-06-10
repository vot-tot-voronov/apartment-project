import { ReactNode, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

import classes from './Navbar.module.scss';

import { getRouteProfile, getRouteRentList } from '@/shared/config/routeConfig/routeConfig';
import { AppLink, Button } from '@/shared/ui';
import { ModalQueryValuesEnum, ModalTypeEnum } from '@/shared/types';
import { getUserData, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks';

interface ILinkArray {
  path: string;
  element: ReactNode;
}

const linksArray: Array<ILinkArray> = [
  {
    path: '#',
    element: 'Купить',
  },
  {
    path: '#',
    element: 'Продать',
  },
  {
    path: getRouteRentList(),
    element: 'Арендовать',
  },
];

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const userData = useSelector(getUserData);
  const dispatch = useAppDispatch();

  const handelLogout = useCallback(() => {
    dispatch(userActions.logout());
    navigate(0);
  }, [dispatch, navigate]);

  const handleSignIn = useCallback(() => {
    navigate({ search: `?${ModalTypeEnum.SIGN_IN}=${ModalQueryValuesEnum.SIGN_IN}` });
  }, [navigate]);

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
              className={clsx(classes.link, location.pathname.includes(`${path}`) && classes.active)}
            >
              {element}
            </AppLink>
          ))}
        </div>
        <div className={classes.authorization}>
          {userData ? (
            <>
              <div className={classes.links}>
                <AppLink
                  to={getRouteProfile(userData.id)}
                  className={clsx(
                    classes.link,
                    location.pathname.includes(getRouteProfile(userData.id)) && classes.active,
                  )}
                >
                  Профиль
                </AppLink>
              </div>
              <Button onClick={handelLogout}>Выйти</Button>
            </>
          ) : (
            <>
              <AppLink
                to={{ search: `?${ModalTypeEnum.LOGIN}=${ModalQueryValuesEnum.LOGIN}` }}
                className={classes.login}
              >
                Войти
              </AppLink>
              <Button onClick={handleSignIn}>Регистрация</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
