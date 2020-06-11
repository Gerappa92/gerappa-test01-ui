import React, { Component } from "react";

class Pizza extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h4>
            {this.props.pizza.name}{" "}
            {this.props.pizza.vegetarian && (
              <p style={{ color: "green", paddingLeft: "5px" }}>V</p>
            )}
          </h4>
          <p>{this.props.pizza.price} zł</p>
        </div>
        <div>
          <p>{this.props.pizza.description}</p>
        </div>
      </div>
    );
  }
}

export default Pizza;
