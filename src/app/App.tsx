import { Suspense, useEffect } from 'react';
import { createBrowserRouter, LoaderFunction, Outlet, RouterProvider, useLoaderData } from 'react-router-dom';

import { routeCreator } from './providers/router/config/lib/routeCreator';
import { mainRouteConfig } from './providers/router/config/routeConfig';
import { ErrorBoundary } from './providers/errorBoundary';

import { Navbar } from '@/widgets/navbar';
import { ModalsViaQueryParams } from '@/widgets/modals';
import { ModalTypeEnum, TModalViaQueryParam } from '@/shared/types';
import { useAppDispatch } from '@/shared/hooks';
import { userActions } from '@/entities/User';
import { Loader } from '@/shared/ui';

import './styles/index.scss';

const Root = () => {
  const modalProps = useLoaderData() as TModalViaQueryParam | null;
  const dispatch = useAppDispatch();

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
            <div className="boxContent">
              <Outlet />
            </div>
          </Suspense>
        </main>
        <footer>Footer</footer>
      </div>
      <div id="modalPortal" />
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
