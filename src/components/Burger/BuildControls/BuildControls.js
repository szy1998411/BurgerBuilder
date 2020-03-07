import React, { Component } from "react";
import styled from "@emotion/styled";
import BuildControl from "./BuildControl/BuildControl";

const BuildControlsDiv = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;

const OrderButton = styled.button`
  background-color: #dad735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;
  &:active {
    background-color: #a0db41;
    border: 1px solid #966909;
    color: #966909;
  }
  &:hover {
    background-color: #a0db41;
    border: 1px solid #966909;
    color: #966909;
  }

  &:disabled {
    background-color: #c7c6c6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
  }

  &not(:disabled) {
    animation: enable 0.3s linear;
  }

  @keyframes enable {
    0% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default class BuildControls extends Component {
  render() {
    console.log("   ", this.props);
    const controls = [
      { label: "Salad", type: "salad" },
      { label: "Bacon", type: "bacon" },
      { label: "Cheese", type: "cheese" },
      { label: "Meat", type: "meat" }
    ];
    return (
      <BuildControlsDiv>
        <p>
          {" "}
          <strong>Current Price: {this.props.price.toFixed(2)}</strong>{" "}
        </p>
        {controls.map(ctrl => {
          return (
            <BuildControl
              disabled={this.props.disabled[ctrl.type]}
              key={ctrl.label}
              type={ctrl.type}
              label={ctrl.label}
              addHandler={this.props.addHandler}
              removeHandler={this.props.removeHandler}
            />
          );
        })}
        <OrderButton
          disabled={!this.props.purchasable}
          onClick={this.props.purchaseHandler}
        >
          Order Now
        </OrderButton>
      </BuildControlsDiv>
    );
  }
}
