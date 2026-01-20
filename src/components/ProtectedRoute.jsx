import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);

  if (loading) return <h2>Loading...</h2>;

  if (!user) return <Navigate to={"/signup"} replace />;
  return <Outlet />;
};

export default ProtectedRoute;