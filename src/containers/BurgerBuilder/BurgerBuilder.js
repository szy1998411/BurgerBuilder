import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES ={
    salad: 0.5,
    cheese: 0.4,
    meat: 1,
    bacon: 0.6,
}

export default class BurgerBuilder extends Component{
    constructor(props){
        super(props);
        this.state ={
            ingredients: {
                salad:0,
                bacon:0,
                cheese: 0,
                meat: 0,
            },
            totalPrice: 4,
        }
        this.addIngredientHandler = this.addIngredientHandler.bind(this);
        this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
    }

    addIngredientHandler(type){
        let oldIngredients = this.state.ingredients;
        let oldPrice = this.state.totalPrice;
        oldIngredients[type]+=1;
        oldPrice+=INGREDIENT_PRICES[type];
        this.setState({
            ingredients: oldIngredients,
            totalPrice: oldPrice,
        });
    }

    removeIngredientHandler(type){
        let oldIngredients = this.state.ingredients;
        let oldPrice = this.state.totalPrice;
        if(oldIngredients[type]>=1){
            oldIngredients[type]-=1;
            oldPrice-=INGREDIENT_PRICES[type];
        }
        this.setState({
            ingredients: oldIngredients,
            totalPrice: oldPrice,
        });
    }

    render() {
        let ingredient = this.state.ingredients;
        let disabled={};
        for(let key in ingredient){
            if(ingredient[key] <=0){
                disabled[key] = true;
            }else{
                disabled[key]=false;
            }
        }
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls price={this.state.totalPrice} addHandler={this.addIngredientHandler} removeHandler={this.removeIngredientHandler}
                disabled={disabled}/>
            </React.Fragment>
        );
    }
}