import React, { Component } from "react";

class ClientInputs extends Component {
  render() {
    return (
      <>
        <div>
          <label>
            Name:{" "}
            <input
              type='text'
              name='name'
              value={this.props.client.name}
              onChange={this.props.handleInputChange}
            />
          </label>
          <label>
            Phone number:{" "}
            <input
              type='text'
              name='phoneNumber'
              value={this.props.client.phoneNumber}
              onChange={this.props.handleInputChange}
            />
          </label>
          <label>
            House Number:{" "}
            <input
              type='text'
              name='houseNumber'
              value={this.props.client.houseNumber}
              onChange={this.props.handleInputChange}
            />
          </label>

          <label>
            Flat Number:{" "}
            <input
              type='text'
              name='flatNumber'
              value={this.props.client.flatNumber}
              onChange={this.props.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Zip code:{" "}
            <input
              type='text'
              name='zipCode'
              value={this.props.client.zipCode}
              onChange={this.props.handleInputChange}
            />
          </label>
          <label>
            City:{" "}
            <input
              type='text'
              name='city'
              value={this.props.client.city}
              onChange={this.props.handleInputChange}
            />
          </label>

          <label>
            Street:{" "}
            <input
              type='text'
              name='street'
              value={this.props.client.street}
              onChange={this.props.handleInputChange}
            />
          </label>
        </div>
      </>
    );
  }
}

export default ClientInputs;
