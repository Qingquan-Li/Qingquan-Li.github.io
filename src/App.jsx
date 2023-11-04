import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import NavBar from './common/NavBar';
import ErrorPage from './common/ErrorPage';
import Home from './home';
import Travel from './travel';
import Resume from './resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/travel',
    element: <Travel />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/resume',
    element: <Resume />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
