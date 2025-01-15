// import React, { createContext, useState, useEffect } from "react";
// import {
//   getFromStorage,
//   saveToStorage,
// } from "../utils/storage";

// /*
//   Auth Context:
//   - მართავს ავტორიზაციის მდგომარეობას გლობალურად
//   - ინახავს token-ს და user ინფორმაციას
//   - უზრუნველყოფს ავტორიზაციის მეთოდებს
// */

// export const AuthContext = createContext(null);




// export const AuthProvider = ({ children }) => {


//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // ინიციალიზაცია - ტოკენის შემოწმება localStorage-ში
//   useEffect(() => {

//     const savedToken = getFromStorage("token");
//     const savedUser = getFromStorage("user");

//     if (savedToken && savedUser) {
//       setToken(savedToken);
//       setUser(savedUser);
//     }

//     setLoading(false);
//   }, []);

//   // ავტორიზაცია
//   const login = async (credentials) => {
//     try {
//       // API call იმიტაცია
//       const response = await fetch("api/login", {
//         method: "POST",
//         body: JSON.stringify(credentials),
//       });

//       const data = await response.json();

//       // ტოკენისა და მომხმარებლის ინფორმაციის შენახვა
//       saveToStorage("token", data.token);
//       saveToStorage("user", data.user);

//       setToken(data.token);
//       setUser(data.user);

//       return { success: true };
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   };

//   // გამოსვლა
//   const logout = () => {
//     removeFromStorage("token");
//     removeFromStorage("user");
//     setToken(null);
//     setUser(null);
//   };

//   // რეგისტრაცია
//   const register = async (userData) => {
//     try {
//       // API call იმიტაცია
//       const response = await fetch("api/register", {
//         method: "POST",
//         body: JSON.stringify(userData),
//       });

//       const data = await response.json();

//       return { success: true, data };
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   };

//   // ტოკენის განახლება
//   const refreshToken = async () => {
//     try {
//       const response = await fetch("api/refresh-token", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await response.json();
//       saveToStorage("token", data.token);
//       setToken(data.token);

//       return { success: true };
//     } catch (error) {
//       logout();
//       return { success: false, error: error.message };
//     }
//   };

//   const value = {
//     user,
//     token,
//     loading,
//     isAuthenticated: !!token,
//     login,
//     logout,
//     register,
//     refreshToken,
//   };

  

//   if (loading) {
//     return <div>Loading...</div>; // ან სხვა loading კომპონენტი
//   }

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// import React, { createContext, useContext, useState } from "react";

// // Create the AuthContext
// const AuthContext = createContext();
// const [isLoggedIn, setIsLoggedIn] = useState(false);

// // AuthProvider component to wrap the app and provide authentication state
// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);



 

//   // return (
//   //   <AuthContext.Provider value={{ isLoggedIn, login}}>
//   //     {children}
//   //   </AuthContext.Provider>
//   // );
// };

// // Custom hook to use the AuthContext
// function useAuth() { 
//   const login = () => {
//   setIsLoggedIn(true);
// };
//   return useContext(AuthContext);
// };
// export default useAuth;

// function Login(){
//   setIsLoggedIn(true);

// }
// export default Login;

import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
