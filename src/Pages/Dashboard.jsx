import React, { useContext, useState, useEffect }from "react";
import { RoomsContainer } from "../Components/RoomsContainer";
import { Loader } from "../Components/Loader";
import { AuthContext } from '../Context/AuthContext';
import { Link } from "react-router-dom"

export const Dashboard=()=>{
  const { authState, logoutUser } = useContext(AuthContext);
  const [data, setData] = useState([])

  const hangleLogout = () => {
    logoutUser();
  }

  useEffect(() => {
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/rooms`)
    .then((res) => res.json())
    .then((json) => setData(json))
  }, [])

  return (
    <div data-testid="dashboard-component">
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={hangleLogout}>Logout</button>
        <p>
          Token:
          {/* The token should be displayed below */}
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div data-testid="room-container">
        {/* Either Loader or RoomsContainer should exist below */}
        {data.lenght ? <RoomsContainer data={data} /> : <Loader />}
      </div>
    </div>
  );
}

