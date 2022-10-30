import React, { useContext } from "react";
import  {UserContext}  from "./Context/UserProvider";
import { Navigate } from "react-router-dom";
const Auth = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Auth;
