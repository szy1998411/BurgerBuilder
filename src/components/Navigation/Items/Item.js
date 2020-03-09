import React from "react";
import styled from "@emotion/styled";

const ItemLi = styled.li`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;
`;

const ItemA = styled.a`
  color: white;
  text-decoration: none;
  height: 100%;
  padding: 16px 10px;
  border-bottom: 4px solid transparent;
  box-sizing: border-box;
  display: block;
  &:hover {
  }
  &:active {
  }
`;

const ItemActive = styled.a`
  color: white;
  text-decoration: none;
  height: 100%;
  padding: 16px 10px;
  border-bottom: 4px solid transparent;
  box-sizing: border-box;
  display: block;
  &:hover {
  }
  &:active {
  }
  background-color: #8f5c2c;
  border-bottom: 4px solid #40a4c8;
  display: block;
`;

const Item = props => {
  if (props.active) {
    return (
      <ItemLi>
        <ItemActive href={props.link}>{props.children}</ItemActive>
      </ItemLi>
    );
  } else {
    return (
      <ItemLi>
        <ItemA href={props.link}>{props.children}</ItemA>
      </ItemLi>
    );
  }
};

export default Item;
