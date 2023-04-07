import React from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import AppLayout from './AppLayout';
import UserForm from './views/UserForm/UserForm';
import Summary from './views/Summary/Summary';
import { useAuth0 } from '@auth0/auth0-react';

export const routesConfig = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <UserForm />,
      },
      {
        path: '/summary',
        element: <Summary />,
      },
    ],
  },
  {},
];
const router = createHashRouter(routesConfig);

function App() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (!isLoading && !isAuthenticated) {
    loginWithRedirect();
  }

  return !isLoading && isAuthenticated ? (
    <RouterProvider router={router} />
  ) : null;
}

export default App;
