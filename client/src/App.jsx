import Layout from './components/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './components/ui/LoginForm';
import RegisterForm from './components/ui/RegisterForm';
import ProtectedRouter from './HOCs/ProtectedRouter';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import useUser from './hooks/useUser';
import MainPage from './components/pages/MainPage/MainPage';
// import AddPage from './components/pages/AddPage';
import { useState } from 'react';
// import MyBook from './components/pages/MyBook';

function App() {
  const { user, loginHandler, logoutHandler, registerHandler } = useUser();
  const [activeItem, setActiveItem] = useState('Книги');
  const handleItemClick = (name) => {
    setActiveItem(name);
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout
          logoutHandler={logoutHandler}
          user={user}
          handleItemClick={handleItemClick}
          activeItem={activeItem}
        />
      ),
      children: [
        {
          path: '/home',
          element: (
            <ProtectedRouter isAllowed={user.status === 'guest'} redirectTo={'/signin'}>
              <MainPage user={user} />
            </ProtectedRouter>
          ),
        },
        // {
        //   path: '/add',
        //   element: (
        //     <ProtectedRouter isAllowed={user.status === 'guest'} redirectTo={'/signin'}>
        //       {/* <AddPage user={user} /> */}
        //     </ProtectedRouter>
        //   ),
        // },
        // {
        //   path: '/mybooks',
        //   element: (
        //     <ProtectedRouter isAllowed={user.status === 'guest'} redirectTo={'/signin'}>
        //       <MyBook user={user} />
        //     </ProtectedRouter>
        //   ),
        // },
        {
          element: (
            <ProtectedRouter isAllowed={user.status !== 'logged'} redirectTo={'/home'} />
          ),
          children: [
            {
              path: '/signin',
              element: <LoginForm loginHandler={loginHandler} />,
            },
            {
              path: '/signup',
              element: <RegisterForm registerHandler={registerHandler} />,
            },
          ],
        },
        {
          path: '*',
          element: (
            <NotFoundPage handleItemClick={handleItemClick} activeItem={activeItem} />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
