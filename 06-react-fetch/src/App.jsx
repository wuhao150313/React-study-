import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import AppRoutes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          padding: "1rem",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            listStyle: "none",
            margin: 0,
            width: "80%",
            maxWidth: "800px",
            justifyContent: "center",
          }}
        >
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
              文章列表
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              style={{ textDecoration: "none", color: "#333" }}
            >
              新建文章
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              style={{ textDecoration: "none", color: "#333" }}
            >
              电影列表
            </Link>
          </li>
        </ul>
      </nav>
      <div style={{ marginTop: "80px" }}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
