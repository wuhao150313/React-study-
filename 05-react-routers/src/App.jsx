import React from "react";

import { BrowserRouter } from "react-router-dom";
import AppRouters from "./routers";

import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  );
};

export default App;
