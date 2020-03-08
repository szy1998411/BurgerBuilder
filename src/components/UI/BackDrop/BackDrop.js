import React from "react";
import styled from "@emotion/styled";

const BakcDropDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const BackDrop = props =>
  props.show ? <BakcDropDiv onClick={props.clicked}> </BakcDropDiv> : null;

export default BackDrop;
