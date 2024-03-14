import { Suspense, useEffect } from 'react';
import { createBrowserRouter, LoaderFunction, Outlet, RouterProvider, useLoaderData } from 'react-router-dom';

import { routeCreator } from './providers/router/config/lib/routeCreator';
import { mainRouteConfig } from './providers/router/config/routeConfig';
import { ErrorBoundary } from './providers/errorBoundary';

import { Navbar } from '@/widgets/navbar';
import { ModalsViaQueryParams } from '@/widgets/modals';
import { ModalTypeEnum, TModalViaQueryParam } from '@/shared/types';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { userActions } from '@/entities/User';

import './styles/index.scss';

const Root = () => {
  const modalProps = useLoaderData() as TModalViaQueryParam | null;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.checkAuth());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <Suspense fallback="">
        <div className="layout">
          <main>
            <Navbar />
            {modalProps && <ModalsViaQueryParams modalType={modalProps.modalType} />}
            <Outlet />
          </main>
          <footer>Footer</footer>
        </div>
        <div id="modalPortal" />
      </Suspense>
    </ErrorBoundary>
  );
};

const loader: LoaderFunction = ({ request }) => {
  const queryParams = new URL(request.url).searchParams;
  if (queryParams.get(ModalTypeEnum.LOGIN)) {
    return {
      modalType: ModalTypeEnum.LOGIN,
    };
  }

  return null;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader,
    children: routeCreator(mainRouteConfig),
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
