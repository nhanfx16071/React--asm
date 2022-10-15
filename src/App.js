import React, { useState } from "react";
import Main from "./components/Main";
import { Navbar, NavbarBrand } from "reactstrap";
import { STAFFS } from "./shared/constants";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;
