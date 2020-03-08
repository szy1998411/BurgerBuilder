import React from "react";
import styled from "@emotion/styled";

const StyledButtonSuccess = styled.button`
  background-color: transparent;
  border: none;
  color: #5c9210;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`;

const StyledButtonDanger = styled.button`
  background-color: transparent;
  border: none;
  color: #944317;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`;

const Button = props => {
  if (props.type === "Danger") {
    return (
      <StyledButtonDanger onClick={props.clicked}>
        {props.children}{" "}
      </StyledButtonDanger>
    );
  } else {
    return (
      <StyledButtonSuccess onClick={props.clicked}>
        {props.children}{" "}
      </StyledButtonSuccess>
    );
  }
};

export default Button;
