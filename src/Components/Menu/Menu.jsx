import React, { Component } from "react";
import Pizza from "./Pizza/Pizza";
import CreatePizza from "./CreatePizza/CreatePizza";

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>
          <h1>Menu</h1>
        </div>
        <div>
          <h3>Here will be a list of pizza</h3>
          <p>
            {this.props.pizza.map((p) => (
              <Pizza pizza={p} />
            ))}
          </p>
        </div>
        <div>
          <h3>Here you will be able to create your own pizza</h3>
          <CreatePizza />
        </div>
      </>
    );
  }
}

export default Menu;
