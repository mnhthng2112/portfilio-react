import React from 'react';
import ClientLayout from './components/layouts/clientLayout';
import AdminLayout from './components/layouts/adminLayout';
import IndexClient from './views/client/IndexClient';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';

export const routers = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
    ]
  },
  {
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: <IndexClient />,
        name: "homepage",
      }
    ]
  }
]
const router = createBrowserRouter(routers);

function App() {
  return <RouterProvider router={router} />;
}

export default App;