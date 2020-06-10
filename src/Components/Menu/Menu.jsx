import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pizza: {},
    };
  }

  componentDidMount() {
    fetch(
      "https://gerappa-test01-api.azurewebsites.net/api/pizza/a9a462bb-8b18-46f6-bce9-43b082cef3d1"
    )
      .then((response) => response.json())
      .then((pizza) => this.setState({ pizza }))
      .catch((error) => console.error("Menu problem:", error));
  }

  render() {
    return (
      <>
        <div>
          <h1>Menu</h1>
        </div>
        <div>
          <h3>Here will be a list of pizza</h3>
          <p>{this.state.pizza.name}</p>
        </div>
        <div>
          <h3>Here you will be able to create your own pizza</h3>
        </div>
      </>
    );
  }
}

export default Menu;
