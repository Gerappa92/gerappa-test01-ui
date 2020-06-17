import React, { Component } from "react";
import Pizza from "./Pizza/Pizza";
import PizzaInputs from "./PizzaInputs/PizzaInputs";
import config from "../../config.json";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMsg: "",
      pizza: {
        name: "",
        description: "sos pomidorowy, ser, bazylia",
        price: 20,
        vegetarian: true,
      },
    };
  }

  componentDidMount() {
    this.props.refreshMenu();
  }

  setError = (errorMsg) => {
    this.setState({ errorMsg });
  };

  handleInputName = (value) => {
    if (value.length > 3) {
      fetch(config.apiUrl + "pizza/names/" + value)
        .then((response) => response.json())
        .then((pizza) => {
          if (pizza instanceof Array && pizza.length > 0) {
            this.setError("Istnieje pizza o takiej nazwie");
          } else {
            this.setError("");
          }
        });
    }
  };

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value;
    if (name === "vegetarian") {
      value = target.checked;
    } else {
      value = target.value;
    }

    this.name === "name" && this.handleInputName(value);

    if (name === "description") {
      const addons = String(value).split(",").length;
      const newPrice = addons > 3 ? addons * 5 + 10 : 20;
      this.setState((prevState) => ({
        pizza: {
          ...prevState.pizza,
          price: newPrice,
        },
      }));
    }

    this.setState((prevState) => ({
      pizza: {
        ...prevState.pizza,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const refreshMenu = this.props.refreshMenu;

    if (this.state.errorMsg.length > 0) return;

    if (!this.state.pizza.description || !this.state.pizza.name) {
      this.setState({ errorMsg: "Uzupełnij pola!" });
      return;
    } else {
      this.setState({ errorMsg: "" });
    }

    fetch(config.apiUrl + "pizza/create", {
      method: "post",
      body: JSON.stringify(this.state.pizza),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json());
        }
        refreshMenu();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <>
        <div>
          <h1>Menu</h1>
        </div>
        <div>
          <p>The best pizza in the town</p>
          {this.props.pizza.map((p) => (
            <Pizza key={p.id} pizza={p} refreshMenu={this.refreshMenu} />
          ))}
        </div>
        <div>
          <h3>You can create your own pizza here! :)</h3>
          <form onSubmit={this.handleSubmit}>
            <PizzaInputs
              pizza={this.state.pizza}
              handleInputChange={this.handleInputChange}></PizzaInputs>
            {this.state.errorMsg.length === 0 && (
              <input type='submit' value='submit' />
            )}
          </form>
          <p style={{ color: "red" }}>{this.state.errorMsg}</p>
        </div>
      </>
    );
  }
}

export default Menu;
