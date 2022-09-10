import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  //   if (user.loading) return <div>Loading..</div>;

  const userEmail = localStorage.getItem('userEmailCMC');

  return userEmail ? <Outlet /> : <Navigate to='/' />;
};
