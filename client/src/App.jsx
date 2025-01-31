import Layout from './components/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterForm from './components/ui/RegisterForm/RegisterForm.jsx';
import ProtectedRouter from './HOCs/ProtectedRouter';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import MainPage from './components/pages/MainPage/MainPage';
// import AddPage from './components/pages/AddPage';
import {useEffect, useState} from 'react';
import LoginForm from "./components/pages/LoginPage/LoginForm.jsx" ;
// import MyBook from './components/pages/MyBook';
import axiosInstance, {setAccessToken} from "./api/axiosInstance.js";
import OneRecipePage from "./components/pages/OneRecipePage/OneRecipePage.jsx";
import FavoritesPage from "./components/pages/FavoritesPage/FavoritesPage.jsx";

function App() {
    const [user, setUser] = useState({ status: 'logging' });
    useEffect(() => {
      axiosInstance('/tokens/refresh')
          .then(({ data }) => {
            setTimeout(() => {
              setUser({ status: 'logged', data: data.user });
            }, 1000);
            setAccessToken(data.accessToken);
          })
          .catch(() => {
            setUser({ status: 'guest', data: null });
            setAccessToken('');
          });
    }, []);

    function registerHandler(data) {
      axiosInstance
          .post('/auth/register', data)
          .then(({ data }) => {
            // console.log(data);
            setUser({ status: 'logged', data: data.user });
            setAccessToken(data.accessToken);
          })
          .catch((error) => alert(error));
    }

    function loginHandler(data) {
      axiosInstance.post('/auth/login', data).then(({ data }) => {
        setUser({ status: 'logged', data: data.user });
        setAccessToken(data.accessToken);
      });
    }

    function logoutHandler() {
        window.alert('Вы вышли из аккаунта')
      axiosInstance
          .get('/auth/logout')
          .then(() => setUser({ status: 'guest', data: null }));
    }



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
              <MainPage user={user}/>
          ),
        },
        {
          path: '/onerecipe/:recipeId',
          element: <OneRecipePage/>
        },
        {
          element: <ProtectedRouter isAllowed={user.status !== 'logged'} redirectTo='/home'/>,
            children: [
              {
                path: '/login',
                element: <LoginForm loginHandler={loginHandler} />
              },
              {
                path: '/register',
                element: <RegisterForm registerHandler={registerHandler} />
              },
            ]
        },
          {
              element: <ProtectedRouter isAllowed={user.status === 'logged'} redirectTo='/home'/>,
              children: [
                  {
                      path: '/favorites',
                      element: <FavoritesPage />
                  }
              ]
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
        // {
        //   element: (
        //     <ProtectedRouter isAllowed={user.status === 'logged'} redirectTo={'/home'} />
        //   ),
        //   children: [
        //     {
        //       path: '/login',
        //       element: <LoginForm loginHandler={loginHandler} />,
        //     },
        //     {
        //       path: '/register',
        //       element: <RegisterForm registerHandler={registerHandler} />,
        //     },
        //   ],
        // },
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
