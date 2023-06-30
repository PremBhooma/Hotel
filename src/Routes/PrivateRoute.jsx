import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}) => {
 const {authState} = useContext(AuthContext)

 console.log(authState.isAuth)

 if(!authState.isAuth){
    return <Navigate to="/login" />
 }
 return children;
}
