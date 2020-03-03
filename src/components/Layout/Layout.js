import React, {Component, Fragment } from "react"

export default class Layout extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <div>Toolbar, SideDrawer, Backdrop </div>
               <main>
                {this.props.children}
            </main>
            </Fragment>  
            
        );
    }
}