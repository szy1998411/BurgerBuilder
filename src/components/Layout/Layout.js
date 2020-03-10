import React, { Component, Fragment } from "react";
import styled from "@emotion/styled";
import ToolBar from "../../components/Navigation/ToolBar/ToolBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
const StyledMain = styled.main`
  margin-top: 72px;
`;

export default class Layout extends Component {
  sideDrawerCloseHandler() {
    this.setState({
      showSideDrawer: false
    });
  }

  sideDrawerToggleHandler() {
    this.setState(prevState => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      };
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false
    };
    this.sideDrawerCloseHandler = this.sideDrawerCloseHandler.bind(this);
    this.sideDrawerToggleHandler = this.sideDrawerToggleHandler.bind(this);
  }

  render() {
    return (
      <Fragment>
        <ToolBar togglehandler={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          close={this.sideDrawerCloseHandler}
        />
        <StyledMain>{this.props.children}</StyledMain>
      </Fragment>
    );
  }
}
