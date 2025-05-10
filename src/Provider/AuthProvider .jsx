import React, { createContext, useState } from "react";
export const AuthContext = createContext();
import { getAuth } from "firebase/auth";
import app from "./../Firebase/Firebase.init";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authData = {
    user,
    setUser,
    // createUser,
    // logOut,
    // signIn,
    // loading,
    // setLoading,
    // updateUser,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
