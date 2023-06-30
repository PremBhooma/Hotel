import React from "react";
import { Link } from "react-router-dom"

export const RoomsContainer = ({data}) => {
  return (
    <div data-testid="rooms-container">
      {data?.map((item, i) => {
        return (
          <div key={i}>
            <h2>{item.name}</h2>
            <img src={item.image} alt="##" />
            <p>{item.description}</p>

            <Link to={`/dashboard/${item.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        )
      })}
    </div>
  ) 
};
