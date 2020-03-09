import React from "react";
import styled from "@emotion/styled";
import Logo from "../../Logo/Logo";
import Items from "../Items/Items";
const ToolBarHeader = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

const LogoDiv = styled.div`
  height: 80%;
`;

const ToolBarNav = styled.nav`
  height: 100%;
  @media (max-width: 499px) {
    display: none;
  }
`;

const ToolBar = props => (
  <ToolBarHeader>
    <div> Menu </div>
    <LogoDiv>
      <Logo />
    </LogoDiv>
    <ToolBarNav>
      <Items />
    </ToolBarNav>
  </ToolBarHeader>
);

export default ToolBar;
