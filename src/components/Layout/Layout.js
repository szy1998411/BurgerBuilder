import React, { Component, Fragment } from "react";
import styled from "@emotion/styled";

const StyledMain = styled.main`
  margin-top: 16px;
`;

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div>Toolbar, SideDrawer, Backdrop </div>
        <StyledMain>{this.props.children}</StyledMain>
      </Fragment>
    );
  }
}
