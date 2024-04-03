import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';

import { getRouteMain } from '@/shared/config/routeConfig/routeConfig';
import { USER_INFO_LOCALSTORAGE_KEY } from '@/shared/constants';

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const isAuth = localStorage.getItem(USER_INFO_LOCALSTORAGE_KEY);

  if (!isAuth) {
    return <Navigate to={getRouteMain()} replace />;
  }

  return children;
};
