import React, { Component } from "react";
import styled from "@emotion/styled";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import BuildControls from "../Burger/BuildControls/BuildControls";
const BurgerDiv = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scrolls;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
`;
export default class Burger extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let transformedIngredients = Object.keys(this.props.ingredients)
      .map(key => {
        return [...Array(this.props.ingredients[key])].map((_, i) => {
          return <BurgerIngredient key={key + i} type={key} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);
    if (transformedIngredients.length === 0) {
      transformedIngredients = <p> Please start to add ingredients </p>;
    }
    return (
      <BurgerDiv>
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </BurgerDiv>
    );
  }
}
