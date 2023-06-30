import React from "react";
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div data-cy="welcome-text">
      {/* Add the message along with the link */}
      <div>
        Welcome to th Home Page, Click here to <Link to="/login">login</Link>
      </div>
    </div>
  );
};