import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-screen h-[80vh] flex justify-center items-center flex-col">
        <div className="w-12 lg:w-16 h-12 lg:h-16 border-4 lg:border-8 border-dashed rounded-full animate-spin border-[#27aae2]"></div>
        <h2 className="text-xl lg:text-2xl mt-2 font-semibold text-[#27aae2]">
          Loading...
        </h2>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
