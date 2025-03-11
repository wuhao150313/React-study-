import React from "react";
import { NavLink } from "react-router-dom";
import "../app.css";

const NavBar = ({ username }) => {
  console.log("NavBar 接收到的用户名:", username); // 🛠 调试代码
  return (
    <nav>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about?name=zhangsan&age=20"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/book/123"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Book
        </NavLink>
      </div>
      <div className="username">{username}</div>
    </nav>
  );
};

export default NavBar;
