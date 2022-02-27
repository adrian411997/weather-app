import React from "react";
import Logo from "../logo.png";

import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <div className="col-6 logo py-3">
      <div className="col-1 text-left ">
        <img src={Logo} width="60px" alt="Logo" />
      </div>
      <div className="col-4 text-left">
        <h4>Weather App</h4>
      </div>
    </div>
  );
}

export default Nav;
