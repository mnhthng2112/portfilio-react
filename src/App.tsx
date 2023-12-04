import AdminLayout from './components/layouts/AdminLayout';
import ClientLayout from './components/layouts/ClientLayout';
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