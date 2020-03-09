import React from "react";
import styled from "@emotion/styled";
import Item from "../Items/Item";
const ItemsUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Items = () => (
  <ItemsUl>
    <Item link="/" active>
      Burger Builder
    </Item>
    <Item link="/">Checkout </Item>
  </ItemsUl>
);

export default Items;
