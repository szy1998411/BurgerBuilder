import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from  '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
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
            purchasable: false,
            showPurchase: false,
        }
        this.addIngredientHandler = this.addIngredientHandler.bind(this);
        this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
        this.updatePurchaseState = this.updatePurchaseState.bind(this);
        this.purchaseHandler = this.purchaseHandler.bind(this);
    }

    purchaseHandler(){
        this.setState({
            showPurchase: true,
        });
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
        .map((key)=>{
            return ingredients[key];
        })
        .reduce((sum, el)=>{
            return sum+el;
        },0);
        this.setState({
            purchasable: sum>0,
        })
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
        this.updatePurchaseState(oldIngredients);
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
        this.updatePurchaseState(oldIngredients);
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
                <Modal showPurchase={this.state.showPurchase}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal> 
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls price={this.state.totalPrice} addHandler={this.addIngredientHandler} removeHandler={this.removeIngredientHandler}
                disabled={disabled} purchasable={this.state.purchasable} purchaseHandler={this.purchaseHandler}/>
            </React.Fragment>
        );
    }
}