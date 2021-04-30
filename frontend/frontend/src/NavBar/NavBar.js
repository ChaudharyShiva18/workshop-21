import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../Register";
import Login from "../Login";
import Menu from "./Menu";
import "./NavBar.css";
import Home from "../Home";
function NavBar() {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route path="/signin" component={Login} />
        <Route path="/home" component={Home} /> 
      </Switch>
    </>
  );
}

export default NavBar;
