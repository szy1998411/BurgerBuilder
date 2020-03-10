import React, {Component} from "react";
import styled from "@emotion/styled";
import BackDrop from "../BackDrop/BackDrop";
const ModalDiv = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

class Modal extends Component{
    constructor(props){
        super(props);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.show !== this.props.show){
            return true;
        }
    }



    render(){
        return (
            <React.Fragment>
              <BackDrop show={this.props.showPurchase} clicked={this.props.modalClosed} />
              <ModalDiv
                style={{
                  transform: this.props.showPurchase
                    ? "translateY(0)"
                    : "translateY(-100vh)",
                  opacity: this.props.showPurchase ? "1" : "0"
                }}
              >
                {this.props.children}
              </ModalDiv>
            </React.Fragment>
          );
    }
}


export default Modal;
