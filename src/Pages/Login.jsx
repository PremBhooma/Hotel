import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, Navigate} from "react-router-dom"

export const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { loginUser, authState } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`)
      .then((res) => res.json())
      .then((res) =>
        res.map((item, i) => {
          return (
            <>
            {
            item.email === email && item.password === password ? loginUser(item.token) : console.log("not fount", item.email)
            }
            </>
          )
        })
      )
  }

  if(authState.isAuth){
    return <Navigate to="/dashboard" />
  }

  return (
    <div>
      <form data-cy="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            {" "}
            Email
            <input
              data-cy="login-email"
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            {" "}
            Password
            <input
              data-cy="login-password"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      <div className="go-back-link-div">
        {/* Add a Link tag here with textContent `Go Back` on clicking it we will be redirected to HomePage */}
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

