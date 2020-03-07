import React from "react";

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
      <p>Continue to Checkout? </p>
    </React.Fragment>
  );
};

export default OrderSummary;
