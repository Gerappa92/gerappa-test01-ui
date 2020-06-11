import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import Order from "../Order/Order";

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: [],
    };
  }

  componentDidMount() {
    fetch("https://localhost:44301/api/pizza/all")
      .then((response) => response.json())
      .then((pizza) => this.setState({ pizza }))
      .catch((error) => console.error("Menu problem:", error));
  }

  render() {
    return (
      <Router>
        <Link to=''>Gerappa Pizza</Link>
        <Link to='/Menu'>Menu</Link>
        <Link to='/Order'>Order</Link>
        <Switch>
          <Route exact path='/Menu'>
            <Menu pizza={this.state.pizza} />
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
