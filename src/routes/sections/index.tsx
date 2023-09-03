import { MemoryRouter, Routes, Route } from 'react-router-dom';
// layouts
import MainLayout from 'src/layouts/main';
// config
// import { PATH_AFTER_LOGIN } from 'src/config-global';
//
import { mainRoutes, HomePage, Page404 } from './main';
import { authRoutes } from './auth';
import { authDemoRoutes } from './auth-demo';
import { dashboardRoutes } from './dashboard';
import { componentsRoutes } from './components';

// ----------------------------------------------------------------------

interface IRoute {
  path?: string;
  element?: JSX.Element;
  children?: IRoute[];
  index?: boolean;
}

export default function Router() {
  const renderRoutes = (routes: IRoute[]) => {
    return routes.map((route, index) => {
      return (
        <Route key={index} path={route.path ?? ''} element={route.element}>
          {route.children && renderRoutes(route.children)}
        </Route>
      );
    });
  };

  return (
    <MemoryRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        {...renderRoutes(mainRoutes)}
        {...renderRoutes(authRoutes)}
        {...renderRoutes(authDemoRoutes)}
        {...renderRoutes(dashboardRoutes)}
        {...renderRoutes(componentsRoutes)}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </MemoryRouter>
  );
}
