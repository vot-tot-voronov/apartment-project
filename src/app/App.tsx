import { Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { routeCreator } from './providers/router/config/lib/routeCreator';
import { mainRouteConfig } from './providers/router/config/routeConfig';
import { ErrorBoundary } from './providers/errorBoundary';

import { Navbar } from '@/widgets/navbar';

import './styles/index.scss';

const Root = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback="">
        <div className="layout">
          <main>
            <Navbar />
            <Outlet />
          </main>
          <footer>Footer</footer>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: routeCreator(mainRouteConfig),
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
