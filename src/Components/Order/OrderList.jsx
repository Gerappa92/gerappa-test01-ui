import React, { Component } from "react";

class OrderItem extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.pizza.name} - {this.props.client.name}
        </p>
        <p>
          {this.props.client.city} {this.props.client.street}
        </p>
      </div>
    );
  }
}

export default OrderItem;
