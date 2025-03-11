import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import "../../app.css";

const Dashboard = () => {
  const location = useLocation();
  const { username, age } = location.state || {};

  return (
    <div>
      <h2>DashDoard</h2>
      <h3>Welcome:{username}</h3>
      <h3>Age: {age}</h3>
      <nav>
        <NavLink to="profile" activeClassName="active">
          profile
        </NavLink>
        <NavLink to="setting" activeClassName="active">
          setting
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
