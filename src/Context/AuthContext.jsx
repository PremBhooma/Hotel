import React, { createContext, useState } from "react"

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

  const [authState, setAuthState] = useState({isAuth : false, token: null})

  const loginUser = (token) => {
    setAuthState({...authState, token: token, isAuth: true})
    console.log(authState)
  }

  const logoutUser = () => {
    setAuthState({...authState, token: "", isAuth: false})
  }

  console.log(authState)

  let providerState = {
    authState: authState,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  if (window.Cypress) {
    window.store = providerState;
  }

  return <AuthContext.Provider value={providerState}>
    {children}
  </AuthContext.Provider>;
};
