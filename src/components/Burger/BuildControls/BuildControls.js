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
      </BuildControlsDiv>
    );
  }
}
