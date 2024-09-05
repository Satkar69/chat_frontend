"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { getUser } from "@/services/userService";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  const updateUser = async () => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const decode = jwtDecode(token);
        const cachedUser = localStorage.getItem("authUser");

        if (cachedUser && cachedUser._id == decode.userId) {
          setAuthUser(JSON.parse(cachedUser));
        } else {
          const userData = await getUser(decode.userId, token);
          setAuthUser(userData.user);
          localStorage.setItem("authUser", JSON.stringify(userData.user));
        }
      } catch (error) {
        setAuthUser(null);
        localStorage.removeItem("authUser");
        console.error("Error updating user:", error);
      }
    } else {
      setAuthUser(null);
      localStorage.removeItem("authUser");
    }
  };

  useEffect(() => {
    if (!authUser) {
      updateUser(); // Call updateUser on component mount
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

// import { createContext, useState, useContext, useEffect } from "react";
// import { jwtDecode } from "jwt-decode";
// import Cookies from "js-cookie";
// import { getUser } from "@/services/userService";

// const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [authUser, setAuthUser] = useState(null);

//   const updateUser = async () => {
//     const token = Cookies.get("token");
//     if (token) {
//       try {
//         const decode = jwtDecode(token);
//         const cachedUser = localStorage.getItem("authUser");

//         if (cachedUser) {
//           setAuthUser(JSON.parse(cachedUser));
//         } else {
//           const userData = await getUser(decode.userId, token);
//           setAuthUser(userData.user);
//           localStorage.setItem("authUser", JSON.stringify(userData.user));
//         }
//       } catch (error) {
//         setAuthUser(null);
//         localStorage.removeItem("authUser");
//         console.error("Error updating user:", error);
//       }
//     } else {
//       setAuthUser(null);
//       localStorage.removeItem("authUser");
//     }
//   };

//   useEffect(() => {
//     updateUser(); // Call updateUser on component mount
//   }, []);

//   return (
//     <AuthContext.Provider value={{ authUser, setAuthUser, updateUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuthContext = () => useContext(AuthContext);
