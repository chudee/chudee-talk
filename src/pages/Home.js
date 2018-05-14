import React, { Component } from "react";
import styled from "styled-components";

import { Wrapper } from "Components";
import { Route, Switch, Redirect } from "react-router-dom";
import { TabContainer, HeaderContainer } from "Containers";

import { Friends, Chatting, More } from "../templates";

const Contents = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <HeaderContainer />
        <TabContainer />
        <Contents>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/friends" />} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/chatting" component={Chatting} />
            <Route exact path="/more" component={More} />
          </Switch>
        </Contents>
      </Wrapper>
    );
  }
}

export default Home;
