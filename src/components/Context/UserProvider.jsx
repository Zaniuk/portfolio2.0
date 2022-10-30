import React, { createContext, useCallback, useEffect, useState } from "react";
import httpService from "../../services/httpService";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const logout = () => {
    sessionStorage.clear();
    setUser(null);
  };
  const login = async (values, actions) => {
    try {
      const req = await httpService.post("/auth/login", values);
      sessionStorage.setItem("token", req.data.Authorization);
      setUser(req.data.user);
    } catch (e) {
      console.log(e.response.data);
      if (e.response.data === "Email not found") {
        actions.setErrors({ email: "Email not found" });
      } else {
        actions.setErrors({ password: "Password is incorrect" });
      }
    }
  };
  const getData = async () => {
    try {
      const { data } = await httpService.get("/auth/me");
      if (data.user.roleId === 1) {
        setIsAdmin(true);
      }
      setUser(data.user);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logout,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;