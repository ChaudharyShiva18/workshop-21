import React from "react";
import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <div className="NavLinks">
      <NavLink exact to="/register" activeStyle={{ color: "red" }}>
        Register
      </NavLink>
      <div style={{ color: "black", paddingLeft: 600, fontWeight: "bold" }}>
        WELCOME
      </div>
      <NavLink
        style={{ paddingLeft: 600 }}
        exact
        to="/signin"
        activeStyle={{ color: "red" }}
      >
        Login
      </NavLink>
    </div>
  );
}

export default Menu;
