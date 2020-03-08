import React from "react";
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
const Modal = props => {
  return (
    <React.Fragment>
      <BackDrop show={props.showPurchase} clicked={props.modalClosed} />
      <ModalDiv
        style={{
          transform: props.showPurchase
            ? "translateY(0)"
            : "translateY(-100vh)",
          opacity: props.showPurchase ? "1" : "0"
        }}
      >
        {props.children}
      </ModalDiv>
    </React.Fragment>
  );
};

export default Modal;
