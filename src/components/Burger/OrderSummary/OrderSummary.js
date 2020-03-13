import React, { Component } from "react";
import Button from "../../UI/Button/Button";
class OrderSummary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(key => {
      return (
        <li key={key}>
          <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
          {this.props.ingredients[key]}
        </li>
      );
    });
    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>Delicious burger with following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.totalPrice.toFixed(2)} </strong>{" "}
        </p>
        <p>Continue to Checkout? </p>
        <Button clicked={this.props.purchaseCancelHandler}>Cancel</Button>
        <Button clicked={this.props.purchaseContinueHandler}>Continue</Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
