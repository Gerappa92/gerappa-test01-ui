import React, { Component } from "react";

class PizzaInputs extends Component {
  render() {
    return (
      <>
        <label>
          Name:{" "}
          <input
            type='text'
            name='name'
            value={this.props.pizza.name}
            onChange={this.props.handleInputChange}
          />
        </label>
        <label>
          Description:{" "}
          <input
            type='text'
            name='description'
            value={this.props.pizza.description}
            onChange={this.props.handleInputChange}
          />
        </label>
        <label>
          Price:{" "}
          <input
            type='number'
            name='price'
            value={this.props.pizza.price}
            disabled={true}
          />
        </label>
        <label>
          Vegetarian:{" "}
          <input
            type='checkbox'
            name='vegetarian'
            checked={this.props.pizza.vegetarian}
            onChange={this.props.handleInputChange}
          />
        </label>
      </>
    );
  }
}

export default PizzaInputs;
