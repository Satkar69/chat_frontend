"use client";

import { createContext, useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { getUser } from "@/services/userService";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  const updateUser = async (token) => {
    if (token) {
      try {
        const decode = jwtDecode(token);
        const user = await getUser(decode.userId, token);
        setAuthUser(user);
      } catch (error) {
        throw Error(error || "authentication token is missing");
      }
    }
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
