import { Suspense, useEffect } from 'react';
import { createBrowserRouter, Outlet, RouterProvider, useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { routeCreator } from './providers/router/config/lib/routeCreator';
import { mainRouteConfig } from './providers/router/config/routeConfig';
import { ErrorBoundary } from './providers/errorBoundary';

import { Navbar } from '@/widgets/navbar';
import { ModalsViaQueryParams } from '@/widgets/modals';
import { ModalViaQueryParamType } from '@/shared/types';
import { useAppDispatch } from '@/shared/hooks';
import { getUserInited, userActions } from '@/entities/User';
import { Loader } from '@/shared/ui';
import { rootLoader } from '@/shared/lib';

import './styles/index.scss';

const Root = () => {
  const modalProps = useLoaderData() as ModalViaQueryParamType | null;
  const dispatch = useAppDispatch();
  const isUserInited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.checkAuth());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <div className="layout">
        <main className="main">
          <Navbar />
          {modalProps && <ModalsViaQueryParams modalType={modalProps.modalType} />}
          <Suspense
            fallback={
              <div className="loaderContainer">
                <Loader />
              </div>
            }
          >
            <div className="boxContent">{isUserInited && <Outlet />}</div>
          </Suspense>
        </main>
        <footer>Footer</footer>
      </div>
      <div id="modalPortal" />
    </ErrorBoundary>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    children: routeCreator(mainRouteConfig),
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
