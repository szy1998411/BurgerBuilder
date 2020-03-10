import React from "react";
import styled from "@emotion/styled";

const ToggleDiv = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
`;

const innerDiv = styled.div`
  width: 90%;
  height: 3px;
  background-color: white;
`;

const DrawerToggle = props => (
  <ToggleDiv onClick={props.clicked}>
    <div
      style={{
        width: "90%",
        height: "3px",
        backgroundColor: "white"
      }}
    />
    <div
      style={{
        width: "90%",
        height: "3px",
        backgroundColor: "white"
      }}
    />
    <div
      style={{
        width: "90%",
        height: "3px",
        backgroundColor: "white"
      }}
    />
  </ToggleDiv>
);

export default DrawerToggle;
