
import AdminDashboard from './ui/AdminDashboard'
import UserDashBoard from './ui/UserDashboard'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Error from './ui/Error'
import AppLayout from './ui/AppLayout';
import Register from './ui/Register';
import SignIn from './ui/SignIn';
import LeaderBoard from './ui/LeaderBoard';
import Testing from './ui/testing';
import Display from './ui/Display';

import Faq from './ui/FAQ';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/display',
        element: <Display />,
      },
      {
        path: '/admin',
        element: <AdminDashboard />,
      },
      {
        path: '/test',
        element: <Testing/>,
      },

      
      {
        path: '/user',
        element: <UserDashBoard/>,
      },
      {
        path: '/LeaderBoard',
        element: <LeaderBoard/>,
      },
      {
        path: '/FAQs',
        element: <Faq/>,
      },
      {
        path: '/register',
        element: <Register/>,
      },
      {
      path: '/signin',
        element: <SignIn/>,
      },
      
    ],
  },
]);

function App() {
  
  return <RouterProvider router={router} />;
}

export default App;
