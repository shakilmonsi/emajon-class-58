import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthConText } from "../UserConTect";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthConText);
  const location = useLocation();

  if (loading) {
    console.log("yes loading  ok !!!!!!!!!!!!");
    return <div>loading............. </div>;
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
