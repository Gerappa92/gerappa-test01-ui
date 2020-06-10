import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import Order from "../Order/Order";

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Link to=''>Gerappa Pizza</Link>
        <Link to='/Menu'>Menu</Link>
        <Link to='/Order'>Order</Link>
        <Switch>
          <Route exact path='/Menu'>
            <Menu />
          </Route>
          <Route exact path='/Order'>
            <Order />
          </Route>
          <Route exact path=''>
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
