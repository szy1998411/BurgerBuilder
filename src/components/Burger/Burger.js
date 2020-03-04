import React, {Component} from 'react';
import styled from "@emotion/styled";
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
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
export default class Burger extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <BurgerDiv> 
                <BurgerIngredient type='bread-top' />
                <BurgerIngredient type='cheese' />
                <BurgerIngredient type='meat' />
                <BurgerIngredient type='bread-bottom' />
            </BurgerDiv>
        );
    }

}