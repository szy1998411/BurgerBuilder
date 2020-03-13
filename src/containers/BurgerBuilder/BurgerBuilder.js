import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from  '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-instance-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../components/withErrorHandler/withErrorHandler'

const INGREDIENT_PRICES ={
    salad: 0.5,
    cheese: 0.4,
    meat: 1,
    bacon: 0.6,
}

class BurgerBuilder extends Component{
    constructor(props){
        super(props);
        this.state ={
            ingredients: null,
            totalPrice: 4,
            purchasable: false,
            showPurchase: false,
            loading: false,
            error: null,
        }
        this.addIngredientHandler = this.addIngredientHandler.bind(this);
        this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
        this.updatePurchaseState = this.updatePurchaseState.bind(this);
        this.purchaseHandler = this.purchaseHandler.bind(this);
        this.purchaseCancelHandler = this.purchaseCancelHandler.bind(this);
        this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);
    }
    componentDidMount(){
        axios.get('https://react-my-burger-75d65.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({
                    ingredients: response.data
                });
            })
            .catch(
                (err) => {
                    this.setState({
                        error: true,
                    })
                }
            );
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

    purchaseCancelHandler(){
        this.setState({
            showPurchase: false,
        })
    }

    purchaseContinueHandler(){
        this.setState({
            loading: true,
        });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'test',
                address: {
                    street: 'test'
                },
                email: 'test',
            }
        }
        axios.post('/orders.json', order)
        .then( res =>{
            this.setState({
                loading: true,
                showPurchase: false,
            })
        })
        .catch(this.setState({
            loading: false,
            showPurchase: false,
        }));
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
        let orderSummary = null;
            
        let burger = this.state.error? <p> Ingredients cannot be loaded </p> : <Spinner />;
        if(this.state.ingredients){
            burger = (
                <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                    <BuildControls price={this.state.totalPrice} addHandler={this.addIngredientHandler} removeHandler={this.removeIngredientHandler}
                    disabled={disabled} purchasable={this.state.purchasable} purchaseHandler={this.purchaseHandler} />
                    </React.Fragment>
                    );
                    orderSummary = (<OrderSummary ingredients={this.state.ingredients}
                        purchaseCancelHandler={this.purchaseCancelHandler}
                        purchaseContinueHandler={this.purchaseContinueHandler}
                        totalPrice={this.state.totalPrice}/>);
        }

        if(this.state.loading){
            orderSummary = <Spinner />
        }
         
        return (
            <React.Fragment>
                <Modal showPurchase={this.state.showPurchase} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal> 
                {burger}
            </React.Fragment>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);