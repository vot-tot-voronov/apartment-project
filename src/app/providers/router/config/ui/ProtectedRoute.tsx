import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';

import { getRouteMain } from '@/shared/config/routeConfig/routeConfig';
import { getUserData } from '@/entities/User';

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const isAuth = useSelector(getUserData);

  if (!isAuth) {
    return <Navigate to={getRouteMain()} replace />;
  }

  return children;
};
