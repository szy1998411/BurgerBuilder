import React from "react";
import styled from "@emotion/styled";
import burgerLogo from "../../assets/images/logo.png";

const LogoDiv = styled.div`
  background-color: white;
  padding: 8px;
  height: 80%;
  box-sizing: border-box;
  border-radius: 5px;
`;

const LogoImg = styled.img`
  height: 100%;
`;

const Logo = props => (
  <LogoDiv>
    <LogoImg src={burgerLogo} alt="Myburger" />
  </LogoDiv>
);

export default Logo;
