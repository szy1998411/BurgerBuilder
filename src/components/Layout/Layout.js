import React, { Component, Fragment } from "react";
import styled from "@emotion/styled";
import ToolBar from "../../components/Navigation/ToolBar/ToolBar";

const StyledMain = styled.main`
  margin-top: 72px;
`;

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <ToolBar />
        <StyledMain>{this.props.children}</StyledMain>
      </Fragment>
    );
  }
}
