import React, { Component } from "react";

class CreatePizza extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "sos pomidorowy, ser, bazylia",
      price: 20,
      vegetarian: true,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value =
      target.name === "isVegetarian" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <form>
          <label>
            Name:{" "}
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Description:{" "}
            <input
              type='text'
              name='description'
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Price:{" "}
            <input
              type='number'
              name='price'
              value={this.state.price}
              disabled={true}
            />
          </label>
          <label>
            Vegetarian:{" "}
            <input
              type='checkbox'
              name='vegetarian'
              value={this.state.vegetarian}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </>
    );
  }
}

export default CreatePizza;
