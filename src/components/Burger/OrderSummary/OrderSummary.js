import React from "react";
import Button from "../../UI/Button/Button";
const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
        {props.ingredients[key]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>Delicious burger with following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.totalPrice.toFixed(2)} </strong>{" "}
      </p>
      <p>Continue to Checkout? </p>
      <Button clicked={props.purchaseCancelHandler}>Cancel</Button>
      <Button clicked={props.purchaseContinueHandler}>Continue</Button>
    </React.Fragment>
  );
};

export default OrderSummary;
