import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"

export const SingleRoom = () => {

  const [singledata, setSingleData] = useState({})
  const [toggle, setToggle] = useState(true)
  let {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/rooms/${id}`)
    .then((res) => res.json())
    .then((json) => setSingleData(json))
  }, [toggle])

  console.log(toggle)

  return (
    <div data-testid="SingleRoom">
      <div data-testid="room-info">
        <h2>{singledata.name}</h2>
        <img src={singledata.image} alt="" />
        <p>{singledata.description}</p>
        <h3>{singledata.bathroom}</h3>
        <h3>Capacity : {singledata.capacity}</h3>
        <h3>Size : {singledata.size}</h3>
        <h3>Price : {singledata.price}</h3>

        <h3>Amenities</h3>

        <ul>
          {singledata.amenities?.map((item) => {
            return (
              <>
                <li>{item}</li>
              </>
            )
          })}
        </ul>
        {toggle ? (
          <button onClick={() => setToggle(false)}>Book Now</button>
        ) : (
          <h3>
            Booking Successful goto 
            <Link to="/dashboard">Dashboard</Link>
          </h3>
        )}
      </div>
    </div>
  )
};
