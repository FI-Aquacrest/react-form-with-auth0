import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout';
import UserForm from './views/UserForm';
import Summary from './views/Summary';
import { useAuth0 } from '@auth0/auth0-react';

const router = createBrowserRouter([
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
]);

function App() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (!isLoading && !isAuthenticated) {
    loginWithRedirect();
  }

  return isAuthenticated ? <RouterProvider router={router} /> : null;
}

export default App;
