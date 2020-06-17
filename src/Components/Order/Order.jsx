import React, { Component } from "react";
import PizzaInputs from "../Menu/PizzaInputs/PizzaInputs";
import ClientInputs from "../Client/ClientInputs";
import OrderItem from "./OrderList";
import config from "../../config.json";

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pizza: {
        name: this.props.match.params.name,
        description: "",
        price: 20,
        vegetarian: false,
      },
      client: {
        name: "",
        phoneNumber: "",
        houseNumber: "",
        flatNumber: "",
        zipCode: "",
        city: "",
        street: "",
      },
      orders: [],
    };
  }

  componentDidMount() {
    fetch(config.apiUrl + "pizza/names/" + this.state.pizza.name)
      .then((response) => response.json())
      .then((pizza) => {
        if (pizza instanceof Array && pizza.length > 0) {
          let first = pizza[0];
          this.setState({ pizza: first });
        }
      });

    this.getOrders();
  }

  getOrders = () => {
    fetch(config.apiUrl + "order/all")
      .then((response) => response.json())
      .then((orders) => {
        if (orders instanceof Array && orders.length > 0) {
          this.setState({ orders });
        }
      });
  };

  handleClientInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;

    this.setState((prevState) => ({
      client: {
        ...prevState.client,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(config.apiUrl + "order/create", {
      method: "post",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json());
        }
        this.getOrders();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <>
        <div>
          <h1>Order</h1>
        </div>
        <div>
          <p>This is a place where you can order the pizza!</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <h3>Pizza {this.state.name}</h3>
          <div>
            <PizzaInputs
              handleInputChange={() => 0}
              pizza={this.state.pizza}></PizzaInputs>
          </div>
          <h3>Delivery information:</h3>
          <div>
            <ClientInputs
              handleInputChange={this.handleClientInputChange}
              client={this.state.client}
            />
          </div>
          <input type='submit' value='submit' />
        </form>
        {this.state.orders.map((order) => (
          <OrderItem pizza={order.pizza} client={order.client} />
        ))}
      </>
    );
  }
}

export default Order;
