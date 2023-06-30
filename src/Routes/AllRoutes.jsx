import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home"
import { Login } from "../Pages/Login"
import { Dashboard } from "../Pages/Dashboard"
import { SingleRoom } from "../Pages/SingleRoom"
import { PrivateRoute } from "./PrivateRoute"

export const AllRoutes = () => {
  return <div>{/* Add Routes here */}
    {
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }>
        </Route>
        <Route
          path="/dashboard/:id"
          element={
            <PrivateRoute>
              <SingleRoom />
            </PrivateRoute>
          }>
        </Route>
      </Routes>
    }
  </div>;
}
