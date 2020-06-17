import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../../config.json";

class Pizza extends Component {
  deletePizza = () => {
    fetch(config.apiUrl + "pizza/" + this.props.pizza.id, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      if (this.props.refreshMenu) {
        this.props.refreshMenu();
      }
    });
  };

  render() {
    return (
      <div>
        <h4>{this.props.pizza.name} </h4>
        {this.props.pizza.vegetarian && (
          <p style={{ color: "green", paddingLeft: "5px" }}>V</p>
        )}
        <p>{this.props.pizza.price} zł</p>
        <div>
          <p>{this.props.pizza.description}</p>
        </div>
        <button>
          <Link to={`/Order/${this.props.pizza.name}`}>Order</Link>
        </button>
        <button style={{ color: "red" }} onClick={this.deletePizza}>
          Delete
        </button>
      </div>
    );
  }
}

export default Pizza;
