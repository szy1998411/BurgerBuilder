import React from "react";
import styled from "@emotion/styled";

const ItemLi = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    align-items: center;
    width: auto;
  }
`;

const ItemA = styled.a`
  color: #8f5c2c;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;
  @media (min-width: 500px) {
    color: #40a4c8;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
  }
`;

const ItemActive = styled.a`
  color: #40a4c8;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;
  @media (min-width: 500px) {
    color: #40a4c8;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
  }
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
