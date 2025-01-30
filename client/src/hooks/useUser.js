// import { useEffect, useState } from 'react';
// import axiosInstance, { setAccessToken } from '../api/axiosInstance';
//
// const useUser = () => {
//   const [user, setUser] = useState({ status: 'logging' });
//
//   useEffect(() => {
//     axiosInstance('/tokens/refresh')
//       .then(({ data }) => {
//         setTimeout(() => {
//           setUser({ status: 'logged', data: data.user });
//         }, 1000);
//         setAccessToken(data.accessToken);
//       })
//       .catch(() => {
//         setUser({ status: 'guest', data: null });
//         setAccessToken('');
//       });
//   }, []);
//
//   function registerHandler(data) {
//     axiosInstance
//       .post('/auth/register', data)
//       .then(({ data }) => {
//         // console.log(data);
//         setUser({ status: 'logged', data: data.user });
//         setAccessToken(data.accessToken);
//       })
//       .catch((error) => alert(error));
//   }
//
//   function loginHandler(data) {
//     axiosInstance.post('/auth/login', data).then(({ data }) => {
//       setUser({ status: 'logged', data: data.user });
//       setAccessToken(data.accessToken);
//     });
//   }
//
//   function logoutHandler() {
//     axiosInstance
//       .get('/auth/logout')
//       .then(() => setUser({ status: 'guest', data: null }));
//   }
//   return {
//     user,
//     registerHandler,
//     loginHandler,
//     logoutHandler,
//   };
// };
// export default useUser;

// Этот код не активен!!!
