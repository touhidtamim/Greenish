import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider ";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../component/LoadingSpinner";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (!user) {
    return (
      <Navigate state={location?.pathname} to="/greenish/login"></Navigate>
    );
  }

  return children;
};

export default PrivateRouter;
